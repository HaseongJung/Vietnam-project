import {
  lang
} from "/build/_shared/chunk-WLICR2AU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link,
  NavLink
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Container.tsx"
  );
  import.meta.hot.lastModified = "1691380743000";
}
var Container = ({
  children,
  customClass = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: ["w-full min-h-screen mx-auto p-2 md:py-5 md:px-4 md:h-screen", customClass].join(" "), children }, void 0, false, {
  fileName: "app/components/Container.tsx",
  lineNumber: 24,
  columnNumber: 7
}, this);
_c = Container;
var _c;
$RefreshReg$(_c, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Sidebar.tsx
var import_react2 = __toESM(require_react());

// app/icons/BarIcon.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\BarIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\BarIcon.tsx"
  );
  import.meta.hot.lastModified = "1690972796000";
}
var BarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-9 h-9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }, void 0, false, {
  fileName: "app/icons/BarIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/BarIcon.tsx",
  lineNumber: 21,
  columnNumber: 30
}, this);
_c2 = BarIcon;
var _c2;
$RefreshReg$(_c2, "BarIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/DashboardIcon.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\DashboardIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\DashboardIcon.tsx"
  );
  import.meta.hot.lastModified = "1690959333000";
}
var DashboardIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, false, {
  fileName: "app/icons/DashboardIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/DashboardIcon.tsx",
  lineNumber: 21,
  columnNumber: 36
}, this);
_c3 = DashboardIcon;
var _c3;
$RefreshReg$(_c3, "DashboardIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/FavoriteIcon.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\FavoriteIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\FavoriteIcon.tsx"
  );
  import.meta.hot.lastModified = "1690959333000";
}
var FavoriteIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" }, void 0, false, {
  fileName: "app/icons/FavoriteIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/FavoriteIcon.tsx",
  lineNumber: 21,
  columnNumber: 35
}, this);
_c4 = FavoriteIcon;
var _c4;
$RefreshReg$(_c4, "FavoriteIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/HomeIcon.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\HomeIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\HomeIcon.tsx"
  );
  import.meta.hot.lastModified = "1690959333000";
}
var HomeIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" }, void 0, false, {
  fileName: "app/icons/HomeIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/HomeIcon.tsx",
  lineNumber: 21,
  columnNumber: 31
}, this);
_c5 = HomeIcon;
var _c5;
$RefreshReg$(_c5, "HomeIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/LogoIcon.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\LogoIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\LogoIcon.tsx"
  );
  import.meta.hot.lastModified = "1690959333000";
}
var LogoIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" }, void 0, false, {
  fileName: "app/icons/LogoIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/LogoIcon.tsx",
  lineNumber: 21,
  columnNumber: 31
}, this);
_c6 = LogoIcon;
var _c6;
$RefreshReg$(_c6, "LogoIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/LogoutIcon.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\LogoutIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\LogoutIcon.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
var LogoutIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" }, void 0, false, {
  fileName: "app/icons/LogoutIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/LogoutIcon.tsx",
  lineNumber: 21,
  columnNumber: 33
}, this);
_c7 = LogoutIcon;
var _c7;
$RefreshReg$(_c7, "LogoutIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/ScheduleIcon.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\ScheduleIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\ScheduleIcon.tsx"
  );
  import.meta.hot.lastModified = "1691380743000";
}
var ScheduleIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" }, void 0, false, {
  fileName: "app/icons/ScheduleIcon.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/icons/ScheduleIcon.tsx",
  lineNumber: 21,
  columnNumber: 35
}, this);
_c8 = ScheduleIcon;
var _c8;
$RefreshReg$(_c8, "ScheduleIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/icons/SettingIcon.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\icons\\\\SettingIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\icons\\SettingIcon.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
var SettingIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" }, void 0, false, {
    fileName: "app/icons/SettingIcon.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
    fileName: "app/icons/SettingIcon.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/icons/SettingIcon.tsx",
  lineNumber: 21,
  columnNumber: 34
}, this);
_c9 = SettingIcon;
var _c9;
$RefreshReg$(_c9, "SettingIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Sidebar.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Sidebar.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
function Sidebar({
  user = null,
  langType
}) {
  _s();
  let userRole;
  if (user) {
    user.role > 0 ? userRole = true : userRole = false;
  }
  const [isBar, setIsBar] = (0, import_react2.useState)(false);
  const handleIsBar = () => {
    setIsBar((prev) => !prev);
  };
  const SIDEBAR_LIST = [{
    name: lang.dashboard[`dashboard${langType}`],
    url: "/admin",
    Icon: DashboardIcon,
    isShow: userRole
  }, {
    name: lang.home[`home${langType}`],
    url: "/",
    Icon: HomeIcon,
    isShow: true
  }, {
    name: lang.favorite[`favorite${langType}`],
    url: "/favorite",
    Icon: FavoriteIcon,
    isShow: true
  }, {
    name: lang.schedule[`schedule${langType}`],
    url: "/schedule",
    Icon: ScheduleIcon,
    isShow: true
  }, {
    name: lang.settings[`settings${langType}`],
    url: "/settings",
    Icon: SettingIcon,
    isShow: true
  }].filter((it) => it.isShow);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `fixed z-10 top-[-1px] bottom-0 rounded-[10px] px-4 py-10 bg-white w-[240px] py-5 flex flex-col justify-between transition-all duration-500 ${isBar ? "left-1" : "left-[-250px]"} md:static md:w-[200px] md:px-0`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link, { to: "/", title: "dutago", className: "inline-flex justify-center", onClick: handleIsBar, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Dutago" }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LogoIcon, {}, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col mt-20", onClick: handleIsBar, children: SIDEBAR_LIST.map(({
          name,
          url,
          Icon
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NavLink, { to: url, className: ({
          isActive
        }) => `flex p-4 rounded-xl font-medium hover:text-white hover:bg-[#1ec28b] ${isActive ? "bg-[#1ec28b] text-white shadow-lg shadow-[#a7e7d1]" : "text-slate-500"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Icon, {}, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-2", children: name }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this)
        ] }, url, true, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { action: "/logout", method: "post", className: "flex justify-center text-slate-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", color: "error", className: "p-2 flex hover:text-[#1ec28b]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LogoutIcon, {}, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        lang.logout[`logout${langType}`]
      ] }, void 0, true, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center font-normal text-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link, { to: "/login", className: "hover:text-[#1ec28b]", onClick: handleIsBar, children: lang.login[`login${langType}`] }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mx-1", children: "/" }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link, { to: "/signup", className: "hover:text-[#1ec28b]", onClick: handleIsBar, children: lang.signup[`signup${langType}`] }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 103,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "absolute right-4 top-4 text-[#1ec28b] md:hidden", onClick: handleIsBar, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(BarIcon, {}, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(Sidebar, "snF2NQgQhC41M2o8MlxyeSaoKwQ=");
_c10 = Sidebar;
var _c10;
$RefreshReg$(_c10, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Container,
  ScheduleIcon,
  Sidebar
};
//# sourceMappingURL=/build/_shared/chunk-AHWWUA6F.js.map
