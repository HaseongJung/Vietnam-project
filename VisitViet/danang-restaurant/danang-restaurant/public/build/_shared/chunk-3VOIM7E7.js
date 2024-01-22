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

// app/icons/MoneyIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\MoneyIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\MoneyIcon.tsx"
  );
  import.meta.hot.lastModified = "1691829008000";
}
var MoneyIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "22", height: "19", viewBox: "0 0 22 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1.25 15.75C6.58561 15.7457 11.898 16.4522 17.047 17.851C17.774 18.049 18.5 17.509 18.5 16.755V15.75M2.75 1.5V2.25C2.75 2.44891 2.67098 2.63968 2.53033 2.78033C2.38968 2.92098 2.19891 3 2 3H1.25M1.25 3V2.625C1.25 2.004 1.754 1.5 2.375 1.5H19.25M1.25 3V12M19.25 1.5V2.25C19.25 2.664 19.586 3 20 3H20.75M19.25 1.5H19.625C20.246 1.5 20.75 2.004 20.75 2.625V12.375C20.75 12.996 20.246 13.5 19.625 13.5H19.25M1.25 12V12.375C1.25 12.6734 1.36853 12.9595 1.5795 13.1705C1.79048 13.3815 2.07663 13.5 2.375 13.5H2.75M1.25 12H2C2.19891 12 2.38968 12.079 2.53033 12.2197C2.67098 12.3603 2.75 12.5511 2.75 12.75V13.5M19.25 13.5V12.75C19.25 12.5511 19.329 12.3603 19.4697 12.2197C19.6103 12.079 19.8011 12 20 12H20.75M19.25 13.5H2.75M14 7.5C14 8.29565 13.6839 9.05871 13.1213 9.62132C12.5587 10.1839 11.7956 10.5 11 10.5C10.2044 10.5 9.44129 10.1839 8.87868 9.62132C8.31607 9.05871 8 8.29565 8 7.5C8 6.70435 8.31607 5.94129 8.87868 5.37868C9.44129 4.81607 10.2044 4.5 11 4.5C11.7956 4.5 12.5587 4.81607 13.1213 5.37868C13.6839 5.94129 14 6.70435 14 7.5ZM17 7.5H17.008V7.508H17V7.5ZM5 7.5H5.008V7.508H5V7.5Z", stroke: "#1ec28b", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
  fileName: "app/icons/MoneyIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/MoneyIcon.tsx",
  lineNumber: 21,
  columnNumber: 32
}, this);
_c = MoneyIcon;
var _c;
$RefreshReg$(_c, "MoneyIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RestaurantInfor.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\RestaurantInfor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\RestaurantInfor.tsx"
  );
  import.meta.hot.lastModified = "1704442077893.7334";
}
var RestaurantInfor = ({
  url,
  name,
  address,
  open,
  close,
  rating,
  priceLow,
  priceHigh,
  images,
  language,
  link
}) => !url ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `${link}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]", style: {
  backgroundImage: `url(${images}`
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://www.svgrepo.com/show/2732/restaurant.svg", alt: "Restaurant", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, false, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 47,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, false, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 44,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MapPinIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: address }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 57,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MoneyIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 65,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `${priceLow ? `\u20A9${priceLow}` : ""} ${priceHigh ? `- \u20A9${priceHigh}` : ""}` }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClockIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${open} - ${lang.close[`close${language}`]}: ${close}` }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 69,
    columnNumber: 11
  }, this)
] }, void 0, true, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 43,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 40,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 39,
  columnNumber: 14
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: url, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]", style: {
  backgroundImage: `url(${images}`
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://www.svgrepo.com/show/2732/restaurant.svg", alt: "Restaurant", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, false, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, false, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 82,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MapPinIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 97,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: address }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 95,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MoneyIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `${priceLow ? `\u20A9${priceLow}` : ""} ${priceHigh ? `- \u20A9${priceHigh}` : ""}` }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 101,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClockIcon, {}, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 109,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${open} - ${lang.close[`close${language}`]}: ${close}` }, void 0, false, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 111,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 107,
    columnNumber: 11
  }, this)
] }, void 0, true, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 81,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 78,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 77,
  columnNumber: 12
}, this);
_c2 = RestaurantInfor;
var _c2;
$RefreshReg$(_c2, "RestaurantInfor");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MoneyIcon,
  RestaurantInfor
};
//# sourceMappingURL=/build/_shared/chunk-3VOIM7E7.js.map
