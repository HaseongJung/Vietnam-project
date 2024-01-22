import {
  require_images
} from "/build/_shared/chunk-O5QR3QFV.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  PlusIcon
} from "/build/_shared/chunk-PF4WACFH.js";
import "/build/_shared/chunk-AUYLHJJM.js";
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

// app/routes/admin.images.$restId.tsx
var import_node = __toESM(require_node());
var import_images = __toESM(require_images());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.images.$restId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.images.$restId.tsx"
  );
  import.meta.hot.lastModified = "1692289063000";
}
var meta = () => [{
  title: "Sector Management"
}];
function AdminRestaurantsListPage() {
  _s();
  const {
    imagesList
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline", to: "new", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon, {}, void 0, false, {
          fileName: "app/routes/admin.images.$restId.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: "Add New" }, void 0, false, {
          fileName: "app/routes/admin.images.$restId.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/admin/restaurant", method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "query", name: "query", type: "text", className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white", placeholder: "Search..." }, void 0, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      imagesList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 64,
        columnNumber: 38
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: imagesList.map(({
        id
      }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: id, className: ({
        isActive
      }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`, children: [
        idx + 1,
        ". ",
        id
      ] }, void 0, true, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) }, id, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 68,
        columnNumber: 24
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 64,
        columnNumber: 102
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.images.$restId.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.images.$restId.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(AdminRestaurantsListPage, "8XZ1o6BVis0YW1DY1uH/ftxybkQ=", false, function() {
  return [useLoaderData];
});
_c = AdminRestaurantsListPage;
var _c;
$RefreshReg$(_c, "AdminRestaurantsListPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminRestaurantsListPage as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.images.$restId-WVHON7H6.js.map