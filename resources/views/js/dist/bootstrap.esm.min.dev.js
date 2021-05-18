"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_UID = 1e6,
    MILLISECONDS_MULTIPLIER = 1e3,
    TRANSITION_END = "transitionend",
    toType = function toType(e) {
  return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
},
    getUID = function getUID(e) {
  do {
    e += Math.floor(1e6 * Math.random());
  } while (document.getElementById(e));

  return e;
},
    getSelector = function getSelector(e) {
  var t = e.getAttribute("data-bs-target");

  if (!t || "#" === t) {
    var n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
    n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null;
  }

  return t;
},
    getSelectorFromElement = function getSelectorFromElement(e) {
  var t = getSelector(e);
  return t && document.querySelector(t) ? t : null;
},
    getElementFromSelector = function getElementFromSelector(e) {
  var t = getSelector(e);
  return t ? document.querySelector(t) : null;
},
    getTransitionDurationFromElement = function getTransitionDurationFromElement(e) {
  if (!e) return 0;

  var _window$getComputedSt = window.getComputedStyle(e),
      t = _window$getComputedSt.transitionDuration,
      n = _window$getComputedSt.transitionDelay;

  var i = Number.parseFloat(t),
      s = Number.parseFloat(n);
  return i || s ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
},
    triggerTransitionEnd = function triggerTransitionEnd(e) {
  e.dispatchEvent(new Event(TRANSITION_END));
},
    isElement = function isElement(e) {
  return (e[0] || e).nodeType;
},
    emulateTransitionEnd = function emulateTransitionEnd(e, t) {
  var n = !1;
  var i = t + 5;
  e.addEventListener(TRANSITION_END, function t() {
    n = !0, e.removeEventListener(TRANSITION_END, t);
  }), setTimeout(function () {
    n || triggerTransitionEnd(e);
  }, i);
},
    typeCheckConfig = function typeCheckConfig(e, t, n) {
  Object.keys(n).forEach(function (i) {
    var s = n[i],
        o = t[i],
        r = o && isElement(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
    var a;
    if (!new RegExp(s).test(r)) throw new TypeError(e.toUpperCase() + ": " + "Option \"".concat(i, "\" provided type \"").concat(r, "\" ") + "but expected type \"".concat(s, "\"."));
  });
},
    isVisible = function isVisible(e) {
  if (!e) return !1;

  if (e.style && e.parentNode && e.parentNode.style) {
    var t = getComputedStyle(e),
        n = getComputedStyle(e.parentNode);
    return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility;
  }

  return !1;
},
    isDisabled = function isDisabled(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
},
    findShadowRoot = function findShadowRoot(e) {
  if (!document.documentElement.attachShadow) return null;

  if ("function" == typeof e.getRootNode) {
    var t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }

  return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
},
    noop = function noop() {
  return function () {};
},
    reflow = function reflow(e) {
  return e.offsetHeight;
},
    getjQuery = function getjQuery() {
  var _window = window,
      e = _window.jQuery;
  return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
},
    onDOMContentLoaded = function onDOMContentLoaded(e) {
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
},
    isRTL = function isRTL() {
  return "rtl" === document.documentElement.dir;
},
    defineJQueryPlugin = function defineJQueryPlugin(e, t) {
  var n;
  n = function n() {
    var n = getjQuery();

    if (n) {
      var i = n.fn[e];
      n.fn[e] = t.jQueryInterface, n.fn[e].Constructor = t, n.fn[e].noConflict = function () {
        return n.fn[e] = i, t.jQueryInterface;
      };
    }
  }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n();
},
    elementMap = new Map();

var Data = {
  set: function set(e, t, n) {
    elementMap.has(e) || elementMap.set(e, new Map());
    var i = elementMap.get(e);
    i.has(t) || 0 === i.size ? i.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
  },
  get: function get(e, t) {
    return elementMap.has(e) && elementMap.get(e).get(t) || null;
  },
  remove: function remove(e, t) {
    if (!elementMap.has(e)) return;
    var n = elementMap.get(e);
    n["delete"](t), 0 === n.size && elementMap["delete"](e);
  }
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/,
    stripNameRegex = /\..*/,
    stripUidRegex = /::\d+$/,
    eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
},
    nativeEvents = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function getUidEvent(e, t) {
  return t && "".concat(t, "::").concat(uidEvent++) || e.uidEvent || uidEvent++;
}

function getEvent(e) {
  var t = getUidEvent(e);
  return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
}

function bootstrapHandler(e, t) {
  return function n(i) {
    return i.delegateTarget = e, n.oneOff && EventHandler.off(e, i.type, t), t.apply(e, [i]);
  };
}

function bootstrapDelegationHandler(e, t, n) {
  return function i(s) {
    var o = e.querySelectorAll(t);

    for (var _t = s.target; _t && _t !== this; _t = _t.parentNode) {
      for (var r = o.length; r--;) {
        if (o[r] === _t) return s.delegateTarget = _t, i.oneOff && EventHandler.off(e, s.type, n), n.apply(_t, [s]);
      }
    }

    return null;
  };
}

function findHandler(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var i = Object.keys(e);

  for (var s = 0, o = i.length; s < o; s++) {
    var _o = e[i[s]];
    if (_o.originalHandler === t && _o.delegationSelector === n) return _o;
  }

  return null;
}

function normalizeParams(e, t, n) {
  var i = "string" == typeof t,
      s = i ? n : t;
  var o = e.replace(stripNameRegex, "");
  var r = customEvents[o];
  return r && (o = r), nativeEvents.has(o) || (o = e), [i, s, o];
}

function addHandler(e, t, n, i, s) {
  if ("string" != typeof t || !e) return;
  n || (n = i, i = null);

  var _normalizeParams = normalizeParams(t, n, i),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      o = _normalizeParams2[0],
      r = _normalizeParams2[1],
      a = _normalizeParams2[2],
      l = getEvent(e),
      c = l[a] || (l[a] = {}),
      E = findHandler(c, r, o ? n : null);

  if (E) return void (E.oneOff = E.oneOff && s);

  var d = getUidEvent(r, t.replace(namespaceRegex, "")),
      _ = o ? bootstrapDelegationHandler(e, n, i) : bootstrapHandler(e, n);

  _.delegationSelector = o ? n : null, _.originalHandler = r, _.oneOff = s, _.uidEvent = d, c[d] = _, e.addEventListener(a, _, o);
}

function removeHandler(e, t, n, i, s) {
  var o = findHandler(t[n], i, s);
  o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent]);
}

function removeNamespacedHandlers(e, t, n, i) {
  var s = t[n] || {};
  Object.keys(s).forEach(function (o) {
    if (o.includes(i)) {
      var _i2 = s[o];
      removeHandler(e, t, n, _i2.originalHandler, _i2.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(e, t, n, i) {
    addHandler(e, t, n, i, !1);
  },
  one: function one(e, t, n, i) {
    addHandler(e, t, n, i, !0);
  },
  off: function off(e, t, n, i) {
    if ("string" != typeof t || !e) return;

    var _normalizeParams3 = normalizeParams(t, n, i),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        s = _normalizeParams4[0],
        o = _normalizeParams4[1],
        r = _normalizeParams4[2],
        a = r !== t,
        l = getEvent(e),
        c = t.startsWith(".");

    if (void 0 !== o) {
      if (!l || !l[r]) return;
      return void removeHandler(e, l, r, o, s ? n : null);
    }

    c && Object.keys(l).forEach(function (n) {
      removeNamespacedHandlers(e, l, n, t.slice(1));
    });
    var E = l[r] || {};
    Object.keys(E).forEach(function (n) {
      var i = n.replace(stripUidRegex, "");

      if (!a || t.includes(i)) {
        var _t2 = E[n];
        removeHandler(e, l, r, _t2.originalHandler, _t2.delegationSelector);
      }
    });
  },
  trigger: function trigger(e, t, n) {
    if ("string" != typeof t || !e) return null;
    var i = getjQuery(),
        s = t.replace(stripNameRegex, ""),
        o = t !== s,
        r = nativeEvents.has(s);
    var a,
        l = !0,
        c = !0,
        E = !1,
        d = null;
    return o && i && (a = i.Event(t, n), i(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), E = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), void 0 !== n && Object.keys(n).forEach(function (e) {
      Object.defineProperty(d, e, {
        get: function get() {
          return n[e];
        }
      });
    }), E && d.preventDefault(), c && e.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
  }
},
    VERSION = "5.0.0-beta3";

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(e) {
    _classCallCheck(this, BaseComponent);

    (e = "string" == typeof e ? document.querySelector(e) : e) && (this._element = e, Data.set(this._element, this.constructor.DATA_KEY, this));
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY), this._element = null;
    }
  }], [{
    key: "getInstance",
    value: function getInstance(e) {
      return Data.get(e, this.DATA_KEY);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return BaseComponent;
}();

var NAME$b = "alert",
    DATA_KEY$b = "bs.alert",
    EVENT_KEY$b = ".bs.alert",
    DATA_API_KEY$8 = ".data-api",
    SELECTOR_DISMISS = '[data-bs-dismiss="alert"]',
    EVENT_CLOSE = "close.bs.alert",
    EVENT_CLOSED = "closed.bs.alert",
    EVENT_CLICK_DATA_API$7 = "click.bs.alert.data-api",
    CLASS_NAME_ALERT = "alert",
    CLASS_NAME_FADE$5 = "fade",
    CLASS_NAME_SHOW$8 = "show";

var Alert =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "close",
    value: function close(e) {
      var t = e ? this._getRootElement(e) : this._element,
          n = this._triggerCloseEvent(t);

      null === n || n.defaultPrevented || this._removeElement(t);
    }
  }, {
    key: "_getRootElement",
    value: function _getRootElement(e) {
      return getElementFromSelector(e) || e.closest(".alert");
    }
  }, {
    key: "_triggerCloseEvent",
    value: function _triggerCloseEvent(e) {
      return EventHandler.trigger(e, EVENT_CLOSE);
    }
  }, {
    key: "_removeElement",
    value: function _removeElement(e) {
      var _this = this;

      if (e.classList.remove("show"), !e.classList.contains("fade")) return void this._destroyElement(e);
      var t = getTransitionDurationFromElement(e);
      EventHandler.one(e, "transitionend", function () {
        return _this._destroyElement(e);
      }), emulateTransitionEnd(e, t);
    }
  }, {
    key: "_destroyElement",
    value: function _destroyElement(e) {
      e.parentNode && e.parentNode.removeChild(e), EventHandler.trigger(e, EVENT_CLOSED);
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, "bs.alert");
        t || (t = new Alert(this)), "close" === e && t[e](this);
      });
    }
  }, {
    key: "handleDismiss",
    value: function handleDismiss(e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.alert";
    }
  }]);

  return Alert;
}(BaseComponent);

