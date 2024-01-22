import { json, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RestaurantInfor } from "~/components/RestaurantInfor";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { getRestaurantsByCountryIdAndSlug } from "~/models/restaurants.server";
import { getTypeByCountry } from "~/models/type.server";
import { getUser } from "~/session.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  const user = await getUser(request);

  const slug = params.slug;
  const types = await getTypeByCountry({ countryId: "2" }); //default 1 is VN
  const category = types.find((it) => it.slug === slug);

  let restaurants;
  if (category) {
    restaurants = await getRestaurantsByCountryIdAndSlug({
      countryId: "2",
      slug,
    }); //default 1 is VN
  } else {
    return redirect('/404');
  }
  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  return json({ user, language, restaurants });
};

export default function CategoryKoreaPage() {
  const { language, restaurants } = useLoaderData<typeof loader>();

  return (
    <div className="lg:pl-6 lg:w-[70%] md:overflow-y-auto md:max-h-[100%]">
      <div className="mt-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantInfor
            key={restaurant.id}
            url={restaurant.id}
            name={restaurant[`name${language}`]}
            address={restaurant[`address${language}`]}
            open={restaurant.openingTime}
            close={restaurant.closingTime}
            rating={restaurant.rating || 0}
            priceLow={restaurant.priceLow || undefined}
            priceHigh={restaurant.priceHigh || undefined}
            images={restaurant.images[0]?.url || undefined}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
