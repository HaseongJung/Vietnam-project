import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/icons/PlusIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\PlusIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\PlusIcon.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var PlusIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
  fileName: "app/icons/PlusIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/PlusIcon.tsx",
  lineNumber: 21,
  columnNumber: 31
}, this);
_c = PlusIcon;
var _c;
$RefreshReg$(_c, "PlusIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PlusIcon
};
//# sourceMappingURL=/build/_shared/chunk-PF4WACFH.js.map
