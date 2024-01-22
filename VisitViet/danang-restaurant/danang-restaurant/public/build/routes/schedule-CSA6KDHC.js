import {
  Container,
  ScheduleIcon,
  Sidebar
} from "/build/_shared/chunk-AHWWUA6F.js";
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
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/schedule.server
var require_schedule = __commonJS({
  "empty-module:~/models/schedule.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/schedule.tsx
var import_node = __toESM(require_node());

// app/icons/RemoveIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\RemoveIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\RemoveIcon.tsx"
  );
  import.meta.hot.lastModified = "1691380743000";
}
var RemoveIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" }, void 0, false, {
  fileName: "app/icons/RemoveIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/RemoveIcon.tsx",
  lineNumber: 21,
  columnNumber: 33
}, this);
_c = RemoveIcon;
var _c;
$RefreshReg$(_c, "RemoveIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ScheduleRestaurant.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ScheduleRestaurant.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ScheduleRestaurant.tsx"
  );
  import.meta.hot.lastModified = "1704442277269.6445";
}
var ScheduleRestaurant = ({
  id,
  url,
  restaurant,
  day,
  hour,
  language
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:flex lg:justify-end relative", children: [
    day && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex bg-[#cdd0d6] p-2 justify-center items-center rounded-xl my-2 lg:py-4 lg:px-8 lg:mr-2 pointer-events-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mr-2 text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScheduleIcon, {}, void 0, false, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold", children: day }, void 0, false, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: url, title: restaurant[`name${language}`], className: "block p-3 rounded-2xl bg-white mb-1 lg:min-w-[400px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inline-flex px-3 rounded-[5px] items-center justify-center text-[#1ec28b] bg-green-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClockIcon, {}, void 0, false, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm", children: hour }, void 0, false, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://www.svgrepo.com/show/2732/restaurant.svg", alt: "Restaurant", className: "w-6 h-6" }, void 0, false, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "uppercase text-xs font-bold text-gray-600", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MapPinIcon, {}, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClockIcon, {}, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime}H - ${lang.close[`close${language}`]}: ${restaurant.closingTime}H` }, void 0, false, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", action: `/schedule?remove=${id}`, className: "px-4 absolute right-4 bottom-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "text-red-500 hover:text-red-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RemoveIcon, {}, void 0, false, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ScheduleRestaurant.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c2 = ScheduleRestaurant;
var _c2;
$RefreshReg$(_c2, "ScheduleRestaurant");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/helpers/date.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\helpers\\date.ts"
  );
  import.meta.hot.lastModified = "1691380743000";
}
var getDateFormatVN = (date) => {
  return new Date(date).toLocaleDateString("vi-vn");
};
var getHourFormatVN = (date) => {
  return new Date(date).toLocaleTimeString("vi-vn");
};

// app/routes/schedule.tsx
var import_schedule = __toESM(require_schedule());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\schedule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\schedule.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
var meta = ({
  data
}) => [{
  title: `${lang.schedule[`schedule${data == null ? void 0 : data.language}`]}`
}];
function SchedulePage() {
  _s();
  const {
    user,
    language,
    schedules
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Sidebar, { user, langType: language }, void 0, false, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full overflow-y-auto rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 md:mt-0", children: schedules.map((schedule, index) => {
      if (index === 0 || getDateFormatVN(schedule.dateTime) !== getDateFormatVN(schedules[index - 1].dateTime)) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScheduleRestaurant, { id: schedule.id, url: createRestaurantSlug({
          countrySlug: schedule.restaurant.countryType.country.slug,
          typeSlug: schedule.restaurant.countryType.type.slug,
          id: schedule.restaurant.id
        }), restaurant: schedule.restaurant, hour: getHourFormatVN(schedule.dateTime).slice(0, 5), day: getDateFormatVN(schedule.dateTime), language }, schedule.id, false, {
          fileName: "app/routes/schedule.tsx",
          lineNumber: 95,
          columnNumber: 22
        }, this);
      } else {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScheduleRestaurant, { id: schedule.id, url: createRestaurantSlug({
          countrySlug: schedule.restaurant.countryType.country.slug,
          typeSlug: schedule.restaurant.countryType.type.slug,
          id: schedule.restaurant.id
        }), restaurant: schedule.restaurant, hour: getHourFormatVN(schedule.dateTime).slice(0, 5), language }, schedule.id, false, {
          fileName: "app/routes/schedule.tsx",
          lineNumber: 101,
          columnNumber: 22
        }, this);
      }
    }) }, void 0, false, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/schedule.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(SchedulePage, "l1F5FJXD66IVBwpdoCwolxnJoGo=", false, function() {
  return [useLoaderData];
});
_c3 = SchedulePage;
var _c3;
$RefreshReg$(_c3, "SchedulePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SchedulePage as default,
  meta
};
//# sourceMappingURL=/build/routes/schedule-CSA6KDHC.js.map
