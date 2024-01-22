import { prisma } from "~/db.server";

export async function getImageById(id: string) {
  return prisma.image.findUnique({
    where: {
      id,
    },
  });
}

export async function getListImagesByRestaurantId(restaurantId: string) {
  return prisma.image.findMany({
    where: {
      restaurantId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function createImage({
  restaurantId,
  url,
}: {
  restaurantId: string;
  url: string;
}) {
  return prisma.image.create({
    data: {
      restaurantId,
      url,
    },
  });
}

export async function updateImage({ id, url }: { id: string; url: string }) {
  return prisma.image.update({
    where: {
      id,
    },
    data: {
      url,
    },
  });
}

export async function deleteImage(id: string) {
  return prisma.image.delete({
    where: {
      id,
    },
  });
}
