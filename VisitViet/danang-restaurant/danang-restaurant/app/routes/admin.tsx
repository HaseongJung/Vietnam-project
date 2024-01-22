import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { User } from "@prisma/client";

// Helpers
import { getUser, requireManagerUser } from "~/session.server";

// Icons
import { BriefcaseIcon } from "~/icons/BriefcaseIcon";
import { RestaurantIcon } from "~/icons/RestaurantIcon";
import { Container } from "~/components/Container";
import Sidebar from "~/components/Sidebar";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { PhotoIcon } from "~/icons/PhotoIcon";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  await requireManagerUser(request);
  const user = await getUser(request);

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  return json({ user, language });
};

export default function AdminPage() {
  const { user, language } = useLoaderData<typeof loader>();
  const userRole = user.role;

  const SIDEBAR_LIST = [
    {
      name: "Loại nhà hàng",
      url: "category",
      Icon: BriefcaseIcon,
      isShow: userRole > 1,
    },
    {
      name: "Nhà hàng",
      url: "restaurant",
      Icon: RestaurantIcon,
      isShow: userRole > 0,
    },
    {
      name: "Ảnh",
      url: "images",
      Icon: PhotoIcon,
      isShow: userRole > 0,
    },
  ].filter((it) => it.isShow);

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex">
          <div className="lg:w-[20%]">
            {SIDEBAR_LIST.map(({ name, url, Icon }) => (
              <NavLink
                key={url}
                to={url}
                className={({ isActive }) =>
                  `flex p-3 mb-1 rounded-md hover:no-underline hover:bg-[#1ec28b] hover:text-white ${
                    isActive ? "bg-[#1ec28b] text-white" : ""
                  }`
                }
              >
                <Icon />
                <span className="ml-2">{name}</span>
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
