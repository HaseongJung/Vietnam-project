import type { Image } from "@prisma/client";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";

// Models

// Components
import { ActionButtons } from "~/components/ActionButtons";
import { FormInput } from "~/components/FormInput";
import {
  createImage,
  deleteImage,
  getImageById,
  updateImage,
} from "~/models/images.server";
import { getRestaurantsById } from "~/models/restaurants.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.id, "id not found");
  const image = await getImageById(params.id);

  if (params.id !== "new" && !image) {
    throw new Response("Not Found", { status: 404 });
  }

  if (params.id === "new") {
    return json({ image });
  }

  return json({
    image,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.id, "id not found");
  invariant(params.restId, "id not found");

  const restaurant = await getRestaurantsById(params.restId);

  const formData = await request.formData();
  const action = formData.get("_action");
  const url = formData.get("url");

  const defaultErrors = {
    url: null,
  };

  if (typeof url !== "string" || url.length === 0) {
    return json(
      { errors: { ...defaultErrors, type: "Symbol is required" } },
      { status: 400 }
    );
  }

  // Handle action
  if (action === "delete") {
    const currentImage = await getImageById(params.id);

    if (currentImage) {
      await deleteImage(params.id);
    }

    return redirect(`/admin/images/${restaurant?.id}`);
  }

  // Prepare data
  let imageSubmit;
  const dataSubmit = {
    url,
    restaurantId: restaurant?.id,
  };

  if (params.id === "new") {
    imageSubmit = await createImage(dataSubmit as Image);
  } else {
    imageSubmit = await updateImage({
      ...dataSubmit,
      id: params.id,
    });
  }

  return redirect(`/admin/images/${restaurant?.id}/${imageSubmit.id}`);
};

export default function AdminSymbolDetailPage() {
  const { image } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !image;

  return (
    <div className="flex min-h-full flex-col max-h-[100%] p-4">
      <Form method="post" className="w-full space-y-6" key={image?.id ?? "new"}>
        <div className="">
          {/* Left Column */}
          <div className="">
            {/* Name */}
            <FormInput
              name="url"
              label="Ảnh"
              placeholder="link ảnh"
              defaultValue={image?.url}
            />
          </div>
        </div>
        <ActionButtons isNewItem={isNewItem} isSubmitting={isSubmitting} />
      </Form>
    </div>
  );
}
