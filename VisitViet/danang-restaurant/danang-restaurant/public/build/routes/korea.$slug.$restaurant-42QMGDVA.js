import {
  FaStar,
  HeartIcon,
  HeartIconUsed,
  SliderImages,
  require_favorites,
  require_rating
} from "/build/_shared/chunk-WVSGDVWZ.js";
import "/build/_shared/chunk-DQ7TSKHG.js";
import {
  createRestaurantSlug
} from "/build/_shared/chunk-P4TKK2KA.js";
import {
  MoneyIcon,
  RestaurantInfor
} from "/build/_shared/chunk-3VOIM7E7.js";
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
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  useLoaderData,
  useSubmit
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

// app/routes/korea.$slug.$restaurant.tsx
var import_node = __toESM(require_node());
var import_favorites = __toESM(require_favorites());
var import_restaurants = __toESM(require_restaurants());
var import_rating = __toESM(require_rating());
var import_session = __toESM(require_session());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\korea.$slug.$restaurant.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\korea.$slug.$restaurant.tsx"
  );
  import.meta.hot.lastModified = "1704441885389.7654";
}
var meta = ({
  data
}) => [{
  title: `${data == null ? void 0 : data.restaurant[`name${data.language}`]}`
}, {
  name: "description",
  content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c t\u1EA1i \u0110\xE0 N\u1EB5ng"
}];
function RestaurantKoreaPage() {
  _s();
  const {
    language,
    restaurant,
    isFavorited,
    value_rating,
    restaurants
  } = useLoaderData();
  const submit = useSubmit();
  const [data, setData] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    fetch(`http://127.0.0.1:8080/content-based/${restaurant.nameVie}`).then((response) => response.json()).then((data2) => setData(data2)).catch((error) => console.error(error));
  }, [restaurant.nameVie]);
  console.log("->>>>>>>>>>>>>>>>>>>>>>>>>", data);
  const predictRes = restaurants.filter((item) => data == null ? void 0 : data.includes(item == null ? void 0 : item.nameVie));
  const [rating, setRating] = (0, import_react2.useState)(value_rating || 0);
  const [hover, setHover] = (0, import_react2.useState)();
  function handleChang(event) {
    submit(event.currentTarget, {
      replace: true
    });
  }
  const handleSubmit = (event) => {
    const dateTimeInput = document.getElementById("dateTime");
    if (!dateTimeInput.value) {
      event.preventDefault();
      dateTimeInput.focus();
      alert(`${lang.timeRequired[`timeRequired${language}`]}`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:w-[70%] lg:pl-6 lg:overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onChange: handleChang, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "favorite", defaultChecked: Boolean(isFavorited), className: "absolute right-4 top-4 z-20 w-5 h-5 opacity-0 cursor-pointer" }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-4 top-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center", children: isFavorited ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIconUsed, {}, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 172,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIcon, {}, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 172,
        columnNumber: 46
      }, this) }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[200px] md:h-[240px] lg:h-[320px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderImages, { images: restaurant.images }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 rounded-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://www.svgrepo.com/show/2732/restaurant.svg", alt: "Restaurant", className: "w-6 h-6" }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs font-bold text-gray-600", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, false, {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 181,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, false, {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 182,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 180,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "rating", type: "text", className: "invisible", value: rating }, void 0, false, {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this),
            [...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaStar, { className: `star ${ratingValue <= (hover || rating) ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`, size: 20, onMouseEnter: () => setHover(ratingValue), onMouseLeave: () => setHover(null), onClick: (e) => {
                setRating(ratingValue);
              } }, void 0, false, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 193,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 192,
                columnNumber: 25
              }, this) }, index, false, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 191,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 190,
                columnNumber: 24
              }, this);
            })
          ] }, void 0, true, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon, {}, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MoneyIcon, {}, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `${restaurant.priceLow ? `\u20A9${restaurant.priceLow}` : ""} ${restaurant.priceHigh ? `- \u20A9${restaurant.priceHigh}` : ""}` }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 213,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon, {}, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 216,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime} - ${lang.close[`close${language}`]}: ${restaurant.closingTime}` }, void 0, false, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 px-2 bg-white rounded-xl md:inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-600 mb-1", children: lang.addSchedule[`addSchedule${language}`] }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: `/schedule?new=${restaurant.id}`, onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", id: "dateTime", name: "dateTime", className: "inline-flex border text-sm p-2 rounded-xl outline-none focus:border-[#1ec28b]" }, void 0, false, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-[#1ec28b] rounded-xl ml-2 text-white text-xs uppercase font-bold py-2 px-4 hover:bg-[#0aae77]", children: lang.save[`save${language}`] }, void 0, false, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold mb-1", children: lang.description[`description${language}`] }, void 0, false, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[15px] text-justify", children: restaurant[`description${language}`] }, void 0, false, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: restaurant.direct || "", title: restaurant[`name${language}`] || "", rel: "noreferrer", target: "_blank", className: "block p-3 my-4 text-center rounded-2xl bg-[#1ec28b] text-white uppercase font-bold lg:w-[40%] lg:ml-auto", children: lang.direction[`direction${language}`] }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 247,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    (predictRes == null ? void 0 : predictRes.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-2xl font-semibold", children: "Related restaurants" }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: predictRes == null ? void 0 : predictRes.map((restaurant2) => {
        var _a, _b, _c2, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RestaurantInfor, { link: createRestaurantSlug({
          countrySlug: (_b = (_a = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _a.country) == null ? void 0 : _b.slug,
          typeSlug: (_d = (_c2 = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _c2.type) == null ? void 0 : _d.slug,
          id: restaurant2.id
        }), name: restaurant2[`name${language}`], address: restaurant2[`address${language}`], open: restaurant2.openingTime, priceLow: restaurant2.priceLow || void 0, priceHigh: restaurant2.priceHigh || void 0, close: restaurant2.closingTime, rating: restaurant2.rating || 0, images: ((_e = restaurant2.images[0]) == null ? void 0 : _e.url) || void 0, language }, restaurant2.id, false, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 255,
          columnNumber: 44
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 252,
      columnNumber: 34
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/korea.$slug.$restaurant.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
}
_s(RestaurantKoreaPage, "Vla2+rzKwl04GcV3pz7wM/KSMCY=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = RestaurantKoreaPage;
var _c;
$RefreshReg$(_c, "RestaurantKoreaPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RestaurantKoreaPage as default,
  meta
};
//# sourceMappingURL=/build/routes/korea.$slug.$restaurant-42QMGDVA.js.map
