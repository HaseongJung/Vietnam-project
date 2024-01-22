'use strict';

var module$1 = require('module');
var path = require('path');
var esbuild = require('esbuild');
var localPkg = require('local-pkg');
var resolve_exports = require('resolve.exports');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/lib/utils/util.ts
var escapeRegex = /* @__PURE__ */ __name((str) => {
  return str.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&").replace(/-/g, "\\x2d");
}, "escapeRegex");
var commonJsTemplate = /* @__PURE__ */ __name(({ importPath }) => {
  return `export * from '${importPath}'`;
}, "commonJsTemplate");
var normalizeNodeBuiltinPath = /* @__PURE__ */ __name((path2) => {
  return path2.replace(/^node:/, "").replace(/\/$/, "");
}, "normalizeNodeBuiltinPath");
async function polyfillPath(importPath) {
  if (!module$1.builtinModules.includes(importPath))
    throw new Error(`Node.js does not have ${importPath} in its builtin modules`);
  const jspmPath = path.resolve(
    __require.resolve(`@jspm/core/nodelibs/${importPath}`),
    // ensure "fs/promises" is resolved properly
    "../../.." + (importPath.includes("/") ? "/.." : "")
  );
  const jspmPackageJson = await localPkg.loadPackageJSON(jspmPath);
  const exportPath = resolve_exports.resolve(jspmPackageJson, `./nodelibs/${importPath}`, {
    browser: true
  });
  const exportFullPath = localPkg.resolveModule(path.join(jspmPath, exportPath?.[0] ?? ""));
  if (!exportPath || !exportFullPath) {
    throw new Error(
      "resolving failed, please try creating an issue in https://github.com/imranbarbhuiya/esbuild-plugins-node-modules-polyfill"
    );
  }
  return exportFullPath;
}
__name(polyfillPath, "polyfillPath");
var polyfillPathCache = /* @__PURE__ */ new Map();
var getCachedPolyfillPath = /* @__PURE__ */ __name((importPath) => {
  const normalizedImportPath = normalizeNodeBuiltinPath(importPath);
  const cachedPromise = polyfillPathCache.get(normalizedImportPath);
  if (cachedPromise) {
    return cachedPromise;
  }
  const promise = polyfillPath(normalizedImportPath);
  polyfillPathCache.set(normalizedImportPath, promise);
  return promise;
}, "getCachedPolyfillPath");
var polyfillContentAndTransform = /* @__PURE__ */ __name(async (importPath) => {
  const exportFullPath = await getCachedPolyfillPath(importPath);
  const content = (await esbuild.build({
    write: false,
    format: "esm",
    bundle: true,
    entryPoints: [exportFullPath]
  })).outputFiles[0].text;
  return content.replace(/eval\(/g, "(0,eval)(");
}, "polyfillContentAndTransform");
var polyfillContentCache = /* @__PURE__ */ new Map();
var getCachedPolyfillContent = /* @__PURE__ */ __name((_importPath) => {
  const normalizedImportPath = normalizeNodeBuiltinPath(_importPath);
  const cachedPromise = polyfillContentCache.get(normalizedImportPath);
  if (cachedPromise) {
    return cachedPromise;
  }
  const promise = polyfillContentAndTransform(normalizedImportPath);
  polyfillContentCache.set(normalizedImportPath, promise);
  return promise;
}, "getCachedPolyfillContent");

// src/lib/plugin.ts
var NAME = "node-modules-polyfills";
var loader = /* @__PURE__ */ __name(async (args) => {
  try {
    const isCommonjs = args.namespace.endsWith("commonjs");
    const resolved = await getCachedPolyfillPath(args.path);
    const resolveDir = path__default.default.dirname(resolved);
    if (isCommonjs) {
      return {
        loader: "js",
        contents: commonJsTemplate({
          importPath: args.path
        }),
        resolveDir
      };
    }
    const contents = await getCachedPolyfillContent(args.path);
    return {
      loader: "js",
      contents,
      resolveDir
    };
  } catch (error) {
    console.error("node-modules-polyfill", error);
    return {
      contents: `export {}`,
      loader: "js"
    };
  }
}, "loader");
var nodeModulesPolyfillPlugin = /* @__PURE__ */ __name((options = {}) => {
  const { globals = {}, modules: modulesOption = module$1.builtinModules, namespace = NAME, name = NAME } = options;
  if (namespace.endsWith("commonjs")) {
    throw new Error(`namespace ${namespace} must not end with commonjs`);
  }
  if (namespace.endsWith("empty")) {
    throw new Error(`namespace ${namespace} must not end with empty`);
  }
  const modules = Array.isArray(modulesOption) ? Object.fromEntries(modulesOption.map((mod) => [mod, true])) : modulesOption;
  const commonjsNamespace = `${namespace}-commonjs`;
  const emptyNamespace = `${namespace}-empty`;
  return {
    name,
    setup: ({ onLoad, onResolve, initialOptions }) => {
      if (initialOptions.define && !initialOptions.define.global) {
        initialOptions.define.global = "globalThis";
      } else if (!initialOptions.define) {
        initialOptions.define = { global: "globalThis" };
      }
      initialOptions.inject = initialOptions.inject ?? [];
      if (globals.Buffer) {
        initialOptions.inject.push(path__default.default.resolve(__dirname, "../globals/Buffer.js"));
      }
      if (globals.process) {
        initialOptions.inject.push(path__default.default.resolve(__dirname, "../globals/process.js"));
      }
      onLoad({ filter: /.*/, namespace: emptyNamespace }, () => {
        return {
          loader: "js",
          // Use an empty CommonJS module here instead of ESM to avoid
          // "No matching export" errors in esbuild for anything that
          // is imported from this file.
          contents: "module.exports = {}"
        };
      });
      onLoad({ filter: /.*/, namespace }, loader);
      onLoad({ filter: /.*/, namespace: commonjsNamespace }, loader);
      const filter = new RegExp(
        `^(?:node:)?(?:${Object.keys(modules).filter((moduleName) => module$1.builtinModules.includes(moduleName)).map(escapeRegex).join("|")})$`
      );
      const resolver = /* @__PURE__ */ __name(async (args) => {
        const moduleName = normalizeNodeBuiltinPath(args.path);
        if (!modules[moduleName]) {
          return;
        }
        if (modules[moduleName] === "empty") {
          return {
            namespace: emptyNamespace,
            path: args.path
          };
        }
        const polyfill = await getCachedPolyfillPath(moduleName).catch(() => null);
        if (!polyfill) {
          return;
        }
        const ignoreRequire = args.namespace === commonjsNamespace;
        const isCommonjs = !ignoreRequire && args.kind === "require-call";
        return {
          namespace: isCommonjs ? commonjsNamespace : namespace,
          path: args.path
        };
      }, "resolver");
      onResolve({ filter }, resolver);
    }
  };
}, "nodeModulesPolyfillPlugin");
/**
 * `polyfillPath` and `getCachedPolyfillContent` are taken from below source with some modifications for my use case.
 * https://github.com/Aslemammad/modern-node-polyfills
 * @author Aslemammad
 * @license MIT
 */

exports.commonJsTemplate = commonJsTemplate;
exports.escapeRegex = escapeRegex;
exports.nodeModulesPolyfillPlugin = nodeModulesPolyfillPlugin;
exports.normalizeNodeBuiltinPath = normalizeNodeBuiltinPath;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map