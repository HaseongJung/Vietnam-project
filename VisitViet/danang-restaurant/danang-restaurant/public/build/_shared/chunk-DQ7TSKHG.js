import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/react-slick/lib/initial-state.js
var require_initial_state = __commonJS({
  "node_modules/react-slick/lib/initial-state.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var initialState = {
      animating: false,
      autoplaying: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      dragging: false,
      edgeDragged: false,
      initialized: false,
      lazyLoadedList: [],
      listHeight: null,
      listWidth: null,
      scrolling: false,
      slideCount: null,
      slideHeight: null,
      slideWidth: null,
      swipeLeft: null,
      swiped: false,
      // used by swipeEvent. differentites between touch and swipe.
      swiping: false,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0
    };
    var _default = initialState;
    exports["default"] = _default;
  }
});

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce;
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-slick/lib/utils/innerSliderUtils.js
var require_innerSliderUtils = __commonJS({
  "node_modules/react-slick/lib/utils/innerSliderUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
    exports.clamp = clamp;
    exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = exports.extractObject = void 0;
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function clamp(number, lowerBound, upperBound) {
      return Math.max(lowerBound, Math.min(number, upperBound));
    }
    var safePreventDefault = function safePreventDefault2(event) {
      var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
      if (!passiveEvents.includes(event._reactName)) {
        event.preventDefault();
      }
    };
    exports.safePreventDefault = safePreventDefault;
    var getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
      var onDemandSlides = [];
      var startIndex = lazyStartIndex(spec);
      var endIndex = lazyEndIndex(spec);
      for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
        if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
          onDemandSlides.push(slideIndex);
        }
      }
      return onDemandSlides;
    };
    exports.getOnDemandLazySlides = getOnDemandLazySlides;
    var getRequiredLazySlides = function getRequiredLazySlides2(spec) {
      var requiredSlides = [];
      var startIndex = lazyStartIndex(spec);
      var endIndex = lazyEndIndex(spec);
      for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
        requiredSlides.push(slideIndex);
      }
      return requiredSlides;
    };
    exports.getRequiredLazySlides = getRequiredLazySlides;
    var lazyStartIndex = function lazyStartIndex2(spec) {
      return spec.currentSlide - lazySlidesOnLeft(spec);
    };
    exports.lazyStartIndex = lazyStartIndex;
    var lazyEndIndex = function lazyEndIndex2(spec) {
      return spec.currentSlide + lazySlidesOnRight(spec);
    };
    exports.lazyEndIndex = lazyEndIndex;
    var lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
      return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
    };
    exports.lazySlidesOnLeft = lazySlidesOnLeft;
    var lazySlidesOnRight = function lazySlidesOnRight2(spec) {
      return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
    };
    exports.lazySlidesOnRight = lazySlidesOnRight;
    var getWidth = function getWidth2(elem) {
      return elem && elem.offsetWidth || 0;
    };
    exports.getWidth = getWidth;
    var getHeight = function getHeight2(elem) {
      return elem && elem.offsetHeight || 0;
    };
    exports.getHeight = getHeight;
    var getSwipeDirection = function getSwipeDirection2(touchObject) {
      var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var xDist, yDist, r, swipeAngle;
      xDist = touchObject.startX - touchObject.curX;
      yDist = touchObject.startY - touchObject.curY;
      r = Math.atan2(yDist, xDist);
      swipeAngle = Math.round(r * 180 / Math.PI);
      if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
      }
      if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
        return "left";
      }
      if (swipeAngle >= 135 && swipeAngle <= 225) {
        return "right";
      }
      if (verticalSwiping === true) {
        if (swipeAngle >= 35 && swipeAngle <= 135) {
          return "up";
        } else {
          return "down";
        }
      }
      return "vertical";
    };
    exports.getSwipeDirection = getSwipeDirection;
    var canGoNext = function canGoNext2(spec) {
      var canGo = true;
      if (!spec.infinite) {
        if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
          canGo = false;
        } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
          canGo = false;
        }
      }
      return canGo;
    };
    exports.canGoNext = canGoNext;
    var extractObject = function extractObject2(spec, keys) {
      var newObject = {};
      keys.forEach(function(key) {
        return newObject[key] = spec[key];
      });
      return newObject;
    };
    exports.extractObject = extractObject;
    var initializedState = function initializedState2(spec) {
      var slideCount = _react["default"].Children.count(spec.children);
      var listNode = spec.listRef;
      var listWidth = Math.ceil(getWidth(listNode));
      var trackNode = spec.trackRef && spec.trackRef.node;
      var trackWidth = Math.ceil(getWidth(trackNode));
      var slideWidth;
      if (!spec.vertical) {
        var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
        if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
          centerPaddingAdj *= listWidth / 100;
        }
        slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
      } else {
        slideWidth = listWidth;
      }
      var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
      var listHeight = slideHeight * spec.slidesToShow;
      var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
      if (spec.rtl && spec.currentSlide === void 0) {
        currentSlide = slideCount - 1 - spec.initialSlide;
      }
      var lazyLoadedList = spec.lazyLoadedList || [];
      var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide,
        lazyLoadedList
      }));
      lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
      var state = {
        slideCount,
        slideWidth,
        listWidth,
        trackWidth,
        currentSlide,
        slideHeight,
        listHeight,
        lazyLoadedList
      };
      if (spec.autoplaying === null && spec.autoplay) {
        state["autoplaying"] = "playing";
      }
      return state;
    };
    exports.initializedState = initializedState;
    var slideHandler = function slideHandler2(spec) {
      var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index2 = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
      var lazyLoadedList = spec.lazyLoadedList;
      if (waitForAnimate && animating)
        return {};
      var animationSlide = index2, finalSlide, animationLeft, finalLeft;
      var state = {}, nextState = {};
      var targetSlide = infinite ? index2 : clamp(index2, 0, slideCount - 1);
      if (fade) {
        if (!infinite && (index2 < 0 || index2 >= slideCount))
          return {};
        if (index2 < 0) {
          animationSlide = index2 + slideCount;
        } else if (index2 >= slideCount) {
          animationSlide = index2 - slideCount;
        }
        if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
          lazyLoadedList = lazyLoadedList.concat(animationSlide);
        }
        state = {
          animating: true,
          currentSlide: animationSlide,
          lazyLoadedList,
          targetSlide: animationSlide
        };
        nextState = {
          animating: false,
          targetSlide: animationSlide
        };
      } else {
        finalSlide = animationSlide;
        if (animationSlide < 0) {
          finalSlide = animationSlide + slideCount;
          if (!infinite)
            finalSlide = 0;
          else if (slideCount % slidesToScroll !== 0)
            finalSlide = slideCount - slideCount % slidesToScroll;
        } else if (!canGoNext(spec) && animationSlide > currentSlide) {
          animationSlide = finalSlide = currentSlide;
        } else if (centerMode && animationSlide >= slideCount) {
          animationSlide = infinite ? slideCount : slideCount - 1;
          finalSlide = infinite ? 0 : slideCount - 1;
        } else if (animationSlide >= slideCount) {
          finalSlide = animationSlide - slideCount;
          if (!infinite)
            finalSlide = slideCount - slidesToShow;
          else if (slideCount % slidesToScroll !== 0)
            finalSlide = 0;
        }
        if (!infinite && animationSlide + slidesToShow >= slideCount) {
          finalSlide = slideCount - slidesToShow;
        }
        animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
          slideIndex: animationSlide
        }));
        finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
          slideIndex: finalSlide
        }));
        if (!infinite) {
          if (animationLeft === finalLeft)
            animationSlide = finalSlide;
          animationLeft = finalLeft;
        }
        if (lazyLoad) {
          lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
            currentSlide: animationSlide
          })));
        }
        if (!useCSS) {
          state = {
            currentSlide: finalSlide,
            trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
              left: finalLeft
            })),
            lazyLoadedList,
            targetSlide
          };
        } else {
          state = {
            animating: true,
            currentSlide: finalSlide,
            trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
              left: animationLeft
            })),
            lazyLoadedList,
            targetSlide
          };
          nextState = {
            animating: false,
            currentSlide: finalSlide,
            trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
              left: finalLeft
            })),
            swipeLeft: null,
            targetSlide
          };
        }
      }
      return {
        state,
        nextState
      };
    };
    exports.slideHandler = slideHandler;
    var changeSlide = function changeSlide2(spec, options) {
      var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
      var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
      unevenOffset = slideCount % slidesToScroll !== 0;
      indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
      if (options.message === "previous") {
        slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
        targetSlide = currentSlide - slideOffset;
        if (lazyLoad && !infinite) {
          previousInt = currentSlide - slideOffset;
          targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
        }
        if (!infinite) {
          targetSlide = previousTargetSlide - slidesToScroll;
        }
      } else if (options.message === "next") {
        slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
        targetSlide = currentSlide + slideOffset;
        if (lazyLoad && !infinite) {
          targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
        }
        if (!infinite) {
          targetSlide = previousTargetSlide + slidesToScroll;
        }
      } else if (options.message === "dots") {
        targetSlide = options.index * options.slidesToScroll;
      } else if (options.message === "children") {
        targetSlide = options.index;
        if (infinite) {
          var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
            targetSlide
          }));
          if (targetSlide > options.currentSlide && direction === "left") {
            targetSlide = targetSlide - slideCount;
          } else if (targetSlide < options.currentSlide && direction === "right") {
            targetSlide = targetSlide + slideCount;
          }
        }
      } else if (options.message === "index") {
        targetSlide = Number(options.index);
      }
      return targetSlide;
    };
    exports.changeSlide = changeSlide;
    var keyHandler = function keyHandler2(e, accessibility, rtl) {
      if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility)
        return "";
      if (e.keyCode === 37)
        return rtl ? "next" : "previous";
      if (e.keyCode === 39)
        return rtl ? "previous" : "next";
      return "";
    };
    exports.keyHandler = keyHandler;
    var swipeStart = function swipeStart2(e, swipe, draggable) {
      e.target.tagName === "IMG" && safePreventDefault(e);
      if (!swipe || !draggable && e.type.indexOf("mouse") !== -1)
        return "";
      return {
        dragging: true,
        touchObject: {
          startX: e.touches ? e.touches[0].pageX : e.clientX,
          startY: e.touches ? e.touches[0].pageY : e.clientY,
          curX: e.touches ? e.touches[0].pageX : e.clientX,
          curY: e.touches ? e.touches[0].pageY : e.clientY
        }
      };
    };
    exports.swipeStart = swipeStart;
    var swipeMove = function swipeMove2(e, spec) {
      var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
      if (scrolling)
        return;
      if (animating)
        return safePreventDefault(e);
      if (vertical && swipeToSlide && verticalSwiping)
        safePreventDefault(e);
      var swipeLeft, state = {};
      var curLeft = getTrackLeft(spec);
      touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
      touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
      var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
      if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
        return {
          scrolling: true
        };
      }
      if (verticalSwiping)
        touchObject.swipeLength = verticalSwipeLength;
      var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
      if (verticalSwiping)
        positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
      var dotCount = Math.ceil(slideCount / slidesToScroll);
      var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
      var touchSwipeLength = touchObject.swipeLength;
      if (!infinite) {
        if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
          touchSwipeLength = touchObject.swipeLength * edgeFriction;
          if (edgeDragged === false && onEdge) {
            onEdge(swipeDirection);
            state["edgeDragged"] = true;
          }
        }
      }
      if (!swiped && swipeEvent) {
        swipeEvent(swipeDirection);
        state["swiped"] = true;
      }
      if (!vertical) {
        if (!rtl) {
          swipeLeft = curLeft + touchSwipeLength * positionOffset;
        } else {
          swipeLeft = curLeft - touchSwipeLength * positionOffset;
        }
      } else {
        swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
      }
      if (verticalSwiping) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
      }
      state = _objectSpread(_objectSpread({}, state), {}, {
        touchObject,
        swipeLeft,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: swipeLeft
        }))
      });
      if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
        return state;
      }
      if (touchObject.swipeLength > 10) {
        state["swiping"] = true;
        safePreventDefault(e);
      }
      return state;
    };
    exports.swipeMove = swipeMove;
    var swipeEnd = function swipeEnd2(e, spec) {
      var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
      if (!dragging) {
        if (swipe)
          safePreventDefault(e);
        return {};
      }
      var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
      var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
      var state = {
        dragging: false,
        edgeDragged: false,
        scrolling: false,
        swiping: false,
        swiped: false,
        swipeLeft: null,
        touchObject: {}
      };
      if (scrolling) {
        return state;
      }
      if (!touchObject.swipeLength) {
        return state;
      }
      if (touchObject.swipeLength > minSwipe) {
        safePreventDefault(e);
        if (onSwipe) {
          onSwipe(swipeDirection);
        }
        var slideCount, newSlide;
        var activeSlide = infinite ? currentSlide : targetSlide;
        switch (swipeDirection) {
          case "left":
          case "up":
            newSlide = activeSlide + getSlideCount(spec);
            slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
            state["currentDirection"] = 0;
            break;
          case "right":
          case "down":
            newSlide = activeSlide - getSlideCount(spec);
            slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
            state["currentDirection"] = 1;
            break;
          default:
            slideCount = activeSlide;
        }
        state["triggerSlideHandler"] = slideCount;
      } else {
        var currentLeft = getTrackLeft(spec);
        state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: currentLeft
        }));
      }
      return state;
    };
    exports.swipeEnd = swipeEnd;
    var getNavigableIndexes = function getNavigableIndexes2(spec) {
      var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
      var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
      var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
      var indexes = [];
      while (breakpoint < max) {
        indexes.push(breakpoint);
        breakpoint = counter + spec.slidesToScroll;
        counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
      }
      return indexes;
    };
    exports.getNavigableIndexes = getNavigableIndexes;
    var checkNavigable = function checkNavigable2(spec, index2) {
      var navigables = getNavigableIndexes(spec);
      var prevNavigable = 0;
      if (index2 > navigables[navigables.length - 1]) {
        index2 = navigables[navigables.length - 1];
      } else {
        for (var n in navigables) {
          if (index2 < navigables[n]) {
            index2 = prevNavigable;
            break;
          }
          prevNavigable = navigables[n];
        }
      }
      return index2;
    };
    exports.checkNavigable = checkNavigable;
    var getSlideCount = function getSlideCount2(spec) {
      var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
      if (spec.swipeToSlide) {
        var swipedSlide;
        var slickList = spec.listRef;
        var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
        Array.from(slides).every(function(slide) {
          if (!spec.vertical) {
            if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
              swipedSlide = slide;
              return false;
            }
          } else {
            if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
              swipedSlide = slide;
              return false;
            }
          }
          return true;
        });
        if (!swipedSlide) {
          return 0;
        }
        var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
        var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
        return slidesTraversed;
      } else {
        return spec.slidesToScroll;
      }
    };
    exports.getSlideCount = getSlideCount;
    var checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
      return keysArray.reduce(function(value, key) {
        return value && spec.hasOwnProperty(key);
      }, true) ? null : console.error("Keys Missing:", spec);
    };
    exports.checkSpecKeys = checkSpecKeys;
    var getTrackCSS = function getTrackCSS2(spec) {
      checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
      var trackWidth, trackHeight;
      var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
      if (!spec.vertical) {
        trackWidth = getTotalSlides(spec) * spec.slideWidth;
      } else {
        trackHeight = trackChildren * spec.slideHeight;
      }
      var style = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
      };
      if (spec.useTransform) {
        var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
        var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
        style = _objectSpread(_objectSpread({}, style), {}, {
          WebkitTransform,
          transform,
          msTransform
        });
      } else {
        if (spec.vertical) {
          style["top"] = spec.left;
        } else {
          style["left"] = spec.left;
        }
      }
      if (spec.fade)
        style = {
          opacity: 1
        };
      if (trackWidth)
        style.width = trackWidth;
      if (trackHeight)
        style.height = trackHeight;
      if (window && !window.addEventListener && window.attachEvent) {
        if (!spec.vertical) {
          style.marginLeft = spec.left + "px";
        } else {
          style.marginTop = spec.left + "px";
        }
      }
      return style;
    };
    exports.getTrackCSS = getTrackCSS;
    var getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
      checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
      var style = getTrackCSS(spec);
      if (spec.useTransform) {
        style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
        style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
      } else {
        if (spec.vertical) {
          style.transition = "top " + spec.speed + "ms " + spec.cssEase;
        } else {
          style.transition = "left " + spec.speed + "ms " + spec.cssEase;
        }
      }
      return style;
    };
    exports.getTrackAnimateCSS = getTrackAnimateCSS;
    var getTrackLeft = function getTrackLeft2(spec) {
      if (spec.unslick) {
        return 0;
      }
      checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
      var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
      var slideOffset = 0;
      var targetLeft;
      var targetSlide;
      var verticalOffset = 0;
      if (fade || spec.slideCount === 1) {
        return 0;
      }
      var slidesToOffset = 0;
      if (infinite) {
        slidesToOffset = -getPreClones(spec);
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
          slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
        }
        if (centerMode) {
          slidesToOffset += parseInt(slidesToShow / 2);
        }
      } else {
        if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
          slidesToOffset = slidesToShow - slideCount % slidesToScroll;
        }
        if (centerMode) {
          slidesToOffset = parseInt(slidesToShow / 2);
        }
      }
      slideOffset = slidesToOffset * slideWidth;
      verticalOffset = slidesToOffset * slideHeight;
      if (!vertical) {
        targetLeft = slideIndex * slideWidth * -1 + slideOffset;
      } else {
        targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
      }
      if (variableWidth === true) {
        var targetSlideIndex;
        var trackElem = trackRef && trackRef.node;
        targetSlideIndex = slideIndex + getPreClones(spec);
        targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (centerMode === true) {
          targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
          targetSlide = trackElem && trackElem.children[targetSlideIndex];
          targetLeft = 0;
          for (var slide = 0; slide < targetSlideIndex; slide++) {
            targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
          }
          targetLeft -= parseInt(spec.centerPadding);
          targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
        }
      }
      return targetLeft;
    };
    exports.getTrackLeft = getTrackLeft;
    var getPreClones = function getPreClones2(spec) {
      if (spec.unslick || !spec.infinite) {
        return 0;
      }
      if (spec.variableWidth) {
        return spec.slideCount;
      }
      return spec.slidesToShow + (spec.centerMode ? 1 : 0);
    };
    exports.getPreClones = getPreClones;
    var getPostClones = function getPostClones2(spec) {
      if (spec.unslick || !spec.infinite) {
        return 0;
      }
      return spec.slideCount;
    };
    exports.getPostClones = getPostClones;
    var getTotalSlides = function getTotalSlides2(spec) {
      return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
    };
    exports.getTotalSlides = getTotalSlides;
    var siblingDirection = function siblingDirection2(spec) {
      if (spec.targetSlide > spec.currentSlide) {
        if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
          return "left";
        }
        return "right";
      } else {
        if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
          return "right";
        }
        return "left";
      }
    };
    exports.siblingDirection = siblingDirection;
    var slidesOnRight = function slidesOnRight2(_ref) {
      var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
      if (centerMode) {
        var right = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0)
          right += 1;
        if (rtl && slidesToShow % 2 === 0)
          right += 1;
        return right;
      }
      if (rtl) {
        return 0;
      }
      return slidesToShow - 1;
    };
    exports.slidesOnRight = slidesOnRight;
    var slidesOnLeft = function slidesOnLeft2(_ref2) {
      var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
      if (centerMode) {
        var left = (slidesToShow - 1) / 2 + 1;
        if (parseInt(centerPadding) > 0)
          left += 1;
        if (!rtl && slidesToShow % 2 === 0)
          left += 1;
        return left;
      }
      if (rtl) {
        return slidesToShow - 1;
      }
      return 0;
    };
    exports.slidesOnLeft = slidesOnLeft;
    var canUseDOM = function canUseDOM2() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    };
    exports.canUseDOM = canUseDOM;
  }
});

