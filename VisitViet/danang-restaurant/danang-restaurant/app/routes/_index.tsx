import type { User } from "@prisma/client";
import { json, type V2_MetaFunction, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Container } from "~/components/Container";
import { ItemRestaurant } from "~/components/ItemRestaurant";
import Sidebar from "~/components/Sidebar";
import SimpleSlider from "~/components/Slide";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { createRestaurantSlug } from "~/helpers/slug";
import { BuildingIcon } from "~/icons/BuildingIcon";
import {
  getRestaurantsList,
  getTopRestaurantsByRating,
} from "~/models/restaurants.server";
import { getUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  const topRestaurants = await getTopRestaurantsByRating({});

  const listRestaurants = await getRestaurantsList();

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  return json({ user, language, topRestaurants, listRestaurants });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  // { title: ${lang.homePage[homePage${data?.language as Language}`]}` },
  {
    name: "description",
    content: "Giới thiệu về nhà hàng Hàn Quốc và Việt Nam tại Đà Nẵng",
  },
];

export default function HomePage() {
  const { user, language, topRestaurants, listRestaurants } =
    useLoaderData<typeof loader>();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (user) {
      fetch(`http://127.0.0.1:8080/${user.id}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  });

  const predictRes = listRestaurants.filter((item) => data?.includes(item?.id));

  console.log("topRestaurants", topRestaurants);

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full rounded-[10px] p-2 bg-[#f5f9f8] md:overflow-y-auto md:p-6 md:rounded-[40px] lg:flex">
          <div className="flex flex-col lg:w-[60%]">
            <div className="mb-6 md:mb-6">
              <div className="flex items-end">
                <h1 className="text-4xl font-bold">
                  {lang.hello[`hello${language}`]}
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7496/7496766.png"
                  alt="Hand Wave"
                  className="ml-2 w-12 h-12"
                />
              </div>
              <p className="text-gray-500">
                {lang.welcome[`welcome${language}`]}
              </p>
            </div>
            <SimpleSlider restaurants={topRestaurants} language={language} />
            <div className="flex pt-6 pb-4 md:flex-1">
              <div className="p-1 w-full">
                <Link
                  to="/viet-nam"
                  title={lang.countryVN[`countryVN${language}`]}
                  className="flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/BanhMy.jpg')] md:h-[200px] lg:h-full"
                >
                  <p className="text-[14px] text-gray-200">
                    {lang.titleToCountry[`titleToCountry${language}`]}
                  </p>
                  <h4 className="text-xl font-semibold text-slate-300">
                    {lang.countryVN[`countryVN${language}`]}
                  </h4>
                </Link>
              </div>
              <div className="p-1 w-full">
                <Link
                  to="/korea"
                  title={lang.countryKO[`countryKO${language}`]}
                  className="flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/ChaCa.jpg')] md:h-[200px] lg:h-full"
                >
                  <p className="text-[14px] text-gray-200">
                    {lang.titleToCountry[`titleToCountry${language}`]}
                  </p>
                  <h4 className="text-xl font-semibold text-slate-300">
                    {lang.countryKO[`countryKO${language}`]}
                  </h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full py-4 px-1 lg:px-6 lg:h-[50%]">
              <div className="bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto">
                <div>
                  <div className="p-5">
                    <div className="flex items-center">
                      <h2 className="text-xl font-bold mr-2">
                        {lang.bestResttaurant[`bestResttaurant${language}`]}
                      </h2>
                      <span className="text-[#1ec28b]">
                        <BuildingIcon />
                      </span>
                    </div>
                    <p className="text-sm">
                      {lang.subBestResttaurant[`subBestResttaurant${language}`]}
                    </p>
                  </div>
                  {topRestaurants.map((restaurant) => (
                    <ItemRestaurant
                      url={createRestaurantSlug({
                        countrySlug: restaurant.countryType.country.slug,
                        typeSlug: restaurant.countryType.type.slug,
                        id: restaurant.id,
                      })}
                      key={restaurant.id}
                      name={restaurant[`name${language}`]}
                      image={restaurant.images[0]?.url || undefined}
                      rating={restaurant.rating || 0}
                      address={restaurant[`address${language}`]}
                    />
                  ))}
                </div>
              </div>
            </div>
            {user && (
              <div className="w-full py-4 px-1 lg:px-6 lg:h-[50%]">
                <div className="bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto">
                  <div>
                    <div className="p-5">
                      <div className="flex items-center">
                        <h2 className="text-xl font-bold mr-2">
                          {lang.predictResttaurant[`predictResttaurant${language}`]}
                        </h2>
                        <span className="text-[#1ec28b]">
                          <BuildingIcon />
                        </span>
                      </div>
                      <p className="text-sm">
                        {
                          lang.subPredictResttaurant[
                            `subPredictResttaurant${language}`
                          ]
                        }
                      </p>
                    </div>
                    {predictRes?.map((restaurant: any) => (
                      <ItemRestaurant
                        url={createRestaurantSlug({
                          countrySlug: restaurant.countryType.country.slug,
                          typeSlug: restaurant.countryType.type.slug,
                          id: restaurant.id,
                        })}
                        key={restaurant.id}
                        name={restaurant[`name${language}`]}
                        image={restaurant.images[0]?.url || undefined}
                        rating={restaurant.rating || 0}
                        address={restaurant[`address${language}`]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
