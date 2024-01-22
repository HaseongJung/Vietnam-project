import type { Restaurant } from "@prisma/client";
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

// Models

// Components
import { ActionButtons } from "~/components/ActionButtons";
import { FormInput } from "~/components/FormInput";
import {
  countProviderById,
  createProvider,
} from "~/models/provider.server";
import {
  createRestaurant,
  deleteRestaurantById,
  getRestaurantsById,
  updateRestaurant,
} from "~/models/restaurants.server";
import { getTypeList } from "~/models/type.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.id, "id not found");
  const restaurant = await getRestaurantsById(params.id);

  if (params.id !== "new" && !restaurant) {
    throw new Response("Not Found", { status: 404 });
  }

  const typeList = await getTypeList();

  if (params.id === "new") {
    return json({ typeList, restaurant });
  }

  return json({
    restaurant,
    typeList,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.id, "id not found");

  const formData = await request.formData();
  const action = formData.get("_action");
  const nameVie = formData.get("nameVie");
  const nameKor = formData.get("nameKor");
  const nameEng = formData.get("nameEng");
  const addressVie = formData.get("addressVie");
  const addressKor = formData.get("addressKor");
  const addressEng = formData.get("addressEng");
  const typeId = formData.get("typeId");
  const countryId = formData.get("countryId");
  const rating = formData.get("rating")?.toString() ?? null;
  const openingTime = formData.get("openingTime")?.toString() ?? null;
  const closingTime = formData.get("closingTime")?.toString() ?? null;
  const direct = formData.get("direct")?.toString() ?? null;
  const priceLow = formData.get("priceLow")?.toString() ?? null;
  const priceHigh = formData.get("priceHigh")?.toString() ?? null;
  const descriptionVie = formData.get("descriptionVie")?.toString() ?? null;
  const descriptionKor = formData.get("descriptionKor")?.toString() ?? null;
  const descriptionEng = formData.get("descriptionEng")?.toString() ?? null;

  const defaultErrors = {
    nameVie: null,
    nameKor: null,
    nameEng: null,
    addressVie: null,
    addressKor: null,
    addressEng: null,
    typeId: null,
    countryId: null,
  };

  if (typeof nameVie !== "string" || nameVie.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameVie: "Name is required" } },
      { status: 400 }
    );
  }
  if (typeof nameKor !== "string" || nameKor.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameKor: "Name is required" } },
      { status: 400 }
    );
  }
  if (typeof nameEng !== "string" || nameEng.length === 0) {
    return json(
      { errors: { ...defaultErrors, nameEng: "Name is required" } },
      { status: 400 }
    );
  }

  if (typeof addressVie !== "string" || addressVie.length === 0) {
    return json(
      { errors: { ...defaultErrors, addressVie: "address is required" } },
      { status: 400 }
    );
  }
  if (typeof addressKor !== "string" || addressKor.length === 0) {
    return json(
      { errors: { ...defaultErrors, addressKor: "address is required" } },
      { status: 400 }
    );
  }
  if (typeof addressEng !== "string" || addressEng.length === 0) {
    return json(
      { errors: { ...defaultErrors, addressEng: "Name is required" } },
      { status: 400 }
    );
  }

  if (typeof typeId !== "string" || typeId.length === 0) {
    return json(
      { errors: { ...defaultErrors, type: "Symbol is required" } },
      { status: 400 }
    );
  }
  if (typeof countryId !== "string" || countryId.length === 0) {
    return json(
      { errors: { ...defaultErrors, country: "Sector is required" } },
      { status: 400 }
    );
  }

  if ((await countProviderById({ countryId, typeId })) === 0) {
    await createProvider({ countryId, typeId });
  }

  // Handle action
  if (action === "delete") {
    const currentRestaurant = await getRestaurantsById(params.id);

    if (currentRestaurant) {
      await deleteRestaurantById(params.id);
    }

    return redirect("/admin/restaurant");
  }

  // Prepare data
  let restaurantSubmit;
  const dataSubmit = {
    nameKor,
    nameVie,
    nameEng,
    addressKor,
    addressVie,
    addressEng,
    typeId,
    countryId,
    descriptionVie,
    descriptionEng,
    descriptionKor,
    rating: Number(rating),
    openingTime,
    closingTime,
    direct,
    priceLow: Number(priceLow),
    priceHigh: Number(priceHigh),
  };

  if (params.id === "new") {
    restaurantSubmit = await createRestaurant(dataSubmit as Restaurant);
  } else {
    restaurantSubmit = await updateRestaurant({
      ...(dataSubmit as Restaurant),
      id: params.id,
    });
  }

  return redirect(`/admin/restaurant/${restaurantSubmit.id}`);
};

