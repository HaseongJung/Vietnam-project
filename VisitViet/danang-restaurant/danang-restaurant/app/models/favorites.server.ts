import { prisma } from "~/db.server";

type FavoriteType = {
  userId: string;
  restaurantId: string;
};

export async function checkRestaurantIsFavorited({
  userId,
  restaurantId,
}: FavoriteType) {
  return prisma.favorite.count({
    where: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}

// Function to add a restaurant to favorites
export async function addToFavorites({ userId, restaurantId }: FavoriteType) {
  return prisma.favorite.create({
    data: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}

// Function to remove a restaurant from favorites
export async function removeFromFavorites({
  userId,
  restaurantId,
}: FavoriteType) {
  return prisma.favorite.deleteMany({
    where: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}

type RatingType = {
  userId: string;
  restaurantId: string;
};

export async function checkRestaurantIsRatings({
  userId,
  restaurantId,
}: RatingType) {
  return prisma.rating.count({
    where: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}

// Function to add a restaurant to Ratings
export async function addToRatings({ userId, restaurantId }: RatingType) {
  return prisma.rating.create({
    data: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}

// Function to remove a restaurant from Ratings
export async function removeFromRatings({ userId, restaurantId }: RatingType) {
  return prisma.rating.deleteMany({
    where: {
      userId: userId,
      restaurantId: restaurantId,
    },
  });
}
