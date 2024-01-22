import { prisma } from "~/db.server";

type CreateSchedule = {
  userId: string;
  restaurantId: string;
  hour?: Date;
  dateTime: Date;
};

export async function createSchedule({
  userId,
  restaurantId,
  dateTime,
  hour,
}: CreateSchedule) {
  return prisma.schedule.create({
    data: {
      userId: userId,
      restaurantId: restaurantId,
      dateTime: dateTime,
      hour: hour,
    },
  });
}

export async function getSchedule(userId: string) {
  return prisma.schedule.findMany({
    where: {
      userId,
      dateTime: {
        gte: new Date(),
      },
    },
    include: {
      restaurant: {
        include: {
          countryType: {
            include: {
              country: true,
              type: true,
            },
          },
        },
      }, // Include the related Restaurant information
    },
    orderBy: {
      dateTime: "asc", // Sort schedules by dateTime in ascending order
    },
  });
}

export async function deleteScheduleById(scheduleId: string) {
  return prisma.schedule.delete({
    where: {
      id: scheduleId,
    },
  });
}
