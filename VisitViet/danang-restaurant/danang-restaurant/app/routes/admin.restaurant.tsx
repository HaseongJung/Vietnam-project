import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { PlusIcon } from "~/icons/PlusIcon";
import { getRestaurantsList } from "~/models/restaurants.server";

// Models

// Helpers
import { requireAdminUser } from "~/session.server";

// Components

export const loader = async ({ request }: LoaderArgs) => {
  await requireAdminUser(request);

  const restaurantList = await getRestaurantsList();

  return json({ restaurantList });
};

export const meta: V2_MetaFunction = () => [{ title: "Sector Management" }];

export default function AdminRestaurantsListPage() {
  const { restaurantList } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-[200px_1fr] gap-6 max-h-[calc(100%-40px)] overflow-y-auto">
        <div>
          <Link
            className="flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline"
            to={'new'}
          >
            <PlusIcon />
            <span className="ml-2">Add New</span>
          </Link>
          <Form action='/admin/restaurant' method="get">
            <input
              id="query"
              name="query"
              type="text"
              className="w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </Form>
          {restaurantList.length === 0 ? (
            <div className="text-slate-400 text-center">No item yet</div>
          ) : (
            <div>
              <ul>
                {restaurantList.map(({ id, nameVie}, idx) => (
                  <li key={id}>
                    <NavLink
                      to={id}
                      className={({ isActive }) =>
                        `block py-2 hover:text-sky-400 ${
                          isActive ? "text-sky-400" : "dark:text-white"
                        }`
                      }
                    >
                      {idx + 1}. {nameVie}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TODO: Load more */}
        </div>
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
