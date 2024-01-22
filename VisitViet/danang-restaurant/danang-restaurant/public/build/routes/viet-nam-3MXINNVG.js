import {
  Category
} from "/build/_shared/chunk-RY55SJEH.js";
import {
  Container,
  Sidebar
} from "/build/_shared/chunk-AHWWUA6F.js";
import {
  lang
} from "/build/_shared/chunk-WLICR2AU.js";
import {
  require_type
} from "/build/_shared/chunk-2ESX57M3.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
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

// app/routes/viet-nam.tsx
var import_node = __toESM(require_node());
var import_type = __toESM(require_type());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\viet-nam.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\viet-nam.tsx"
  );
  import.meta.hot.lastModified = "1704302078275.3555";
}
var meta = ({
  data
}) => [{
  title: `${lang.restaurantVie[`restaurantVie${data == null ? void 0 : data.language}`]}`
}, {
  name: "description",
  content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng Vi\u1EC7t Nam t\u1EA1i \u0110\xE0 N\u1EB5ng"
}];
function KoreaIndexPage() {
  _s();
  const {
    user,
    types,
    language
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { user, langType: language }, void 0, false, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-[30%] overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Category, { countrySlug: "viet-nam", language, categorys: types }, void 0, false, {
        fileName: "app/routes/viet-nam.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/viet-nam.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/viet-nam.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/viet-nam.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(KoreaIndexPage, "AwcneocR/fAW+v5vxI4tEn8oaDg=", false, function() {
  return [useLoaderData];
});
_c = KoreaIndexPage;
var _c;
$RefreshReg$(_c, "KoreaIndexPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  KoreaIndexPage as default,
  meta
};
//# sourceMappingURL=/build/routes/viet-nam-3MXINNVG.js.map