// node_modules/react-slick/lib/track.js
var require_track = __commonJS({
  "node_modules/react-slick/lib/track.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Track = void 0;
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _innerSliderUtils = require_innerSliderUtils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var getSlideClasses = function getSlideClasses2(spec) {
      var slickActive, slickCenter, slickCloned;
      var centerOffset, index2;
      if (spec.rtl) {
        index2 = spec.slideCount - 1 - spec.index;
      } else {
        index2 = spec.index;
      }
      slickCloned = index2 < 0 || index2 >= spec.slideCount;
      if (spec.centerMode) {
        centerOffset = Math.floor(spec.slidesToShow / 2);
        slickCenter = (index2 - spec.currentSlide) % spec.slideCount === 0;
        if (index2 > spec.currentSlide - centerOffset - 1 && index2 <= spec.currentSlide + centerOffset) {
          slickActive = true;
        }
      } else {
        slickActive = spec.currentSlide <= index2 && index2 < spec.currentSlide + spec.slidesToShow;
      }
      var focusedSlide;
      if (spec.targetSlide < 0) {
        focusedSlide = spec.targetSlide + spec.slideCount;
      } else if (spec.targetSlide >= spec.slideCount) {
        focusedSlide = spec.targetSlide - spec.slideCount;
      } else {
        focusedSlide = spec.targetSlide;
      }
      var slickCurrent = index2 === focusedSlide;
      return {
        "slick-slide": true,
        "slick-active": slickActive,
        "slick-center": slickCenter,
        "slick-cloned": slickCloned,
        "slick-current": slickCurrent
        // dubious in case of RTL
      };
    };
    var getSlideStyle = function getSlideStyle2(spec) {
      var style = {};
      if (spec.variableWidth === void 0 || spec.variableWidth === false) {
        style.width = spec.slideWidth;
      }
      if (spec.fade) {
        style.position = "relative";
        if (spec.vertical) {
          style.top = -spec.index * parseInt(spec.slideHeight);
        } else {
          style.left = -spec.index * parseInt(spec.slideWidth);
        }
        style.opacity = spec.currentSlide === spec.index ? 1 : 0;
        if (spec.useCSS) {
          style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
        }
      }
      return style;
    };
    var getKey = function getKey2(child, fallbackKey) {
      return child.key || fallbackKey;
    };
    var renderSlides = function renderSlides2(spec) {
      var key;
      var slides = [];
      var preCloneSlides = [];
      var postCloneSlides = [];
      var childrenCount = _react["default"].Children.count(spec.children);
      var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
      var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
      _react["default"].Children.forEach(spec.children, function(elem, index2) {
        var child;
        var childOnClickOptions = {
          message: "children",
          index: index2,
          slidesToScroll: spec.slidesToScroll,
          currentSlide: spec.currentSlide
        };
        if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index2) >= 0) {
          child = elem;
        } else {
          child = /* @__PURE__ */ _react["default"].createElement("div", null);
        }
        var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
          index: index2
        }));
        var slideClass = child.props.className || "";
        var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: index2
        }));
        slides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
          key: "original" + getKey(child, index2),
          "data-index": index2,
          className: (0, _classnames["default"])(slideClasses, slideClass),
          tabIndex: "-1",
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({
            outline: "none"
          }, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
        if (spec.infinite && spec.fade === false) {
          var preCloneNo = childrenCount - index2;
          if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
            key = -preCloneNo;
            if (key >= startIndex) {
              child = elem;
            }
            slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
              index: key
            }));
            preCloneSlides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
              key: "precloned" + getKey(child, key),
              "data-index": key,
              tabIndex: "-1",
              className: (0, _classnames["default"])(slideClasses, slideClass),
              "aria-hidden": !slideClasses["slick-active"],
              style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
              onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);
                if (spec.focusOnSelect) {
                  spec.focusOnSelect(childOnClickOptions);
                }
              }
            }));
          }
          if (childrenCount !== spec.slidesToShow) {
            key = childrenCount + index2;
            if (key < endIndex) {
              child = elem;
            }
            slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
              index: key
            }));
            postCloneSlides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
              key: "postcloned" + getKey(child, key),
              "data-index": key,
              tabIndex: "-1",
              className: (0, _classnames["default"])(slideClasses, slideClass),
              "aria-hidden": !slideClasses["slick-active"],
              style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
              onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);
                if (spec.focusOnSelect) {
                  spec.focusOnSelect(childOnClickOptions);
                }
              }
            }));
          }
        }
      });
      if (spec.rtl) {
        return preCloneSlides.concat(slides, postCloneSlides).reverse();
      } else {
        return preCloneSlides.concat(slides, postCloneSlides);
      }
    };
    var Track = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(Track2, _React$PureComponent);
      var _super = _createSuper(Track2);
      function Track2() {
        var _this;
        _classCallCheck(this, Track2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "node", null);
        _defineProperty(_assertThisInitialized(_this), "handleRef", function(ref) {
          _this.node = ref;
        });
        return _this;
      }
      _createClass(Track2, [{
        key: "render",
        value: function render() {
          var slides = renderSlides(this.props);
          var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
          var mouseEvents = {
            onMouseEnter,
            onMouseOver,
            onMouseLeave
          };
          return /* @__PURE__ */ _react["default"].createElement("div", _extends({
            ref: this.handleRef,
            className: "slick-track",
            style: this.props.trackStyle
          }, mouseEvents), slides);
        }
      }]);
      return Track2;
    }(_react["default"].PureComponent);
    exports.Track = Track;
  }
});