exports.Alert = Alert;
EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert())), defineJQueryPlugin(NAME$b, Alert);
var NAME$a = "button",
    DATA_KEY$a = "bs.button",
    EVENT_KEY$a = ".bs.button",
    DATA_API_KEY$7 = ".data-api",
    CLASS_NAME_ACTIVE$3 = "active",
    SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]',
    EVENT_CLICK_DATA_API$6 = "click.bs.button.data-api";

var Button =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "toggle",
    value: function toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$a);
        t || (t = new Button(this)), "toggle" === e && t[e]();
      });
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$a;
    }
  }]);

  return Button;
}(BaseComponent);

exports.Button = Button;

function normalizeData(e) {
  return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
}

function normalizeDataKey(e) {
  return e.replace(/[A-Z]/g, function (e) {
    return "-" + e.toLowerCase();
  });
}

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (e) {
  e.preventDefault();
  var t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
  var n = Data.get(t, DATA_KEY$a);
  n || (n = new Button(t)), n.toggle();
}), defineJQueryPlugin(NAME$a, Button);
var Manipulator = {
  setDataAttribute: function setDataAttribute(e, t, n) {
    e.setAttribute("data-bs-" + normalizeDataKey(t), n);
  },
  removeDataAttribute: function removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-" + normalizeDataKey(t));
  },
  getDataAttributes: function getDataAttributes(e) {
    if (!e) return {};
    var t = {};
    return Object.keys(e.dataset).filter(function (e) {
      return e.startsWith("bs");
    }).forEach(function (n) {
      var i = n.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = normalizeData(e.dataset[n]);
    }), t;
  },
  getDataAttribute: function getDataAttribute(e, t) {
    return normalizeData(e.getAttribute("data-bs-" + normalizeDataKey(t)));
  },
  offset: function offset(e) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position: function position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  }
},
    NODE_TEXT = 3,
    SelectorEngine = {
  find: function find(e) {
    var _ref;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(t, e)));
  },
  findOne: function findOne(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(t, e);
  },
  children: function children(e, t) {
    var _ref2;

    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(e.children)).filter(function (e) {
      return e.matches(t);
    });
  },
  parents: function parents(e, t) {
    var n = [];
    var i = e.parentNode;

    for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
      i.matches(t) && n.push(i), i = i.parentNode;
    }

    return n;
  },
  prev: function prev(e, t) {
    var n = e.previousElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.previousElementSibling;
    }

    return [];
  },
  next: function next(e, t) {
    var n = e.nextElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.nextElementSibling;
    }

    return [];
  }
},
    NAME$9 = "carousel",
    DATA_KEY$9 = "bs.carousel",
    EVENT_KEY$9 = ".bs.carousel",
    DATA_API_KEY$6 = ".data-api",
    ARROW_LEFT_KEY = "ArrowLeft",
    ARROW_RIGHT_KEY = "ArrowRight",
    TOUCHEVENT_COMPAT_WAIT = 500,
    SWIPE_THRESHOLD = 40,
    Default$8 = {
  interval: 5e3,
  keyboard: !0,
  slide: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
},
    DefaultType$8 = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  slide: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
},
    ORDER_NEXT = "next",
    ORDER_PREV = "prev",
    DIRECTION_LEFT = "left",
    DIRECTION_RIGHT = "right",
    EVENT_SLIDE = "slide.bs.carousel",
    EVENT_SLID = "slid.bs.carousel",
    EVENT_KEYDOWN = "keydown.bs.carousel",
    EVENT_MOUSEENTER = "mouseenter.bs.carousel",
    EVENT_MOUSELEAVE = "mouseleave.bs.carousel",
    EVENT_TOUCHSTART = "touchstart.bs.carousel",
    EVENT_TOUCHMOVE = "touchmove.bs.carousel",
    EVENT_TOUCHEND = "touchend.bs.carousel",
    EVENT_POINTERDOWN = "pointerdown.bs.carousel",
    EVENT_POINTERUP = "pointerup.bs.carousel",
    EVENT_DRAG_START = "dragstart.bs.carousel",
    EVENT_LOAD_DATA_API$2 = "load.bs.carousel.data-api",
    EVENT_CLICK_DATA_API$5 = "click.bs.carousel.data-api",
    CLASS_NAME_CAROUSEL = "carousel",
    CLASS_NAME_ACTIVE$2 = "active",
    CLASS_NAME_SLIDE = "slide",
    CLASS_NAME_END = "carousel-item-end",
    CLASS_NAME_START = "carousel-item-start",
    CLASS_NAME_NEXT = "carousel-item-next",
    CLASS_NAME_PREV = "carousel-item-prev",
    CLASS_NAME_POINTER_EVENT = "pointer-event",
    SELECTOR_ACTIVE$1 = ".active",
    SELECTOR_ACTIVE_ITEM = ".active.carousel-item",
    SELECTOR_ITEM = ".carousel-item",
    SELECTOR_ITEM_IMG = ".carousel-item img",
    SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev",
    SELECTOR_INDICATORS = ".carousel-indicators",
    SELECTOR_INDICATOR = "[data-bs-target]",
    SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]",
    SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]',
    POINTER_TYPE_TOUCH = "touch",
    POINTER_TYPE_PEN = "pen";

