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
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var t = function t(_t2) {
    do {
      _t2 += Math.floor(1e6 * Math.random());
    } while (document.getElementById(_t2));

    return _t2;
  },
      e = function e(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i = t.getAttribute("href");

      if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;
      _i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }

    return e;
  },
      i = function i(t) {
    var i = e(t);
    return i && document.querySelector(i) ? i : null;
  },
      s = function s(t) {
    var i = e(t);
    return i ? document.querySelector(i) : null;
  },
      n = function n(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        i = _window$getComputedSt.transitionDelay;

    var s = Number.parseFloat(e),
        n = Number.parseFloat(i);
    return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
  },
      o = function o(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      r = function r(t) {
    return (t[0] || t).nodeType;
  },
      a = function a(t, e) {
    var i = !1;
    var s = e + 5;
    t.addEventListener("transitionend", function e() {
      i = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      i || o(t);
    }, s);
  },
      l = function l(t, e, i) {
    Object.keys(i).forEach(function (s) {
      var n = i[s],
          o = e[s],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(n).test(a)) throw new TypeError(t.toUpperCase() + ": " + "Option \"".concat(s, "\" provided type \"").concat(a, "\" ") + "but expected type \"".concat(n, "\"."));
    });
  },
      c = function c(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e2 = getComputedStyle(t),
          _i2 = getComputedStyle(t.parentNode);

      return "none" !== _e2.display && "none" !== _i2.display && "hidden" !== _e2.visibility;
    }

    return !1;
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
  },
      f = function f() {
    return function () {};
  },
      u = function u(t) {
    return t.offsetHeight;
  },
      p = function p() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      g = function g() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t, e) {
    var i;
    i = function i() {
      var i = p();

      if (i) {
        var _s = i.fn[t];
        i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = function () {
          return i.fn[t] = _s, e.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i();
  },
      _ = new Map();

  var b = {
    set: function set(t, e, i) {
      _.has(t) || _.set(t, new Map());

      var s = _.get(t);

      s.has(e) || 0 === s.size ? s.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(t, e) {
      return _.has(t) && _.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!_.has(t)) return;

      var i = _.get(t);

      i["delete"](e), 0 === i.size && _["delete"](t);
    }
  };
  var v = /[^.]*(?=\..*)\.|.*/,
      y = /\..*/,
      w = /::\d+$/,
      E = {};
  var T = 1;
  var A = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
    return e && "".concat(e, "::").concat(T++) || t.uidEvent || T++;
  }

  function k(t) {
    var e = O(t);
    return t.uidEvent = e, E[e] = E[e] || {}, E[e];
  }

  function D(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var s = Object.keys(t);

    for (var _n = 0, _o = s.length; _n < _o; _n++) {
      var _o2 = t[s[_n]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function x(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e;
    var o = t.replace(y, "");
    var r = A[o];
    return r && (o = r), L.has(o) || (o = t), [s, n, o];
  }

  function C(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;
    i || (i = s, s = null);

    var _x = x(e, i, s),
        _x2 = _slicedToArray(_x, 3),
        o = _x2[0],
        r = _x2[1],
        a = _x2[2],
        l = k(t),
        c = l[a] || (l[a] = {}),
        d = D(c, r, o ? i : null);

    if (d) return void (d.oneOff = d.oneOff && n);
    var h = O(r, e.replace(v, "")),
        f = o ? function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);

        for (var _e4 = n.target; _e4 && _e4 !== this; _e4 = _e4.parentNode) {
          for (var _r = o.length; _r--;) {
            if (o[_r] === _e4) return n.delegateTarget = _e4, s.oneOff && N.off(t, n.type, i), i.apply(_e4, [n]);
          }
        }

        return null;
      };
    }(t, i, s) : function (t, e) {
      return function i(s) {
        return s.delegateTarget = t, i.oneOff && N.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, i);
    f.delegationSelector = o ? i : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = h, c[h] = f, t.addEventListener(a, f, o);
  }

  function S(t, e, i, s, n) {
    var o = D(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  var N = {
    on: function on(t, e, i, s) {
      C(t, e, i, s, !1);
    },
    one: function one(t, e, i, s) {
      C(t, e, i, s, !0);
    },
    off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;

      var _x3 = x(e, i, s),
          _x4 = _slicedToArray(_x3, 3),
          n = _x4[0],
          o = _x4[1],
          r = _x4[2],
          a = r !== e,
          l = k(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void S(t, l, r, o, n ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, s) {
          var n = e[i] || {};
          Object.keys(n).forEach(function (o) {
            if (o.includes(s)) {
              var _s2 = n[o];
              S(t, e, i, _s2.originalHandler, _s2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var d = l[r] || {};
      Object.keys(d).forEach(function (i) {
        var s = i.replace(w, "");

        if (!a || e.includes(s)) {
          var _e5 = d[i];
          S(t, l, r, _e5.originalHandler, _e5.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var s = p(),
          n = e.replace(y, ""),
          o = e !== n,
          r = L.has(n);
      var a,
          l = !0,
          c = !0,
          d = !1,
          h = null;
      return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(n, l, !0)) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return i[t];
          }
        });
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
    }
  };

  var j =
  /*#__PURE__*/
  function () {
    function j(t) {
      _classCallCheck(this, j);

      (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, b.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(j, [{
      key: "dispose",
      value: function dispose() {
        b.remove(this._element, this.constructor.DATA_KEY), this._element = null;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return b.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.0-beta3";
      }
    }]);

    return j;
  }();

  var P =
  /*#__PURE__*/
  function (_j) {
    _inherits(P, _j);

    function P() {
      _classCallCheck(this, P);

      return _possibleConstructorReturn(this, _getPrototypeOf(P).apply(this, arguments));
    }

    _createClass(P, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return N.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this = this;

        if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
        var e = n(t);
        N.one(t, "transitionend", function () {
          return _this._destroyElement(t);
        }), a(t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), N.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.alert");
          e || (e = new P(this)), "close" === t && e[t](this);
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

    return P;
  }(j);

  N.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', P.handleDismiss(new P())), m("alert", P);

  var I =
  /*#__PURE__*/
  function (_j2) {
    _inherits(I, _j2);

    function I() {
      _classCallCheck(this, I);

      return _possibleConstructorReturn(this, _getPrototypeOf(I).apply(this, arguments));
    }

    _createClass(I, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.button");
          e || (e = new I(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]);

    return I;
  }(j);

  function M(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function R(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  N.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var i = b.get(e, "bs.button");
    i || (i = new I(e)), i.toggle();
  }), m("button", I);
  var B = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + R(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + R(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var s = i.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = M(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return M(t.getAttribute("data-bs-" + R(e)));
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
      H = {
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
      var i = [];
      var s = t.parentNode;

      for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) {
        s.matches(e) && i.push(s), s = s.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    }
  },
      W = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      $ = "next",
      F = "prev",
      z = "left",
      K = "right";

  var Y =
  /*#__PURE__*/
  function (_j3) {
    _inherits(Y, _j3);

    function Y(t, e) {
      var _this2;

      _classCallCheck(this, Y);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this, t)), _this2._items = null, _this2._interval = null, _this2._activeElement = null, _this2._isPaused = !1, _this2._isSliding = !1, _this2.touchTimeout = null, _this2.touchStartX = 0, _this2.touchDeltaX = 0, _this2._config = _this2._getConfig(e), _this2._indicatorsElement = H.findOne(".carousel-indicators", _this2._element), _this2._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this2._pointerEvent = Boolean(window.PointerEvent), _this2._addEventListeners();
      return _this2;
    }

    _createClass(Y, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide($);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(F);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), H.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
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

        this._activeElement = H.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void N.one(this._element, "slid.bs.carousel", function () {
          return _this3.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? $ : F;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, _get(_getPrototypeOf(Y.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, W, {}, t), l("carousel", t, U), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? K : z);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this4 = this;

        this._config.keyboard && N.on(this._element, "keydown.bs.carousel", function (t) {
          return _this4._keydown(t);
        }), "hover" === this._config.pause && (N.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this4.pause(t);
        }), N.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this4.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this5 = this;

        var t = function t(_t3) {
          !_this5._pointerEvent || "pen" !== _t3.pointerType && "touch" !== _t3.pointerType ? _this5._pointerEvent || (_this5.touchStartX = _t3.touches[0].clientX) : _this5.touchStartX = _t3.clientX;
        },
            e = function e(t) {
          _this5.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this5.touchStartX;
        },
            i = function i(t) {
          !_this5._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this5.touchDeltaX = t.clientX - _this5.touchStartX), _this5._handleSwipe(), "hover" === _this5._config.pause && (_this5.pause(), _this5.touchTimeout && clearTimeout(_this5.touchTimeout), _this5.touchTimeout = setTimeout(function (t) {
            return _this5.cycle(t);
          }, 500 + _this5._config.interval));
        };

        H.find(".carousel-item img", this._element).forEach(function (t) {
          N.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (N.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), N.on(this._element, "pointerup.bs.carousel", function (t) {
          return i(t);
        }), this._element.classList.add("pointer-event")) : (N.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), N.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), N.on(this._element, "touchend.bs.carousel", function (t) {
          return i(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(K)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? H.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === $,
            s = t === F,
            n = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((s && 0 === n || i && n === o) && !this._config.wrap) return e;
        var r = (n + (s ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            s = this._getItemIndex(H.findOne(".active.carousel-item", this._element));

        return N.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: s,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e6 = H.findOne(".active", this._indicatorsElement);

          _e6.classList.remove("active"), _e6.removeAttribute("aria-current");

          var _i3 = H.find("[data-bs-target]", this._indicatorsElement);

          for (var _e7 = 0; _e7 < _i3.length; _e7++) {
            if (Number.parseInt(_i3[_e7].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i3[_e7].classList.add("active"), _i3[_e7].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || H.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this6 = this;

        var i = this._directionToOrder(t),
            s = H.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = e || this._getItemByOrder(i, s),
            l = this._getItemIndex(r),
            c = Boolean(this._interval),
            d = i === $,
            h = d ? "carousel-item-start" : "carousel-item-end",
            f = d ? "carousel-item-next" : "carousel-item-prev",
            p = this._orderToDirection(i);

        if (r && r.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(r, p).defaultPrevented && s && r) {
          if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) {
            r.classList.add(f), u(r), s.classList.add(h), r.classList.add(h);

            var _t4 = n(s);

            N.one(s, "transitionend", function () {
              r.classList.remove(h, f), r.classList.add("active"), s.classList.remove("active", f, h), _this6._isSliding = !1, setTimeout(function () {
                N.trigger(_this6._element, "slid.bs.carousel", {
                  relatedTarget: r,
                  direction: p,
                  from: o,
                  to: l
                });
              }, 0);
            }), a(s, _t4);
          } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, N.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: p,
            from: o,
            to: l
          });

          c && this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [K, z].includes(t) ? g() ? t === K ? F : $ : t === K ? $ : F : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [$, F].includes(t) ? g() ? t === $ ? z : K : t === $ ? K : z : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = b.get(t, "bs.carousel"),
            s = _objectSpread({}, W, {}, B.getDataAttributes(t));

        "object" == _typeof(e) && (s = _objectSpread({}, s, {}, e));
        var n = "string" == typeof e ? e : s.slide;
        if (i || (i = new Y(t, s)), "number" == typeof e) i.to(e);else if ("string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError("No method named \"".concat(n, "\""));
          i[n]();
        } else s.interval && s.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Y.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread({}, B.getDataAttributes(e), {}, B.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");

        n && (i.interval = !1), Y.carouselInterface(e, i), n && b.get(e, "bs.carousel").to(n), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return W;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]);

    return Y;
  }(j);

  N.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Y.dataApiClickHandler), N.on(window, "load.bs.carousel.data-api", function () {
    var t = H.find('[data-bs-ride="carousel"]');

    for (var _e8 = 0, _i4 = t.length; _e8 < _i4; _e8++) {
      Y.carouselInterface(t[_e8], b.get(t[_e8], "bs.carousel"));
    }
  }), m("carousel", Y);
  var q = {
    toggle: !0,
    parent: ""
  },
      V = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var X =
  /*#__PURE__*/
  function (_j4) {
    _inherits(X, _j4);

    function X(t, e) {
      var _this7;

      _classCallCheck(this, X);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(X).call(this, t)), _this7._isTransitioning = !1, _this7._config = _this7._getConfig(e), _this7._triggerArray = H.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this7._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this7._element.id, "\"]"));
      var s = H.find('[data-bs-toggle="collapse"]');

      for (var _t5 = 0, _e9 = s.length; _t5 < _e9; _t5++) {
        var _e10 = s[_t5],
            _n2 = i(_e10),
            _o3 = H.find(_n2).filter(function (t) {
          return t === _this7._element;
        });

        null !== _n2 && _o3.length && (_this7._selector = _n2, _this7._triggerArray.push(_e10));
      }

      _this7._parent = _this7._config.parent ? _this7._getParent() : null, _this7._config.parent || _this7._addAriaAndCollapsedClass(_this7._element, _this7._triggerArray), _this7._config.toggle && _this7.toggle();
      return _this7;
    }

    _createClass(X, [{
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
        this._parent && (t = H.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this8._config.parent ? t.getAttribute("data-bs-parent") === _this8._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));
        var i = H.findOne(this._selector);

        if (t) {
          var _s3 = t.find(function (t) {
            return i !== t;
          });

          if (e = _s3 ? b.get(_s3, "bs.collapse") : null, e && e._isTransitioning) return;
        }

        if (N.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          i !== t && X.collapseInterface(t, "hide"), e || b.set(t, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (s[0].toUpperCase() + s.slice(1)),
            r = n(this._element);
        N.one(this._element, "transitionend", function () {
          _this8._element.classList.remove("collapsing"), _this8._element.classList.add("collapse", "show"), _this8._element.style[s] = "", _this8.setTransitioning(!1), N.trigger(_this8._element, "shown.bs.collapse");
        }), a(this._element, r), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this9 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (N.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", u(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t6 = 0; _t6 < e; _t6++) {
          var _e11 = this._triggerArray[_t6],
              _i5 = s(_e11);

          _i5 && !_i5.classList.contains("show") && (_e11.classList.add("collapsed"), _e11.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "";
        var i = n(this._element);
        N.one(this._element, "transitionend", function () {
          _this9.setTransitioning(!1), _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse"), N.trigger(_this9._element, "hidden.bs.collapse");
        }), a(this._element, i);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(X.prototype), "dispose", this).call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, q, {}, t)).toggle = Boolean(t.toggle), l("collapse", t, V), t;
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
        r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = H.findOne(t);
        var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]");
        return H.find(e, t).forEach(function (t) {
          var e = s(t);

          _this10._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = b.get(t, "bs.collapse");

        var s = _objectSpread({}, q, {}, B.getDataAttributes(t), {}, "object" == _typeof(e) && e ? e : {});

        if (!i && s.toggle && "string" == typeof e && /show|hide/.test(e) && (s.toggle = !1), i || (i = new X(t, s)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          X.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return q;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]);

    return X;
  }(j);

  N.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = B.getDataAttributes(this),
        s = i(this);
    H.find(s).forEach(function (t) {
      var i = b.get(t, "bs.collapse");
      var s;
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), s = "toggle") : s = e, X.collapseInterface(t, s);
    });
  }), m("collapse", X);
  var Q = "top",
      G = "bottom",
      Z = "right",
      J = "left",
      tt = [Q, G, Z, J],
      et = tt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      it = [].concat(tt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      st = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function nt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function ot(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function rt(t) {
    return t instanceof ot(t).Element || t instanceof Element;
  }

  function at(t) {
    return t instanceof ot(t).HTMLElement || t instanceof HTMLElement;
  }

  function lt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof ot(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var ct = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            s = e.attributes[t] || {},
            n = e.elements[t];
        at(n) && nt(n) && (Object.assign(n.style, i), Object.keys(s).forEach(function (t) {
          var e = s[t];
          !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var s = e.elements[t],
              n = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          at(s) && nt(s) && (Object.assign(s.style, o), Object.keys(n).forEach(function (t) {
            s.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function dt(t) {
    return t.split("-")[0];
  }

  function ht(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function ft(t) {
    var e = ht(t),
        i = t.offsetWidth,
        s = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: s
    };
  }

  function ut(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && lt(i)) {
      var s = e;

      do {
        if (s && t.isSameNode(s)) return !0;
        s = s.parentNode || s.host;
      } while (s);
    }

    return !1;
  }

  function pt(t) {
    return ot(t).getComputedStyle(t);
  }

  function gt(t) {
    return ["table", "td", "th"].indexOf(nt(t)) >= 0;
  }

  function mt(t) {
    return ((rt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function _t(t) {
    return "html" === nt(t) ? t : t.assignedSlot || t.parentNode || (lt(t) ? t.host : null) || mt(t);
  }

  function bt(t) {
    return at(t) && "fixed" !== pt(t).position ? t.offsetParent : null;
  }

  function vt(t) {
    for (var e = ot(t), i = bt(t); i && gt(i) && "static" === pt(i).position;) {
      i = bt(i);
    }

    return i && ("html" === nt(i) || "body" === nt(i) && "static" === pt(i).position) ? e : i || function (t) {
      for (var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), i = _t(t); at(i) && ["html", "body"].indexOf(nt(i)) < 0;) {
        var s = pt(i);
        if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function yt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var wt = Math.max,
      Et = Math.min,
      Tt = Math.round;

  function At(t, e, i) {
    return wt(t, Et(e, i));
  }

  function Lt(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function Ot(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var kt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          s = t.name,
          n = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = dt(i.placement),
          l = yt(a),
          c = [J, Z].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var d = function (t, e) {
          return Lt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : Ot(t, tt));
        }(n.padding, i),
            h = ft(o),
            f = "y" === l ? Q : J,
            u = "y" === l ? G : Z,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            g = r[l] - i.rects.reference[l],
            m = vt(o),
            _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            b = p / 2 - g / 2,
            v = d[f],
            y = _ - h[c] - d[u],
            w = _ / 2 - h[c] / 2 + b,
            E = At(v, w, y),
            T = l;

        i.modifiersData[s] = ((e = {})[T] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          s = void 0 === i ? "[data-popper-arrow]" : i;
      null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && ut(e.elements.popper, s) && (e.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      Dt = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function xt(t) {
    var e,
        i = t.popper,
        s = t.popperRect,
        n = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          s = window.devicePixelRatio || 1;
      return {
        x: Tt(Tt(e * s) / s) || 0,
        y: Tt(Tt(i * s) / s) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        f = void 0 === h ? 0 : h,
        u = d.y,
        p = void 0 === u ? 0 : u,
        g = o.hasOwnProperty("x"),
        m = o.hasOwnProperty("y"),
        _ = J,
        b = Q,
        v = window;

    if (l) {
      var y = vt(i),
          w = "clientHeight",
          E = "clientWidth";
      y === ot(i) && "static" !== pt(y = mt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, n === Q && (b = G, p -= y[w] - s.height, p *= a ? 1 : -1), n === J && (_ = Z, f -= y[E] - s.width, f *= a ? 1 : -1);
    }

    var T,
        A = Object.assign({
      position: r
    }, l && Dt);
    return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? f + "px" : "", e.transform = "", e));
  }

  var Ct = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = i.gpuAcceleration,
          n = void 0 === s || s,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: dt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: n
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, xt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, xt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      St = {
    passive: !0
  },
      Nt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          s = t.options,
          n = s.scroll,
          o = void 0 === n || n,
          r = s.resize,
          a = void 0 === r || r,
          l = ot(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, St);
      }), a && l.addEventListener("resize", i.update, St), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, St);
        }), a && l.removeEventListener("resize", i.update, St);
      };
    },
    data: {}
  },
      jt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Pt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return jt[t];
    });
  }

  var It = {
    start: "end",
    end: "start"
  };

  function Mt(t) {
    return t.replace(/start|end/g, function (t) {
      return It[t];
    });
  }

  function Rt(t) {
    var e = ot(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Bt(t) {
    return ht(mt(t)).left + Rt(t).scrollLeft;
  }

  function Ht(t) {
    var e = pt(t),
        i = e.overflow,
        s = e.overflowX,
        n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + n + s);
  }

  function Wt(t, e) {
    var i;
    void 0 === e && (e = []);

    var s = function t(e) {
      return ["html", "body", "#document"].indexOf(nt(e)) >= 0 ? e.ownerDocument.body : at(e) && Ht(e) ? e : t(_t(e));
    }(t),
        n = s === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ot(s),
        r = n ? [o].concat(o.visualViewport || [], Ht(s) ? s : []) : s,
        a = e.concat(r);

    return n ? a : a.concat(Wt(_t(r)));
  }

  function Ut(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function $t(t, e) {
    return "viewport" === e ? Ut(function (t) {
      var e = ot(t),
          i = mt(t),
          s = e.visualViewport,
          n = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return s && (n = s.width, o = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), {
        width: n,
        height: o,
        x: r + Bt(t),
        y: a
      };
    }(t)) : at(e) ? function (t) {
      var e = ht(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Ut(function (t) {
      var e,
          i = mt(t),
          s = Rt(t),
          n = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = wt(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
          r = wt(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
          a = -s.scrollLeft + Bt(t),
          l = -s.scrollTop;
      return "rtl" === pt(n || i).direction && (a += wt(i.clientWidth, n ? n.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(mt(t)));
  }

  function Ft(t) {
    return t.split("-")[1];
  }

  function zt(t) {
    var e,
        i = t.reference,
        s = t.element,
        n = t.placement,
        o = n ? dt(n) : null,
        r = n ? Ft(n) : null,
        a = i.x + i.width / 2 - s.width / 2,
        l = i.y + i.height / 2 - s.height / 2;

    switch (o) {
      case Q:
        e = {
          x: a,
          y: i.y - s.height
        };
        break;

      case G:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case Z:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case J:
        e = {
          x: i.x - s.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? yt(o) : null;

    if (null != c) {
      var d = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[d] / 2 - s[d] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[d] / 2 - s[d] / 2);
      }
    }

    return e;
  }

  function Kt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        s = i.placement,
        n = void 0 === s ? t.placement : s,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        f = void 0 !== h && h,
        u = i.padding,
        p = void 0 === u ? 0 : u,
        g = Lt("number" != typeof p ? p : Ot(p, tt)),
        m = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[f ? m : d],
        y = function (t, e, i) {
      var s = "clippingParents" === e ? function (t) {
        var e = Wt(_t(t)),
            i = ["absolute", "fixed"].indexOf(pt(t).position) >= 0 && at(t) ? vt(t) : t;
        return rt(i) ? e.filter(function (t) {
          return rt(t) && ut(t, i) && "body" !== nt(t);
        }) : [];
      }(t) : [].concat(e),
          n = [].concat(s, [i]),
          o = n[0],
          r = n.reduce(function (e, i) {
        var s = $t(t, i);
        return e.top = wt(s.top, e.top), e.right = Et(s.right, e.right), e.bottom = Et(s.bottom, e.bottom), e.left = wt(s.left, e.left), e;
      }, $t(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(rt(v) ? v : v.contextElement || mt(t.elements.popper), r, l),
        w = ht(_),
        E = zt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: n
    }),
        T = Ut(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = {
      top: y.top - A.top + g.top,
      bottom: A.bottom - y.bottom + g.bottom,
      left: y.left - A.left + g.left,
      right: A.right - y.right + g.right
    },
        O = t.modifiersData.offset;

    if ("popper" === d && O) {
      var k = O[n];
      Object.keys(L).forEach(function (t) {
        var e = [Z, G].indexOf(t) >= 0 ? 1 : -1,
            i = [Q, G].indexOf(t) >= 0 ? "y" : "x";
        L[t] += k[i] * e;
      });
    }

    return L;
  }

  function Yt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        s = i.placement,
        n = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? it : l,
        d = Ft(s),
        h = d ? a ? et : et.filter(function (t) {
      return Ft(t) === d;
    }) : tt,
        f = h.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === f.length && (f = h);
    var u = f.reduce(function (e, i) {
      return e[i] = Kt(t, {
        placement: i,
        boundary: n,
        rootBoundary: o,
        padding: r
      })[dt(i)], e;
    }, {});
    return Object.keys(u).sort(function (t, e) {
      return u[t] - u[e];
    });
  }

  var qt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name;

      if (!e.modifiersData[s]._skip) {
        for (var n = i.mainAxis, o = void 0 === n || n, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, f = i.altBoundary, u = i.flipVariations, p = void 0 === u || u, g = i.allowedAutoPlacements, m = e.options.placement, _ = dt(m), b = l || (_ !== m && p ? function (t) {
          if ("auto" === dt(t)) return [];
          var e = Pt(t);
          return [Mt(t), e, Mt(e)];
        }(m) : [Pt(m)]), v = [m].concat(b).reduce(function (t, i) {
          return t.concat("auto" === dt(i) ? Yt(e, {
            placement: i,
            boundary: d,
            rootBoundary: h,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: g
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L],
              k = dt(O),
              D = "start" === Ft(O),
              x = [Q, G].indexOf(k) >= 0,
              C = x ? "width" : "height",
              S = Kt(e, {
            placement: O,
            boundary: d,
            rootBoundary: h,
            altBoundary: f,
            padding: c
          }),
              N = x ? D ? Z : J : D ? G : Q;
          y[C] > w[C] && (N = Pt(N));
          var j = Pt(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every(function (t) {
            return t;
          })) {
            A = O, T = !1;
            break;
          }

          E.set(O, P);
        }

        if (T) for (var I = function I(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return A = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--) {
          ;
        }
        e.placement !== A && (e.modifiersData[s]._skip = !0, e.placement = A, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function Vt(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function Xt(t) {
    return [Q, Z, G, J].some(function (e) {
      return t[e] >= 0;
    });
  }

  var Qt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          s = e.rects.reference,
          n = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Kt(e, {
        elementContext: "reference"
      }),
          a = Kt(e, {
        altBoundary: !0
      }),
          l = Vt(r, s),
          c = Vt(a, n, o),
          d = Xt(l),
          h = Xt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: h
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": h
      });
    }
  },
      Gt = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name,
          n = i.offset,
          o = void 0 === n ? [0, 0] : n,
          r = it.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var s = dt(t),
              n = [J, Q].indexOf(s) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * n, [J, Z].indexOf(s) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[s] = r;
    }
  },
      Zt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = zt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      Jt = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          s = t.name,
          n = i.mainAxis,
          o = void 0 === n || n,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          d = i.altBoundary,
          h = i.padding,
          f = i.tether,
          u = void 0 === f || f,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Kt(e, {
        boundary: l,
        rootBoundary: c,
        padding: h,
        altBoundary: d
      }),
          _ = dt(e.placement),
          b = Ft(e.placement),
          v = !b,
          y = yt(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          T = e.rects.reference,
          A = e.rects.popper,
          L = "function" == typeof g ? g(Object.assign({}, e.rects, {
        placement: e.placement
      })) : g,
          O = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? Q : J,
              D = "y" === y ? G : Z,
              x = "y" === y ? "height" : "width",
              C = E[y],
              S = E[y] + m[k],
              N = E[y] - m[D],
              j = u ? -A[x] / 2 : 0,
              P = "start" === b ? T[x] : A[x],
              I = "start" === b ? -A[x] : -T[x],
              M = e.elements.arrow,
              R = u && M ? ft(M) : {
            width: 0,
            height: 0
          },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              H = B[k],
              W = B[D],
              U = At(0, T[x], R[x]),
              $ = v ? T[x] / 2 - j - U - H - L : P - U - H - L,
              F = v ? -T[x] / 2 + j + U + W + L : I + U + W + L,
              z = e.elements.arrow && vt(e.elements.arrow),
              K = z ? "y" === y ? z.clientTop || 0 : z.clientLeft || 0 : 0,
              Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              q = E[y] + $ - Y - K,
              V = E[y] + F - Y;

          if (o) {
            var X = At(u ? Et(S, q) : S, C, u ? wt(N, V) : N);
            E[y] = X, O[y] = X - C;
          }

          if (a) {
            var tt = "x" === y ? Q : J,
                et = "x" === y ? G : Z,
                it = E[w],
                st = it + m[tt],
                nt = it - m[et],
                ot = At(u ? Et(st, q) : st, it, u ? wt(nt, V) : nt);
            E[w] = ot, O[w] = ot - it;
          }
        }

        e.modifiersData[s] = O;
      }
    },
    requiresIfExists: ["offset"]
  };

  function te(t, e, i) {
    void 0 === i && (i = !1);
    var s,
        n,
        o = mt(e),
        r = ht(t),
        a = at(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (a || !a && !i) && (("body" !== nt(e) || Ht(o)) && (l = (s = e) !== ot(s) && at(s) ? {
      scrollLeft: (n = s).scrollLeft,
      scrollTop: n.scrollTop
    } : Rt(s)), at(e) ? ((c = ht(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Bt(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var ee = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function ie() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function se(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        s = void 0 === i ? [] : i,
        n = e.defaultOptions,
        o = void 0 === n ? ee : n;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var n,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ee, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          d = {
        state: a,
        setOptions: function setOptions(i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: rt(t) ? Wt(t) : t.contextElement ? Wt(t.contextElement) : [],
            popper: Wt(e)
          };

          var n,
              r,
              c = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  s = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(n) {
                  i.add(n.name), [].concat(n.requires || [], n.requiresIfExists || []).forEach(function (s) {
                    if (!i.has(s)) {
                      var n = e.get(s);
                      n && t(n);
                    }
                  }), s.push(n);
                }(t);
              }), s;
            }(t);

            return st.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((n = [].concat(s, a.options.modifiers), r = n.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                s = void 0 === i ? {} : i,
                n = t.effect;

            if ("function" == typeof n) {
              var o = n({
                state: a,
                name: e,
                instance: d,
                options: s
              });
              l.push(o || function () {});
            }
          }), d.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (ie(e, i)) {
              a.rects = {
                reference: te(e, vt(i), "fixed" === a.options.strategy),
                popper: ft(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var s = 0; s < a.orderedModifiers.length; s++) {
                if (!0 !== a.reset) {
                  var n = a.orderedModifiers[s],
                      o = n.fn,
                      r = n.options,
                      l = void 0 === r ? {} : r,
                      h = n.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: h,
                    instance: d
                  }) || a);
                } else a.reset = !1, s = -1;
              }
            }
          }
        },
        update: (n = function n() {
          return new Promise(function (t) {
            d.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(n());
            });
          })), r;
        }),
        destroy: function destroy() {
          h(), c = !0;
        }
      };
      if (!ie(t, e)) return d;

      function h() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return d.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), d;
    };
  }

  var ne = se(),
      oe = se({
    defaultModifiers: [Nt, Zt, Ct, ct]
  }),
      re = se({
    defaultModifiers: [Nt, Zt, Ct, ct, Gt, qt, Jt, kt, Qt]
  }),
      ae = Object.freeze({
    __proto__: null,
    popperGenerator: se,
    detectOverflow: Kt,
    createPopperBase: ne,
    createPopper: re,
    createPopperLite: oe,
    top: Q,
    bottom: G,
    right: Z,
    left: J,
    auto: "auto",
    basePlacements: tt,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: et,
    placements: it,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: st,
    applyStyles: ct,
    arrow: kt,
    computeStyles: Ct,
    eventListeners: Nt,
    flip: qt,
    hide: Qt,
    offset: Gt,
    popperOffsets: Zt,
    preventOverflow: Jt
  });
  var le = new RegExp("ArrowUp|ArrowDown|Escape"),
      ce = g() ? "top-end" : "top-start",
      de = g() ? "top-start" : "top-end",
      he = g() ? "bottom-end" : "bottom-start",
      fe = g() ? "bottom-start" : "bottom-end",
      ue = g() ? "left-start" : "right-start",
      pe = g() ? "right-start" : "left-start",
      ge = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      me = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)"
  };

  var _e =
  /*#__PURE__*/
  function (_j5) {
    _inherits(_e, _j5);

    function _e(t, e) {
      var _this11;

      _classCallCheck(this, _e);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(_e).call(this, t)), _this11._popper = null, _this11._config = _this11._getConfig(e), _this11._menu = _this11._getMenuElement(), _this11._inNavbar = _this11._detectNavbar(), _this11._addEventListeners();
      return _this11;
    }

    _createClass(_e, [{
      key: "toggle",
      value: function toggle() {
        if (this._element.disabled || this._element.classList.contains("disabled")) return;

        var t = this._element.classList.contains("show");

        _e.clearMenus(), t || this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show")) return;

        var t = _e.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!N.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) B.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e12 = this._element;
            "parent" === this._config.reference ? _e12 = t : r(this._config.reference) ? (_e12 = this._config.reference, void 0 !== this._config.reference.jquery && (_e12 = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (_e12 = this._config.reference);

            var _i6 = this._getPopperConfig(),
                _s4 = _i6.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = re(_e12, this._menu, _i6), _s4 && B.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return N.on(t, "mouseover", null, function () {});
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), N.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._element.disabled || this._element.classList.contains("disabled") || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };
        N.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        N.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), _get(_getPrototypeOf(_e.prototype), "dispose", this).call(this);
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

        N.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this12.toggle();
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread({}, this.constructor.Default, {}, B.getDataAttributes(this._element), {}, t), l("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return H.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ue;
        if (t.classList.contains("dropstart")) return pe;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? de : ce : e ? fe : he;
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
        var i = b.get(t, "bs.dropdown");

        if (i || (i = new _e(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          _e.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
          if (/input|select|textarea|form/i.test(t.target.tagName)) return;
        }

        var e = H.find('[data-bs-toggle="dropdown"]');

        for (var _i7 = 0, _s5 = e.length; _i7 < _s5; _i7++) {
          var _s6 = b.get(e[_i7], "bs.dropdown"),
              _n3 = {
            relatedTarget: e[_i7]
          };

          if (t && "click" === t.type && (_n3.clickEvent = t), !_s6) continue;
          var _o4 = _s6._menu;

          if (e[_i7].classList.contains("show")) {
            var _ref4;

            if (t) {
              if ([_s6._element].some(function (e) {
                return t.composedPath().includes(e);
              })) continue;
              if ("keyup" === t.type && "Tab" === t.key && _o4.contains(t.target)) continue;
            }

            N.trigger(e[_i7], "hide.bs.dropdown", _n3).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
              return N.off(t, "mouseover", null, function () {});
            }), e[_i7].setAttribute("aria-expanded", "false"), _s6._popper && _s6._popper.destroy(), _o4.classList.remove("show"), e[_i7].classList.remove("show"), B.removeDataAttribute(_o4, "popper"), N.trigger(e[_i7], "hidden.bs.dropdown", _n3));
          }
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !le.test(t.key)) return;
        if (t.preventDefault(), t.stopPropagation(), this.disabled || this.classList.contains("disabled")) return;

        var e = _e.getParentFromElement(this),
            i = this.classList.contains("show");

        if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void _e.clearMenus();
        if (!i && ("ArrowUp" === t.key || "ArrowDown" === t.key)) return void (this.matches('[data-bs-toggle="dropdown"]') ? this : H.prev(this, '[data-bs-toggle="dropdown"]')[0]).click();
        if (!i || "Space" === t.key) return void _e.clearMenus();
        var s = H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(c);
        if (!s.length) return;
        var n = s.indexOf(t.target);
        "ArrowUp" === t.key && n > 0 && n--, "ArrowDown" === t.key && n < s.length - 1 && n++, n = -1 === n ? 0 : n, s[n].focus();
      }
    }, {
      key: "Default",
      get: function get() {
        return ge;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return me;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]);

    return _e;
  }(j);

  N.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', _e.dataApiKeydownHandler), N.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", _e.dataApiKeydownHandler), N.on(document, "click.bs.dropdown.data-api", _e.clearMenus), N.on(document, "keyup.bs.dropdown.data-api", _e.clearMenus), N.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), _e.dropdownInterface(this);
  }), m("dropdown", _e);
  var be = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      ve = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var ye =
  /*#__PURE__*/
  function (_j6) {
    _inherits(ye, _j6);

    function ye(t, e) {
      var _this14;

      _classCallCheck(this, ye);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(ye).call(this, t)), _this14._config = _this14._getConfig(e), _this14._dialog = H.findOne(".modal-dialog", _this14._element), _this14._backdrop = null, _this14._isShown = !1, _this14._isBodyOverflowing = !1, _this14._ignoreBackdropClick = !1, _this14._isTransitioning = !1, _this14._scrollbarWidth = 0;
      return _this14;
    }

    _createClass(ye, [{
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
        var e = N.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), N.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this15.hide(t);
        }), N.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          N.one(_this15._element, "mouseup.dismiss.bs.modal", function (t) {
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
        if (N.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), N.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.modal"), N.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
          var _t7 = n(this._element);

          N.one(this._element, "transitionend", function (t) {
            return _this16._hideModal(t);
          }), a(this._element, _t7);
        } else this._hideModal();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._element, this._dialog].forEach(function (t) {
          return N.off(t, ".bs.modal");
        }), _get(_getPrototypeOf(ye.prototype), "dispose", this).call(this), N.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, be, {}, t), l("modal", t, ve), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this17 = this;

        var e = this._isAnimated(),
            i = H.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

        var s = function s() {
          _this17._config.focus && _this17._element.focus(), _this17._isTransitioning = !1, N.trigger(_this17._element, "shown.bs.modal", {
            relatedTarget: t
          });
        };

        if (e) {
          var _t8 = n(this._dialog);

          N.one(this._dialog, "transitionend", s), a(this._dialog, _t8);
        } else s();
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this18 = this;

        N.off(document, "focusin.bs.modal"), N.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this18._element === t.target || _this18._element.contains(t.target) || _this18._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this19 = this;

        this._isShown ? N.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this19._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this19.hide()) : _this19._config.keyboard || "Escape" !== t.key || _this19._triggerBackdropTransition();
        }) : N.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this20 = this;

        this._isShown ? N.on(window, "resize.bs.modal", function () {
          return _this20._adjustDialog();
        }) : N.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this21 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          document.body.classList.remove("modal-open"), _this21._resetAdjustments(), _this21._resetScrollbar(), N.trigger(_this21._element, "hidden.bs.modal");
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
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && this._backdrop.classList.add("fade"), document.body.appendChild(this._backdrop), N.on(this._element, "click.dismiss.bs.modal", function (t) {
            _this22._ignoreBackdropClick ? _this22._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === _this22._config.backdrop ? _this22._triggerBackdropTransition() : _this22.hide());
          }), e && u(this._backdrop), this._backdrop.classList.add("show"), !e) return void t();

          var _i8 = n(this._backdrop);

          N.one(this._backdrop, "transitionend", t), a(this._backdrop, _i8);
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");

          var _i9 = function _i9() {
            _this22._removeBackdrop(), t();
          };

          if (e) {
            var _t9 = n(this._backdrop);

            N.one(this._backdrop, "transitionend", _i9), a(this._backdrop, _t9);
          } else _i9();
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

        if (N.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = n(this._dialog);
        N.off(this._element, "transitionend"), N.one(this._element, "transitionend", function () {
          _this23._element.classList.remove("modal-static"), t || (N.one(_this23._element, "transitionend", function () {
            _this23._element.style.overflowY = "";
          }), a(_this23._element, e));
        }), a(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        (!this._isBodyOverflowing && t && !g() || this._isBodyOverflowing && !t && g()) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !g() || !this._isBodyOverflowing && t && g()) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
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
      value: function _setElementAttributes(t, e, i) {
        var _this25 = this;

        H.find(t).forEach(function (t) {
          if (t !== document.body && window.innerWidth > t.clientWidth + _this25._scrollbarWidth) return;
          var s = t.style[e],
              n = window.getComputedStyle(t)[e];
          B.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(n)) + "px";
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
        H.find(t).forEach(function (t) {
          var i = B.getDataAttribute(t, e);
          void 0 === i && t === document.body ? t.style[e] = "" : (B.removeDataAttribute(t, e), t.style[e] = i);
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
          var i = b.get(this, "bs.modal");

          var s = _objectSpread({}, be, {}, B.getDataAttributes(this), {}, "object" == _typeof(t) && t ? t : {});

          if (i || (i = new ye(this, s)), "string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]);

    return ye;
  }(j);

  N.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this26 = this;

    var e = s(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), N.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || N.one(e, "hidden.bs.modal", function () {
        c(_this26) && _this26.focus();
      });
    });
    var i = b.get(e, "bs.modal");

    if (!i) {
      var _t10 = _objectSpread({}, B.getDataAttributes(e), {}, B.getDataAttributes(this));

      i = new ye(e, _t10);
    }

    i.toggle(this);
  }), m("modal", ye);

  var we = function we() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      Ee = function Ee(t, e, i) {
    var s = we();
    H.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
      var n = t.style[e],
          o = window.getComputedStyle(t)[e];
      B.setDataAttribute(t, e, n), t.style[e] = i(Number.parseFloat(o)) + "px";
    });
  },
      Te = function Te(t, e) {
    H.find(t).forEach(function (t) {
      var i = B.getDataAttribute(t, e);
      void 0 === i && t === document.body ? t.style.removeProperty(e) : (B.removeDataAttribute(t, e), t.style[e] = i);
    });
  },
      Ae = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Le = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Oe =
  /*#__PURE__*/
  function (_j7) {
    _inherits(Oe, _j7);

    function Oe(t, e) {
      var _this27;

      _classCallCheck(this, Oe);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Oe).call(this, t)), _this27._config = _this27._getConfig(e), _this27._isShown = !1, _this27._addEventListeners();
      return _this27;
    }

    _createClass(Oe, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this28 = this;

        this._isShown || N.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._config.backdrop && document.body.classList.add("offcanvas-backdrop"), this._config.scroll || function () {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : we();
          document.body.style.overflow = "hidden", Ee(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight", function (e) {
            return e + t;
          }), Ee(".sticky-top", "marginRight", function (e) {
            return e - t;
          }), Ee("body", "paddingRight", function (e) {
            return e + t;
          });
        }(), this._element.classList.add("offcanvas-toggling"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), setTimeout(function () {
          _this28._element.classList.remove("offcanvas-toggling"), N.trigger(_this28._element, "shown.bs.offcanvas", {
            relatedTarget: t
          }), _this28._enforceFocusOnElement(_this28._element);
        }, n(this._element)));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this29 = this;

        this._isShown && (N.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._element.classList.add("offcanvas-toggling"), N.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), setTimeout(function () {
          _this29._element.setAttribute("aria-hidden", !0), _this29._element.removeAttribute("aria-modal"), _this29._element.removeAttribute("role"), _this29._element.style.visibility = "hidden", _this29._config.backdrop && document.body.classList.remove("offcanvas-backdrop"), _this29._config.scroll || (document.body.style.overflow = "auto", Te(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"), Te(".sticky-top", "marginRight"), Te("body", "paddingRight")), N.trigger(_this29._element, "hidden.bs.offcanvas"), _this29._element.classList.remove("offcanvas-toggling");
        }, n(this._element))));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Ae, {}, B.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), l("offcanvas", t, Le), t;
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        N.off(document, "focusin.bs.offcanvas"), N.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this30 = this;

        N.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this30.hide();
        }), N.on(document, "keydown", function (t) {
          _this30._config.keyboard && "Escape" === t.key && _this30.hide();
        }), N.on(document, "click.bs.offcanvas.data-api", function (t) {
          var e = H.findOne(i(t.target));
          _this30._element.contains(t.target) || e === _this30._element || _this30.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.offcanvas") || new Oe(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.offcanvas";
      }
    }]);

    return Oe;
  }(j);

  N.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this31 = this;

    var e = s(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    N.one(e, "hidden.bs.offcanvas", function () {
      c(_this31) && _this31.focus();
    });
    var i = H.findOne(".offcanvas.show, .offcanvas-toggling");
    i && i !== e || (b.get(e, "bs.offcanvas") || new Oe(e)).toggle(this);
  }), N.on(window, "load.bs.offcanvas.data-api", function () {
    H.find(".offcanvas.show").forEach(function (t) {
      return (b.get(t, "bs.offcanvas") || new Oe(t)).show();
    });
  }), m("offcanvas", Oe);

  var ke = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ce = function Ce(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !ke.has(i) || Boolean(De.test(t.nodeValue) || xe.test(t.nodeValue));
    var s = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t11 = 0, _e13 = s.length; _t11 < _e13; _t11++) {
      if (s[_t11].test(i)) return !0;
    }

    return !1;
  };

  function Se(t, e, i) {
    var _ref5;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var s = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(s.body.querySelectorAll("*")));

    var _loop = function _loop(_t12, _i10) {
      var _ref6;

      var i = o[_t12],
          s = i.nodeName.toLowerCase();

      if (!n.includes(s)) {
        i.parentNode.removeChild(i);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[s] || []);

      r.forEach(function (t) {
        Ce(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i10 = o.length; _t12 < _i10; _t12++) {
      var _ret = _loop(_t12, _i10);

      if (_ret === "continue") continue;
    }

    return s.body.innerHTML;
  }

  var Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      je = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Pe = {
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
      Ie = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: g() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: g() ? "right" : "left"
  },
      Me = {
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
      Re = {
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

  var Be =
  /*#__PURE__*/
  function (_j8) {
    _inherits(Be, _j8);

    function Be(t, e) {
      var _this32;

      _classCallCheck(this, Be);

      if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(Be).call(this, t)), _this32._isEnabled = !0, _this32._timeout = 0, _this32._hoverState = "", _this32._activeTrigger = {}, _this32._popper = null, _this32.config = _this32._getConfig(e), _this32.tip = null, _this32._setListeners();
      return _this32;
    }

    _createClass(Be, [{
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
          var _e14 = this._initializeOnDelegatedTarget(t);

          _e14._activeTrigger.click = !_e14._activeTrigger.click, _e14._isWithActiveTrigger() ? _e14._enter(null, _e14) : _e14._leave(null, _e14);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), N.off(this._element, this.constructor.EVENT_KEY), N.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, _get(_getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this33 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var e = N.trigger(this._element, this.constructor.Event.SHOW),
            i = h(this._element),
            s = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (e.defaultPrevented || !s) return;
        var o = this.getTipElement(),
            r = t(this.constructor.NAME);
        o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");

        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
            c = this._getAttachment(l);

        this._addAttachmentClass(c);

        var d = this._getContainer();

        b.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), N.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = re(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
        var f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
        f && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(f.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          N.on(t, "mouseover", function () {});
        });

        var u = function u() {
          var t = _this33._hoverState;
          _this33._hoverState = null, N.trigger(_this33._element, _this33.constructor.Event.SHOWN), "out" === t && _this33._leave(null, _this33);
        };

        if (this.tip.classList.contains("fade")) {
          var _t13 = n(this.tip);

          N.one(this.tip, "transitionend", u), a(this.tip, _t13);
        } else u();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this34 = this;

        if (!this._popper) return;

        var t = this.getTipElement(),
            e = function e() {
          _this34._isWithActiveTrigger() || ("show" !== _this34._hoverState && t.parentNode && t.parentNode.removeChild(t), _this34._cleanTipClass(), _this34._element.removeAttribute("aria-describedby"), N.trigger(_this34._element, _this34.constructor.Event.HIDDEN), _this34._popper && (_this34._popper.destroy(), _this34._popper = null));
        };

        if (!N.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var _ref8;

          if (t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
            return N.off(t, "mouseover", f);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
            var _i11 = n(t);

            N.one(t, "transitionend", e), a(t, _i11);
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
        this.setElementContent(H.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return "object" == _typeof(e) && r(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
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
        var i = this.constructor.DATA_KEY;
        return (e = e || b.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), b.set(t.delegateTarget, i, e)), e;
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
        return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : H.findOne(this.config.container);
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ie[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this37 = this;

        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) N.on(_this37._element, _this37.constructor.Event.CLICK, _this37.config.selector, function (t) {
            return _this37.toggle(t);
          });else if ("manual" !== t) {
            var _e15 = "hover" === t ? _this37.constructor.Event.MOUSEENTER : _this37.constructor.Event.FOCUSIN,
                _i12 = "hover" === t ? _this37.constructor.Event.MOUSELEAVE : _this37.constructor.Event.FOCUSOUT;

            N.on(_this37._element, _e15, _this37.config.selector, function (t) {
              return _this37._enter(t);
            }), N.on(_this37._element, _i12, _this37.config.selector, function (t) {
              return _this37._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this37._element && _this37.hide();
        }, N.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = _objectSpread({}, this.config, {
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
        for (var _t14 in this._activeTrigger) {
          if (this._activeTrigger[_t14]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = B.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          je.has(t) && delete e[t];
        }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = _objectSpread({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this.config) for (var _e16 in this.config) {
          this.constructor.Default[_e16] !== this.config[_e16] && (t[_e16] = this.config[_e16]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ne);
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
          var e = b.get(this, "bs.tooltip");
          var i = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Be(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Me;
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
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pe;
      }
    }]);

    return Be;
  }(j);

  m("tooltip", Be);

  var He = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      We = _objectSpread({}, Be.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ue = _objectSpread({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      $e = {
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

  var Fe =
  /*#__PURE__*/
  function (_Be) {
    _inherits(Fe, _Be);

    function Fe() {
      _classCallCheck(this, Fe);

      return _possibleConstructorReturn(this, _getPrototypeOf(Fe).apply(this, arguments));
    }

    _createClass(Fe, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(H.findOne(".popover-header", t), this.getTitle());

        var e = this._getContent();

        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(H.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
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
            e = t.getAttribute("class").match(He);
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
          var e = b.get(this, "bs.popover");
          var i = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Fe(this, i), b.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return We;
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
        return $e;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ue;
      }
    }]);

    return Fe;
  }(Be);

  m("popover", Fe);
  var ze = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Ke = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Ye =
  /*#__PURE__*/
  function (_j9) {
    _inherits(Ye, _j9);

    function Ye(t, e) {
      var _this38;

      _classCallCheck(this, Ye);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(Ye).call(this, t)), _this38._scrollElement = "BODY" === _this38._element.tagName ? window : _this38._element, _this38._config = _this38._getConfig(e), _this38._selector = "".concat(_this38._config.target, " .nav-link, ").concat(_this38._config.target, " .list-group-item, ").concat(_this38._config.target, " .dropdown-item"), _this38._offsets = [], _this38._targets = [], _this38._activeTarget = null, _this38._scrollHeight = 0, N.on(_this38._scrollElement, "scroll.bs.scrollspy", function () {
        return _this38._process();
      }), _this38.refresh(), _this38._process();
      return _this38;
    }

    _createClass(Ye, [{
      key: "refresh",
      value: function refresh() {
        var _this39 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), H.find(this._selector).map(function (t) {
          var n = i(t),
              o = n ? H.findOne(n) : null;

          if (o) {
            var _t15 = o.getBoundingClientRect();

            if (_t15.width || _t15.height) return [B[e](o).top + s, n];
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
        _get(_getPrototypeOf(Ye.prototype), "dispose", this).call(this), N.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(e) {
        if ("string" != typeof (e = _objectSpread({}, ze, {}, "object" == _typeof(e) && e ? e : {})).target && r(e.target)) {
          var _i13 = e.target.id;
          _i13 || (_i13 = t("scrollspy"), e.target.id = _i13), e.target = "#" + _i13;
        }

        return l("scrollspy", e, Ke), e;
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
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t16 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t16 && this._activate(_t16);
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
            i = H.findOne(e.join(","));

        i.classList.contains("dropdown-item") ? (H.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), H.parents(i, ".nav, .list-group").forEach(function (t) {
          H.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), H.prev(t, ".nav-item").forEach(function (t) {
            H.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), N.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        H.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.scrollspy");

          if (e || (e = new Ye(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return ze;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]);

    return Ye;
  }(j);

  N.on(window, "load.bs.scrollspy.data-api", function () {
    H.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Ye(t, B.getDataAttributes(t));
    });
  }), m("scrollspy", Ye);

  var qe =
  /*#__PURE__*/
  function (_j10) {
    _inherits(qe, _j10);

    function qe() {
      _classCallCheck(this, qe);

      return _possibleConstructorReturn(this, _getPrototypeOf(qe).apply(this, arguments));
    }

    _createClass(qe, [{
      key: "show",
      value: function show() {
        var _this40 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || d(this._element)) return;
        var t;

        var e = s(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var _e18 = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";

          t = H.find(_e18, i), t = t[t.length - 1];
        }

        var n = t ? N.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (N.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== n && n.defaultPrevented) return;

        this._activate(this._element, i);

        var o = function o() {
          N.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this40._element
          }), N.trigger(_this40._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this41 = this;

        var s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? H.children(e, ".active") : H.find(":scope > li > .active", e))[0],
            o = i && s && s.classList.contains("fade"),
            r = function r() {
          return _this41._transitionComplete(t, s, i);
        };

        if (s && o) {
          var _t17 = n(s);

          s.classList.remove("show"), N.one(s, "transitionend", r), a(s, _t17);
        } else r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");

          var _t18 = H.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t18 && _t18.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && H.find(".dropdown-toggle").forEach(function (t) {
          return t.classList.add("active");
        }), t.setAttribute("aria-expanded", !0)), i && i();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = b.get(this, "bs.tab") || new qe(this);

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

    return qe;
  }(j);

  N.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    t.preventDefault(), (b.get(this, "bs.tab") || new qe(this)).show();
  }), m("tab", qe);
  var Ve = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Xe = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Qe =
  /*#__PURE__*/
  function (_j11) {
    _inherits(Qe, _j11);

    function Qe(t, e) {
      var _this42;

      _classCallCheck(this, Qe);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Qe).call(this, t)), _this42._config = _this42._getConfig(e), _this42._timeout = null, _this42._setListeners();
      return _this42;
    }

    _createClass(Qe, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (N.trigger(this._element, "show.bs.toast").defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var t = function t() {
          _this43._element.classList.remove("showing"), _this43._element.classList.add("show"), N.trigger(_this43._element, "shown.bs.toast"), _this43._config.autohide && (_this43._timeout = setTimeout(function () {
            _this43.hide();
          }, _this43._config.delay));
        };

        if (this._element.classList.remove("hide"), u(this._element), this._element.classList.add("showing"), this._config.animation) {
          var _e19 = n(this._element);

          N.one(this._element, "transitionend", t), a(this._element, _e19);
        } else t();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this44 = this;

        if (!this._element.classList.contains("show")) return;
        if (N.trigger(this._element, "hide.bs.toast").defaultPrevented) return;

        var t = function t() {
          _this44._element.classList.add("hide"), N.trigger(_this44._element, "hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var _e20 = n(this._element);

          N.one(this._element, "transitionend", t), a(this._element, _e20);
        } else t();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), N.off(this._element, "click.dismiss.bs.toast"), _get(_getPrototypeOf(Qe.prototype), "dispose", this).call(this), this._config = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Xe, {}, B.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {}), l("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this45 = this;

        N.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
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
          var e = b.get(this, "bs.toast");

          if (e || (e = new Qe(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ve;
      }
    }, {
      key: "Default",
      get: function get() {
        return Xe;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]);

    return Qe;
  }(j);

  return m("toast", Qe), {
    Alert: P,
    Button: I,
    Carousel: Y,
    Collapse: X,
    Dropdown: _e,
    Modal: ye,
    Offcanvas: Oe,
    Popover: Fe,
    ScrollSpy: Ye,
    Tab: qe,
    Toast: Qe,
    Tooltip: Be
  };
});