// node_modules/react-slick/lib/dots.js
var require_dots = __commonJS({
  "node_modules/react-slick/lib/dots.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Dots = void 0;
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _innerSliderUtils = require_innerSliderUtils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var getDotCount = function getDotCount2(spec) {
      var dots;
      if (spec.infinite) {
        dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
      } else {
        dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
      }
      return dots;
    };
    var Dots = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(Dots2, _React$PureComponent);
      var _super = _createSuper(Dots2);
      function Dots2() {
        _classCallCheck(this, Dots2);
        return _super.apply(this, arguments);
      }
      _createClass(Dots2, [{
        key: "clickHandler",
        value: function clickHandler(options, e) {
          e.preventDefault();
          this.props.clickHandler(options);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
          var dotCount = getDotCount({
            slideCount,
            slidesToScroll,
            slidesToShow,
            infinite
          });
          var mouseEvents = {
            onMouseEnter,
            onMouseOver,
            onMouseLeave
          };
          var dots = [];
          for (var i = 0; i < dotCount; i++) {
            var _rightBound = (i + 1) * slidesToScroll - 1;
            var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
            var _leftBound = rightBound - (slidesToScroll - 1);
            var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
            var className = (0, _classnames["default"])({
              "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
            });
            var dotOptions = {
              message: "dots",
              index: i,
              slidesToScroll,
              currentSlide
            };
            var onClick = this.clickHandler.bind(this, dotOptions);
            dots = dots.concat(/* @__PURE__ */ _react["default"].createElement("li", {
              key: i,
              className
            }, /* @__PURE__ */ _react["default"].cloneElement(this.props.customPaging(i), {
              onClick
            })));
          }
          return /* @__PURE__ */ _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
            className: this.props.dotsClass
          }, mouseEvents));
        }
      }]);
      return Dots2;
    }(_react["default"].PureComponent);
    exports.Dots = Dots;
  }
});

