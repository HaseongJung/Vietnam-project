import type { User } from "@prisma/client";
import { json, type V2_MetaFunction, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Category } from "~/components/Category";
import { Container } from "~/components/Container";
import Sidebar from "~/components/Sidebar";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import {
  type TypeWithRestaurantCount,
  getTypeWithRestaurantCount,
} from "~/models/type.server";
import { getUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  const types = await getTypeWithRestaurantCount({ countryId: "2" }); //default 1 is VN
  return json({ user, types, language });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  {
    title: `${
      lang.restaurantKor[`restaurantKor${data?.language as Language}`]
    }`,
  },
  {
    name: "description",
    content: "Giới thiệu về nhà hàng Hàn Quốc tại Đà Nẵng",
  },
];

export default function KoreaIndexPage() {
  const { user, types, language } = useLoaderData<typeof loader>();

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex">
          <div className="lg:w-[30%] overflow-y-scroll">
            <Category
              countrySlug="korea"
              language={language}
              categorys={types as unknown as TypeWithRestaurantCount[]}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
