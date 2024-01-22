import type { Restaurant } from "@prisma/client";
import { prisma } from "~/db.server";

type TopRestaurantsByRatingType = {
  take?: number;
};

type RestaurantsByCountryIdAndSlugType = {
  countryId?: string;
  slug?: string;
};

export async function getRestaurantsList() {
  return prisma.restaurant.findMany({
    include: {
      countryType: {
        select: {
          country: true,
          type: true,
        },
      },
      images: {
        select: {
          url: true,
        },
      },
    },
  });
}

export async function getRestaurantsById(id: string) {
  return prisma.restaurant.findUnique({
    where: { id },
    include: {
      images: {
        select: {
          url: true,
        },
      },
    },
  });
}

// const TopRestaurantsByRatingSelect = {
//   id: true,
//   slug: true,
//   nameVie: true,
//   descriptionVie: true,
//   addressVie: true,
//   nameKor: true,
//   descriptionKor: true,
//   addressKor: true,
//   nameEng: true,
//   descriptionEng: true,
//   addressEng: true,
//   rating: true,
//   openingTime: true,
//   closingTime: true,
//   countryId: true,
//   typeId: true,
//   countryType: {
//     select: {
//       country: true,
//       type: true,
//     },
//   },
//   images: {
//     select: {
//       url: true,
//     }
//   }
// }
export async function getTopRestaurantsByRating({
  take = 10,
}: TopRestaurantsByRatingType) {
  return prisma.restaurant.findMany({
    take,
    orderBy: {
      favorites: {
        _count: "desc",
      },
    },
    include: {
      countryType: {
        select: {
          country: true,
          type: true,
        },
      },
      images: {
        select: {
          url: true,
        },
      },
    },
  });
}

export async function getRestaurantsByCountryIdAndSlug({
  countryId = "1",
  slug,
}: RestaurantsByCountryIdAndSlugType) {
  return prisma.restaurant.findMany({
    where: {
      countryId: countryId,
      countryType: {
        type: {
          slug,
        },
      },
    },
    include: {
      images: {
        select: {
          url: true,
        },
      },
    },
  });
}

export async function getRestaurantsFavoriteById(userId: string) {
  const favoriteRestaurants = await prisma.favorite.findMany({
    where: { userId },
    include: {
      restaurant: {
        include: {
          countryType: {
            include: {
              country: true,
              type: true,
            },
          },
          images: true,
        },
      },
    },
  });

  return favoriteRestaurants.map((favorite) => ({
    restaurant: favorite.restaurant,
    countrySlug: favorite.restaurant.countryType.country.slug,
    typeSlug: favorite.restaurant.countryType.type.slug,
    images: favorite.restaurant.images,
  }));
}

export async function increaseRestaurantRating(restaurantId: string) {
  return prisma.restaurant.update({
    where: { id: restaurantId },
    data: {
      rating: {
        increment: 1,
      },
    },
  });
}

export async function decreaseRestaurantRating(restaurantId: string) {
  return prisma.restaurant.update({
    where: { id: restaurantId },
    data: {
      rating: {
        decrement: 1,
      },
    },
  });
}

export async function deleteRestaurantById(restaurantId: string) {
  return prisma.restaurant.delete({
    where: { id: restaurantId },
  });
}

export async function createRestaurant(data: Restaurant) {
  return prisma.restaurant.create({
    data: {
      nameVie: data.nameVie,
      descriptionVie: data.descriptionVie,
      addressVie: data.addressVie,
      nameKor: data.nameKor,
      descriptionKor: data.descriptionKor,
      addressKor: data.addressKor,
      rating: data.rating,
      nameEng: data.nameEng,
      descriptionEng: data.descriptionEng,
      addressEng: data.addressEng,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      direct: data.direct,
      priceLow: data.priceLow,
      priceHigh: data.priceHigh,
      countryId: data.countryId,
      typeId: data.typeId,
    },
  });
}

export async function updateRestaurant(data: Restaurant) {
  return prisma.restaurant.update({
    where: { id: data.id },
    data: {
      nameVie: data.nameVie,
      descriptionVie: data.descriptionVie,
      addressVie: data.addressVie,
      nameKor: data.nameKor,
      descriptionKor: data.descriptionKor,
      addressKor: data.addressKor,
      nameEng: data.nameEng,
      descriptionEng: data.descriptionEng,
      addressEng: data.addressEng,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      direct: data.direct,
      rating: data.rating,
      priceLow: data.priceLow,
      priceHigh: data.priceHigh,
      countryId: data.countryId,
      typeId: data.typeId,
    },
  });
}
