import { Link } from "@remix-run/react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { ClockIcon } from "~/icons/ClockIcon";
// import { LikeIcon } from "~/icons/LikeIcon";
import { MapPinIcon } from "~/icons/MapPinIcon";
import { MoneyIcon } from "~/icons/MoneyIcon";

type RestaurantInforType = {
  url?: string;
  name: string;
  address: string;
  open: string | null;
  close: string | null;
  rating: number;
  priceLow?: number;
  priceHigh?: number;
  images?: string;
  language: Language;
  link?: string;
};

export const RestaurantInfor = ({
  url,
  name,
  address,
  open,
  close,
  rating,
  priceLow,
  priceHigh,
  images,
  language,
  link,
}: RestaurantInforType) =>
  !url ? (
    <a href={`${link}`} className="">
      <div
        className="relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]"
        style={{
          backgroundImage: `url(${images}`,
        }}
      >
        <div className="absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl">
          <div className="flex items-center mb-2">
            <img
              src="https://www.svgrepo.com/show/2732/restaurant.svg"
              alt="Restaurant"
              className="w-6 h-6"
            />
            <div className="ml-2 flex-1">
              <p className="uppercase text-xs font-bold">{`${
                lang.restaurant[`restaurant${language}`]
              }`}</p>
              <h3 className="font-bold">{name}</h3>
            </div>
            {/* <span className="flex items-center text-sm">
              <span className="text-[#1ec28b] mr-1">
                <LikeIcon />
              </span>
              <span>{rating}</span>
            </span> */}
          </div>
          <span className="flex items-center text-sm mb-1">
            <span className="text-[#1ec28b] mr-1">
              <MapPinIcon />
            </span>
            <span>{address}</span>
          </span>
          <span className="flex items-center text-sm mb-1 font-semibold text-[13px]">
            <span className="mr-1">
              <MoneyIcon />
            </span>
            <span>{`${priceLow ? `₩${priceLow}` : ""} ${
              priceHigh ? `- ₩${priceHigh}` : ""
            }`}</span>
          </span>
          <span className="flex items-center text-xs font-semibold">
            <span className="text-[#1ec28b] mr-1">
              <ClockIcon />
            </span>
            <span>{`${lang.open[`open${language}`]}: ${open} - ${
              lang.close[`close${language}`]
            }: ${close}`}</span>
          </span>
        </div>
      </div>
    </a>
  ) : (
    <Link to={url} className="">
      <div
        className="relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]"
        style={{
          backgroundImage: `url(${images}`,
        }}
      >
        <div className="absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl">
          <div className="flex items-center mb-2">
            <img
              src="https://www.svgrepo.com/show/2732/restaurant.svg"
              alt="Restaurant"
              className="w-6 h-6"
            />
            <div className="ml-2 flex-1">
              <p className="uppercase text-xs font-bold">{`${
                lang.restaurant[`restaurant${language}`]
              }`}</p>
              <h3 className="font-bold">{name}</h3>
            </div>
            {/* <span className="flex items-center text-sm">
              <span className="text-[#1ec28b] mr-1">
                <LikeIcon />
              </span>
              <span>{rating}</span>
            </span> */}
          </div>
          <span className="flex items-center text-sm mb-1">
            <span className="text-[#1ec28b] mr-1">
              <MapPinIcon />
            </span>
            <span>{address}</span>
          </span>
          <span className="flex items-center text-sm mb-1 font-semibold text-[13px]">
            <span className="mr-1">
              <MoneyIcon />
            </span>
            <span>{`${priceLow ? `₩${priceLow}` : ""} ${
              priceHigh ? `- ₩${priceHigh}` : ""
            }`}</span>
          </span>
          <span className="flex items-center text-xs font-semibold">
            <span className="text-[#1ec28b] mr-1">
              <ClockIcon />
            </span>
            <span>{`${lang.open[`open${language}`]}: ${open} - ${
              lang.close[`close${language}`]
            }: ${close}`}</span>
          </span>
        </div>
      </div>
    </Link>
  );
