import {
  PlusIcon
} from "/build/_shared/chunk-PF4WACFH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Button.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var Button = ({
  children,
  startIcon,
  endIcon,
  type = "button",
  color = "primary",
  customClass,
  name,
  value,
  disabled,
  onClick
}) => {
  let baseClass = "flex items-center rounded p-2";
  let stateClass = "";
  switch (color) {
    case "primary":
      stateClass = "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300";
      break;
    case "secondary":
      stateClass = "bg-gray-400 text-white hover:bg-gray-500 disabled:bg-gray-300";
      break;
    case "success":
      stateClass = "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400";
      break;
    case "warning":
      stateClass = "bg-amber-400 text-black hover:bg-amber-500 disabled:bg-amber-300";
      break;
    case "error":
      stateClass = "bg-rose-500 text-white hover:bg-rose-600 disabled:bg-rose-300";
      break;
    case "outline":
      stateClass = "border border-gray-200 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-800 disabled:opacity-40";
    default:
      break;
  }
  if (stateClass) {
    baseClass += ` ${stateClass}`;
  }
  if (customClass) {
    baseClass += ` ${customClass}`;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type, name, value, className: baseClass, disabled, onClick, children: [
    startIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: startIcon }, void 0, false, {
      fileName: "app/components/Button.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this),
    children,
    endIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-r", children: endIcon }, void 0, false, {
      fileName: "app/components/Button.tsx",
      lineNumber: 66,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Button.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/CheckIcon.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\CheckIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\CheckIcon.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }, void 0, false, {
  fileName: "app/icons/CheckIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/CheckIcon.tsx",
  lineNumber: 21,
  columnNumber: 32
}, this);
_c2 = CheckIcon;
var _c2;
$RefreshReg$(_c2, "CheckIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/TrashIcon.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\TrashIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\TrashIcon.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var TrashIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" }, void 0, false, {
  fileName: "app/icons/TrashIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/TrashIcon.tsx",
  lineNumber: 21,
  columnNumber: 32
}, this);
_c3 = TrashIcon;
var _c3;
$RefreshReg$(_c3, "TrashIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ActionButtons.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ActionButtons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ActionButtons.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var ActionButtons = ({
  isNewItem,
  isSubmitting
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between", children: [
  isNewItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 33,
    columnNumber: 18
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { color: "error", type: "submit", name: "_action", value: "delete", disabled: isSubmitting, startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TrashIcon, {}, void 0, false, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 33,
    columnNumber: 129
  }, this), children: isSubmitting ? "Deleting..." : "Delete" }, void 0, false, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 33,
    columnNumber: 28
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { color: "primary", type: "submit", name: "_action", value: isNewItem ? "add" : "update", disabled: isSubmitting, startIcon: isNewItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PlusIcon, {}, void 0, false, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 36,
    columnNumber: 142
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon, {}, void 0, false, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 36,
    columnNumber: 157
  }, this), children: [
    isNewItem ? isSubmitting ? "Creating..." : "Create" : null,
    isNewItem ? null : isSubmitting ? "Updating..." : "Update"
  ] }, void 0, true, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ActionButtons.tsx",
  lineNumber: 32,
  columnNumber: 7
}, this);
_c4 = ActionButtons;
var _c4;
$RefreshReg$(_c4, "ActionButtons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FormInput.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FormInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FormInput.tsx"
  );
  import.meta.hot.lastModified = "1691460747000";
}
var FormInput = _s((0, import_react.forwardRef)(_c5 = _s(({
  name,
  error,
  type = "text",
  label = "Label",
  required = false,
  defaultValue = "",
  min,
  max,
  step,
  placeholder,
  wrapperClass,
  onBlur
}, ref) => {
  _s();
  const [warningMsg, setWarningMsg] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    if (name === "seoTitle") {
      const MAX_LEN = 70;
      if (defaultValue.length > MAX_LEN) {
        setWarningMsg(`Too long, max length should be ${MAX_LEN}`);
      }
    }
  }, [defaultValue, name]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: wrapperClass != null ? wrapperClass : "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: label }, void 0, false, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { ref, defaultValue, onBlur, required, id: name, name, type, placeholder, min, max, step, autoComplete: name, "aria-invalid": error ? true : void 0, "aria-describedby": `${name}-error`, className: `w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${warningMsg ? "border-amber-400" : ""}` }, void 0, false, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      warningMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "block w-[20px] h-[20px] text-center text-black rounded-full bg-amber-400 leading-[20px]", children: "!" }, void 0, false, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 55,
        columnNumber: 22
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-red-700", id: `${name}-error`, children: error }, void 0, false, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this),
    warningMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-xs text-amber-500", children: warningMsg }, void 0, false, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 62,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FormInput.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}, "o5DF2+A5veubQ2AnG3HYpS3KCjo=")), "o5DF2+A5veubQ2AnG3HYpS3KCjo=");
_c22 = FormInput;
FormInput.displayName = "FormInput";
var _c5;
var _c22;
$RefreshReg$(_c5, "FormInput$forwardRef");
$RefreshReg$(_c22, "FormInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ActionButtons,
  FormInput
};
//# sourceMappingURL=/build/_shared/chunk-V7DWSR4B.js.map
