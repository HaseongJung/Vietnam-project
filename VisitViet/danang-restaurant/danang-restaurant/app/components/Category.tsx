import { NavLink } from "@remix-run/react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
} from "~/icons/CategoryIcon";
import type { TypeWithRestaurantCount } from "~/models/type.server";

type CategoryType = {
  countrySlug: string;
  categorys: TypeWithRestaurantCount[];
  language: Language;
};

const CATEGORY_ICON = [
  { Icon: Category1 },
  { Icon: Category2 },
  { Icon: Category3 },
  { Icon: Category4 },
  { Icon: Category5 },
  { Icon: Category6 },
  { Icon: Category7 },
];

export const Category = ({ categorys, language, countrySlug }: CategoryType) => (
  <div className="p-6 rounded-2xl bg-white mt-10 lg:mt-0">
    <h2 className="text-xl font-bold pb-4 border-b">
      {lang.category[`category${language}`]}
    </h2>
    <div className="flex flex-col mt-4">
      {categorys.map((category) => {
        const Icon =
        CATEGORY_ICON?.[(Number(category?.typeId) - 1) % CATEGORY_ICON.length]
          ?.Icon;
        return (
          <NavLink
            key={category.typeId}
            to={`/${countrySlug}/${category.slug}`}
            className={({ isActive }) =>
              `flex items-center py-4 px-2 border rounded-[10px] mb-2 ${
                isActive ? "bg-[#e6f0e9]" : ""
              }`
            }
          >
            <Icon />
            <div className="flex flex-1 items-center justify-between ml-3">
              <span>{category[`name${language}`]}</span>
              <span className="flex items-center justify-center w-6 h-6 text-[14px] bg-[#BCE3C9] rounded-full">
                {category.restaurantCount}
              </span>
            </div>
          </NavLink>
        );
      })}
    </div>
  </div>
);
