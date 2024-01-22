import { Link } from "@remix-run/react";
import Slider from "react-slick";
import "../assets/css/slied.css";
import { createRestaurantSlug } from "~/helpers/slug";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
// import { LikeIcon } from "~/icons/LikeIcon";
import { MapPinIcon } from "~/icons/MapPinIcon";
import { ClockIcon } from "~/icons/ClockIcon";

type SimpleSlider = {
  restaurants?: any;
  language: Language;
};

export default function SimpleSlider({ restaurants, language }: SimpleSlider) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="">
      {restaurants &&
        restaurants.map((restaurant: any) => (
          <Link
            key={restaurant.id}
            to={createRestaurantSlug({
              countrySlug: restaurant.countryType.country.slug,
              typeSlug: restaurant.countryType.type.slug,
              id: restaurant.id,
            })}
            className="h-[200px] md:h-[340px] rounded-2xl"
          >
            <div
              style={{
                backgroundImage: `url(${restaurant.images[0]?.url || ""})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <div className="absolute z-10 bg-white left-1 right-1 bottom-1 py-2 px-4 rounded-xl lg:inline-block lg:right-[60%] md:p-3">
                <div className="flex items-center">
                  <img
                    src="https://www.svgrepo.com/show/2732/restaurant.svg"
                    alt="Restaurant"
                    className="w-6 h-6"
                  />
                  <div className="ml-2 flex-1">
                    <p className="uppercase text-xs font-bold">{`${
                      lang.restaurant[`restaurant${language}`]
                    }`}</p>
                    <h3 className="font-bold">
                      {restaurant[`name${language}`]}
                    </h3>
                  </div>
                  {/* <span className="flex items-center text-sm">
                    <span className="text-[#1ec28b] mr-1">
                      <LikeIcon />
                    </span>
                    <span>{restaurant.rating}</span>
                  </span> */}
                </div>
                <span className="hidden items-center text-sm mb-1 md:flex">
                  <span className="text-[#1ec28b] mr-1">
                    <MapPinIcon />
                  </span>
                  <span>{restaurant[`address${language}`]}</span>
                </span>
                <span className="hidden items-center text-xs font-semibold md:flex">
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
            </div>
          </Link>
        ))}
    </Slider>
  );
}
