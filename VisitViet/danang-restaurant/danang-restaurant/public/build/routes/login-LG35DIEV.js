import {
  require_user
} from "/build/_shared/chunk-G3ACJGOK.js";
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
  useActionData,
  useLoaderData,
  useSearchParams
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

// app/routes/login.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1691541212000";
}
var meta = ({
  data
}) => [{
  title: `${lang.login[`login${data == null ? void 0 : data.language}`]}`
}];
function LoginPage() {
  var _a, _b, _c2, _d;
  _s();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData();
  const {
    language
  } = useLoaderData();
  const usernameRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c3, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.username) {
      (_b2 = usernameRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c3 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c3.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen flex-col items-center justify-center bg-[#e5eeec]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-8 rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold mb-4 text-xl text-[#1ec28b]", children: lang.loginTitle[`loginTitle${language}`] }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-semibold text-gray-700", children: lang.username[`username${language}`] }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: usernameRef, id: "username", required: true, autoFocus: true, name: "username", type: "username", autoComplete: "username", "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.username) ? true : void 0, "aria-describedby": "username-error", className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "username-error", children: actionData.errors.username }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 126,
            columnNumber: 50
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-semibold text-gray-700", children: lang.password[`password${language}`] }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", ref: passwordRef, name: "password", type: "password", autoComplete: "current-password", "aria-invalid": ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) ? true : void 0, "aria-describedby": "password-error", className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 138,
            columnNumber: 50
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "remember", name: "remember", type: "checkbox", className: "h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember", className: "ml-2 block text-sm text-gray-900", children: lang.remember[`remember${language}`] }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full justify-center p-2 rounded-2xl text-white uppercase font-bold bg-[#1ec28b] hover:scale-105 hover:bg-[#0ea16f] transition-all", children: lang.login[`login${language}`] }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        lang.loginSubTitle[`loginSubTitle${language}`],
        "?"
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "ml-2 text-[#1ec28b] font-semibold hover:text-[#0ea16f]", children: lang.signup[`signup${language}`] }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 117,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 116,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "TQyC6iNZPW1J4P2U0/C1C565fws=", false, function() {
  return [useSearchParams, useActionData, useLoaderData];
});
_c = LoginPage;
var _c;
$RefreshReg$(_c, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-LG35DIEV.js.map
