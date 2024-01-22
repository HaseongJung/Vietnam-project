import { prisma } from "~/db.server";

export async function countProviderById({
  countryId,
  typeId,
}: {
  countryId?: string;
  typeId?: string;
}) {
  return prisma.provider.count({
    where: {
      typeId,
      countryId,
    },
  });
}

export async function createProvider({
  countryId,
  typeId,
}: {
  countryId: string;
  typeId: string;
}) {
  return prisma.provider.create({
    data: {
      countryId,
      typeId,
    },
  });
}

export async function deleteProvider({
  countryId,
  typeId,
}: {
  countryId: string;
  typeId: string;
}) {
  return prisma.provider.delete({
    where: {
      countryId_typeId: {
        countryId,
        typeId,
      },
    },
  });
}