// node_modules/react-slick/lib/arrows.js
var require_arrows = __commonJS({
  "node_modules/react-slick/lib/arrows.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PrevArrow = exports.NextArrow = void 0;
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _innerSliderUtils = require_innerSliderUtils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var PrevArrow = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(PrevArrow2, _React$PureComponent);
      var _super = _createSuper(PrevArrow2);
      function PrevArrow2() {
        _classCallCheck(this, PrevArrow2);
        return _super.apply(this, arguments);
      }
      _createClass(PrevArrow2, [{
        key: "clickHandler",
        value: function clickHandler(options, e) {
          if (e) {
            e.preventDefault();
          }
          this.props.clickHandler(options, e);
        }
      }, {
        key: "render",
        value: function render() {
          var prevClasses = {
            "slick-arrow": true,
            "slick-prev": true
          };
          var prevHandler = this.clickHandler.bind(this, {
            message: "previous"
          });
          if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
            prevClasses["slick-disabled"] = true;
            prevHandler = null;
          }
          var prevArrowProps = {
            key: "0",
            "data-role": "none",
            className: (0, _classnames["default"])(prevClasses),
            style: {
              display: "block"
            },
            onClick: prevHandler
          };
          var customProps = {
            currentSlide: this.props.currentSlide,
            slideCount: this.props.slideCount
          };
          var prevArrow;
          if (this.props.prevArrow) {
            prevArrow = /* @__PURE__ */ _react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
          } else {
            prevArrow = /* @__PURE__ */ _react["default"].createElement("button", _extends({
              key: "0",
              type: "button"
            }, prevArrowProps), " ", "Previous");
          }
          return prevArrow;
        }
      }]);
      return PrevArrow2;
    }(_react["default"].PureComponent);
    exports.PrevArrow = PrevArrow;
    var NextArrow = /* @__PURE__ */ function(_React$PureComponent2) {
      _inherits(NextArrow2, _React$PureComponent2);
      var _super2 = _createSuper(NextArrow2);
      function NextArrow2() {
        _classCallCheck(this, NextArrow2);
        return _super2.apply(this, arguments);
      }
      _createClass(NextArrow2, [{
        key: "clickHandler",
        value: function clickHandler(options, e) {
          if (e) {
            e.preventDefault();
          }
          this.props.clickHandler(options, e);
        }
      }, {
        key: "render",
        value: function render() {
          var nextClasses = {
            "slick-arrow": true,
            "slick-next": true
          };
          var nextHandler = this.clickHandler.bind(this, {
            message: "next"
          });
          if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
            nextClasses["slick-disabled"] = true;
            nextHandler = null;
          }
          var nextArrowProps = {
            key: "1",
            "data-role": "none",
            className: (0, _classnames["default"])(nextClasses),
            style: {
              display: "block"
            },
            onClick: nextHandler
          };
          var customProps = {
            currentSlide: this.props.currentSlide,
            slideCount: this.props.slideCount
          };
          var nextArrow;
          if (this.props.nextArrow) {
            nextArrow = /* @__PURE__ */ _react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
          } else {
            nextArrow = /* @__PURE__ */ _react["default"].createElement("button", _extends({
              key: "1",
              type: "button"
            }, nextArrowProps), " ", "Next");
          }
          return nextArrow;
        }
      }]);
      return NextArrow2;
    }(_react["default"].PureComponent);
    exports.NextArrow = NextArrow;
  }
});

