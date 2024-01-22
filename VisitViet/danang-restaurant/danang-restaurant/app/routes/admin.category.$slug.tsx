import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";

// Components
import { ActionButtons } from "~/components/ActionButtons";
import { FormInput } from "~/components/FormInput";
import {
  createType,
  deleteTypeBySlug,
  getTypeById,
  getTypeBySlug,
  updateType,
} from "~/models/type.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.slug, "id not found");

  if (params.slug === "new") {
    return json({ type: null });
  }

  const type = await getTypeBySlug(params.slug);

  if (!type) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({
    type,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.slug, "id not found");

  const formData = await request.formData();
  const action = formData.get("_action");
  const typeId = formData.get("typeId");
  const slug = formData.get("slug");
  const nameEng = formData.get("nameEng")?.toString();
  const nameKor = formData.get("nameKor")?.toString();
  const nameVie = formData.get("nameVie")?.toString();

  const defaultErrors = {
    typeId: null,
    slug: null,
    nameEng: null,
    nameKor: null,
    nameVie: null,
  };

  if (typeof typeId !== "string" || typeId.length === 0) {
    return json(
      { errors: { ...defaultErrors, typeId: "TypeId is required" } },
      { status: 400 }
    );
  }

  if (typeof slug !== "string" || slug.length === 0) {
    return json(
      { errors: { ...defaultErrors, slug: "Slug is required" } },
      { status: 400 }
    );
  }

  if (typeof nameEng !== "string" || nameEng.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameEng: "Name Eng is required" } },
      { status: 400 }
    );
  }

  if (typeof nameKor !== "string" || nameKor.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameKor: "Name Kor is required" } },
      { status: 400 }
    );
  }

  if (typeof nameVie !== "string" || nameVie.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameVie: "Name Vie is required" } },
      { status: 400 }
    );
  }

  // Handle action
  if (action === "delete") {
    await deleteTypeBySlug(params.slug);
    return redirect("/admin/category");
  }

  // Prepare data
  const dataSubmit = {
    typeId,
    slug,
    nameEng,
    nameKor,
    nameVie,
  };

  if (params.slug === "new") {
    const existingtypeSlug = await getTypeBySlug(slug);

    if (existingtypeSlug) {
      return json(
        {
          errors: {
            ...defaultErrors,
            slug: "A Type already exists with this slug",
          },
        },
        { status: 400 }
      );
    }

    const existingtypeId = await getTypeById(typeId);

    if (existingtypeId) {
      return json(
        {
          errors: {
            ...defaultErrors,
            typeId: "A Type ID already exists",
          },
        },
        { status: 400 }
      );
    }

    await createType(dataSubmit);
  } else {
    console.log(dataSubmit);

    await updateType({
      ...dataSubmit,
      typeId: typeId,
    });
  }

  return redirect(`/admin/category`);
};

export default function AdmintypeDetailPage() {
  const { type } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !type;

  const idRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const nameEngRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.typeId) {
      idRef.current?.focus();
    } else if (actionData?.errors?.slug) {
      slugRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="min-h-full flex flex-col">
      <Form
        method="post"
        className="w-full space-y-6"
        key={type?.slug ?? "new"}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="grid gap-4 content-start">
            {/* Name */}
            <FormInput
              name="typeId"
              ref={idRef}
              required={true}
              label="Type ID"
              placeholder="Type ID"
              defaultValue={type?.typeId}
              error={actionData?.errors?.typeId}
            />

            <div className="grid grid-cols-[1fr_60px] gap-2">
              {/* Slug */}
              <FormInput
                name="slug"
                ref={slugRef}
                required={true}
                label="Category Slug"
                placeholder="Category Slug"
                defaultValue={type?.slug}
                error={actionData?.errors?.slug}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-4 content-start">
            {/* SEO Title */}
            <FormInput
              name="nameEng"
              label="Name English"
              required={true}
              placeholder="Type name English"
              ref={nameEngRef}
              defaultValue={type?.nameEng?.toString()}
            />
            {/* SEO Title */}
            <FormInput
              name="nameKor"
              label="Name Korea"
              required={true}
              placeholder="Type name of Korea"
              ref={nameEngRef}
              defaultValue={type?.nameKor?.toString()}
            />
            {/* SEO Title */}
            <FormInput
              name="nameVie"
              label="Name VietNam"
              required={true}
              placeholder="Type name of VietNam"
              ref={nameEngRef}
              defaultValue={type?.nameVie?.toString()}
            />
          </div>
        </div>

        <ActionButtons isNewItem={isNewItem} isSubmitting={isSubmitting} />
      </Form>
    </div>
  );
}
