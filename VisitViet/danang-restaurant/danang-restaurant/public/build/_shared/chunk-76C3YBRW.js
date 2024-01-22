import {
  MapPinIcon
} from "/build/_shared/chunk-Y6KR4CRJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ItemRestaurant.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ItemRestaurant.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ItemRestaurant.tsx"
  );
  import.meta.hot.lastModified = "1704302996032.3774";
}
var ItemRestaurant = ({
  url,
  image,
  name,
  address,
  rating,
  customClass
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: url, className: `flex p-2 rounded-2xl hover:bg-slate-100 md:p-3 ${customClass}`, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 md:w-18 md:h-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: "", className: "w-16 h-16 md:w-18 md:h-18 rounded-xl" }, void 0, false, {
    fileName: "app/components/ItemRestaurant.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ItemRestaurant.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between py-1 px-2 md:py-1 md:px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, false, {
      fileName: "app/components/ItemRestaurant.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex mr-4 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1 text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon, {}, void 0, false, {
        fileName: "app/components/ItemRestaurant.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ItemRestaurant.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      address
    ] }, void 0, true, {
      fileName: "app/components/ItemRestaurant.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ItemRestaurant.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ItemRestaurant.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ItemRestaurant.tsx",
  lineNumber: 31,
  columnNumber: 7
}, this);
_c = ItemRestaurant;
var _c;
$RefreshReg$(_c, "ItemRestaurant");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ItemRestaurant
};
//# sourceMappingURL=/build/_shared/chunk-76C3YBRW.js.map
