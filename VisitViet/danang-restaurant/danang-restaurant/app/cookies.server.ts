import { createCookie } from "@remix-run/node"; // hoặc cloudflare/deno

export const languageCookie = createCookie("language", {
  maxAge: 604800, // một tuần
});
