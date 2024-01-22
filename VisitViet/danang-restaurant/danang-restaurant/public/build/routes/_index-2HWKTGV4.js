import {
  ItemRestaurant
} from "/build/_shared/chunk-76C3YBRW.js";
import {
  Container,
  Sidebar
} from "/build/_shared/chunk-AHWWUA6F.js";
import {
  require_lib
} from "/build/_shared/chunk-DQ7TSKHG.js";
import {
  createRestaurantSlug
} from "/build/_shared/chunk-P4TKK2KA.js";
import {
  ClockIcon
} from "/build/_shared/chunk-UTNS66SI.js";
import {
  MapPinIcon
} from "/build/_shared/chunk-Y6KR4CRJ.js";
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
  Link,
  useLoaderData
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node());
var import_react3 = __toESM(require_react());

// app/components/Slide.tsx
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Slide.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Slide.tsx"
  );
}
function SimpleSlider({
  restaurants,
  language
}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, className: "", children: restaurants && restaurants.map((restaurant) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: createRestaurantSlug({
      countrySlug: restaurant.countryType.country.slug,
      typeSlug: restaurant.countryType.type.slug,
      id: restaurant.id
    }), className: "h-[200px] md:h-[340px] rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundImage: `url(${((_a = restaurant.images[0]) == null ? void 0 : _a.url) || ""})`,
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: "10px",
      position: "relative"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-10 bg-white left-1 right-1 bottom-1 py-2 px-4 rounded-xl lg:inline-block lg:right-[60%] md:p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://www.svgrepo.com/show/2732/restaurant.svg", alt: "Restaurant", className: "w-6 h-6" }, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, false, {
            fileName: "app/components/Slide.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, false, {
            fileName: "app/components/Slide.tsx",
            lineNumber: 64,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Slide.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden items-center text-sm mb-1 md:flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon, {}, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 77,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 79,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Slide.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden items-center text-xs font-semibold md:flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon, {}, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 82,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime}H - ${lang.close[`close${language}`]}: ${restaurant.closingTime}H` }, void 0, false, {
          fileName: "app/components/Slide.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Slide.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Slide.tsx",
      lineNumber: 58,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Slide.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this) }, restaurant.id, false, {
      fileName: "app/components/Slide.tsx",
      lineNumber: 41,
      columnNumber: 53
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/Slide.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = SimpleSlider;
var _c;
$RefreshReg$(_c, "SimpleSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/BuildingIcon.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\BuildingIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\BuildingIcon.tsx"
  );
  import.meta.hot.lastModified = "1690959333000";
}
var BuildingIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" }, void 0, false, {
  fileName: "app/icons/BuildingIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/BuildingIcon.tsx",
  lineNumber: 21,
  columnNumber: 35
}, this);
_c2 = BuildingIcon;
var _c2;
$RefreshReg$(_c2, "BuildingIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_restaurants = __toESM(require_restaurants());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1704442715957.5164";
}
var meta = ({
  data
}) => [
  // { title: ${lang.homePage[homePage${data?.language as Language}`]}` },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c v\xE0 Vi\u1EC7t Nam t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function HomePage() {
  _s();
  const {
    user,
    language,
    topRestaurants,
    listRestaurants
  } = useLoaderData();
  const [data, setData] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    if (user) {
      fetch(`http://127.0.0.1:8080/${user.id}`).then((response) => response.json()).then((data2) => setData(data2)).catch((error) => console.error(error));
    }
  });
  const predictRes = listRestaurants.filter((item) => data == null ? void 0 : data.includes(item == null ? void 0 : item.id));
  console.log("topRestaurants", topRestaurants);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Sidebar, { user, langType: language }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:overflow-y-auto md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col lg:w-[60%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 md:mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold", children: lang.hello[`hello${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://cdn-icons-png.flaticon.com/512/7496/7496766.png", alt: "Hand Wave", className: "ml-2 w-12 h-12" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-500", children: lang.welcome[`welcome${language}`] }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleSlider, { restaurants: topRestaurants, language }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex pt-6 pb-4 md:flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-1 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/viet-nam", title: lang.countryVN[`countryVN${language}`], className: "flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/BanhMy.jpg')] md:h-[200px] lg:h-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-[14px] text-gray-200", children: lang.titleToCountry[`titleToCountry${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "text-xl font-semibold text-slate-300", children: lang.countryVN[`countryVN${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-1 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/korea", title: lang.countryKO[`countryKO${language}`], className: "flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/ChaCa.jpg')] md:h-[200px] lg:h-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-[14px] text-gray-200", children: lang.titleToCountry[`titleToCountry${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "text-xl font-semibold text-slate-300", children: lang.countryKO[`countryKO${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full py-4 px-1 lg:px-6 lg:h-[50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-bold mr-2", children: lang.bestResttaurant[`bestResttaurant${language}`] }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 121,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BuildingIcon, {}, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 125,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 124,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 120,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm", children: lang.subBestResttaurant[`subBestResttaurant${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 128,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 119,
            columnNumber: 19
          }, this),
          topRestaurants.map((restaurant) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ItemRestaurant, { url: createRestaurantSlug({
              countrySlug: restaurant.countryType.country.slug,
              typeSlug: restaurant.countryType.type.slug,
              id: restaurant.id
            }), name: restaurant[`name${language}`], image: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0, rating: restaurant.rating || 0, address: restaurant[`address${language}`] }, restaurant.id, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 132,
              columnNumber: 53
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full py-4 px-1 lg:px-6 lg:h-[50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-bold mr-2", children: lang.predictResttaurant[`predictResttaurant${language}`] }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 145,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BuildingIcon, {}, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 149,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 148,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 144,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm", children: lang.subPredictResttaurant[`subPredictResttaurant${language}`] }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this),
          predictRes == null ? void 0 : predictRes.map((restaurant) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ItemRestaurant, { url: createRestaurantSlug({
              countrySlug: restaurant.countryType.country.slug,
              typeSlug: restaurant.countryType.type.slug,
              id: restaurant.id
            }), name: restaurant[`name${language}`], image: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0, rating: restaurant.rating || 0, address: restaurant[`address${language}`] }, restaurant.id, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 156,
              columnNumber: 52
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 142,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(HomePage, "kXMWJRo/K8YZ22eojCwmny6gK70=", false, function() {
  return [useLoaderData];
});
_c3 = HomePage;
var _c3;
$RefreshReg$(_c3, "HomePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HomePage as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-2HWKTGV4.js.map