// node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es_exports = {};
__export(ResizeObserver_es_exports, {
  default: () => ResizeObserver_es_default
});
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var MapShim, isBrowser, global$1, requestAnimationFrame$1, trailingTimeout, REFRESH_DELAY, transitionKeys, mutationObserverSupported, ResizeObserverController, defineConfigurable, getWindowOf, emptyRect, isSVGGraphicsElement, ResizeObservation, ResizeObserverEntry, ResizeObserverSPI, observers, ResizeObserver, index, ResizeObserver_es_default;
var init_ResizeObserver_es = __esm({
  "node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"() {
    MapShim = function() {
      if (typeof Map !== "undefined") {
        return Map;
      }
      function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index2) {
          if (entry[0] === key) {
            result = index2;
            return true;
          }
          return false;
        });
        return result;
      }
      return (
        /** @class */
        function() {
          function class_1() {
            this.__entries__ = [];
          }
          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          class_1.prototype.get = function(key) {
            var index2 = getIndex(this.__entries__, key);
            var entry = this.__entries__[index2];
            return entry && entry[1];
          };
          class_1.prototype.set = function(key, value) {
            var index2 = getIndex(this.__entries__, key);
            if (~index2) {
              this.__entries__[index2][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index2 = getIndex(entries, key);
            if (~index2) {
              entries.splice(index2, 1);
            }
          };
          class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
          };
          class_1.prototype.clear = function() {
            this.__entries__.splice(0);
          };
          class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };
          return class_1;
        }()
      );
    }();
    isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
    global$1 = function() {
      if (typeof globalThis !== "undefined" && globalThis.Math === Math) {
        return globalThis;
      }
      if (typeof self !== "undefined" && self.Math === Math) {
        return self;
      }
      if (typeof window !== "undefined" && window.Math === Math) {
        return window;
      }
      return Function("return this")();
    }();
    requestAnimationFrame$1 = function() {
      if (typeof requestAnimationFrame === "function") {
        return requestAnimationFrame.bind(global$1);
      }
      return function(callback) {
        return setTimeout(function() {
          return callback(Date.now());
        }, 1e3 / 60);
      };
    }();
    trailingTimeout = 2;
    REFRESH_DELAY = 20;
    transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
    mutationObserverSupported = typeof MutationObserver !== "undefined";
    ResizeObserverController = /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }();
    defineConfigurable = function(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }
      return target;
    };
    getWindowOf = function(target) {
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
      return ownerGlobal || global$1;
    };
    emptyRect = createRectInit(0, 0, 0, 0);
    isSVGGraphicsElement = function() {
      if (typeof SVGGraphicsElement !== "undefined") {
        return function(target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      }
      return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
      };
    }();
    ResizeObservation = /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }();
    ResizeObserverEntry = /** @class */
    function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }();
    ResizeObserverSPI = /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }();
    observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
    ResizeObserver = /** @class */
    function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }();
    [
      "observe",
      "unobserve",
      "disconnect"
    ].forEach(function(method) {
      ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });
    index = function() {
      if (typeof global$1.ResizeObserver !== "undefined") {
        return global$1.ResizeObserver;
      }
      return ResizeObserver;
    }();
    ResizeObserver_es_default = index;
  }
});

