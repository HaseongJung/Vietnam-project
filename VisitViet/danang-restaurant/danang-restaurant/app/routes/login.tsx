import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { lang } from "~/constants/lang";
import type { Language } from "~/constants/langType";
import { getLanguageCookie } from "~/helpers/cookies";

// Models
import { verifyLogin } from "~/models/user.server";

// Helpers
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateUsername } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  return json({language});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  const cookieHeader = request.headers.get("Cookie");
  const language: Language = await getLanguageCookie(cookieHeader);

  if (!validateUsername(username)) {
    return json(
      { errors: { username: lang.errorLogin.error1[`error1${language}`], password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { username: null, password: lang.errorLogin.error3[`error3${language}`] } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(username, password);

  if (!user) {
    return json(
      { errors: { username: lang.errorLogin.error2[`error2${language}`], password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    redirectTo,
    remember: remember === "on" ? true : false,
    request,
    userId: user.id,
  });
};



export const meta: V2_MetaFunction<typeof loader> = ({data}) => [{ title: `${lang.login[`login${data?.language as Language}`]}` }];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData<typeof action>();
  const {language} = useLoaderData<typeof loader>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.username) {
      usernameRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#e5eeec]">
      <div className="mx-auto w-full max-w-md p-2">
        <div className="bg-white p-8 rounded-2xl">
          <h3 className="font-bold mb-4 text-xl text-[#1ec28b]">{lang.loginTitle[`loginTitle${language}`]}</h3>
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700"
              >
                {lang.username[`username${language}`]}
              </label>
              <div className="mt-1">
                <input
                  ref={usernameRef}
                  id="username"
                  required
                  autoFocus={true}
                  name="username"
                  type="username"
                  autoComplete="username"
                  aria-invalid={actionData?.errors?.username ? true : undefined}
                  aria-describedby="username-error"
                  className="w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
                />
                {actionData?.errors?.username && (
                  <div className="pt-1 text-red-700" id="username-error">
                    {actionData.errors.username}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                {lang.password[`password${language}`]}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  aria-describedby="password-error"
                  className="w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
                />
                {actionData?.errors?.password && (
                  <div className="pt-1 text-red-700" id="password-error">
                    {actionData.errors.password}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {lang.remember[`remember${language}`]}
                </label>
              </div>
            </div>
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <button type="submit" className="w-full justify-center p-2 rounded-2xl text-white uppercase font-bold bg-[#1ec28b] hover:scale-105 hover:bg-[#0ea16f] transition-all">
              {lang.login[`login${language}`]}
            </button>
          </Form>
          <div className="mt-3 text-sm">
            <span>{lang.loginSubTitle[`loginSubTitle${language}`]}?</span>
            <Link to='/signup' className="ml-2 text-[#1ec28b] font-semibold hover:text-[#0ea16f]">{lang.signup[`signup${language}`]}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
