import { languageCookie } from "~/cookies.server";

export async function getLanguageCookie (cookieHeader: string | null) {
  const cookie = (await languageCookie.parse(cookieHeader)) || {};
  const language = cookie.language || "nameEng"; // Nếu không có cookie, giá trị mặc định là "1"
  return language;
}