var Carousel =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  function Carousel(e, t) {
    var _this2;

    _classCallCheck(this, Carousel);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, e)), _this2._items = null, _this2._interval = null, _this2._activeElement = null, _this2._isPaused = !1, _this2._isSliding = !1, _this2.touchTimeout = null, _this2.touchStartX = 0, _this2.touchDeltaX = 0, _this2._config = _this2._getConfig(t), _this2._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this2._element), _this2._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this2._pointerEvent = Boolean(window.PointerEvent), _this2._addEventListeners();
    return _this2;
  }

  _createClass(Carousel, [{
    key: "next",
    value: function next() {
      this._isSliding || this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._isSliding || this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(e) {
      e || (this._isPaused = !0), SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element) && (triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
  }, {
    key: "to",
    value: function to(e) {
      var _this3 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var t = this._getItemIndex(this._activeElement);

      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding) return void EventHandler.one(this._element, EVENT_SLID, function () {
        return _this3.to(e);
      });
      if (t === e) return this.pause(), void this.cycle();
      var n = e > t ? ORDER_NEXT : ORDER_PREV;

      this._slide(n, this._items[e]);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._element, EVENT_KEY$9), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$8, {}, e), typeCheckConfig(NAME$9, e, DefaultType$8), e;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      var t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this4 = this;

      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN, function (e) {
        return _this4._keydown(e);
      }), "hover" === this._config.pause && (EventHandler.on(this._element, EVENT_MOUSEENTER, function (e) {
        return _this4.pause(e);
      }), EventHandler.on(this._element, EVENT_MOUSELEAVE, function (e) {
        return _this4.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this5 = this;

      var e = function e(_e2) {
        !_this5._pointerEvent || "pen" !== _e2.pointerType && "touch" !== _e2.pointerType ? _this5._pointerEvent || (_this5.touchStartX = _e2.touches[0].clientX) : _this5.touchStartX = _e2.clientX;
      },
          t = function t(e) {
        _this5.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - _this5.touchStartX;
      },
          n = function n(e) {
        !_this5._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (_this5.touchDeltaX = e.clientX - _this5.touchStartX), _this5._handleSwipe(), "hover" === _this5._config.pause && (_this5.pause(), _this5.touchTimeout && clearTimeout(_this5.touchTimeout), _this5.touchTimeout = setTimeout(function (e) {
          return _this5.cycle(e);
        }, 500 + _this5._config.interval));
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (e) {
        EventHandler.on(e, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      }), this._pointerEvent ? (EventHandler.on(this._element, EVENT_POINTERDOWN, function (t) {
        return e(t);
      }), EventHandler.on(this._element, EVENT_POINTERUP, function (e) {
        return n(e);
      }), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, function (t) {
        return e(t);
      }), EventHandler.on(this._element, EVENT_TOUCHMOVE, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_TOUCHEND, function (e) {
        return n(e);
      }));
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      /input|textarea/i.test(e.target.tagName) || ("ArrowLeft" === e.key ? (e.preventDefault(), this._slide(DIRECTION_LEFT)) : "ArrowRight" === e.key && (e.preventDefault(), this._slide(DIRECTION_RIGHT)));
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(e) {
      return this._items = e && e.parentNode ? SelectorEngine.find(SELECTOR_ITEM, e.parentNode) : [], this._items.indexOf(e);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(e, t) {
      var n = e === ORDER_NEXT,
          i = e === ORDER_PREV,
          s = this._getItemIndex(t),
          o = this._items.length - 1;

      if ((i && 0 === s || n && s === o) && !this._config.wrap) return t;
      var r = (s + (i ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        var t = SelectorEngine.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        var n = SelectorEngine.find("[data-bs-target]", this._indicatorsElement);

        for (var _t3 = 0; _t3 < n.length; _t3++) {
          if (Number.parseInt(n[_t3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            n[_t3].classList.add("active"), n[_t3].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var e = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!e) return;
      var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }, {
    key: "_slide",
    value: function _slide(e, t) {
      var _this6 = this;

      var n = this._directionToOrder(e),
          i = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element),
          s = this._getItemIndex(i),
          o = t || this._getItemByOrder(n, i),
          r = this._getItemIndex(o),
          a = Boolean(this._interval),
          l = n === ORDER_NEXT,
          c = l ? CLASS_NAME_START : CLASS_NAME_END,
          E = l ? CLASS_NAME_NEXT : CLASS_NAME_PREV,
          d = this._orderToDirection(n);

      if (o && o.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(o, d).defaultPrevented && i && o) {
        if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o, this._element.classList.contains("slide")) {
          o.classList.add(E), reflow(o), i.classList.add(c), o.classList.add(c);

          var _e3 = getTransitionDurationFromElement(i);

          EventHandler.one(i, "transitionend", function () {
            o.classList.remove(c, E), o.classList.add("active"), i.classList.remove("active", E, c), _this6._isSliding = !1, setTimeout(function () {
              EventHandler.trigger(_this6._element, EVENT_SLID, {
                relatedTarget: o,
                direction: d,
                from: s,
                to: r
              });
            }, 0);
          }), emulateTransitionEnd(i, _e3);
        } else i.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: o,
          direction: d,
          from: s,
          to: r
        });

        a && this.cycle();
      }
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(e) {
      return [DIRECTION_RIGHT, DIRECTION_LEFT].includes(e) ? isRTL() ? e === DIRECTION_RIGHT ? ORDER_PREV : ORDER_NEXT : e === DIRECTION_RIGHT ? ORDER_NEXT : ORDER_PREV : e;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(e) {
      return [ORDER_NEXT, ORDER_PREV].includes(e) ? isRTL() ? e === ORDER_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT : e === ORDER_NEXT ? DIRECTION_RIGHT : DIRECTION_LEFT : e;
    }
  }], [{
    key: "carouselInterface",
    value: function carouselInterface(e, t) {
      var n = Data.get(e, DATA_KEY$9),
          i = _objectSpread({}, Default$8, {}, Manipulator.getDataAttributes(e));

      "object" == _typeof(t) && (i = _objectSpread({}, i, {}, t));
      var s = "string" == typeof t ? t : i.slide;
      if (n || (n = new Carousel(e, i)), "number" == typeof t) n.to(t);else if ("string" == typeof s) {
        if (void 0 === n[s]) throw new TypeError("No method named \"".concat(s, "\""));
        n[s]();
      } else i.interval && i.ride && (n.pause(), n.cycle());
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Carousel.carouselInterface(this, e);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(e) {
      var t = getElementFromSelector(this);
      if (!t || !t.classList.contains("carousel")) return;

      var n = _objectSpread({}, Manipulator.getDataAttributes(t), {}, Manipulator.getDataAttributes(this)),
          i = this.getAttribute("data-bs-slide-to");

      i && (n.interval = !1), Carousel.carouselInterface(t, n), i && Data.get(t, DATA_KEY$9).to(i), e.preventDefault();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$9;
    }
  }]);

  return Carousel;
}(BaseComponent);

exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler), EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var e = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var t = 0, n = e.length; t < n; t++) {
    Carousel.carouselInterface(e[t], Data.get(e[t], DATA_KEY$9));
  }
}), defineJQueryPlugin(NAME$9, Carousel);
var NAME$8 = "collapse",
    DATA_KEY$8 = "bs.collapse",
    EVENT_KEY$8 = ".bs.collapse",
    DATA_API_KEY$5 = ".data-api",
    Default$7 = {
  toggle: !0,
  parent: ""
},
    DefaultType$7 = {
  toggle: "boolean",
  parent: "(string|element)"
},
    EVENT_SHOW$5 = "show.bs.collapse",
    EVENT_SHOWN$5 = "shown.bs.collapse",
    EVENT_HIDE$5 = "hide.bs.collapse",
    EVENT_HIDDEN$5 = "hidden.bs.collapse",
    EVENT_CLICK_DATA_API$4 = "click.bs.collapse.data-api",
    CLASS_NAME_SHOW$7 = "show",
    CLASS_NAME_COLLAPSE = "collapse",
    CLASS_NAME_COLLAPSING = "collapsing",
    CLASS_NAME_COLLAPSED = "collapsed",
    WIDTH = "width",
    HEIGHT = "height",
    SELECTOR_ACTIVES = ".show, .collapsing",
    SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

var Collapse =
/*#__PURE__*/
function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  function Collapse(e, t) {
    var _this7;

    _classCallCheck(this, Collapse);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, e)), _this7._isTransitioning = !1, _this7._config = _this7._getConfig(t), _this7._triggerArray = SelectorEngine.find("".concat(SELECTOR_DATA_TOGGLE$4, "[href=\"#").concat(_this7._element.id, "\"],").concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-target=\"#").concat(_this7._element.id, "\"]"));
    var n = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var _e4 = 0, _t4 = n.length; _e4 < _t4; _e4++) {
      var _t5 = n[_e4],
          i = getSelectorFromElement(_t5),
          s = SelectorEngine.find(i).filter(function (e) {
        return e === _this7._element;
      });
      null !== i && s.length && (_this7._selector = i, _this7._triggerArray.push(_t5));
    }

    _this7._parent = _this7._config.parent ? _this7._getParent() : null, _this7._config.parent || _this7._addAriaAndCollapsedClass(_this7._element, _this7._triggerArray), _this7._config.toggle && _this7.toggle();
    return _this7;
  }

  _createClass(Collapse, [{
    key: "toggle",
    value: function toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this8 = this;

      if (this._isTransitioning || this._element.classList.contains("show")) return;
      var e, t;
      this._parent && (e = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (e) {
        return "string" == typeof _this8._config.parent ? e.getAttribute("data-bs-parent") === _this8._config.parent : e.classList.contains("collapse");
      }), 0 === e.length && (e = null));
      var n = SelectorEngine.findOne(this._selector);

      if (e) {
        var _i3 = e.find(function (e) {
          return n !== e;
        });

        if (t = _i3 ? Data.get(_i3, DATA_KEY$8) : null, t && t._isTransitioning) return;
      }

      if (EventHandler.trigger(this._element, EVENT_SHOW$5).defaultPrevented) return;
      e && e.forEach(function (e) {
        n !== e && Collapse.collapseInterface(e, "hide"), t || Data.set(e, DATA_KEY$8, null);
      });

      var i = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._triggerArray.length && this._triggerArray.forEach(function (e) {
        e.classList.remove("collapsed"), e.setAttribute("aria-expanded", !0);
      }), this.setTransitioning(!0);
      var s = "scroll" + (i[0].toUpperCase() + i.slice(1)),
          o = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, "transitionend", function () {
        _this8._element.classList.remove("collapsing"), _this8._element.classList.add("collapse", "show"), _this8._element.style[i] = "", _this8.setTransitioning(!1), EventHandler.trigger(_this8._element, EVENT_SHOWN$5);
      }), emulateTransitionEnd(this._element, o), this._element.style[i] = this._element[s] + "px";
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this9 = this;

      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$5).defaultPrevented) return;

      var e = this._getDimension();

      this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      var t = this._triggerArray.length;
      if (t > 0) for (var _e5 = 0; _e5 < t; _e5++) {
        var _t6 = this._triggerArray[_e5],
            _n2 = getElementFromSelector(_t6);

        _n2 && !_n2.classList.contains("show") && (_t6.classList.add("collapsed"), _t6.setAttribute("aria-expanded", !1));
      }
      this.setTransitioning(!0), this._element.style[e] = "";
      var n = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, "transitionend", function () {
        _this9.setTransitioning(!1), _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse"), EventHandler.trigger(_this9._element, EVENT_HIDDEN$5);
      }), emulateTransitionEnd(this._element, n);
    }
  }, {
    key: "setTransitioning",
    value: function setTransitioning(e) {
      this._isTransitioning = e;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(Collapse.prototype), "dispose", this).call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$7, {}, e)).toggle = Boolean(e.toggle), typeCheckConfig(NAME$8, e, DefaultType$7), e;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_getParent",
    value: function _getParent() {
      var _this10 = this;

      var e = this._config.parent;
      isElement(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = SelectorEngine.findOne(e);
      var t = "".concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-parent=\"").concat(e, "\"]");
      return SelectorEngine.find(t, e).forEach(function (e) {
        var t = getElementFromSelector(e);

        _this10._addAriaAndCollapsedClass(t, [e]);
      }), e;
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(e, t) {
      if (!e || !t.length) return;
      var n = e.classList.contains("show");
      t.forEach(function (e) {
        n ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", n);
      });
    }
  }], [{
    key: "collapseInterface",
    value: function collapseInterface(e, t) {
      var n = Data.get(e, DATA_KEY$8);

      var i = _objectSpread({}, Default$7, {}, Manipulator.getDataAttributes(e), {}, "object" == _typeof(t) && t ? t : {});

      if (!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new Collapse(e, i)), "string" == typeof t) {
        if (void 0 === n[t]) throw new TypeError("No method named \"".concat(t, "\""));
        n[t]();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Collapse.collapseInterface(this, e);
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$8;
    }
  }]);

  return Collapse;
}(BaseComponent);

exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (e) {
  ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
  var t = Manipulator.getDataAttributes(this),
      n = getSelectorFromElement(this);
  SelectorEngine.find(n).forEach(function (e) {
    var n = Data.get(e, DATA_KEY$8);
    var i;
    n ? (null === n._parent && "string" == typeof t.parent && (n._config.parent = t.parent, n._parent = n._getParent()), i = "toggle") : i = t, Collapse.collapseInterface(e, i);
  });
}), defineJQueryPlugin(NAME$8, Collapse);
var NAME$7 = "dropdown",
    DATA_KEY$7 = "bs.dropdown",
    EVENT_KEY$7 = ".bs.dropdown",
    DATA_API_KEY$4 = ".data-api",
    ESCAPE_KEY$2 = "Escape",
    SPACE_KEY = "Space",
    TAB_KEY = "Tab",
    ARROW_UP_KEY = "ArrowUp",
    ARROW_DOWN_KEY = "ArrowDown",
    RIGHT_MOUSE_BUTTON = 2,
    REGEXP_KEYDOWN = new RegExp("ArrowUp|ArrowDown|Escape"),
    EVENT_HIDE$4 = "hide.bs.dropdown",
    EVENT_HIDDEN$4 = "hidden.bs.dropdown",
    EVENT_SHOW$4 = "show.bs.dropdown",
    EVENT_SHOWN$4 = "shown.bs.dropdown",
    EVENT_CLICK = "click.bs.dropdown",
    EVENT_CLICK_DATA_API$3 = "click.bs.dropdown.data-api",
    EVENT_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api",
    EVENT_KEYUP_DATA_API = "keyup.bs.dropdown.data-api",
    CLASS_NAME_DISABLED = "disabled",
    CLASS_NAME_SHOW$6 = "show",
    CLASS_NAME_DROPUP = "dropup",
    CLASS_NAME_DROPEND = "dropend",
    CLASS_NAME_DROPSTART = "dropstart",
    CLASS_NAME_NAVBAR = "navbar",
    SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]',
    SELECTOR_MENU = ".dropdown-menu",
    SELECTOR_NAVBAR_NAV = ".navbar-nav",
    SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    PLACEMENT_TOP = isRTL() ? "top-end" : "top-start",
    PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end",
    PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start",
    PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end",
    PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start",
    PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start",
    Default$6 = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null
},
    DefaultType$6 = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)"
};

var Dropdown =
/*#__PURE__*/
function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  function Dropdown(e, t) {
    var _this11;

    _classCallCheck(this, Dropdown);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, e)), _this11._popper = null, _this11._config = _this11._getConfig(t), _this11._menu = _this11._getMenuElement(), _this11._inNavbar = _this11._detectNavbar(), _this11._addEventListeners();
    return _this11;
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      if (this._element.disabled || this._element.classList.contains("disabled")) return;

      var e = this._element.classList.contains("show");

      Dropdown.clearMenus(), e || this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;
      var e = Dropdown.getParentFromElement(this._element),
          t = {
        relatedTarget: this._element
      };

      if (!EventHandler.trigger(this._element, EVENT_SHOW$4, t).defaultPrevented) {
        var _ref3;

        if (this._inNavbar) Manipulator.setDataAttribute(this._menu, "popper", "none");else {
          if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          var _t7 = this._element;
          "parent" === this._config.reference ? _t7 = e : isElement(this._config.reference) ? (_t7 = this._config.reference, void 0 !== this._config.reference.jquery && (_t7 = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (_t7 = this._config.reference);

          var _n3 = this._getPopperConfig(),
              i = _n3.modifiers.find(function (e) {
            return "applyStyles" === e.name && !1 === e.enabled;
          });

          this._popper = Popper.createPopper(_t7, this._menu, _n3), i && Manipulator.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (e) {
          return EventHandler.on(e, "mouseover", null, function () {});
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), EventHandler.trigger(this._element, EVENT_SHOWN$4, t);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;
      var e = {
        relatedTarget: this._element
      };
      EventHandler.trigger(this._element, EVENT_HIDE$4, e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$4, e));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._element, EVENT_KEY$7), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this12 = this;

      EventHandler.on(this._element, EVENT_CLICK, function (e) {
        e.preventDefault(), _this12.toggle();
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if (e = _objectSpread({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, e), typeCheckConfig(NAME$7, e, this.constructor.DefaultType), "object" == _typeof(e.reference) && !isElement(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(NAME$7.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return e;
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var e = this._element.parentNode;
      if (e.classList.contains("dropend")) return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart")) return PLACEMENT_LEFT;
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this13 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this13._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), _objectSpread({}, e, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
    }
  }], [{
    key: "dropdownInterface",
    value: function dropdownInterface(e, t) {
      var n = Data.get(e, DATA_KEY$7);

      if (n || (n = new Dropdown(e, "object" == _typeof(t) ? t : null)), "string" == typeof t) {
        if (void 0 === n[t]) throw new TypeError("No method named \"".concat(t, "\""));
        n[t]();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, e);
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(e) {
      if (e) {
        if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
        if (/input|select|textarea|form/i.test(e.target.tagName)) return;
      }

      var t = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var _n4 = 0, i = t.length; _n4 < i; _n4++) {
        var _i4 = Data.get(t[_n4], DATA_KEY$7),
            s = {
          relatedTarget: t[_n4]
        };

        if (e && "click" === e.type && (s.clickEvent = e), !_i4) continue;
        var o = _i4._menu;

        if (t[_n4].classList.contains("show")) {
          var _ref4;

          if (e) {
            if ([_i4._element].some(function (t) {
              return e.composedPath().includes(t);
            })) continue;
            if ("keyup" === e.type && "Tab" === e.key && o.contains(e.target)) continue;
          }

          EventHandler.trigger(t[_n4], EVENT_HIDE$4, s).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (e) {
            return EventHandler.off(e, "mouseover", null, function () {});
          }), t[_n4].setAttribute("aria-expanded", "false"), _i4._popper && _i4._popper.destroy(), o.classList.remove("show"), t[_n4].classList.remove("show"), Manipulator.removeDataAttribute(o, "popper"), EventHandler.trigger(t[_n4], EVENT_HIDDEN$4, s));
        }
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(e) {
      return getElementFromSelector(e) || e.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(e) {
      if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(e.key)) return;
      if (e.preventDefault(), e.stopPropagation(), this.disabled || this.classList.contains("disabled")) return;
      var t = Dropdown.getParentFromElement(this),
          n = this.classList.contains("show");
      if ("Escape" === e.key) return (this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0]).focus(), void Dropdown.clearMenus();
      if (!n && ("ArrowUp" === e.key || "ArrowDown" === e.key)) return void (this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0]).click();
      if (!n || "Space" === e.key) return void Dropdown.clearMenus();
      var i = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, t).filter(isVisible);
      if (!i.length) return;
      var s = i.indexOf(e.target);
      "ArrowUp" === e.key && s > 0 && s--, "ArrowDown" === e.key && s < i.length - 1 && s++, s = -1 === s ? 0 : s, i[s].focus();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$6;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$7;
    }
  }]);

  return Dropdown;
}(BaseComponent);

exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (e) {
  e.preventDefault(), Dropdown.dropdownInterface(this);
}), defineJQueryPlugin(NAME$7, Dropdown);
var NAME$6 = "modal",
    DATA_KEY$6 = "bs.modal",
    EVENT_KEY$6 = ".bs.modal",
    DATA_API_KEY$3 = ".data-api",
    ESCAPE_KEY$1 = "Escape",
    Default$5 = {
  backdrop: !0,
  keyboard: !0,
  focus: !0
},
    DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
},
    EVENT_HIDE$3 = "hide.bs.modal",
    EVENT_HIDE_PREVENTED = "hidePrevented.bs.modal",
    EVENT_HIDDEN$3 = "hidden.bs.modal",
    EVENT_SHOW$3 = "show.bs.modal",
    EVENT_SHOWN$3 = "shown.bs.modal",
    EVENT_FOCUSIN$1 = "focusin.bs.modal",
    EVENT_RESIZE = "resize.bs.modal",
    EVENT_CLICK_DISMISS$2 = "click.dismiss.bs.modal",
    EVENT_KEYDOWN_DISMISS = "keydown.dismiss.bs.modal",
    EVENT_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal",
    EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
    EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api",
    CLASS_NAME_SCROLLBAR_MEASURER = "modal-scrollbar-measure",
    CLASS_NAME_BACKDROP = "modal-backdrop",
    CLASS_NAME_OPEN = "modal-open",
    CLASS_NAME_FADE$4 = "fade",
    CLASS_NAME_SHOW$5 = "show",
    CLASS_NAME_STATIC = "modal-static",
    SELECTOR_DIALOG = ".modal-dialog",
    SELECTOR_MODAL_BODY = ".modal-body",
    SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]',
    SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]',
    SELECTOR_FIXED_CONTENT$1 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    SELECTOR_STICKY_CONTENT$1 = ".sticky-top";

var Modal =
/*#__PURE__*/
function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  function Modal(e, t) {
    var _this14;

    _classCallCheck(this, Modal);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, e)), _this14._config = _this14._getConfig(t), _this14._dialog = SelectorEngine.findOne(".modal-dialog", _this14._element), _this14._backdrop = null, _this14._isShown = !1, _this14._isBodyOverflowing = !1, _this14._ignoreBackdropClick = !1, _this14._isTransitioning = !1, _this14._scrollbarWidth = 0;
    return _this14;
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this15 = this;

      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      var t = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: e
      });
      this._isShown || t.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, function (e) {
        return _this15.hide(e);
      }), EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this15._element, EVENT_MOUSEUP_DISMISS, function (e) {
          e.target === _this15._element && (_this15._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(function () {
        return _this15._showElement(e);
      }));
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this16 = this;

      if (e && e.preventDefault(), !this._isShown || this._isTransitioning) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented) return;
      this._isShown = !1;

      var t = this._isAnimated();

      if (t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.off(document, EVENT_FOCUSIN$1), this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS$2), EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS), t) {
        var _e6 = getTransitionDurationFromElement(this._element);

        EventHandler.one(this._element, "transitionend", function (e) {
          return _this16._hideModal(e);
        }), emulateTransitionEnd(this._element, _e6);
      } else this._hideModal();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._element, this._dialog].forEach(function (e) {
        return EventHandler.off(e, ".bs.modal");
      }), _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this), EventHandler.off(document, EVENT_FOCUSIN$1), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$5, {}, e), typeCheckConfig(NAME$6, e, DefaultType$5), e;
    }
  }, {
    key: "_showElement",
    value: function _showElement(e) {
      var _this17 = this;

      var t = this._isAnimated(),
          n = SelectorEngine.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && reflow(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

      var i = function i() {
        _this17._config.focus && _this17._element.focus(), _this17._isTransitioning = !1, EventHandler.trigger(_this17._element, EVENT_SHOWN$3, {
          relatedTarget: e
        });
      };

      if (t) {
        var _e7 = getTransitionDurationFromElement(this._dialog);

        EventHandler.one(this._dialog, "transitionend", i), emulateTransitionEnd(this._dialog, _e7);
      } else i();
    }
  }, {
    key: "_enforceFocus",
    value: function _enforceFocus() {
      var _this18 = this;

      EventHandler.off(document, EVENT_FOCUSIN$1), EventHandler.on(document, EVENT_FOCUSIN$1, function (e) {
        document === e.target || _this18._element === e.target || _this18._element.contains(e.target) || _this18._element.focus();
      });
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this19 = this;

      this._isShown ? EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (e) {
        _this19._config.keyboard && "Escape" === e.key ? (e.preventDefault(), _this19.hide()) : _this19._config.keyboard || "Escape" !== e.key || _this19._triggerBackdropTransition();
      }) : EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this20 = this;

      this._isShown ? EventHandler.on(window, EVENT_RESIZE, function () {
        return _this20._adjustDialog();
      }) : EventHandler.off(window, EVENT_RESIZE);
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this21 = this;

      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        document.body.classList.remove("modal-open"), _this21._resetAdjustments(), _this21._resetScrollbar(), EventHandler.trigger(_this21._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_removeBackdrop",
    value: function _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(e) {
      var _this22 = this;

      var t = this._isAnimated();

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", t && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, function (e) {
          _this22._ignoreBackdropClick ? _this22._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === _this22._config.backdrop ? _this22._triggerBackdropTransition() : _this22.hide());
        }), t && reflow(this._backdrop), this._backdrop.classList.add("show"), !t) return void e();

        var _n5 = getTransitionDurationFromElement(this._backdrop);

        EventHandler.one(this._backdrop, "transitionend", e), emulateTransitionEnd(this._backdrop, _n5);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove("show");

        var _n6 = function _n6() {
          _this22._removeBackdrop(), e();
        };

        if (t) {
          var _e8 = getTransitionDurationFromElement(this._backdrop);

          EventHandler.one(this._backdrop, "transitionend", _n6), emulateTransitionEnd(this._backdrop, _e8);
        } else _n6();
      } else e();
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains("fade");
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this23 = this;

      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED).defaultPrevented) return;
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
      var t = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, "transitionend"), EventHandler.one(this._element, "transitionend", function () {
        _this23._element.classList.remove("modal-static"), e || (EventHandler.one(_this23._element, "transitionend", function () {
          _this23._element.style.overflowY = "";
        }), emulateTransitionEnd(_this23._element, t));
      }), emulateTransitionEnd(this._element, t), this._element.focus();
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      (!this._isBodyOverflowing && e && !isRTL() || this._isBodyOverflowing && !e && isRTL()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !e && !isRTL() || !this._isBodyOverflowing && e && isRTL()) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
  }, {
    key: "_checkScrollbar",
    value: function _checkScrollbar() {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }
  }, {
    key: "_setScrollbar",
    value: function _setScrollbar() {
      var _this24 = this;

      this._isBodyOverflowing && (this._setElementAttributes(SELECTOR_FIXED_CONTENT$1, "paddingRight", function (e) {
        return e + _this24._scrollbarWidth;
      }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
        return e - _this24._scrollbarWidth;
      }), this._setElementAttributes("body", "paddingRight", function (e) {
        return e + _this24._scrollbarWidth;
      })), document.body.classList.add("modal-open");
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(e, t, n) {
      var _this25 = this;

      SelectorEngine.find(e).forEach(function (e) {
        if (e !== document.body && window.innerWidth > e.clientWidth + _this25._scrollbarWidth) return;
        var i = e.style[t],
            s = window.getComputedStyle(e)[t];
        Manipulator.setDataAttribute(e, t, i), e.style[t] = n(Number.parseFloat(s)) + "px";
      });
    }
  }, {
    key: "_resetScrollbar",
    value: function _resetScrollbar() {
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT$1, "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(e, t) {
      SelectorEngine.find(e).forEach(function (e) {
        var n = Manipulator.getDataAttribute(e, t);
        void 0 === n && e === document.body ? e.style[t] = "" : (Manipulator.removeDataAttribute(e, t), e.style[t] = n);
      });
    }
  }, {
    key: "_getScrollbarWidth",
    value: function _getScrollbarWidth() {
      var e = document.createElement("div");
      e.className = "modal-scrollbar-measure", document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e, t) {
      return this.each(function () {
        var n = Data.get(this, "bs.modal");

        var i = _objectSpread({}, Default$5, {}, Manipulator.getDataAttributes(this), {}, "object" == _typeof(e) && e ? e : {});

        if (n || (n = new Modal(this, i)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e](t);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.modal";
    }
  }]);

  return Modal;
}(BaseComponent);

exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (e) {
  var _this26 = this;

  var t = getElementFromSelector(this);
  "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(), EventHandler.one(t, EVENT_SHOW$3, function (e) {
    e.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$3, function () {
      isVisible(_this26) && _this26.focus();
    });
  });
  var n = Data.get(t, "bs.modal");

  if (!n) {
    var _e9 = _objectSpread({}, Manipulator.getDataAttributes(t), {}, Manipulator.getDataAttributes(this));

    n = new Modal(t, _e9);
  }

  n.toggle(this);
}), defineJQueryPlugin(NAME$6, Modal);

var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed",
    SELECTOR_STICKY_CONTENT = ".sticky-top",
    getWidth = function getWidth() {
  var e = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
},
    hide = function hide() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWidth();
  document.body.style.overflow = "hidden", _setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", function (t) {
    return t + e;
  }), _setElementAttributes(".sticky-top", "marginRight", function (t) {
    return t - e;
  }), _setElementAttributes("body", "paddingRight", function (t) {
    return t + e;
  });
},
    _setElementAttributes = function _setElementAttributes(e, t, n) {
  var i = getWidth();
  SelectorEngine.find(e).forEach(function (e) {
    if (e !== document.body && window.innerWidth > e.clientWidth + i) return;
    var s = e.style[t],
        o = window.getComputedStyle(e)[t];
    Manipulator.setDataAttribute(e, t, s), e.style[t] = n(Number.parseFloat(o)) + "px";
  });
},
    reset = function reset() {
  document.body.style.overflow = "auto", _resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), _resetElementAttributes(".sticky-top", "marginRight"), _resetElementAttributes("body", "paddingRight");
},
    _resetElementAttributes = function _resetElementAttributes(e, t) {
  SelectorEngine.find(e).forEach(function (e) {
    var n = Manipulator.getDataAttribute(e, t);
    void 0 === n && e === document.body ? e.style.removeProperty(t) : (Manipulator.removeDataAttribute(e, t), e.style[t] = n);
  });
},
    NAME$5 = "offcanvas",
    DATA_KEY$5 = "bs.offcanvas",
    EVENT_KEY$5 = ".bs.offcanvas",
    DATA_API_KEY$2 = ".data-api",
    EVENT_LOAD_DATA_API$1 = "load.bs.offcanvas.data-api",
    ESCAPE_KEY = "Escape",
    Default$4 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
},
    DefaultType$4 = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
},
    CLASS_NAME_BACKDROP_BODY = "offcanvas-backdrop",
    CLASS_NAME_SHOW$4 = "show",
    CLASS_NAME_TOGGLING = "offcanvas-toggling",
    OPEN_SELECTOR = ".offcanvas.show",
    ACTIVE_SELECTOR = ".offcanvas.show, .offcanvas-toggling",
    EVENT_SHOW$2 = "show.bs.offcanvas",
    EVENT_SHOWN$2 = "shown.bs.offcanvas",
    EVENT_HIDE$2 = "hide.bs.offcanvas",
    EVENT_HIDDEN$2 = "hidden.bs.offcanvas",
    EVENT_FOCUSIN = "focusin.bs.offcanvas",
    EVENT_CLICK_DATA_API$1 = "click.bs.offcanvas.data-api",
    EVENT_CLICK_DISMISS$1 = "click.dismiss.bs.offcanvas",
    SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]',
    SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

var Offcanvas =
/*#__PURE__*/
function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  function Offcanvas(e, t) {
    var _this27;

    _classCallCheck(this, Offcanvas);

    _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Offcanvas).call(this, e)), _this27._config = _this27._getConfig(t), _this27._isShown = !1, _this27._addEventListeners();
    return _this27;
  }

  _createClass(Offcanvas, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this28 = this;

      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || hide(), this._element.classList.add(CLASS_NAME_TOGGLING), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(function () {
        _this28._element.classList.remove(CLASS_NAME_TOGGLING), EventHandler.trigger(_this28._element, EVENT_SHOWN$2, {
          relatedTarget: e
        }), _this28._enforceFocusOnElement(_this28._element);
      }, getTransitionDurationFromElement(this._element)));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this29 = this;

      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$2).defaultPrevented || (this._element.classList.add(CLASS_NAME_TOGGLING), EventHandler.off(document, EVENT_FOCUSIN), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(function () {
        _this29._element.setAttribute("aria-hidden", !0), _this29._element.removeAttribute("aria-modal"), _this29._element.removeAttribute("role"), _this29._element.style.visibility = "hidden", _this29._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), _this29._config.scroll || (document.body.style.overflow = "auto", _resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), _resetElementAttributes(".sticky-top", "marginRight"), _resetElementAttributes("body", "paddingRight")), EventHandler.trigger(_this29._element, EVENT_HIDDEN$2), _this29._element.classList.remove(CLASS_NAME_TOGGLING);
      }, getTransitionDurationFromElement(this._element))));
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$4, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$5, e, DefaultType$4), e;
    }
  }, {
    key: "_enforceFocusOnElement",
    value: function _enforceFocusOnElement(e) {
      EventHandler.off(document, EVENT_FOCUSIN), EventHandler.on(document, EVENT_FOCUSIN, function (t) {
        document === t.target || e === t.target || e.contains(t.target) || e.focus();
      }), e.focus();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this30 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this30.hide();
      }), EventHandler.on(document, "keydown", function (e) {
        _this30._config.keyboard && "Escape" === e.key && _this30.hide();
      }), EventHandler.on(document, EVENT_CLICK_DATA_API$1, function (e) {
        var t = SelectorEngine.findOne(getSelectorFromElement(e.target));
        _this30._element.contains(e.target) || t === _this30._element || _this30.hide();
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$5) || new Offcanvas(this, "object" == _typeof(e) ? e : {});

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$5;
    }
  }]);

  return Offcanvas;
}(BaseComponent);

exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (e) {
  var _this31 = this;

  var t = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this)) return;
  EventHandler.one(t, EVENT_HIDDEN$2, function () {
    isVisible(_this31) && _this31.focus();
  });
  var n = SelectorEngine.findOne(ACTIVE_SELECTOR);
  n && n !== t || (Data.get(t, DATA_KEY$5) || new Offcanvas(t)).toggle(this);
}), EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  SelectorEngine.find(OPEN_SELECTOR).forEach(function (e) {
    return (Data.get(e, DATA_KEY$5) || new Offcanvas(e)).show();
  });
}), defineJQueryPlugin(NAME$5, Offcanvas);

var uriAttrs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    allowedAttribute = function allowedAttribute(e, t) {
  var n = e.nodeName.toLowerCase();
  if (t.includes(n)) return !uriAttrs.has(n) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue) || DATA_URL_PATTERN.test(e.nodeValue));
  var i = t.filter(function (e) {
    return e instanceof RegExp;
  });

  for (var _e10 = 0, _t8 = i.length; _e10 < _t8; _e10++) {
    if (i[_e10].test(n)) return !0;
  }

  return !1;
},
    DefaultAllowlist = {
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(e, t, n) {
  var _ref5;

  if (!e.length) return e;
  if (n && "function" == typeof n) return n(e);

  var i = new window.DOMParser().parseFromString(e, "text/html"),
      s = Object.keys(t),
      o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(i.body.querySelectorAll("*")));

  var _loop = function _loop(_e11, _n7) {
    var _ref6;

    var n = o[_e11],
        i = n.nodeName.toLowerCase();

    if (!s.includes(i)) {
      n.parentNode.removeChild(n);
      return "continue";
    }

    var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(n.attributes)),
        a = [].concat(t["*"] || [], t[i] || []);

    r.forEach(function (e) {
      allowedAttribute(e, a) || n.removeAttribute(e.nodeName);
    });
  };

  for (var _e11 = 0, _n7 = o.length; _e11 < _n7; _e11++) {
    var _ret = _loop(_e11, _n7);

    if (_ret === "continue") continue;
  }

  return i.body.innerHTML;
}

var NAME$4 = "tooltip",
    DATA_KEY$4 = "bs.tooltip",
    EVENT_KEY$4 = ".bs.tooltip",
    CLASS_PREFIX$1 = "bs-tooltip",
    BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    DISALLOWED_ATTRIBUTES = new Set(["sanitize", "allowList", "sanitizeFn"]),
    DefaultType$3 = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
},
    AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
},
    Default$3 = {
  animation: !0,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
},
    Event$2 = {
  HIDE: "hide.bs.tooltip",
  HIDDEN: "hidden.bs.tooltip",
  SHOW: "show.bs.tooltip",
  SHOWN: "shown.bs.tooltip",
  INSERTED: "inserted.bs.tooltip",
  CLICK: "click.bs.tooltip",
  FOCUSIN: "focusin.bs.tooltip",
  FOCUSOUT: "focusout.bs.tooltip",
  MOUSEENTER: "mouseenter.bs.tooltip",
  MOUSELEAVE: "mouseleave.bs.tooltip"
},
    CLASS_NAME_FADE$3 = "fade",
    CLASS_NAME_MODAL = "modal",
    CLASS_NAME_SHOW$3 = "show",
    HOVER_STATE_SHOW = "show",
    HOVER_STATE_OUT = "out",
    SELECTOR_TOOLTIP_INNER = ".tooltip-inner",
    TRIGGER_HOVER = "hover",
    TRIGGER_FOCUS = "focus",
    TRIGGER_CLICK = "click",
    TRIGGER_MANUAL = "manual";

