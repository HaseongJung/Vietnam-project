import { prisma } from "~/db.server";

export async function getValueRating(userId: string, restaurantId: string) {
  const ratingData = await prisma.rating.findFirst({
    where: {
      userId,
      restaurantId,
    },
  });
  return ratingData?.ratingValue;
}

export async function updateRatingValue(
  userId: string,
  restaurantId: string,
  ratingValue: number
) {
  return prisma.rating.updateMany({
    where: { userId, restaurantId },
    data: {
      ratingValue: ratingValue,
    },
  });
}

export async function addRatingValue(
  userId: string,
  restaurantId: string,
  ratingValue: number
) {
  return prisma.rating.create({
    data: {
      userId: userId,
      restaurantId: restaurantId,
      ratingValue: ratingValue,
    },
  });
}
