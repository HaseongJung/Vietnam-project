import { json, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";

// Components
import { ArrowLongLeft } from "~/icons/ArrowLongLeft";
import { ExclamationIcon } from "~/icons/ExclamationIcon";
import { getUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  return json({ user, language });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  { title: `${lang.page404Title[`page404Title${data?.language as Language}`]}` },
];

const goBack = () => {
  window.history.back();
};

export default function Page404() {
  const { language } = useLoaderData<typeof loader>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 60000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section>
      <div className="container h-screen flex items-center px-6 py-24 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-yellow-500 rounded-full bg-yellow-100 dark:bg-gray-800">
            <ExclamationIcon />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {lang.page404Title[`page404Title${language}`]}
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {lang.page404SubTitle[`page404SubTitle${language}`]}
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={goBack}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <ArrowLongLeft />
              <span>{lang.back[`back${language}`]}</span>
            </button>
            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              {lang.home[`home${language}`]}
            </Link>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {lang.page404TimeTitle[`page404TimeTitle${language}`]}
            <span className="font-medium text-blue-500 dark:text-blue-400">
              {" "}
              1 {lang.minute[`minute${language}`]}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
