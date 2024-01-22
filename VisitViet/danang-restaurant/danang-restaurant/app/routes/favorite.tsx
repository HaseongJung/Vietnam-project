import type { User } from "@prisma/client";
import { type LoaderArgs, json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Container } from "~/components/Container";
import { ItemRestaurant } from "~/components/ItemRestaurant";
import Sidebar from "~/components/Sidebar";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { createRestaurantSlug } from "~/helpers/slug";
import { getRestaurantsFavoriteById } from "~/models/restaurants.server";
import { getUser, requireUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUser(request);

  const user = await getUser(request);

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  let favorites;
  if (user) {
    favorites = await getRestaurantsFavoriteById(user.id);
  }

  return json({ user, language, favorites });
};

export const meta: V2_MetaFunction = ({data}) => [{ title: `${lang.favorite[`favorite${data?.language as Language}`]}` }];

export default function FavoritePage() {
  const { user, language, favorites } = useLoaderData<typeof loader>();

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex">
          <div className="w-full p-6 rounded-2xl bg-white mt-10 overflow-y-auto md:mt-0">
            <h2 className="text-xl font-bold pb-4 border-b">
              {lang.favorite[`favorite${language}`]}
            </h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-4 pt-4">
              {favorites &&
                favorites.map(
                  ({ restaurant, countrySlug, typeSlug, ...favorite }) => (
                    <ItemRestaurant
                      key={restaurant.id}
                      url={createRestaurantSlug({
                        countrySlug,
                        typeSlug,
                        id: restaurant.id,
                      })}
                      image={restaurant.images[0].url || ""}
                      name={restaurant[`name${language}`]}
                      address={restaurant[`address${language}`]}
                      rating={restaurant.rating || 0}
                      customClass="lg:border"
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
