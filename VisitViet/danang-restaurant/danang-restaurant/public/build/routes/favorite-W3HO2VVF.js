import {
  ItemRestaurant
} from "/build/_shared/chunk-76C3YBRW.js";
import {
  Container,
  Sidebar
} from "/build/_shared/chunk-AHWWUA6F.js";
import {
  createRestaurantSlug
} from "/build/_shared/chunk-P4TKK2KA.js";
import "/build/_shared/chunk-Y6KR4CRJ.js";
import {
  lang
} from "/build/_shared/chunk-WLICR2AU.js";
import {
  require_restaurants
} from "/build/_shared/chunk-66C4EUGW.js";
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

// app/routes/favorite.tsx
var import_node = __toESM(require_node());
var import_restaurants = __toESM(require_restaurants());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\favorite.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\favorite.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
var meta = ({
  data
}) => [{
  title: `${lang.favorite[`favorite${data == null ? void 0 : data.language}`]}`
}];
function FavoritePage() {
  _s();
  const {
    user,
    language,
    favorites
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { user, langType: language }, void 0, false, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-6 rounded-2xl bg-white mt-10 overflow-y-auto md:mt-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold pb-4 border-b", children: lang.favorite[`favorite${language}`] }, void 0, false, {
        fileName: "app/routes/favorite.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-4 pt-4", children: favorites && favorites.map(({
        restaurant,
        countrySlug,
        typeSlug,
        ...favorite
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemRestaurant, { url: createRestaurantSlug({
        countrySlug,
        typeSlug,
        id: restaurant.id
      }), image: restaurant.images[0].url || "", name: restaurant[`name${language}`], address: restaurant[`address${language}`], rating: restaurant.rating || 0, customClass: "lg:border" }, restaurant.id, false, {
        fileName: "app/routes/favorite.tsx",
        lineNumber: 75,
        columnNumber: 19
      }, this)) }, void 0, false, {
        fileName: "app/routes/favorite.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/favorite.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(FavoritePage, "yDRI3VRESgz6OIjJvVTmdGHTUyQ=", false, function() {
  return [useLoaderData];
});
_c = FavoritePage;
var _c;
$RefreshReg$(_c, "FavoritePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FavoritePage as default,
  meta
};
//# sourceMappingURL=/build/routes/favorite-W3HO2VVF.js.map
