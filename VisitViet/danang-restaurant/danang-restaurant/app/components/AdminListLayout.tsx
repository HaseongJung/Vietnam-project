import { Link, Outlet, NavLink, Form } from "@remix-run/react";

// Components
 import { PlusIcon } from "~/icons/PlusIcon";

type DataItem = {
  slug: string;
};

type LayoutProps = {
  dataList: DataItem[];
  searchFormUrl: string;
  routeAddNew?: string;
};

export const AdminListLayout = ({
  dataList,
  searchFormUrl,
  routeAddNew = 'new',
}: LayoutProps) => (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-[200px_1fr] gap-6">
      <div>
        <Link
          className="flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline"
          to={routeAddNew}
        >
          <PlusIcon />
          <span className="ml-2">Add New</span>
        </Link>
        <Form action={searchFormUrl} method="get">
          <input
            id="query"
            name="query"
            type="text"
            className="w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
          />
        </Form>
        {dataList.length === 0 ? (
          <div className="text-slate-400 text-center">No item yet</div>
        ) : (
          <div>
            <ul>
              {dataList.map(({slug }, idx) => (
                <li key={slug}>
                  <NavLink
                    to={slug}
                    className={({ isActive }) =>
                      `block py-2 hover:text-sky-400 ${
                        isActive ? "text-sky-400" : "dark:text-white"
                      }`
                    }
                  >
                    {idx + 1}. {slug}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TODO: Load more */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