// node_modules/react-slick/lib/inner-slider.js
var require_inner_slider = __commonJS({
  "node_modules/react-slick/lib/inner-slider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InnerSlider = void 0;
    var _react = _interopRequireDefault(require_react());
    var _initialState = _interopRequireDefault(require_initial_state());
    var _lodash = _interopRequireDefault(require_lodash());
    var _classnames = _interopRequireDefault(require_classnames());
    var _innerSliderUtils = require_innerSliderUtils();
    var _track = require_track();
    var _dots = require_dots();
    var _arrows = require_arrows();
    var _resizeObserverPolyfill = _interopRequireDefault((init_ResizeObserver_es(), __toCommonJS(ResizeObserver_es_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var InnerSlider = /* @__PURE__ */ function(_React$Component) {
      _inherits(InnerSlider2, _React$Component);
      var _super = _createSuper(InnerSlider2);
      function InnerSlider2(props) {
        var _this;
        _classCallCheck(this, InnerSlider2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
          return _this.list = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
          return _this.track = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
          if (_this.props.adaptiveHeight && _this.list) {
            var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
            _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
          }
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
          _this.props.onInit && _this.props.onInit();
          if (_this.props.lazyLoad) {
            var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
            if (slidesToLoad.length > 0) {
              _this.setState(function(prevState) {
                return {
                  lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                };
              });
              if (_this.props.onLazyLoad) {
                _this.props.onLazyLoad(slidesToLoad);
              }
            }
          }
          var spec = _objectSpread({
            listRef: _this.list,
            trackRef: _this.track
          }, _this.props);
          _this.updateState(spec, true, function() {
            _this.adaptHeight();
            _this.props.autoplay && _this.autoPlay("update");
          });
          if (_this.props.lazyLoad === "progressive") {
            _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
          }
          _this.ro = new _resizeObserverPolyfill["default"](function() {
            if (_this.state.animating) {
              _this.onWindowResized(false);
              _this.callbackTimers.push(setTimeout(function() {
                return _this.onWindowResized();
              }, _this.props.speed));
            } else {
              _this.onWindowResized();
            }
          });
          _this.ro.observe(_this.list);
          document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
            slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
            slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
          });
          if (window.addEventListener) {
            window.addEventListener("resize", _this.onWindowResized);
          } else {
            window.attachEvent("onresize", _this.onWindowResized);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
          if (_this.animationEndCallback) {
            clearTimeout(_this.animationEndCallback);
          }
          if (_this.lazyLoadTimer) {
            clearInterval(_this.lazyLoadTimer);
          }
          if (_this.callbackTimers.length) {
            _this.callbackTimers.forEach(function(timer) {
              return clearTimeout(timer);
            });
            _this.callbackTimers = [];
          }
          if (window.addEventListener) {
            window.removeEventListener("resize", _this.onWindowResized);
          } else {
            window.detachEvent("onresize", _this.onWindowResized);
          }
          if (_this.autoplayTimer) {
            clearInterval(_this.autoplayTimer);
          }
          _this.ro.disconnect();
        });
        _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
          _this.checkImagesLoad();
          _this.props.onReInit && _this.props.onReInit();
          if (_this.props.lazyLoad) {
            var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
            if (slidesToLoad.length > 0) {
              _this.setState(function(prevState) {
                return {
                  lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                };
              });
              if (_this.props.onLazyLoad) {
                _this.props.onLazyLoad(slidesToLoad);
              }
            }
          }
          _this.adaptHeight();
          var spec = _objectSpread(_objectSpread({
            listRef: _this.list,
            trackRef: _this.track
          }, _this.props), _this.state);
          var setTrackStyle = _this.didPropsChange(prevProps);
          setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
            if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
              _this.changeSlide({
                message: "index",
                index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
                currentSlide: _this.state.currentSlide
              });
            }
            if (_this.props.autoplay) {
              _this.autoPlay("update");
            } else {
              _this.pause("paused");
            }
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
          if (_this.debouncedResize)
            _this.debouncedResize.cancel();
          _this.debouncedResize = (0, _lodash["default"])(function() {
            return _this.resizeWindow(setTrackStyle);
          }, 50);
          _this.debouncedResize();
        });
        _defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
          var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
          var isTrackMounted = Boolean(_this.track && _this.track.node);
          if (!isTrackMounted)
            return;
          var spec = _objectSpread(_objectSpread({
            listRef: _this.list,
            trackRef: _this.track
          }, _this.props), _this.state);
          _this.updateState(spec, setTrackStyle, function() {
            if (_this.props.autoplay)
              _this.autoPlay("update");
            else
              _this.pause("paused");
          });
          _this.setState({
            animating: false
          });
          clearTimeout(_this.animationEndCallback);
          delete _this.animationEndCallback;
        });
        _defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
          var updatedState = (0, _innerSliderUtils.initializedState)(spec);
          spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
            slideIndex: updatedState.currentSlide
          });
          var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
          spec = _objectSpread(_objectSpread({}, spec), {}, {
            left: targetLeft
          });
          var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
          if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
            updatedState["trackStyle"] = trackStyle;
          }
          _this.setState(updatedState, callback);
        });
        _defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
          if (_this.props.variableWidth) {
            var _trackWidth = 0, _trackLeft = 0;
            var childrenWidths = [];
            var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
              slideCount: _this.props.children.length
            }));
            var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
              slideCount: _this.props.children.length
            }));
            _this.props.children.forEach(function(child) {
              childrenWidths.push(child.props.style.width);
              _trackWidth += child.props.style.width;
            });
            for (var i = 0; i < preClones; i++) {
              _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
              _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
            }
            for (var _i = 0; _i < postClones; _i++) {
              _trackWidth += childrenWidths[_i];
            }
            for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
              _trackLeft += childrenWidths[_i2];
            }
            var _trackStyle = {
              width: _trackWidth + "px",
              left: -_trackLeft + "px"
            };
            if (_this.props.centerMode) {
              var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
              _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
            }
            return {
              trackStyle: _trackStyle
            };
          }
          var childrenCount = _react["default"].Children.count(_this.props.children);
          var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
            slideCount: childrenCount
          });
          var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
          var trackWidth = 100 / _this.props.slidesToShow * slideCount;
          var slideWidth = 100 / slideCount;
          var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
          if (_this.props.centerMode) {
            trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
          }
          var trackStyle = {
            width: trackWidth + "%",
            left: trackLeft + "%"
          };
          return {
            slideWidth: slideWidth + "%",
            trackStyle
          };
        });
        _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
          var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
          var imagesCount = images.length, loadedCount = 0;
          Array.prototype.forEach.call(images, function(image) {
            var handler = function handler2() {
              return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
            };
            if (!image.onclick) {
              image.onclick = function() {
                return image.parentNode.focus();
              };
            } else {
              var prevClickHandler = image.onclick;
              image.onclick = function() {
                prevClickHandler();
                image.parentNode.focus();
              };
            }
            if (!image.onload) {
              if (_this.props.lazyLoad) {
                image.onload = function() {
                  _this.adaptHeight();
                  _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
                };
              } else {
                image.onload = handler;
                image.onerror = function() {
                  handler();
                  _this.props.onLazyLoadError && _this.props.onLazyLoadError();
                };
              }
            }
          });
        });
        _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
          var slidesToLoad = [];
          var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
          for (var index2 = _this.state.currentSlide; index2 < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index2++) {
            if (_this.state.lazyLoadedList.indexOf(index2) < 0) {
              slidesToLoad.push(index2);
              break;
            }
          }
          for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
            if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
              slidesToLoad.push(_index);
              break;
            }
          }
          if (slidesToLoad.length > 0) {
            _this.setState(function(state) {
              return {
                lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
              };
            });
            if (_this.props.onLazyLoad) {
              _this.props.onLazyLoad(slidesToLoad);
            }
          } else {
            if (_this.lazyLoadTimer) {
              clearInterval(_this.lazyLoadTimer);
              delete _this.lazyLoadTimer;
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "slideHandler", function(index2) {
          var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
          var currentSlide = _this.state.currentSlide;
          var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
            index: index2
          }, _this.props), _this.state), {}, {
            trackRef: _this.track,
            useCSS: _this.props.useCSS && !dontAnimate
          })), state = _slideHandler.state, nextState = _slideHandler.nextState;
          if (!state)
            return;
          beforeChange && beforeChange(currentSlide, state.currentSlide);
          var slidesToLoad = state.lazyLoadedList.filter(function(value) {
            return _this.state.lazyLoadedList.indexOf(value) < 0;
          });
          onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
          if (!_this.props.waitForAnimate && _this.animationEndCallback) {
            clearTimeout(_this.animationEndCallback);
            afterChange && afterChange(currentSlide);
            delete _this.animationEndCallback;
          }
          _this.setState(state, function() {
            if (asNavFor && _this.asNavForIndex !== index2) {
              _this.asNavForIndex = index2;
              asNavFor.innerSlider.slideHandler(index2);
            }
            if (!nextState)
              return;
            _this.animationEndCallback = setTimeout(function() {
              var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, ["animating"]);
              _this.setState(firstBatch, function() {
                _this.callbackTimers.push(setTimeout(function() {
                  return _this.setState({
                    animating
                  });
                }, 10));
                afterChange && afterChange(state.currentSlide);
                delete _this.animationEndCallback;
              });
            }, speed);
          });
        });
        _defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
          var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
          var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
          if (targetSlide !== 0 && !targetSlide)
            return;
          if (dontAnimate === true) {
            _this.slideHandler(targetSlide, dontAnimate);
          } else {
            _this.slideHandler(targetSlide);
          }
          _this.props.autoplay && _this.autoPlay("update");
          if (_this.props.focusOnSelect) {
            var nodes = _this.list.querySelectorAll(".slick-current");
            nodes[0] && nodes[0].focus();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(e) {
          if (_this.clickable === false) {
            e.stopPropagation();
            e.preventDefault();
          }
          _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "keyHandler", function(e) {
          var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
          dir !== "" && _this.changeSlide({
            message: dir
          });
        });
        _defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
          _this.changeSlide(options);
        });
        _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
          var preventDefault = function preventDefault2(e) {
            e = e || window.event;
            if (e.preventDefault)
              e.preventDefault();
            e.returnValue = false;
          };
          window.ontouchmove = preventDefault;
        });
        _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
          window.ontouchmove = null;
        });
        _defineProperty(_assertThisInitialized(_this), "swipeStart", function(e) {
          if (_this.props.verticalSwiping) {
            _this.disableBodyScroll();
          }
          var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
          state !== "" && _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeMove", function(e) {
          var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
            trackRef: _this.track,
            listRef: _this.list,
            slideIndex: _this.state.currentSlide
          }));
          if (!state)
            return;
          if (state["swiping"]) {
            _this.clickable = false;
          }
          _this.setState(state);
        });
        _defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e) {
          var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
            trackRef: _this.track,
            listRef: _this.list,
            slideIndex: _this.state.currentSlide
          }));
          if (!state)
            return;
          var triggerSlideHandler = state["triggerSlideHandler"];
          delete state["triggerSlideHandler"];
          _this.setState(state);
          if (triggerSlideHandler === void 0)
            return;
          _this.slideHandler(triggerSlideHandler);
          if (_this.props.verticalSwiping) {
            _this.enableBodyScroll();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "touchEnd", function(e) {
          _this.swipeEnd(e);
          _this.clickable = true;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
          _this.callbackTimers.push(setTimeout(function() {
            return _this.changeSlide({
              message: "previous"
            });
          }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
          _this.callbackTimers.push(setTimeout(function() {
            return _this.changeSlide({
              message: "next"
            });
          }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
          var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          slide = Number(slide);
          if (isNaN(slide))
            return "";
          _this.callbackTimers.push(setTimeout(function() {
            return _this.changeSlide({
              message: "index",
              index: slide,
              currentSlide: _this.state.currentSlide
            }, dontAnimate);
          }, 0));
        });
        _defineProperty(_assertThisInitialized(_this), "play", function() {
          var nextIndex;
          if (_this.props.rtl) {
            nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
          } else {
            if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
              nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
            } else {
              return false;
            }
          }
          _this.slideHandler(nextIndex);
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
          if (_this.autoplayTimer) {
            clearInterval(_this.autoplayTimer);
          }
          var autoplaying = _this.state.autoplaying;
          if (playType === "update") {
            if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
              return;
            }
          } else if (playType === "leave") {
            if (autoplaying === "paused" || autoplaying === "focused") {
              return;
            }
          } else if (playType === "blur") {
            if (autoplaying === "paused" || autoplaying === "hovered") {
              return;
            }
          }
          _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
          _this.setState({
            autoplaying: "playing"
          });
        });
        _defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
          if (_this.autoplayTimer) {
            clearInterval(_this.autoplayTimer);
            _this.autoplayTimer = null;
          }
          var autoplaying = _this.state.autoplaying;
          if (pauseType === "paused") {
            _this.setState({
              autoplaying: "paused"
            });
          } else if (pauseType === "focused") {
            if (autoplaying === "hovered" || autoplaying === "playing") {
              _this.setState({
                autoplaying: "focused"
              });
            }
          } else {
            if (autoplaying === "playing") {
              _this.setState({
                autoplaying: "hovered"
              });
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
          return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
          return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
          return _this.props.autoplay && _this.pause("hovered");
        });
        _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
          return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
          return _this.props.autoplay && _this.pause("focused");
        });
        _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
          return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
        });
        _defineProperty(_assertThisInitialized(_this), "render", function() {
          var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
            "slick-vertical": _this.props.vertical,
            "slick-initialized": true
          });
          var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
          var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
          var pauseOnHover = _this.props.pauseOnHover;
          trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
            onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
            onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
            onMouseOver: pauseOnHover ? _this.onTrackOver : null,
            focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
          });
          var dots;
          if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
            var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
            var pauseOnDotsHover = _this.props.pauseOnDotsHover;
            dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
              clickHandler: _this.changeSlide,
              onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
              onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
              onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
            });
            dots = /* @__PURE__ */ _react["default"].createElement(_dots.Dots, dotProps);
          }
          var prevArrow, nextArrow;
          var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
          arrowProps.clickHandler = _this.changeSlide;
          if (_this.props.arrows) {
            prevArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
            nextArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.NextArrow, arrowProps);
          }
          var verticalHeightStyle = null;
          if (_this.props.vertical) {
            verticalHeightStyle = {
              height: _this.state.listHeight
            };
          }
          var centerPaddingStyle = null;
          if (_this.props.vertical === false) {
            if (_this.props.centerMode === true) {
              centerPaddingStyle = {
                padding: "0px " + _this.props.centerPadding
              };
            }
          } else {
            if (_this.props.centerMode === true) {
              centerPaddingStyle = {
                padding: _this.props.centerPadding + " 0px"
              };
            }
          }
          var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
          var touchMove = _this.props.touchMove;
          var listProps = {
            className: "slick-list",
            style: listStyle,
            onClick: _this.clickHandler,
            onMouseDown: touchMove ? _this.swipeStart : null,
            onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
            onMouseUp: touchMove ? _this.swipeEnd : null,
            onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
            onTouchStart: touchMove ? _this.swipeStart : null,
            onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
            onTouchEnd: touchMove ? _this.touchEnd : null,
            onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
            onKeyDown: _this.props.accessibility ? _this.keyHandler : null
          };
          var innerSliderProps = {
            className,
            dir: "ltr",
            style: _this.props.style
          };
          if (_this.props.unslick) {
            listProps = {
              className: "slick-list"
            };
            innerSliderProps = {
              className
            };
          }
          return /* @__PURE__ */ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /* @__PURE__ */ _react["default"].createElement("div", _extends({
            ref: _this.listRefHandler
          }, listProps), /* @__PURE__ */ _react["default"].createElement(_track.Track, _extends({
            ref: _this.trackRefHandler
          }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
        });
        _this.list = null;
        _this.track = null;
        _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
          currentSlide: _this.props.initialSlide,
          slideCount: _react["default"].Children.count(_this.props.children)
        });
        _this.callbackTimers = [];
        _this.clickable = true;
        _this.debouncedResize = null;
        var ssrState = _this.ssrInit();
        _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
        return _this;
      }
      _createClass(InnerSlider2, [{
        key: "didPropsChange",
        value: function didPropsChange(prevProps) {
          var setTrackStyle = false;
          for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];
            if (!prevProps.hasOwnProperty(key)) {
              setTrackStyle = true;
              break;
            }
            if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
              continue;
            }
            if (prevProps[key] !== this.props[key]) {
              setTrackStyle = true;
              break;
            }
          }
          return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
        }
      }]);
      return InnerSlider2;
    }(_react["default"].Component);
    exports.InnerSlider = InnerSlider;
  }
});

