import type { Restaurant, User } from "@prisma/client";
import {
  type LoaderArgs,
  json,
  type ActionArgs,
  redirect,
  type V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Container } from "~/components/Container";
import { ScheduleRestaurant } from "~/components/ScheduleRestaurant";
import Sidebar from "~/components/Sidebar";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";
import { getDateFormatVN, getHourFormatVN } from "~/helpers/date";
import { createRestaurantSlug } from "~/helpers/slug";
import {
  createSchedule,
  deleteScheduleById,
  getSchedule,
} from "~/models/schedule.server";
import { getUser, requireUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUser(request);

  const user = await getUser(request);
  if (!user) return redirect("/login");

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  const schedules = await getSchedule(user.id);

  return json({ user, language, schedules });
};

export const action = async ({ request, params }: ActionArgs) => {
  await requireUser(request);

  const url = new URL(request.url);
  const query = url.searchParams;
  const newRestaurantId = query.get("new");
  const removeRestaurantId = query.get("remove");

  const formData = await request.formData();
  const dateTime = formData.get("dateTime");

  const user = await getUser(request);

  if (!user) return redirect("/login");

  if (removeRestaurantId) {
    await deleteScheduleById(removeRestaurantId);
    return redirect("/schedule");
  }

  if (typeof dateTime !== "string" || dateTime.length === 0) {
    return json({});
  }

  const dataSubmit = {
    userId: user.id,
    restaurantId: String(newRestaurantId),
    dateTime: new Date(dateTime),
  };

  await createSchedule(dataSubmit);

  return json({});
};

export const meta: V2_MetaFunction = ({data}) => [{ title: `${lang.schedule[`schedule${data?.language as Language}`]}` }];

export default function SchedulePage() {
  const { user, language, schedules } = useLoaderData<typeof loader>();

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full overflow-y-auto rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex">
          <div className="mt-8 md:mt-0">
            {schedules.map((schedule, index) => {
              if (
                index === 0 ||
                getDateFormatVN(schedule.dateTime) !==
                  getDateFormatVN(schedules[index - 1].dateTime)
              ) {
                return (
                  <ScheduleRestaurant
                    key={schedule.id}
                    id={schedule.id}
                    url={createRestaurantSlug({
                      countrySlug: schedule.restaurant.countryType.country.slug,
                      typeSlug: schedule.restaurant.countryType.type.slug,
                      id: schedule.restaurant.id,
                    })}
                    restaurant={schedule.restaurant as unknown as Restaurant}
                    hour={getHourFormatVN(schedule.dateTime).slice(0, 5)}
                    day={getDateFormatVN(schedule.dateTime)}
                    language={language}
                  />
                );
              } else {
                return (
                  <ScheduleRestaurant
                    key={schedule.id}
                    id={schedule.id}
                    url={createRestaurantSlug({
                      countrySlug: schedule.restaurant.countryType.country.slug,
                      typeSlug: schedule.restaurant.countryType.type.slug,
                      id: schedule.restaurant.id,
                    })}
                    restaurant={schedule.restaurant as unknown as Restaurant}
                    hour={getHourFormatVN(schedule.dateTime).slice(0, 5)}
                    language={language}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
