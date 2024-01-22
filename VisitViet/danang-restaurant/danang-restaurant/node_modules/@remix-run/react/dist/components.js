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
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var reactRouterDom = require('react-router-dom');
var errorBoundaries = require('./errorBoundaries.js');
var invariant = require('./invariant.js');
var links = require('./links.js');
var markup = require('./markup.js');
var transition = require('./transition.js');
var warnings = require('./warnings.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useDataRouterContext() {
  let context = React__namespace.useContext(reactRouterDom.UNSAFE_DataRouterContext);
  invariant(context, "You must render this element inside a <DataRouterContext.Provider> element");
  return context;
}
function useDataRouterStateContext() {
  let context = React__namespace.useContext(reactRouterDom.UNSAFE_DataRouterStateContext);
  invariant(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
  return context;
}

////////////////////////////////////////////////////////////////////////////////
// RemixContext

const RemixContext = /*#__PURE__*/React__namespace.createContext(undefined);
RemixContext.displayName = "Remix";
function useRemixContext() {
  let context = React__namespace.useContext(RemixContext);
  invariant(context, "You must render this element inside a <Remix> element");
  return context;
}

////////////////////////////////////////////////////////////////////////////////
// RemixRoute

function RemixRoute({
  id
}) {
  let {
    routeModules,
    future
  } = useRemixContext();
  invariant(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\n" + "Check this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let {
    default: Component,
    ErrorBoundary,
    CatchBoundary
  } = routeModules[id];

  // Default Component to Outlet if we expose boundary UI components
  if (!Component && (ErrorBoundary || !future.v2_errorBoundary && CatchBoundary)) {
    Component = reactRouterDom.Outlet;
  }
  invariant(Component, `Route "${id}" has no component! Please go add a \`default\` export in the route module file.\n` + "If you were trying to navigate or submit to a resource route, use `<a>` instead of `<Link>` or `<Form reloadDocument>`.");
  return /*#__PURE__*/React__namespace.createElement(Component, null);
}
function RemixRouteError({
  id
}) {
  let {
    future,
    routeModules
  } = useRemixContext();

  // This checks prevent cryptic error messages such as: 'Cannot read properties of undefined (reading 'root')'
  invariant(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\n" + "Check this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let error = reactRouterDom.useRouteError();
  let {
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  if (future.v2_errorBoundary) {
    // Provide defaults for the root route if they are not present
    if (id === "root") {
      ErrorBoundary || (ErrorBoundary = errorBoundaries.V2_RemixRootDefaultErrorBoundary);
    }
    if (ErrorBoundary) {
      // TODO: Unsure if we can satisfy the typings here
      // @ts-expect-error
      return /*#__PURE__*/React__namespace.createElement(ErrorBoundary, null);
    }
    throw error;
  }

  // Provide defaults for the root route if they are not present
  if (id === "root") {
    CatchBoundary || (CatchBoundary = errorBoundaries.RemixRootDefaultCatchBoundary);
    ErrorBoundary || (ErrorBoundary = errorBoundaries.RemixRootDefaultErrorBoundary);
  }
  if (reactRouterDom.isRouteErrorResponse(error)) {
    let tError = error;
    if (!!(tError !== null && tError !== void 0 && tError.error) && tError.status !== 404 && ErrorBoundary) {
      // Internal framework-thrown ErrorResponses
      return /*#__PURE__*/React__namespace.createElement(ErrorBoundary, {
        error: tError.error
      });
    }
    if (CatchBoundary) {
      // User-thrown ErrorResponses
      return /*#__PURE__*/React__namespace.createElement(errorBoundaries.RemixCatchBoundary, {
        catch: error,
        component: CatchBoundary
      });
    }
  }
  if (error instanceof Error && ErrorBoundary) {
    // User- or framework-thrown Errors
    return /*#__PURE__*/React__namespace.createElement(ErrorBoundary, {
      error: error
    });
  }
  throw error;
}
////////////////////////////////////////////////////////////////////////////////
// Public API

/**
 * Defines the prefetching behavior of the link:
 *
 * - "intent": Fetched when the user focuses or hovers the link
 * - "render": Fetched when the link is rendered
 * - "none": Never fetched
 */
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React__namespace.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React__namespace.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  let ref = React__namespace.useRef(null);
  React__namespace.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = entries => {
        entries.forEach(entry => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, {
        threshold: 0.5
      });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    }
  };
  React__namespace.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, ref, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * A special kind of `<Link>` that knows whether or not it is "active".
 *
 * @see https://remix.run/components/nav-link
 */
let NavLink = /*#__PURE__*/React__namespace.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
  let href = reactRouterDom.useHref(to);
  let [shouldPrefetch, ref, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(reactRouterDom.NavLink, _rollupPluginBabelHelpers["extends"]({}, props, prefetchHandlers, {
    ref: mergeRefs(forwardedRef, ref),
    to: to
  })), shouldPrefetch && !isAbsolute ? /*#__PURE__*/React__namespace.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink.displayName = "NavLink";

/**
 * This component renders an anchor tag and is the primary way the user will
 * navigate around your website.
 *
 * @see https://remix.run/components/link
 */
let Link = /*#__PURE__*/React__namespace.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
  let href = reactRouterDom.useHref(to);
  let [shouldPrefetch, ref, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(reactRouterDom.Link, _rollupPluginBabelHelpers["extends"]({}, props, prefetchHandlers, {
    ref: mergeRefs(forwardedRef, ref),
    to: to
  })), shouldPrefetch && !isAbsolute ? /*#__PURE__*/React__namespace.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return event => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
let linksWarning = "⚠️ REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. " + "Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. " + "For instructions on making this change see " + "https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";
let useTransitionWarning = "⚠️ REMIX FUTURE CHANGE: `useTransition` will be removed in v2 in favor of `useNavigation`. " + "You can prepare for this change at your convenience by updating to `useNavigation`. " + "For instructions on making this change see " + "https://remix.run/docs/en/v1.15.0/pages/v2#usetransition";
let fetcherTypeWarning = "⚠️ REMIX FUTURE CHANGE: `fetcher.type` will be removed in v2. " + "Please use `fetcher.state`, `fetcher.formData`, and `fetcher.data` to achieve the same UX. " + "For instructions on making this change see " + "https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher";
let fetcherSubmissionWarning = "⚠️ REMIX FUTURE CHANGE : `fetcher.submission` will be removed in v2. " + "The submission fields are now part of the fetcher object itself (`fetcher.formData`). " + "For instructions on making this change see " + "https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher";

/**
 * Renders the `<link>` tags for the current routes.
 *
 * @see https://remix.run/components/links
 */
function Links() {
  let {
    manifest,
    routeModules
  } = useRemixContext();
  let {
    errors,
    matches: routerMatches
  } = useDataRouterStateContext();
  let matches = errors ? routerMatches.slice(0, routerMatches.findIndex(m => errors[m.route.id]) + 1) : routerMatches;
  let links$1 = React__namespace.useMemo(() => links.getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  React__namespace.useEffect(() => {
    if (links$1.some(link => "imagesizes" in link || "imagesrcset" in link)) {
      warnings.logDeprecationOnce(linksWarning);
    }
  }, [links$1]);
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, links$1.map(link => {
    if (links.isPageLinkDescriptor(link)) {
      return /*#__PURE__*/React__namespace.createElement(PrefetchPageLinks, _rollupPluginBabelHelpers["extends"]({
        key: link.page
      }, link));
    }
    let imageSrcSet = null;

    // In React 17, <link imageSrcSet> and <link imageSizes> will warn
    // because the DOM attributes aren't recognized, so users need to pass
    // them in all lowercase to forward the attributes to the node without a
    // warning. Normalize so that either property can be used in Remix.
    if ("useId" in React__namespace) {
      if (link.imagesrcset) {
        link.imageSrcSet = imageSrcSet = link.imagesrcset;
        delete link.imagesrcset;
      }
      if (link.imagesizes) {
        link.imageSizes = link.imagesizes;
        delete link.imagesizes;
      }
    } else {
      if (link.imageSrcSet) {
        link.imagesrcset = imageSrcSet = link.imageSrcSet;
        delete link.imageSrcSet;
      }
      if (link.imageSizes) {
        link.imagesizes = link.imageSizes;
        delete link.imageSizes;
      }
    }
    return /*#__PURE__*/React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}

/**
 * This component renders all of the `<link rel="prefetch">` and
 * `<link rel="modulepreload"/>` tags for all the assets (data, modules, css) of
 * a given page.
 *
 * @param props
 * @param props.page
 * @see https://remix.run/components/prefetch-page-links
 */
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    router
  } = useDataRouterContext();
  let matches = React__namespace.useMemo(() => reactRouterDom.matchRoutes(router.routes, page), [router.routes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /*#__PURE__*/React__namespace.createElement(PrefetchPageLinksImpl, _rollupPluginBabelHelpers["extends"]({
    page: page,
    matches: matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    manifest,
    routeModules
  } = useRemixContext();
  let [styleLinks, setStyleLinks] = React__namespace.useState([]);
  React__namespace.useEffect(() => {
    let interrupted = false;
    links.getStylesheetPrefetchLinks(matches, manifest, routeModules).then(links => {
      if (!interrupted) setStyleLinks(links);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = reactRouterDom.useLocation();
  let {
    manifest
  } = useRemixContext();
  let {
    matches
  } = useDataRouterStateContext();
  let newMatchesForData = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data"), [page, nextMatches, matches, manifest, location]);
  let newMatchesForAssets = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets"), [page, nextMatches, matches, manifest, location]);
  let dataHrefs = React__namespace.useMemo(() => links.getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React__namespace.useMemo(() => links.getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);

  // needs to be a hook with async behavior because we need the modules, not
  // just the manifest like the other links in here.
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, dataHrefs.map(href => /*#__PURE__*/React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href: href
  }, linkProps))), moduleHrefs.map(href => /*#__PURE__*/React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
    key: href,
    rel: "modulepreload",
    href: href
  }, linkProps))), styleLinks.map(link =>
  /*#__PURE__*/
  // these don't spread `linkProps` because they are full link descriptors
  // already with their own props
  React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
    key: link.href
  }, link))));
}

/**
 * Renders the `<title>` and `<meta>` tags for the current routes.
 *
 * @see https://remix.run/components/meta
 */
function V1Meta() {
  let {
    routeModules
  } = useRemixContext();
  let {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext();
  let location = reactRouterDom.useLocation();
  let matches = errors ? routerMatches.slice(0, routerMatches.findIndex(m => errors[m.route.id]) + 1) : routerMatches;
  let meta = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = loaderData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location
      }) : routeModule.meta;
      if (routeMeta && Array.isArray(routeMeta)) {
        throw new Error("The route at " + match.route.path + " returns an array. This is only supported with the `v2_meta` future flag " + "in the Remix config. Either set the flag to `true` or update the route's " + "meta function to return an object." + "\n\nTo reference the v1 meta function API, see https://remix.run/route/meta"
        // TODO: Add link to the docs once they are written
        // + "\n\nTo reference future flags and the v2 meta API, see https://remix.run/file-conventions/remix-config#future-v2-meta."
        );
      }

      Object.assign(meta, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, Object.entries(meta).map(([name, value]) => {
    if (!value) {
      return null;
    }
    if (["charset", "charSet"].includes(name)) {
      return /*#__PURE__*/React__namespace.createElement("meta", {
        key: "charSet",
        charSet: value
      });
    }
    if (name === "title") {
      return /*#__PURE__*/React__namespace.createElement("title", {
        key: "title"
      }, String(value));
    }

    // Open Graph tags use the `property` attribute, while other meta tags
    // use `name`. See https://ogp.me/
    //
    // Namespaced attributes:
    //  - https://ogp.me/#type_music
    //  - https://ogp.me/#type_video
    //  - https://ogp.me/#type_article
    //  - https://ogp.me/#type_book
    //  - https://ogp.me/#type_profile
    //
    // Facebook specific tags begin with `fb:` and also use the `property`
    // attribute.
    //
    // Twitter specific tags begin with `twitter:` but they use `name`, so
    // they are excluded.
    let isOpenGraphTag = /^(og|music|video|article|book|profile|fb):.+$/.test(name);
    return [value].flat().map(content => {
      if (isOpenGraphTag) {
        return /*#__PURE__*/React__namespace.createElement("meta", {
          property: name,
          content: content,
          key: name + content
        });
      }
      if (typeof content === "string") {
        return /*#__PURE__*/React__namespace.createElement("meta", {
          name: name,
          content: content,
          key: name + content
        });
      }
      return /*#__PURE__*/React__namespace.createElement("meta", _rollupPluginBabelHelpers["extends"]({
        key: name + JSON.stringify(content)
      }, content));
    });
  }));
}
function V2Meta() {
  let {
    routeModules
  } = useRemixContext();
  let {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext();
  let location = reactRouterDom.useLocation();
  let _matches = errors ? routerMatches.slice(0, routerMatches.findIndex(m => errors[m.route.id]) + 1) : routerMatches;
  let meta = [];
  let leafMeta = null;
  let matches = [];
  for (let i = 0; i < _matches.length; i++) {
    let _match = _matches[i];
    let routeId = _match.route.id;
    let data = loaderData[routeId];
    let params = _match.params;
    let routeModule = routeModules[routeId];
    let routeMeta = [];
    let match = {
      id: routeId,
      data,
      meta: [],
      params: _match.params,
      pathname: _match.pathname,
      handle: _match.route.handle,
      // TODO: Remove in v2. Only leaving it for now because we used it in
      // examples and there's no reason to crash someone's build for one line.
      // They'll get a TS error from the type updates anyway.
      // @ts-expect-error
      get route() {
        console.warn("The meta function in " + _match.route.path + " accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See");
        return _match.route;
      }
    };
    matches[i] = match;
    if (routeModule !== null && routeModule !== void 0 && routeModule.meta) {
      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        params,
        location,
        matches
      }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
    } else if (leafMeta) {
      // We only assign the route's meta to the nearest leaf if there is no meta
      // export in the route. The meta function may return a falsey value which
      // is effectively the same as an empty array.
      routeMeta = [...leafMeta];
    }
    routeMeta = routeMeta || [];
    if (!Array.isArray(routeMeta)) {
      throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at " + _match.route.path + " returns an invalid value. In v2, all route meta functions must " + "return an array of meta objects." +
      // TODO: Add link to the docs once they are written
      // "\n\nTo reference future flags and the v2 meta API, see https://remix.run/file-conventions/remix-config#future-v2-meta." +
      "\n\nTo reference the v1 meta function API, see https://remix.run/route/meta");
    }
    match.meta = routeMeta;
    matches[i] = match;
    meta = [...routeMeta];
    leafMeta = meta;
  }
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, meta.flat().map(metaProps => {
    if (!metaProps) {
      return null;
    }
    if ("tagName" in metaProps) {
      let tagName = metaProps.tagName;
      delete metaProps.tagName;
      if (!isValidMetaTag(tagName)) {
        console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`);
        return null;
      }
      let Comp = tagName;
      return /*#__PURE__*/React__namespace.createElement(Comp, _rollupPluginBabelHelpers["extends"]({
        key: JSON.stringify(metaProps)
      }, metaProps));
    }
    if ("title" in metaProps) {
      return /*#__PURE__*/React__namespace.createElement("title", {
        key: "title"
      }, String(metaProps.title));
    }
    if ("charset" in metaProps) {
      metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
      delete metaProps.charset;
    }
    if ("charSet" in metaProps && metaProps.charSet != null) {
      return typeof metaProps.charSet === "string" ? /*#__PURE__*/React__namespace.createElement("meta", {
        key: "charSet",
        charSet: metaProps.charSet
      }) : null;
    }
    if ("script:ld+json" in metaProps) {
      let json = null;
      try {
        json = JSON.stringify(metaProps["script:ld+json"]);
      } catch (err) {}
      return json != null && /*#__PURE__*/React__namespace.createElement("script", {
        key: "script:ld+json",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(metaProps["script:ld+json"])
        }
      });
    }
    return /*#__PURE__*/React__namespace.createElement("meta", _rollupPluginBabelHelpers["extends"]({
      key: JSON.stringify(metaProps)
    }, metaProps));
  }));
}
function isValidMetaTag(tagName) {
  return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
function Meta() {
  let {
    future
  } = useRemixContext();
  return future !== null && future !== void 0 && future.v2_meta ? /*#__PURE__*/React__namespace.createElement(V2Meta, null) : /*#__PURE__*/React__namespace.createElement(V1Meta, null);
}
function Await(props) {
  return /*#__PURE__*/React__namespace.createElement(reactRouterDom.Await, props);
}

/**
 * Tracks whether Remix has finished hydrating or not, so scripts can be skipped
 * during client-side updates.
 */
let isHydrated = false;
/**
 * Renders the `<script>` tags needed for the initial render. Bundles for
 * additional routes are loaded later as needed.
 *
 * @param props Additional properties to add to each script tag that is rendered.
 * In addition to scripts, \<link rel="modulepreload"> tags receive the crossOrigin
 * property if provided.
 *
 * @see https://remix.run/components/scripts
 */
function Scripts(props) {
  let {
    manifest,
    serverHandoffString,
    abortDelay,
    serializeError
  } = useRemixContext();
  let {
    router,
    static: isStatic,
    staticContext
  } = useDataRouterContext();
  let {
    matches
  } = useDataRouterStateContext();
  let navigation = reactRouterDom.useNavigation();
  React__namespace.useEffect(() => {
    isHydrated = true;
  }, []);
  let serializePreResolvedErrorImp = (key, error) => {
    let toSerialize;
    if (serializeError && error instanceof Error) {
      toSerialize = serializeError(error);
    } else {
      toSerialize = error;
    }
    return `${JSON.stringify(key)}:__remixContext.p(!1, ${markup.escapeHtml(JSON.stringify(toSerialize))})`;
  };
  let serializePreresolvedDataImp = (routeId, key, data) => {
    let serializedData;
    try {
      serializedData = JSON.stringify(data);
    } catch (error) {
      return serializePreResolvedErrorImp(key, error);
    }
    return `${JSON.stringify(key)}:__remixContext.p(${markup.escapeHtml(serializedData)})`;
  };
  let serializeErrorImp = (routeId, key, error) => {
    let toSerialize;
    if (serializeError && error instanceof Error) {
      toSerialize = serializeError(error);
    } else {
      toSerialize = error;
    }
    return `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(key)}, !1, ${markup.escapeHtml(JSON.stringify(toSerialize))})`;
  };
  let serializeDataImp = (routeId, key, data) => {
    let serializedData;
    try {
      serializedData = JSON.stringify(data);
    } catch (error) {
      return serializeErrorImp(routeId, key, error);
    }
    return `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(key)}, ${markup.escapeHtml(serializedData)})`;
  };
  let deferredScripts = [];
  let initialScripts = React__namespace.useMemo(() => {
    var _manifest$hmr;
    let contextScript = staticContext ? `window.__remixContext = ${serverHandoffString};` : " ";
    let activeDeferreds = staticContext === null || staticContext === void 0 ? void 0 : staticContext.activeDeferreds;
    // This sets up the __remixContext with utility functions used by the
    // deferred scripts.
    // - __remixContext.p is a function that takes a resolved value or error and returns a promise.
    //   This is used for transmitting pre-resolved promises from the server to the client.
    // - __remixContext.n is a function that takes a routeID and key to returns a promise for later
    //   resolution by the subsequently streamed chunks.
    // - __remixContext.r is a function that takes a routeID, key and value or error and resolves
    //   the promise created by __remixContext.n.
    // - __remixContext.t is a a map or routeId to keys to an object containing `e` and `r` methods
    //   to resolve or reject the promise created by __remixContext.n.
    // - __remixContext.a is the active number of deferred scripts that should be rendered to match
    //   the SSR tree for hydration on the client.
    contextScript += !activeDeferreds ? "" : ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", process.env.NODE_ENV === "development" ? "    x=new Error(e.message);\n    x.stack=e.stack;" : '    x=new Error("Unexpected Server Error");\n    x.stack=undefined;', "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof abortDelay === "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${abortDelay});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", process.env.NODE_ENV === "development" ? "    x=new Error(e.message);\n    x.stack=e.stack;" : '    x=new Error("Unexpected Server Error");\n    x.stack=undefined;', "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join("\n") + Object.entries(activeDeferreds).map(([routeId, deferredData]) => {
      let pendingKeys = new Set(deferredData.pendingKeys);
      let promiseKeyValues = deferredData.deferredKeys.map(key => {
        if (pendingKeys.has(key)) {
          deferredScripts.push( /*#__PURE__*/React__namespace.createElement(DeferredHydrationScript, {
            key: `${routeId} | ${key}`,
            deferredData: deferredData,
            routeId: routeId,
            dataKey: key,
            scriptProps: props,
            serializeData: serializeDataImp,
            serializeError: serializeErrorImp
          }));
          return `${JSON.stringify(key)}:__remixContext.n(${JSON.stringify(routeId)}, ${JSON.stringify(key)})`;
        } else {
          let trackedPromise = deferredData.data[key];
          if (typeof trackedPromise._error !== "undefined") {
            return serializePreResolvedErrorImp(key, trackedPromise._error);
          } else {
            return serializePreresolvedDataImp(routeId, key, trackedPromise._data);
          }
        }
      }).join(",\n");
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(routeId)}], {${promiseKeyValues}});`;
    }).join("\n") + (deferredScripts.length > 0 ? `__remixContext.a=${deferredScripts.length};` : "");
    let routeModulesScript = !isStatic ? " " : `${(_manifest$hmr = manifest.hmr) !== null && _manifest$hmr !== void 0 && _manifest$hmr.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}import ${JSON.stringify(manifest.url)};
${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: markup.createHtml(contextScript),
      type: undefined
    })), /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: markup.createHtml(routeModulesScript),
      type: "module",
      async: true
    })));
    // disabled deps array because we are purposefully only rendering this once
    // for hydration, after that we want to just continue rendering the initial
    // scripts as they were when the page first loaded
    // eslint-disable-next-line
  }, []);
  if (!isStatic && typeof __remixContext === "object" && __remixContext.a) {
    for (let i = 0; i < __remixContext.a; i++) {
      deferredScripts.push( /*#__PURE__*/React__namespace.createElement(DeferredHydrationScript, {
        key: i,
        scriptProps: props,
        serializeData: serializeDataImp,
        serializeError: serializeErrorImp
      }));
    }
  }

  // avoid waterfall when importing the next route module
  let nextMatches = React__namespace.useMemo(() => {
    if (navigation.location) {
      // FIXME: can probably use transitionManager `nextMatches`
      let matches = reactRouterDom.matchRoutes(router.routes, navigation.location);
      invariant(matches, `No routes match path "${navigation.location.pathname}"`);
      return matches;
    }
    return [];
  }, [navigation.location, router.routes]);
  let routePreloads = matches.concat(nextMatches).map(match => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return isHydrated ? null : /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe(preloads).map(path => /*#__PURE__*/React__namespace.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), initialScripts, deferredScripts);
}
function DeferredHydrationScript({
  dataKey,
  deferredData,
  routeId,
  scriptProps,
  serializeData,
  serializeError
}) {
  if (typeof document === "undefined" && deferredData && dataKey && routeId) {
    invariant(deferredData.pendingKeys.includes(dataKey), `Deferred data for route ${routeId} with key ${dataKey} was not pending but tried to render a script for it.`);
  }
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Suspense, {
    fallback:
    // This makes absolutely no sense. The server renders null as a fallback,
    // but when hydrating, we need to render a script tag to avoid a hydration issue.
    // To reproduce a hydration mismatch, just render null as a fallback.
    typeof document === "undefined" && deferredData && dataKey && routeId ? null : /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, scriptProps, {
      async: true,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: " "
      }
    }))
  }, typeof document === "undefined" && deferredData && dataKey && routeId ? /*#__PURE__*/React__namespace.createElement(Await, {
    resolve: deferredData.data[dataKey],
    errorElement: /*#__PURE__*/React__namespace.createElement(ErrorDeferredHydrationScript, {
      dataKey: dataKey,
      routeId: routeId,
      scriptProps: scriptProps,
      serializeError: serializeError
    }),
    children: data => {
      return /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, scriptProps, {
        async: true,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: serializeData(routeId, dataKey, data)
        }
      }));
    }
  }) : /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, scriptProps, {
    async: true,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: " "
    }
  })));
}
function ErrorDeferredHydrationScript({
  dataKey,
  routeId,
  scriptProps,
  serializeError
}) {
  let error = reactRouterDom.useAsyncError();
  return /*#__PURE__*/React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, scriptProps, {
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: serializeError(routeId, dataKey, error)
    }
  }));
}
function dedupe(array) {
  return [...new Set(array)];
}

// TODO: Can this be re-exported from RR?

function useMatches() {
  let {
    routeModules
  } = useRemixContext();
  let matches = reactRouterDom.useMatches();
  return React__namespace.useMemo(() => matches.map(match => {
    let remixMatch = {
      id: match.id,
      pathname: match.pathname,
      params: match.params,
      data: match.data,
      // Need to grab handle here since we don't have it at client-side route
      // creation time
      handle: routeModules[match.id].handle
    };
    return remixMatch;
  }), [matches, routeModules]);
}

/**
 * Returns the JSON parsed data from the current route's `loader`.
 *
 * @see https://remix.run/hooks/use-loader-data
 */
function useLoaderData() {
  return reactRouterDom.useLoaderData();
}

/**
 * Returns the loaderData for the given routeId.
 *
 * @see https://remix.run/hooks/use-route-loader-data
 */
function useRouteLoaderData(routeId) {
  return reactRouterDom.useRouteLoaderData(routeId);
}

/**
 * Returns the JSON parsed data from the current route's `action`.
 *
 * @see https://remix.run/hooks/use-action-data
 */
function useActionData() {
  return reactRouterDom.useActionData();
}

/**
 * Returns everything you need to know about a page transition to build pending
 * navigation indicators and optimistic UI on data mutations.
 *
 * @deprecated in favor of useNavigation
 *
 * @see https://remix.run/hooks/use-transition
 */
function useTransition() {
  let navigation = reactRouterDom.useNavigation();
  React__namespace.useEffect(() => {
    warnings.logDeprecationOnce(useTransitionWarning);
  }, []);
  return React__namespace.useMemo(() => convertNavigationToTransition(navigation), [navigation]);
}
function convertNavigationToTransition(navigation) {
  let {
    location,
    state,
    formMethod,
    formAction,
    formEncType,
    formData
  } = navigation;
  if (!location) {
    return transition.IDLE_TRANSITION;
  }
  let isActionSubmission = formMethod != null && ["POST", "PUT", "PATCH", "DELETE"].includes(formMethod.toUpperCase());
  if (state === "submitting" && formMethod && formAction && formEncType && formData) {
    if (isActionSubmission) {
      // Actively submitting to an action
      let transition = {
        location,
        state,
        submission: {
          method: formMethod.toUpperCase(),
          action: formAction,
          encType: formEncType,
          formData: formData,
          key: ""
        },
        type: "actionSubmission"
      };
      return transition;
    } else {
      // @remix-run/router doesn't mark loader submissions as state: "submitting"
      invariant(false, "Encountered an unexpected navigation scenario in useTransition()");
    }
  }
  if (state === "loading") {
    let {
      _isRedirect,
      _isFetchActionRedirect
    } = location.state || {};
    if (formMethod && formAction && formEncType && formData) {
      if (!_isRedirect) {
        if (isActionSubmission) {
          // We're reloading the same location after an action submission
          let transition = {
            location,
            state,
            submission: {
              method: formMethod.toUpperCase(),
              action: formAction,
              encType: formEncType,
              formData: formData,
              key: ""
            },
            type: "actionReload"
          };
          return transition;
        } else {
          // The new router fixes a bug in useTransition where the submission
          // "action" represents the request URL not the state of the <form> in
          // the DOM.  Back-port it here to maintain behavior, but useNavigation
          // will fix this bug.
          let url = new URL(formAction, window.location.origin);

          // This typing override should be safe since this is only running for
          // GET submissions and over in @remix-run/router we have an invariant
          // if you have any non-string values in your FormData when we attempt
          // to convert them to URLSearchParams
          url.search = new URLSearchParams(formData.entries()).toString();

          // Actively "submitting" to a loader
          let transition = {
            location,
            state: "submitting",
            submission: {
              method: formMethod.toUpperCase(),
              action: url.pathname + url.search,
              encType: formEncType,
              formData: formData,
              key: ""
            },
            type: "loaderSubmission"
          };
          return transition;
        }
      } else {
        // Redirecting after a submission
        if (isActionSubmission) {
          let transition = {
            location,
            state,
            submission: {
              method: formMethod.toUpperCase(),
              action: formAction,
              encType: formEncType,
              formData: formData,
              key: ""
            },
            type: "actionRedirect"
          };
          return transition;
        } else {
          let transition = {
            location,
            state,
            submission: {
              method: formMethod.toUpperCase(),
              action: formAction,
              encType: formEncType,
              formData: formData,
              key: ""
            },
            type: "loaderSubmissionRedirect"
          };
          return transition;
        }
      }
    } else if (_isRedirect) {
      if (_isFetchActionRedirect) {
        let transition = {
          location,
          state,
          submission: undefined,
          type: "fetchActionRedirect"
        };
        return transition;
      } else {
        let transition = {
          location,
          state,
          submission: undefined,
          type: "normalRedirect"
        };
        return transition;
      }
    }
  }

  // If no scenarios above match, then it's a normal load!
  let transition$1 = {
    location,
    state: "loading",
    submission: undefined,
    type: "normalLoad"
  };
  return transition$1;
}

/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 *
 * @see https://remix.run/api/remix#usefetchers
 */
function useFetchers() {
  let fetchers = reactRouterDom.useFetchers();
  return fetchers.map(f => {
    let fetcher = convertRouterFetcherToRemixFetcher({
      state: f.state,
      data: f.data,
      formMethod: f.formMethod,
      formAction: f.formAction,
      formEncType: f.formEncType,
      formData: f.formData,
      json: f.json,
      text: f.text,
      " _hasFetcherDoneAnything ": f[" _hasFetcherDoneAnything "]
    });
    addFetcherDeprecationWarnings(fetcher);
    return fetcher;
  });
}
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 *
 * @see https://remix.run/hooks/use-fetcher
 */
function useFetcher() {
  let fetcherRR = reactRouterDom.useFetcher();
  return React__namespace.useMemo(() => {
    let remixFetcher = convertRouterFetcherToRemixFetcher({
      state: fetcherRR.state,
      data: fetcherRR.data,
      formMethod: fetcherRR.formMethod,
      formAction: fetcherRR.formAction,
      formEncType: fetcherRR.formEncType,
      formData: fetcherRR.formData,
      json: fetcherRR.json,
      text: fetcherRR.text,
      " _hasFetcherDoneAnything ": fetcherRR[" _hasFetcherDoneAnything "]
    });
    let fetcherWithComponents = {
      ...remixFetcher,
      load: fetcherRR.load,
      submit: fetcherRR.submit,
      Form: fetcherRR.Form
    };
    addFetcherDeprecationWarnings(fetcherWithComponents);
    return fetcherWithComponents;
  }, [fetcherRR]);
}
function addFetcherDeprecationWarnings(fetcher) {
  let type = fetcher.type;
  Object.defineProperty(fetcher, "type", {
    get() {
      warnings.logDeprecationOnce(fetcherTypeWarning);
      return type;
    },
    set(value) {
      // Devs should *not* be doing this but we don't want to break their
      // current app if they are
      type = value;
    },
    // These settings should make this behave like a normal object `type` field
    configurable: true,
    enumerable: true
  });
  let submission = fetcher.submission;
  Object.defineProperty(fetcher, "submission", {
    get() {
      warnings.logDeprecationOnce(fetcherSubmissionWarning);
      return submission;
    },
    set(value) {
      // Devs should *not* be doing this but we don't want to break their
      // current app if they are
      submission = value;
    },
    // These settings should make this behave like a normal object `type` field
    configurable: true,
    enumerable: true
  });
}
function convertRouterFetcherToRemixFetcher(fetcherRR) {
  let {
    state,
    formMethod,
    formAction,
    formEncType,
    formData,
    json,
    text,
    data
  } = fetcherRR;
  let isActionSubmission = formMethod != null && ["POST", "PUT", "PATCH", "DELETE"].includes(formMethod.toUpperCase());
  if (state === "idle") {
    if (fetcherRR[" _hasFetcherDoneAnything "] === true) {
      let fetcher = {
        state: "idle",
        type: "done",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        submission: undefined,
        data
      };
      return fetcher;
    } else {
      let fetcher = transition.IDLE_FETCHER;
      return fetcher;
    }
  }
  if (state === "submitting" && formMethod && formAction && formEncType && (formData || json !== undefined || text !== undefined)) {
    if (isActionSubmission) {
      // Actively submitting to an action
      let fetcher = {
        state,
        type: "actionSubmission",
        formMethod: formMethod.toUpperCase(),
        formAction,
        formEncType,
        formData,
        json,
        text,
        // @ts-expect-error formData/json/text are mutually exclusive in the type,
        // so TS can't be sure these meet that criteria, but as a straight
        // assignment from the RR fetcher we know they will
        submission: {
          method: formMethod.toUpperCase(),
          action: formAction,
          encType: formEncType,
          formData,
          json,
          text,
          key: ""
        },
        data
      };
      return fetcher;
    } else {
      // @remix-run/router doesn't mark loader submissions as state: "submitting"
      invariant(false, "Encountered an unexpected fetcher scenario in useFetcher()");
    }
  }
  if (state === "loading") {
    if (formMethod && formAction && formEncType) {
      if (isActionSubmission) {
        if (data) {
          // In a loading state but we have data - must be an actionReload
          let fetcher = {
            state,
            type: "actionReload",
            formMethod: formMethod.toUpperCase(),
            formAction,
            formEncType,
            formData,
            json,
            text,
            // @ts-expect-error formData/json/text are mutually exclusive in the type,
            // so TS can't be sure these meet that criteria, but as a straight
            // assignment from the RR fetcher we know they will
            submission: {
              method: formMethod.toUpperCase(),
              action: formAction,
              encType: formEncType,
              formData,
              json,
              text,
              key: ""
            },
            data
          };
          return fetcher;
        } else {
          let fetcher = {
            state,
            type: "actionRedirect",
            formMethod: formMethod.toUpperCase(),
            formAction,
            formEncType,
            formData,
            json,
            text,
            // @ts-expect-error formData/json/text are mutually exclusive in the type,
            // so TS can't be sure these meet that criteria, but as a straight
            // assignment from the RR fetcher we know they will
            submission: {
              method: formMethod.toUpperCase(),
              action: formAction,
              encType: formEncType,
              formData,
              json,
              text,
              key: ""
            },
            data: undefined
          };
          return fetcher;
        }
      } else {
        // The new router fixes a bug in useTransition where the submission
        // "action" represents the request URL not the state of the <form> in
        // the DOM.  Back-port it here to maintain behavior, but useNavigation
        // will fix this bug.
        let url = new URL(formAction, window.location.origin);
        if (formData) {
          // This typing override should be safe since this is only running for
          // GET submissions and over in @remix-run/router we have an invariant
          // if you have any non-string values in your FormData when we attempt
          // to convert them to URLSearchParams
          url.search = new URLSearchParams(formData.entries()).toString();
        }

        // Actively "submitting" to a loader
        let fetcher = {
          state: "submitting",
          type: "loaderSubmission",
          formMethod: formMethod.toUpperCase(),
          formAction,
          formEncType,
          formData,
          json,
          text,
          // @ts-expect-error formData/json/text are mutually exclusive in the type,
          // so TS can't be sure these meet that criteria, but as a straight
          // assignment from the RR fetcher we know they will
          submission: {
            method: formMethod.toUpperCase(),
            action: url.pathname + url.search,
            encType: formEncType,
            formData,
            json,
            text,
            key: ""
          },
          data
        };
        return fetcher;
      }
    }
  }

  // If all else fails, it's a normal load!
  let fetcher = {
    state: "loading",
    type: "normalLoad",
    formMethod: undefined,
    formAction: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    formEncType: undefined,
    submission: undefined,
    data
  };
  return fetcher;
}

// Dead Code Elimination magic for production builds.
// This way devs don't have to worry about doing the NODE_ENV check themselves.
// If running an un-bundled server outside of `remix dev` you will still need
// to set the REMIX_DEV_SERVER_WS_PORT manually.
const LiveReload = process.env.NODE_ENV !== "development" ? () => null : function LiveReload({
  port,
  timeoutMs = 1000,
  nonce = undefined
}) {
  let js = String.raw;
  return /*#__PURE__*/React__namespace.createElement("script", {
    nonce: nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: js`
                function remixLiveReloadConnect(config) {
                  let REMIX_DEV_ORIGIN = ${JSON.stringify(process.env.REMIX_DEV_ORIGIN)};
                  let protocol =
                    REMIX_DEV_ORIGIN ? new URL(REMIX_DEV_ORIGIN).protocol.replace(/^http/, "ws") :
                    location.protocol === "https:" ? "wss:" : "ws:"; // remove in v2?
                  let hostname = location.hostname;
                  let url = new URL(protocol + "//" + hostname + "/socket");

                  url.port =
                    ${port} ||
                    REMIX_DEV_ORIGIN ? new URL(REMIX_DEV_ORIGIN).port :
                    Number(${
      // TODO: remove in v2
      process.env.REMIX_DEV_SERVER_WS_PORT}) ||
                    8002;

                  let ws = new WebSocket(url.href);
                  ws.onmessage = async (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                    if (event.type === "HMR") {
                      if (!window.__hmr__ || !window.__hmr__.contexts) {
                        console.log("💿 [HMR] No HMR context, reloading window ...");
                        window.location.reload();
                        return;
                      }
                      if (!event.updates || !event.updates.length) return;
                      let updateAccepted = false;
                      let needsRevalidation = new Set();
                      for (let update of event.updates) {
                        console.log("[HMR] " + update.reason + " [" + update.id +"]")
                        if (update.revalidate) {
                          needsRevalidation.add(update.routeId);
                          console.log("[HMR] Revalidating [" + update.routeId + "]");
                        }
                        let imported = await import(update.url +  '?t=' + event.assetsManifest.hmr.timestamp);
                        if (window.__hmr__.contexts[update.id]) {
                          let accepted = window.__hmr__.contexts[update.id].emit(
                            imported
                          );
                          if (accepted) {
                            console.log("[HMR] Updated accepted by", update.id);
                            updateAccepted = true;
                          }
                        }
                      }
                      if (event.assetsManifest && window.__hmr__.contexts["remix:manifest"]) {
                        let accepted = window.__hmr__.contexts["remix:manifest"].emit(
                          { needsRevalidation, assetsManifest: event.assetsManifest }
                        );
                        if (accepted) {
                          console.log("[HMR] Updated accepted by", "remix:manifest");
                          updateAccepted = true;
                        }
                      }
                      if (!updateAccepted) {
                        console.log("[HMR] Updated rejected, reloading...");
                        window.location.reload();
                      }
                    }
                  };
                  ws.onopen = () => {
                    if (config && typeof config.onOpen === "function") {
                      config.onOpen();
                    }
                  };
                  ws.onclose = (event) => {
                    if (event.code === 1006) {
                      console.log("Remix dev asset server web socket closed. Reconnecting...");
                      setTimeout(
                        () =>
                          remixLiveReloadConnect({
                            onOpen: () => window.location.reload(),
                          }),
                      ${String(timeoutMs)}
                      );
                    }
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                }
                remixLiveReloadConnect();
              `
    }
  });
};
function mergeRefs(...refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

exports.Await = Await;
exports.Link = Link;
exports.Links = Links;
exports.LiveReload = LiveReload;
exports.Meta = Meta;
exports.NavLink = NavLink;
exports.PrefetchPageLinks = PrefetchPageLinks;
exports.RemixContext = RemixContext;
exports.RemixRoute = RemixRoute;
exports.RemixRouteError = RemixRouteError;
exports.Scripts = Scripts;
exports.composeEventHandlers = composeEventHandlers;
exports.useActionData = useActionData;
exports.useFetcher = useFetcher;
exports.useFetchers = useFetchers;
exports.useLoaderData = useLoaderData;
exports.useMatches = useMatches;
exports.useRouteLoaderData = useRouteLoaderData;
exports.useTransition = useTransition;