// node_modules/string-convert/camel2hyphen.js
var require_camel2hyphen = __commonJS({
  "node_modules/string-convert/camel2hyphen.js"(exports, module) {
    var camel2hyphen = function(str) {
      return str.replace(/[A-Z]/g, function(match) {
        return "-" + match.toLowerCase();
      }).toLowerCase();
    };
    module.exports = camel2hyphen;
  }
});

// node_modules/json2mq/index.js
var require_json2mq = __commonJS({
  "node_modules/json2mq/index.js"(exports, module) {
    var camel2hyphen = require_camel2hyphen();
    var isDimension = function(feature) {
      var re = /[height|width]$/;
      return re.test(feature);
    };
    var obj2mq = function(obj) {
      var mq = "";
      var features = Object.keys(obj);
      features.forEach(function(feature, index2) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        if (isDimension(feature) && typeof value === "number") {
          value = value + "px";
        }
        if (value === true) {
          mq += feature;
        } else if (value === false) {
          mq += "not " + feature;
        } else {
          mq += "(" + feature + ": " + value + ")";
        }
        if (index2 < features.length - 1) {
          mq += " and ";
        }
      });
      return mq;
    };
    var json2mq = function(query) {
      var mq = "";
      if (typeof query === "string") {
        return query;
      }
      if (query instanceof Array) {
        query.forEach(function(q, index2) {
          mq += obj2mq(q);
          if (index2 < query.length - 1) {
            mq += ", ";
          }
        });
        return mq;
      }
      return obj2mq(query);
    };
    module.exports = json2mq;
  }
});

// node_modules/react-slick/lib/default-props.js
var require_default_props = __commonJS({
  "node_modules/react-slick/lib/default-props.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var defaultProps = {
      accessibility: true,
      adaptiveHeight: false,
      afterChange: null,
      appendDots: function appendDots(dots) {
        return /* @__PURE__ */ _react["default"].createElement("ul", {
          style: {
            display: "block"
          }
        }, dots);
      },
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: false,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function customPaging(i) {
        return /* @__PURE__ */ _react["default"].createElement("button", null, i + 1);
      },
      dots: false,
      dotsClass: "slick-dots",
      draggable: true,
      easing: "linear",
      edgeFriction: 0.35,
      fade: false,
      focusOnSelect: false,
      infinite: true,
      initialSlide: 0,
      lazyLoad: null,
      nextArrow: null,
      onEdge: null,
      onInit: null,
      onLazyLoadError: null,
      onReInit: null,
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      prevArrow: null,
      responsive: null,
      rows: 1,
      rtl: false,
      slide: "div",
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: true,
      swipeEvent: null,
      swipeToSlide: false,
      touchMove: true,
      touchThreshold: 5,
      useCSS: true,
      useTransform: true,
      variableWidth: false,
      vertical: false,
      waitForAnimate: true
    };
    var _default = defaultProps;
    exports["default"] = _default;
  }
});

// node_modules/enquire.js/src/QueryHandler.js
var require_QueryHandler = __commonJS({
  "node_modules/enquire.js/src/QueryHandler.js"(exports, module) {
    function QueryHandler(options) {
      this.options = options;
      !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {
      constructor: QueryHandler,
      /**
       * coordinates setup of the handler
       *
       * @function
       */
      setup: function() {
        if (this.options.setup) {
          this.options.setup();
        }
        this.initialised = true;
      },
      /**
       * coordinates setup and triggering of the handler
       *
       * @function
       */
      on: function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
      },
      /**
       * coordinates the unmatch event for the handler
       *
       * @function
       */
      off: function() {
        this.options.unmatch && this.options.unmatch();
      },
      /**
       * called when a handler is to be destroyed.
       * delegates to the destroy or unmatch callbacks, depending on availability.
       *
       * @function
       */
      destroy: function() {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      /**
       * determines equality by reference.
       * if object is supplied compare options, if function, compare match callback
       *
       * @function
       * @param {object || function} [target] the target for comparison
       */
      equals: function(target) {
        return this.options === target || this.options.match === target;
      }
    };
    module.exports = QueryHandler;
  }
});

// node_modules/enquire.js/src/Util.js
var require_Util = __commonJS({
  "node_modules/enquire.js/src/Util.js"(exports, module) {
    function each(collection, fn) {
      var i = 0, length = collection.length, cont;
      for (i; i < length; i++) {
        cont = fn(collection[i], i);
        if (cont === false) {
          break;
        }
      }
    }
    function isArray(target) {
      return Object.prototype.toString.apply(target) === "[object Array]";
    }
    function isFunction(target) {
      return typeof target === "function";
    }
    module.exports = {
      isFunction,
      isArray,
      each
    };
  }
});

// node_modules/enquire.js/src/MediaQuery.js
var require_MediaQuery = __commonJS({
  "node_modules/enquire.js/src/MediaQuery.js"(exports, module) {
    var QueryHandler = require_QueryHandler();
    var each = require_Util().each;
    function MediaQuery(query, isUnconditional) {
      this.query = query;
      this.isUnconditional = isUnconditional;
      this.handlers = [];
      this.mql = window.matchMedia(query);
      var self2 = this;
      this.listener = function(mql) {
        self2.mql = mql.currentTarget || mql;
        self2.assess();
      };
      this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {
      constuctor: MediaQuery,
      /**
       * add a handler for this query, triggering if already active
       *
       * @param {object} handler
       * @param {function} handler.match callback for when query is activated
       * @param {function} [handler.unmatch] callback for when query is deactivated
       * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
       * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
       */
      addHandler: function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);
        this.matches() && qh.on();
      },
      /**
       * removes the given handler from the collection, and calls it's destroy methods
       *
       * @param {object || function} handler the handler to remove
       */
      removeHandler: function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
          if (h.equals(handler)) {
            h.destroy();
            return !handlers.splice(i, 1);
          }
        });
      },
      /**
       * Determine whether the media query should be considered a match
       *
       * @return {Boolean} true if media query can be considered a match, false otherwise
       */
      matches: function() {
        return this.mql.matches || this.isUnconditional;
      },
      /**
       * Clears all handlers and unbinds events
       */
      clear: function() {
        each(this.handlers, function(handler) {
          handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0;
      },
      /*
          * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
          */
      assess: function() {
        var action = this.matches() ? "on" : "off";
        each(this.handlers, function(handler) {
          handler[action]();
        });
      }
    };
    module.exports = MediaQuery;
  }
});

