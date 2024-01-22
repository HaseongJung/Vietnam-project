import {
  require_restaurants
} from "/build/_shared/chunk-66C4EUGW.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/provider.server
var require_provider = __commonJS({
  "empty-module:~/models/provider.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/admin.restaurant.$id.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_provider = __toESM(require_provider());
var import_restaurants = __toESM(require_restaurants());
var import_type = __toESM(require_type());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.restaurant.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.restaurant.$id.tsx"
  );
  import.meta.hot.lastModified = "1699097065000";
}
function AdminSymbolDetailPage() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2, _t;
  _s();
  const {
    typeList,
    restaurant
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isNewItem = !restaurant;
  const nameVieRef = (0, import_react2.useRef)(null);
  const nameKorRef = (0, import_react2.useRef)(null);
  const nameEngRef = (0, import_react2.useRef)(null);
  const addressVieRef = (0, import_react2.useRef)(null);
  const addressKorRef = (0, import_react2.useRef)(null);
  const addressEngRef = (0, import_react2.useRef)(null);
  const typeIdRef = (0, import_react2.useRef)(null);
  const countryIdRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c3, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.nameVie) {
      (_b2 = nameVieRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c3 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c3.nameKor) {
      (_d2 = nameKorRef.current) == null ? void 0 : _d2.focus();
    } else if ((_e2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e2.nameEng) {
      (_f2 = nameEngRef.current) == null ? void 0 : _f2.focus();
    } else if ((_g2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g2.addressVie) {
      (_h2 = addressVieRef.current) == null ? void 0 : _h2.focus();
    } else if ((_i2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i2.addressKor) {
      (_j2 = addressKorRef.current) == null ? void 0 : _j2.focus();
    } else if ((_k2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _k2.addressEng) {
      (_l2 = addressEngRef.current) == null ? void 0 : _l2.focus();
    } else if ((_m2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _m2.typeId) {
      (_n2 = typeIdRef.current) == null ? void 0 : _n2.focus();
    } else if ((_o2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _o2.countryId) {
      (_p2 = countryIdRef.current) == null ? void 0 : _p2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col max-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "w-full space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameVie", ref: nameVieRef, required: true, label: "T\xEAn Vi\u1EC7t Nam", placeholder: "M\u1EF3 Qu\u1EA3ng B\xE0 Mua", defaultValue: restaurant == null ? void 0 : restaurant.nameVie, error: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.nameVie }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameKor", ref: nameKorRef, required: true, label: "T\xEAn H\xE0n Qu\u1ED1c", placeholder: "Quang Ba Mua Shop \uB204\uB4E4", defaultValue: restaurant == null ? void 0 : restaurant.nameKor, error: (_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.nameKor }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "nameEng", ref: nameEngRef, required: true, label: "T\xEAn Ti\u1EBFng Anh", placeholder: "Quang Ba Mua Shop Noodles", defaultValue: restaurant == null ? void 0 : restaurant.nameEng, error: (_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.nameEng }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "sectorId", className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: "Qu\u1ED1c Gia" }, void 0, false, {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 271,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { ref: countryIdRef, defaultValue: restaurant == null ? void 0 : restaurant.countryId, id: "countryId", required: true, name: "countryId", "aria-invalid": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.countryId) ? true : void 0, "aria-describedby": "sectorId-error", className: "w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", label: "" }, void 0, false, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 276,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", label: "Vi\u1EC7t Nam" }, void 0, false, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 277,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", label: "H\xE0n Qu\u1ED1c" }, void 0, false, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 278,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 275,
                columnNumber: 19
              }, this),
              ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.countryId) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "countryId-error", children: actionData.errors.countryId }, void 0, false, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 280,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 274,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "provider", className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: "Lo\u1EA1i Nh\xE0 H\xE0ng" }, void 0, false, {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 288,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { ref: typeIdRef, defaultValue: restaurant == null ? void 0 : restaurant.typeId, id: "typeId", required: true, name: "typeId", "aria-invalid": ((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.typeId) ? true : void 0, "aria-describedby": "provider-error", className: "w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", label: "" }, void 0, false, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 293,
                  columnNumber: 21
                }, this),
                typeList.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: type.typeId, label: type.nameVie }, type.typeId, false, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 294,
                  columnNumber: 43
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 292,
                columnNumber: 19
              }, this),
              ((_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.typeId) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "typeId-error", children: actionData.errors.typeId }, void 0, false, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 296,
                columnNumber: 50
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 287,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 263,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "addressVie", ref: addressVieRef, required: true, label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng Vi\u1EC7t", placeholder: "19 Tr\u1EA7n B\xECnh Tr\u1ECDng", defaultValue: (_i = restaurant == null ? void 0 : restaurant.addressVie) == null ? void 0 : _i.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "addressKor", ref: addressKorRef, required: true, label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng H\xE0n", placeholder: "19 Tran Binh Trong", defaultValue: (_j = restaurant == null ? void 0 : restaurant.addressKor) == null ? void 0 : _j.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "addressEng", ref: addressEngRef, required: true, label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng Anh", placeholder: "19 Tran Binh Trong", defaultValue: (_k = restaurant == null ? void 0 : restaurant.addressEng) == null ? void 0 : _k.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 309,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "rating", label: "rating", placeholder: "0", defaultValue: (_l = restaurant == null ? void 0 : restaurant.rating) == null ? void 0 : _l.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "openingTime", label: "M\u1EDF c\u1EEDa", placeholder: "0-24", defaultValue: (_m = restaurant == null ? void 0 : restaurant.openingTime) == null ? void 0 : _m.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 314,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "closingTime", label: "\u0110\xF3ng c\u1EEDa", placeholder: "0-24", defaultValue: (_n = restaurant == null ? void 0 : restaurant.closingTime) == null ? void 0 : _n.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 315,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "direct", label: "\u0110\u01B0\u1EDDng \u0111i", placeholder: "", defaultValue: (_o = restaurant == null ? void 0 : restaurant.direct) == null ? void 0 : _o.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 319,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "priceLow", label: "Gi\xE1 th\u1EA5p nh\u1EA5t", placeholder: "24", defaultValue: (_p = restaurant == null ? void 0 : restaurant.priceLow) == null ? void 0 : _p.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInput, { name: "priceHigh", label: "Gi\xE1 Cao nh\u1EA5t", placeholder: "48", defaultValue: (_q = restaurant == null ? void 0 : restaurant.priceHigh) == null ? void 0 : _q.toString() }, void 0, false, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 321,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 261,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: "M\xF4 t\u1EA3 Ti\u1EBFng Vi\u1EC7t" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { defaultValue: (_r = restaurant == null ? void 0 : restaurant.descriptionVie) == null ? void 0 : _r.toString(), id: "descriptionVie", rows: 5, placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng Vi\u1EC7t", name: "descriptionVie", className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 331,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 330,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 326,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: "M\xF4 t\u1EA3 ti\u1EBFng H\xE0n" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 335,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { defaultValue: (_s2 = restaurant == null ? void 0 : restaurant.descriptionKor) == null ? void 0 : _s2.toString(), id: "descriptionKor", rows: 5, placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng H\xE0n", name: "descriptionKor", className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 334,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700 dark:text-neutral-300", children: "M\xF4 t\u1EA3 ti\u1EBFng Anh" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 343,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { defaultValue: (_t = restaurant == null ? void 0 : restaurant.descriptionEng) == null ? void 0 : _t.toString(), id: "descriptionEng", rows: 5, placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng Anh", name: "descriptionEng", className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 347,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.restaurant.$id.tsx",
        lineNumber: 346,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 342,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, false, {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 351,
      columnNumber: 9
    }, this)
  ] }, (_a = restaurant == null ? void 0 : restaurant.id) != null ? _a : "new", true, {
    fileName: "app/routes/admin.restaurant.$id.tsx",
    lineNumber: 260,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.restaurant.$id.tsx",
    lineNumber: 259,
    columnNumber: 10
  }, this);
}
_s(AdminSymbolDetailPage, "nCTxVI7YEueKwNc2U6doU9BUoq4=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = AdminSymbolDetailPage;
var _c;
$RefreshReg$(_c, "AdminSymbolDetailPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminSymbolDetailPage as default
};
//# sourceMappingURL=/build/routes/admin.restaurant.$id-JN3RSQFP.js.map
