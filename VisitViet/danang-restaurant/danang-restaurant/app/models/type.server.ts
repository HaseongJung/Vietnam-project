import { prisma } from "~/db.server";

export async function getTypeList() {
  return prisma.type.findMany();
}

export async function getTypeBySlug(slug: string) {
  return prisma.type.findUnique({
    where: {
      slug: slug,
    },
  });
}

export async function getTypeById(id: string) {
  return prisma.type.findUnique({
    where: {
      typeId: id,
    },
  });
}

export async function getTypeByCountry({
  countryId = "1",
}: {
  countryId?: string;
}) {
  return prisma.type.findMany({
    where: { providers: { some: { countryId } } },
  });
}

export type TypeWithRestaurantCount = {
  typeId: string;
  nameVie: string;
  nameKor: string;
  nameEng: string;
  restaurantCount: number;
  slug: string;
};

export async function getTypeWithRestaurantCount({
  countryId = "1",
}: {
  countryId?: string;
}) {
  // Lấy thông tin các Type thuộc countryId cụ thể
  const typesWithRestaurantCount = await prisma.type.findMany({
    where: { providers: { some: { countryId } } },
    include: {
      providers: {
        where: {
          countryId: countryId,
        },
        include: {
          restaurants: true,
        },
      },
    },
  });

  return typesWithRestaurantCount.map((type) => ({
    ...type,
    restaurantCount: type.providers.reduce(
      (total, provider) => total + provider.restaurants.length,
      0
    ),
  }));
}

export async function deleteTypeBySlug(slug: string) {
  return prisma.type.deleteMany({
    where: {
      slug,
    },
  });
}

export type CreateType = {
  typeId: string;
  slug: string;
  nameEng: string;
  nameKor: string;
  nameVie: string;
};
export async function createType(dataSubmit: CreateType) {
  return prisma.type.create({
    data: {
      typeId: dataSubmit.typeId,
      slug: dataSubmit.slug,
      nameEng: dataSubmit.nameEng,
      nameKor: dataSubmit.nameKor,
      nameVie: dataSubmit.nameVie,
    },
  });
}

type UpdateType = {
  typeId: string;
  slug: string;
  nameEng: string;
  nameKor: string;
  nameVie: string;
};

export async function updateType(dataSubmit: UpdateType) {
  return prisma.type.updateMany({
    where: {
      typeId: dataSubmit.typeId,
    },
    data: {
      nameEng: dataSubmit.nameEng,
      nameKor: dataSubmit.nameKor,
      nameVie: dataSubmit.nameVie,
    },
  });
}
