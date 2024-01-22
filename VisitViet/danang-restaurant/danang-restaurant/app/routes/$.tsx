import { redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {
  return redirect("/404");
};
