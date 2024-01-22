import {
  require_restaurants
} from "/build/_shared/chunk-66C4EUGW.js";
import {
  ActionButtons,
  FormInput
} from "/build/_shared/chunk-V7DWSR4B.js";
import {
  require_images
} from "/build/_shared/chunk-O5QR3QFV.js";
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
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-PZYABHQ3.js";
import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.images.$restId.$id.tsx
var import_node = __toESM(require_node());
var import_images = __toESM(require_images());
var import_restaurants = __toESM(require_restaurants());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.images.$restId.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.images.$restId.$id.tsx"
  );
  import.meta.hot.lastModified = "1692289063000";
}
function AdminSymbolDetailPage() {
  var _a;
  _s();
  const {
    image
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col max-h-[100%] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "w-full space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "url", label: "\u1EA2nh", placeholder: "link \u1EA3nh", defaultValue: image == null ? void 0 : image.url }, void 0, false, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, false, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this)
  ] }, (_a = image == null ? void 0 : image.id) != null ? _a : "new", true, {
    fileName: "app/routes/admin.images.$restId.$id.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.images.$restId.$id.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(AdminSymbolDetailPage, "AresK/zmnu2vnR+bFl3+wOtJzk8=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = AdminSymbolDetailPage;
var _c;
$RefreshReg$(_c, "AdminSymbolDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminSymbolDetailPage as default
};
//# sourceMappingURL=/build/routes/admin.images.$restId.$id-3YHABVH3.js.map
