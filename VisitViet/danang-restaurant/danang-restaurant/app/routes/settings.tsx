import type { User } from "@prisma/client";
import type { ActionArgs, LoaderArgs, LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Container } from "~/components/Container";
import Sidebar from "~/components/Sidebar";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { languageCookie } from "~/cookies.server";
import { getLanguageCookie } from "~/helpers/cookies";
import { getUser } from "~/session.server";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);
  const cookieHeader = request.headers.get("Cookie");
  const language = await getLanguageCookie(cookieHeader);

  return json({ user, language });
};

export async function action({ request }: ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await languageCookie.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();

  const language = bodyParams.get("language") || "Eng"; // Nếu không có giá trị trong bodyParams, giá trị mặc định là "1"
  cookie.language = language;

  return redirect("/settings", {
    headers: {
      "Set-Cookie": await languageCookie.serialize(cookie),
    },
  });
}

export const meta: V2_MetaFunction = ({data}) => [{ title: `${lang.settings[`settings${data?.language as Language}`]}` }];


export default function SettingsPage() {
  const { user, language } = useLoaderData<typeof loader>();

  return (
    <Container customClass="flex">
      <Sidebar user={user as unknown as User} langType={language} />
      <div className="w-full md:w-[calc(100%-200px)] md:px-4">
        <div className="h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px]">
          <div className="mt-12 justify-between md:mt-6">
            <h3 className="font-semibold mb-1">{lang.language[`language${language as Language}`]}</h3>
            <Form method="post" className="flex items-center">
              <label
                className="block w-[50%] text-sm font-medium text-gray-900 dark:text-white lg:w-[20%]"
                defaultValue={language}
              >
                <select
                  name="language"
                  defaultValue={language}
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Eng">English</option>
                  <option value="Kor">한국인</option>
                  <option value="Vie">Tiếng Việt</option>
                </select>
              </label>
              <button
                type="submit"
                className="ml-6 px-4 py-2 rounded-xl text-white font-semibold uppercase text-[14px] bg-[#1ec28b]"
              >
                {lang.save[`save${language as Language}`]}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}
