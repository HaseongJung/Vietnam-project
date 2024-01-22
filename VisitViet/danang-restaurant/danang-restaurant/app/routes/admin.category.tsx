import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AdminListLayout } from "~/components/AdminListLayout";
import { getTypeList } from "~/models/type.server";

// Models

// Helpers
import { requireAdminUser } from "~/session.server";

// Components

export const loader = async ({ request }: LoaderArgs) => {
  await requireAdminUser(request);

  const categoryList = await getTypeList();

  return json({ categoryList });
};

export const meta: V2_MetaFunction = () => [{ title: "Sector Management" }];

export default function AdminCategoryListPage() {
  const { categoryList } = useLoaderData<typeof loader>();

  return <AdminListLayout dataList={categoryList} searchFormUrl="/admin/category" />;
}
