import {
  RestaurantInfor
} from "/build/_shared/chunk-3VOIM7E7.js";
import "/build/_shared/chunk-UTNS66SI.js";
import "/build/_shared/chunk-Y6KR4CRJ.js";
import "/build/_shared/chunk-WLICR2AU.js";
import {
  require_restaurants
} from "/build/_shared/chunk-66C4EUGW.js";
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

// app/routes/korea.$slug._index.tsx
var import_node = __toESM(require_node());
var import_restaurants = __toESM(require_restaurants());
var import_type = __toESM(require_type());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\korea.$slug._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\korea.$slug._index.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
function CategoryKoreaPage() {
  _s();
  const {
    language,
    restaurants
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:pl-6 lg:w-[70%] md:overflow-y-auto md:max-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-4", children: restaurants.map((restaurant) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RestaurantInfor, { url: restaurant.id, name: restaurant[`name${language}`], address: restaurant[`address${language}`], open: restaurant.openingTime, close: restaurant.closingTime, rating: restaurant.rating || 0, priceLow: restaurant.priceLow || void 0, priceHigh: restaurant.priceHigh || void 0, images: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0, language }, restaurant.id, false, {
      fileName: "app/routes/korea.$slug._index.tsx",
      lineNumber: 64,
      columnNumber: 40
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/korea.$slug._index.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/korea.$slug._index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(CategoryKoreaPage, "a3dmF//UEPWrAByrwl70brrc9qw=", false, function() {
  return [useLoaderData];
});
_c = CategoryKoreaPage;
var _c;
$RefreshReg$(_c, "CategoryKoreaPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CategoryKoreaPage as default
};
//# sourceMappingURL=/build/routes/korea.$slug._index-554R36FJ.js.map