var Tooltip =
/*#__PURE__*/
function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  function Tooltip(e, t) {
    var _this32;

    _classCallCheck(this, Tooltip);

    if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    _this32 = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, e)), _this32._isEnabled = !0, _this32._timeout = 0, _this32._hoverState = "", _this32._activeTrigger = {}, _this32._popper = null, _this32.config = _this32._getConfig(t), _this32.tip = null, _this32._setListeners();
    return _this32;
  }

  _createClass(Tooltip, [{
    key: "enable",
    value: function enable() {
      this._isEnabled = !0;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = !1;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this._isEnabled) if (e) {
        var t = this._initializeOnDelegatedTarget(e);

        t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout), EventHandler.off(this._element, this.constructor.EVENT_KEY), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _i$classList,
          _ref7,
          _this33 = this;

      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      var e = EventHandler.trigger(this._element, this.constructor.Event.SHOW),
          t = findShadowRoot(this._element),
          n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
      if (e.defaultPrevented || !n) return;
      var i = this.getTipElement(),
          s = getUID(this.constructor.NAME);
      i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && i.classList.add("fade");

      var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this._element) : this.config.placement,
          r = this._getAttachment(o);

      this._addAttachmentClass(r);

      var a = this._getContainer();

      Data.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.appendChild(i), EventHandler.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Popper.createPopper(this._element, i, this._getPopperConfig(r)), i.classList.add("show");
      var l = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
      l && (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (e) {
        EventHandler.on(e, "mouseover", function () {});
      });

      var c = function c() {
        var e = _this33._hoverState;
        _this33._hoverState = null, EventHandler.trigger(_this33._element, _this33.constructor.Event.SHOWN), "out" === e && _this33._leave(null, _this33);
      };

      if (this.tip.classList.contains("fade")) {
        var _e12 = getTransitionDurationFromElement(this.tip);

        EventHandler.one(this.tip, "transitionend", c), emulateTransitionEnd(this.tip, _e12);
      } else c();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this34 = this;

      if (!this._popper) return;

      var e = this.getTipElement(),
          t = function t() {
        _this34._isWithActiveTrigger() || ("show" !== _this34._hoverState && e.parentNode && e.parentNode.removeChild(e), _this34._cleanTipClass(), _this34._element.removeAttribute("aria-describedby"), EventHandler.trigger(_this34._element, _this34.constructor.Event.HIDDEN), _this34._popper && (_this34._popper.destroy(), _this34._popper = null));
      };

      if (!EventHandler.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
        var _ref8;

        if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (e) {
          return EventHandler.off(e, "mouseover", noop);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
          var _n8 = getTransitionDurationFromElement(e);

          EventHandler.one(e, "transitionend", t), emulateTransitionEnd(e, _n8);
        } else t();

        this._hoverState = "";
      }
    }
  }, {
    key: "update",
    value: function update() {
      null !== this._popper && this._popper.update();
    }
  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) return this.tip;
      var e = document.createElement("div");
      return e.innerHTML = this.config.template, this.tip = e.children[0], this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent() {
      var e = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(e, t) {
      if (null !== e) return "object" == _typeof(t) && isElement(t) ? (t.jquery && (t = t[0]), void (this.config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void (this.config.html ? (this.config.sanitize && (t = sanitizeHtml(t, this.config.allowList, this.config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var e = this._element.getAttribute("data-bs-original-title");

      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), e;
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(e, t) {
      var n = this.constructor.DATA_KEY;
      return (t = t || Data.get(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), Data.set(e.delegateTarget, n, t)), t;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this35 = this;

      var e = this.config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this35._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(e) {
      var _this36 = this;

      var t = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            altBoundary: !0,
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(e) {
            return _this36._handlePopperPlacementChange(e);
          }
        }],
        onFirstUpdate: function onFirstUpdate(e) {
          e.options.placement !== e.placement && _this36._handlePopperPlacementChange(e);
        }
      };
      return _objectSpread({}, t, {}, "function" == typeof this.config.popperConfig ? this.config.popperConfig(t) : this.config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e));
    }
  }, {
    key: "_getContainer",
    value: function _getContainer() {
      return !1 === this.config.container ? document.body : isElement(this.config.container) ? this.config.container : SelectorEngine.findOne(this.config.container);
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(e) {
      return AttachmentMap[e.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this37 = this;

      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) EventHandler.on(_this37._element, _this37.constructor.Event.CLICK, _this37.config.selector, function (e) {
          return _this37.toggle(e);
        });else if ("manual" !== e) {
          var t = "hover" === e ? _this37.constructor.Event.MOUSEENTER : _this37.constructor.Event.FOCUSIN,
              _n9 = "hover" === e ? _this37.constructor.Event.MOUSELEAVE : _this37.constructor.Event.FOCUSOUT;

          EventHandler.on(_this37._element, t, _this37.config.selector, function (e) {
            return _this37._enter(e);
          }), EventHandler.on(_this37._element, _n9, _this37.config.selector, function (e) {
            return _this37._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        _this37._element && _this37.hide();
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = _objectSpread({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var e = this._element.getAttribute("title"),
          t = _typeof(this._element.getAttribute("data-bs-original-title"));

      (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
    }
  }, {
    key: "_enter",
    value: function _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t.config.delay.show) : t.show());
    }
  }, {
    key: "_leave",
    value: function _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t.config.delay.hide) : t.hide());
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      var t = Manipulator.getDataAttributes(this._element);
      return Object.keys(t).forEach(function (e) {
        DISALLOWED_ATTRIBUTES.has(e) && delete t[e];
      }), e && "object" == _typeof(e.container) && e.container.jquery && (e.container = e.container[0]), "number" == typeof (e = _objectSpread({}, this.constructor.Default, {}, t, {}, "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), typeCheckConfig(NAME$4, e, this.constructor.DefaultType), e.sanitize && (e.template = sanitizeHtml(e.template, e.allowList, e.sanitizeFn)), e;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var e = {};
      if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }
      return e;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = e.getAttribute("class").match(BSCLS_PREFIX_REGEX$1);
      null !== t && t.length > 0 && t.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(e) {
      var t = e.state;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$4);
        var n = "object" == _typeof(e) && e;

        if ((t || !/dispose|hide/.test(e)) && (t || (t = new Tooltip(this, n)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$4;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }]);

  return Tooltip;
}(BaseComponent);

exports.Tooltip = Tooltip;
defineJQueryPlugin(NAME$4, Tooltip);

var NAME$3 = "popover",
    DATA_KEY$3 = "bs.popover",
    EVENT_KEY$3 = ".bs.popover",
    CLASS_PREFIX = "bs-popover",
    BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Default$2 = _objectSpread({}, Tooltip.Default, {
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
}),
    DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
  content: "(string|element|function)"
}),
    Event$1 = {
  HIDE: "hide.bs.popover",
  HIDDEN: "hidden.bs.popover",
  SHOW: "show.bs.popover",
  SHOWN: "shown.bs.popover",
  INSERTED: "inserted.bs.popover",
  CLICK: "click.bs.popover",
  FOCUSIN: "focusin.bs.popover",
  FOCUSOUT: "focusout.bs.popover",
  MOUSEENTER: "mouseenter.bs.popover",
  MOUSELEAVE: "mouseleave.bs.popover"
},
    CLASS_NAME_FADE$2 = "fade",
    CLASS_NAME_SHOW$2 = "show",
    SELECTOR_TITLE = ".popover-header",
    SELECTOR_CONTENT = ".popover-body";

var Popover =
/*#__PURE__*/
function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent() {
      var e = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, e), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this._element)), this.setElementContent(SelectorEngine.findOne(".popover-body", e), t), e.classList.remove("fade", "show");
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e));
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._element.getAttribute("data-bs-content") || this.config.content;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = e.getAttribute("class").match(BSCLS_PREFIX_REGEX);
      null !== t && t.length > 0 && t.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$3);
        var n = "object" == _typeof(e) ? e : null;

        if ((t || !/dispose|hide/.test(e)) && (t || (t = new Popover(this, n), Data.set(this, DATA_KEY$3, t)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$3;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }]);

  return Popover;
}(Tooltip);

