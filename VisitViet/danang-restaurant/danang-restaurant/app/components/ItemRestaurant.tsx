import { Link } from "@remix-run/react";
// import { LikeIcon } from "~/icons/LikeIcon";
import { MapPinIcon } from "~/icons/MapPinIcon";

type ItemRestaurantType = {
  url: string;
  image?: string;
  name: string;
  address: string;
  rating?: number;
  customClass?: string;
};

export const ItemRestaurant = ({
  url,
  image,
  name,
  address,
  rating,
  customClass,
}: ItemRestaurantType) => (
  <Link
    to={url}
    className={`flex p-2 rounded-2xl hover:bg-slate-100 md:p-3 ${customClass}`}
  >
    <div className="w-16 h-16 md:w-18 md:h-18">
      <img
        src={image}
        alt=""
        className="w-16 h-16 md:w-18 md:h-18 rounded-xl"
      />
    </div>
    <div className="flex flex-col justify-between py-1 px-2 md:py-1 md:px-2">
      <h3 className="font-bold">{name}</h3>
      <div className="flex text-sm">
        <span className="flex mr-4 items-center">
          <span className="mr-1 text-[#1ec28b]">
            <MapPinIcon />
          </span>
          {address}
        </span>
        {/* <span className="flex items-center">
          <span className="mr-1 text-[#1ec28b]"><LikeIcon /></span>
          {rating}
        </span> */}
      </div>
    </div>
  </Link>
);
