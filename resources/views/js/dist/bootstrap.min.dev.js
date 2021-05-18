"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (s) {
      if ("default" !== s) {
        var i = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(e, s, i.get ? i : {
          enumerable: !0,
          get: function get() {
            return t[s];
          }
        });
      }
    }), e["default"] = t, Object.freeze(e);
  }

  var s = e(t);

  var i = function i(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      n = function n(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _s = t.getAttribute("href");

      if (!_s || !_s.includes("#") && !_s.startsWith(".")) return null;
      _s.includes("#") && !_s.startsWith("#") && (_s = "#" + _s.split("#")[1]), e = _s && "#" !== _s ? _s.trim() : null;
    }

    return e;
  },
      o = function o(t) {
    var e = n(t);
    return e && document.querySelector(e) ? e : null;
  },
      r = function r(t) {
    var e = n(t);
    return e ? document.querySelector(e) : null;
  },
      a = function a(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        s = _window$getComputedSt.transitionDelay;

    var i = Number.parseFloat(e),
        n = Number.parseFloat(s);
    return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
  },
      l = function l(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      c = function c(t) {
    return (t[0] || t).nodeType;
  },
      h = function h(t, e) {
    var s = !1;
    var i = e + 5;
    t.addEventListener("transitionend", function e() {
      s = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      s || l(t);
    }, i);
  },
      d = function d(t, e, s) {
    Object.keys(s).forEach(function (i) {
      var n = s[i],
          o = e[i],
          r = o && c(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError(t.toUpperCase() + ": " + "Option \"".concat(i, "\" provided type \"").concat(r, "\" ") + "but expected type \"".concat(n, "\"."));
    });
  },
      u = function u(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e = getComputedStyle(t),
          _s2 = getComputedStyle(t.parentNode);

      return "none" !== _e.display && "none" !== _s2.display && "hidden" !== _e.visibility;
    }

    return !1;
  },
      g = function g(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      f = function f(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null;
  },
      p = function p() {
    return function () {};
  },
      m = function m(t) {
    return t.offsetHeight;
  },
      _ = function _() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      b = function b() {
    return "rtl" === document.documentElement.dir;
  },
      v = function v(t, e) {
    var s;
    s = function s() {
      var s = _();

      if (s) {
        var _i = s.fn[t];
        s.fn[t] = e.jQueryInterface, s.fn[t].Constructor = e, s.fn[t].noConflict = function () {
          return s.fn[t] = _i, e.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", s) : s();
  },
      y = new Map();

  var w = {
    set: function set(t, e, s) {
      y.has(t) || y.set(t, new Map());
      var i = y.get(t);
      i.has(e) || 0 === i.size ? i.set(e, s) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
    },
    get: function get(t, e) {
      return y.has(t) && y.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!y.has(t)) return;
      var s = y.get(t);
      s["delete"](e), 0 === s.size && y["delete"](t);
    }
  };
  var E = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      A = /::\d+$/,
      L = {};
  var k = 1;
  var C = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function S(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }

  function N(t) {
    var e = S(t);
    return t.uidEvent = e, L[e] = L[e] || {}, L[e];
  }

  function O(t, e) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var i = Object.keys(t);

    for (var _n = 0, _o = i.length; _n < _o; _n++) {
      var _o2 = t[i[_n]];
      if (_o2.originalHandler === e && _o2.delegationSelector === s) return _o2;
    }

    return null;
  }

  function x(t, e, s) {
    var i = "string" == typeof e,
        n = i ? s : e;
    var o = t.replace(T, "");
    var r = C[o];
    return r && (o = r), D.has(o) || (o = t), [i, n, o];
  }

  function I(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    s || (s = i, i = null);

    var _x = x(e, s, i),
        _x2 = _slicedToArray(_x, 3),
        o = _x2[0],
        r = _x2[1],
        a = _x2[2],
        l = N(t),
        c = l[a] || (l[a] = {}),
        h = O(c, r, o ? s : null);

    if (h) return void (h.oneOff = h.oneOff && n);
    var d = S(r, e.replace(E, "")),
        u = o ? function (t, e, s) {
      return function i(n) {
        var o = t.querySelectorAll(e);

        for (var _e3 = n.target; _e3 && _e3 !== this; _e3 = _e3.parentNode) {
          for (var _r = o.length; _r--;) {
            if (o[_r] === _e3) return n.delegateTarget = _e3, i.oneOff && P.off(t, n.type, s), s.apply(_e3, [n]);
          }
        }

        return null;
      };
    }(t, s, i) : function (t, e) {
      return function s(i) {
        return i.delegateTarget = t, s.oneOff && P.off(t, i.type, e), e.apply(t, [i]);
      };
    }(t, s);
    u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function j(t, e, s, i, n) {
    var o = O(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }

  var P = {
    on: function on(t, e, s, i) {
      I(t, e, s, i, !1);
    },
    one: function one(t, e, s, i) {
      I(t, e, s, i, !0);
    },
    off: function off(t, e, s, i) {
      if ("string" != typeof e || !t) return;

      var _x3 = x(e, s, i),
          _x4 = _slicedToArray(_x3, 3),
          n = _x4[0],
          o = _x4[1],
          r = _x4[2],
          a = r !== e,
          l = N(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, n ? s : null);
      }

      c && Object.keys(l).forEach(function (s) {
        !function (t, e, s, i) {
          var n = e[s] || {};
          Object.keys(n).forEach(function (o) {
            if (o.includes(i)) {
              var _i2 = n[o];
              j(t, e, s, _i2.originalHandler, _i2.delegationSelector);
            }
          });
        }(t, l, s, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (s) {
        var i = s.replace(A, "");

        if (!a || e.includes(i)) {
          var _e4 = h[s];
          j(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;

      var i = _(),
          n = e.replace(T, ""),
          o = e !== n,
          r = D.has(n);

      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== s && Object.keys(s).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return s[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  };

  var M =
  /*#__PURE__*/
  function () {
    function M(t) {
      _classCallCheck(this, M);

      (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, w.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(M, [{
      key: "dispose",
      value: function dispose() {
        w.remove(this._element, this.constructor.DATA_KEY), this._element = null;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return w.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.0-beta3";
      }
    }]);

    return M;
  }();

  var H =
  /*#__PURE__*/
  function (_M) {
    _inherits(H, _M);

    function H() {
      _classCallCheck(this, H);

      return _possibleConstructorReturn(this, _getPrototypeOf(H).apply(this, arguments));
    }

    _createClass(H, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            s = this._triggerCloseEvent(e);

        null === s || s.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return r(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return P.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this = this;

        if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
        var e = a(t);
        P.one(t, "transitionend", function () {
          return _this._destroyElement(t);
        }), h(t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), P.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.alert");
          e || (e = new H(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.alert";
      }
    }]);

    return H;
  }(M);

  P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H())), v("alert", H);

  var R =
  /*#__PURE__*/
  function (_M2) {
    _inherits(R, _M2);

    function R() {
      _classCallCheck(this, R);

      return _possibleConstructorReturn(this, _getPrototypeOf(R).apply(this, arguments));
    }

    _createClass(R, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.button");
          e || (e = new R(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]);

    return R;
  }(M);

  function B(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function W(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var s = w.get(e, "bs.button");
    s || (s = new R(e)), s.toggle();
  }), v("button", R);
  var $ = {
    setDataAttribute: function setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + W(e), s);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (s) {
        var i = s.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = B(t.dataset[s]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return B(t.getAttribute("data-bs-" + W(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      U = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var s = [];
      var i = t.parentNode;

      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
        i.matches(e) && s.push(i), i = i.parentNode;
      }

      return s;
    },
    prev: function prev(t, e) {
      var s = t.previousElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var s = t.nextElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.nextElementSibling;
      }

      return [];
    }
  },
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      K = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      z = "next",
      Y = "prev",
      q = "left",
      Q = "right";

  var X =
  /*#__PURE__*/
  function (_M3) {
    _inherits(X, _M3);

    function X(t, e) {
      var _this2;

      _classCallCheck(this, X);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(X).call(this, t)), _this2._items = null, _this2._interval = null, _this2._activeElement = null, _this2._isPaused = !1, _this2._isSliding = !1, _this2.touchTimeout = null, _this2.touchStartX = 0, _this2.touchDeltaX = 0, _this2._config = _this2._getConfig(e), _this2._indicatorsElement = U.findOne(".carousel-indicators", _this2._element), _this2._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this2._pointerEvent = Boolean(window.PointerEvent), _this2._addEventListeners();
      return _this2;
    }

    _createClass(X, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(z);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && u(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(Y);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this3 = this;

        this._activeElement = U.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", function () {
          return _this3.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var s = t > e ? z : Y;

        this._slide(s, this._items[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, _get(_getPrototypeOf(X.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, F, {}, t), d("carousel", t, K), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : q);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this4 = this;

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this4._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this4.pause(t);
        }), P.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this4.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this5 = this;

        var t = function t(_t2) {
          !_this5._pointerEvent || "pen" !== _t2.pointerType && "touch" !== _t2.pointerType ? _this5._pointerEvent || (_this5.touchStartX = _t2.touches[0].clientX) : _this5.touchStartX = _t2.clientX;
        },
            e = function e(t) {
          _this5.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this5.touchStartX;
        },
            s = function s(t) {
          !_this5._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this5.touchDeltaX = t.clientX - _this5.touchStartX), _this5._handleSwipe(), "hover" === _this5._config.pause && (_this5.pause(), _this5.touchTimeout && clearTimeout(_this5.touchTimeout), _this5.touchTimeout = setTimeout(function (t) {
            return _this5.cycle(t);
          }, 500 + _this5._config.interval));
        };

        U.find(".carousel-item img", this._element).forEach(function (t) {
          P.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), P.on(this._element, "pointerup.bs.carousel", function (t) {
          return s(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), P.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "touchend.bs.carousel", function (t) {
          return s(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(q)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(Q)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var s = t === z,
            i = t === Y,
            n = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((i && 0 === n || s && n === o) && !this._config.wrap) return e;
        var r = (n + (i ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var s = this._getItemIndex(t),
            i = this._getItemIndex(U.findOne(".active.carousel-item", this._element));

        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: i,
          to: s
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e5 = U.findOne(".active", this._indicatorsElement);

          _e5.classList.remove("active"), _e5.removeAttribute("aria-current");

          var _s3 = U.find("[data-bs-target]", this._indicatorsElement);

          for (var _e6 = 0; _e6 < _s3.length; _e6++) {
            if (Number.parseInt(_s3[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _s3[_e6].classList.add("active"), _s3[_e6].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this6 = this;

        var s = this._directionToOrder(t),
            i = U.findOne(".active.carousel-item", this._element),
            n = this._getItemIndex(i),
            o = e || this._getItemByOrder(s, i),
            r = this._getItemIndex(o),
            l = Boolean(this._interval),
            c = s === z,
            d = c ? "carousel-item-start" : "carousel-item-end",
            u = c ? "carousel-item-next" : "carousel-item-prev",
            g = this._orderToDirection(s);

        if (o && o.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(o, g).defaultPrevented && i && o) {
          if (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o, this._element.classList.contains("slide")) {
            o.classList.add(u), m(o), i.classList.add(d), o.classList.add(d);

            var _t3 = a(i);

            P.one(i, "transitionend", function () {
              o.classList.remove(d, u), o.classList.add("active"), i.classList.remove("active", u, d), _this6._isSliding = !1, setTimeout(function () {
                P.trigger(_this6._element, "slid.bs.carousel", {
                  relatedTarget: o,
                  direction: g,
                  from: n,
                  to: r
                });
              }, 0);
            }), h(i, _t3);
          } else i.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, P.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: o,
            direction: g,
            from: n,
            to: r
          });

          l && this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Q, q].includes(t) ? b() ? t === Q ? Y : z : t === Q ? z : Y : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [z, Y].includes(t) ? b() ? t === z ? q : Q : t === z ? Q : q : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var s = w.get(t, "bs.carousel"),
            i = _objectSpread({}, F, {}, $.getDataAttributes(t));

        "object" == _typeof(e) && (i = _objectSpread({}, i, {}, e));
        var n = "string" == typeof e ? e : i.slide;
        if (s || (s = new X(t, i)), "number" == typeof e) s.to(e);else if ("string" == typeof n) {
          if (void 0 === s[n]) throw new TypeError("No method named \"".concat(n, "\""));
          s[n]();
        } else i.interval && i.ride && (s.pause(), s.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          X.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = r(this);
        if (!e || !e.classList.contains("carousel")) return;

        var s = _objectSpread({}, $.getDataAttributes(e), {}, $.getDataAttributes(this)),
            i = this.getAttribute("data-bs-slide-to");

        i && (s.interval = !1), X.carouselInterface(e, s), i && w.get(e, "bs.carousel").to(i), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]);

    return X;
  }(M);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", X.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", function () {
    var t = U.find('[data-bs-ride="carousel"]');

    for (var _e7 = 0, _s4 = t.length; _e7 < _s4; _e7++) {
      X.carouselInterface(t[_e7], w.get(t[_e7], "bs.carousel"));
    }
  }), v("carousel", X);
  var V = {
    toggle: !0,
    parent: ""
  },
      G = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var Z =
  /*#__PURE__*/
  function (_M4) {
    _inherits(Z, _M4);

    function Z(t, e) {
      var _this7;

      _classCallCheck(this, Z);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Z).call(this, t)), _this7._isTransitioning = !1, _this7._config = _this7._getConfig(e), _this7._triggerArray = U.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this7._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this7._element.id, "\"]"));
      var s = U.find('[data-bs-toggle="collapse"]');

      for (var _t4 = 0, _e8 = s.length; _t4 < _e8; _t4++) {
        var _e9 = s[_t4],
            _i3 = o(_e9),
            _n2 = U.find(_i3).filter(function (t) {
          return t === _this7._element;
        });

        null !== _i3 && _n2.length && (_this7._selector = _i3, _this7._triggerArray.push(_e9));
      }

      _this7._parent = _this7._config.parent ? _this7._getParent() : null, _this7._config.parent || _this7._addAriaAndCollapsedClass(_this7._element, _this7._triggerArray), _this7._config.toggle && _this7.toggle();
      return _this7;
    }

    _createClass(Z, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this8 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var t, e;
        this._parent && (t = U.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this8._config.parent ? t.getAttribute("data-bs-parent") === _this8._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));
        var s = U.findOne(this._selector);

        if (t) {
          var _i4 = t.find(function (t) {
            return s !== t;
          });

          if (e = _i4 ? w.get(_i4, "bs.collapse") : null, e && e._isTransitioning) return;
        }

        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          s !== t && Z.collapseInterface(t, "hide"), e || w.set(t, "bs.collapse", null);
        });

        var i = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var n = "scroll" + (i[0].toUpperCase() + i.slice(1)),
            o = a(this._element);
        P.one(this._element, "transitionend", function () {
          _this8._element.classList.remove("collapsing"), _this8._element.classList.add("collapse", "show"), _this8._element.style[i] = "", _this8.setTransitioning(!1), P.trigger(_this8._element, "shown.bs.collapse");
        }), h(this._element, o), this._element.style[i] = this._element[n] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this9 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t5 = 0; _t5 < e; _t5++) {
          var _e10 = this._triggerArray[_t5],
              _s5 = r(_e10);

          _s5 && !_s5.classList.contains("show") && (_e10.classList.add("collapsed"), _e10.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "";
        var s = a(this._element);
        P.one(this._element, "transitionend", function () {
          _this9.setTransitioning(!1), _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse"), P.trigger(_this9._element, "hidden.bs.collapse");
        }), h(this._element, s);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(Z.prototype), "dispose", this).call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, V, {}, t)).toggle = Boolean(t.toggle), d("collapse", t, G), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this10 = this;

        var t = this._config.parent;
        c(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = U.findOne(t);
        var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]");
        return U.find(e, t).forEach(function (t) {
          var e = r(t);

          _this10._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var s = t.classList.contains("show");
        e.forEach(function (t) {
          s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var s = w.get(t, "bs.collapse");

        var i = _objectSpread({}, V, {}, $.getDataAttributes(t), {}, "object" == _typeof(e) && e ? e : {});

        if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new Z(t, i)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return V;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]);

    return Z;
  }(M);

  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = $.getDataAttributes(this),
        s = o(this);
    U.find(s).forEach(function (t) {
      var s = w.get(t, "bs.collapse");
      var i;
      s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, Z.collapseInterface(t, i);
    });
  }), v("collapse", Z);
  var J = new RegExp("ArrowUp|ArrowDown|Escape"),
      tt = b() ? "top-end" : "top-start",
      et = b() ? "top-start" : "top-end",
      st = b() ? "bottom-end" : "bottom-start",
      it = b() ? "bottom-start" : "bottom-end",
      nt = b() ? "left-start" : "right-start",
      ot = b() ? "right-start" : "left-start",
      rt = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      at = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)"
  };

  var lt =
  /*#__PURE__*/
  function (_M5) {
    _inherits(lt, _M5);

    function lt(t, e) {
      var _this11;

      _classCallCheck(this, lt);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(lt).call(this, t)), _this11._popper = null, _this11._config = _this11._getConfig(e), _this11._menu = _this11._getMenuElement(), _this11._inNavbar = _this11._detectNavbar(), _this11._addEventListeners();
      return _this11;
    }

    _createClass(lt, [{
      key: "toggle",
      value: function toggle() {
        if (this._element.disabled || this._element.classList.contains("disabled")) return;

        var t = this._element.classList.contains("show");

        lt.clearMenus(), t || this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;
        var t = lt.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) $.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e11 = this._element;
            "parent" === this._config.reference ? _e11 = t : c(this._config.reference) ? (_e11 = this._config.reference, void 0 !== this._config.reference.jquery && (_e11 = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (_e11 = this._config.reference);

            var _i5 = this._getPopperConfig(),
                _n3 = _i5.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = s.createPopper(_e11, this._menu, _i5), _n3 && $.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return P.on(t, "mouseover", null, function () {});
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };
        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), _get(_getPrototypeOf(lt.prototype), "dispose", this).call(this);
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

        P.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this12.toggle();
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread({}, this.constructor.Default, {}, $.getDataAttributes(this._element), {}, t), d("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return U.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return nt;
        if (t.classList.contains("dropstart")) return ot;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? et : tt : e ? it : st;
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

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
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
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var s = w.get(t, "bs.dropdown");

        if (s || (s = new lt(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          lt.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
          if (/input|select|textarea|form/i.test(t.target.tagName)) return;
        }

        var e = U.find('[data-bs-toggle="dropdown"]');

        for (var _s6 = 0, _i6 = e.length; _s6 < _i6; _s6++) {
          var _i7 = w.get(e[_s6], "bs.dropdown"),
              _n4 = {
            relatedTarget: e[_s6]
          };

          if (t && "click" === t.type && (_n4.clickEvent = t), !_i7) continue;
          var _o3 = _i7._menu;

          if (e[_s6].classList.contains("show")) {
            var _ref4;

            if (t) {
              if ([_i7._element].some(function (e) {
                return t.composedPath().includes(e);
              })) continue;
              if ("keyup" === t.type && "Tab" === t.key && _o3.contains(t.target)) continue;
            }

            P.trigger(e[_s6], "hide.bs.dropdown", _n4).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
              return P.off(t, "mouseover", null, function () {});
            }), e[_s6].setAttribute("aria-expanded", "false"), _i7._popper && _i7._popper.destroy(), _o3.classList.remove("show"), e[_s6].classList.remove("show"), $.removeDataAttribute(_o3, "popper"), P.trigger(e[_s6], "hidden.bs.dropdown", _n4));
          }
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return r(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !J.test(t.key)) return;
        if (t.preventDefault(), t.stopPropagation(), this.disabled || this.classList.contains("disabled")) return;
        var e = lt.getParentFromElement(this),
            s = this.classList.contains("show");
        if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void lt.clearMenus();
        if (!s && ("ArrowUp" === t.key || "ArrowDown" === t.key)) return void (this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();
        if (!s || "Space" === t.key) return void lt.clearMenus();
        var i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(u);
        if (!i.length) return;
        var n = i.indexOf(t.target);
        "ArrowUp" === t.key && n > 0 && n--, "ArrowDown" === t.key && n < i.length - 1 && n++, n = -1 === n ? 0 : n, i[n].focus();
      }
    }, {
      key: "Default",
      get: function get() {
        return rt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return at;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]);

    return lt;
  }(M);

  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', lt.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", lt.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", lt.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", lt.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), lt.dropdownInterface(this);
  }), v("dropdown", lt);
  var ct = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      ht = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var dt =
  /*#__PURE__*/
  function (_M6) {
    _inherits(dt, _M6);

    function dt(t, e) {
      var _this14;

      _classCallCheck(this, dt);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(dt).call(this, t)), _this14._config = _this14._getConfig(e), _this14._dialog = U.findOne(".modal-dialog", _this14._element), _this14._backdrop = null, _this14._isShown = !1, _this14._isBodyOverflowing = !1, _this14._ignoreBackdropClick = !1, _this14._isTransitioning = !1, _this14._scrollbarWidth = 0;
      return _this14;
    }

    _createClass(dt, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this15 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this15.hide(t);
        }), P.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          P.one(_this15._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this15._element && (_this15._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this15._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
          var _t6 = a(this._element);

          P.one(this._element, "transitionend", function (t) {
            return _this16._hideModal(t);
          }), h(this._element, _t6);
        } else this._hideModal();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._element, this._dialog].forEach(function (t) {
          return P.off(t, ".bs.modal");
        }), _get(_getPrototypeOf(dt.prototype), "dispose", this).call(this), P.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, ct, {}, t), d("modal", t, ht), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this17 = this;

        var e = this._isAnimated(),
            s = U.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

        var i = function i() {
          _this17._config.focus && _this17._element.focus(), _this17._isTransitioning = !1, P.trigger(_this17._element, "shown.bs.modal", {
            relatedTarget: t
          });
        };

        if (e) {
          var _t7 = a(this._dialog);

          P.one(this._dialog, "transitionend", i), h(this._dialog, _t7);
        } else i();
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this18 = this;

        P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this18._element === t.target || _this18._element.contains(t.target) || _this18._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this19 = this;

        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this19._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this19.hide()) : _this19._config.keyboard || "Escape" !== t.key || _this19._triggerBackdropTransition();
        }) : P.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this20 = this;

        this._isShown ? P.on(window, "resize.bs.modal", function () {
          return _this20._adjustDialog();
        }) : P.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this21 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          document.body.classList.remove("modal-open"), _this21._resetAdjustments(), _this21._resetScrollbar(), P.trigger(_this21._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_removeBackdrop",
      value: function _removeBackdrop() {
        this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this22 = this;

        var e = this._isAnimated();

        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), P.on(this._element, "click.dismiss.bs.modal", function (t) {
            _this22._ignoreBackdropClick ? _this22._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === _this22._config.backdrop ? _this22._triggerBackdropTransition() : _this22.hide());
          }), e && m(this._backdrop), this._backdrop.classList.add("show"), !e) return void t();

          var _s7 = a(this._backdrop);

          P.one(this._backdrop, "transitionend", t), h(this._backdrop, _s7);
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");

          var _s8 = function _s8() {
            _this22._removeBackdrop(), t();
          };

          if (e) {
            var _t8 = a(this._backdrop);

            P.one(this._backdrop, "transitionend", _s8), h(this._backdrop, _t8);
          } else _s8();
        } else t();
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

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = a(this._dialog);
        P.off(this._element, "transitionend"), P.one(this._element, "transitionend", function () {
          _this23._element.classList.remove("modal-static"), t || (P.one(_this23._element, "transitionend", function () {
            _this23._element.style.overflowY = "";
          }), h(_this23._element, e));
        }), h(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        (!this._isBodyOverflowing && t && !b() || this._isBodyOverflowing && !t && b()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !b() || !this._isBodyOverflowing && t && b()) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }, {
      key: "_checkScrollbar",
      value: function _checkScrollbar() {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: "_setScrollbar",
      value: function _setScrollbar() {
        var _this24 = this;

        this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (t) {
          return t + _this24._scrollbarWidth;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (t) {
          return t - _this24._scrollbarWidth;
        }), this._setElementAttributes("body", "paddingRight", function (t) {
          return t + _this24._scrollbarWidth;
        })), document.body.classList.add("modal-open");
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, s) {
        var _this25 = this;

        U.find(t).forEach(function (t) {
          if (t !== document.body && window.innerWidth > t.clientWidth + _this25._scrollbarWidth) return;
          var i = t.style[e],
              n = window.getComputedStyle(t)[e];
          $.setDataAttribute(t, e, i), t.style[e] = s(Number.parseFloat(n)) + "px";
        });
      }
    }, {
      key: "_resetScrollbar",
      value: function _resetScrollbar() {
        this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        U.find(t).forEach(function (t) {
          var s = $.getDataAttribute(t, e);
          void 0 === s && t === document.body ? t.style[e] = "" : ($.removeDataAttribute(t, e), t.style[e] = s);
        });
      }
    }, {
      key: "_getScrollbarWidth",
      value: function _getScrollbarWidth() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var s = w.get(this, "bs.modal");

          var i = _objectSpread({}, ct, {}, $.getDataAttributes(this), {}, "object" == _typeof(t) && t ? t : {});

          if (s || (s = new dt(this, i)), "string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError("No method named \"".concat(t, "\""));
            s[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ct;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]);

    return dt;
  }(M);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this26 = this;

    var e = r(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), P.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || P.one(e, "hidden.bs.modal", function () {
        u(_this26) && _this26.focus();
      });
    });
    var s = w.get(e, "bs.modal");

    if (!s) {
      var _t9 = _objectSpread({}, $.getDataAttributes(e), {}, $.getDataAttributes(this));

      s = new dt(e, _t9);
    }

    s.toggle(this);
  }), v("modal", dt);

  var ut = function ut() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      gt = function gt(t, e, s) {
    var i = ut();
    U.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + i) return;
      var n = t.style[e],
          o = window.getComputedStyle(t)[e];
      $.setDataAttribute(t, e, n), t.style[e] = s(Number.parseFloat(o)) + "px";
    });
  },
      ft = function ft(t, e) {
    U.find(t).forEach(function (t) {
      var s = $.getDataAttribute(t, e);
      void 0 === s && t === document.body ? t.style.removeProperty(e) : ($.removeDataAttribute(t, e), t.style[e] = s);
    });
  },
      pt = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      mt = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var _t =
  /*#__PURE__*/
  function (_M7) {
    _inherits(_t, _M7);

    function _t(t, e) {
      var _this27;

      _classCallCheck(this, _t);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(_t).call(this, t)), _this27._config = _this27._getConfig(e), _this27._isShown = !1, _this27._addEventListeners();
      return _this27;
    }

    _createClass(_t, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this28 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || function () {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ut();
          document.body.style.overflow = "hidden", gt(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", function (e) {
            return e + t;
          }), gt(".sticky-top", "marginRight", function (e) {
            return e - t;
          }), gt("body", "paddingRight", function (e) {
            return e + t;
          });
        }(), this._element.classList.add("offcanvas-toggling"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(function () {
          _this28._element.classList.remove("offcanvas-toggling"), P.trigger(_this28._element, "shown.bs.offcanvas", {
            relatedTarget: t
          }), _this28._enforceFocusOnElement(_this28._element);
        }, a(this._element)));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this29 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"), P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(function () {
          _this29._element.setAttribute("aria-hidden", !0), _this29._element.removeAttribute("aria-modal"), _this29._element.removeAttribute("role"), _this29._element.style.visibility = "hidden", _this29._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), _this29._config.scroll || (document.body.style.overflow = "auto", ft(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"), ft(".sticky-top", "marginRight"), ft("body", "paddingRight")), P.trigger(_this29._element, "hidden.bs.offcanvas"), _this29._element.classList.remove("offcanvas-toggling");
        }, a(this._element))));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, pt, {}, $.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), d("offcanvas", t, mt), t;
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this30 = this;

        P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this30.hide();
        }), P.on(document, "keydown", function (t) {
          _this30._config.keyboard && "Escape" === t.key && _this30.hide();
        }), P.on(document, "click.bs.offcanvas.data-api", function (t) {
          var e = U.findOne(o(t.target));
          _this30._element.contains(t.target) || e === _this30._element || _this30.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.offcanvas") || new _t(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return pt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.offcanvas";
      }
    }]);

    return _t;
  }(M);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this31 = this;

    var e = r(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), g(this)) return;
    P.one(e, "hidden.bs.offcanvas", function () {
      u(_this31) && _this31.focus();
    });
    var s = U.findOne(".offcanvas.show, .offcanvas-toggling");
    s && s !== e || (w.get(e, "bs.offcanvas") || new _t(e)).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    U.find(".offcanvas.show").forEach(function (t) {
      return (w.get(t, "bs.offcanvas") || new _t(t)).show();
    });
  }), v("offcanvas", _t);

  var bt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      vt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      yt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      wt = function wt(t, e) {
    var s = t.nodeName.toLowerCase();
    if (e.includes(s)) return !bt.has(s) || Boolean(vt.test(t.nodeValue) || yt.test(t.nodeValue));
    var i = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t10 = 0, _e12 = i.length; _t10 < _e12; _t10++) {
      if (i[_t10].test(s)) return !0;
    }

    return !1;
  };

  function Et(t, e, s) {
    var _ref5;

    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);

    var i = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(i.body.querySelectorAll("*")));

    var _loop = function _loop(_t11, _s9) {
      var _ref6;

      var s = o[_t11],
          i = s.nodeName.toLowerCase();

      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(s.attributes)),
          a = [].concat(e["*"] || [], e[i] || []);

      r.forEach(function (t) {
        wt(t, a) || s.removeAttribute(t.nodeName);
      });
    };

    for (var _t11 = 0, _s9 = o.length; _t11 < _s9; _t11++) {
      var _ret = _loop(_t11, _s9);

      if (_ret === "continue") continue;
    }

    return i.body.innerHTML;
  }

  var Tt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      At = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Lt = {
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
      kt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: b() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: b() ? "right" : "left"
  },
      Ct = {
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
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
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
    },
    popperConfig: null
  },
      Dt = {
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
  };

  var St =
  /*#__PURE__*/
  function (_M8) {
    _inherits(St, _M8);

    function St(t, e) {
      var _this32;

      _classCallCheck(this, St);

      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(St).call(this, t)), _this32._isEnabled = !0, _this32._timeout = 0, _this32._hoverState = "", _this32._activeTrigger = {}, _this32._popper = null, _this32.config = _this32._getConfig(e), _this32.tip = null, _this32._setListeners();
      return _this32;
    }

    _createClass(St, [{
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
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);

          _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element, this.constructor.EVENT_KEY), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, _get(_getPrototypeOf(St.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this33 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.Event.SHOW),
            e = f(this._element),
            n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var o = this.getTipElement(),
            r = i(this.constructor.NAME);
        o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");

        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
            c = this._getAttachment(l);

        this._addAttachmentClass(c);

        var d = this._getContainer();

        w.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
        var u = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
        u && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(u.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          P.on(t, "mouseover", function () {});
        });

        var g = function g() {
          var t = _this33._hoverState;
          _this33._hoverState = null, P.trigger(_this33._element, _this33.constructor.Event.SHOWN), "out" === t && _this33._leave(null, _this33);
        };

        if (this.tip.classList.contains("fade")) {
          var _t12 = a(this.tip);

          P.one(this.tip, "transitionend", g), h(this.tip, _t12);
        } else g();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this34 = this;

        if (!this._popper) return;

        var t = this.getTipElement(),
            e = function e() {
          _this34._isWithActiveTrigger() || ("show" !== _this34._hoverState && t.parentNode && t.parentNode.removeChild(t), _this34._cleanTipClass(), _this34._element.removeAttribute("aria-describedby"), P.trigger(_this34._element, _this34.constructor.Event.HIDDEN), _this34._popper && (_this34._popper.destroy(), _this34._popper = null));
        };

        if (!P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var _ref8;

          if (t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
            return P.off(t, "mouseover", p);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
            var _s10 = a(t);

            P.one(t, "transitionend", e), h(t, _s10);
          } else e();

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
        var t = document.createElement("div");
        return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return "object" == _typeof(e) && c(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Et(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var s = this.constructor.DATA_KEY;
        return (e = e || w.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), w.set(t.delegateTarget, s, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this35 = this;

        var t = this.config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this35._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this36 = this;

        var e = {
          placement: t,
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
            fn: function fn(t) {
              return _this36._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this36._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread({}, e, {}, "function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContainer",
      value: function _getContainer() {
        return !1 === this.config.container ? document.body : c(this.config.container) ? this.config.container : U.findOne(this.config.container);
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return kt[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this37 = this;

        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) P.on(_this37._element, _this37.constructor.Event.CLICK, _this37.config.selector, function (t) {
            return _this37.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = "hover" === t ? _this37.constructor.Event.MOUSEENTER : _this37.constructor.Event.FOCUSIN,
                _s11 = "hover" === t ? _this37.constructor.Event.MOUSELEAVE : _this37.constructor.Event.FOCUSOUT;

            P.on(_this37._element, _e14, _this37.config.selector, function (t) {
              return _this37._enter(t);
            }), P.on(_this37._element, _s11, _this37.config.selector, function (t) {
              return _this37._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this37._element && _this37.hide();
        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = _objectSpread({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e.config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e.config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t13 in this._activeTrigger) {
          if (this._activeTrigger[_t13]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = $.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          At.has(t) && delete e[t];
        }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = _objectSpread({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Et(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this.config) for (var _e15 in this.config) {
          this.constructor.Default[_e15] !== this.config[_e15] && (t[_e15] = this.config[_e15]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Tt);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tooltip");
          var s = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new St(this, s)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ct;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Dt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Lt;
      }
    }]);

    return St;
  }(M);

  v("tooltip", St);

  var Nt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Ot = _objectSpread({}, St.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      xt = _objectSpread({}, St.DefaultType, {
    content: "(string|element|function)"
  }),
      It = {
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
  };

  var jt =
  /*#__PURE__*/
  function (_St) {
    _inherits(jt, _St);

    function jt() {
      _classCallCheck(this, jt);

      return _possibleConstructorReturn(this, _getPrototypeOf(jt).apply(this, arguments));
    }

    _createClass(jt, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".popover-header", t), this.getTitle());

        var e = this._getContent();

        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this.config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Nt);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.popover");
          var s = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new jt(this, s), w.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ot;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return It;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xt;
      }
    }]);

    return jt;
  }(St);

  v("popover", jt);
  var Pt = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Mt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Ht =
  /*#__PURE__*/
  function (_M9) {
    _inherits(Ht, _M9);

    function Ht(t, e) {
      var _this38;

      _classCallCheck(this, Ht);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(Ht).call(this, t)), _this38._scrollElement = "BODY" === _this38._element.tagName ? window : _this38._element, _this38._config = _this38._getConfig(e), _this38._selector = "".concat(_this38._config.target, " .nav-link, ").concat(_this38._config.target, " .list-group-item, ").concat(_this38._config.target, " .dropdown-item"), _this38._offsets = [], _this38._targets = [], _this38._activeTarget = null, _this38._scrollHeight = 0, P.on(_this38._scrollElement, "scroll.bs.scrollspy", function () {
        return _this38._process();
      }), _this38.refresh(), _this38._process();
      return _this38;
    }

    _createClass(Ht, [{
      key: "refresh",
      value: function refresh() {
        var _this39 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map(function (t) {
          var i = o(t),
              n = i ? U.findOne(i) : null;

          if (n) {
            var _t14 = n.getBoundingClientRect();

            if (_t14.width || _t14.height) return [$[e](n).top + s, i];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this39._offsets.push(t[0]), _this39._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(Ht.prototype), "dispose", this).call(this), P.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread({}, Pt, {}, "object" == _typeof(t) && t ? t : {})).target && c(t.target)) {
          var _e16 = t.target.id;
          _e16 || (_e16 = i("scrollspy"), t.target.id = _e16), t.target = "#" + _e16;
        }

        return d("scrollspy", t, Mt), t;
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
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            s = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= s) {
          var _t15 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t15 && this._activate(_t15);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e17 = this._offsets.length; _e17--;) {
            this._activeTarget !== this._targets[_e17] && t >= this._offsets[_e17] && (void 0 === this._offsets[_e17 + 1] || t < this._offsets[_e17 + 1]) && this._activate(this._targets[_e17]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();

        var e = this._selector.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            s = U.findOne(e.join(","));

        s.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), U.parents(s, ".nav, .list-group").forEach(function (t) {
          U.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), U.prev(t, ".nav-item").forEach(function (t) {
            U.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        U.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.scrollspy");

          if (e || (e = new Ht(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Pt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]);

    return Ht;
  }(M);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    U.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Ht(t, $.getDataAttributes(t));
    });
  }), v("scrollspy", Ht);

  var Rt =
  /*#__PURE__*/
  function (_M10) {
    _inherits(Rt, _M10);

    function Rt() {
      _classCallCheck(this, Rt);

      return _possibleConstructorReturn(this, _getPrototypeOf(Rt).apply(this, arguments));
    }

    _createClass(Rt, [{
      key: "show",
      value: function show() {
        var _this40 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || g(this._element)) return;
        var t;

        var e = r(this._element),
            s = this._element.closest(".nav, .list-group");

        if (s) {
          var _e18 = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";

          t = U.find(_e18, s), t = t[t.length - 1];
        }

        var i = t ? P.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (P.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== i && i.defaultPrevented) return;

        this._activate(this._element, s);

        var n = function n() {
          P.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this40._element
          }), P.trigger(_this40._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, n) : n();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, s) {
        var _this41 = this;

        var i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
            n = s && i && i.classList.contains("fade"),
            o = function o() {
          return _this41._transitionComplete(t, i, s);
        };

        if (i && n) {
          var _t16 = a(i);

          i.classList.remove("show"), P.one(i, "transitionend", o), h(i, _t16);
        } else o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, s) {
        if (e) {
          e.classList.remove("active");

          var _t17 = U.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t17 && _t17.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && U.find(".dropdown-toggle").forEach(function (t) {
          return t.classList.add("active");
        }), t.setAttribute("aria-expanded", !0)), s && s();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.tab") || new Rt(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tab";
      }
    }]);

    return Rt;
  }(M);

  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    t.preventDefault(), (w.get(this, "bs.tab") || new Rt(this)).show();
  }), v("tab", Rt);
  var Bt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Wt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var $t =
  /*#__PURE__*/
  function (_M11) {
    _inherits($t, _M11);

    function $t(t, e) {
      var _this42;

      _classCallCheck(this, $t);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf($t).call(this, t)), _this42._config = _this42._getConfig(e), _this42._timeout = null, _this42._setListeners();
      return _this42;
    }

    _createClass($t, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (P.trigger(this._element, "show.bs.toast").defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var t = function t() {
          _this43._element.classList.remove("showing"), _this43._element.classList.add("show"), P.trigger(_this43._element, "shown.bs.toast"), _this43._config.autohide && (_this43._timeout = setTimeout(function () {
            _this43.hide();
          }, _this43._config.delay));
        };

        if (this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._config.animation) {
          var _e19 = a(this._element);

          P.one(this._element, "transitionend", t), h(this._element, _e19);
        } else t();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this44 = this;

        if (!this._element.classList.contains("show")) return;
        if (P.trigger(this._element, "hide.bs.toast").defaultPrevented) return;

        var t = function t() {
          _this44._element.classList.add("hide"), P.trigger(_this44._element, "hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var _e20 = a(this._element);

          P.one(this._element, "transitionend", t), h(this._element, _e20);
        } else t();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.toast"), _get(_getPrototypeOf($t.prototype), "dispose", this).call(this), this._config = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Wt, {}, $.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {}), d("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this45 = this;

        P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
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
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = w.get(this, "bs.toast");

          if (e || (e = new $t(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Bt;
      }
    }, {
      key: "Default",
      get: function get() {
        return Wt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]);

    return $t;
  }(M);

  return v("toast", $t), {
    Alert: H,
    Button: R,
    Carousel: X,
    Collapse: Z,
    Dropdown: lt,
    Modal: dt,
    Offcanvas: _t,
    Popover: jt,
    ScrollSpy: Ht,
    Tab: Rt,
    Toast: $t,
    Tooltip: St
  };
});