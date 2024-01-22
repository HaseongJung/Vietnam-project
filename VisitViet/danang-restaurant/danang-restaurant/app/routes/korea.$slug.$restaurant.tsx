import { json, redirect } from "@remix-run/node";
import type { LoaderArgs, ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import invariant from "tiny-invariant";
import SliderImages from "~/components/SlideImages";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { ClockIcon } from "~/icons/ClockIcon";
import { HeartIcon, HeartIconUsed } from "~/icons/HeartIcon";
import { MapPinIcon } from "~/icons/MapPinIcon";
import { MoneyIcon } from "~/icons/MoneyIcon";
import {
  addToFavorites,
  checkRestaurantIsFavorited,
  checkRestaurantIsRatings,
  removeFromFavorites,
} from "~/models/favorites.server";
import {
  getRestaurantsById,
  getRestaurantsList,
} from "~/models/restaurants.server";
import {
  getValueRating,
  addRatingValue,
  updateRatingValue,
} from "~/models/rating.server";

import { getUser } from "~/session.server";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { RestaurantInfor } from "~/components/RestaurantInfor";
import { createRestaurantSlug } from "~/helpers/slug";

export const loader = async ({ request, params }: LoaderArgs) => {
  const user = await getUser(request);

  const slug = params.restaurant;

  let restaurant;
  if (slug?.length) {
    restaurant = await getRestaurantsById(slug);
  } else {
    throw new Response("", { status: 404 });
  }

  if (!restaurant) {
    return redirect("/404");
  }
  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  const restaurants = await getRestaurantsList();

  let isFavorited;
  let isRating;
  let value_rating;
  if (user) {
    // Check if the restaurant is already favorited by the user
    isFavorited = await checkRestaurantIsFavorited({
      userId: user.id,
      restaurantId: restaurant.id,
    });
    isRating = await checkRestaurantIsRatings({
      userId: user.id,
      restaurantId: restaurant.id,
    });
    // take rating value by user and restaurant from rating table
    value_rating = await getValueRating(user.id, restaurant.id);
  }

  return json({
    user,
    language,
    restaurant,
    isFavorited,
    isRating,
    value_rating,
    restaurants,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.restaurant, "id not found");
  const user = await getUser(request);

  const slug = params.restaurant;
  const restaurant = await getRestaurantsById(slug);
  if (!restaurant) {
    return redirect("/404");
  }

  const formData = await request.formData();
  const rating = formData.get("rating");
  const favorite = formData.get("favorite");

  if (!user) return redirect("/login");

  if (favorite === "on") {
    const isFavorite = await checkRestaurantIsFavorited({
      userId: user.id,
      restaurantId: restaurant.id,
    });
    if (!isFavorite) {
      await addToFavorites({ userId: user.id, restaurantId: restaurant.id });
    }
  } else {
    await removeFromFavorites({
      userId: user.id,
      restaurantId: restaurant.id,
    });
  }

  const value_rating = await getValueRating(user.id, restaurant.id);

  if (!value_rating && Number(rating) !== 0) {
    await addRatingValue(user.id, restaurant.id, Number(rating) | 0);
    return json({});
  }

  if (value_rating && Number(rating) !== 0) {
    await updateRatingValue(user.id, restaurant.id, Number(rating) | 0);
    return json({});
  }
  return json({});
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  { title: `${data?.restaurant[`name${data.language}`]}` },
  {
    name: "description",
    content: "Giới thiệu về nhà hàng Hàn Quốc tại Đà Nẵng",
  },
];

export default function RestaurantKoreaPage() {
  const { language, restaurant, isFavorited, value_rating, restaurants } =
    useLoaderData<typeof loader>();
  const submit = useSubmit();

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/content-based/${restaurant.nameVie}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [restaurant.nameVie]);
  console.log("->>>>>>>>>>>>>>>>>>>>>>>>>", data);

  const predictRes = restaurants.filter((item) =>
    data?.includes(item?.nameVie)
  );

  const [rating, setRating] = useState<number>(value_rating || 0);
  const [hover, setHover] = useState<any>();

  function handleChang(event: React.FormEvent<HTMLFormElement>) {
    submit(event.currentTarget, { replace: true });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const dateTimeInput = document.getElementById(
      "dateTime"
    ) as HTMLInputElement;

    if (!dateTimeInput.value) {
      event.preventDefault(); // Ngăn không cho submit form
      dateTimeInput.focus(); // Focus lại vào ô input
      alert(`${lang.timeRequired[`timeRequired${language}`]}`);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:w-[70%] lg:pl-6 lg:overflow-y-auto">
      <Form method="post" onChange={handleChang}>
        <input
          type="checkbox"
          name="favorite"
          defaultChecked={Boolean(isFavorited)}
          className="absolute right-4 top-4 z-20 w-5 h-5 opacity-0 cursor-pointer"
        />
        <span className="absolute right-4 top-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          {isFavorited ? <HeartIconUsed /> : <HeartIcon />}
        </span>
        <div className="h-[200px] md:h-[240px] lg:h-[320px]">
          <SliderImages images={restaurant.images} />
        </div>
        <div className="p-3 rounded-2xl">
          <div className="flex items-center mb-2">
            <img
              src="https://www.svgrepo.com/show/2732/restaurant.svg"
              alt="Restaurant"
              className="w-6 h-6"
            />
            <div className="ml-2 flex-1">
              <p className="uppercase text-xs font-bold text-gray-600">{`${
                lang.restaurant[`restaurant${language}`]
              }`}</p>
              <h3 className="font-bold">{restaurant[`name${language}`]}</h3>
            </div>
            <span className="flex items-center text-sm">
              <div className="flex items-center relative">
                <input
                  name="rating"
                  type="text"
                  className="invisible"
                  value={rating}
                />

                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <>
                      <label key={index}>
                        <button>
                          <FaStar
                            className={`star ${
                              ratingValue <= (hover || rating)
                                ? "text-orange-500"
                                : "text-gray-500"
                            } hover:text-orange-500`}
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            onClick={(e: any) => {
                              setRating(ratingValue);
                            }}
                          />
                        </button>
                      </label>
                    </>
                  );
                })}
              </div>
            </span>
          </div>
          <span className="flex items-center text-sm mb-1">
            <span className="text-[#1ec28b] mr-1">
              <MapPinIcon />
            </span>
            <span>{restaurant[`address${language}`]}</span>
          </span>
          <span className="flex items-center text-sm mb-1 font-semibold text-[13px]">
            <span className="mr-1">
              <MoneyIcon />
            </span>
            <span>{`${
              restaurant.priceLow ? `₩${restaurant.priceLow}` : ""
            } ${
              restaurant.priceHigh ? `- ₩${restaurant.priceHigh}` : ""
            }`}</span>
          </span>
          <span className="flex items-center text-xs font-semibold">
            <span className="text-[#1ec28b] mr-1">
              <ClockIcon />
            </span>
            <span>{`${lang.open[`open${language}`]}: ${
              restaurant.openingTime
            } - ${lang.close[`close${language}`]}: ${
              restaurant.closingTime
            }`}</span>
          </span>
        </div>
      </Form>

      <div className="py-4 px-2 bg-white rounded-xl md:inline-block">
        <h4 className="font-semibold text-sm text-gray-600 mb-1">
          {lang.addSchedule[`addSchedule${language}`]}
        </h4>
        <Form
          method="post"
          action={`/schedule?new=${restaurant.id}`}
          onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              className="inline-flex border text-sm p-2 rounded-xl outline-none focus:border-[#1ec28b]"
            />
            <button
              type="submit"
              className="bg-[#1ec28b] rounded-xl ml-2 text-white text-xs uppercase font-bold py-2 px-4 hover:bg-[#0aae77]"
            >
              {lang.save[`save${language}`]}
            </button>
          </div>
        </Form>
      </div>

      <div className="p-2">
        <div className="pt-2 border-t">
          <h4 className="font-bold mb-1">
            {lang.description[`description${language}`]}
          </h4>
          <p className="text-[15px] text-justify">
            {restaurant[`description${language}`]}
          </p>
        </div>
        <a
          href={restaurant.direct || ""}
          title={restaurant[`name${language}`] || ""}
          rel="noreferrer"
          target="_blank"
          className="block p-3 my-4 text-center rounded-2xl bg-[#1ec28b] text-white uppercase font-bold lg:w-[40%] lg:ml-auto"
        >
          {lang.direction[`direction${language}`]}
        </a>
      </div>

      {predictRes?.length > 0 && (
        <div>
          <h4 className="text-2xl font-semibold">Related restaurants</h4>
          <div className="grid grid-cols-2 gap-4">
            {predictRes?.map((restaurant) => (
              <RestaurantInfor
                key={restaurant.id}
                link={createRestaurantSlug({
                  countrySlug: restaurant?.countryType?.country?.slug,
                  typeSlug: restaurant?.countryType?.type?.slug,
                  id: restaurant.id,
                })}
                name={restaurant[`name${language}`]}
                address={restaurant[`address${language}`]}
                open={restaurant.openingTime}
                priceLow={restaurant.priceLow || undefined}
                priceHigh={restaurant.priceHigh || undefined}
                close={restaurant.closingTime}
                rating={restaurant.rating || 0}
                images={restaurant.images[0]?.url || undefined}
                language={language}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