exports.Popover = Popover;
defineJQueryPlugin(NAME$3, Popover);
var NAME$2 = "scrollspy",
    DATA_KEY$2 = "bs.scrollspy",
    EVENT_KEY$2 = ".bs.scrollspy",
    DATA_API_KEY$1 = ".data-api",
    Default$1 = {
  offset: 10,
  method: "auto",
  target: ""
},
    DefaultType$1 = {
  offset: "number",
  method: "string",
  target: "(string|element)"
},
    EVENT_ACTIVATE = "activate.bs.scrollspy",
    EVENT_SCROLL = "scroll.bs.scrollspy",
    EVENT_LOAD_DATA_API = "load.bs.scrollspy.data-api",
    CLASS_NAME_DROPDOWN_ITEM = "dropdown-item",
    CLASS_NAME_ACTIVE$1 = "active",
    SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]',
    SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group",
    SELECTOR_NAV_LINKS = ".nav-link",
    SELECTOR_NAV_ITEMS = ".nav-item",
    SELECTOR_LIST_ITEMS = ".list-group-item",
    SELECTOR_DROPDOWN$1 = ".dropdown",
    SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle",
    METHOD_OFFSET = "offset",
    METHOD_POSITION = "position";

var ScrollSpy =
/*#__PURE__*/
function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  function ScrollSpy(e, t) {
    var _this38;

    _classCallCheck(this, ScrollSpy);

    _this38 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpy).call(this, e)), _this38._scrollElement = "BODY" === _this38._element.tagName ? window : _this38._element, _this38._config = _this38._getConfig(t), _this38._selector = "".concat(_this38._config.target, " .nav-link, ").concat(_this38._config.target, " .list-group-item, ").concat(_this38._config.target, " .dropdown-item"), _this38._offsets = [], _this38._targets = [], _this38._activeTarget = null, _this38._scrollHeight = 0, EventHandler.on(_this38._scrollElement, EVENT_SCROLL, function () {
      return _this38._process();
    }), _this38.refresh(), _this38._process();
    return _this38;
  }

  _createClass(ScrollSpy, [{
    key: "refresh",
    value: function refresh() {
      var _this39 = this;

      var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          n = "position" === t ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), SelectorEngine.find(this._selector).map(function (e) {
        var i = getSelectorFromElement(e),
            s = i ? SelectorEngine.findOne(i) : null;

        if (s) {
          var _e13 = s.getBoundingClientRect();

          if (_e13.width || _e13.height) return [Manipulator[t](s).top + n, i];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        _this39._offsets.push(e[0]), _this39._targets.push(e[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this), EventHandler.off(this._scrollElement, EVENT_KEY$2), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if ("string" != typeof (e = _objectSpread({}, Default$1, {}, "object" == _typeof(e) && e ? e : {})).target && isElement(e.target)) {
        var t = e.target.id;
        t || (t = getUID(NAME$2), e.target.id = t), e.target = "#" + t;
      }

      return typeCheckConfig(NAME$2, e, DefaultType$1), e;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var _e14 = this._targets[this._targets.length - 1];
        this._activeTarget !== _e14 && this._activate(_e14);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var _t9 = this._offsets.length; _t9--;) {
          this._activeTarget !== this._targets[_t9] && e >= this._offsets[_t9] && (void 0 === this._offsets[_t9 + 1] || e < this._offsets[_t9 + 1]) && this._activate(this._targets[_t9]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
      }),
          n = SelectorEngine.findOne(t.join(","));

      n.classList.contains("dropdown-item") ? (SelectorEngine.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), SelectorEngine.parents(n, ".nav, .list-group").forEach(function (e) {
        SelectorEngine.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
          return e.classList.add("active");
        }), SelectorEngine.prev(e, ".nav-item").forEach(function (e) {
          SelectorEngine.children(e, ".nav-link").forEach(function (e) {
            return e.classList.add("active");
          });
        });
      })), EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: e
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(this._selector).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$2);

        if (t || (t = new ScrollSpy(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$2;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);

exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (e) {
    return new ScrollSpy(e, Manipulator.getDataAttributes(e));
  });
}), defineJQueryPlugin(NAME$2, ScrollSpy);
var NAME$1 = "tab",
    DATA_KEY$1 = "bs.tab",
    EVENT_KEY$1 = ".bs.tab",
    DATA_API_KEY = ".data-api",
    EVENT_HIDE$1 = "hide.bs.tab",
    EVENT_HIDDEN$1 = "hidden.bs.tab",
    EVENT_SHOW$1 = "show.bs.tab",
    EVENT_SHOWN$1 = "shown.bs.tab",
    EVENT_CLICK_DATA_API = "click.bs.tab.data-api",
    CLASS_NAME_DROPDOWN_MENU = "dropdown-menu",
    CLASS_NAME_ACTIVE = "active",
    CLASS_NAME_FADE$1 = "fade",
    CLASS_NAME_SHOW$1 = "show",
    SELECTOR_DROPDOWN = ".dropdown",
    SELECTOR_NAV_LIST_GROUP = ".nav, .list-group",
    SELECTOR_ACTIVE = ".active",
    SELECTOR_ACTIVE_UL = ":scope > li > .active",
    SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle",
    SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";

var Tab =
/*#__PURE__*/
function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      var _this40 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || isDisabled(this._element)) return;
      var e;

      var t = getElementFromSelector(this._element),
          n = this._element.closest(".nav, .list-group");

      if (n) {
        var _t10 = "UL" === n.nodeName || "OL" === n.nodeName ? SELECTOR_ACTIVE_UL : ".active";

        e = SelectorEngine.find(_t10, n), e = e[e.length - 1];
      }

      var i = e ? EventHandler.trigger(e, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      if (EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: e
      }).defaultPrevented || null !== i && i.defaultPrevented) return;

      this._activate(this._element, n);

      var s = function s() {
        EventHandler.trigger(e, EVENT_HIDDEN$1, {
          relatedTarget: _this40._element
        }), EventHandler.trigger(_this40._element, EVENT_SHOWN$1, {
          relatedTarget: e
        });
      };

      t ? this._activate(t, t.parentNode, s) : s();
    }
  }, {
    key: "_activate",
    value: function _activate(e, t, n) {
      var _this41 = this;

      var i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? SelectorEngine.children(t, ".active") : SelectorEngine.find(SELECTOR_ACTIVE_UL, t))[0],
          s = n && i && i.classList.contains("fade"),
          o = function o() {
        return _this41._transitionComplete(e, i, n);
      };

      if (i && s) {
        var _e15 = getTransitionDurationFromElement(i);

        i.classList.remove("show"), EventHandler.one(i, "transitionend", o), emulateTransitionEnd(i, _e15);
      } else o();
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(e, t, n) {
      if (t) {
        t.classList.remove("active");

        var _e16 = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, t.parentNode);

        _e16 && _e16.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && e.parentNode.classList.contains("dropdown-menu") && (e.closest(".dropdown") && SelectorEngine.find(".dropdown-toggle").forEach(function (e) {
        return e.classList.add("active");
      }), e.setAttribute("aria-expanded", !0)), n && n();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, "bs.tab") || new Tab(this);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.tab";
    }
  }]);

  return Tab;
}(BaseComponent);

exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (e) {
  e.preventDefault(), (Data.get(this, "bs.tab") || new Tab(this)).show();
}), defineJQueryPlugin("tab", Tab);
var NAME = "toast",
    DATA_KEY = "bs.toast",
    EVENT_KEY = ".bs.toast",
    EVENT_CLICK_DISMISS = "click.dismiss.bs.toast",
    EVENT_HIDE = "hide.bs.toast",
    EVENT_HIDDEN = "hidden.bs.toast",
    EVENT_SHOW = "show.bs.toast",
    EVENT_SHOWN = "shown.bs.toast",
    CLASS_NAME_FADE = "fade",
    CLASS_NAME_HIDE = "hide",
    CLASS_NAME_SHOW = "show",
    CLASS_NAME_SHOWING = "showing",
    DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
},
    Default = {
  animation: !0,
  autohide: !0,
  delay: 5e3
},
    SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';

var Toast =
/*#__PURE__*/
function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  function Toast(e, t) {
    var _this42;

    _classCallCheck(this, Toast);

    _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, e)), _this42._config = _this42._getConfig(t), _this42._timeout = null, _this42._setListeners();
    return _this42;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show() {
      var _this43 = this;

      if (EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented) return;
      this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

      var e = function e() {
        _this43._element.classList.remove("showing"), _this43._element.classList.add("show"), EventHandler.trigger(_this43._element, EVENT_SHOWN), _this43._config.autohide && (_this43._timeout = setTimeout(function () {
          _this43.hide();
        }, _this43._config.delay));
      };

      if (this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
        var t = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, "transitionend", e), emulateTransitionEnd(this._element, t);
      } else e();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this44 = this;

      if (!this._element.classList.contains("show")) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented) return;

      var e = function e() {
        _this44._element.classList.add("hide"), EventHandler.trigger(_this44._element, EVENT_HIDDEN);
      };

      if (this._element.classList.remove("show"), this._config.animation) {
        var t = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, "transitionend", e), emulateTransitionEnd(this._element, t);
      } else e();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS), _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this), this._config = null;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {}), typeCheckConfig(NAME, e, this.constructor.DefaultType), e;
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this45 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this45.hide();
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY);

        if (t || (t = new Toast(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY;
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
defineJQueryPlugin(NAME, Toast);