import { prisma } from "~/db.server";

export async function getCountry() {
  return prisma.country.findMany();
}
