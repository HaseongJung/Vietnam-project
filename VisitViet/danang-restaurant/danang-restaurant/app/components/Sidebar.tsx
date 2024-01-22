import type { User } from "@prisma/client";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { BarIcon } from "~/icons/BarIcon";

// Icons
import { DashboardIcon } from "~/icons/DashboardIcon";
import { FavoriteIcon } from "~/icons/FavoriteIcon";
import { HomeIcon } from "~/icons/HomeIcon";
import { LogoIcon } from "~/icons/LogoIcon";
import { LogoutIcon } from "~/icons/LogoutIcon";
import { ScheduleIcon } from "~/icons/ScheduleIcon";
import { SettingIcon } from "~/icons/SettingIcon";

type SidebarType = {
  user: User | null;
  langType: Language;
};

export default function Sidebar({ user = null, langType }: SidebarType) {
  let userRole;
  if (user) {
    user.role > 0 ? (userRole = true) : (userRole = false);
  }
  const [isBar, setIsBar] = useState(false);
  const handleIsBar = () => {
    setIsBar((prev) => !prev);
  };
  const SIDEBAR_LIST = [
    {
      name: lang.dashboard[`dashboard${langType}`],
      url: "/admin",
      Icon: DashboardIcon,
      isShow: userRole,
    },
    {
      name: lang.home[`home${langType}`],
      url: "/",
      Icon: HomeIcon,
      isShow: true,
    },
    {
      name: lang.favorite[`favorite${langType}`],
      url: "/favorite",
      Icon: FavoriteIcon,
      isShow: true,
    },
    {
      name: lang.schedule[`schedule${langType}`],
      url: "/schedule",
      Icon: ScheduleIcon,
      isShow: true,
    },
    {
      name: lang.settings[`settings${langType}`],
      url: "/settings",
      Icon: SettingIcon,
      isShow: true,
    },
  ].filter((it) => it.isShow);

  return (
    <>
      <div
        className={`fixed z-10 top-[-1px] bottom-0 rounded-[10px] px-4 py-10 bg-white w-[240px] py-5 flex flex-col justify-between transition-all duration-500 ${
          isBar ? "left-1" : "left-[-250px]"
        } md:static md:w-[200px] md:px-0`}
      >
        <div className="text-center">
          <Link
            to="/"
            title="dutago"
            className="inline-flex justify-center"
            onClick={handleIsBar}
          >
            <h1 className="text-2xl font-bold">Dutago</h1>
            <span className="text-[#1ec28b]">
              <LogoIcon />
            </span>
          </Link>
          <div className="flex flex-col mt-20" onClick={handleIsBar}>
            {SIDEBAR_LIST.map(({ name, url, Icon }) => (
              <NavLink
                key={url}
                to={url}
                className={({ isActive }) =>
                  `flex p-4 rounded-xl font-medium hover:text-white hover:bg-[#1ec28b] ${
                    isActive
                      ? "bg-[#1ec28b] text-white shadow-lg shadow-[#a7e7d1]"
                      : "text-slate-500"
                  }`
                }
              >
                <Icon />
                <span className="ml-2">{name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        {user ? (
          <form
            action="/logout"
            method="post"
            className="flex justify-center text-slate-500"
          >
            <button
              type="submit"
              color="error"
              className="p-2 flex hover:text-[#1ec28b]"
            >
              <span className="mr-3">
                <LogoutIcon />
              </span>
              {lang.logout[`logout${langType}`]}
            </button>
          </form>
        ) : (
          <div className="flex justify-center font-normal text-slate-500">
            <Link
              to="/login"
              className="hover:text-[#1ec28b]"
              onClick={handleIsBar}
            >
              {lang.login[`login${langType}`]}
            </Link>
            <span className="mx-1">/</span>
            <Link
              to="/signup"
              className="hover:text-[#1ec28b]"
              onClick={handleIsBar}
            >
              {lang.signup[`signup${langType}`]}
            </Link>
          </div>
        )}
      </div>
      <button
        className="absolute right-4 top-4 text-[#1ec28b] md:hidden"
        onClick={handleIsBar}
      >
        <BarIcon />
      </button>
    </>
  );
}