// node_modules/enquire.js/src/MediaQueryDispatch.js
var require_MediaQueryDispatch = __commonJS({
  "node_modules/enquire.js/src/MediaQueryDispatch.js"(exports, module) {
    var MediaQuery = require_MediaQuery();
    var Util = require_Util();
    var each = Util.each;
    var isFunction = Util.isFunction;
    var isArray = Util.isArray;
    function MediaQueryDispatch() {
      if (!window.matchMedia) {
        throw new Error("matchMedia not present, legacy browsers require a polyfill");
      }
      this.queries = {};
      this.browserIsIncapable = !window.matchMedia("only all").matches;
    }
    MediaQueryDispatch.prototype = {
      constructor: MediaQueryDispatch,
      /**
       * Registers a handler for the given media query
       *
       * @param {string} q the media query
       * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
       * @param {function} options.match fired when query matched
       * @param {function} [options.unmatch] fired when a query is no longer matched
       * @param {function} [options.setup] fired when handler first triggered
       * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
       * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
       */
      register: function(q, options, shouldDegrade) {
        var queries = this.queries, isUnconditional = shouldDegrade && this.browserIsIncapable;
        if (!queries[q]) {
          queries[q] = new MediaQuery(q, isUnconditional);
        }
        if (isFunction(options)) {
          options = { match: options };
        }
        if (!isArray(options)) {
          options = [options];
        }
        each(options, function(handler) {
          if (isFunction(handler)) {
            handler = { match: handler };
          }
          queries[q].addHandler(handler);
        });
        return this;
      },
      /**
       * unregisters a query and all it's handlers, or a specific handler for a query
       *
       * @param {string} q the media query to target
       * @param {object || function} [handler] specific handler to unregister
       */
      unregister: function(q, handler) {
        var query = this.queries[q];
        if (query) {
          if (handler) {
            query.removeHandler(handler);
          } else {
            query.clear();
            delete this.queries[q];
          }
        }
        return this;
      }
    };
    module.exports = MediaQueryDispatch;
  }
});

// node_modules/enquire.js/src/index.js
var require_src = __commonJS({
  "node_modules/enquire.js/src/index.js"(exports, module) {
    var MediaQueryDispatch = require_MediaQueryDispatch();
    module.exports = new MediaQueryDispatch();
  }
});

// node_modules/react-slick/lib/slider.js
var require_slider = __commonJS({
  "node_modules/react-slick/lib/slider.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _innerSlider = require_inner_slider();
    var _json2mq = _interopRequireDefault(require_json2mq());
    var _defaultProps = _interopRequireDefault(require_default_props());
    var _innerSliderUtils = require_innerSliderUtils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var enquire = (0, _innerSliderUtils.canUseDOM)() && require_src();
    var Slider = /* @__PURE__ */ function(_React$Component) {
      _inherits(Slider2, _React$Component);
      var _super = _createSuper(Slider2);
      function Slider2(props) {
        var _this;
        _classCallCheck(this, Slider2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function(ref) {
          return _this.innerSlider = ref;
        });
        _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
          return _this.innerSlider.slickPrev();
        });
        _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
          return _this.innerSlider.slickNext();
        });
        _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
          var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return _this.innerSlider.slickGoTo(slide, dontAnimate);
        });
        _defineProperty(_assertThisInitialized(_this), "slickPause", function() {
          return _this.innerSlider.pause("paused");
        });
        _defineProperty(_assertThisInitialized(_this), "slickPlay", function() {
          return _this.innerSlider.autoPlay("play");
        });
        _this.state = {
          breakpoint: null
        };
        _this._responsiveMediaHandlers = [];
        return _this;
      }
      _createClass(Slider2, [{
        key: "media",
        value: function media(query, handler) {
          enquire.register(query, handler);
          this._responsiveMediaHandlers.push({
            query,
            handler
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          if (this.props.responsive) {
            var breakpoints = this.props.responsive.map(function(breakpt) {
              return breakpt.breakpoint;
            });
            breakpoints.sort(function(x, y) {
              return x - y;
            });
            breakpoints.forEach(function(breakpoint, index2) {
              var bQuery;
              if (index2 === 0) {
                bQuery = (0, _json2mq["default"])({
                  minWidth: 0,
                  maxWidth: breakpoint
                });
              } else {
                bQuery = (0, _json2mq["default"])({
                  minWidth: breakpoints[index2 - 1] + 1,
                  maxWidth: breakpoint
                });
              }
              (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
                _this2.setState({
                  breakpoint
                });
              });
            });
            var query = (0, _json2mq["default"])({
              minWidth: breakpoints.slice(-1)[0]
            });
            (0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
              _this2.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._responsiveMediaHandlers.forEach(function(obj) {
            enquire.unregister(obj.query, obj.handler);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var settings;
          var newProps;
          if (this.state.breakpoint) {
            newProps = this.props.responsive.filter(function(resp) {
              return resp.breakpoint === _this3.state.breakpoint;
            });
            settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
          } else {
            settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
          }
          if (settings.centerMode) {
            if (settings.slidesToScroll > 1 && true) {
              console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
            }
            settings.slidesToScroll = 1;
          }
          if (settings.fade) {
            if (settings.slidesToShow > 1 && true) {
              console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
            }
            if (settings.slidesToScroll > 1 && true) {
              console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
            }
            settings.slidesToShow = 1;
            settings.slidesToScroll = 1;
          }
          var children = _react["default"].Children.toArray(this.props.children);
          children = children.filter(function(child) {
            if (typeof child === "string") {
              return !!child.trim();
            }
            return !!child;
          });
          if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
            console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
            settings.variableWidth = false;
          }
          var newChildren = [];
          var currentWidth = null;
          for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
            var newSlide = [];
            for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
              var row = [];
              for (var k = j; k < j + settings.slidesPerRow; k += 1) {
                if (settings.variableWidth && children[k].props.style) {
                  currentWidth = children[k].props.style.width;
                }
                if (k >= children.length)
                  break;
                row.push(/* @__PURE__ */ _react["default"].cloneElement(children[k], {
                  key: 100 * i + 10 * j + k,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / settings.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              }
              newSlide.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: 10 * i + j
              }, row));
            }
            if (settings.variableWidth) {
              newChildren.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: i,
                style: {
                  width: currentWidth
                }
              }, newSlide));
            } else {
              newChildren.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: i
              }, newSlide));
            }
          }
          if (settings === "unslick") {
            var className = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ _react["default"].createElement("div", {
              className
            }, children);
          } else if (newChildren.length <= settings.slidesToShow) {
            settings.unslick = true;
          }
          return /* @__PURE__ */ _react["default"].createElement(_innerSlider.InnerSlider, _extends({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, settings), newChildren);
        }
      }]);
      return Slider2;
    }(_react["default"].Component);
    exports["default"] = Slider;
  }
});

// node_modules/react-slick/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-slick/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _slider = _interopRequireDefault(require_slider());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = _slider["default"];
    exports["default"] = _default;
  }
});

export {
  require_lib
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-DQ7TSKHG.js.map
