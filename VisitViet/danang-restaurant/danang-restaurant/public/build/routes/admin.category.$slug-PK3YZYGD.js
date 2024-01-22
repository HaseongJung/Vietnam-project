import {
  ActionButtons,
  FormInput
} from "/build/_shared/chunk-V7DWSR4B.js";
import {
  require_type
} from "/build/_shared/chunk-2ESX57M3.js";
import "/build/_shared/chunk-PF4WACFH.js";
import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/admin.category.$slug.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_type = __toESM(require_type());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.category.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.category.$slug.tsx"
  );
  import.meta.hot.lastModified = "1704730700866.3784";
}
function AdmintypeDetailPage() {
  var _a, _b, _c2, _d, _e, _f;
  _s();
  const {
    type
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !type;
  const idRef = (0, import_react2.useRef)(null);
  const slugRef = (0, import_react2.useRef)(null);
  const nameEngRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c3, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.typeId) {
      (_b2 = idRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c3 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c3.slug) {
      (_d2 = slugRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "w-full space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 content-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "typeId", ref: idRef, required: true, label: "Type ID", placeholder: "Type ID", defaultValue: type == null ? void 0 : type.typeId, error: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.typeId }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-[1fr_60px] gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "slug", ref: slugRef, required: true, label: "Category Slug", placeholder: "Category Slug", defaultValue: type == null ? void 0 : type.slug, error: (_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.slug }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.category.$slug.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 content-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameEng", label: "Name English", required: true, placeholder: "Type name English", ref: nameEngRef, defaultValue: (_d = type == null ? void 0 : type.nameEng) == null ? void 0 : _d.toString() }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameKor", label: "Name Korea", required: true, placeholder: "Type name of Korea", ref: nameEngRef, defaultValue: (_e = type == null ? void 0 : type.nameKor) == null ? void 0 : _e.toString() }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameVie", label: "Name VietNam", required: true, placeholder: "Type name of VietNam", ref: nameEngRef, defaultValue: (_f = type == null ? void 0 : type.nameVie) == null ? void 0 : _f.toString() }, void 0, false, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.category.$slug.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.category.$slug.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, false, {
      fileName: "app/routes/admin.category.$slug.tsx",
      lineNumber: 212,
      columnNumber: 9
    }, this)
  ] }, (_a = type == null ? void 0 : type.slug) != null ? _a : "new", true, {
    fileName: "app/routes/admin.category.$slug.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.category.$slug.tsx",
    lineNumber: 187,
    columnNumber: 10
  }, this);
}
_s(AdmintypeDetailPage, "dOrXCJM2n5vsu7Z9mMPZ9xY2azs=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = AdmintypeDetailPage;
var _c;
$RefreshReg$(_c, "AdmintypeDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdmintypeDetailPage as default
};
//# sourceMappingURL=/build/routes/admin.category.$slug-PK3YZYGD.js.map
