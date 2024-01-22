import {
  Container,
  Sidebar
} from "/build/_shared/chunk-AHWWUA6F.js";
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

// empty-module:~/cookies.server
var require_cookies = __commonJS({
  "empty-module:~/cookies.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/settings.tsx
var import_node = __toESM(require_node());
var import_cookies = __toESM(require_cookies());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\settings.tsx"
  );
  import.meta.hot.lastModified = "1691541212000";
}
var meta = ({
  data
}) => [{
  title: `${lang.settings[`settings${data == null ? void 0 : data.language}`]}`
}];
function SettingsPage() {
  _s();
  const {
    user,
    language
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { user, langType: language }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 justify-between md:mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-1", children: lang.language[`language${language}`] }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block w-[50%] text-sm font-medium text-gray-900 dark:text-white lg:w-[20%]", defaultValue: language, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "language", defaultValue: language, className: "bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Eng", children: "English" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Kor", children: "\uD55C\uAD6D\uC778" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Vie", children: "Ti\u1EBFng Vi\u1EC7t" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-6 px-4 py-2 rounded-xl text-white font-semibold uppercase text-[14px] bg-[#1ec28b]", children: lang.save[`save${language}`] }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(SettingsPage, "erny9+83Lt5qlXUZ61wCTxq3xvk=", false, function() {
  return [useLoaderData];
});
_c = SettingsPage;
var _c;
$RefreshReg$(_c, "SettingsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SettingsPage as default,
  meta
};
//# sourceMappingURL=/build/routes/settings-L52Z5D4N.js.map
