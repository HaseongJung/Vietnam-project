import type { Restaurant } from "@prisma/client";
import { Form, Link } from "@remix-run/react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { ClockIcon } from "~/icons/ClockIcon";
import { LikeIcon } from "~/icons/LikeIcon";
import { MapPinIcon } from "~/icons/MapPinIcon";
import { RemoveIcon } from "~/icons/RemoveIcon";
import { ScheduleIcon } from "~/icons/ScheduleIcon";

type ScheduleRestaurantProps = {
  id: string;
  url: string;
  restaurant: Restaurant;
  day?: string;
  hour: string;
  language: Language;
};

export const ScheduleRestaurant = ({
  id,
  url,
  restaurant,
  day,
  hour,
  language,
}: ScheduleRestaurantProps) => {
  return (
    <div className="lg:flex lg:justify-end relative">
      {day && (
        <div>
          <div className="flex bg-[#cdd0d6] p-2 justify-center items-center rounded-xl my-2 lg:py-4 lg:px-8 lg:mr-2 pointer-events-none">
            <span className="mr-2 text-[#1ec28b]">
              <ScheduleIcon />
            </span>
            <span className="font-semibold">{day}</span>
          </div>
        </div>
      )}
      <Link
        to={url}
        title={restaurant[`name${language}`]}
        className="block p-3 rounded-2xl bg-white mb-1 lg:min-w-[400px]"
      >
        <span className="inline-flex px-3 rounded-[5px] items-center justify-center text-[#1ec28b] bg-green-100">
          <span className="mr-1">
            <ClockIcon />
          </span>
          <span className="text-sm">{hour}</span>
        </span>
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
          {/* <span className="flex items-center text-sm">
            <span className="relative flex items-center text-[#1ec28b] w-6 h-6">
              <LikeIcon />
            </span>
            <span>{restaurant.rating}</span>
          </span> */}
        </div>
        <div>
          <span className="flex items-center text-sm mb-1">
            <span className="text-[#1ec28b] mr-1">
              <MapPinIcon />
            </span>
            <span>{restaurant[`address${language}`]}</span>
          </span>
          <span className="flex items-center text-xs font-semibold">
            <span className="text-[#1ec28b] mr-1">
              <ClockIcon />
            </span>
            <span>{`${lang.open[`open${language}`]}: ${
              restaurant.openingTime
            }H - ${lang.close[`close${language}`]}: ${
              restaurant.closingTime
            }H`}</span>
          </span>
        </div>
      </Link>
      <Form
        method="post"
        action={`/schedule?remove=${id}`}
        className="px-4 absolute right-4 bottom-4"
      >
        <button type="submit" className="text-red-500 hover:text-red-800">
          <RemoveIcon />
        </button>
      </Form>
    </div>
  );
};
