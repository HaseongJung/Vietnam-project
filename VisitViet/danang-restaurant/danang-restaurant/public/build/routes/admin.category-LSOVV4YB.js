import {
  require_type
} from "/build/_shared/chunk-2ESX57M3.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  PlusIcon
} from "/build/_shared/chunk-PF4WACFH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.category.tsx
var import_node = __toESM(require_node());

// app/components/AdminListLayout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\AdminListLayout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\AdminListLayout.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
var AdminListLayout = ({
  dataList,
  searchFormUrl,
  routeAddNew = "new"
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline", to: routeAddNew, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon, {}, void 0, false, {
        fileName: "app/components/AdminListLayout.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: "Add New" }, void 0, false, {
        fileName: "app/components/AdminListLayout.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: searchFormUrl, method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "query", name: "query", type: "text", className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white", placeholder: "Search..." }, void 0, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    dataList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 39,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: dataList.map(({
      slug
    }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: slug, className: ({
      isActive
    }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`, children: [
      idx + 1,
      ". ",
      slug
    ] }, void 0, true, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 44,
      columnNumber: 19
    }, this) }, slug, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 43,
      columnNumber: 22
    }, this)) }, void 0, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 39,
      columnNumber: 98
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/components/AdminListLayout.tsx",
  lineNumber: 30,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/AdminListLayout.tsx",
  lineNumber: 29,
  columnNumber: 7
}, this);
_c = AdminListLayout;
var _c;
$RefreshReg$(_c, "AdminListLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.category.tsx
var import_type = __toESM(require_type());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.category.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.category.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var meta = () => [{
  title: "Sector Management"
}];
function AdminCategoryListPage() {
  _s();
  const {
    categoryList
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminListLayout, { dataList: categoryList, searchFormUrl: "/admin/category" }, void 0, false, {
    fileName: "app/routes/admin.category.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(AdminCategoryListPage, "RFQCTNwXzH/v9FzRlvI2d7poIQ8=", false, function() {
  return [useLoaderData];
});
_c2 = AdminCategoryListPage;
var _c2;
$RefreshReg$(_c2, "AdminCategoryListPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminCategoryListPage as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.category-LSOVV4YB.js.map