export default function AdminSymbolDetailPage() {
  const { typeList, restaurant } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !restaurant;

  const nameVieRef = useRef<HTMLInputElement>(null);
  const nameKorRef = useRef<HTMLInputElement>(null);
  const nameEngRef = useRef<HTMLInputElement>(null);
  const addressVieRef = useRef<HTMLInputElement>(null);
  const addressKorRef = useRef<HTMLInputElement>(null);
  const addressEngRef = useRef<HTMLInputElement>(null);
  const typeIdRef = useRef<HTMLSelectElement>(null);
  const countryIdRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (actionData?.errors?.nameVie) {
      nameVieRef.current?.focus();
    } else if (actionData?.errors?.nameKor) {
      nameKorRef.current?.focus();
    } else if (actionData?.errors?.nameEng) {
      nameEngRef.current?.focus();
    } else if (actionData?.errors?.addressVie) {
      addressVieRef.current?.focus();
    } else if (actionData?.errors?.addressKor) {
      addressKorRef.current?.focus();
    } else if (actionData?.errors?.addressEng) {
      addressEngRef.current?.focus();
    } else if (actionData?.errors?.typeId) {
      typeIdRef.current?.focus();
    } else if (actionData?.errors?.countryId) {
      countryIdRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col max-h-[100%]">
      <Form
        method="post"
        className="w-full space-y-6"
        key={restaurant?.id ?? "new"}
      >
        <div className="">
          {/* Left Column */}
          <div className="">
            {/* Name */}
            <FormInput
              name="nameVie"
              ref={nameVieRef}
              required={true}
              label="Tên Việt Nam"
              placeholder="Mỳ Quảng Bà Mua"
              defaultValue={restaurant?.nameVie}
              error={actionData?.errors?.nameVie}
            />
            <FormInput
              name="nameKor"
              ref={nameKorRef}
              required={true}
              label="Tên Hàn Quốc"
              placeholder="Quang Ba Mua Shop 누들"
              defaultValue={restaurant?.nameKor}
              error={actionData?.errors?.nameKor}
            />
            <FormInput
              name="nameEng"
              ref={nameEngRef}
              required={true}
              label="Tên Tiếng Anh"
              placeholder="Quang Ba Mua Shop Noodles"
              defaultValue={restaurant?.nameEng}
              error={actionData?.errors?.nameEng}
            />
            <div className="">
              {/* Sector */}
              <div>
                <label
                  htmlFor="sectorId"
                  className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                >
                  Quốc Gia
                </label>
                <div className="mt-1">
                  <select
                    ref={countryIdRef}
                    defaultValue={restaurant?.countryId}
                    id="countryId"
                    required
                    name="countryId"
                    aria-invalid={
                      actionData?.errors?.countryId ? true : undefined
                    }
                    aria-describedby="sectorId-error"
                    className="w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" label="" />
                    <option value="1" label="Việt Nam" />
                    <option value="2" label="Hàn Quốc" />
                  </select>
                  {actionData?.errors?.countryId && (
                    <div className="pt-1 text-red-700" id="countryId-error">
                      {actionData.errors.countryId}
                    </div>
                  )}
                </div>
              </div>

              {/* Stock Provider */}
              <div>
                <label
                  htmlFor="provider"
                  className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
                >
                  Loại Nhà Hàng
                </label>
                <div className="mt-1">
                  <select
                    ref={typeIdRef}
                    defaultValue={restaurant?.typeId}
                    id="typeId"
                    required
                    name="typeId"
                    aria-invalid={actionData?.errors?.typeId ? true : undefined}
                    aria-describedby="provider-error"
                    className="w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="" label="" />
                    {typeList.map((type) => (
                      <option
                        key={type.typeId}
                        value={type.typeId}
                        label={type.nameVie}
                      />
                    ))}
                  </select>
                  {actionData?.errors?.typeId && (
                    <div className="pt-1 text-red-700" id="typeId-error">
                      {actionData.errors.typeId}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="">
            {/* English Name */}
            <FormInput
              name="addressVie"
              ref={addressVieRef}
              required={true}
              label="Địa chỉ tiếng Việt"
              placeholder="19 Trần Bình Trọng"
              defaultValue={restaurant?.addressVie?.toString()}
            />
            <FormInput
              name="addressKor"
              ref={addressKorRef}
              required={true}
              label="Địa chỉ tiếng Hàn"
              placeholder="19 Tran Binh Trong"
              defaultValue={restaurant?.addressKor?.toString()}
            />
            <FormInput
              name="addressEng"
              ref={addressEngRef}
              required={true}
              label="Địa chỉ tiếng Anh"
              placeholder="19 Tran Binh Trong"
              defaultValue={restaurant?.addressEng?.toString()}
            />
          </div>
          <div className="">
            {/* English Name */}
            <FormInput
              name="rating"
              label="rating"
              placeholder="0"
              defaultValue={restaurant?.rating?.toString()}
            />
            <FormInput
              name="openingTime"
              label="Mở cửa"
              placeholder="0-24"
              defaultValue={restaurant?.openingTime?.toString()}
            />
            <FormInput
              name="closingTime"
              label="Đóng cửa"
              placeholder="0-24"
              defaultValue={restaurant?.closingTime?.toString()}
            />
          </div>
          <div className="">
            {/* English Name */}
            <FormInput
              name="direct"
              label="Đường đi"
              placeholder=""
              defaultValue={restaurant?.direct?.toString()}
            />
            <FormInput
              name="priceLow"
              label="Giá thấp nhất"
              placeholder="24"
              defaultValue={restaurant?.priceLow?.toString()}
            />
            <FormInput
              name="priceHigh"
              label="Giá Cao nhất"
              placeholder="48"
              defaultValue={restaurant?.priceHigh?.toString()}
            />
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
          >
            Mô tả Tiếng Việt
          </label>
          <div className="mt-1">
            <textarea
              defaultValue={restaurant?.descriptionVie?.toString()}
              id="descriptionVie"
              rows={5}
              placeholder="Giới thiệu tiếng Việt"
              name="descriptionVie"
              className="w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
          >
            Mô tả tiếng Hàn
          </label>
          <div className="mt-1">
            <textarea
              defaultValue={restaurant?.descriptionKor?.toString()}
              id="descriptionKor"
              rows={5}
              placeholder="Giới thiệu tiếng Hàn"
              name="descriptionKor"
              className="w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
          >
            Mô tả tiếng Anh
          </label>
          <div className="mt-1">
            <textarea
              defaultValue={restaurant?.descriptionEng?.toString()}
              id="descriptionEng"
              rows={5}
              placeholder="Giới thiệu tiếng Anh"
              name="descriptionEng"
              className="w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>

        <ActionButtons isNewItem={isNewItem} isSubmitting={isSubmitting} />
      </Form>
    </div>
  );
}
