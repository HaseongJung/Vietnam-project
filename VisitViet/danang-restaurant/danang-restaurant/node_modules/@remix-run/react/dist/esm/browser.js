/**
 * @remix-run/react v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RemixContext } from './components.js';
import { RemixErrorBoundary, RemixRootDefaultErrorBoundary } from './errorBoundaries.js';
import { deserializeErrors } from './errors.js';
import { createClientRoutesWithHMRRevalidationOptOut, createClientRoutes } from './routes.js';

/* eslint-disable prefer-let/prefer-let */

/* eslint-enable prefer-let/prefer-let */

let router;
let hmrAbortController;
let hmrRouterReadyResolve;
// There's a race condition with HMR where the remix:manifest is signaled before
// the router is assigned in the RemixBrowser component. This promise gates the
// HMR handler until the router is ready
let hmrRouterReadyPromise = new Promise(resolve => {
  // body of a promise is executed immediately, so this can be resolved outside
  // of the promise body
  hmrRouterReadyResolve = resolve;
}).catch(() => {
  // This is a noop catch handler to avoid unhandled promise rejection warnings
  // in the console. The promise is never rejected.
  return undefined;
});
if (import.meta && import.meta.hot) {
  import.meta.hot.accept("remix:manifest", async ({
    assetsManifest,
    needsRevalidation
  }) => {
    let router = await hmrRouterReadyPromise;
    // This should never happen, but just in case...
    if (!router) {
      console.error("Failed to accept HMR update because the router was not ready.");
      return;
    }
    let routeIds = [...new Set(router.state.matches.map(m => m.route.id).concat(Object.keys(window.__remixRouteModules)))];
    if (hmrAbortController) {
      hmrAbortController.abort();
    }
    hmrAbortController = new AbortController();
    let signal = hmrAbortController.signal;

    // Load new route modules that we've seen.
    let newRouteModules = Object.assign({}, window.__remixRouteModules, Object.fromEntries((await Promise.all(routeIds.map(async id => {
      var _assetsManifest$hmr, _window$__remixRouteM, _window$__remixRouteM2, _window$__remixRouteM3;
      if (!assetsManifest.routes[id]) {
        return null;
      }
      let imported = await import(assetsManifest.routes[id].module + `?t=${(_assetsManifest$hmr = assetsManifest.hmr) === null || _assetsManifest$hmr === void 0 ? void 0 : _assetsManifest$hmr.timestamp}`);
      return [id, {
        ...imported,
        // react-refresh takes care of updating these in-place,
        // if we don't preserve existing values we'll loose state.
        default: imported.default ? ((_window$__remixRouteM = window.__remixRouteModules[id]) === null || _window$__remixRouteM === void 0 ? void 0 : _window$__remixRouteM.default) ?? imported.default : imported.default,
        CatchBoundary: imported.CatchBoundary ? ((_window$__remixRouteM2 = window.__remixRouteModules[id]) === null || _window$__remixRouteM2 === void 0 ? void 0 : _window$__remixRouteM2.CatchBoundary) ?? imported.CatchBoundary : imported.CatchBoundary,
        ErrorBoundary: imported.ErrorBoundary ? ((_window$__remixRouteM3 = window.__remixRouteModules[id]) === null || _window$__remixRouteM3 === void 0 ? void 0 : _window$__remixRouteM3.ErrorBoundary) ?? imported.ErrorBoundary : imported.ErrorBoundary
      }];
    }))).filter(Boolean)));
    Object.assign(window.__remixRouteModules, newRouteModules);
    // Create new routes
    let routes = createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, assetsManifest.routes, window.__remixRouteModules, window.__remixContext.future);

    // This is temporary API and will be more granular before release
    router._internalSetRoutes(routes);

    // Wait for router to be idle before updating the manifest and route modules
    // and triggering a react-refresh
    let unsub = router.subscribe(state => {
      if (state.revalidation === "idle") {
        unsub();
        // Abort if a new update comes in while we're waiting for the
        // router to be idle.
        if (signal.aborted) return;
        // Ensure RouterProvider setState has flushed before re-rendering
        setTimeout(() => {
          Object.assign(window.__remixManifest, assetsManifest);
          window.$RefreshRuntime$.performReactRefresh();
        }, 1);
      }
    });
    window.__remixRevalidation = (window.__remixRevalidation || 0) + 1;
    router.revalidate();
  });
}

/**
 * The entry point for a Remix app when it is rendered in the browser (in
 * `app/entry.client.js`). This component is used by React to hydrate the HTML
 * that was received from the server.
 */
function RemixBrowser(_props) {
  if (!router) {
    let routes = createClientRoutes(window.__remixManifest.routes, window.__remixRouteModules, window.__remixContext.future);
    let hydrationData = window.__remixContext.state;
    if (hydrationData && hydrationData.errors) {
      hydrationData = {
        ...hydrationData,
        errors: deserializeErrors(hydrationData.errors)
      };
    }
    router = createBrowserRouter(routes, {
      hydrationData,
      future: {
        // Pass through the Remix future flag to avoid a v1 breaking change in
        // useNavigation() - users can control the casing via the flag in v1.
        // useFetcher still always uppercases in the back-compat layer in v1.
        // In v2 we can just always pass true here and remove the back-compat
        // layer
        v7_normalizeFormMethod: window.__remixContext.future.v2_normalizeFormMethod
      }
    });

    // Hard reload if the path we tried to load is not the current path.
    // This is usually the result of 2 rapid back/forward clicks from an
    // external site into a Remix app, where we initially start the load for
    // one URL and while the JS chunks are loading a second forward click moves
    // us to a new URL.  Avoid comparing search params because of CDNs which
    // can be configured to ignore certain params and only pathname is relevant
    // towards determining the route matches.
    let initialPathname = window.__remixContext.url;
    let hydratedPathname = window.location.pathname;
    if (initialPathname !== hydratedPathname) {
      let errorMsg = `Initial URL (${initialPathname}) does not match URL at time of hydration ` + `(${hydratedPathname}), reloading page...`;
      console.error(errorMsg);
      window.location.reload();
    }

    // Notify that the router is ready for HMR
    if (hmrRouterReadyResolve) {
      hmrRouterReadyResolve(router);
    }
  }
  let [location, setLocation] = React.useState(router.state.location);
  React.useLayoutEffect(() => {
    return router.subscribe(newState => {
      if (newState.location !== location) {
        setLocation(newState.location);
      }
    });
  }, [location]);

  // We need to include a wrapper RemixErrorBoundary here in case the root error
  // boundary also throws and we need to bubble up outside of the router entirely.
  // Then we need a stateful location here so the user can back-button navigate
  // out of there
  return /*#__PURE__*/React.createElement(RemixContext.Provider, {
    value: {
      manifest: window.__remixManifest,
      routeModules: window.__remixRouteModules,
      future: window.__remixContext.future
    }
  }, /*#__PURE__*/React.createElement(RemixErrorBoundary, {
    location: location,
    component: RemixRootDefaultErrorBoundary
  }, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router,
    fallbackElement: null,
    future: {
      v7_startTransition: true
    }
  })));
}

export { RemixBrowser };
