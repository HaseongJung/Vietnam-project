var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\haseong\Desktop\final\danang-restaurant\danang-restaurant\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\haseong\\Desktop\\final\\danang-restaurant\\danang-restaurant\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-AA657SXN.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByUsername(username) {
  return prisma.user.findUnique({ where: { username } });
}
async function createUser({
  username,
  password
}) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      username: username.trim(),
      role: 0,
      // Moderator
      passwordHash: hashedPassword
    }
  });
}
async function verifyLogin(username, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { username }
  });
  if (!userWithPassword || !userWithPassword.passwordHash || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.passwordHash
  ))
    return null;
  let { passwordHash: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request) {
  let userId = await requireUserId(request), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireManagerUser(request) {
  let user = await requireUser(request);
  if (user.role >= 1)
    return user;
  throw await logout(request);
}
async function requireAdminUser(request) {
  let user = await requireUser(request);
  if (user.role >= 2)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-CJYN2MBU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node3.json)({ user });
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "vi", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 43,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "app bg-white dark:bg-black font-quicksand", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/viet-nam.$slug.$restaurant.tsx
var viet_nam_slug_restaurant_exports = {};
__export(viet_nam_slug_restaurant_exports, {
  action: () => action,
  default: () => RestaurantKoreaPage,
  loader: () => loader2,
  meta: () => meta
});
var import_node5 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/components/SlideImages.tsx
var import_react_slick = __toESM(require("react-slick"));
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function SliderImages({ images = [] }) {
  var settings = {
    dots: !0,
    infinite: !0,
    speed: 500,
    autoplay: !0,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_slick.default, { ...settings, className: "", children: images.map(
    (image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: image.url, alt: "", className: "block h-[200px] object-cover rounded-2xl md:h-[240px] lg:h-[320px]" }, index, !1, {
      fileName: "app/components/SlideImages.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/SlideImages.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/constants/lang.ts
var lang = {
  hello: {
    helloEng: "Hello,",
    helloKor: "\uC548\uB155\uD558\uC138\uC694,",
    helloVie: "Xin ch\xE0o,"
  },
  welcome: {
    welcomeEng: "Let's explore the restaurants in Da Nang together.",
    welcomeVie: "H\xE3y c\xF9ng nhau kh\xE1m ph\xE1 c\xE1c nh\xE0 h\xE0ng t\u1EA1i \u0110\xE0 N\u1EB5ng.",
    welcomeKor: "\uD568\uAED8 \uB2E4\uB0AD\uC758 \uB808\uC2A4\uD1A0\uB791\uC744 \uD0D0\uD5D8\uD569\uC2DC\uB2E4."
  },
  countryVN: {
    countryVNEng: "Vietnam",
    countryVNKor: "\uBCA0\uD2B8\uB0A8",
    countryVNVie: "Vi\u1EC7t Nam"
  },
  countryKO: {
    countryKOEng: "Korea",
    countryKOKor: "\uD55C\uAD6D",
    countryKOVie: "H\xE0n Qu\u1ED1c"
  },
  bestResttaurant: {
    bestResttaurantEng: "Best Restaurant",
    bestResttaurantKor: "\uC778\uAE30\uC788\uB294 \uB808\uC2A4\uD1A0\uB791",
    bestResttaurantVie: "Nh\xE0 h\xE0ng \u0111\u01B0\u1EE3c y\xEAu th\xEDch"
  },
  subBestResttaurant: {
    subBestResttaurantEng: "Top 10 best resttaurant",
    subBestResttaurantKor: "\uC778\uAE30\uC788\uB294 \uC0C1\uC704 10\uAC1C\uC758 \uB808\uC2A4\uD1A0\uB791",
    subBestResttaurantVie: "Top 10 nh\xE0 h\xE0ng \u0111\u01B0\u1EE3c y\xEAu th\xEDch"
  },
  predictResttaurant: {
    predictResttaurantEng: "Recommend",
    predictResttaurantKor: "\uCD94\uCC9C=",
    predictResttaurantVie: "\u0110\u1EC1 xu\u1EA5t"
  },
  subPredictResttaurant: {
    subPredictResttaurantEng: "Recommend for you",
    subPredictResttaurantKor: "\uB2F9\uC2E0\uC5D0\uAC8C \uCD94\uCC9C\uD569\uB2C8\uB2E4",
    subPredictResttaurantVie: "\u0110\u1EC1 xu\u1EA5t d\xE0nh cho b\u1EA1n"
  },
  titleToCountry: {
    titleToCountryEng: "Explore Cuisine",
    titleToCountryKor: "\uC694\uB9AC \uBC1C\uACAC",
    titleToCountryVie: "Kh\xE1m ph\xE1 \u1EA9m th\u1EF1c"
  },
  dashboard: {
    dashboardEng: "Dashboard",
    dashboardKor: "\uB300\uC2DC\uBCF4\uB4DC",
    dashboardVie: "Qu\u1EA3n l\xFD"
  },
  home: {
    homeEng: "Home",
    homeKor: "\uC9D1",
    homeVie: "Trang ch\u1EE7"
  },
  favorite: {
    favoriteEng: "Favorite",
    favoriteKor: "\uC88B\uC544\uD558\uB294",
    favoriteVie: "Y\xEAu th\xEDch"
  },
  schedule: {
    scheduleEng: "Schedule",
    scheduleKor: "\uC77C\uC815",
    scheduleVie: "L\u1ECBch tr\xECnh"
  },
  settings: {
    settingsEng: "Settings",
    settingsKor: "\uC124\uC815",
    settingsVie: "C\xE0i \u0111\u1EB7t"
  },
  login: {
    loginEng: "Login",
    loginKor: "\uB85C\uADF8\uC778",
    loginVie: "\u0110\u0103ng nh\u1EADp"
  },
  signup: {
    signupEng: "Sign up",
    signupKor: "\uAC00\uC785",
    signupVie: "\u0110\u0103ng k\xFD"
  },
  logout: {
    logoutEng: "Logout",
    logoutKor: "\uB85C\uADF8\uC544\uC6C3",
    logoutVie: "\u0110\u0103ng xu\u1EA5t"
  },
  category: {
    categoryEng: "Category",
    categoryKor: "\uBAA9\uB85D",
    categoryVie: "Danh m\u1EE5c"
  },
  restaurant: {
    restaurantEng: "restaurant",
    restaurantKor: "\uC2DD\uB2F9",
    restaurantVie: "Nh\xE0 h\xE0ng"
  },
  restaurantVie: {
    restaurantVieEng: "Vietnam Restaurant",
    restaurantVieKor: "\uBCA0\uD2B8\uB0A8 \uB098\uD56D",
    restaurantVieVie: "Nh\xE0 h\xE0ng Vi\u1EC7t Nam"
  },
  restaurantKor: {
    restaurantKorEng: "Korea Restaurant",
    restaurantKorKor: "\uB098\uD56D \uD55C\uAFB8\uC625",
    restaurantKorVie: "Nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c"
  },
  homePage: {
    homePageEng: "Home page",
    homePageKor: "\uD648\uD398\uC774\uC9C0",
    homePageVie: "Trang ch\u1EE7"
  },
  open: {
    openEng: "Open",
    openKor: "\uC5F4\uB2E4",
    openVie: "M\u1EDF c\u1EEDa"
  },
  close: {
    closeEng: "Close",
    closeKor: "\uB2EB\uB2E4",
    closeVie: "\u0110\xF3ng c\u1EEDa"
  },
  description: {
    descriptionEng: "Description",
    descriptionKor: "\uC124\uBA85",
    descriptionVie: "M\xF4 t\u1EA3"
  },
  direction: {
    directionEng: "Direction",
    directionKor: "\uBC29\uD5A5",
    directionVie: "\u0110\u01B0\u1EDDng \u0111i"
  },
  language: {
    languageEng: "Language",
    languageKor: "\uC5B8\uC5B4",
    languageVie: "Ng\xF4n ng\u1EEF"
  },
  save: {
    saveEng: "Save",
    saveKor: "\uAD6C\uD558\uB2E4",
    saveVie: "L\u01B0u"
  },
  loginTitle: {
    loginTitleEng: "Sign in to your account",
    loginTitleKor: "\uACC4\uC815\uC5D0 \uB85C\uADF8\uC778",
    loginTitleVie: "\u0110\u0103ng nh\u1EADp v\xE0o t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n"
  },
  loginSubTitle: {
    loginSubTitleEng: "Don't have an account yet",
    loginSubTitleKor: "\uC544\uC9C1 \uACC4\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
    loginSubTitleVie: "B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n"
  },
  signupTitle: {
    signupTitleEng: "Create and account",
    signupTitleKor: "\uB9CC\uB4E4\uAE30 \uBC0F \uACC4\uC815",
    signupTitleVie: "T\u1EA1o t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n"
  },
  signupSubTitle: {
    signupSubTitleEng: "Already have an account",
    signupSubTitleKor: "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC2B5\uB2C8\uB2E4",
    signupSubTitleVie: "B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n"
  },
  username: {
    usernameEng: "Username",
    usernameKor: "\uC0AC\uC6A9\uC790 \uC774\uB984",
    usernameVie: "T\xEAn \u0111\u0103ng nh\u1EADp"
  },
  password: {
    passwordEng: "Password",
    passwordKor: "\uBE44\uBC00\uBC88\uD638",
    passwordVie: "M\u1EADt kh\u1EA9u"
  },
  remember: {
    rememberEng: "Remember",
    rememberKor: "\uAE30\uC5B5\uD558\uB2E4",
    rememberVie: "Nh\u1EDB m\u1EADt kh\u1EA9u"
  },
  addSchedule: {
    addScheduleEng: "Add to schedule",
    addScheduleKor: "\uC77C\uC815\uC5D0 \uCD94\uAC00",
    addScheduleVie: "Th\xEAm v\xE0o l\u1ECBch tr\xECnh"
  },
  timeRequired: {
    timeRequiredEng: "Time is required!",
    timeRequiredKor: "\uC2DC\uAC04\uC744 \uC120\uD0DD\uD558\uC138\uC694!",
    timeRequiredVie: "Vui l\xF2ng ch\u1ECDn th\u1EDDi gian!"
  },
  errorLogin: {
    error1: {
      error1Eng: "Username is invalid",
      error1Kor: "\uC0AC\uC6A9\uC790 \uC774\uB984\uC774 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
      error1Vie: "T\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng \u0111\xFAng"
    },
    error2: {
      error2Eng: "Invalid username or password",
      error2Kor: "\uC798\uBABB\uB41C \uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638",
      error2Vie: "T\xEAn \u0111\u0103ng nh\u1EADp ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng"
    },
    error3: {
      error3Eng: "Password is required",
      error3Kor: "\uBE44\uBC00\uBC88\uD638\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4",
      error3Vie: "Vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u"
    },
    error4: {
      error4Eng: "Password is too short",
      error4Kor: "\uBE44\uBC00\uBC88\uD638\uAC00 \uB108\uBB34 \uC9E7\uC2B5\uB2C8\uB2E4",
      error4Vie: "M\u1EADt kh\u1EA9u qu\xE1 ng\u1EAFn"
    },
    error51: {
      error51Eng: "User with username",
      error51Kor: "\uC0AC\uC6A9\uC790 \uC774\uB984\uC774 \uC788\uB294 \uC0AC\uC6A9\uC790",
      error51Vie: "T\xEAn ng\u01B0\u1EDDi d\xF9ng"
    },
    error52: {
      error52Eng: "already exists",
      error52Kor: "\uC774\uBBF8 \uC874\uC7AC \uD568",
      error52Vie: "\u0111\xE3 t\u1ED3n t\u1EA1i."
    },
    error6: {
      error6Eng: "Something went wrong trying to create a new user.",
      error6Kor: "\uC0C8 \uC0AC\uC6A9\uC790\uB97C \uB9CC\uB4DC\uB294 \uB3D9\uC548 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
      error6Vie: "C\xF3 l\u1ED7i v\u1EDBi t\u1EA1o t\xEAn ng\u01B0\u1EDDi d\xF9ng m\u1EDBi"
    }
  },
  //404
  page404Title: {
    page404TitleEng: "Page not found",
    page404TitleKor: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C",
    page404TitleVie: "Kh\xF4ng t\xECm th\u1EA5y trang"
  },
  page404SubTitle: {
    page404SubTitleEng: "The page you are looking for does not exist. Here are some useful links:",
    page404SubTitleKor: "\uCC3E\uC73C\uC2DC\uB294 \uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uBA87 \uAC00\uC9C0 \uC720\uC6A9\uD55C \uB9C1\uD06C\uC785\uB2C8\uB2E4.",
    page404SubTitleVie: "Trang b\u1EA1n t\xECm ki\u1EBFm kh\xF4ng t\u1ED3n t\u1EA1i. D\u01B0\u1EDBi \u0111\xE2y l\xE0 m\u1ED9t s\u1ED1 li\xEAn k\u1EBFt h\u1EEFu \xEDch:"
  },
  page404TimeTitle: {
    page404TimeTitleEng: "Automatically return to the next homepage",
    page404TimeTitleKor: "\uB2E4\uC74C \uD648\uD398\uC774\uC9C0\uB85C \uC790\uB3D9\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",
    page404TimeTitleVie: "T\u1EF1 \u0111\u1ED9ng quay v\u1EC1 trang ch\u1EE7 sau"
  },
  back: {
    backEng: "Back",
    backKor: "\uBC18\uD488",
    backVie: "Tr\u1EDF l\u1EA1i"
  },
  minute: {
    minuteEng: "minute",
    minuteKor: "\uBD84",
    minuteVie: "ph\xFAt"
  }
};

// app/cookies.server.ts
var import_node4 = require("@remix-run/node"), languageCookie = (0, import_node4.createCookie)("language", {
  maxAge: 604800
  // một tuần
});

// app/helpers/cookies.ts
async function getLanguageCookie(cookieHeader) {
  return (await languageCookie.parse(cookieHeader) || {}).language || "nameEng";
}

// app/icons/ClockIcon.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ClockIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/ClockIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/ClockIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/HeartIcon.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), HeartIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6 text-[#1ec28b]",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/HeartIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/HeartIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), HeartIconUsed = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#1ec28b",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6 text-[#1ec28b]",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/HeartIcon.tsx",
        lineNumber: 27,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/HeartIcon.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
);

// app/icons/MapPinIcon.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), MapPinIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/MapPinIcon.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/MapPinIcon.tsx",
          lineNumber: 15,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/icons/MapPinIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/MoneyIcon.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), MoneyIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "svg",
  {
    width: "22",
    height: "19",
    viewBox: "0 0 22 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-4 h-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        d: "M1.25 15.75C6.58561 15.7457 11.898 16.4522 17.047 17.851C17.774 18.049 18.5 17.509 18.5 16.755V15.75M2.75 1.5V2.25C2.75 2.44891 2.67098 2.63968 2.53033 2.78033C2.38968 2.92098 2.19891 3 2 3H1.25M1.25 3V2.625C1.25 2.004 1.754 1.5 2.375 1.5H19.25M1.25 3V12M19.25 1.5V2.25C19.25 2.664 19.586 3 20 3H20.75M19.25 1.5H19.625C20.246 1.5 20.75 2.004 20.75 2.625V12.375C20.75 12.996 20.246 13.5 19.625 13.5H19.25M1.25 12V12.375C1.25 12.6734 1.36853 12.9595 1.5795 13.1705C1.79048 13.3815 2.07663 13.5 2.375 13.5H2.75M1.25 12H2C2.19891 12 2.38968 12.079 2.53033 12.2197C2.67098 12.3603 2.75 12.5511 2.75 12.75V13.5M19.25 13.5V12.75C19.25 12.5511 19.329 12.3603 19.4697 12.2197C19.6103 12.079 19.8011 12 20 12H20.75M19.25 13.5H2.75M14 7.5C14 8.29565 13.6839 9.05871 13.1213 9.62132C12.5587 10.1839 11.7956 10.5 11 10.5C10.2044 10.5 9.44129 10.1839 8.87868 9.62132C8.31607 9.05871 8 8.29565 8 7.5C8 6.70435 8.31607 5.94129 8.87868 5.37868C9.44129 4.81607 10.2044 4.5 11 4.5C11.7956 4.5 12.5587 4.81607 13.1213 5.37868C13.6839 5.94129 14 6.70435 14 7.5ZM17 7.5H17.008V7.508H17V7.5ZM5 7.5H5.008V7.508H5V7.5Z",
        stroke: "#1ec28b",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/MoneyIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/MoneyIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/models/favorites.server.ts
async function checkRestaurantIsFavorited({
  userId,
  restaurantId
}) {
  return prisma.favorite.count({
    where: {
      userId,
      restaurantId
    }
  });
}
async function addToFavorites({ userId, restaurantId }) {
  return prisma.favorite.create({
    data: {
      userId,
      restaurantId
    }
  });
}
async function removeFromFavorites({
  userId,
  restaurantId
}) {
  return prisma.favorite.deleteMany({
    where: {
      userId,
      restaurantId
    }
  });
}
async function checkRestaurantIsRatings({
  userId,
  restaurantId
}) {
  return prisma.rating.count({
    where: {
      userId,
      restaurantId
    }
  });
}

// app/models/restaurants.server.ts
async function getRestaurantsList() {
  return prisma.restaurant.findMany({
    include: {
      countryType: {
        select: {
          country: !0,
          type: !0
        }
      },
      images: {
        select: {
          url: !0
        }
      }
    }
  });
}
async function getRestaurantsById(id) {
  return prisma.restaurant.findUnique({
    where: { id },
    include: {
      images: {
        select: {
          url: !0
        }
      }
    }
  });
}
async function getTopRestaurantsByRating({
  take = 10
}) {
  return prisma.restaurant.findMany({
    take,
    orderBy: {
      favorites: {
        _count: "desc"
      }
    },
    include: {
      countryType: {
        select: {
          country: !0,
          type: !0
        }
      },
      images: {
        select: {
          url: !0
        }
      }
    }
  });
}
async function getRestaurantsByCountryIdAndSlug({
  countryId = "1",
  slug
}) {
  return prisma.restaurant.findMany({
    where: {
      countryId,
      countryType: {
        type: {
          slug
        }
      }
    },
    include: {
      images: {
        select: {
          url: !0
        }
      }
    }
  });
}
async function getRestaurantsFavoriteById(userId) {
  return (await prisma.favorite.findMany({
    where: { userId },
    include: {
      restaurant: {
        include: {
          countryType: {
            include: {
              country: !0,
              type: !0
            }
          },
          images: !0
        }
      }
    }
  })).map((favorite) => ({
    restaurant: favorite.restaurant,
    countrySlug: favorite.restaurant.countryType.country.slug,
    typeSlug: favorite.restaurant.countryType.type.slug,
    images: favorite.restaurant.images
  }));
}
async function deleteRestaurantById(restaurantId) {
  return prisma.restaurant.delete({
    where: { id: restaurantId }
  });
}
async function createRestaurant(data) {
  return prisma.restaurant.create({
    data: {
      nameVie: data.nameVie,
      descriptionVie: data.descriptionVie,
      addressVie: data.addressVie,
      nameKor: data.nameKor,
      descriptionKor: data.descriptionKor,
      addressKor: data.addressKor,
      rating: data.rating,
      nameEng: data.nameEng,
      descriptionEng: data.descriptionEng,
      addressEng: data.addressEng,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      direct: data.direct,
      priceLow: data.priceLow,
      priceHigh: data.priceHigh,
      countryId: data.countryId,
      typeId: data.typeId
    }
  });
}
async function updateRestaurant(data) {
  return prisma.restaurant.update({
    where: { id: data.id },
    data: {
      nameVie: data.nameVie,
      descriptionVie: data.descriptionVie,
      addressVie: data.addressVie,
      nameKor: data.nameKor,
      descriptionKor: data.descriptionKor,
      addressKor: data.addressKor,
      nameEng: data.nameEng,
      descriptionEng: data.descriptionEng,
      addressEng: data.addressEng,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      direct: data.direct,
      rating: data.rating,
      priceLow: data.priceLow,
      priceHigh: data.priceHigh,
      countryId: data.countryId,
      typeId: data.typeId
    }
  });
}

// app/models/rating.server.ts
async function getValueRating(userId, restaurantId) {
  let ratingData = await prisma.rating.findFirst({
    where: {
      userId,
      restaurantId
    }
  });
  return ratingData == null ? void 0 : ratingData.ratingValue;
}
async function updateRatingValue(userId, restaurantId, ratingValue) {
  return prisma.rating.updateMany({
    where: { userId, restaurantId },
    data: {
      ratingValue
    }
  });
}
async function addRatingValue(userId, restaurantId, ratingValue) {
  return prisma.rating.create({
    data: {
      userId,
      restaurantId,
      ratingValue
    }
  });
}

// app/routes/viet-nam.$slug.$restaurant.tsx
var import_react5 = require("react"), import_fa = require("react-icons/fa");

// app/components/RestaurantInfor.tsx
var import_react3 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), RestaurantInfor = ({
  url,
  name,
  address,
  open,
  close,
  rating,
  priceLow,
  priceHigh,
  images,
  language,
  link
}) => url ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Link, { to: url, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "div",
  {
    className: "relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]",
    style: {
      backgroundImage: `url(${images}`
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "img",
          {
            src: "https://www.svgrepo.com/show/2732/restaurant.svg",
            alt: "Restaurant",
            className: "w-6 h-6"
          },
          void 0,
          !1,
          {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-2 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, !1, {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MapPinIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: address }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MoneyIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: `${priceLow ? `\u20A9${priceLow}` : ""} ${priceHigh ? `- \u20A9${priceHigh}` : ""}` }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ClockIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${open} - ${lang.close[`close${language}`]}: ${close}` }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 91,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 90,
  columnNumber: 5
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: `${link}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "div",
  {
    className: "relative mb-[80px] w-full h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat md:h-[240px] lg:mb-[60px]",
    style: {
      backgroundImage: `url(${images}`
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute bg-white left-3 right-3 bottom-[-60px] p-3 rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "img",
          {
            src: "https://www.svgrepo.com/show/2732/restaurant.svg",
            alt: "Restaurant",
            className: "w-6 h-6"
          },
          void 0,
          !1,
          {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 46,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-2 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, !1, {
            fileName: "app/components/RestaurantInfor.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MapPinIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: address }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(MoneyIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: `${priceLow ? `\u20A9${priceLow}` : ""} ${priceHigh ? `- \u20A9${priceHigh}` : ""}` }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ClockIcon, {}, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${open} - ${lang.close[`close${language}`]}: ${close}` }, void 0, !1, {
          fileName: "app/components/RestaurantInfor.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RestaurantInfor.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RestaurantInfor.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/RestaurantInfor.tsx",
    lineNumber: 38,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/RestaurantInfor.tsx",
  lineNumber: 37,
  columnNumber: 5
}, this);

// app/helpers/slug.ts
var createRestaurantSlug = ({
  countrySlug,
  typeSlug,
  id
}) => `/${countrySlug}/${typeSlug}/${id}`;

// app/routes/viet-nam.$slug.$restaurant.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let user = await getUser(request), slug = params.restaurant, restaurant;
  if (slug != null && slug.length)
    restaurant = await getRestaurantsById(slug);
  else
    return (0, import_node5.redirect)("/404");
  if (!restaurant)
    return (0, import_node5.redirect)("/404");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), restaurants = await getRestaurantsList(), isFavorited, isRating, value_rating;
  return user && (isFavorited = await checkRestaurantIsFavorited({
    userId: user.id,
    restaurantId: restaurant.id
  }), isRating = await checkRestaurantIsRatings({
    userId: user.id,
    restaurantId: restaurant.id
  }), value_rating = await getValueRating(user.id, restaurant.id)), (0, import_node5.json)({
    user,
    language,
    restaurant,
    isFavorited,
    isRating,
    value_rating,
    restaurants
  });
}, action = async ({ request, params }) => {
  (0, import_tiny_invariant2.default)(params.restaurant, "id not found");
  let user = await getUser(request), slug = params.restaurant, restaurant = await getRestaurantsById(slug);
  if (!restaurant)
    return (0, import_node5.redirect)("/404");
  let formData = await request.formData(), rating = formData.get("rating"), favorite = formData.get("favorite");
  if (!user)
    return (0, import_node5.redirect)("/login");
  favorite === "on" ? await checkRestaurantIsFavorited({
    userId: user.id,
    restaurantId: restaurant.id
  }) || await addToFavorites({ userId: user.id, restaurantId: restaurant.id }) : await removeFromFavorites({
    userId: user.id,
    restaurantId: restaurant.id
  });
  let value_rating = await getValueRating(user.id, restaurant.id);
  return !value_rating && Number(rating) !== 0 ? (await addRatingValue(user.id, restaurant.id, Number(rating) | 0), (0, import_node5.json)({})) : value_rating && Number(rating) !== 0 ? (await updateRatingValue(user.id, restaurant.id, Number(rating) | 0), (0, import_node5.json)({})) : (0, import_node5.json)({});
}, meta = ({ data }) => [
  { title: `${data == null ? void 0 : data.restaurant[`name${data.language}`]}` },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function RestaurantKoreaPage() {
  let { language, restaurant, isFavorited, value_rating, restaurants } = (0, import_react4.useLoaderData)(), submit = (0, import_react4.useSubmit)(), [data, setData] = (0, import_react5.useState)([]);
  console.log("******************************"), (0, import_react5.useEffect)(() => {
    fetch(`http://127.0.0.1:8080/content-based/${restaurant.nameVie}`).then((response) => response.json()).then((data2) => setData(data2)).catch((error) => console.error(error));
  }, [restaurant.nameVie]), console.log("->>>>>>>>>>>>>>>>>>>>>>>>>", data);
  let predictRes = restaurants.filter(
    (item) => data == null ? void 0 : data.includes(item == null ? void 0 : item.nameVie)
  ), [rating, setRating] = (0, import_react5.useState)(value_rating || 0), [hover, setHover] = (0, import_react5.useState)();
  function handleChang(event) {
    submit(event.currentTarget, { replace: !0 });
  }
  let handleSubmit = (event) => {
    let dateTimeInput = document.getElementById(
      "dateTime"
    );
    dateTimeInput.value || (event.preventDefault(), dateTimeInput.focus(), alert(`${lang.timeRequired[`timeRequired${language}`]}`));
  };
  return console.log("value_rating------------>", value_rating), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:w-[70%] lg:pl-6 lg:overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Form, { method: "post", onChange: handleChang, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "input",
        {
          type: "checkbox",
          name: "favorite",
          defaultChecked: Boolean(isFavorited),
          className: "absolute right-4 top-4 z-20 w-5 h-5 opacity-0 cursor-pointer"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 179,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "absolute right-4 top-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center", children: isFavorited ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HeartIconUsed, {}, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 186,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(HeartIcon, {}, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 186,
        columnNumber: 46
      }, this) }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-[200px] md:h-[240px] lg:h-[320px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SliderImages, { images: restaurant.images }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-3 rounded-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "img",
            {
              src: "https://www.svgrepo.com/show/2732/restaurant.svg",
              alt: "Restaurant",
              className: "w-6 h-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
              lineNumber: 193,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-2 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "uppercase text-xs font-bold text-gray-600", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
              fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, !1, {
              fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                name: "rating",
                type: "text",
                className: "invisible",
                value: rating
              },
              void 0,
              !1,
              {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 206,
                columnNumber: 17
              },
              this
            ),
            [...Array(5)].map((star, index) => {
              let ratingValue = index + 1;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                import_fa.FaStar,
                {
                  className: `star ${ratingValue <= (hover || rating) ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`,
                  size: 20,
                  onMouseEnter: () => setHover(ratingValue),
                  onMouseLeave: () => setHover(null),
                  onClick: (e) => {
                    setRating(ratingValue);
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                  lineNumber: 219,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 218,
                columnNumber: 25
              }, this) }, index, !1, {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 217,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 216,
                columnNumber: 21
              }, this);
            })
          ] }, void 0, !0, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MapPinIcon, {}, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MoneyIcon, {}, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: `${restaurant.priceLow ? `\u20A9${restaurant.priceLow}` : ""} ${restaurant.priceHigh ? `- \u20A9${restaurant.priceHigh}` : ""}` }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 250,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ClockIcon, {}, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime} - ${lang.close[`close${language}`]}: ${restaurant.closingTime}` }, void 0, !1, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 260,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-4 px-2 bg-white rounded-xl md:inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-600 mb-1", children: lang.addSchedule[`addSchedule${language}`] }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react4.Form,
        {
          method: "post",
          action: `/schedule?new=${restaurant.id}`,
          onSubmit: handleSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "datetime-local",
                id: "dateTime",
                name: "dateTime",
                className: "inline-flex border text-sm p-2 rounded-xl outline-none focus:border-[#1ec28b]"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 279,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "bg-[#1ec28b] rounded-xl ml-2 text-white text-xs uppercase font-bold py-2 px-4 hover:bg-[#0aae77]",
                children: lang.save[`save${language}`]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
                lineNumber: 285,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 278,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 273,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-2 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "font-bold mb-1", children: lang.description[`description${language}`] }, void 0, !1, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-[15px] text-justify", children: restaurant[`description${language}`] }, void 0, !1, {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 300,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 296,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "a",
        {
          href: restaurant.direct || "",
          title: restaurant[`name${language}`] || "",
          rel: "noreferrer",
          target: "_blank",
          className: "block p-3 my-4 text-center rounded-2xl bg-[#1ec28b] text-white uppercase font-bold lg:w-[40%] lg:ml-auto",
          children: lang.direction[`direction${language}`]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
          lineNumber: 304,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
      lineNumber: 295,
      columnNumber: 7
    }, this),
    (predictRes == null ? void 0 : predictRes.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "text-2xl font-semibold", children: "Related restaurants" }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: predictRes == null ? void 0 : predictRes.map((restaurant2) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          RestaurantInfor,
          {
            link: createRestaurantSlug({
              countrySlug: (_b = (_a = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _a.country) == null ? void 0 : _b.slug,
              typeSlug: (_d = (_c = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _c.type) == null ? void 0 : _d.slug,
              id: restaurant2.id
            }),
            name: restaurant2[`name${language}`],
            address: restaurant2[`address${language}`],
            open: restaurant2.openingTime,
            priceLow: restaurant2.priceLow || void 0,
            priceHigh: restaurant2.priceHigh || void 0,
            close: restaurant2.closingTime,
            rating: restaurant2.rating || 0,
            images: ((_e = restaurant2.images[0]) == null ? void 0 : _e.url) || void 0,
            language
          },
          restaurant2.id,
          !1,
          {
            fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
            lineNumber: 320,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, !1, {
        fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
        lineNumber: 318,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
      lineNumber: 316,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/viet-nam.$slug.$restaurant.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}

// app/routes/admin.images.$restId.$id.tsx
var admin_images_restId_id_exports = {};
__export(admin_images_restId_id_exports, {
  action: () => action2,
  default: () => AdminSymbolDetailPage,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/components/Button.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Button = ({
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
  let baseClass = "flex items-center rounded p-2", stateClass = "";
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
  return stateClass && (baseClass += ` ${stateClass}`), customClass && (baseClass += ` ${customClass}`), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "button",
    {
      type,
      name,
      value,
      className: baseClass,
      disabled,
      onClick,
      children: [
        startIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "mr-2", children: startIcon }, void 0, !1, {
          fileName: "app/components/Button.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        children,
        endIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ml-r", children: endIcon }, void 0, !1, {
          fileName: "app/components/Button.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
};

// app/icons/PlusIcon.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PlusIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
  fileName: "app/icons/PlusIcon.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/icons/PlusIcon.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/icons/CheckIcon.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), CheckIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }, void 0, !1, {
  fileName: "app/icons/CheckIcon.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/icons/CheckIcon.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/icons/TrashIcon.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), TrashIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" }, void 0, !1, {
  fileName: "app/icons/TrashIcon.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/icons/TrashIcon.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/components/ActionButtons.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), ActionButtons = ({
  isNewItem,
  isSubmitting
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-between", children: [
  isNewItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/components/ActionButtons.tsx",
    lineNumber: 20,
    columnNumber: 18
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    Button,
    {
      color: "error",
      type: "submit",
      name: "_action",
      value: "delete",
      disabled: isSubmitting,
      startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TrashIcon, {}, void 0, !1, {
        fileName: "app/components/ActionButtons.tsx",
        lineNumber: 27,
        columnNumber: 20
      }, this),
      children: isSubmitting ? "Deleting..." : "Delete"
    },
    void 0,
    !1,
    {
      fileName: "app/components/ActionButtons.tsx",
      lineNumber: 21,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    Button,
    {
      color: "primary",
      type: "submit",
      name: "_action",
      value: isNewItem ? "add" : "update",
      disabled: isSubmitting,
      startIcon: isNewItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PlusIcon, {}, void 0, !1, {
        fileName: "app/components/ActionButtons.tsx",
        lineNumber: 38,
        columnNumber: 30
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CheckIcon, {}, void 0, !1, {
        fileName: "app/components/ActionButtons.tsx",
        lineNumber: 38,
        columnNumber: 45
      }, this),
      children: [
        isNewItem ? isSubmitting ? "Creating..." : "Create" : null,
        isNewItem ? null : isSubmitting ? "Updating..." : "Update"
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ActionButtons.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ActionButtons.tsx",
  lineNumber: 19,
  columnNumber: 3
}, this);

// app/components/FormInput.tsx
var import_react6 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), FormInput = (0, import_react6.forwardRef)(({
  name,
  error,
  type = "text",
  label = "Label",
  required = !1,
  defaultValue = "",
  min,
  max,
  step,
  placeholder,
  wrapperClass,
  onBlur
}, ref) => {
  let [warningMsg, setWarningMsg] = (0, import_react6.useState)("");
  return (0, import_react6.useEffect)(() => {
    name === "seoTitle" && defaultValue.length > 70 && setWarningMsg("Too long, max length should be 70");
  }, [defaultValue, name]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: wrapperClass ?? "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "label",
      {
        htmlFor: name,
        className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
        children: label
      },
      void 0,
      !1,
      {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 47,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "input",
        {
          ref,
          defaultValue,
          onBlur,
          required,
          id: name,
          name,
          type,
          placeholder,
          min,
          max,
          step,
          autoComplete: name,
          "aria-invalid": error ? !0 : void 0,
          "aria-describedby": `${name}-error`,
          className: `w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${warningMsg ? "border-amber-400" : ""}`
        },
        void 0,
        !1,
        {
          fileName: "app/components/FormInput.tsx",
          lineNumber: 54,
          columnNumber: 7
        },
        this
      ),
      warningMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "block w-[20px] h-[20px] text-center text-black rounded-full bg-amber-400 leading-[20px]", children: "!" }, void 0, !1, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "pt-1 text-red-700", id: `${name}-error`, children: error }, void 0, !1, {
        fileName: "app/components/FormInput.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this),
    warningMsg && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "pt-1 text-xs text-amber-500", children: warningMsg }, void 0, !1, {
      fileName: "app/components/FormInput.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FormInput.tsx",
    lineNumber: 46,
    columnNumber: 3
  }, this);
});
FormInput.displayName = "FormInput";

// app/models/images.server.ts
async function getImageById(id) {
  return prisma.image.findUnique({
    where: {
      id
    }
  });
}
async function getListImagesByRestaurantId(restaurantId) {
  return prisma.image.findMany({
    where: {
      restaurantId
    },
    orderBy: {
      createdAt: "asc"
    }
  });
}
async function createImage({
  restaurantId,
  url
}) {
  return prisma.image.create({
    data: {
      restaurantId,
      url
    }
  });
}
async function updateImage({ id, url }) {
  return prisma.image.update({
    where: {
      id
    },
    data: {
      url
    }
  });
}
async function deleteImage(id) {
  return prisma.image.delete({
    where: {
      id
    }
  });
}

// app/routes/admin.images.$restId.$id.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader3 = async ({ params, request }) => {
  (0, import_tiny_invariant3.default)(params.id, "id not found");
  let image = await getImageById(params.id);
  if (params.id !== "new" && !image)
    throw new Response("Not Found", { status: 404 });
  return params.id === "new" ? (0, import_node6.json)({ image }) : (0, import_node6.json)({
    image
  });
}, action2 = async ({ request, params }) => {
  (0, import_tiny_invariant3.default)(params.id, "id not found"), (0, import_tiny_invariant3.default)(params.restId, "id not found");
  let restaurant = await getRestaurantsById(params.restId), formData = await request.formData(), action11 = formData.get("_action"), url = formData.get("url"), defaultErrors = {
    url: null
  };
  if (typeof url != "string" || url.length === 0)
    return (0, import_node6.json)(
      { errors: { ...defaultErrors, type: "Symbol is required" } },
      { status: 400 }
    );
  if (action11 === "delete")
    return await getImageById(params.id) && await deleteImage(params.id), (0, import_node6.redirect)(`/admin/images/${restaurant == null ? void 0 : restaurant.id}`);
  let imageSubmit, dataSubmit = {
    url,
    restaurantId: restaurant == null ? void 0 : restaurant.id
  };
  return params.id === "new" ? imageSubmit = await createImage(dataSubmit) : imageSubmit = await updateImage({
    ...dataSubmit,
    id: params.id
  }), (0, import_node6.redirect)(`/admin/images/${restaurant == null ? void 0 : restaurant.id}/${imageSubmit.id}`);
};
function AdminSymbolDetailPage() {
  let { image } = (0, import_react7.useLoaderData)(), isSubmitting = (0, import_react7.useNavigation)().state === "submitting", isNewItem = !image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex min-h-full flex-col max-h-[100%] p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react7.Form, { method: "post", className: "w-full space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      FormInput,
      {
        name: "url",
        label: "\u1EA2nh",
        placeholder: "link \u1EA3nh",
        defaultValue: image == null ? void 0 : image.url
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.images.$restId.$id.tsx",
        lineNumber: 101,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, !1, {
      fileName: "app/routes/admin.images.$restId.$id.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this)
  ] }, (image == null ? void 0 : image.id) ?? "new", !0, {
    fileName: "app/routes/admin.images.$restId.$id.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.images.$restId.$id.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/routes/korea.$slug.$restaurant.tsx
var korea_slug_restaurant_exports = {};
__export(korea_slug_restaurant_exports, {
  action: () => action3,
  default: () => RestaurantKoreaPage2,
  loader: () => loader4,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_fa2 = require("react-icons/fa"), import_react9 = require("react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  let user = await getUser(request), slug = params.restaurant, restaurant;
  if (slug != null && slug.length)
    restaurant = await getRestaurantsById(slug);
  else
    throw new Response("", { status: 404 });
  if (!restaurant)
    return (0, import_node7.redirect)("/404");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), restaurants = await getRestaurantsList(), isFavorited, isRating, value_rating;
  return user && (isFavorited = await checkRestaurantIsFavorited({
    userId: user.id,
    restaurantId: restaurant.id
  }), isRating = await checkRestaurantIsRatings({
    userId: user.id,
    restaurantId: restaurant.id
  }), value_rating = await getValueRating(user.id, restaurant.id)), (0, import_node7.json)({
    user,
    language,
    restaurant,
    isFavorited,
    isRating,
    value_rating,
    restaurants
  });
}, action3 = async ({ request, params }) => {
  (0, import_tiny_invariant4.default)(params.restaurant, "id not found");
  let user = await getUser(request), slug = params.restaurant, restaurant = await getRestaurantsById(slug);
  if (!restaurant)
    return (0, import_node7.redirect)("/404");
  let formData = await request.formData(), rating = formData.get("rating"), favorite = formData.get("favorite");
  if (!user)
    return (0, import_node7.redirect)("/login");
  favorite === "on" ? await checkRestaurantIsFavorited({
    userId: user.id,
    restaurantId: restaurant.id
  }) || await addToFavorites({ userId: user.id, restaurantId: restaurant.id }) : await removeFromFavorites({
    userId: user.id,
    restaurantId: restaurant.id
  });
  let value_rating = await getValueRating(user.id, restaurant.id);
  return !value_rating && Number(rating) !== 0 ? (await addRatingValue(user.id, restaurant.id, Number(rating) | 0), (0, import_node7.json)({})) : value_rating && Number(rating) !== 0 ? (await updateRatingValue(user.id, restaurant.id, Number(rating) | 0), (0, import_node7.json)({})) : (0, import_node7.json)({});
}, meta2 = ({ data }) => [
  { title: `${data == null ? void 0 : data.restaurant[`name${data.language}`]}` },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function RestaurantKoreaPage2() {
  let { language, restaurant, isFavorited, value_rating, restaurants } = (0, import_react8.useLoaderData)(), submit = (0, import_react8.useSubmit)(), [data, setData] = (0, import_react9.useState)([]);
  (0, import_react9.useEffect)(() => {
    fetch(`http://127.0.0.1:8080/content-based/${restaurant.nameVie}`).then((response) => response.json()).then((data2) => setData(data2)).catch((error) => console.error(error));
  }, [restaurant.nameVie]), console.log("->>>>>>>>>>>>>>>>>>>>>>>>>", data);
  let predictRes = restaurants.filter(
    (item) => data == null ? void 0 : data.includes(item == null ? void 0 : item.nameVie)
  ), [rating, setRating] = (0, import_react9.useState)(value_rating || 0), [hover, setHover] = (0, import_react9.useState)();
  function handleChang(event) {
    submit(event.currentTarget, { replace: !0 });
  }
  let handleSubmit = (event) => {
    let dateTimeInput = document.getElementById(
      "dateTime"
    );
    dateTimeInput.value || (event.preventDefault(), dateTimeInput.focus(), alert(`${lang.timeRequired[`timeRequired${language}`]}`));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:w-[70%] lg:pl-6 lg:overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react8.Form, { method: "post", onChange: handleChang, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "input",
        {
          type: "checkbox",
          name: "favorite",
          defaultChecked: Boolean(isFavorited),
          className: "absolute right-4 top-4 z-20 w-5 h-5 opacity-0 cursor-pointer"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 177,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute right-4 top-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center", children: isFavorited ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(HeartIconUsed, {}, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 184,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(HeartIcon, {}, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 184,
        columnNumber: 46
      }, this) }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "h-[200px] md:h-[240px] lg:h-[320px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SliderImages, { images: restaurant.images }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "p-3 rounded-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "img",
            {
              src: "https://www.svgrepo.com/show/2732/restaurant.svg",
              alt: "Restaurant",
              className: "w-6 h-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 191,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-2 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "uppercase text-xs font-bold text-gray-600", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 197,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, !1, {
              fileName: "app/routes/korea.$slug.$restaurant.tsx",
              lineNumber: 200,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                name: "rating",
                type: "text",
                className: "invisible",
                value: rating
              },
              void 0,
              !1,
              {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 204,
                columnNumber: 17
              },
              this
            ),
            [...Array(5)].map((star, index) => {
              let ratingValue = index + 1;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                import_fa2.FaStar,
                {
                  className: `star ${ratingValue <= (hover || rating) ? "text-orange-500" : "text-gray-500"} hover:text-orange-500`,
                  size: 20,
                  onMouseEnter: () => setHover(ratingValue),
                  onMouseLeave: () => setHover(null),
                  onClick: (e) => {
                    setRating(ratingValue);
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/korea.$slug.$restaurant.tsx",
                  lineNumber: 217,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 216,
                columnNumber: 25
              }, this) }, index, !1, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 215,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this);
            })
          ] }, void 0, !0, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(MapPinIcon, {}, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 240,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 239,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "flex items-center text-sm mb-1 font-semibold text-[13px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(MoneyIcon, {}, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: `${restaurant.priceLow ? `\u20A9${restaurant.priceLow}` : ""} ${restaurant.priceHigh ? `- \u20A9${restaurant.priceHigh}` : ""}` }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ClockIcon, {}, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime} - ${lang.close[`close${language}`]}: ${restaurant.closingTime}` }, void 0, !1, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 254,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "py-4 px-2 bg-white rounded-xl md:inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "font-semibold text-sm text-gray-600 mb-1", children: lang.addSchedule[`addSchedule${language}`] }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_react8.Form,
        {
          method: "post",
          action: `/schedule?new=${restaurant.id}`,
          onSubmit: handleSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "input",
              {
                type: "datetime-local",
                id: "dateTime",
                name: "dateTime",
                className: "inline-flex border text-sm p-2 rounded-xl outline-none focus:border-[#1ec28b]"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 277,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "bg-[#1ec28b] rounded-xl ml-2 text-white text-xs uppercase font-bold py-2 px-4 hover:bg-[#0aae77]",
                children: lang.save[`save${language}`]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/korea.$slug.$restaurant.tsx",
                lineNumber: 283,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 276,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 271,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "pt-2 border-t", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "font-bold mb-1", children: lang.description[`description${language}`] }, void 0, !1, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-[15px] text-justify", children: restaurant[`description${language}`] }, void 0, !1, {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 294,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "a",
        {
          href: restaurant.direct || "",
          title: restaurant[`name${language}`] || "",
          rel: "noreferrer",
          target: "_blank",
          className: "block p-3 my-4 text-center rounded-2xl bg-[#1ec28b] text-white uppercase font-bold lg:w-[40%] lg:ml-auto",
          children: lang.direction[`direction${language}`]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/korea.$slug.$restaurant.tsx",
          lineNumber: 302,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 293,
      columnNumber: 7
    }, this),
    (predictRes == null ? void 0 : predictRes.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "text-2xl font-semibold", children: "Related restaurants" }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 315,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: predictRes == null ? void 0 : predictRes.map((restaurant2) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          RestaurantInfor,
          {
            link: createRestaurantSlug({
              countrySlug: (_b = (_a = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _a.country) == null ? void 0 : _b.slug,
              typeSlug: (_d = (_c = restaurant2 == null ? void 0 : restaurant2.countryType) == null ? void 0 : _c.type) == null ? void 0 : _d.slug,
              id: restaurant2.id
            }),
            name: restaurant2[`name${language}`],
            address: restaurant2[`address${language}`],
            open: restaurant2.openingTime,
            priceLow: restaurant2.priceLow || void 0,
            priceHigh: restaurant2.priceHigh || void 0,
            close: restaurant2.closingTime,
            rating: restaurant2.rating || 0,
            images: ((_e = restaurant2.images[0]) == null ? void 0 : _e.url) || void 0,
            language
          },
          restaurant2.id,
          !1,
          {
            fileName: "app/routes/korea.$slug.$restaurant.tsx",
            lineNumber: 318,
            columnNumber: 15
          },
          this
        );
      }) }, void 0, !1, {
        fileName: "app/routes/korea.$slug.$restaurant.tsx",
        lineNumber: 316,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/korea.$slug.$restaurant.tsx",
      lineNumber: 314,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/korea.$slug.$restaurant.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}

