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

// app/routes/404.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());

// app/icons/ArrowLongLeft.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\ArrowLongLeft.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\ArrowLongLeft.tsx"
  );
  import.meta.hot.lastModified = "1691650770000";
}
var ArrowLongLeft = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-5 h-5 rtl:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" }, void 0, false, {
  fileName: "app/icons/ArrowLongLeft.tsx",
  lineNumber: 22,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "app/icons/ArrowLongLeft.tsx",
  lineNumber: 21,
  columnNumber: 36
}, this);
_c = ArrowLongLeft;
var _c;
$RefreshReg$(_c, "ArrowLongLeft");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/ExclamationIcon.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\ExclamationIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\ExclamationIcon.tsx"
  );
  import.meta.hot.lastModified = "1691650770000";
}
var ExclamationIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-8 h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }, void 0, false, {
  fileName: "app/icons/ExclamationIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/ExclamationIcon.tsx",
  lineNumber: 21,
  columnNumber: 38
}, this);
_c2 = ExclamationIcon;
var _c2;
$RefreshReg$(_c2, "ExclamationIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/404.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\404.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\404.tsx"
  );
  import.meta.hot.lastModified = "1691650770000";
}
var meta = ({
  data
}) => [{
  title: `${lang.page404Title[`page404Title${data == null ? void 0 : data.language}`]}`
}];
var goBack = () => {
  window.history.back();
};
function Page404() {
  _s();
  const {
    language
  } = useLoaderData();
  (0, import_react2.useEffect)(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 6e4);
    return () => clearTimeout(timeout);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container h-screen flex items-center px-6 py-24 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center max-w-sm mx-auto text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-3 text-sm font-medium text-yellow-500 rounded-full bg-yellow-100 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExclamationIcon, {}, void 0, false, {
      fileName: "app/routes/404.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/404.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl", children: lang.page404Title[`page404Title${language}`] }, void 0, false, {
      fileName: "app/routes/404.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-4 text-gray-500 dark:text-gray-400", children: lang.page404SubTitle[`page404SubTitle${language}`] }, void 0, false, {
      fileName: "app/routes/404.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: goBack, className: "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ArrowLongLeft, {}, void 0, false, {
          fileName: "app/routes/404.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: lang.back[`back${language}`] }, void 0, false, {
          fileName: "app/routes/404.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/404.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600", children: lang.home[`home${language}`] }, void 0, false, {
        fileName: "app/routes/404.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/404.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-4 text-gray-500 dark:text-gray-400", children: [
      lang.page404TimeTitle[`page404TimeTitle${language}`],
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-medium text-blue-500 dark:text-blue-400", children: [
        " ",
        "1 ",
        lang.minute[`minute${language}`]
      ] }, void 0, true, {
        fileName: "app/routes/404.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/404.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/404.tsx",
    lineNumber: 64,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/404.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/404.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Page404, "SiTOALzGnXtP68sAtDjZ8063xuQ=", false, function() {
  return [useLoaderData];
});
_c3 = Page404;
var _c3;
$RefreshReg$(_c3, "Page404");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page404 as default,
  meta
};
//# sourceMappingURL=/build/routes/404-IT4OTSX3.js.map