// app/routes/viet-nam.$slug._index.tsx
var viet_nam_slug_index_exports = {};
__export(viet_nam_slug_index_exports, {
  default: () => CategoryKoreaPage,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/models/type.server.ts
async function getTypeList() {
  return prisma.type.findMany();
}
async function getTypeBySlug(slug) {
  return prisma.type.findUnique({
    where: {
      slug
    }
  });
}
async function getTypeById(id) {
  return prisma.type.findUnique({
    where: {
      typeId: id
    }
  });
}
async function getTypeByCountry({
  countryId = "1"
}) {
  return prisma.type.findMany({
    where: { providers: { some: { countryId } } }
  });
}
async function getTypeWithRestaurantCount({
  countryId = "1"
}) {
  return (await prisma.type.findMany({
    where: { providers: { some: { countryId } } },
    include: {
      providers: {
        where: {
          countryId
        },
        include: {
          restaurants: !0
        }
      }
    }
  })).map((type) => ({
    ...type,
    restaurantCount: type.providers.reduce(
      (total, provider) => total + provider.restaurants.length,
      0
    )
  }));
}
async function deleteTypeBySlug(slug) {
  return prisma.type.deleteMany({
    where: {
      slug
    }
  });
}
async function createType(dataSubmit) {
  return prisma.type.create({
    data: {
      typeId: dataSubmit.typeId,
      slug: dataSubmit.slug,
      nameEng: dataSubmit.nameEng,
      nameKor: dataSubmit.nameKor,
      nameVie: dataSubmit.nameVie
    }
  });
}
async function updateType(dataSubmit) {
  return prisma.type.updateMany({
    where: {
      typeId: dataSubmit.typeId
    },
    data: {
      nameEng: dataSubmit.nameEng,
      nameKor: dataSubmit.nameKor,
      nameVie: dataSubmit.nameVie
    }
  });
}

// app/routes/viet-nam.$slug._index.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  let user = await getUser(request), slug = params.slug, category = (await getTypeByCountry({})).find((it) => it.slug === slug), restaurants;
  if (category)
    restaurants = await getRestaurantsByCountryIdAndSlug({
      slug
    });
  else
    return (0, import_node8.redirect)("/404");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node8.json)({ user, language, restaurants });
};
function CategoryKoreaPage() {
  let { language, restaurants } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "lg:pl-6 lg:w-[70%] md:overflow-y-auto md:max-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-4", children: restaurants.map((restaurant) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      RestaurantInfor,
      {
        url: restaurant.id,
        name: restaurant[`name${language}`],
        address: restaurant[`address${language}`],
        open: restaurant.openingTime,
        priceLow: restaurant.priceLow || void 0,
        priceHigh: restaurant.priceHigh || void 0,
        close: restaurant.closingTime,
        rating: restaurant.rating || 0,
        images: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0,
        language
      },
      restaurant.id,
      !1,
      {
        fileName: "app/routes/viet-nam.$slug._index.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/routes/viet-nam.$slug._index.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/viet-nam.$slug._index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/admin.category.$slug.tsx
var admin_category_slug_exports = {};
__export(admin_category_slug_exports, {
  action: () => action4,
  default: () => AdmintypeDetailPage,
  loader: () => loader6
});
var import_node9 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react"), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), loader6 = async ({ params, request }) => {
  if ((0, import_tiny_invariant5.default)(params.slug, "id not found"), params.slug === "new")
    return (0, import_node9.json)({ type: null });
  let type = await getTypeBySlug(params.slug);
  if (!type)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node9.json)({
    type
  });
}, action4 = async ({ request, params }) => {
  var _a, _b, _c;
  (0, import_tiny_invariant5.default)(params.slug, "id not found");
  let formData = await request.formData(), action11 = formData.get("_action"), typeId = formData.get("typeId"), slug = formData.get("slug"), nameEng = (_a = formData.get("nameEng")) == null ? void 0 : _a.toString(), nameKor = (_b = formData.get("nameKor")) == null ? void 0 : _b.toString(), nameVie = (_c = formData.get("nameVie")) == null ? void 0 : _c.toString(), defaultErrors = {
    typeId: null,
    slug: null,
    nameEng: null,
    nameKor: null,
    nameVie: null
  };
  if (typeof typeId != "string" || typeId.length === 0)
    return (0, import_node9.json)(
      { errors: { ...defaultErrors, typeId: "TypeId is required" } },
      { status: 400 }
    );
  if (typeof slug != "string" || slug.length === 0)
    return (0, import_node9.json)(
      { errors: { ...defaultErrors, slug: "Slug is required" } },
      { status: 400 }
    );
  if (typeof nameEng != "string" || nameEng.length === 0)
    return (0, import_node9.json)(
      { errors: { ...defaultErrors, nameEng: "Name Eng is required" } },
      { status: 400 }
    );
  if (typeof nameKor != "string" || nameKor.length === 0)
    return (0, import_node9.json)(
      { errors: { ...defaultErrors, nameKor: "Name Kor is required" } },
      { status: 400 }
    );
  if (typeof nameVie != "string" || nameVie.length === 0)
    return (0, import_node9.json)(
      { errors: { ...defaultErrors, nameVie: "Name Vie is required" } },
      { status: 400 }
    );
  if (action11 === "delete")
    return await deleteTypeBySlug(params.slug), (0, import_node9.redirect)("/admin/category");
  let dataSubmit = {
    typeId,
    slug,
    nameEng,
    nameKor,
    nameVie
  };
  if (params.slug === "new") {
    if (await getTypeBySlug(slug))
      return (0, import_node9.json)(
        {
          errors: {
            ...defaultErrors,
            slug: "A Type already exists with this slug"
          }
        },
        { status: 400 }
      );
    if (await getTypeById(typeId))
      return (0, import_node9.json)(
        {
          errors: {
            ...defaultErrors,
            typeId: "A Type ID already exists"
          }
        },
        { status: 400 }
      );
    await createType(dataSubmit);
  } else
    console.log(dataSubmit), await updateType({
      ...dataSubmit,
      typeId
    });
  return (0, import_node9.redirect)("/admin/category");
};
function AdmintypeDetailPage() {
  var _a, _b, _c, _d, _e;
  let { type } = (0, import_react11.useLoaderData)(), actionData = (0, import_react11.useActionData)(), isSubmitting = (0, import_react11.useNavigation)().state === "submitting", isNewItem = !type, idRef = (0, import_react12.useRef)(null), slugRef = (0, import_react12.useRef)(null), nameEngRef = (0, import_react12.useRef)(null);
  return (0, import_react12.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.typeId ? (_b2 = idRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.slug && ((_d2 = slugRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "min-h-full flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react11.Form,
    {
      method: "post",
      className: "w-full space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid gap-4 content-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              FormInput,
              {
                name: "typeId",
                ref: idRef,
                required: !0,
                label: "Type ID",
                placeholder: "Type ID",
                defaultValue: type == null ? void 0 : type.typeId,
                error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.typeId
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.category.$slug.tsx",
                lineNumber: 182,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-[1fr_60px] gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              FormInput,
              {
                name: "slug",
                ref: slugRef,
                required: !0,
                label: "Category Slug",
                placeholder: "Category Slug",
                defaultValue: type == null ? void 0 : type.slug,
                error: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.slug
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.category.$slug.tsx",
                lineNumber: 194,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/admin.category.$slug.tsx",
              lineNumber: 192,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.category.$slug.tsx",
            lineNumber: 180,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid gap-4 content-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              FormInput,
              {
                name: "nameEng",
                label: "Name English",
                required: !0,
                placeholder: "Type name English",
                ref: nameEngRef,
                defaultValue: (_c = type == null ? void 0 : type.nameEng) == null ? void 0 : _c.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.category.$slug.tsx",
                lineNumber: 209,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              FormInput,
              {
                name: "nameKor",
                label: "Name Korea",
                required: !0,
                placeholder: "Type name of Korea",
                ref: nameEngRef,
                defaultValue: (_d = type == null ? void 0 : type.nameKor) == null ? void 0 : _d.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.category.$slug.tsx",
                lineNumber: 218,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              FormInput,
              {
                name: "nameVie",
                label: "Name VietNam",
                required: !0,
                placeholder: "Type name of VietNam",
                ref: nameEngRef,
                defaultValue: (_e = type == null ? void 0 : type.nameVie) == null ? void 0 : _e.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.category.$slug.tsx",
                lineNumber: 227,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin.category.$slug.tsx",
            lineNumber: 207,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 178,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, !1, {
          fileName: "app/routes/admin.category.$slug.tsx",
          lineNumber: 238,
          columnNumber: 9
        }, this)
      ]
    },
    (type == null ? void 0 : type.slug) ?? "new",
    !0,
    {
      fileName: "app/routes/admin.category.$slug.tsx",
      lineNumber: 173,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/admin.category.$slug.tsx",
    lineNumber: 172,
    columnNumber: 5
  }, this);
}

// app/routes/admin.images.$restId.tsx
var admin_images_restId_exports = {};
__export(admin_images_restId_exports, {
  default: () => AdminRestaurantsListPage,
  loader: () => loader7,
  meta: () => meta3
});
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), loader7 = async ({ request, params }) => {
  await requireAdminUser(request), (0, import_tiny_invariant6.default)(params.restId, "id not found");
  let imagesList = await getListImagesByRestaurantId(params.restId);
  return (0, import_node10.json)({ imagesList });
}, meta3 = () => [{ title: "Sector Management" }];
function AdminRestaurantsListPage() {
  let { imagesList } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_react13.Link,
        {
          className: "flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline",
          to: "new",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PlusIcon, {}, void 0, !1, {
              fileName: "app/routes/admin.images.$restId.tsx",
              lineNumber: 37,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "ml-2", children: "Add New" }, void 0, !1, {
              fileName: "app/routes/admin.images.$restId.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.images.$restId.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react13.Form, { action: "/admin/restaurant", method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          id: "query",
          name: "query",
          type: "text",
          className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          placeholder: "Search..."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.images.$restId.tsx",
          lineNumber: 41,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      imagesList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, !1, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { children: imagesList.map(({ id }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        import_react13.NavLink,
        {
          to: id,
          className: ({ isActive }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`,
          children: [
            idx + 1,
            ". ",
            id
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.images.$restId.tsx",
          lineNumber: 56,
          columnNumber: 21
        },
        this
      ) }, id, !1, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.images.$restId.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.images.$restId.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.images.$restId.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.images.$restId.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/admin.restaurant.$id.tsx
var admin_restaurant_id_exports = {};
__export(admin_restaurant_id_exports, {
  action: () => action5,
  default: () => AdminSymbolDetailPage2,
  loader: () => loader8
});
var import_node11 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react"), import_tiny_invariant7 = __toESM(require("tiny-invariant"));

// app/models/provider.server.ts
async function countProviderById({
  countryId,
  typeId
}) {
  return prisma.provider.count({
    where: {
      typeId,
      countryId
    }
  });
}
async function createProvider({
  countryId,
  typeId
}) {
  return prisma.provider.create({
    data: {
      countryId,
      typeId
    }
  });
}

// app/routes/admin.restaurant.$id.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), loader8 = async ({ params, request }) => {
  (0, import_tiny_invariant7.default)(params.id, "id not found");
  let restaurant = await getRestaurantsById(params.id);
  if (params.id !== "new" && !restaurant)
    throw new Response("Not Found", { status: 404 });
  let typeList = await getTypeList();
  return params.id === "new" ? (0, import_node11.json)({ typeList, restaurant }) : (0, import_node11.json)({
    restaurant,
    typeList
  });
}, action5 = async ({ request, params }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  (0, import_tiny_invariant7.default)(params.id, "id not found");
  let formData = await request.formData(), action11 = formData.get("_action"), nameVie = formData.get("nameVie"), nameKor = formData.get("nameKor"), nameEng = formData.get("nameEng"), addressVie = formData.get("addressVie"), addressKor = formData.get("addressKor"), addressEng = formData.get("addressEng"), typeId = formData.get("typeId"), countryId = formData.get("countryId"), rating = ((_a = formData.get("rating")) == null ? void 0 : _a.toString()) ?? null, openingTime = ((_b = formData.get("openingTime")) == null ? void 0 : _b.toString()) ?? null, closingTime = ((_c = formData.get("closingTime")) == null ? void 0 : _c.toString()) ?? null, direct = ((_d = formData.get("direct")) == null ? void 0 : _d.toString()) ?? null, priceLow = ((_e = formData.get("priceLow")) == null ? void 0 : _e.toString()) ?? null, priceHigh = ((_f = formData.get("priceHigh")) == null ? void 0 : _f.toString()) ?? null, descriptionVie = ((_g = formData.get("descriptionVie")) == null ? void 0 : _g.toString()) ?? null, descriptionKor = ((_h = formData.get("descriptionKor")) == null ? void 0 : _h.toString()) ?? null, descriptionEng = ((_i = formData.get("descriptionEng")) == null ? void 0 : _i.toString()) ?? null, defaultErrors = {
    nameVie: null,
    nameKor: null,
    nameEng: null,
    addressVie: null,
    addressKor: null,
    addressEng: null,
    typeId: null,
    countryId: null
  };
  if (typeof nameVie != "string" || nameVie.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, nameVie: "Name is required" } },
      { status: 400 }
    );
  if (typeof nameKor != "string" || nameKor.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, nameKor: "Name is required" } },
      { status: 400 }
    );
  if (typeof nameEng != "string" || nameEng.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, nameEng: "Name is required" } },
      { status: 400 }
    );
  if (typeof addressVie != "string" || addressVie.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, addressVie: "address is required" } },
      { status: 400 }
    );
  if (typeof addressKor != "string" || addressKor.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, addressKor: "address is required" } },
      { status: 400 }
    );
  if (typeof addressEng != "string" || addressEng.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, addressEng: "Name is required" } },
      { status: 400 }
    );
  if (typeof typeId != "string" || typeId.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, type: "Symbol is required" } },
      { status: 400 }
    );
  if (typeof countryId != "string" || countryId.length === 0)
    return (0, import_node11.json)(
      { errors: { ...defaultErrors, country: "Sector is required" } },
      { status: 400 }
    );
  if (await countProviderById({ countryId, typeId }) === 0 && await createProvider({ countryId, typeId }), action11 === "delete")
    return await getRestaurantsById(params.id) && await deleteRestaurantById(params.id), (0, import_node11.redirect)("/admin/restaurant");
  let restaurantSubmit, dataSubmit = {
    nameKor,
    nameVie,
    nameEng,
    addressKor,
    addressVie,
    addressEng,
    typeId,
    countryId,
    descriptionVie,
    descriptionEng,
    descriptionKor,
    rating: Number(rating),
    openingTime,
    closingTime,
    direct,
    priceLow: Number(priceLow),
    priceHigh: Number(priceHigh)
  };
  return params.id === "new" ? restaurantSubmit = await createRestaurant(dataSubmit) : restaurantSubmit = await updateRestaurant({
    ...dataSubmit,
    id: params.id
  }), (0, import_node11.redirect)(`/admin/restaurant/${restaurantSubmit.id}`);
};
function AdminSymbolDetailPage2() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  let { typeList, restaurant } = (0, import_react14.useLoaderData)(), actionData = (0, import_react14.useActionData)(), isSubmitting = (0, import_react14.useNavigation)().state === "submitting", isNewItem = !restaurant, nameVieRef = (0, import_react15.useRef)(null), nameKorRef = (0, import_react15.useRef)(null), nameEngRef = (0, import_react15.useRef)(null), addressVieRef = (0, import_react15.useRef)(null), addressKorRef = (0, import_react15.useRef)(null), addressEngRef = (0, import_react15.useRef)(null), typeIdRef = (0, import_react15.useRef)(null), countryIdRef = (0, import_react15.useRef)(null);
  return (0, import_react15.useEffect)(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.nameVie ? (_b2 = nameVieRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.nameKor ? (_d2 = nameKorRef.current) == null || _d2.focus() : (_e2 = actionData == null ? void 0 : actionData.errors) != null && _e2.nameEng ? (_f2 = nameEngRef.current) == null || _f2.focus() : (_g2 = actionData == null ? void 0 : actionData.errors) != null && _g2.addressVie ? (_h2 = addressVieRef.current) == null || _h2.focus() : (_i2 = actionData == null ? void 0 : actionData.errors) != null && _i2.addressKor ? (_j2 = addressKorRef.current) == null || _j2.focus() : (_k2 = actionData == null ? void 0 : actionData.errors) != null && _k2.addressEng ? (_l2 = addressEngRef.current) == null || _l2.focus() : (_m2 = actionData == null ? void 0 : actionData.errors) != null && _m2.typeId ? (_n2 = typeIdRef.current) == null || _n2.focus() : (_o2 = actionData == null ? void 0 : actionData.errors) != null && _o2.countryId && ((_p2 = countryIdRef.current) == null || _p2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex min-h-full flex-col max-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_react14.Form,
    {
      method: "post",
      className: "w-full space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "nameVie",
                ref: nameVieRef,
                required: !0,
                label: "T\xEAn Vi\u1EC7t Nam",
                placeholder: "M\u1EF3 Qu\u1EA3ng B\xE0 Mua",
                defaultValue: restaurant == null ? void 0 : restaurant.nameVie,
                error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.nameVie
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 231,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "nameKor",
                ref: nameKorRef,
                required: !0,
                label: "T\xEAn H\xE0n Qu\u1ED1c",
                placeholder: "Quang Ba Mua Shop \uB204\uB4E4",
                defaultValue: restaurant == null ? void 0 : restaurant.nameKor,
                error: (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.nameKor
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 240,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "nameEng",
                ref: nameEngRef,
                required: !0,
                label: "T\xEAn Ti\u1EBFng Anh",
                placeholder: "Quang Ba Mua Shop Noodles",
                defaultValue: restaurant == null ? void 0 : restaurant.nameEng,
                error: (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.nameEng
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 249,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                  "label",
                  {
                    htmlFor: "sectorId",
                    className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
                    children: "Qu\u1ED1c Gia"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin.restaurant.$id.tsx",
                    lineNumber: 261,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                    "select",
                    {
                      ref: countryIdRef,
                      defaultValue: restaurant == null ? void 0 : restaurant.countryId,
                      id: "countryId",
                      required: !0,
                      name: "countryId",
                      "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.countryId ? !0 : void 0,
                      "aria-describedby": "sectorId-error",
                      className: "w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", label: "" }, void 0, !1, {
                          fileName: "app/routes/admin.restaurant.$id.tsx",
                          lineNumber: 280,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "1", label: "Vi\u1EC7t Nam" }, void 0, !1, {
                          fileName: "app/routes/admin.restaurant.$id.tsx",
                          lineNumber: 281,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "2", label: "H\xE0n Qu\u1ED1c" }, void 0, !1, {
                          fileName: "app/routes/admin.restaurant.$id.tsx",
                          lineNumber: 282,
                          columnNumber: 21
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/admin.restaurant.$id.tsx",
                      lineNumber: 268,
                      columnNumber: 19
                    },
                    this
                  ),
                  ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.countryId) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pt-1 text-red-700", id: "countryId-error", children: actionData.errors.countryId }, void 0, !1, {
                    fileName: "app/routes/admin.restaurant.$id.tsx",
                    lineNumber: 285,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 267,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 260,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                  "label",
                  {
                    htmlFor: "provider",
                    className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
                    children: "Lo\u1EA1i Nh\xE0 H\xE0ng"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/admin.restaurant.$id.tsx",
                    lineNumber: 294,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                    "select",
                    {
                      ref: typeIdRef,
                      defaultValue: restaurant == null ? void 0 : restaurant.typeId,
                      id: "typeId",
                      required: !0,
                      name: "typeId",
                      "aria-invalid": (_f = actionData == null ? void 0 : actionData.errors) != null && _f.typeId ? !0 : void 0,
                      "aria-describedby": "provider-error",
                      className: "w-full rounded border border-gray-300 px-2 pt-2 pb-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", label: "" }, void 0, !1, {
                          fileName: "app/routes/admin.restaurant.$id.tsx",
                          lineNumber: 311,
                          columnNumber: 21
                        }, this),
                        typeList.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                          "option",
                          {
                            value: type.typeId,
                            label: type.nameVie
                          },
                          type.typeId,
                          !1,
                          {
                            fileName: "app/routes/admin.restaurant.$id.tsx",
                            lineNumber: 313,
                            columnNumber: 23
                          },
                          this
                        ))
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/admin.restaurant.$id.tsx",
                      lineNumber: 301,
                      columnNumber: 19
                    },
                    this
                  ),
                  ((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.typeId) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pt-1 text-red-700", id: "typeId-error", children: actionData.errors.typeId }, void 0, !1, {
                    fileName: "app/routes/admin.restaurant.$id.tsx",
                    lineNumber: 321,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/admin.restaurant.$id.tsx",
                  lineNumber: 300,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 293,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 258,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 229,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "addressVie",
                ref: addressVieRef,
                required: !0,
                label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng Vi\u1EC7t",
                placeholder: "19 Tr\u1EA7n B\xECnh Tr\u1ECDng",
                defaultValue: (_h = restaurant == null ? void 0 : restaurant.addressVie) == null ? void 0 : _h.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 333,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "addressKor",
                ref: addressKorRef,
                required: !0,
                label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng H\xE0n",
                placeholder: "19 Tran Binh Trong",
                defaultValue: (_i = restaurant == null ? void 0 : restaurant.addressKor) == null ? void 0 : _i.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 341,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "addressEng",
                ref: addressEngRef,
                required: !0,
                label: "\u0110\u1ECBa ch\u1EC9 ti\u1EBFng Anh",
                placeholder: "19 Tran Binh Trong",
                defaultValue: (_j = restaurant == null ? void 0 : restaurant.addressEng) == null ? void 0 : _j.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 349,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 331,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "rating",
                label: "rating",
                placeholder: "0",
                defaultValue: (_k = restaurant == null ? void 0 : restaurant.rating) == null ? void 0 : _k.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 360,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "openingTime",
                label: "M\u1EDF c\u1EEDa",
                placeholder: "0-24",
                defaultValue: (_l = restaurant == null ? void 0 : restaurant.openingTime) == null ? void 0 : _l.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 366,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "closingTime",
                label: "\u0110\xF3ng c\u1EEDa",
                placeholder: "0-24",
                defaultValue: (_m = restaurant == null ? void 0 : restaurant.closingTime) == null ? void 0 : _m.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 372,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 358,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "direct",
                label: "\u0110\u01B0\u1EDDng \u0111i",
                placeholder: "",
                defaultValue: (_n = restaurant == null ? void 0 : restaurant.direct) == null ? void 0 : _n.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 381,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "priceLow",
                label: "Gi\xE1 th\u1EA5p nh\u1EA5t",
                placeholder: "24",
                defaultValue: (_o = restaurant == null ? void 0 : restaurant.priceLow) == null ? void 0 : _o.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 387,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              FormInput,
              {
                name: "priceHigh",
                label: "Gi\xE1 Cao nh\u1EA5t",
                placeholder: "48",
                defaultValue: (_p = restaurant == null ? void 0 : restaurant.priceHigh) == null ? void 0 : _p.toString()
              },
              void 0,
              !1,
              {
                fileName: "app/routes/admin.restaurant.$id.tsx",
                lineNumber: 393,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 379,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 227,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "label",
            {
              htmlFor: "description",
              className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
              children: "M\xF4 t\u1EA3 Ti\u1EBFng Vi\u1EC7t"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 404,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "textarea",
            {
              defaultValue: (_q = restaurant == null ? void 0 : restaurant.descriptionVie) == null ? void 0 : _q.toString(),
              id: "descriptionVie",
              rows: 5,
              placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng Vi\u1EC7t",
              name: "descriptionVie",
              className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 411,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 410,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 403,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "label",
            {
              htmlFor: "description",
              className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
              children: "M\xF4 t\u1EA3 ti\u1EBFng H\xE0n"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 422,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "textarea",
            {
              defaultValue: (_r = restaurant == null ? void 0 : restaurant.descriptionKor) == null ? void 0 : _r.toString(),
              id: "descriptionKor",
              rows: 5,
              placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng H\xE0n",
              name: "descriptionKor",
              className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 429,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 428,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 421,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "label",
            {
              htmlFor: "description",
              className: "block text-sm font-medium text-gray-700 dark:text-neutral-300",
              children: "M\xF4 t\u1EA3 ti\u1EBFng Anh"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 440,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "textarea",
            {
              defaultValue: (_s = restaurant == null ? void 0 : restaurant.descriptionEng) == null ? void 0 : _s.toString(),
              id: "descriptionEng",
              rows: 5,
              placeholder: "Gi\u1EDBi thi\u1EC7u ti\u1EBFng Anh",
              name: "descriptionEng",
              className: "w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin.restaurant.$id.tsx",
              lineNumber: 447,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/admin.restaurant.$id.tsx",
            lineNumber: 446,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 439,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ActionButtons, { isNewItem, isSubmitting }, void 0, !1, {
          fileName: "app/routes/admin.restaurant.$id.tsx",
          lineNumber: 458,
          columnNumber: 9
        }, this)
      ]
    },
    (restaurant == null ? void 0 : restaurant.id) ?? "new",
    !0,
    {
      fileName: "app/routes/admin.restaurant.$id.tsx",
      lineNumber: 222,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/admin.restaurant.$id.tsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}

// app/routes/korea.$slug._index.tsx
var korea_slug_index_exports = {};
__export(korea_slug_index_exports, {
  default: () => CategoryKoreaPage2,
  loader: () => loader9
});
var import_node12 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader9 = async ({ request, params }) => {
  let user = await getUser(request), slug = params.slug, category = (await getTypeByCountry({ countryId: "2" })).find((it) => it.slug === slug), restaurants;
  if (category)
    restaurants = await getRestaurantsByCountryIdAndSlug({
      countryId: "2",
      slug
    });
  else
    return (0, import_node12.redirect)("/404");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node12.json)({ user, language, restaurants });
};
function CategoryKoreaPage2() {
  let { language, restaurants } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "lg:pl-6 lg:w-[70%] md:overflow-y-auto md:max-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-6 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-4", children: restaurants.map((restaurant) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      RestaurantInfor,
      {
        url: restaurant.id,
        name: restaurant[`name${language}`],
        address: restaurant[`address${language}`],
        open: restaurant.openingTime,
        close: restaurant.closingTime,
        rating: restaurant.rating || 0,
        priceLow: restaurant.priceLow || void 0,
        priceHigh: restaurant.priceHigh || void 0,
        images: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0,
        language
      },
      restaurant.id,
      !1,
      {
        fileName: "app/routes/korea.$slug._index.tsx",
        lineNumber: 39,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/routes/korea.$slug._index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/korea.$slug._index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/admin.restaurant.tsx
var admin_restaurant_exports = {};
__export(admin_restaurant_exports, {
  default: () => AdminRestaurantsListPage2,
  loader: () => loader10,
  meta: () => meta4
});
var import_node13 = require("@remix-run/node"), import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  await requireAdminUser(request);
  let restaurantList = await getRestaurantsList();
  return (0, import_node13.json)({ restaurantList });
}, meta4 = () => [{ title: "Sector Management" }];
function AdminRestaurantsListPage2() {
  let { restaurantList } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6 max-h-[calc(100%-40px)] overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_react17.Link,
        {
          className: "flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline",
          to: "new",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(PlusIcon, {}, void 0, !1, {
              fileName: "app/routes/admin.restaurant.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "ml-2", children: "Add New" }, void 0, !1, {
              fileName: "app/routes/admin.restaurant.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.restaurant.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react17.Form, { action: "/admin/restaurant", method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          id: "query",
          name: "query",
          type: "text",
          className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          placeholder: "Search..."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.restaurant.tsx",
          lineNumber: 39,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.restaurant.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      restaurantList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, !1, {
        fileName: "app/routes/admin.restaurant.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("ul", { children: restaurantList.map(({ id, nameVie }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_react17.NavLink,
        {
          to: id,
          className: ({ isActive }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`,
          children: [
            idx + 1,
            ". ",
            nameVie
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.restaurant.tsx",
          lineNumber: 54,
          columnNumber: 21
        },
        this
      ) }, id, !1, {
        fileName: "app/routes/admin.restaurant.tsx",
        lineNumber: 53,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.restaurant.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.restaurant.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.restaurant.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin.restaurant.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.restaurant.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.restaurant.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.restaurant.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/admin.category.tsx
var admin_category_exports = {};
__export(admin_category_exports, {
  default: () => AdminCategoryListPage,
  loader: () => loader11,
  meta: () => meta5
});
var import_node14 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/components/AdminListLayout.tsx
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), AdminListLayout = ({
  dataList,
  searchFormUrl,
  routeAddNew = "new"
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_react18.Link,
      {
        className: "flex block mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 hover:text-white hover:no-underline",
        to: routeAddNew,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(PlusIcon, {}, void 0, !1, {
            fileName: "app/components/AdminListLayout.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "ml-2", children: "Add New" }, void 0, !1, {
            fileName: "app/components/AdminListLayout.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminListLayout.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react18.Form, { action: searchFormUrl, method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      "input",
      {
        id: "query",
        name: "query",
        type: "text",
        className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
        placeholder: "Search..."
      },
      void 0,
      !1,
      {
        fileName: "app/components/AdminListLayout.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    dataList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, !1, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: dataList.map(({ slug }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_react18.NavLink,
      {
        to: slug,
        className: ({ isActive }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`,
        children: [
          idx + 1,
          ". ",
          slug
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminListLayout.tsx",
        lineNumber: 47,
        columnNumber: 19
      },
      this
    ) }, slug, !1, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/AdminListLayout.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/AdminListLayout.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/AdminListLayout.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/AdminListLayout.tsx",
  lineNumber: 21,
  columnNumber: 3
}, this);

// app/routes/admin.category.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  await requireAdminUser(request);
  let categoryList = await getTypeList();
  return (0, import_node14.json)({ categoryList });
}, meta5 = () => [{ title: "Sector Management" }];
function AdminCategoryListPage() {
  let { categoryList } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AdminListLayout, { dataList: categoryList, searchFormUrl: "/admin/category" }, void 0, !1, {
    fileName: "app/routes/admin.category.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/routes/admin.images.tsx
var admin_images_exports = {};
__export(admin_images_exports, {
  default: () => AdminRestaurantsListPage3,
  loader: () => loader12,
  meta: () => meta6
});
var import_node15 = require("@remix-run/node"), import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  await requireAdminUser(request);
  let restaurantList = await getRestaurantsList();
  return (0, import_node15.json)({ restaurantList });
}, meta6 = () => [{ title: "Sector Management" }];
function AdminRestaurantsListPage3() {
  let { restaurantList } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "grid grid-cols-[200px_1fr] gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react20.Form, { action: "/admin/restaurant", method: "get", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "input",
        {
          id: "query",
          name: "query",
          type: "text",
          className: "w-full border border-gray-200 hover:border-gray-300 rounded-lg mb-4 px-4 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          placeholder: "Search..."
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.images.tsx",
          lineNumber: 31,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.images.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      restaurantList.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "text-slate-400 text-center", children: "No item yet" }, void 0, !1, {
        fileName: "app/routes/admin.images.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("ul", { children: restaurantList.map(({ id, nameVie }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        import_react20.NavLink,
        {
          to: id,
          className: ({ isActive }) => `block py-2 hover:text-sky-400 ${isActive ? "text-sky-400" : "dark:text-white"}`,
          children: [
            idx + 1,
            ". ",
            nameVie
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/admin.images.tsx",
          lineNumber: 46,
          columnNumber: 21
        },
        this
      ) }, id, !1, {
        fileName: "app/routes/admin.images.tsx",
        lineNumber: 45,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/admin.images.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.images.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.images.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin.images.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.images.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.images.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.images.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/favorite.tsx
var favorite_exports = {};
__export(favorite_exports, {
  default: () => FavoritePage,
  loader: () => loader13,
  meta: () => meta7
});
var import_node16 = require("@remix-run/node"), import_react24 = require("@remix-run/react");

// app/components/Container.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), Container = ({
  children,
  customClass = ""
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: ["w-full min-h-screen mx-auto p-2 md:py-5 md:px-4 md:h-screen", customClass].join(" "), children }, void 0, !1, {
  fileName: "app/components/Container.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);

// app/components/ItemRestaurant.tsx
var import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), ItemRestaurant = ({
  url,
  image,
  name,
  address,
  rating,
  customClass
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
  import_react21.Link,
  {
    to: url,
    className: `flex p-2 rounded-2xl hover:bg-slate-100 md:p-3 ${customClass}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-16 h-16 md:w-18 md:h-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "img",
        {
          src: image,
          alt: "",
          className: "w-16 h-16 md:w-18 md:h-18 rounded-xl"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ItemRestaurant.tsx",
          lineNumber: 27,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ItemRestaurant.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col justify-between py-1 px-2 md:py-1 md:px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h3", { className: "font-bold", children: name }, void 0, !1, {
          fileName: "app/components/ItemRestaurant.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "flex mr-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "mr-1 text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(MapPinIcon, {}, void 0, !1, {
            fileName: "app/components/ItemRestaurant.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/ItemRestaurant.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this),
          address
        ] }, void 0, !0, {
          fileName: "app/components/ItemRestaurant.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/ItemRestaurant.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ItemRestaurant.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ItemRestaurant.tsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
);

// app/components/Sidebar.tsx
var import_react22 = require("@remix-run/react"), import_react23 = require("react");

// app/icons/BarIcon.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), BarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-9 h-9",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/BarIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/BarIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/DashboardIcon.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), DashboardIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/DashboardIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/DashboardIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/FavoriteIcon.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), FavoriteIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/FavoriteIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/FavoriteIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/HomeIcon.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), HomeIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/HomeIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/HomeIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/LogoIcon.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), LogoIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/LogoIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/LogoIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/LogoutIcon.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), LogoutIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/LogoutIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/LogoutIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/ScheduleIcon.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), ScheduleIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/ScheduleIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/ScheduleIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/SettingIcon.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), SettingIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/SettingIcon.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        },
        void 0,
        !1,
        {
          fileName: "app/icons/SettingIcon.tsx",
          lineNumber: 15,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/icons/SettingIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/components/Sidebar.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Sidebar({ user = null, langType }) {
  let userRole;
  user && (user.role > 0 ? userRole = !0 : userRole = !1);
  let [isBar, setIsBar] = (0, import_react23.useState)(!1), handleIsBar = () => {
    setIsBar((prev) => !prev);
  }, SIDEBAR_LIST = [
    {
      name: lang.dashboard[`dashboard${langType}`],
      url: "/admin",
      Icon: DashboardIcon,
      isShow: userRole
    },
    {
      name: lang.home[`home${langType}`],
      url: "/",
      Icon: HomeIcon,
      isShow: !0
    },
    {
      name: lang.favorite[`favorite${langType}`],
      url: "/favorite",
      Icon: FavoriteIcon,
      isShow: !0
    },
    {
      name: lang.schedule[`schedule${langType}`],
      url: "/schedule",
      Icon: ScheduleIcon,
      isShow: !0
    },
    {
      name: lang.settings[`settings${langType}`],
      url: "/settings",
      Icon: SettingIcon,
      isShow: !0
    }
  ].filter((it) => it.isShow);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      "div",
      {
        className: `fixed z-10 top-[-1px] bottom-0 rounded-[10px] px-4 py-10 bg-white w-[240px] py-5 flex flex-col justify-between transition-all duration-500 ${isBar ? "left-1" : "left-[-250px]"} md:static md:w-[200px] md:px-0`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              import_react22.Link,
              {
                to: "/",
                title: "dutago",
                className: "inline-flex justify-center",
                onClick: handleIsBar,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Dutago" }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 78,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(LogoIcon, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 80,
                    columnNumber: 15
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 79,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 72,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-col mt-20", onClick: handleIsBar, children: SIDEBAR_LIST.map(({ name, url, Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              import_react22.NavLink,
              {
                to: url,
                className: ({ isActive }) => `flex p-4 rounded-xl font-medium hover:text-white hover:bg-[#1ec28b] ${isActive ? "bg-[#1ec28b] text-white shadow-lg shadow-[#a7e7d1]" : "text-slate-500"}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Icon, {}, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "ml-2", children: name }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                  }, this)
                ]
              },
              url,
              !0,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 85,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          user ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
            "form",
            {
              action: "/logout",
              method: "post",
              className: "flex justify-center text-slate-500",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
                "button",
                {
                  type: "submit",
                  color: "error",
                  className: "p-2 flex hover:text-[#1ec28b]",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "mr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(LogoutIcon, {}, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 114,
                      columnNumber: 17
                    }, this) }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 113,
                      columnNumber: 15
                    }, this),
                    lang.logout[`logout${langType}`]
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 108,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 103,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex justify-center font-normal text-slate-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              import_react22.Link,
              {
                to: "/login",
                className: "hover:text-[#1ec28b]",
                onClick: handleIsBar,
                children: lang.login[`login${langType}`]
              },
              void 0,
              !1,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 121,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { className: "mx-1", children: "/" }, void 0, !1, {
              fileName: "app/components/Sidebar.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              import_react22.Link,
              {
                to: "/signup",
                className: "hover:text-[#1ec28b]",
                onClick: handleIsBar,
                children: lang.signup[`signup${langType}`]
              },
              void 0,
              !1,
              {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 129,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 120,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      "button",
      {
        className: "absolute right-4 top-4 text-[#1ec28b] md:hidden",
        onClick: handleIsBar,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(BarIcon, {}, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 139,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/routes/favorite.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  await requireUser(request);
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), favorites;
  return user && (favorites = await getRestaurantsFavoriteById(user.id)), (0, import_node16.json)({ user, language, favorites });
}, meta7 = ({ data }) => [{ title: `${lang.favorite[`favorite${data == null ? void 0 : data.language}`]}` }];
function FavoritePage() {
  let { user, language, favorites } = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "w-full p-6 rounded-2xl bg-white mt-10 overflow-y-auto md:mt-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-xl font-bold pb-4 border-b", children: lang.favorite[`favorite${language}`] }, void 0, !1, {
        fileName: "app/routes/favorite.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-4 pt-4", children: favorites && favorites.map(
        ({ restaurant, countrySlug, typeSlug, ...favorite }) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          ItemRestaurant,
          {
            url: createRestaurantSlug({
              countrySlug,
              typeSlug,
              id: restaurant.id
            }),
            image: restaurant.images[0].url || "",
            name: restaurant[`name${language}`],
            address: restaurant[`address${language}`],
            rating: restaurant.rating || 0,
            customClass: "lg:border"
          },
          restaurant.id,
          !1,
          {
            fileName: "app/routes/favorite.tsx",
            lineNumber: 48,
            columnNumber: 21
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/routes/favorite.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/favorite.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/favorite.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/schedule.tsx
var schedule_exports = {};
__export(schedule_exports, {
  action: () => action6,
  default: () => SchedulePage,
  loader: () => loader14,
  meta: () => meta8
});
var import_node17 = require("@remix-run/node"), import_react26 = require("@remix-run/react");

// app/components/ScheduleRestaurant.tsx
var import_react25 = require("@remix-run/react");

// app/icons/RemoveIcon.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), RemoveIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 h-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/RemoveIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/RemoveIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/components/ScheduleRestaurant.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), ScheduleRestaurant = ({
  id,
  url,
  restaurant,
  day,
  hour,
  language
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "lg:flex lg:justify-end relative", children: [
  day && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex bg-[#cdd0d6] p-2 justify-center items-center rounded-xl my-2 lg:py-4 lg:px-8 lg:mr-2 pointer-events-none", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "mr-2 text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ScheduleIcon, {}, void 0, !1, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "font-semibold", children: day }, void 0, !1, {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ScheduleRestaurant.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/ScheduleRestaurant.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    import_react25.Link,
    {
      to: url,
      title: restaurant[`name${language}`],
      className: "block p-3 rounded-2xl bg-white mb-1 lg:min-w-[400px]",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "inline-flex px-3 rounded-[5px] items-center justify-center text-[#1ec28b] bg-green-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ClockIcon, {}, void 0, !1, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "text-sm", children: hour }, void 0, !1, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
            "img",
            {
              src: "https://www.svgrepo.com/show/2732/restaurant.svg",
              alt: "Restaurant",
              className: "w-6 h-6"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 52,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "ml-2 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "uppercase text-xs font-bold text-gray-600", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "flex items-center text-sm mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(MapPinIcon, {}, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "flex items-center text-xs font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ClockIcon, {}, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime}H - ${lang.close[`close${language}`]}: ${restaurant.closingTime}H` }, void 0, !1, {
              fileName: "app/components/ScheduleRestaurant.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ScheduleRestaurant.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ScheduleRestaurant.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 40,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    import_react25.Form,
    {
      method: "post",
      action: `/schedule?remove=${id}`,
      className: "px-4 absolute right-4 bottom-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("button", { type: "submit", className: "text-red-500 hover:text-red-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(RemoveIcon, {}, void 0, !1, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/ScheduleRestaurant.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ScheduleRestaurant.tsx",
      lineNumber: 89,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ScheduleRestaurant.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this);

// app/helpers/date.ts
var getDateFormatVN = (date) => new Date(date).toLocaleDateString("vi-vn"), getHourFormatVN = (date) => new Date(date).toLocaleTimeString("vi-vn");

// app/models/schedule.server.ts
async function createSchedule({
  userId,
  restaurantId,
  dateTime,
  hour
}) {
  return prisma.schedule.create({
    data: {
      userId,
      restaurantId,
      dateTime,
      hour
    }
  });
}
async function getSchedule(userId) {
  return prisma.schedule.findMany({
    where: {
      userId,
      dateTime: {
        gte: /* @__PURE__ */ new Date()
      }
    },
    include: {
      restaurant: {
        include: {
          countryType: {
            include: {
              country: !0,
              type: !0
            }
          }
        }
      }
      // Include the related Restaurant information
    },
    orderBy: {
      dateTime: "asc"
      // Sort schedules by dateTime in ascending order
    }
  });
}
async function deleteScheduleById(scheduleId) {
  return prisma.schedule.delete({
    where: {
      id: scheduleId
    }
  });
}

// app/routes/schedule.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => {
  await requireUser(request);
  let user = await getUser(request);
  if (!user)
    return (0, import_node17.redirect)("/login");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), schedules = await getSchedule(user.id);
  return (0, import_node17.json)({ user, language, schedules });
}, action6 = async ({ request, params }) => {
  await requireUser(request);
  let query = new URL(request.url).searchParams, newRestaurantId = query.get("new"), removeRestaurantId = query.get("remove"), dateTime = (await request.formData()).get("dateTime"), user = await getUser(request);
  if (!user)
    return (0, import_node17.redirect)("/login");
  if (removeRestaurantId)
    return await deleteScheduleById(removeRestaurantId), (0, import_node17.redirect)("/schedule");
  if (typeof dateTime != "string" || dateTime.length === 0)
    return (0, import_node17.json)({});
  let dataSubmit = {
    userId: user.id,
    restaurantId: String(newRestaurantId),
    dateTime: new Date(dateTime)
  };
  return await createSchedule(dataSubmit), (0, import_node17.json)({});
}, meta8 = ({ data }) => [{ title: `${lang.schedule[`schedule${data == null ? void 0 : data.language}`]}` }];
function SchedulePage() {
  let { user, language, schedules } = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "h-full overflow-y-auto rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mt-8 md:mt-0", children: schedules.map((schedule, index) => index === 0 || getDateFormatVN(schedule.dateTime) !== getDateFormatVN(schedules[index - 1].dateTime) ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      ScheduleRestaurant,
      {
        id: schedule.id,
        url: createRestaurantSlug({
          countrySlug: schedule.restaurant.countryType.country.slug,
          typeSlug: schedule.restaurant.countryType.type.slug,
          id: schedule.restaurant.id
        }),
        restaurant: schedule.restaurant,
        hour: getHourFormatVN(schedule.dateTime).slice(0, 5),
        day: getDateFormatVN(schedule.dateTime),
        language
      },
      schedule.id,
      !1,
      {
        fileName: "app/routes/schedule.tsx",
        lineNumber: 92,
        columnNumber: 19
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      ScheduleRestaurant,
      {
        id: schedule.id,
        url: createRestaurantSlug({
          countrySlug: schedule.restaurant.countryType.country.slug,
          typeSlug: schedule.restaurant.countryType.type.slug,
          id: schedule.restaurant.id
        }),
        restaurant: schedule.restaurant,
        hour: getHourFormatVN(schedule.dateTime).slice(0, 5),
        language
      },
      schedule.id,
      !1,
      {
        fileName: "app/routes/schedule.tsx",
        lineNumber: 108,
        columnNumber: 19
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/schedule.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/schedule.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action7,
  default: () => SettingsPage,
  loader: () => loader15,
  meta: () => meta9
});
var import_node18 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), loader15 = async ({ request }) => {
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node18.json)({ user, language });
};
async function action7({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await languageCookie.parse(cookieHeader) || {}, language = (await request.formData()).get("language") || "Eng";
  return cookie.language = language, (0, import_node18.redirect)("/settings", {
    headers: {
      "Set-Cookie": await languageCookie.serialize(cookie)
    }
  });
}
var meta9 = ({ data }) => [{ title: `${lang.settings[`settings${data == null ? void 0 : data.language}`]}` }];
function SettingsPage() {
  let { user, language } = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "mt-12 justify-between md:mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h3", { className: "font-semibold mb-1", children: lang.language[`language${language}`] }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react27.Form, { method: "post", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          "label",
          {
            className: "block w-[50%] text-sm font-medium text-gray-900 dark:text-white lg:w-[20%]",
            defaultValue: language,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
              "select",
              {
                name: "language",
                defaultValue: language,
                className: "bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "Eng", children: "English" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 59,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "Kor", children: "\uD55C\uAD6D\uC778" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 60,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("option", { value: "Vie", children: "Ti\u1EBFng Vi\u1EC7t" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 61,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 54,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/settings.tsx",
            lineNumber: 50,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "ml-6 px-4 py-2 rounded-xl text-white font-semibold uppercase text-[14px] bg-[#1ec28b]",
            children: lang.save[`save${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/settings.tsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/viet-nam.tsx
var viet_nam_exports = {};
__export(viet_nam_exports, {
  default: () => KoreaIndexPage,
  loader: () => loader16,
  meta: () => meta10
});
var import_node19 = require("@remix-run/node"), import_react29 = require("@remix-run/react");

// app/components/Category.tsx
var import_react28 = require("@remix-run/react");

// app/icons/CategoryIcon.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), Category1 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M10 31L9 25.5V20.5C9.16667 19.3333 9.6 17 10 17C10.4 17 13 16 15 15.5L19 15C20 15 20.5 15 25.5 14C25.8922 13.9216 28.5 13.5 29.5 13.5L28 11.5L30 13.5L32 15.5L32.5 17C31.8333 17.1667 30.3 17.5 29.5 17.5H25.5L23.5 18.5V20C23.5 20.4 23.1667 23.8333 23 25.5L22.5 30.5L20.5 31H11H10Z", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M47 17.5L49 15L55.5 10.5L63 7.5C65.3333 6.83334 70.6 5.8 73 7C76 8.5 76.5 9 79 13.5C78.8333 17 78.2 24.3 77 25.5L74.5 30L73 31H65.5H54.5H51V27.5C51 27 50.5 23.5 50.5 23V20L50 18L49 17.5H47Z", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M57.4365 13.9525C56.7408 14.6482 56.3577 15.5731 56.3577 16.5569C56.3577 17.5406 56.7408 18.4655 57.4363 19.1612L65.9502 27.6751C66.6459 28.3707 67.5707 28.7537 68.5544 28.7537C69.5382 28.7537 70.463 28.3706 71.1585 27.6751C71.8542 26.9794 72.2373 26.0545 72.2373 25.0708C72.2373 24.087 71.8542 23.1621 71.1587 22.4664L62.6448 13.9524C61.2089 12.5165 58.8721 12.5169 57.4365 13.9525ZM69.5014 24.1239C69.7543 24.3767 69.8936 24.7131 69.8936 25.0708C69.8936 25.4284 69.7543 25.7647 69.5013 26.0177C69.2485 26.2706 68.912 26.4099 68.5544 26.4099C68.1967 26.4099 67.8604 26.2706 67.6075 26.0177L59.0935 17.5036C58.8407 17.2508 58.7013 16.9144 58.7013 16.5567C58.7013 16.199 58.8407 15.8628 59.0937 15.6098C59.3547 15.3487 59.6975 15.2182 60.0406 15.2182C60.3834 15.2182 60.7266 15.3487 60.9875 15.6098L69.5014 24.1239Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M79.7151 35.5274C79.2251 33.1065 77.4773 31.1647 75.2416 30.3405C80.7858 21.0909 81.5545 12.429 77.1191 7.9934C75.1734 6.04786 72.3554 5.05173 68.9639 5.11423C68.3168 5.12611 67.8018 5.66035 67.8137 6.3074C67.8254 6.94727 68.3478 7.45791 68.985 7.45791C68.9923 7.45791 68.9997 7.45791 69.007 7.45776C71.7817 7.40635 73.956 8.14481 75.4618 9.65065C77.7905 11.9793 77.8533 15.5174 77.4961 18.0755C76.9908 21.6931 75.3541 25.7728 72.7581 29.9089C65.999 29.78 59.2107 29.6909 52.4114 29.6422C52.3672 25.6508 52.1203 21.6108 51.6714 17.6142C51.61 17.0686 51.1781 16.6386 50.6321 16.5798C50.2826 16.5423 49.9326 16.5089 49.5829 16.4742C54.5301 12.2907 59.8192 9.34392 64.6878 8.08778C65.3146 7.92606 65.6914 7.28697 65.5297 6.66023C65.3681 6.03349 64.7286 5.65644 64.1022 5.81832C62.2365 6.29975 60.3176 7.00977 58.3834 7.92496C58.7601 6.28693 58.9396 4.32327 58.2205 2.85806C57.7874 1.97505 57.0702 1.373 56.1467 1.1169C54.7784 0.737821 52.6528 0.936891 50.2913 4.03935C50.1771 4.18951 50.0666 4.34077 49.9604 4.49124C49.9476 4.44671 49.9346 4.40233 49.9212 4.3578C49.4571 2.81368 48.2439 0.223114 45.3298 0.223114C44.3177 0.223114 43.4353 0.626567 42.7775 1.38972C41.9188 2.38616 41.5432 3.93388 41.4084 5.47643C40.3828 4.12763 39.1405 3.04353 37.7967 3.04353C36.9237 3.04353 36.1275 3.48824 35.5552 4.29577C34.0473 6.42303 34.0254 11.0332 35.4261 15.8634C35.0753 15.8678 34.7247 15.8757 34.374 15.8831C32.078 13.2039 29.3026 11.3601 28.0886 10.6223V8.0534C28.6388 7.95699 29.0571 7.47807 29.0571 6.90024V3.59152C29.0571 1.80833 27.6064 0.35765 25.8232 0.35765H18.5358C16.7526 0.35765 15.3019 1.80833 15.3019 3.59152V6.90024C15.3019 7.47807 15.7205 7.95699 16.2707 8.0534L16.2698 10.6218C14.6875 11.5828 10.4608 14.4152 8.09524 18.528C7.61272 19.3634 7.38928 20.3262 7.44975 21.3145C7.56319 23.1157 7.84492 26.6174 8.45729 29.8873C7.97743 29.8961 7.49709 29.9041 7.01755 29.9133C3.76242 29.9747 0.930757 32.3359 0.284796 35.5269C-0.0949059 37.3965 -0.0949059 39.2925 0.284639 41.1612C0.75872 43.5066 2.42019 45.4423 4.61464 46.2969C4.7434 48.6824 4.96388 52.075 5.32483 55.9308C4.35745 58.6707 3.40991 61.4116 2.49082 64.1469C1.7 66.5031 2.75879 69.118 4.95512 70.2302C5.79078 70.652 6.66941 70.9793 7.56866 71.2068C8.40916 73.5902 9.90922 75.6464 11.9418 77.1832C14.1862 78.8801 16.8607 79.777 19.6761 79.777H60.3241C63.1395 79.777 65.8139 78.8801 68.0584 77.1832C70.0911 75.6462 71.5912 73.5899 72.4317 71.2062C73.3352 70.9767 74.2136 70.649 75.0455 70.2285C77.2423 69.1183 78.3014 66.5031 77.5092 64.1453C76.5893 61.4084 75.6421 58.6676 74.6755 55.9297C75.0363 52.0741 75.2568 48.6816 75.3856 46.2962C77.5825 45.4396 79.2419 43.505 79.7152 41.1623C80.0948 39.2924 80.0948 37.3964 79.7151 35.5274ZM49.4433 18.8135C49.8184 22.4121 50.0268 26.0403 50.0677 29.6284C41.3752 29.578 32.6685 29.5922 23.9847 29.6725C24.0246 26.0705 24.2332 22.4274 24.6096 18.8133C32.8537 17.9908 41.1988 17.9908 49.4433 18.8135ZM37.4673 5.65113C37.5526 5.53081 37.679 5.38737 37.7967 5.38737C38.6404 5.38737 40.4102 7.79464 41.6688 10.6538C41.876 11.1604 42.4098 11.4582 42.9536 11.364C43.5152 11.2665 43.9252 10.7793 43.9252 10.2093C43.9252 10.138 43.9184 10.0666 43.9053 9.99629C43.3195 6.0363 43.9706 3.59543 44.5532 2.91962C44.7663 2.67227 44.9986 2.56679 45.3299 2.56679C48.0316 2.56679 48.122 7.94231 48.1222 7.99512C48.1222 8.54905 48.5102 9.02688 49.0521 9.14126C49.5949 9.25579 50.1424 8.97469 50.3663 8.46795C51.2042 6.57272 53.5641 2.83384 55.5201 3.37573C55.7986 3.45292 55.9769 3.60699 56.1159 3.89075C56.6145 4.90673 56.3477 7.15384 55.4747 9.44986C52.3753 11.2316 49.2841 13.5108 46.3528 16.1964C43.5323 15.9896 40.7036 15.8768 37.8742 15.8581C36.2413 10.7388 36.6238 6.84117 37.4673 5.65113ZM25.7448 10.1227H18.6139L18.6147 8.07215H25.745V10.1227H25.7448ZM18.5358 2.70133H25.8232C26.314 2.70133 26.7133 3.10056 26.7133 3.59136V5.72785H17.6458V3.59152C17.6458 3.10072 18.045 2.70133 18.5358 2.70133ZM10.768 29.493C10.1738 26.3374 9.89953 22.9221 9.78905 21.1694C9.75702 20.644 9.87312 20.136 10.1259 19.6984C12.3612 15.812 16.6813 13.0992 17.7548 12.4664H26.6036C27.2885 12.8695 29.2985 14.121 31.2444 15.986C28.6302 16.1045 26.0204 16.3007 23.4213 16.58C22.8752 16.6386 22.4431 17.0686 22.3819 17.6144C21.9311 21.6295 21.684 25.6877 21.6414 29.6962C18.0431 29.7345 14.4491 29.783 10.8627 29.8437C10.8242 29.7294 10.7908 29.6128 10.768 29.493ZM6.98848 46.7744C6.99833 46.7747 7.00801 46.7756 7.01786 46.7758L7.05536 46.7764C7.58085 46.7862 8.10634 46.7948 8.63198 46.8042C8.16228 48.0668 7.69585 49.3307 7.2349 50.5965C7.13161 49.1688 7.05098 47.8808 6.98848 46.7744ZM60.3239 77.433H19.676C15.5375 77.433 11.7901 74.949 10.1088 71.2432C11.6483 70.8593 12.9834 69.7512 13.5962 68.1883C14.2716 66.4668 14.8852 64.8808 15.4722 63.34C15.7027 62.7351 15.3993 62.0581 14.7944 61.8276C14.1895 61.5973 13.5125 61.9006 13.282 62.5054C12.6976 64.0392 12.0866 65.618 11.4141 67.3326C10.9285 68.5713 9.60467 69.2808 8.33181 68.9818C7.5321 68.7953 6.75129 68.5114 6.01251 68.1384C4.84825 67.5489 4.28948 66.1534 4.71262 64.893C7.71726 55.9517 10.9947 46.9472 14.4538 38.1298C14.9402 36.8909 16.2649 36.1809 17.5343 36.4782C18.3419 36.6677 19.1228 36.9521 19.8568 37.324C21.0213 37.9122 21.5796 39.3071 21.1556 40.5688C19.1892 46.4197 17.096 52.3277 14.9338 58.1289C14.7077 58.7353 15.0161 59.4101 15.6226 59.6363C16.2291 59.8625 16.9039 59.5539 17.13 58.9475C18.6034 54.994 20.0438 50.9912 21.4354 46.9905C27.5975 47.0574 33.7981 47.0919 39.9999 47.0919C46.2022 47.0919 52.4034 47.0575 58.566 46.9905C61.04 54.1034 63.6657 61.2104 66.4035 68.1872C67.0165 69.7501 68.3517 70.8582 69.8914 71.2423C68.2104 74.9485 64.4625 77.433 60.3239 77.433ZM73.9882 68.1366C73.2513 68.5089 72.4701 68.7933 71.6664 68.9816C70.3965 69.2793 69.0717 68.5697 68.5855 67.3309C65.1335 58.5337 61.8561 49.5292 58.8443 40.5674C58.4204 39.3061 58.9788 37.9111 60.1434 37.3226C60.88 36.9503 61.6613 36.6659 62.4651 36.4776C62.6599 36.432 62.856 36.4099 63.0501 36.4099C64.1219 36.4099 65.1344 37.0795 65.546 38.1283C68.998 46.9255 72.2753 55.93 75.2871 64.8919C75.711 66.1532 75.1526 67.5481 73.9882 68.1366ZM71.3688 46.8042C71.8935 46.7948 72.4184 46.7862 72.9431 46.7764L72.985 46.7756C72.9939 46.7755 73.0028 46.7745 73.0117 46.7744C72.9491 47.8803 72.8684 49.1679 72.7653 50.595C72.3043 49.3293 71.8381 48.066 71.3688 46.8042ZM77.4178 40.6968C77.0634 42.4503 75.7121 43.8621 73.968 44.2949C73.6392 44.3787 73.2917 44.4249 72.9383 44.4323L72.8994 44.433C72.0984 44.448 71.2976 44.4619 70.4966 44.4755C69.5872 42.0628 68.6645 39.6594 67.7278 37.2721C66.8195 34.9566 64.3262 33.634 61.9304 34.1956C60.9455 34.4264 59.9884 34.7747 59.086 35.231C56.8892 36.3412 55.8301 38.9564 56.6224 41.3142C56.9964 42.4272 57.3746 43.5408 57.7566 44.6546C45.9637 44.7771 34.035 44.7771 22.242 44.6546C22.6242 43.5405 23.0036 42.4269 23.3769 41.3157C24.1699 38.9572 23.1106 36.3418 20.9145 35.2325C20.0157 34.7772 19.0586 34.4286 18.0692 34.1963C15.6733 33.6351 13.1809 34.958 12.2716 37.2736C11.3346 39.6619 10.4122 42.0648 9.50358 44.4757C8.70198 44.4621 7.90023 44.448 7.09864 44.4332L7.06411 44.4326C6.70769 44.4251 6.36049 44.3788 6.02485 44.2933C4.2876 43.8622 2.93599 42.4505 2.58144 40.6959C2.26471 39.1357 2.26471 37.5536 2.5816 35.9927C3.01162 33.8689 4.89575 32.2977 7.06192 32.2568C28.9179 31.8373 51.0815 31.8373 72.9378 32.2568C75.1037 32.2977 76.9878 33.8689 77.418 35.9935C77.735 37.5534 77.735 39.1355 77.4178 40.6968Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M24.5096 51.1036H24.4305C21.7466 51.11 19.5808 53.2284 19.4998 55.9263C19.4047 59.1038 19.4047 62.3261 19.4998 65.5035C19.5808 68.2013 21.7465 70.3197 24.4314 70.3262H24.5096C27.1934 70.3197 29.3593 68.2014 29.4402 65.5035C29.5354 62.3261 29.5354 59.1038 29.4402 55.9263C29.3591 53.2282 27.1934 51.11 24.5096 51.1036ZM27.0973 65.4332C27.0553 66.8355 25.8918 67.9789 24.5049 67.9822H24.4361C23.0481 67.9789 21.8846 66.8353 21.8426 65.4332C21.7487 62.3023 21.7487 59.1274 21.8426 55.9965C21.8846 54.5942 23.0481 53.4508 24.4369 53.4475H24.503H24.5038C25.8918 53.4508 27.0553 54.5942 27.0973 55.9965C27.1912 59.1274 27.1912 62.3023 27.0973 65.4332Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M40.0393 51.1036H39.9603C37.2764 51.11 35.1106 53.2284 35.0296 55.9263C34.9345 59.1038 34.9345 62.3261 35.0296 65.5035C35.1106 68.2013 37.2763 70.3197 39.9612 70.3262H40.0393C42.7233 70.3197 44.889 68.2013 44.97 65.5035C45.0651 62.3261 45.0651 59.1038 44.97 55.9263C44.889 53.2284 42.7233 51.11 40.0393 51.1036ZM42.6271 65.4332C42.5851 66.8355 41.4217 67.9789 40.0348 67.9822H39.9661C38.578 67.9789 37.4146 66.8353 37.3725 65.4332C37.2786 62.3023 37.2786 59.1274 37.3725 55.9965C37.4146 54.5942 38.578 53.4508 39.9668 53.4475H40.0329H40.0337C41.4217 53.4508 42.5851 54.5942 42.6271 55.9965C42.721 59.1274 42.721 62.3023 42.6271 65.4332Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M55.5692 51.1036H55.4903C52.8063 51.11 50.6406 53.2284 50.5597 55.9263C50.4645 59.1038 50.4645 62.3261 50.5597 65.5035C50.6406 68.2013 52.8063 70.3198 55.4912 70.3262H55.5694C58.2534 70.3197 60.4191 68.2013 60.5 65.5035C60.5952 62.3261 60.5952 59.1038 60.5 55.9263C60.4191 53.2284 58.2534 51.11 55.5692 51.1036ZM58.1571 65.4332C58.1151 66.8355 56.9518 67.9789 55.5647 67.9822H55.4961C54.1081 67.9789 52.9447 66.8353 52.9027 65.4332C52.8086 62.3023 52.8086 59.1274 52.9027 55.9965C52.9447 54.5942 54.1081 53.4508 55.4969 53.4475H55.563H55.5639C56.9519 53.4508 58.1152 54.5942 58.1573 55.9965C58.251 59.1274 58.251 62.3023 58.1571 65.4332Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 2,
  columnNumber: 5
}, this), Category2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("g", { clipPath: "url(#clip0)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M64.5 35.5H34.5V37.5L35 38.5L37.5 41L39.5 42L40.5 43.5L40 45.5L36.5 47L34.5 50.5L34 61L35.5 72.5L36.5 76L38.5 78C39 78.1667 40.2 78.5 41 78.5C42 78.5 46.5 79 47.5 79H53H56.5L55.5 77C55.1667 76.1667 54.5 74.2 54.5 73C54.5 71.8 54.1667 68.5 54 67V59.5C54 58.7 55 52.8333 55.5 50V48.5C55.5 48 57 48 57.5 47.5C58 47 59.5 47 60 47C60.5 47 62 46.5 62.5 46.5C63 46.5 62 46 61.5 45.5C61 45 61.5 45 61.5 44.5C61.5 44 61.5 43 61 42.5C60.6 42.1 61.8333 41.3333 62.5 41C63 40.8333 64 40.4 64 40C64 39.6 65 39.1667 65.5 39L66.5 37.5V36L64.5 35.5Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M7.55737 61.5928C7.55737 64.0975 9.59503 66.1352 12.0996 66.1352C14.6042 66.1352 16.6419 64.0975 16.6419 61.5928C16.6419 59.0881 14.6042 57.0505 12.0996 57.0505C9.59503 57.0505 7.55737 59.0881 7.55737 61.5928ZM14.2983 61.5928C14.2983 62.8052 13.3121 63.7914 12.0997 63.7914C10.8874 63.7914 9.90128 62.8052 9.90128 61.5928C9.90128 60.3805 10.8875 59.3942 12.0997 59.3942C13.3119 59.3942 14.2983 60.3806 14.2983 61.5928Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M17.8742 55.3313C19.8461 55.3313 21.4504 53.727 21.4504 51.7552C21.4504 49.7833 19.8461 48.1791 17.8742 48.1791C15.9023 48.1791 14.2981 49.7833 14.2981 51.7552C14.2981 53.727 15.9023 55.3313 17.8742 55.3313ZM17.8742 50.5227C18.5539 50.5227 19.1067 51.0755 19.1067 51.755C19.1067 52.4345 18.5539 52.9874 17.8742 52.9874C17.1947 52.9874 16.6418 52.4345 16.6418 51.755C16.6418 51.0755 17.1948 50.5227 17.8742 50.5227Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M30.3449 69.9974C30.3449 68.0255 28.7405 66.4213 26.7686 66.4213C24.7968 66.4213 23.1924 68.0255 23.1924 69.9974C23.1924 71.9692 24.7968 73.5735 26.7686 73.5735C28.7405 73.5735 30.3449 71.9692 30.3449 69.9974ZM25.5363 69.9974C25.5363 69.3178 26.0891 68.765 26.7688 68.765C27.4485 68.765 28.0013 69.3178 28.0013 69.9974C28.0013 70.6769 27.4485 71.2297 26.7688 71.2297C26.0891 71.2297 25.5363 70.6769 25.5363 69.9974Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M77.4983 50.2262C77.1608 47.7714 75.0402 45.9203 72.5657 45.9203H71.7355L72.5354 43.8403C72.7677 43.2363 72.4663 42.5581 71.8621 42.3259C71.2579 42.0934 70.5799 42.3952 70.3479 42.9991L69.2246 45.9203H64.3479C64.1827 45.8411 64.0155 45.7667 63.8452 45.7031C62.6269 45.2491 62.0093 44.5417 62.0093 43.6012C62.0093 42.7248 63.491 42.0139 64.1291 41.7484C66.0224 40.9584 67.3794 39.2875 67.7591 37.2778C68.5457 33.1047 68.9029 28.6397 69.046 26.3481C69.1188 25.1581 68.8494 23.9939 68.2671 22.9814C65.2077 17.662 59.6658 14.04 57.8124 12.9313V9.18375H57.8735C58.5208 9.18375 59.0454 8.65906 59.0454 8.01188V3.79797C59.0454 1.70375 57.3415 0 55.2472 0H45.9663C43.8722 0 42.1683 1.70375 42.1683 3.79797V8.01188C42.1683 8.65906 42.6929 9.18375 43.3402 9.18375H43.4016V12.9308C42.2054 13.6463 39.4726 15.4098 36.8626 17.9995V17.1773C38.1974 16.4552 39.1062 15.0423 39.1062 13.4211C39.1062 11.0678 37.1916 9.15344 34.8383 9.15344H16.3219C13.9687 9.15344 12.0543 11.068 12.0543 13.4211C12.0543 15.0427 12.9635 16.4558 14.2988 17.1778V20.7633C12.6947 21.6991 8.33709 24.4806 4.49834 29.092C3.80865 29.9228 3.36912 30.9309 3.22725 32.008C3.03646 33.4573 2.75053 35.8236 2.47209 38.8648C2.41303 39.5094 2.88771 40.0797 3.53225 40.1387C3.5685 40.142 3.60459 40.1438 3.64037 40.1438C4.23928 40.1438 4.75037 39.6869 4.806 39.0786C5.081 36.0755 5.36271 33.7422 5.55084 32.3141C5.61209 31.8494 5.7674 31.4073 6.00365 31.0122H32.5605C32.7672 32.9616 33.056 35.1581 33.4546 37.277C33.8324 39.2867 35.1896 40.9583 37.0858 41.7487C37.7224 42.0136 39.203 42.7242 39.203 43.6011C39.203 44.542 38.586 45.2492 37.3682 45.7033C35.1815 46.52 33.6397 48.5347 33.4404 50.8356C32.9791 56.1433 32.6368 66.4137 35.5277 75.5647C35.7712 76.3358 36.1508 77.0327 36.6346 77.6342C36.4096 77.648 36.1841 77.6564 35.9577 77.6564H15.2016C9.536 77.6564 4.77287 73.2384 4.35787 67.5986C3.82193 60.3138 3.84771 52.2808 4.43475 43.7227C4.47896 43.0769 3.99146 42.5177 3.34584 42.4733C2.70068 42.4286 2.14068 42.9164 2.09646 43.5622C1.50193 52.2306 1.47631 60.3755 2.02053 67.7705C2.26584 71.1061 3.75318 74.1966 6.2085 76.473C8.66162 78.7473 11.8555 80 15.2016 80H35.9579C37.0902 80 38.2112 79.8562 39.2969 79.5738C40.0155 79.8495 40.7937 79.9992 41.6016 79.9992L72.5657 80C75.0402 80 77.1608 78.1489 77.4983 75.6939C78.6599 67.2444 78.6599 58.6759 77.4983 50.2262ZM75.9165 67.3887C74.983 67.9598 73.921 68.2602 72.814 68.2602C69.5297 68.2602 66.8579 65.5889 66.8579 62.3056C66.8579 59.0214 69.5299 56.3494 72.814 56.3494C73.8908 56.3494 74.9263 56.6336 75.8394 57.1742C76.0555 60.5755 76.0819 63.9856 75.9165 67.3887ZM66.7068 26.2033C66.5949 27.9941 66.3491 31.1444 65.864 34.4075H35.3507C34.8663 31.1473 34.6188 27.9956 34.5057 26.2047C34.461 25.4734 34.6241 24.7634 34.9783 24.1494C35.1213 23.9008 35.2712 23.6562 35.4263 23.4153H65.7871C65.9424 23.6562 66.0924 23.9009 66.2354 24.1495C66.5885 24.7633 66.7513 25.4739 66.7068 26.2033ZM16.6426 17.6889H34.5188V20.2778H16.6426V17.6889ZM44.5121 3.79797C44.5121 2.99609 45.1644 2.34375 45.9663 2.34375H55.2472C56.0491 2.34375 56.7016 2.99609 56.7016 3.79797V6.84H44.5121V3.79797ZM55.4687 9.18375V12.4367H45.7454V9.18375H55.4687ZM44.8824 14.7805H56.3313C57.3207 15.3584 61.0391 17.6506 64.0146 21.0717H37.1988C40.1743 17.65 43.8941 15.3577 44.8824 14.7805ZM16.3219 11.4972H34.8383C35.8993 11.4972 36.7624 12.3603 36.7624 13.4211C36.7624 14.4816 35.9001 15.3442 34.8397 15.345H16.3204C15.2601 15.3442 14.3979 14.4814 14.3979 13.4211C14.3979 12.3603 15.261 11.4972 16.3219 11.4972ZM8.03646 28.6684C11.4183 25.2014 14.848 23.145 15.7721 22.6219H33.1605C33.0888 22.7406 33.0169 22.8591 32.9477 22.9795C32.3638 23.9914 32.0937 25.1561 32.1666 26.3502C32.2062 26.9769 32.2621 27.7672 32.338 28.6684H8.03646ZM72.5657 77.6562H59.6124V77.6555H58.7907C57.4879 77.6477 56.3736 76.6702 56.1955 75.3748C56.011 74.0316 55.8558 72.6797 55.7343 71.3567C55.6749 70.7123 55.1046 70.237 54.4601 70.297C53.8155 70.3562 53.3411 70.9267 53.4004 71.5713C53.5252 72.9289 53.6844 74.3158 53.8736 75.6939C53.9721 76.4095 54.2229 77.0733 54.589 77.6553H41.6016C39.8337 77.6553 38.291 76.5314 37.7629 74.8586C34.9941 66.0942 35.3293 56.1725 35.7754 51.038C35.8971 49.633 36.8443 48.4008 38.1876 47.8989C40.3224 47.103 41.5468 45.5364 41.5468 43.6009C41.5468 42.4445 40.9291 40.8089 37.9869 39.585C36.8227 39.0997 35.9894 38.075 35.758 36.8438C35.7522 36.813 35.7466 36.7819 35.741 36.7511H65.473C65.4674 36.7816 65.4618 36.8123 65.456 36.8428C65.2232 38.0747 64.3897 39.0998 63.2276 39.5847C60.2832 40.8095 59.6652 42.4448 59.6652 43.6011C59.6652 44.4583 59.9066 45.2427 60.3599 45.9203H58.806C56.3315 45.9203 54.2108 47.7714 53.8733 50.2261C53.1169 55.7188 52.8513 61.3153 53.0836 66.86C53.1108 67.5067 53.6633 68.0081 54.3035 67.9817C54.9502 67.9547 55.4526 67.4084 55.4254 66.7619C55.199 61.3564 55.4579 55.9005 56.1952 50.5456C56.3743 49.245 57.4966 48.2641 58.8062 48.2641H72.5657C73.8752 48.2641 74.9976 49.245 75.1766 50.5455C75.3572 51.8591 75.5057 53.1759 75.6287 54.4945C74.7347 54.1723 73.7863 54.0056 72.814 54.0056C68.2374 54.0056 64.5141 57.7289 64.5141 62.3056C64.5141 66.8814 68.2374 70.6039 72.814 70.6039C73.829 70.6039 74.8169 70.4228 75.7447 70.0723C75.6061 71.8434 75.419 73.6117 75.1766 75.3745C74.9976 76.6753 73.8752 77.6562 72.5657 77.6562Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("clipPath", { id: "clip0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("rect", { width: "80", height: "80", fill: "white" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this), Category3 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("rect", { x: "35", y: "54", width: "30", height: "24", rx: "6", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M6 7.5L7 10L10 9L16 8.5L25.5 8L35.5 8.5L52.5 10L54 8.5L55 6C55.1667 5.33333 55.5 3.9 55.5 3.5C55.5 3.1 54.1667 3 53.5 3L52 3.5L50.5 4H47.5C47 3.5 45.9 2.5 45.5 2.5C45.1 2.5 44.3333 1.83333 44 1.5H41.5L40 3L38 4H36L33.5 2.5L31 1L28.5 1.5L27 3L24.5 4L22 3.5C21.5 3.33333 20.4 3 20 3C19.6 3 19.1667 2 19 1.5H17.5L15.5 2C15.1667 2.33333 14.4 3 14 3C13.5 3 12.5 3.5 12.5 4C12.5 4.5 11 4 10.5 4C10 4 9.5 4 9 3.5C8.6 3.1 7.83333 3 7.5 3H5.5L5 5L6 7.5Z", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M30.138 51.3666C35.4399 51.3666 40.4371 49.8171 44.2099 47.0033C48.0854 44.1127 50.2197 40.2373 50.2197 36.091C50.2197 31.9447 48.0854 28.0693 44.2099 25.1788C40.4371 22.365 35.4399 20.8154 30.138 20.8154C24.8362 20.8154 19.8389 22.365 16.0662 25.1788C12.1908 28.0693 10.0564 31.9447 10.0564 36.091C10.0564 40.2373 12.1907 44.1127 16.0662 47.0033C19.8389 49.8171 24.8362 51.3666 30.138 51.3666ZM12.4002 36.091C12.4002 28.9604 20.3574 23.1592 30.138 23.1592C39.9187 23.1592 47.8759 28.9604 47.8759 36.091C47.8759 43.2216 39.9187 49.0228 30.138 49.0228C20.3574 49.0228 12.4002 43.2216 12.4002 36.091Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M74.1882 68.7062C75.1642 67.9488 75.6953 67.0141 75.6953 65.9922C75.6953 64.9705 75.1643 64.0358 74.1882 63.2784C75.0425 62.6861 75.6223 62.0009 75.92 61.2293C76.1795 60.5567 76.345 59.4732 75.6592 58.1308C75.1246 57.085 74.2781 56.4064 73.2107 56.1681C71.5008 55.7866 69.2367 56.5566 66.4681 58.4568C65.1604 54.8953 61.8294 52.3456 57.8376 52.1648C57.0002 52.1268 56.1607 52.0971 55.3202 52.0712C56.1277 38.1217 55.8716 23.9894 54.5558 10.0343C54.9889 9.33659 55.8177 7.79187 56.3379 5.48933C56.6512 4.10336 56.0613 2.74005 54.8357 2.01613C53.6286 1.30346 52.1734 1.44253 51.1286 2.37067C50.604 2.83662 50.1084 3.12537 49.2593 3.12537C48.1441 3.12537 47.6461 2.63708 46.8924 1.89801C46.03 1.05221 44.9569 0 42.8845 0C40.8123 0 39.7393 1.05221 38.8771 1.89769C38.1233 2.63677 37.6253 3.12506 36.5105 3.12506C35.3954 3.12506 34.8976 2.63677 34.1439 1.89769C33.2815 1.05221 32.2083 0 30.1361 0C28.0639 0 26.9909 1.05221 26.1289 1.89769C25.3751 2.63677 24.8771 3.12506 23.7622 3.12506C22.6474 3.12506 22.1496 2.63677 21.3956 1.89769C20.5336 1.05221 19.4606 0 17.3884 0C15.3163 0 14.2435 1.05221 13.3814 1.89769C12.6276 2.63677 12.1298 3.12506 11.0153 3.12506C10.1665 3.12506 9.67087 2.83631 9.14649 2.37052C8.10209 1.44253 6.64738 1.30331 5.44001 2.01566C4.2142 2.73927 3.62451 4.10242 3.93764 5.48839C4.45796 7.79187 5.28719 9.3369 5.72033 10.0344C5.51767 12.1831 5.33579 14.3743 5.18157 16.5608C5.13594 17.2064 5.62236 17.7668 6.26799 17.8122C6.9166 17.8572 7.47396 17.3713 7.51958 16.7256C7.66318 14.6903 7.82974 12.6492 8.01615 10.6443C22.6999 8.87627 37.5766 8.87627 52.2611 10.6443C53.5366 24.3814 53.7747 38.2873 52.9759 52.0146C49.2715 51.9495 45.5533 51.9976 41.8706 52.1645C37.8788 52.3454 34.5478 54.895 33.2401 58.4565C30.4716 56.5563 28.2072 55.7861 26.4974 56.1678C25.4301 56.4061 24.5835 57.0847 24.049 58.1307C23.3632 59.4729 23.5286 60.5563 23.788 61.229C24.0072 61.7973 24.3807 62.3181 24.9027 62.79C19.2951 62.6315 13.6274 62.2129 8.01615 61.5367C6.77785 48.2017 6.51331 34.6976 7.2302 21.3845C7.26504 20.7382 6.76925 20.186 6.12299 20.1513C5.47282 20.1157 4.92469 20.6123 4.88969 21.2585C4.15717 34.861 4.44218 48.6594 5.73314 62.279C5.30344 62.9667 4.46296 64.5191 3.93811 66.8435C3.62435 68.2299 4.21405 69.5937 5.44032 70.3178C6.64722 71.0306 8.10256 70.8909 9.14649 69.9632C9.67165 69.4973 10.1676 69.2085 11.0156 69.2085C12.1308 69.2085 12.6289 69.6968 13.3828 70.4361C14.2452 71.2816 15.3183 72.3336 17.3906 72.3336C19.4631 72.3336 20.5362 71.2814 21.3986 70.4361C22.1524 69.6968 22.6507 69.2085 23.7657 69.2085C24.1437 69.2085 24.4512 69.266 24.7198 69.3684C24.2929 69.7936 23.9802 70.2561 23.7876 70.7554C23.5282 71.4281 23.3627 72.5116 24.0485 73.8539C24.583 74.8997 25.4296 75.5784 26.497 75.8166C26.7811 75.8801 27.0803 75.9116 27.3948 75.9116C28.9728 75.9116 30.9311 75.1108 33.2391 73.5269C34.5465 77.089 37.8778 79.6391 41.8701 79.8198C44.5191 79.9398 47.1863 79.9998 49.854 79.9998C52.5211 79.9998 55.1888 79.9398 57.8373 79.8198C61.8295 79.6389 65.1607 77.0889 66.4681 73.5267C68.7761 75.1108 70.7344 75.9115 72.3124 75.9115C72.6268 75.9115 72.9263 75.8798 73.2102 75.8165C74.2776 75.5782 75.1242 74.8996 75.6587 73.8536C76.3445 72.5114 76.179 71.428 75.9195 70.7553C75.6223 69.9836 75.0425 69.2984 74.1882 68.7062ZM7.45552 8.35282C7.09504 7.68468 6.57909 6.54466 6.22378 4.97197C6.09487 4.40118 6.50347 4.10961 6.6316 4.03399C6.78644 3.94258 7.1902 3.76773 7.59005 4.12289C8.29553 4.74947 9.32243 5.46886 11.0153 5.46886C13.0873 5.46886 14.1602 4.41665 15.0224 3.57116C15.776 2.83209 16.274 2.3438 17.3885 2.3438C18.5032 2.3438 19.0011 2.83209 19.755 3.57116C20.6169 4.41665 21.69 5.46886 23.7622 5.46886C25.8345 5.46886 26.9076 4.41665 27.7697 3.57116C28.5234 2.83209 29.0214 2.3438 30.1361 2.3438C31.251 2.3438 31.749 2.83209 32.5027 3.57116C33.3651 4.41665 34.4382 5.46886 36.5105 5.46886C38.5827 5.46886 39.6557 4.41665 40.5179 3.57116C41.2716 2.83209 41.7696 2.3438 42.8845 2.3438C43.9997 2.3438 44.4976 2.83209 45.2514 3.57116C46.1139 4.41665 47.1871 5.46886 49.2595 5.46886C50.9523 5.46886 51.9794 4.74962 52.6851 4.12289C53.0845 3.76789 53.4891 3.94242 53.6441 4.03414C53.7724 4.10992 54.1811 4.40149 54.0519 4.97244C53.6966 6.5456 53.1803 7.68578 52.8208 8.35266C37.7647 6.517 22.51 6.517 7.45552 8.35282ZM56.4354 77.5298C54.8575 77.5893 53.2747 77.6292 51.6898 77.6457C52.3905 72.505 53.6908 67.3152 55.5646 62.1986C55.7871 61.5907 55.4749 60.9178 54.8671 60.6951C54.2591 60.4726 53.5864 60.7849 53.3636 61.3926C51.3928 66.7746 50.0354 72.2395 49.3231 77.6531C47.7477 77.6482 46.1735 77.622 44.603 77.5748C46.1913 66.0239 50.4279 57.1438 51.8911 54.3403C53.3656 54.3575 54.8383 54.395 56.3066 54.4493C55.9679 55.1414 55.5688 55.9905 55.1363 56.9786C54.8768 57.5714 55.1468 58.2625 55.7397 58.5221C55.8927 58.5891 56.0521 58.6208 56.2091 58.6208C56.6605 58.6208 57.0907 58.3585 57.2832 57.9186C57.9007 56.5084 58.4446 55.3962 58.8326 54.6389C60.2206 54.9114 61.4625 55.57 62.4442 56.4995C60.5826 60.6673 57.6695 68.3049 56.4354 77.5298ZM19.7581 68.7621C19.0042 69.5012 18.5059 69.9896 17.3909 69.9896C16.2758 69.9896 15.7777 69.5014 15.0239 68.7623C14.1614 67.9168 13.0883 66.8646 11.0159 66.8646C9.32462 66.8646 8.29741 67.5835 7.59052 68.2106C7.19082 68.5656 6.78707 68.391 6.63238 68.2995C6.50394 68.2237 6.09518 67.932 6.22456 67.3602C6.60644 65.6688 7.17504 64.4767 7.53536 63.8361C13.0541 64.5072 18.6285 64.938 24.1504 65.1147C24.0605 65.3983 24.0132 65.6914 24.0132 65.9924C24.0132 66.2964 24.0613 66.5927 24.1532 66.879C24.0277 66.8705 23.8996 66.8647 23.7663 66.8647C21.6936 66.8646 20.6205 67.9168 19.7581 68.7621ZM27.0081 73.5291C26.7492 73.4713 26.4159 73.3347 26.1362 72.7874C25.8198 72.1678 25.8924 71.8123 25.9749 71.5989C26.2176 70.97 27.1026 70.3389 28.467 69.8218C28.9267 69.6476 29.2289 69.2051 29.2238 68.7135C29.2186 68.222 28.9072 67.7859 28.4439 67.6215C27.01 67.1124 26.357 66.4201 26.357 65.9921C26.357 65.5641 27.0101 64.8717 28.4439 64.3627C28.9072 64.1983 29.2186 63.7622 29.2238 63.2706C29.2288 62.779 28.9267 62.3365 28.467 62.1625C27.1026 61.6454 26.2176 61.0145 25.9749 60.3854C25.8926 60.172 25.8198 59.8165 26.1362 59.1971C26.4159 58.6496 26.7492 58.513 27.0081 58.4552C27.5601 58.3319 29.19 58.348 32.6854 60.9396C32.6749 61.0571 32.6646 61.1746 32.6584 61.2934C32.4938 64.4111 32.4938 67.5727 32.6584 70.6904C32.6646 70.8092 32.6749 70.9267 32.6854 71.0442C29.1903 73.636 27.5609 73.6522 27.0081 73.5291ZM34.9987 61.4171C35.1975 57.6483 38.1975 54.6772 41.9767 54.5061C42.0154 54.5043 42.0545 54.5033 42.0932 54.5014C40.4852 57.8057 37.4827 64.7533 35.7983 73.5358C35.3373 72.641 35.0551 71.6364 34.9987 70.5675C34.8387 67.5316 34.8387 64.453 34.9987 61.4171ZM37.7569 75.911C39.4947 65.2297 43.409 57.0166 44.763 54.405C46.2624 54.3612 47.7654 54.3365 49.2691 54.3315C47.4194 58.0914 43.6997 66.6841 42.2496 77.4893C42.1587 77.4854 42.0676 77.4826 41.9767 77.4785C40.3798 77.4062 38.923 76.8324 37.7569 75.911ZM64.7094 70.5673C64.5304 73.9633 62.0763 76.7107 58.8276 77.3464C59.939 69.4814 62.2883 62.8464 64.038 58.7118C64.4226 59.539 64.6585 60.4515 64.7094 61.417C64.8694 64.453 64.8694 67.5315 64.7094 70.5673ZM73.5721 72.7872C73.2924 73.3347 72.9591 73.4713 72.7002 73.5291C72.1479 73.6521 70.5182 73.6361 67.0229 71.0447C67.0334 70.9272 67.0437 70.8095 67.05 70.6908C67.2145 67.573 67.2145 64.4114 67.05 61.2937C67.0437 61.1749 67.0334 61.0574 67.0229 60.9399C70.5178 58.3485 72.1474 58.3321 72.7002 58.4555C72.9591 58.5133 73.2924 58.6499 73.5721 59.1971C73.8885 59.8166 73.8157 60.1721 73.7332 60.3856C73.4906 61.0145 72.6055 61.6456 71.2411 62.1625C70.7816 62.3367 70.4794 62.7792 70.4844 63.2708C70.4896 63.7623 70.801 64.1984 71.2643 64.3628C72.6983 64.8719 73.3513 65.5643 73.3513 65.9922C73.3513 66.4202 72.6982 67.1126 71.2643 67.6216C70.801 67.786 70.4896 68.2221 70.4844 68.7137C70.4792 69.2053 70.7814 69.6478 71.2411 69.822C72.6055 70.3389 73.4906 70.97 73.7334 71.5991C73.8156 71.8123 73.8885 72.1678 73.5721 72.7872Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M22.2968 32.2231C27.5 31.532 32.7757 31.532 37.9786 32.2231C38.031 32.23 38.083 32.2334 38.1344 32.2334C38.713 32.2334 39.2163 31.805 39.2946 31.2158C39.3799 30.5742 38.9288 29.985 38.2872 29.8998C32.8801 29.1817 27.3961 29.1817 21.9882 29.8998C21.3466 29.985 20.8955 30.5742 20.9808 31.2158C21.0661 31.8573 21.6552 32.3081 22.2968 32.2231Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M39.2946 41.2714C39.2095 40.6299 38.6198 40.1792 37.9786 40.2641C32.7757 40.9552 27.5 40.9552 22.2968 40.2641C21.6555 40.1789 21.066 40.6299 20.9808 41.2714C20.8955 41.913 21.3466 42.5022 21.9882 42.5874C24.692 42.9465 27.4147 43.126 30.1376 43.126C32.8606 43.126 35.5834 42.9465 38.2871 42.5874C38.929 42.5022 39.3799 41.913 39.2946 41.2714Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M42.4695 36.2435C42.4695 35.5963 41.9449 35.0716 41.2976 35.0716H18.9785C18.3312 35.0716 17.8066 35.5963 17.8066 36.2435C17.8066 36.8907 18.3312 37.4154 18.9785 37.4154H41.2976C41.9448 37.4154 42.4695 36.8907 42.4695 36.2435Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 31,
  columnNumber: 5
}, this), Category4 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("g", { clipPath: "url(#clip0)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M52.5 50.5L50.5 55L52 58V59.5L52.5 61.5C53.1667 61.8333 54.6 62.5 55 62.5C55.4 62.5 56.5 62.8333 57 63C57 63.5 56.9 64.6 56.5 65C56.1 65.4 55.3333 65.5 55 65.5C54.6667 66.1667 54 67.6 54 68C54 68.5 53.5 70 53.5 70.5C53.5 70.9 52.5 72.6667 52 73.5L52.5 78C54 78.1667 57.1 78.5 57.5 78.5H65.5C68.1667 77.6667 73.5 75.9 73.5 75.5C73.5 75.1 75.5 74.3333 76.5 74L78.5 70L76.5 65.5L71 54.5L70 54C69.3333 54.1667 67.9 54.4 67.5 54C67 53.5 65.5 53.5 65.5 53C65.5 52.5 64.5 52.5 64.5 52C64.5 51.5 64 51 64 50.5V48.5C64 48 64.5 47.5 64.5 47C64.5 46.6 65.5 46.1667 66 46V44.5C65.6667 43.8333 65 42.4 65 42C65 41.5 63.5 40.5 63 40.5C62.5 40.5 61 40 60.5 40C60.1 40 58.6667 40.6667 58 41L56 44.5L52.5 50.5Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M32.5 30L24 29.5L23.5 31.5V36L24 43C24.5 43.1667 25.7 43.6 26.5 44C27.5 44.5 30.5 44 31 44C31.5 44 38 43.5 38.5 43C39 42.5 39.5 41.5 40 41C40.5 40.5 40.5 39 40.5 38.5V34.5C40.5 33.5 40 32 40 31.5C40 31.1 39 30.3333 38.5 30H32.5Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M79.4871 68.1252L71.687 52.6062C71.5223 52.2786 71.2137 52.0469 70.8532 51.9801C70.4926 51.9134 70.1215 52.0194 69.8506 52.2664C69.2998 52.7684 68.5829 53.045 67.8323 53.045C66.1737 53.045 64.8244 51.695 64.8244 50.0356C64.8244 48.6018 65.8441 47.3606 67.2493 47.0838C67.6087 47.0131 67.9143 46.7784 68.0754 46.4495C68.2365 46.1205 68.2345 45.7352 68.0701 45.4079L66.1059 41.498C65.1633 39.6239 63.2746 38.4597 61.1769 38.4595C61.1767 38.4595 61.1766 38.4595 61.1764 38.4595C60.9736 38.4595 60.7738 38.4736 60.5755 38.495C60.5241 35.6001 60.4495 32.7015 60.3506 29.8575C60.2514 26.9842 59.4066 24.1778 57.9072 21.7415C57.5679 21.1902 56.8461 21.0184 56.295 21.3578C55.7439 21.697 55.572 22.4189 55.9112 22.97C57.1979 25.0608 57.9231 27.4705 58.0083 29.9388C58.1156 33.019 58.1944 36.1637 58.2454 39.298C57.4087 39.8222 56.7129 40.5725 56.2479 41.4967L50.5146 52.9045C48.295 49.4551 45.1873 46.7793 41.5618 46.7793C35.238 46.7793 30.489 54.9185 29.2831 61.1071H29.2073C28.5889 57.9336 27.0387 54.2481 24.8222 51.4092C24.8063 49.1762 24.806 46.933 24.8196 44.6852C26.0304 44.7093 27.244 44.7251 28.4609 44.7251C31.5015 44.7251 34.5545 44.6502 37.5833 44.5011C39.6366 44.4001 41.3031 42.845 41.5459 40.8036C41.8737 38.047 41.8737 35.2515 41.5459 32.4949C41.3031 30.4535 39.6368 28.8985 37.584 28.7975C33.4856 28.596 29.3353 28.5317 25.2268 28.6033C25.8377 23.7922 28.8189 19.6548 33.2528 17.561H49.8727C51.0382 18.1113 52.1258 18.8182 53.107 19.669C53.3287 19.8613 53.602 19.9555 53.8741 19.9555C54.2022 19.9555 54.5284 19.8187 54.7601 19.5515C55.184 19.0626 55.1314 18.3224 54.6424 17.8983C54.1145 17.4405 53.5585 17.02 52.9807 16.6344C53.9941 15.8386 54.6471 14.6035 54.6471 13.218C54.6471 11.2292 53.303 9.54964 51.476 9.03682V4.89271C51.4755 2.19487 49.2808 0 46.5828 0H36.5419C33.8441 0 31.6492 2.19487 31.6492 4.89271V9.03714C29.822 9.54996 28.4779 11.2295 28.4779 13.2183C28.4779 14.6036 29.1306 15.8385 30.1437 16.6343C28.3745 17.8143 26.8396 19.3285 25.6307 21.1049C23.8705 23.6914 22.8828 26.7181 22.7746 29.8575C22.5547 36.202 22.4514 42.6153 22.4658 48.9629C20.8255 47.6193 18.9583 46.7795 16.9284 46.7795C14.079 46.7795 11.1957 48.524 8.80956 51.6917C8.42002 52.2086 8.52346 52.9434 9.0405 53.3328C9.55753 53.7223 10.2922 53.6189 10.6816 53.1019C11.801 51.6159 14.101 49.1232 16.9286 49.1232C19.1309 49.1232 21.4445 50.6656 23.4435 53.4659C25.0263 55.6835 26.2404 58.4577 26.8157 61.1073H7.04016C7.33954 59.7323 7.81564 58.3074 8.44315 56.9204C8.70987 56.3307 8.44815 55.6364 7.85845 55.3696C7.26891 55.1028 6.57453 55.3646 6.30765 55.9543C5.53811 57.6554 4.97529 59.4166 4.65123 61.1071H3.04215C1.36572 61.1071 0.00195312 62.4709 0.00195312 64.1473C0.00195312 65.8236 1.36588 67.1875 3.04215 67.1875H3.61809C3.81262 68.9828 4.1406 70.7721 4.46138 72.5118C4.68998 73.7515 4.92639 75.0335 5.10608 76.2829C5.34952 77.97 6.69828 79.2826 8.38674 79.4753C11.4593 79.8245 14.1924 79.9992 16.9267 79.9992C19.6569 79.9992 22.3882 79.8252 25.4583 79.4769C26.0187 79.4131 26.5401 79.225 26.9981 78.9436C28.194 79.6366 29.5415 79.9997 30.9445 79.9997H41.5634L41.5604 79.9989C44.2954 79.9991 47.03 79.8245 50.1041 79.4752C50.9182 79.3823 51.6518 79.0272 52.2223 78.497C55.1217 79.498 58.1376 79.99 61.1402 79.99C67.2471 79.99 73.2961 77.9614 78.1833 74.0749C79.9605 72.6629 80.509 70.1607 79.4871 68.1252ZM33.993 4.89271C33.993 3.48723 35.1364 2.34378 36.5419 2.34378H46.5828C47.9883 2.34378 49.1317 3.48723 49.1317 4.89271V8.8751H33.993V4.89271ZM32.8211 11.2189H50.3036C51.4062 11.2189 52.3029 12.1158 52.3029 13.2181C52.3029 14.3206 51.406 15.2175 50.3036 15.2175H32.8211C31.7186 15.2175 30.8217 14.3206 30.8217 13.2181C30.8217 12.1158 31.7187 11.2189 32.8211 11.2189ZM37.4685 31.1388C38.3751 31.1833 39.111 31.8702 39.2182 32.7719C39.5241 35.3449 39.5241 37.9542 39.2182 40.527C39.111 41.4288 38.3749 42.1158 37.4679 42.1603C33.2717 42.3669 29.0296 42.4272 24.8388 42.3436C24.879 38.5428 24.961 34.7362 25.0847 30.9505C29.201 30.8749 33.3609 30.9369 37.4685 31.1388ZM58.3414 42.5499C58.8917 41.4563 59.9513 40.8034 61.1761 40.8034H61.1764C62.4014 40.8036 63.4614 41.4569 64.0116 42.5508L65.3816 45.2777C63.6397 46.1779 62.4807 47.9976 62.4807 50.0357C62.4807 52.9875 64.8813 55.3889 67.8323 55.3889C68.6587 55.3889 69.4628 55.2002 70.1886 54.8438L76.7452 67.8886C76.7382 67.8942 76.7318 67.9005 76.7247 67.9061C73.4284 70.5279 69.4868 72.2815 65.3262 72.9774C61.5755 73.6048 57.7059 73.3654 54.0701 72.2929C54.3779 70.6218 54.6862 68.9077 54.8723 67.1875H55.4489C57.1253 67.1875 58.489 65.8237 58.489 64.1473C58.489 62.4709 57.1253 61.1071 55.4489 61.1071H53.8401C53.484 59.2798 52.8191 57.2827 51.8957 55.3749L58.3414 42.5499ZM35.0463 53.4663C37.0454 50.6656 39.3593 49.1232 41.5615 49.1232C43.7643 49.1232 46.0783 50.6656 48.0772 53.4663C49.6599 55.6836 50.8738 58.4579 51.449 61.1074H31.674C32.2492 58.4582 33.4633 55.6839 35.0463 53.4663ZM2.34573 64.1476C2.34573 63.7636 2.65823 63.4512 3.04215 63.4512H55.4489C55.8329 63.4512 56.1453 63.7636 56.1453 64.1476C56.1453 64.5315 55.8329 64.844 55.4489 64.844H3.04215C2.65808 64.8439 2.34573 64.5315 2.34573 64.1476ZM28.5328 77.1062C28.6345 76.8447 28.7101 76.5698 28.7514 76.2828C28.8609 75.5145 28.9909 74.599 29.1268 73.6221C29.1362 73.5559 29.1412 73.5193 29.2451 73.5193C29.3492 73.5193 29.3542 73.5559 29.3634 73.6212C29.4995 74.5992 29.6295 75.5146 29.7392 76.2842C29.8078 76.7606 29.9675 77.2056 30.1961 77.6056C29.6161 77.5279 29.0568 77.36 28.5328 77.1062ZM49.8388 77.1468C43.8879 77.8231 39.2499 77.8236 33.2972 77.1484C32.6592 77.0757 32.15 76.5832 32.0592 75.952C31.95 75.1859 31.8205 74.2732 31.6845 73.297C31.5095 72.0479 30.5062 71.1755 29.245 71.1757C27.9837 71.1757 26.9806 72.048 26.8055 73.298C26.6698 74.2732 26.5402 75.186 26.4312 75.9507C26.3402 76.5832 25.831 77.0757 25.1935 77.1484C19.2397 77.8236 14.6017 77.8231 8.6519 77.1468C8.02142 77.075 7.5172 76.5821 7.42579 75.9489C7.23954 74.6542 6.99891 73.349 6.76609 72.0869C6.46875 70.4747 6.16546 68.8192 5.9764 67.1877H52.5138C52.3244 68.8236 52.0204 70.4836 51.7224 72.1002C51.4905 73.3584 51.2507 74.6592 51.0644 75.9498C50.9732 76.5828 50.469 77.075 49.8388 77.1468ZM76.7247 72.2405C70.1628 77.4586 61.3102 79.0098 53.3615 76.4061C53.3687 76.3654 53.3784 76.3257 53.3843 76.2848C53.4641 75.7318 53.5559 75.1724 53.6521 74.6132C56.1006 75.3104 58.642 75.664 61.188 75.664C62.7011 75.664 64.2158 75.5395 65.7129 75.2892C70.0426 74.5649 74.1541 72.7918 77.651 70.1504C77.696 70.9393 77.3682 71.7293 76.7247 72.2405Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M62.2685 67.7178C63.0582 68.8663 64.2479 69.6385 65.6183 69.8923C65.939 69.9517 66.2604 69.981 66.5794 69.981C67.6247 69.981 68.6449 69.6663 69.5249 69.0613C70.6735 68.2717 71.4457 67.082 71.6994 65.7115C71.9533 64.341 71.658 62.9537 70.8685 61.8051C70.0788 60.6565 68.8891 59.8843 67.5186 59.6306C66.1477 59.3768 64.7608 59.672 63.6122 60.4615C62.4636 61.2512 61.6915 62.4409 61.4377 63.8113C61.1836 65.182 61.4788 66.5693 62.2685 67.7178ZM63.7421 64.2381C63.8819 63.4831 64.3074 62.8277 64.94 62.3927C65.4247 62.0595 65.9866 61.8862 66.5624 61.8862C66.7382 61.8862 66.9154 61.9024 67.0918 61.9351C67.8468 62.0749 68.5021 62.5002 68.9372 63.1331C69.3722 63.7657 69.5347 64.5299 69.395 65.2849C69.2552 66.0399 68.8297 66.6952 68.1971 67.1302C67.5643 67.5652 66.7999 67.7277 66.0454 67.5881C65.2904 67.4482 64.635 67.0229 64.1999 66.3901C63.7649 65.7573 63.6022 64.9931 63.7421 64.2381Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M57.3469 60.6886C57.5806 60.7319 57.815 60.7533 58.0477 60.7533C58.8097 60.7533 59.5534 60.5237 60.195 60.0828C61.0323 59.507 61.5953 58.6397 61.7803 57.6406C61.9655 56.6414 61.7502 55.63 61.1745 54.7925C60.5989 53.955 59.7314 53.392 58.7323 53.207C56.6697 52.8253 54.6808 54.1925 54.2989 56.2551C53.9167 58.3178 55.2842 60.3067 57.3469 60.6886ZM56.6033 56.6819C56.7499 55.89 57.5136 55.3647 58.3055 55.5117C58.6891 55.5828 59.022 55.7989 59.2431 56.1205C59.4642 56.442 59.5467 56.8303 59.4758 57.2139C59.4047 57.5975 59.1886 57.9306 58.867 58.1515C58.5456 58.3726 58.1577 58.4553 57.7736 58.3842C56.9817 58.2373 56.4567 57.4737 56.6033 56.6819Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("clipPath", { id: "clip0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("rect", { width: "80", height: "80", fill: "white" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 43,
  columnNumber: 5
}, this), Category5 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("circle", { cx: "70", cy: "69", r: "9", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M2 35L3 50.5L12 59.5L13 55L14 38.5V23.5L12 21.5L10 20.5H5L2 22.5V26V35Z", fill: "#FDC040" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M49.7556 31.3671L50.4734 30.0005L48.1166 28.7625L47.3988 30.1298C46.0926 32.6213 43.9276 34.5548 41.3055 35.573V23.7452C44.3885 22.7927 46.9775 20.6732 48.5197 17.8385L49.1354 16.6988L46.7915 15.4336L46.1765 16.572C45.105 18.5413 43.3834 20.0777 41.3055 20.9183V12.0716H38.6424V20.9183C36.5645 20.0777 34.8428 18.5413 33.772 16.572L33.157 15.4336L30.8131 16.6988L31.4282 17.8385C32.9704 20.6732 35.5593 22.7927 38.6424 23.7452V35.573C36.0203 34.5548 33.8559 32.6213 32.5497 30.1298L31.8319 28.7625L29.4751 30.0005L30.1929 31.3671C31.9607 34.7408 35.0028 37.2699 38.6424 38.3921V50.2199C36.0203 49.2017 33.8559 47.2681 32.5497 44.7767L31.8319 43.4094L29.4751 44.6473L30.1929 46.014C31.9607 49.3877 35.0028 51.9168 38.6424 53.039V71.9906H41.3055V53.039C44.9457 51.9168 47.9872 49.3877 49.7556 46.014L50.4734 44.6473L48.1166 43.4094L47.3988 44.7767C46.0926 47.2681 43.9276 49.2017 41.3055 50.2199V38.3921C44.9457 37.2699 47.9872 34.7408 49.7556 31.3671Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M72.9964 59.3612C74.3142 58.2221 75.3038 56.7508 75.8616 55.1L73.3318 54.2587C72.839 55.73 71.88 57.0004 70.5992 57.8762V52.0176H67.9362V57.8762C66.6573 57.0017 65.6989 55.7339 65.2055 54.2652L62.6757 55.1072C63.2335 56.7573 64.2231 58.2286 65.541 59.3677C60.7128 61.1693 57.8671 66.169 58.7825 71.2403C59.6979 76.3109 64.1119 79.9999 69.2651 79.9999C74.4183 79.9999 78.8329 76.3109 79.7483 71.2403C80.6637 66.169 77.8173 61.1693 72.9892 59.3677L72.9964 59.3612ZM69.2677 77.3167C64.8557 77.3167 61.2785 73.7402 61.2785 69.3275C61.2785 64.9155 64.8557 61.3383 69.2677 61.3383C73.6803 61.3383 77.2569 64.9155 77.2569 69.3275C77.253 73.7382 73.6784 77.3122 69.2677 77.3167Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M75.915 1.58444C75.9625 1.2054 75.8448 0.824403 75.5919 0.538331C75.3396 0.25226 74.9762 0.0877686 74.5939 0.0877686H70.5993C69.9589 0.0877686 69.4089 0.544183 69.2905 1.17419L69.2678 1.29577L69.2457 1.17419C69.1273 0.544183 68.5773 0.0877686 67.9362 0.0877686H63.9416C63.56 0.0877686 63.1966 0.25226 62.9436 0.538331C62.6914 0.824403 62.5737 1.2054 62.6212 1.58444L65.2732 22.8064V33.6427C65.1808 36.4137 64.779 39.1658 64.0749 41.8477C63.9169 42.5401 63.9 43.2586 64.0255 43.9581C64.428 46.1446 66.1379 47.8572 68.3237 48.2629C68.6319 48.3162 68.9433 48.3435 69.2561 48.3441C70.6702 48.3461 72.0264 47.7856 73.027 46.787C74.0276 45.7877 74.59 44.4321 74.59 43.018C74.59 42.7592 74.5711 42.5011 74.5341 42.2456L74.2467 40.3497C73.6726 37.1672 73.3436 33.9456 73.2624 30.713V22.8064L75.915 1.58444ZM65.4507 2.75083H66.831L70.5993 22.848V27.0312L67.8927 22.2954L65.4507 2.75083ZM70.9803 45.055C70.3704 45.5686 69.5623 45.7818 68.7782 45.6356C67.6983 45.423 66.855 44.5764 66.6476 43.4959C66.5826 43.1428 66.5904 42.7807 66.6704 42.4309C67.4213 39.5585 67.8459 36.61 67.9362 33.6427V27.7372L70.6624 32.5068C70.8373 35.27 71.1565 38.0215 71.6181 40.7515L71.9029 42.6331C71.9217 42.7592 71.9315 42.8873 71.9308 43.0154C71.9308 43.8021 71.583 44.5491 70.9803 45.055ZM71.6649 14.0942L70.5798 8.30712L70.6565 8.32208L71.7046 2.75083H73.0855L71.6649 14.0942Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M61.2785 22.7238C61.2934 19.1525 59.2513 15.8913 56.031 14.3458C55.403 14.0637 55.1045 13.3407 55.3509 12.6977C56.8301 8.76679 55.4979 4.33203 52.0969 1.86726C48.6959 -0.597503 44.0667 -0.483075 40.7919 2.14618C40.3159 2.53563 39.632 2.53563 39.1567 2.14618C37.1971 0.564337 34.679 -0.154092 32.1791 0.156035C29.3412 0.505172 26.8212 2.13773 25.3414 4.58494C23.8623 7.0315 23.5879 10.0223 24.5976 12.6977C24.844 13.3407 24.5449 14.0637 23.9169 14.3458C21.3533 15.5902 19.5003 17.9393 18.8879 20.7226C18.2748 23.5053 18.9704 26.4154 20.7746 28.6215C21.129 29.0662 21.129 29.6968 20.7746 30.1422C17.9666 33.5731 17.9666 38.5085 20.7746 41.9394C21.1257 42.4055 21.1101 43.0512 20.7376 43.4998C18.5036 46.2649 18.0375 50.0599 19.5348 53.2834C21.0321 56.5069 24.2329 58.5985 27.7866 58.6752L29.5375 70.9256C30.2813 76.1178 34.7291 79.9739 39.9739 79.9739C45.2195 79.9739 49.6672 76.1178 50.411 70.9256L52.1619 58.6752C55.7163 58.5985 58.9177 56.5063 60.4151 53.2815C61.9117 50.056 61.4436 46.2604 59.2084 43.4959C58.8358 43.0473 58.8202 42.401 59.1707 41.9355C61.9794 38.5046 61.9794 33.5692 59.1707 30.1376C58.817 29.6929 58.817 29.0623 59.1707 28.6175C60.5308 26.9538 61.2752 24.8726 61.2785 22.7238ZM57.1135 31.8287C58.0836 33.0178 58.6141 34.5048 58.6154 36.0392C58.6213 37.5755 58.0894 39.0657 57.1122 40.2509C55.9569 41.693 55.9673 43.7475 57.1376 45.1778C58.7454 47.1732 59.0653 49.9143 57.96 52.2263C56.8548 54.5382 54.5207 56.0102 51.9577 56.0121C51.7003 56.0043 51.4428 55.9796 51.1886 55.9393C50.8408 55.8912 50.489 55.9842 50.2095 56.1961C49.9305 56.4087 49.7478 56.7234 49.701 57.0706L47.7759 70.5511C47.2187 74.4319 43.8944 77.3134 39.9739 77.3134C36.0541 77.3134 32.7292 74.4319 32.1726 70.5511L30.254 57.0778C30.1207 56.41 29.5284 55.9335 28.8477 55.9458C28.7879 55.9458 28.7287 55.9497 28.6696 55.9575C26.5526 56.1929 24.4526 55.3886 23.0346 53.799C20.854 51.3706 20.7616 47.7174 22.8175 45.1817C23.9877 43.7514 23.9981 41.6975 22.8428 40.2548C21.8617 39.0696 21.3279 37.5781 21.3325 36.0392C21.3344 34.5048 21.8643 33.0178 22.8344 31.8287C23.9955 30.4042 23.9955 28.3594 22.8344 26.9343C21.5464 25.3589 21.0503 23.281 21.4885 21.2935C21.9261 19.3066 23.2498 17.6292 25.0807 16.7417C26.9479 15.8555 27.8218 13.684 27.0877 11.7523C26.682 10.6854 26.5604 9.53138 26.7334 8.40335C27.1976 5.46461 29.5427 3.18254 32.4938 2.80025C34.2805 2.57399 36.0827 3.08502 37.4858 4.21565C38.9421 5.37554 41.0064 5.37554 42.4628 4.21565C43.8645 3.08307 45.6668 2.57009 47.4547 2.79504C50.4052 3.17929 52.7503 5.45941 53.2165 8.39814C53.3881 9.52618 53.2659 10.6796 52.8608 11.7465C52.1268 13.6788 53 15.8503 54.8672 16.7358C56.6981 17.624 58.0218 19.3014 58.46 21.2883C58.8976 23.2752 58.4015 25.3537 57.1135 26.9291C55.9497 28.3549 55.9497 30.4029 57.1135 31.8287Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M0.282215 25.6892L2.51162 74.7173C2.64101 77.6645 5.06806 79.9869 8.0172 79.9869C10.967 79.9869 13.3934 77.6645 13.5234 74.7173L15.7522 25.6892C15.8413 23.8714 15.1768 22.0977 13.9148 20.7864C13.7601 20.6238 13.5793 20.5003 13.4116 20.3553L14.6749 0.170343L12.0118 0.0052013L10.8285 18.9821C10.3454 18.8508 9.84936 18.7747 9.34873 18.7546V0.087772H6.68567V18.7546C6.21235 18.7721 5.74228 18.8404 5.28392 18.9581L4.0226 0L1.35953 0.175544L2.69107 20.1485L2.87636 20.1368C2.60785 20.3345 2.35428 20.5516 2.11762 20.7864C0.856309 22.0984 0.192493 23.872 0.282215 25.6892ZM4.04536 22.627C4.79695 21.8351 5.84176 21.3884 6.93338 21.3923H9.10102C10.1926 21.391 11.2375 21.837 11.9916 22.6257C12.7465 23.4143 13.1457 24.478 13.0956 25.5683L12.4955 38.7022H8.0172V41.3653H12.3739L11.4045 62.6698H8.0172V65.3329H11.2836L10.863 74.5977C10.7966 76.1217 9.54248 77.3225 8.0172 77.3225C6.49257 77.3225 5.23776 76.1217 5.17209 74.5977L4.14548 52.0176H8.0172V49.3545H4.0226L3.17739 30.713H8.0172V28.05H3.05581L2.94268 25.5683C2.88872 24.4773 3.28792 23.413 4.04536 22.627Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M63.9417 69.3275C63.941 70.6382 64.4241 71.9028 65.2985 72.8787L67.2828 71.1024C66.6905 70.4406 66.4675 69.5271 66.6879 68.6669C66.9077 67.8061 67.5423 67.1124 68.3797 66.8165L67.4928 64.305C65.3668 65.0598 63.9449 67.0708 63.9417 69.3275Z", fill: "#3BB77E" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 60,
  columnNumber: 5
}, this), Category6 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("g", { clipPath: "url(#clip0)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M31.0001 31.5C30.6001 31.9 30.5001 34 30.5001 35C30.5001 35.1667 30.9001 35.4 32.5001 35C34.5001 34.5 33.5001 34.5 34.5001 33.5C35.5001 32.5 35.0001 33.5 37.0001 34C39.0001 34.5 38.0001 35 39.0001 35.5C40.0001 36 40.0001 35.5 40.5001 35.5C41.0001 35.5 42.0001 34.5 43.0001 34C44.0001 33.5 44.0001 33.5 44.5001 33C44.9001 32.6 45.0001 32.1667 45.0001 32C45.0001 31.6667 44.9001 30.8 44.5001 30C44.0001 29 43.5001 28.5 43.0001 28C42.5001 27.5 41.5001 27.5 40.5001 27C39.5001 26.5 38.5001 27 37.5001 27C36.5001 27 34.5001 27.5 34.0001 27.5C33.5001 27.5 32.5001 29 32.0001 29.5C31.5001 30 31.5001 31 31.0001 31.5Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M55.5001 21.5C55.0001 22 52.0001 33 52.0001 33.5C52.3334 33.8333 53.5001 34.7 55.5001 35.5C57.5001 36 56.5001 35 58.0001 34.5C59.5001 34 59.0001 34 60.5001 34C62.0001 34 61.5001 34 63.0001 35C64.5001 36 64.0001 35 65.0001 35C65.8001 35 66.3334 34 66.5001 33.5L68.5001 29.5L72.5001 20.5L75.5001 9L71.5001 8.5C68.1667 8.33333 61.4001 8 61.0001 8C60.6001 8 59.8334 10.6667 59.5001 12C58.3334 15 55.9001 21.1 55.5001 21.5Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M25.0001 68C19.0001 69.6 16.8334 64 16.5001 61H15.5001C15.1667 60.8333 14.4 60.5 14 60.5C13.5 60.5 10.5 60 10.0001 60C9.50011 60 7 60.5 7 61C7 61.5 5.00005 64 4.50005 64.5C4.00005 65 4.50005 69 4.50005 69.5C4.50005 70 5.50005 72.5 5.50005 73C5.50005 73.5 6.00005 74.5 6.50005 75.5C7.00005 76.5 7.50005 77 8.50005 78C9.50005 79 8.50005 78.5 10.0001 78.5C11.5001 78.5 11.5001 78.5 12.5001 78C13.5001 77.5 15.0001 77.5 15.5001 77.5C16.0001 77.5 16.5001 78.5 17.5001 78.5C18.5001 78.5 18.5001 79 19.5001 78.5C20.5001 78 21.0001 78 22.0001 77.5C23.0001 77 24.0001 74 24.0001 73.5C24.0001 73.1 24.6667 69.6667 25.0001 68Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 77,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M63.9731 12.4121L66.509 11.5866L69.1131 19.5872L66.5773 20.4121L63.9731 12.4121Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 78,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M60.0649 21.7467L62.6008 20.9212L65.2056 28.9206L62.6698 29.7467L60.0649 21.7467Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 79,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M15.104 25.6361C14.8228 27.6732 15.4172 29.7344 16.7414 31.3079L18.6665 33.7227V56H21.3332V35.8255L23.2596 37.1094C23.7082 37.4082 24.2915 37.4082 24.7401 37.1094L27.9998 34.9336L31.2596 37.1068C31.7082 37.4056 32.2915 37.4056 32.7401 37.1068L35.9998 34.9336L39.2596 37.1068C39.7082 37.4056 40.2915 37.4056 40.7401 37.1068L43.9998 34.9336L47.2596 37.1068C47.7082 37.4056 48.2915 37.4056 48.7401 37.1068L51.9998 34.9336L54.6665 36.7109V77.3333H25.3332V80H62.6665C66.3468 79.9954 69.3286 77.0137 69.3332 73.3333V33.3333C69.3299 33.0404 69.229 32.7565 69.0467 32.5267L76.7518 12.0137C77.7889 9.25782 77.4093 6.16928 75.7362 3.74675C74.1463 1.39649 71.4914 -0.00845603 68.6548 7.50484e-06C65.0389 0.0338617 61.8182 2.29298 60.5558 5.68165L58.4653 11.2468L55.9998 8.78126V4.00001C55.9998 3.26368 55.4028 2.66667 54.6665 2.66667H39.9998C39.2635 2.66667 38.6665 3.26368 38.6665 4.00001V6.28777C37.1593 4.92188 34.8859 4.84441 33.2889 6.10548V4.00001C33.2889 1.81772 31.52 0.0481845 29.3371 0.0481845C27.1548 0.0481845 25.3853 1.81772 25.3853 4.00001V6.10678C24.6554 5.50196 23.7368 5.17123 22.7889 5.17318C21.6886 5.17058 20.634 5.61459 19.8664 6.4043C18.285 8.03386 18.2752 10.6224 19.8436 12.2643L21.0851 13.5456C20.6333 13.7526 20.2231 14.0404 19.8748 14.3945L19.8664 14.3997L19.8534 14.4134C19.5428 14.7324 19.2856 15.0996 19.0929 15.5013L17.5734 12.6947L15.2277 13.9642L18.6756 20.3281C18.5213 20.416 18.3664 20.5013 18.2199 20.6016C18.1652 20.6387 18.117 20.6816 18.0636 20.7188L12.9041 15.9642L11.0962 17.9251L16.2212 22.6504C15.6326 23.5508 15.2511 24.5703 15.104 25.6361ZM43.2596 32.224L39.9998 34.3997L36.7401 32.2266C36.2915 31.9277 35.7082 31.9277 35.2596 32.2266L32.0304 34.3802C32.0226 34.2467 31.9998 34.1309 31.9998 34.0026C31.9914 31.0723 34.1066 28.5664 36.9966 28.0833C39.8872 27.5996 42.7023 29.2806 43.6476 32.0547C43.5103 32.0905 43.3794 32.1471 43.2596 32.224ZM46.6665 33.5091L46.6411 33.4922C46.481 30.6895 44.9712 28.1387 42.591 26.6497C40.2114 25.1608 37.257 24.9186 34.6665 26V17.3333H46.6665V33.5091ZM66.6665 73.3333C66.6665 75.5423 64.8755 77.3333 62.6665 77.3333H57.3332V36.7135L59.9998 34.9336L63.2596 37.1068C63.7082 37.4056 64.2915 37.4056 64.7401 37.1068L66.6665 35.8255V73.3333ZM63.0519 6.6185C63.9211 4.26824 66.1489 2.69727 68.6548 2.66667C70.6144 2.66277 72.4471 3.63477 73.5441 5.25847C74.7212 6.96355 74.9868 9.13738 74.2557 11.0762L65.9998 33.0664L63.9998 34.3997L60.7401 32.2266C60.2915 31.9277 59.7082 31.9277 59.2596 32.2266L55.9998 34.3997L53.2948 32.5964L63.0519 6.6185ZM57.436 13.9883L50.3599 32.8242L49.3332 33.5091V16.5521L54.6665 11.2188L57.436 13.9883ZM41.3332 5.33334H53.3332V8.00001H41.3332V5.33334ZM40.5519 10.6667H51.4477L47.4478 14.6667H36.5519L40.5519 10.6667ZM21.7694 8.27475C22.0369 7.9987 22.4048 7.84245 22.7889 7.84245C23.1737 7.84311 23.5415 7.9987 23.8091 8.27475L25.7668 10.2747C26.147 10.6628 26.7244 10.7806 27.2264 10.5742C27.7283 10.3672 28.0552 9.87631 28.0519 9.33334V4.00001C28.0304 3.5267 28.2707 3.08009 28.6769 2.83725C29.0838 2.59376 29.591 2.59376 29.9972 2.83725C30.4041 3.08009 30.6444 3.5267 30.6222 4.00001V9.33334C30.6229 9.87436 30.9504 10.3613 31.4517 10.5658C31.9523 10.7708 32.5272 10.6524 32.9067 10.2669L34.8703 8.26693C35.4328 7.7129 36.3351 7.7129 36.897 8.26693C37.4764 8.86003 37.4764 9.80665 36.897 10.3997L32.9692 14.3997L33.0089 14.4401L32.3905 15.0586C32.283 15.1693 32.1964 15.2982 32.1333 15.4388C32.1144 15.4798 32.104 15.5215 32.089 15.5638C32.0493 15.6777 32.0252 15.7962 32.0174 15.916C32.0174 15.9453 32.0011 15.9694 32.0011 15.9987V27.7598C31.6978 28.0501 31.4158 28.362 31.1587 28.6934L28.6398 23.3333C27.7101 21.4837 26.0298 20.1231 24.0265 19.6003C23.5604 19.4798 23.0825 19.4069 22.6014 19.3841L22.2596 18.9837C21.9933 18.6784 21.7922 18.4401 21.7596 18.4069C21.4152 18.0462 21.2661 17.541 21.3599 17.0508C21.4093 16.7721 21.5376 16.5143 21.729 16.3066L21.7531 16.2839L21.7863 16.2481C22.2694 15.7747 23.0174 15.7051 23.5799 16.0801C24.1457 16.4583 24.9048 16.3496 25.3423 15.8288C25.7798 15.3073 25.7544 14.541 25.2837 14.0495L21.7596 10.4121C21.1873 9.81316 21.1919 8.8685 21.7694 8.27475ZM17.7466 26C17.9204 24.7077 18.6359 23.5501 19.7147 22.8171C20.7843 22.0938 22.1131 21.8646 23.3638 22.1882C24.6138 22.5124 25.6645 23.3581 26.2479 24.5104L29.6463 31.7494C29.5623 32.0612 29.4959 32.3776 29.4478 32.6973L28.7453 32.2279C28.2974 31.929 27.7134 31.929 27.2655 32.2279L23.9998 34.3997L21.0428 32.4264L20.757 32.0684L24.1945 29.4108L22.5623 27.3014L19.0962 29.9824L18.8 29.6133C17.9517 28.6133 17.5688 27.2995 17.7466 26Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 80,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M5.51375 76.6744C6.52677 78.718 8.61401 80.0078 10.8946 80C11.8289 79.9986 12.7494 79.7812 13.5854 79.3652L14.6667 78.8242L15.7494 79.3652C16.5847 79.7812 17.5053 79.9986 18.4389 80C20.7201 80.0078 22.8067 78.718 23.8204 76.6744L24.2852 75.7415C25.8464 72.6087 26.6615 69.1575 26.6667 65.6575C26.6622 61.7981 23.5352 58.6712 19.6759 58.6666C18.3751 58.6705 17.101 59.0397 16.0001 59.733V58.6666C16.0001 55.7213 13.6121 53.3333 10.6667 53.3333V55.9999C12.1394 55.9999 13.3334 57.194 13.3334 58.6666V59.733C12.2325 59.0397 10.9584 58.6705 9.65763 58.6666C5.79826 58.6712 2.67131 61.7981 2.66675 65.6575C2.67131 69.1582 3.48641 72.6106 5.04826 75.7441L5.51375 76.6744ZM9.65763 61.3333C10.8048 61.33 11.9057 61.7864 12.7149 62.6002L13.724 63.6093C14.2449 64.1295 15.0886 64.1295 15.6095 63.6093L16.6186 62.6002C17.8556 61.3632 19.7149 60.9934 21.3308 61.6627C22.9467 62.332 24.0001 63.9088 24.0001 65.6575C23.9968 68.7447 23.2781 71.789 21.8998 74.552L21.435 75.4856C20.8692 76.6217 19.7078 77.3378 18.4389 77.3333C17.9194 77.3326 17.407 77.2115 16.9415 76.9798L15.2631 76.1399C14.8875 75.9524 14.446 75.9524 14.071 76.1399L12.3933 76.9798C11.9278 77.2115 11.4148 77.3326 10.8946 77.3333C9.62508 77.3372 8.46297 76.6191 7.89852 75.4811L7.43368 74.5481C6.05607 71.7864 5.33732 68.7434 5.33341 65.6575C5.33667 63.2708 7.27092 61.3365 9.65763 61.3333Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 81,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("clipPath", { id: "clip0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("rect", { width: "80", height: "80", fill: "white" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this), Category7 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { width: "28", height: "28", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("g", { clipPath: "url(#clip0)", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M28.475 41.8208C23.115 41.8208 14.5166 47.125 10.8875 49.7771L12.1437 51.4521L14.2375 52.7083L16.75 55.6396L19.2625 58.1521L21.3562 62.3396L24.7062 64.8521C27.0791 65.1312 31.9087 65.6896 32.2437 65.6896C32.5787 65.6896 37.6875 65.1312 40.2 64.8521L44.8062 63.5958C45.2249 62.7583 46.2299 60.9996 46.9 60.6646C47.57 60.3296 47.7374 58.85 47.7374 58.1521L50.6687 55.6396C51.227 54.9416 52.0087 53.5458 50.6687 53.5458C49.3287 53.5458 44.2479 45.7291 41.875 41.8208H38.1062H28.475Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 94,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M53.1812 27.5833C53.4604 26.4666 54.0187 24.0658 54.0187 23.3958L55.6937 25.4896L58.625 26.3271H62.8125L64.9062 29.2583V32.6083V33.8646H62.8125H59.8812H55.6937H51.9249L48.9937 32.6083L50.6687 31.3521L53.1812 30.0958V27.5833Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 95,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M54.7167 22H50.9201C49.4027 21.9989 47.9114 22.398 46.5974 23.157C46.4109 23.2077 46.2413 23.307 46.105 23.4438L46.0412 23.5076C45.1285 24.1341 44.3444 24.9302 43.7321 25.8527C43.4137 26.3304 43.5091 26.9716 43.9529 27.3352C44.3968 27.6995 45.0445 27.6679 45.4507 27.2616L47.1143 25.5981L52.4746 28.278V29.224L48.9098 31.6034C47.8242 32.3237 46.3809 32.1814 45.4573 31.2616C45.177 30.9715 44.7615 30.8548 44.3711 30.9573C43.9807 31.0593 43.676 31.3641 43.574 31.7545C43.4715 32.1449 43.5882 32.5604 43.8782 32.8406C45.514 34.4851 47.7397 35.4071 50.0592 35.4H55.8333V37.6333H53.6C50.5068 37.6432 47.7097 39.4763 46.4665 42.3088C45.4851 41.9212 44.4867 41.5864 43.4753 41.2903C44.8101 40.1677 45.0598 38.2086 44.05 36.7871C43.0402 35.3651 41.1084 34.9556 39.6084 35.846C38.109 36.7364 37.5436 38.629 38.3085 40.196C35.1123 39.7467 31.8681 39.7571 28.6751 40.2276C28.9074 39.7696 29.0301 39.2636 29.0333 38.75C29.0431 37.1851 27.9679 35.822 26.4434 35.4665C24.9189 35.1116 23.3524 35.8591 22.6692 37.2675C21.986 38.6759 22.3693 40.3688 23.5918 41.3465C22.5722 41.6534 21.5705 42.016 20.5765 42.4173C19.3606 39.5275 16.5352 37.6442 13.4 37.6333H11.1667V35.4H16.9408C19.2609 35.4071 21.4871 34.4845 23.1229 32.8395C23.546 32.4011 23.54 31.7049 23.1092 31.2741C22.6785 30.8434 21.9822 30.8374 21.5438 31.2605C20.6202 32.1803 19.1764 32.3237 18.0902 31.6034L14.5167 29.2191V28.2736L19.8764 25.5932L21.5405 27.2573C21.9468 27.6629 22.594 27.6951 23.0383 27.3309C23.4822 26.9672 23.5776 26.3255 23.2592 25.8478C22.6469 24.9258 21.8628 24.1297 20.95 23.5032L20.8862 23.4395C20.7499 23.3026 20.5798 23.2034 20.3939 23.1527C19.0815 22.3969 17.594 21.9995 16.0799 22H12.2833C5.50264 22.0082 0.00817872 27.5026 0 34.2833V38.75C0.00490722 43.0651 3.50158 46.5618 7.81667 46.5667H13.038L9.42787 48.9887C9.12362 49.1931 8.93933 49.5334 8.93388 49.8998C8.92843 50.2662 9.10291 50.6113 9.40116 50.8245L9.69286 51.0333H6.0457L1.90618 46.8938L0.327148 48.4729L4.79382 52.9395C5.00319 53.1489 5.28726 53.2667 5.58333 53.2667H12.8182L14.1426 54.2127C14.6879 54.6074 15.207 55.0371 15.696 55.5H12.2833C12.1634 55.5 12.0445 55.5191 11.9306 55.5567L5.88486 57.567L1.90618 53.5938L0.327148 55.1729L4.79382 59.6395C5.00319 59.8489 5.28726 59.9667 5.58333 59.9667C5.70329 59.9667 5.82215 59.9471 5.93611 59.91L12.4644 57.7333H17.6835C18.0635 58.2491 18.4119 58.7879 18.7265 59.3456L19.0706 59.9667H15.6333C15.5134 59.9667 15.3945 59.9858 15.2806 60.0234L8.58056 62.2567C8.27904 62.3587 8.03531 62.5839 7.91045 62.8767L4.56045 70.6933L6.61276 71.5734L9.76538 64.218L15.8144 62.2H20.311L20.5602 62.6466C20.9293 63.3058 21.3922 63.9077 21.9348 64.4333H16.75C13.6677 64.4372 11.1705 66.9344 11.1667 70.0167V73.3667C11.1705 77.0656 14.1677 80.0629 17.8667 80.0667C20.3334 80.0667 22.3333 78.0667 22.3333 75.6C22.3333 73.1333 20.3334 71.1333 17.8667 71.1333H21.2167C23.8846 71.1295 26.1773 69.2386 26.6882 66.6198C26.9205 66.64 27.1528 66.6667 27.3883 66.6667H40.0233C40.1209 66.6667 40.2147 66.6476 40.3107 66.6443C40.8347 69.2517 43.1236 71.129 45.7833 71.1333H49.1333C46.6666 71.1333 44.6667 73.1333 44.6667 75.6C44.6667 78.0667 46.6666 80.0667 49.1333 80.0667C52.8323 80.0629 55.8295 77.0656 55.8333 73.3667V70.0167C55.8295 66.9344 53.3323 64.4372 50.25 64.4333H45.4731C46.1307 63.7889 46.6683 63.0326 47.0608 62.2H51.1856L57.2379 64.218L60.3905 71.5734L62.4428 70.6933L59.0928 62.8767C58.968 62.5839 58.7242 62.3587 58.4227 62.2567L51.7227 60.0234C51.6082 59.9852 51.4877 59.9661 51.3667 59.9667H48.0712C48.4676 59.1848 48.9294 58.4373 49.4518 57.7333H54.5356L61.0639 59.91C61.1778 59.9471 61.2967 59.9667 61.4167 59.9667C61.7127 59.9667 61.9968 59.8489 62.2062 59.6395L66.6729 55.1729L65.0938 53.5938L61.1151 57.5725L55.0694 55.5627C54.956 55.5229 54.8366 55.5016 54.7167 55.5H51.4915C51.8492 55.1761 52.2167 54.8626 52.6082 54.5709L54.3437 53.2667H61.4167C61.7127 53.2667 61.9968 53.1489 62.2062 52.9395L66.6729 48.4729L65.0938 46.8938L60.9543 51.0333H57.3219L57.6201 50.8098C57.9042 50.5971 58.0705 50.2618 58.0672 49.9063C58.0639 49.5514 57.8922 49.2188 57.6043 49.011L54.2221 46.5667H59.1833C63.4984 46.5618 66.9951 43.0651 67 38.75V34.2833C66.9918 27.5026 61.4974 22.0082 54.7167 22ZM14.5167 24.2333H16.0799C16.5079 24.2333 16.9348 24.2759 17.3541 24.3604L14.5167 25.7764V24.2333ZM13.4 70.0167C13.4016 68.5974 14.2958 67.3324 15.6333 66.8575V71.1333H13.4V70.0167ZM20.1 75.6C20.1 76.8334 19.1 77.8334 17.8667 77.8334C15.4 77.8334 13.4 75.8334 13.4 73.3667H17.8667C19.1 73.3667 20.1 74.3667 20.1 75.6ZM41.3167 37.6333C41.9333 37.6333 42.4333 38.1333 42.4333 38.75C42.4333 39.3667 41.9333 39.8667 41.3167 39.8667C40.7 39.8667 40.2 39.3667 40.2 38.75C40.2 38.1333 40.7 37.6333 41.3167 37.6333ZM25.6833 37.6333C26.3 37.6333 26.8 38.1333 26.8 38.75C26.8 39.3667 26.3 39.8667 25.6833 39.8667C25.0667 39.8667 24.5667 39.3667 24.5667 38.75C24.5667 38.1333 25.0667 37.6333 25.6833 37.6333ZM8.93333 38.75V44.3333H7.81667C4.73438 44.3295 2.23715 41.8323 2.23333 38.75V35.4H8.93333V38.75ZM2.29495 33.1667C2.86964 28.0828 7.16728 24.2393 12.2833 24.2333V29.8167C12.2833 30.1902 12.4698 30.5386 12.7801 30.7458L16.4152 33.1667H2.29495ZM11.1667 44.3333V39.8667H13.4C15.6513 39.8727 17.6791 41.2298 18.5422 43.3094C17.8765 43.6289 17.2211 43.9702 16.5761 44.3333H11.1667ZM21.2167 68.9H17.8667V66.6667H24.3758C23.9009 68.0042 22.6359 68.8984 21.2167 68.9ZM51.3667 70.0167V66.8575C52.7042 67.3324 53.5984 68.5974 53.6 70.0167V71.1333H51.3667V70.0167ZM53.6 73.3667C53.6 75.8334 51.6 77.8334 49.1333 77.8334C47.9 77.8334 46.9 76.8334 46.9 75.6C46.9 74.3667 47.9 73.3667 49.1333 73.3667H53.6ZM49.1333 66.6667V68.9H45.7833C44.3641 68.8984 43.0991 68.0042 42.6242 66.6667H49.1333ZM55.0662 49.9336L51.2696 52.7841C48.539 54.8304 46.4518 57.6156 45.255 60.8107C44.4317 62.9868 42.3499 64.4279 40.0233 64.4333H27.3916C25.3644 64.4328 23.4963 63.3336 22.5122 61.5615L20.6785 58.2606C19.3868 55.9428 17.5979 53.9401 15.4403 52.3959L12.0107 49.9456L15.4414 47.6441C26.8044 40.0193 41.7142 40.28 52.8039 48.2973L55.0662 49.9336ZM55.8333 44.3333H50.6966C49.9774 43.9304 49.2478 43.5536 48.5068 43.202C49.3956 41.1813 51.3923 39.8738 53.6 39.8667H55.8333V44.3333ZM49.6513 24.3604C50.0712 24.2759 50.4975 24.2333 50.9256 24.2333H52.4833V25.7764L49.6513 24.3604ZM64.7667 38.75C64.7628 41.8323 62.2656 44.3295 59.1833 44.3333H58.0667V35.4H64.7667V38.75ZM56.95 33.1667H50.5848L54.2161 30.7458C54.528 30.5391 54.7161 30.1907 54.7167 29.8167V24.2333C59.8327 24.2393 64.1304 28.0828 64.7051 33.1667H56.95Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 96,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M27.5895 49.1272L26.0105 50.7062L28.571 53.2667L26.0105 55.8272L27.5895 57.4062L30.9395 54.0562C31.3752 53.62 31.3752 52.9134 30.9395 52.4772L27.5895 49.1272Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 97,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M39.4106 49.1272L36.0606 52.4772C35.625 52.9134 35.625 53.62 36.0606 54.0562L39.4106 57.4062L40.9897 55.8272L38.4292 53.2667L40.9897 50.7062L39.4106 49.1272Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M26.2183 12.7063L22.2688 8.01378L24.6537 8.27002L26.5898 8.38526L27.9103 7.32093L29.8207 5.94884L31.449 5.4743L32.0646 6.65386L32.0903 8.14119L32.7059 9.32075L36.1551 10.8976L38.7067 12.1924L40.5018 12.7564L41.8482 13.1794L42.1559 13.7692L41.7329 15.1155L41.3099 16.4618L41.0279 17.3594L39.6816 16.9364L38.0017 14.4362L26.2183 12.7063Z", fill: "#FDC040" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 99,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M46.8434 10.3013C45.6469 10.1505 44.4396 10.4845 43.4907 11.2291L41.9009 12.4698C41.3495 12.4002 40.8041 12.2887 40.2697 12.1365L41.2407 10.3726C41.3291 10.2121 41.3322 10.0179 41.2484 9.85457C41.1646 9.69149 41.0052 9.58067 40.8232 9.55876C39.3587 9.37813 37.5462 10.2425 36.8599 10.609C35.6138 9.91624 34.2965 9.36065 32.931 8.95159L32.4038 5.58945C32.3593 5.30371 32.1016 5.101 31.8132 5.12485C29.3458 5.30886 27.1445 7.06206 26.4034 7.71429C19.6352 7.14781 14.2424 8.83618 13.8835 11.7461C13.5018 14.8407 18.9724 17.9761 26.3379 18.8846C27.1207 18.9811 27.8954 19.0412 28.6609 19.08C30.0597 20.4259 31.8672 21.2674 33.7976 21.4715C33.9877 21.4961 34.1767 21.4201 34.2971 21.2711C34.4175 21.1221 34.4518 20.9209 34.3878 20.7405L33.7281 18.881C34.1285 18.8235 34.5154 18.7556 34.8883 18.6774C35.9151 19.8947 37.2067 20.8608 38.6645 21.5018C38.8357 21.5677 39.0288 21.5441 39.1791 21.4386C39.3294 21.3332 39.4175 21.1601 39.4138 20.9765L39.3557 17.8445C39.9214 17.8307 40.4877 17.8563 41.0503 17.9211L41.2259 17.9428L42.4666 19.5326C43.2061 20.4855 44.296 21.1028 45.4933 21.2472C45.7956 21.2845 46.0709 21.0697 46.1081 20.7674L47.3232 10.9161C47.3605 10.6139 47.1457 10.3386 46.8434 10.3013ZM39.8032 10.6926L39.2046 11.7799C38.8158 11.6286 38.428 11.4554 38.0413 11.2604C38.6041 11.0021 39.1955 10.8116 39.8032 10.6926ZM31.3948 6.28894L31.76 8.6205C30.5101 8.29732 29.2414 8.05185 27.9612 7.88581C28.9761 7.11027 30.1477 6.56541 31.3948 6.28894ZM30.4689 19.1236C31.2045 19.1159 31.9137 19.0739 32.6009 19.0103L33.0284 20.216C32.118 20.0045 31.2517 19.6347 30.4689 19.1236ZM36.1047 18.3703C36.1822 18.347 36.2667 18.3284 36.3424 18.3044C36.9634 18.1124 37.6015 17.9808 38.2479 17.9116L38.2899 20.1065C37.4827 19.6344 36.7469 19.0499 36.1047 18.3703ZM41.0402 16.8086C39.3501 16.5985 37.6347 16.75 36.0076 17.253C33.5903 18.0246 30.1912 18.2231 26.66 17.8087C27.1425 17.6097 27.5851 17.3254 27.9665 16.9696L28.7631 16.2228C28.9204 16.0761 28.978 15.8515 28.9106 15.6473C28.8436 15.4432 28.6638 15.2968 28.4504 15.2721L24.072 14.732L23.937 15.8266L27.1446 16.2223C25.9919 17.2556 24.263 17.3104 23.0472 16.3517L22.5267 17.0171C22.0162 16.8803 21.5156 16.7309 21.0305 16.5704L22.0528 15.457C23.0923 14.3252 23.3614 12.6848 22.7381 11.2804L22.3137 10.3241L21.3063 10.771L21.7301 11.7277C22.1753 12.7308 21.9833 13.9028 21.2409 14.7111L19.9028 16.1674C16.9252 15.0155 14.7845 13.4503 14.9781 11.8811C14.9949 11.7709 15.0238 11.6624 15.0645 11.5583L16.7117 13.1413L17.4766 12.3466L15.7212 10.6578C17.409 9.16789 21.8177 8.23307 27.5643 8.94186C31.0961 9.37747 34.3796 10.3869 36.5734 11.7104C38.0621 12.6293 39.7182 13.2446 41.4457 13.5206L41.0402 16.8086ZM45.9586 12.9703L44.3167 12.7678L44.1817 13.8624L45.8236 14.0649L45.6886 15.1595L44.0467 14.957L43.9117 16.0516L45.5536 16.2541L45.4186 17.3487L43.7767 17.1461L43.6417 18.2407L45.2836 18.4433L45.0864 20.0418C44.3919 19.8412 43.7793 19.4254 43.3359 18.8542L42.0952 17.2643L42.5794 13.3392L44.1692 12.0985C44.7381 11.6523 45.4333 11.3979 46.1558 11.3717L45.9586 12.9703Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 100,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M19.5532 10.8248C19.4786 11.4292 18.9281 11.8589 18.3236 11.7843C17.7191 11.7098 17.2895 11.1592 17.364 10.5547C17.4386 9.95025 17.9891 9.52059 18.5936 9.59515C19.1981 9.66971 19.6278 10.2203 19.5532 10.8248Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 101,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M24.4114 11.9796L39.1884 13.8022L39.0534 14.8968L24.2764 13.0742L24.4114 11.9796Z", fill: "#3BB77E" }, void 0, !1, {
      fileName: "app/icons/CategoryIcon.tsx",
      lineNumber: 102,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("clipPath", { id: "clip0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("rect", { width: "80", height: "80", fill: "white" }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/icons/CategoryIcon.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/icons/CategoryIcon.tsx",
  lineNumber: 92,
  columnNumber: 5
}, this);

// app/components/Category.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), CATEGORY_ICON = [
  { Icon: Category1 },
  { Icon: Category2 },
  { Icon: Category3 },
  { Icon: Category4 },
  { Icon: Category5 },
  { Icon: Category6 },
  { Icon: Category7 }
], Category = ({ categorys, language, countrySlug }) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "p-6 rounded-2xl bg-white mt-10 lg:mt-0", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { className: "text-xl font-bold pb-4 border-b", children: lang.category[`category${language}`] }, void 0, !1, {
    fileName: "app/components/Category.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex flex-col mt-4", children: categorys.map((category) => {
    var _a;
    let Icon = (_a = CATEGORY_ICON == null ? void 0 : CATEGORY_ICON[(Number(category == null ? void 0 : category.typeId) - 1) % CATEGORY_ICON.length]) == null ? void 0 : _a.Icon;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      import_react28.NavLink,
      {
        to: `/${countrySlug}/${category.slug}`,
        className: ({ isActive }) => `flex items-center py-4 px-2 border rounded-[10px] mb-2 ${isActive ? "bg-[#e6f0e9]" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(Icon, {}, void 0, !1, {
            fileName: "app/components/Category.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex flex-1 items-center justify-between ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { children: category[`name${language}`] }, void 0, !1, {
              fileName: "app/components/Category.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("span", { className: "flex items-center justify-center w-6 h-6 text-[14px] bg-[#BCE3C9] rounded-full", children: category.restaurantCount }, void 0, !1, {
              fileName: "app/components/Category.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Category.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ]
      },
      category.typeId,
      !0,
      {
        fileName: "app/components/Category.tsx",
        lineNumber: 42,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/components/Category.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Category.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this);

// app/routes/viet-nam.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), loader16 = async ({ request }) => {
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), types = await getTypeWithRestaurantCount({});
  return (0, import_node19.json)({ user, types, language });
}, meta10 = ({ data }) => [
  {
    title: `${lang.restaurantVie[`restaurantVie${data == null ? void 0 : data.language}`]}`
  },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng Vi\u1EC7t Nam t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function KoreaIndexPage() {
  let { user, types, language } = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "lg:w-[30%] overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        Category,
        {
          countrySlug: "viet-nam",
          language,
          categorys: types
        },
        void 0,
        !1,
        {
          fileName: "app/routes/viet-nam.tsx",
          lineNumber: 47,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/viet-nam.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_react29.Outlet, {}, void 0, !1, {
        fileName: "app/routes/viet-nam.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/viet-nam.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/viet-nam.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action8,
  loader: () => loader17
});
var import_node20 = require("@remix-run/node");
var action8 = async ({ request }) => logout(request), loader17 = async () => (0, import_node20.redirect)("/");

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action9,
  default: () => SignUpPage,
  loader: () => loader18,
  meta: () => meta11
});
var import_node21 = require("@remix-run/node"), import_react32 = require("@remix-run/react"), import_react33 = require("react");

// app/utils.ts
var import_react30 = require("@remix-run/react"), import_react31 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function validateUsername(username) {
  return typeof username == "string" && username.length > 6;
}

// app/routes/signup.tsx
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  if (await getUserId(request))
    return (0, import_node21.redirect)("/");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node21.json)({ language });
}, action9 = async ({ request }) => {
  let formData = await request.formData(), username = formData.get("username"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember"), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  if (!validateUsername(username))
    return (0, import_node21.json)(
      { errors: { username: lang.errorLogin.error1[`error1${language}`], password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node21.json)(
      { errors: { username: null, password: lang.errorLogin.error3[`error3${language}`] } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node21.json)(
      { errors: { username: null, password: lang.errorLogin.error4[`error4${language}`] } },
      { status: 400 }
    );
  if (await getUserByUsername(username))
    return (0, import_node21.json)(
      {
        errors: {
          username: `${lang.errorLogin.error51[`error51${language}`]} ${username} ${lang.errorLogin.error52[`error52${language}`]}`,
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser({ username, password });
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node21.json)(
    {
      errors: {
        username: null,
        password: lang.errorLogin.error6[`error6${language}`]
      }
    },
    { status: 400 }
  );
}, meta11 = ({ data }) => [{ title: `${lang.signup[`signup${data == null ? void 0 : data.language}`]}` }];
function SignUpPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react32.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/", { language } = (0, import_react32.useLoaderData)(), actionData = (0, import_react32.useActionData)(), usernameRef = (0, import_react33.useRef)(null), passwordRef = (0, import_react33.useRef)(null);
  return (0, import_react33.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.username ? (_b2 = usernameRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex h-screen flex-col items-center justify-center bg-[#e5eeec]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "mx-auto w-full max-w-md p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "bg-white p-8 rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h3", { className: "font-bold mb-4 text-xl text-[#1ec28b]", children: lang.signupTitle[`signupTitle${language}`] }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react32.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          "label",
          {
            htmlFor: "username",
            className: "block text-sm font-semibold text-gray-700",
            children: lang.username[`username${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 119,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
            "input",
            {
              ref: usernameRef,
              id: "username",
              required: !0,
              autoFocus: !0,
              name: "username",
              type: "username",
              autoComplete: "username",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.username ? !0 : void 0,
              "aria-describedby": "username-error",
              className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 126,
              columnNumber: 17
            },
            this
          ),
          ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "pt-1 text-red-700", id: "username-error", children: actionData.errors.username }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-semibold text-gray-700",
            children: lang.password[`password${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 147,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: "password",
              autoComplete: "current-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 154,
              columnNumber: 17
            },
            this
          ),
          ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 165,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("button", { type: "submit", className: "w-full justify-center p-2 rounded-2xl text-white uppercase font-bold bg-[#1ec28b] hover:scale-105 hover:bg-[#0ea16f] transition-all", children: lang.signup[`signup${language}`] }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "mt-3 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("span", { children: [
        lang.signupSubTitle[`signupSubTitle${language}`],
        "?"
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react32.Link, { to: "/login", className: "ml-2 text-[#1ec28b] font-semibold hover:text-[#0ea16f]", children: lang.login[`login${language}`] }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => HomePage,
  loader: () => loader19,
  meta: () => meta12
});
var import_node22 = require("@remix-run/node"), import_react35 = require("@remix-run/react"), import_react36 = require("react");

// app/components/Slide.tsx
var import_react34 = require("@remix-run/react"), import_react_slick2 = __toESM(require("react-slick"));
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function SimpleSlider({ restaurants, language }) {
  var settings = {
    dots: !0,
    infinite: !0,
    speed: 500,
    autoplay: !0,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react_slick2.default, { ...settings, className: "", children: restaurants && restaurants.map(
    (restaurant) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        import_react34.Link,
        {
          to: createRestaurantSlug({
            countrySlug: restaurant.countryType.country.slug,
            typeSlug: restaurant.countryType.type.slug,
            id: restaurant.id
          }),
          className: "h-[200px] md:h-[340px] rounded-2xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "div",
            {
              style: {
                backgroundImage: `url(${((_a = restaurant.images[0]) == null ? void 0 : _a.url) || ""})`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "10px",
                position: "relative"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "absolute z-10 bg-white left-1 right-1 bottom-1 py-2 px-4 rounded-xl lg:inline-block lg:right-[60%] md:p-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                    "img",
                    {
                      src: "https://www.svgrepo.com/show/2732/restaurant.svg",
                      alt: "Restaurant",
                      className: "w-6 h-6"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Slide.tsx",
                      lineNumber: 53,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "ml-2 flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "uppercase text-xs font-bold", children: `${lang.restaurant[`restaurant${language}`]}` }, void 0, !1, {
                      fileName: "app/components/Slide.tsx",
                      lineNumber: 59,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h3", { className: "font-bold", children: restaurant[`name${language}`] }, void 0, !1, {
                      fileName: "app/components/Slide.tsx",
                      lineNumber: 62,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 58,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Slide.tsx",
                  lineNumber: 52,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "hidden items-center text-sm mb-1 md:flex", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(MapPinIcon, {}, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 74,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { children: restaurant[`address${language}`] }, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 77,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Slide.tsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "hidden items-center text-xs font-semibold md:flex", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { className: "text-[#1ec28b] mr-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ClockIcon, {}, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 80,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { children: `${lang.open[`open${language}`]}: ${restaurant.openingTime}H - ${lang.close[`close${language}`]}: ${restaurant.closingTime}H` }, void 0, !1, {
                    fileName: "app/components/Slide.tsx",
                    lineNumber: 83,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Slide.tsx",
                  lineNumber: 79,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Slide.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Slide.tsx",
              lineNumber: 39,
              columnNumber: 13
            },
            this
          )
        },
        restaurant.id,
        !1,
        {
          fileName: "app/components/Slide.tsx",
          lineNumber: 30,
          columnNumber: 7
        },
        this
      );
    }
  ) }, void 0, !1, {
    fileName: "app/components/Slide.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/icons/BuildingIcon.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), BuildingIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/BuildingIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/BuildingIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/routes/_index.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), loader19 = async ({ request }) => {
  let user = await getUser(request), topRestaurants = await getTopRestaurantsByRating({}), listRestaurants = await getRestaurantsList(), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node22.json)({ user, language, topRestaurants, listRestaurants });
}, meta12 = ({ data }) => [
  // { title: ${lang.homePage[homePage${data?.language as Language}`]}` },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c v\xE0 Vi\u1EC7t Nam t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function HomePage() {
  let { user, language, topRestaurants, listRestaurants } = (0, import_react35.useLoaderData)(), [data, setData] = (0, import_react36.useState)([]);
  (0, import_react36.useEffect)(() => {
    user && fetch(`http://127.0.0.1:8080/${user.id}`).then((response) => response.json()).then((data2) => setData(data2)).catch((error) => console.error(error));
  });
  let predictRes = listRestaurants.filter((item) => data == null ? void 0 : data.includes(item == null ? void 0 : item.id));
  return console.log("topRestaurants", topRestaurants), /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:overflow-y-auto md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex flex-col lg:w-[60%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "mb-6 md:mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h1", { className: "text-4xl font-bold", children: lang.hello[`hello${language}`] }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              "img",
              {
                src: "https://cdn-icons-png.flaticon.com/512/7496/7496766.png",
                alt: "Hand Wave",
                className: "ml-2 w-12 h-12"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 70,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-gray-500", children: lang.welcome[`welcome${language}`] }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(SimpleSlider, { restaurants: topRestaurants, language }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex pt-6 pb-4 md:flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "p-1 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
            import_react35.Link,
            {
              to: "/viet-nam",
              title: lang.countryVN[`countryVN${language}`],
              className: "flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/BanhMy.jpg')] md:h-[200px] lg:h-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-[14px] text-gray-200", children: lang.titleToCountry[`titleToCountry${language}`] }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 88,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h4", { className: "text-xl font-semibold text-slate-300", children: lang.countryVN[`countryVN${language}`] }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 91,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "p-1 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
            import_react35.Link,
            {
              to: "/korea",
              title: lang.countryKO[`countryKO${language}`],
              className: "flex flex-col justify-start p-2 h-[180px] rounded-xl bg-cover bg-center bg-no-repeat w-full bg-[url('../app/assets/images/ChaCa.jpg')] md:h-[200px] lg:h-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-[14px] text-gray-200", children: lang.titleToCountry[`titleToCountry${language}`] }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 102,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h4", { className: "text-xl font-semibold text-slate-300", children: lang.countryKO[`countryKO${language}`] }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 105,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 97,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full py-4 px-1 lg:px-6 lg:h-[50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h2", { className: "text-xl font-bold mr-2", children: lang.bestResttaurant[`bestResttaurant${language}`] }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 119,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(BuildingIcon, {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 123,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 122,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-sm", children: lang.subBestResttaurant[`subBestResttaurant${language}`] }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 126,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 19
          }, this),
          topRestaurants.map((restaurant) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              ItemRestaurant,
              {
                url: createRestaurantSlug({
                  countrySlug: restaurant.countryType.country.slug,
                  typeSlug: restaurant.countryType.type.slug,
                  id: restaurant.id
                }),
                name: restaurant[`name${language}`],
                image: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0,
                rating: restaurant.rating || 0,
                address: restaurant[`address${language}`]
              },
              restaurant.id,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 131,
                columnNumber: 21
              },
              this
            );
          })
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        user && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "w-full py-4 px-1 lg:px-6 lg:h-[50%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "bg-white rounded-2xl md:max-h-[calc(100%)] md:overflow-hidden md:overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "p-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("h2", { className: "text-xl font-bold mr-2", children: lang.predictResttaurant[`predictResttaurant${language}`] }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 153,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("span", { className: "text-[#1ec28b]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(BuildingIcon, {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 157,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 156,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "text-sm", children: lang.subPredictResttaurant[`subPredictResttaurant${language}`] }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this),
          predictRes == null ? void 0 : predictRes.map((restaurant) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
              ItemRestaurant,
              {
                url: createRestaurantSlug({
                  countrySlug: restaurant.countryType.country.slug,
                  typeSlug: restaurant.countryType.type.slug,
                  id: restaurant.id
                }),
                name: restaurant[`name${language}`],
                image: ((_a = restaurant.images[0]) == null ? void 0 : _a.url) || void 0,
                rating: restaurant.rating || 0,
                address: restaurant[`address${language}`]
              },
              restaurant.id,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 169,
                columnNumber: 23
              },
              this
            );
          })
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 150,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 149,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => AdminPage,
  loader: () => loader20
});
var import_node23 = require("@remix-run/node"), import_react37 = require("@remix-run/react");

// app/icons/BriefcaseIcon.tsx
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), BriefcaseIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/BriefcaseIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/BriefcaseIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/RestaurantIcon.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), RestaurantIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/RestaurantIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/RestaurantIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/icons/PhotoIcon.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), PhotoIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/icons/PhotoIcon.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/icons/PhotoIcon.tsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
);

// app/routes/admin.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), loader20 = async ({ request }) => {
  await requireManagerUser(request);
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node23.json)({ user, language });
};
function AdminPage() {
  let { user, language } = (0, import_react37.useLoaderData)(), userRole = user.role, SIDEBAR_LIST = [
    {
      name: "Lo\u1EA1i nh\xE0 h\xE0ng",
      url: "category",
      Icon: BriefcaseIcon,
      isShow: userRole > 1
    },
    {
      name: "Nh\xE0 h\xE0ng",
      url: "restaurant",
      Icon: RestaurantIcon,
      isShow: userRole > 0
    },
    {
      name: "\u1EA2nh",
      url: "images",
      Icon: PhotoIcon,
      isShow: userRole > 0
    }
  ].filter((it) => it.isShow);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "lg:w-[20%]", children: SIDEBAR_LIST.map(({ name, url, Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
        import_react37.NavLink,
        {
          to: url,
          className: ({ isActive }) => `flex p-3 mb-1 rounded-md hover:no-underline hover:bg-[#1ec28b] hover:text-white ${isActive ? "bg-[#1ec28b] text-white" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(Icon, {}, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { className: "ml-2", children: name }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this)
          ]
        },
        url,
        !0,
        {
          fileName: "app/routes/admin.tsx",
          lineNumber: 60,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react37.Outlet, {}, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/korea.tsx
var korea_exports = {};
__export(korea_exports, {
  default: () => KoreaIndexPage2,
  loader: () => loader21,
  meta: () => meta13
});
var import_node24 = require("@remix-run/node"), import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), loader21 = async ({ request }) => {
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader), types = await getTypeWithRestaurantCount({ countryId: "2" });
  return (0, import_node24.json)({ user, types, language });
}, meta13 = ({ data }) => [
  {
    title: `${lang.restaurantKor[`restaurantKor${data == null ? void 0 : data.language}`]}`
  },
  {
    name: "description",
    content: "Gi\u1EDBi thi\u1EC7u v\u1EC1 nh\xE0 h\xE0ng H\xE0n Qu\u1ED1c t\u1EA1i \u0110\xE0 N\u1EB5ng"
  }
];
function KoreaIndexPage2() {
  let { user, types, language } = (0, import_react38.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Container, { customClass: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Sidebar, { user, langType: language }, void 0, !1, {
      fileName: "app/routes/korea.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "w-full md:w-[calc(100%-200px)] md:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "h-full rounded-[10px] p-2 bg-[#f5f9f8] md:p-6 md:rounded-[40px] lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "lg:w-[30%] overflow-y-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
        Category,
        {
          countrySlug: "korea",
          language,
          categorys: types
        },
        void 0,
        !1,
        {
          fileName: "app/routes/korea.tsx",
          lineNumber: 47,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/korea.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react38.Outlet, {}, void 0, !1, {
        fileName: "app/routes/korea.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/korea.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/korea.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/korea.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action10,
  default: () => LoginPage,
  loader: () => loader22,
  meta: () => meta14
});
var import_node25 = require("@remix-run/node"), import_react39 = require("@remix-run/react"), import_react40 = require("react");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), loader22 = async ({ request }) => {
  if (await getUserId(request))
    return (0, import_node25.redirect)("/");
  let cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node25.json)({ language });
}, action10 = async ({ request }) => {
  let formData = await request.formData(), username = formData.get("username"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember"), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  if (!validateUsername(username))
    return (0, import_node25.json)(
      { errors: { username: lang.errorLogin.error1[`error1${language}`], password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node25.json)(
      { errors: { username: null, password: lang.errorLogin.error3[`error3${language}`] } },
      { status: 400 }
    );
  let user = await verifyLogin(username, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node25.json)(
    { errors: { username: lang.errorLogin.error2[`error2${language}`], password: null } },
    { status: 400 }
  );
}, meta14 = ({ data }) => [{ title: `${lang.login[`login${data == null ? void 0 : data.language}`]}` }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react39.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/", actionData = (0, import_react39.useActionData)(), { language } = (0, import_react39.useLoaderData)(), usernameRef = (0, import_react40.useRef)(null), passwordRef = (0, import_react40.useRef)(null);
  return (0, import_react40.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.username ? (_b2 = usernameRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex h-screen flex-col items-center justify-center bg-[#e5eeec]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "mx-auto w-full max-w-md p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "bg-white p-8 rounded-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "font-bold mb-4 text-xl text-[#1ec28b]", children: lang.loginTitle[`loginTitle${language}`] }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react39.Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "label",
          {
            htmlFor: "username",
            className: "block text-sm font-semibold text-gray-700",
            children: lang.username[`username${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
            "input",
            {
              ref: usernameRef,
              id: "username",
              required: !0,
              autoFocus: !0,
              name: "username",
              type: "username",
              autoComplete: "username",
              "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.username ? !0 : void 0,
              "aria-describedby": "username-error",
              className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          ),
          ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "pt-1 text-red-700", id: "username-error", children: actionData.errors.username }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-semibold text-gray-700",
            children: lang.password[`password${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 122,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
            "input",
            {
              id: "password",
              ref: passwordRef,
              name: "password",
              type: "password",
              autoComplete: "current-password",
              "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
              "aria-describedby": "password-error",
              className: "w-full rounded outline-none border border-gray-500 px-2 py-1 text-lg focus:border-[#0ea16f]"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 129,
              columnNumber: 17
            },
            this
          ),
          ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 140,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 149,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: lang.remember[`remember${language}`]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 155,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 148,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("button", { type: "submit", className: "w-full justify-center p-2 rounded-2xl text-white uppercase font-bold bg-[#1ec28b] hover:scale-105 hover:bg-[#0ea16f] transition-all", children: lang.login[`login${language}`] }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "mt-3 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { children: [
        lang.loginSubTitle[`loginSubTitle${language}`],
        "?"
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react39.Link, { to: "/signup", className: "ml-2 text-[#1ec28b] font-semibold hover:text-[#0ea16f]", children: lang.signup[`signup${language}`] }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => Page404,
  loader: () => loader23,
  meta: () => meta15
});
var import_node26 = require("@remix-run/node"), import_react41 = require("@remix-run/react"), import_react42 = require("react");

// app/icons/ArrowLongLeft.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), ArrowLongLeft = () => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-5 h-5 rtl:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" }, void 0, !1, {
  fileName: "app/icons/ArrowLongLeft.tsx",
  lineNumber: 3,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/icons/ArrowLongLeft.tsx",
  lineNumber: 2,
  columnNumber: 5
}, this);

// app/icons/ExclamationIcon.tsx
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), ExclamationIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-8 h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }, void 0, !1, {
  fileName: "app/icons/ExclamationIcon.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/icons/ExclamationIcon.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/routes/404.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), loader23 = async ({ request }) => {
  let user = await getUser(request), cookieHeader = request.headers.get("Cookie"), language = await getLanguageCookie(cookieHeader);
  return (0, import_node26.json)({ user, language });
}, meta15 = ({ data }) => [
  { title: `${lang.page404Title[`page404Title${data == null ? void 0 : data.language}`]}` }
], goBack = () => {
  window.history.back();
};
function Page404() {
  let { language } = (0, import_react41.useLoaderData)();
  return (0, import_react42.useEffect)(() => {
    let timeout = setTimeout(() => {
      window.location.href = "/";
    }, 6e4);
    return () => clearTimeout(timeout);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "container h-screen flex items-center px-6 py-24 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "flex flex-col items-center max-w-sm mx-auto text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("p", { className: "p-3 text-sm font-medium text-yellow-500 rounded-full bg-yellow-100 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ExclamationIcon, {}, void 0, !1, {
      fileName: "app/routes/404.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/404.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("h1", { className: "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl", children: lang.page404Title[`page404Title${language}`] }, void 0, !1, {
      fileName: "app/routes/404.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("p", { className: "mt-4 text-gray-500 dark:text-gray-400", children: lang.page404SubTitle[`page404SubTitle${language}`] }, void 0, !1, {
      fileName: "app/routes/404.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        "button",
        {
          onClick: goBack,
          className: "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(ArrowLongLeft, {}, void 0, !1, {
              fileName: "app/routes/404.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { children: lang.back[`back${language}`] }, void 0, !1, {
              fileName: "app/routes/404.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/404.tsx",
          lineNumber: 55,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        import_react41.Link,
        {
          to: "/",
          className: "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600",
          children: lang.home[`home${language}`]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/404.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/404.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("p", { className: "mt-4 text-gray-500 dark:text-gray-400", children: [
      lang.page404TimeTitle[`page404TimeTitle${language}`],
      /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("span", { className: "font-medium text-blue-500 dark:text-blue-400", children: [
        " ",
        "1 ",
        lang.minute[`minute${language}`]
      ] }, void 0, !0, {
        fileName: "app/routes/404.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/404.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/404.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/404.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/404.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports2 = {};
__export(__exports2, {
  loader: () => loader24
});
var import_node27 = require("@remix-run/node"), loader24 = async ({ params }) => (0, import_node27.redirect)("/404");

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XAVVGZAW.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-PZYABHQ3.js", "/build/_shared/chunk-2IE37JYB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L7JTN6AT.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-WRAZZB3G.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, module: "/build/routes/404-IT4OTSX3.js", imports: ["/build/_shared/chunk-WLICR2AU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2HWKTGV4.js", imports: ["/build/_shared/chunk-76C3YBRW.js", "/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-DQ7TSKHG.js", "/build/_shared/chunk-P4TKK2KA.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-WLICR2AU.js", "/build/_shared/chunk-66C4EUGW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-4PKUSFUA.js", imports: ["/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-WLICR2AU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.category": { id: "routes/admin.category", parentId: "routes/admin", path: "category", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.category-LSOVV4YB.js", imports: ["/build/_shared/chunk-2ESX57M3.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-PF4WACFH.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.category.$slug": { id: "routes/admin.category.$slug", parentId: "routes/admin.category", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.category.$slug-PK3YZYGD.js", imports: ["/build/_shared/chunk-V7DWSR4B.js", "/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.images": { id: "routes/admin.images", parentId: "routes/admin", path: "images", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.images-P5OX7NRP.js", imports: ["/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.images.$restId": { id: "routes/admin.images.$restId", parentId: "routes/admin.images", path: ":restId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.images.$restId-WVHON7H6.js", imports: ["/build/_shared/chunk-O5QR3QFV.js", "/build/_shared/chunk-PF4WACFH.js", "/build/_shared/chunk-AUYLHJJM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.images.$restId.$id": { id: "routes/admin.images.$restId.$id", parentId: "routes/admin.images.$restId", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.images.$restId.$id-3YHABVH3.js", imports: ["/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-V7DWSR4B.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.restaurant": { id: "routes/admin.restaurant", parentId: "routes/admin", path: "restaurant", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.restaurant-XEO247VQ.js", imports: ["/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-PF4WACFH.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.restaurant.$id": { id: "routes/admin.restaurant.$id", parentId: "routes/admin.restaurant", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.restaurant.$id-JN3RSQFP.js", imports: ["/build/_shared/chunk-V7DWSR4B.js", "/build/_shared/chunk-2ESX57M3.js", "/build/_shared/chunk-AUYLHJJM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/favorite": { id: "routes/favorite", parentId: "root", path: "favorite", index: void 0, caseSensitive: void 0, module: "/build/routes/favorite-W3HO2VVF.js", imports: ["/build/_shared/chunk-76C3YBRW.js", "/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-P4TKK2KA.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-WLICR2AU.js", "/build/_shared/chunk-66C4EUGW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/korea": { id: "routes/korea", parentId: "root", path: "korea", index: void 0, caseSensitive: void 0, module: "/build/routes/korea-TONSGCUB.js", imports: ["/build/_shared/chunk-RY55SJEH.js", "/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-WLICR2AU.js", "/build/_shared/chunk-2ESX57M3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/korea.$slug.$restaurant": { id: "routes/korea.$slug.$restaurant", parentId: "routes/korea", path: ":slug/:restaurant", index: void 0, caseSensitive: void 0, module: "/build/routes/korea.$slug.$restaurant-42QMGDVA.js", imports: ["/build/_shared/chunk-WVSGDVWZ.js", "/build/_shared/chunk-DQ7TSKHG.js", "/build/_shared/chunk-P4TKK2KA.js", "/build/_shared/chunk-3VOIM7E7.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/korea.$slug._index": { id: "routes/korea.$slug._index", parentId: "routes/korea", path: ":slug", index: !0, caseSensitive: void 0, module: "/build/routes/korea.$slug._index-554R36FJ.js", imports: ["/build/_shared/chunk-3VOIM7E7.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-LG35DIEV.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-WLICR2AU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/schedule": { id: "routes/schedule", parentId: "root", path: "schedule", index: void 0, caseSensitive: void 0, module: "/build/routes/schedule-CSA6KDHC.js", imports: ["/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-P4TKK2KA.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-WLICR2AU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-L52Z5D4N.js", imports: ["/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-WLICR2AU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-QJ3FZVPH.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-WLICR2AU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/viet-nam": { id: "routes/viet-nam", parentId: "root", path: "viet-nam", index: void 0, caseSensitive: void 0, module: "/build/routes/viet-nam-3MXINNVG.js", imports: ["/build/_shared/chunk-RY55SJEH.js", "/build/_shared/chunk-AHWWUA6F.js", "/build/_shared/chunk-WLICR2AU.js", "/build/_shared/chunk-2ESX57M3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/viet-nam.$slug.$restaurant": { id: "routes/viet-nam.$slug.$restaurant", parentId: "routes/viet-nam", path: ":slug/:restaurant", index: void 0, caseSensitive: void 0, module: "/build/routes/viet-nam.$slug.$restaurant-4KXJEMBA.js", imports: ["/build/_shared/chunk-WVSGDVWZ.js", "/build/_shared/chunk-DQ7TSKHG.js", "/build/_shared/chunk-P4TKK2KA.js", "/build/_shared/chunk-3VOIM7E7.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/viet-nam.$slug._index": { id: "routes/viet-nam.$slug._index", parentId: "routes/viet-nam", path: ":slug", index: !0, caseSensitive: void 0, module: "/build/routes/viet-nam.$slug._index-EK6CXHFL.js", imports: ["/build/_shared/chunk-3VOIM7E7.js", "/build/_shared/chunk-UTNS66SI.js", "/build/_shared/chunk-Y6KR4CRJ.js", "/build/_shared/chunk-66C4EUGW.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "0e2622f1", hmr: { runtime: "/build/_shared\\chunk-2IE37JYB.js", timestamp: 1704855972242 }, url: "/build/manifest-0E2622F1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/viet-nam.$slug.$restaurant": {
    id: "routes/viet-nam.$slug.$restaurant",
    parentId: "routes/viet-nam",
    path: ":slug/:restaurant",
    index: void 0,
    caseSensitive: void 0,
    module: viet_nam_slug_restaurant_exports
  },
  "routes/admin.images.$restId.$id": {
    id: "routes/admin.images.$restId.$id",
    parentId: "routes/admin.images.$restId",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: admin_images_restId_id_exports
  },
  "routes/korea.$slug.$restaurant": {
    id: "routes/korea.$slug.$restaurant",
    parentId: "routes/korea",
    path: ":slug/:restaurant",
    index: void 0,
    caseSensitive: void 0,
    module: korea_slug_restaurant_exports
  },
  "routes/viet-nam.$slug._index": {
    id: "routes/viet-nam.$slug._index",
    parentId: "routes/viet-nam",
    path: ":slug",
    index: !0,
    caseSensitive: void 0,
    module: viet_nam_slug_index_exports
  },
  "routes/admin.category.$slug": {
    id: "routes/admin.category.$slug",
    parentId: "routes/admin.category",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: admin_category_slug_exports
  },
  "routes/admin.images.$restId": {
    id: "routes/admin.images.$restId",
    parentId: "routes/admin.images",
    path: ":restId",
    index: void 0,
    caseSensitive: void 0,
    module: admin_images_restId_exports
  },
  "routes/admin.restaurant.$id": {
    id: "routes/admin.restaurant.$id",
    parentId: "routes/admin.restaurant",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: admin_restaurant_id_exports
  },
  "routes/korea.$slug._index": {
    id: "routes/korea.$slug._index",
    parentId: "routes/korea",
    path: ":slug",
    index: !0,
    caseSensitive: void 0,
    module: korea_slug_index_exports
  },
  "routes/admin.restaurant": {
    id: "routes/admin.restaurant",
    parentId: "routes/admin",
    path: "restaurant",
    index: void 0,
    caseSensitive: void 0,
    module: admin_restaurant_exports
  },
  "routes/admin.category": {
    id: "routes/admin.category",
    parentId: "routes/admin",
    path: "category",
    index: void 0,
    caseSensitive: void 0,
    module: admin_category_exports
  },
  "routes/admin.images": {
    id: "routes/admin.images",
    parentId: "routes/admin",
    path: "images",
    index: void 0,
    caseSensitive: void 0,
    module: admin_images_exports
  },
  "routes/favorite": {
    id: "routes/favorite",
    parentId: "root",
    path: "favorite",
    index: void 0,
    caseSensitive: void 0,
    module: favorite_exports
  },
  "routes/schedule": {
    id: "routes/schedule",
    parentId: "root",
    path: "schedule",
    index: void 0,
    caseSensitive: void 0,
    module: schedule_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/viet-nam": {
    id: "routes/viet-nam",
    parentId: "root",
    path: "viet-nam",
    index: void 0,
    caseSensitive: void 0,
    module: viet_nam_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/korea": {
    id: "routes/korea",
    parentId: "root",
    path: "korea",
    index: void 0,
    caseSensitive: void 0,
    module: korea_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map