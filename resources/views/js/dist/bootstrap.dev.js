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
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) : typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
})(void 0, function (Popper) {
  'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);

    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        }
      });
    }

    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace =
  /*#__PURE__*/
  _interopNamespace(Popper);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = '#' + hrefAttr.split('#')[1];
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement = function isElement(obj) {
    return (obj[0] || obj).nodeType;
  };

  var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
    var called = false;
    var durationPadding = 5;
    var emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      var elementStyle = getComputedStyle(element);
      var parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {
    return function () {};
  };

  var reflow = function reflow(element) {
    return element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };

  var defineJQueryPlugin = function defineJQueryPlugin(name, plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }

      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      var instanceMap = elementMap.get(element);
      instanceMap["delete"](key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap["delete"](element);
      }
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

    var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    var custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
          _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
          delegation = _normalizeParams4[0],
          originalHandler = _normalizeParams4[1],
          typeEvent = _normalizeParams4[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = event.replace(stripNameRegex, '');
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '5.0.0-beta3';

  var BaseComponent =
  /*#__PURE__*/
  function () {
    function BaseComponent(element) {
      _classCallCheck(this, BaseComponent);

      element = typeof element === 'string' ? document.querySelector(element) : element;

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        this._element = null;
      }
      /** Static */

    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data.get(element, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return BaseComponent;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$b = 'alert';
  var DATA_KEY$b = 'bs.alert';
  var EVENT_KEY$b = ".".concat(DATA_KEY$b);
  var DATA_API_KEY$8 = '.data-api';
  var SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  var EVENT_CLOSE = "close".concat(EVENT_KEY$b);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY$b);
  var EVENT_CLICK_DATA_API$7 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$8);
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

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
      // Public
      value: function close(element) {
        var rootElement = element ? this._getRootElement(element) : this._element;

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent === null || customEvent.defaultPrevented) {
          return;
        }

        this._removeElement(rootElement);
      } // Private

    }, {
      key: "_getRootElement",
      value: function _getRootElement(element) {
        return getElementFromSelector(element) || element.closest(".".concat(CLASS_NAME_ALERT));
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(element) {
        return EventHandler.trigger(element, EVENT_CLOSE);
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(element) {
        var _this = this;

        element.classList.remove(CLASS_NAME_SHOW$8);

        if (!element.classList.contains(CLASS_NAME_FADE$5)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = getTransitionDurationFromElement(element);
        EventHandler.one(element, 'transitionend', function () {
          return _this._destroyElement(element);
        });
        emulateTransitionEnd(element, transitionDuration);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(element) {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }

        EventHandler.trigger(element, EVENT_CLOSED);
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$b);

          if (!data) {
            data = new Alert(this);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      }
    }, {
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY$b;
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$b, Alert);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'button';
  var DATA_KEY$a = 'bs.button';
  var EVENT_KEY$a = ".".concat(DATA_KEY$a);
  var DATA_API_KEY$7 = '.data-api';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$7);
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

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
      // Public
      value: function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$a);

          if (!data) {
            data = new Button(this);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }, {
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY$a;
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Data.get(button, DATA_KEY$a);

    if (!data) {
      data = new Button(button);
    }

    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$a, Button);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs');
      }).forEach(function (key) {
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector) {
      var _ref;

      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'carousel';
  var DATA_KEY$9 = 'bs.carousel';
  var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
  var DATA_API_KEY$6 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default$8 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$8 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide".concat(EVENT_KEY$9);
  var EVENT_SLID = "slid".concat(EVENT_KEY$9);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$9);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$9);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$9);
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$9);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$9);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$9);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$9);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$9);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$9);
  var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$9).concat(DATA_API_KEY$6);
  var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$6);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-bs-target]';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function (_BaseComponent3) {
    _inherits(Carousel, _BaseComponent3);

    function Carousel(element, config) {
      var _this2;

      _classCallCheck(this, Carousel);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, element));
      _this2._items = null;
      _this2._interval = null;
      _this2._activeElement = null;
      _this2._isPaused = false;
      _this2._isSliding = false;
      _this2.touchTimeout = null;
      _this2.touchStartX = 0;
      _this2.touchDeltaX = 0;
      _this2._config = _this2._getConfig(config);
      _this2._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this2._element);
      _this2._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this2._pointerEvent = Boolean(window.PointerEvent);

      _this2._addEventListeners();

      return _this2;
    } // Getters


    _createClass(Carousel, [{
      key: "next",
      // Public
      value: function next() {
        if (!this._isSliding) {
          this._slide(ORDER_NEXT);
        }
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        if (!this._isSliding) {
          this._slide(ORDER_PREV);
        }
      }
    }, {
      key: "pause",
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();

          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this3 = this;

        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, function () {
            return _this3.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

        this._slide(order, this._items[index]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        EventHandler.off(this._element, EVENT_KEY$9);
        this._items = null;
        this._config = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;

        _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default$8, {}, config);
        typeCheckConfig(NAME$9, config, DefaultType$8);
        return config;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;

        if (!direction) {
          return;
        }

        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this4 = this;

        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
            return _this4._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
            return _this4.pause(event);
          });
          EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
            return _this4.cycle(event);
          });
        }

        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this5 = this;

        var start = function start(event) {
          if (_this5._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            _this5.touchStartX = event.clientX;
          } else if (!_this5._pointerEvent) {
            _this5.touchStartX = event.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          _this5.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this5.touchStartX;
        };

        var end = function end(event) {
          if (_this5._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            _this5.touchDeltaX = event.clientX - _this5.touchStartX;
          }

          _this5._handleSwipe();

          if (_this5._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this5.pause();

            if (_this5.touchTimeout) {
              clearTimeout(_this5.touchTimeout);
            }

            _this5.touchTimeout = setTimeout(function (event) {
              return _this5.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this5._config.interval);
          }
        };

        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
          EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
            return e.preventDefault();
          });
        });

        if (this._pointerEvent) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        if (event.key === ARROW_LEFT_KEY) {
          event.preventDefault();

          this._slide(DIRECTION_LEFT);
        } else if (event.key === ARROW_RIGHT_KEY) {
          event.preventDefault();

          this._slide(DIRECTION_RIGHT);
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(order, activeElement) {
        var isNext = order === ORDER_NEXT;
        var isPrev = order === ORDER_PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = isPrev ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

        return EventHandler.trigger(this._element, EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute('aria-current');
          var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

          for (var i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        if (!element) {
          return;
        }

        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
    }, {
      key: "_slide",
      value: function _slide(directionOrOrder, element) {
        var _this6 = this;

        var order = this._directionToOrder(directionOrOrder);

        var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || this._getItemByOrder(order, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var isNext = order === ORDER_NEXT;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

        var eventDirectionName = this._orderToDirection(order);

        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.defaultPrevented) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        this._activeElement = nextElement;

        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);
          var transitionDuration = getTransitionDurationFromElement(activeElement);
          EventHandler.one(activeElement, 'transitionend', function () {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            _this6._isSliding = false;
            setTimeout(function () {
              EventHandler.trigger(_this6._element, EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
              });
            }, 0);
          });
          emulateTransitionEnd(activeElement, transitionDuration);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          EventHandler.trigger(this._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        }

        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }

        if (isRTL()) {
          return direction === DIRECTION_RIGHT ? ORDER_PREV : ORDER_NEXT;
        }

        return direction === DIRECTION_RIGHT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }

        if (isRTL()) {
          return order === ORDER_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return order === ORDER_NEXT ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static

    }], [{
      key: "carouselInterface",
      value: function carouselInterface(element, config) {
        var data = Data.get(element, DATA_KEY$9);

        var _config = _objectSpread({}, Default$8, {}, Manipulator.getDataAttributes(element));

        if (_typeof(config) === 'object') {
          _config = _objectSpread({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(element, _config);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"".concat(action, "\""));
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(event) {
        var target = getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _objectSpread({}, Manipulator.getDataAttributes(target), {}, Manipulator.getDataAttributes(this));

        var slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel.carouselInterface(target, config);

        if (slideIndex) {
          Data.get(target, DATA_KEY$9).to(slideIndex);
        }

        event.preventDefault();
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
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$9, Carousel);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'collapse';
  var DATA_KEY$8 = 'bs.collapse';
  var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
  var DATA_API_KEY$5 = '.data-api';
  var Default$7 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$7 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW$5 = "show".concat(EVENT_KEY$8);
  var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$8);
  var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$8);
  var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$8);
  var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function (_BaseComponent4) {
    _inherits(Collapse, _BaseComponent4);

    function Collapse(element, config) {
      var _this7;

      _classCallCheck(this, Collapse);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, element));
      _this7._isTransitioning = false;
      _this7._config = _this7._getConfig(config);
      _this7._triggerArray = SelectorEngine.find("".concat(SELECTOR_DATA_TOGGLE$4, "[href=\"#").concat(_this7._element.id, "\"],") + "".concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-target=\"#").concat(_this7._element.id, "\"]"));
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === _this7._element;
        });

        if (selector !== null && filterElement.length) {
          _this7._selector = selector;

          _this7._triggerArray.push(elem);
        }
      }

      _this7._parent = _this7._config.parent ? _this7._getParent() : null;

      if (!_this7._config.parent) {
        _this7._addAriaAndCollapsedClass(_this7._element, _this7._triggerArray);
      }

      if (_this7._config.toggle) {
        _this7.toggle();
      }

      return _this7;
    } // Getters


    _createClass(Collapse, [{
      key: "toggle",
      // Public
      value: function toggle() {
        if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this8 = this;

        if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
            if (typeof _this8._config.parent === 'string') {
              return elem.getAttribute('data-bs-parent') === _this8._config.parent;
            }

            return elem.classList.contains(CLASS_NAME_COLLAPSE);
          });

          if (actives.length === 0) {
            actives = null;
          }
        }

        var container = SelectorEngine.findOne(this._selector);

        if (actives) {
          var tempActiveData = actives.find(function (elem) {
            return container !== elem;
          });
          activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        if (actives) {
          actives.forEach(function (elemActive) {
            if (container !== elemActive) {
              Collapse.collapseInterface(elemActive, 'hide');
            }

            if (!activesData) {
              Data.set(elemActive, DATA_KEY$8, null);
            }
          });
        }

        var dimension = this._getDimension();

        this._element.classList.remove(CLASS_NAME_COLLAPSE);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          this._triggerArray.forEach(function (element) {
            element.classList.remove(CLASS_NAME_COLLAPSED);
            element.setAttribute('aria-expanded', true);
          });
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this8._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this8._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

          _this8._element.style[dimension] = '';

          _this8.setTransitioning(false);

          EventHandler.trigger(_this8._element, EVENT_SHOWN$5);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this9 = this;

        if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }

        var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

        if (startEvent.defaultPrevented) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        reflow(this._element);

        this._element.classList.add(CLASS_NAME_COLLAPSING);

        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

        var triggerArrayLength = this._triggerArray.length;

        if (triggerArrayLength > 0) {
          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = this._triggerArray[i];
            var elem = getElementFromSelector(trigger);

            if (elem && !elem.classList.contains(CLASS_NAME_SHOW$7)) {
              trigger.classList.add(CLASS_NAME_COLLAPSED);
              trigger.setAttribute('aria-expanded', false);
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this9.setTransitioning(false);

          _this9._element.classList.remove(CLASS_NAME_COLLAPSING);

          _this9._element.classList.add(CLASS_NAME_COLLAPSE);

          EventHandler.trigger(_this9._element, EVENT_HIDDEN$5);
        };

        this._element.style[dimension] = '';
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(Collapse.prototype), "dispose", this).call(this);

        this._config = null;
        this._parent = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default$7, {}, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
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

        var parent = this._config.parent;

        if (isElement(parent)) {
          // it's a jQuery object
          if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
            parent = parent[0];
          }
        } else {
          parent = SelectorEngine.findOne(parent);
        }

        var selector = "".concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-parent=\"").concat(parent, "\"]");
        SelectorEngine.find(selector, parent).forEach(function (element) {
          var selected = getElementFromSelector(element);

          _this10._addAriaAndCollapsedClass(selected, [element]);
        });
        return parent;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (!element || !triggerArray.length) {
          return;
        }

        var isOpen = element.classList.contains(CLASS_NAME_SHOW$7);
        triggerArray.forEach(function (elem) {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static

    }], [{
      key: "collapseInterface",
      value: function collapseInterface(element, config) {
        var data = Data.get(element, DATA_KEY$8);

        var _config = _objectSpread({}, Default$7, {}, Manipulator.getDataAttributes(element), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(element, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Collapse.collapseInterface(this, config);
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
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    var triggerData = Manipulator.getDataAttributes(this);
    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      var data = Data.get(element, DATA_KEY$8);
      var config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$8, Collapse);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'dropdown';
  var DATA_KEY$7 = 'bs.dropdown';
  var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
  var DATA_API_KEY$4 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
  var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$7);
  var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$7);
  var EVENT_SHOW$4 = "show".concat(EVENT_KEY$7);
  var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$7);
  var EVENT_CLICK = "click".concat(EVENT_KEY$7);
  var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var Default$6 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$6 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function (_BaseComponent5) {
    _inherits(Dropdown, _BaseComponent5);

    function Dropdown(element, config) {
      var _this11;

      _classCallCheck(this, Dropdown);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, element));
      _this11._popper = null;
      _this11._config = _this11._getConfig(config);
      _this11._menu = _this11._getMenuElement();
      _this11._inNavbar = _this11._detectNavbar();

      _this11._addEventListeners();

      return _this11;
    } // Getters


    _createClass(Dropdown, [{
      key: "toggle",
      // Public
      value: function toggle() {
        if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
          return;
        }

        var isActive = this._element.classList.contains(CLASS_NAME_SHOW$6);

        Dropdown.clearMenus();

        if (isActive) {
          return;
        }

        this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$6)) {
          return;
        }

        var parent = Dropdown.getParentFromElement(this._element);
        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

        if (showEvent.defaultPrevented) {
          return;
        } // Totally disable Popper for Dropdowns in Navbar


        if (this._inNavbar) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        } else {
          if (typeof Popper__namespace === 'undefined') {
            throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
          }

          var referenceElement = this._element;

          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (isElement(this._config.reference)) {
            referenceElement = this._config.reference; // Check if it's jQuery element

            if (typeof this._config.reference.jquery !== 'undefined') {
              referenceElement = this._config.reference[0];
            }
          } else if (_typeof(this._config.reference) === 'object') {
            referenceElement = this._config.reference;
          }

          var popperConfig = this._getPopperConfig();

          var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
            return modifier.name === 'applyStyles' && modifier.enabled === false;
          });
          this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

          if (isDisplayStatic) {
            Manipulator.setDataAttribute(this._menu, 'popper', 'static');
          }
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref3;

          (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (elem) {
            return EventHandler.on(elem, 'mouseover', null, noop());
          });
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        this._menu.classList.toggle(CLASS_NAME_SHOW$6);

        this._element.classList.toggle(CLASS_NAME_SHOW$6);

        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$6)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

        if (hideEvent.defaultPrevented) {
          return;
        }

        if (this._popper) {
          this._popper.destroy();
        }

        this._menu.classList.toggle(CLASS_NAME_SHOW$6);

        this._element.classList.toggle(CLASS_NAME_SHOW$6);

        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        EventHandler.off(this._element, EVENT_KEY$7);
        this._menu = null;

        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }

        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper) {
          this._popper.update();
        }
      } // Private

    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this12 = this;

        EventHandler.on(this._element, EVENT_CLICK, function (event) {
          event.preventDefault();

          _this12.toggle();
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, config);
        typeCheckConfig(NAME$7, config, this.constructor.DefaultType);

        if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME$7.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }

        return config;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._element.parentNode;

        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }

        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        } // We need to trim the value because custom properties can also include spaces


        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }

        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var offset = this._config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this13._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display

        if (this._config.display === 'static') {
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }

        return _objectSpread({}, defaultBsPopperConfig, {}, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      } // Static

    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(element, config) {
        var data = Data.get(element, DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(element, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          Dropdown.dropdownInterface(this, config);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event) {
          if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
            return;
          }

          if (/input|select|textarea|form/i.test(event.target.tagName)) {
            return;
          }
        }

        var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

        for (var i = 0, len = toggles.length; i < len; i++) {
          var context = Data.get(toggles[i], DATA_KEY$7);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!toggles[i].classList.contains(CLASS_NAME_SHOW$6)) {
            continue;
          }

          if (event) {
            // Don't close the menu if the clicked element or one of its parents is the dropdown button
            if ([context._element].some(function (element) {
              return event.composedPath().includes(element);
            })) {
              continue;
            } // Tab navigation through the dropdown menu shouldn't close the menu


            if (event.type === 'keyup' && event.key === TAB_KEY && dropdownMenu.contains(event.target)) {
              continue;
            }
          }

          var hideEvent = EventHandler.trigger(toggles[i], EVENT_HIDE$4, relatedTarget);

          if (hideEvent.defaultPrevented) {
            continue;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            var _ref4;

            (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (elem) {
              return EventHandler.off(elem, 'mouseover', null, noop());
            });
          }

          toggles[i].setAttribute('aria-expanded', 'false');

          if (context._popper) {
            context._popper.destroy();
          }

          dropdownMenu.classList.remove(CLASS_NAME_SHOW$6);
          toggles[i].classList.remove(CLASS_NAME_SHOW$6);
          Manipulator.removeDataAttribute(dropdownMenu, 'popper');
          EventHandler.trigger(toggles[i], EVENT_HIDDEN$4, relatedTarget);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
          return;
        }

        var parent = Dropdown.getParentFromElement(this);
        var isActive = this.classList.contains(CLASS_NAME_SHOW$6);

        if (event.key === ESCAPE_KEY$2) {
          var button = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
          button.focus();
          Dropdown.clearMenus();
          return;
        }

        if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
          var _button = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];

          _button.click();

          return;
        }

        if (!isActive || event.key === SPACE_KEY) {
          Dropdown.clearMenus();
          return;
        }

        var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

        if (!items.length) {
          return;
        }

        var index = items.indexOf(event.target); // Up

        if (event.key === ARROW_UP_KEY && index > 0) {
          index--;
        } // Down


        if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
          index++;
        } // index is -1 if the first keydown is an ArrowUp


        index = index === -1 ? 0 : index;
        items[index].focus();
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
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.dropdownInterface(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$7, Dropdown);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'modal';
  var DATA_KEY$6 = 'bs.modal';
  var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
  var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
  var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
  var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
  var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$6);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
  var EVENT_CLICK_DISMISS$2 = "click.dismiss".concat(EVENT_KEY$6);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
  var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT$1 = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT$1 = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function (_BaseComponent6) {
    _inherits(Modal, _BaseComponent6);

    function Modal(element, config) {
      var _this14;

      _classCallCheck(this, Modal);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, element));
      _this14._config = _this14._getConfig(config);
      _this14._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this14._element);
      _this14._backdrop = null;
      _this14._isShown = false;
      _this14._isBodyOverflowing = false;
      _this14._ignoreBackdropClick = false;
      _this14._isTransitioning = false;
      _this14._scrollbarWidth = 0;
      return _this14;
    } // Getters


    _createClass(Modal, [{
      key: "toggle",
      // Public
      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this15 = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        if (this._isAnimated()) {
          this._isTransitioning = true;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget: relatedTarget
        });

        if (this._isShown || showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, function (event) {
          return _this15.hide(event);
        });
        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
          EventHandler.one(_this15._element, EVENT_MOUSEUP_DISMISS, function (event) {
            if (event.target === _this15._element) {
              _this15._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this15._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide(event) {
        var _this16 = this;

        if (event) {
          event.preventDefault();
        }

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._isShown = false;

        var isAnimated = this._isAnimated();

        if (isAnimated) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        EventHandler.off(document, EVENT_FOCUSIN$1);

        this._element.classList.remove(CLASS_NAME_SHOW$5);

        EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

        if (isAnimated) {
          var transitionDuration = getTransitionDurationFromElement(this._element);
          EventHandler.one(this._element, 'transitionend', function (event) {
            return _this16._hideModal(event);
          });
          emulateTransitionEnd(this._element, transitionDuration);
        } else {
          this._hideModal();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._element, this._dialog].forEach(function (htmlElement) {
          return EventHandler.off(htmlElement, EVENT_KEY$6);
        });

        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
        /**
         * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `EVENT_CLICK_DATA_API` event that should remain
         */


        EventHandler.off(document, EVENT_FOCUSIN$1);
        this._config = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default$5, {}, config);
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this17 = this;

        var isAnimated = this._isAnimated();

        var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.scrollTop = 0;

        if (modalBody) {
          modalBody.scrollTop = 0;
        }

        if (isAnimated) {
          reflow(this._element);
        }

        this._element.classList.add(CLASS_NAME_SHOW$5);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var transitionComplete = function transitionComplete() {
          if (_this17._config.focus) {
            _this17._element.focus();
          }

          _this17._isTransitioning = false;
          EventHandler.trigger(_this17._element, EVENT_SHOWN$3, {
            relatedTarget: relatedTarget
          });
        };

        if (isAnimated) {
          var transitionDuration = getTransitionDurationFromElement(this._dialog);
          EventHandler.one(this._dialog, 'transitionend', transitionComplete);
          emulateTransitionEnd(this._dialog, transitionDuration);
        } else {
          transitionComplete();
        }
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this18 = this;

        EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

        EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
          if (document !== event.target && _this18._element !== event.target && !_this18._element.contains(event.target)) {
            _this18._element.focus();
          }
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this19 = this;

        if (this._isShown) {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
            if (_this19._config.keyboard && event.key === ESCAPE_KEY$1) {
              event.preventDefault();

              _this19.hide();
            } else if (!_this19._config.keyboard && event.key === ESCAPE_KEY$1) {
              _this19._triggerBackdropTransition();
            }
          });
        } else {
          EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
        }
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this20 = this;

        if (this._isShown) {
          EventHandler.on(window, EVENT_RESIZE, function () {
            return _this20._adjustDialog();
          });
        } else {
          EventHandler.off(window, EVENT_RESIZE);
        }
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this21 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._showBackdrop(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);

          _this21._resetAdjustments();

          _this21._resetScrollbar();

          EventHandler.trigger(_this21._element, EVENT_HIDDEN$3);
        });
      }
    }, {
      key: "_removeBackdrop",
      value: function _removeBackdrop() {
        this._backdrop.parentNode.removeChild(this._backdrop);

        this._backdrop = null;
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(callback) {
        var _this22 = this;

        var isAnimated = this._isAnimated();

        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement('div');
          this._backdrop.className = CLASS_NAME_BACKDROP;

          if (isAnimated) {
            this._backdrop.classList.add(CLASS_NAME_FADE$4);
          }

          document.body.appendChild(this._backdrop);
          EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, function (event) {
            if (_this22._ignoreBackdropClick) {
              _this22._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            if (_this22._config.backdrop === 'static') {
              _this22._triggerBackdropTransition();
            } else {
              _this22.hide();
            }
          });

          if (isAnimated) {
            reflow(this._backdrop);
          }

          this._backdrop.classList.add(CLASS_NAME_SHOW$5);

          if (!isAnimated) {
            callback();
            return;
          }

          var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
          EventHandler.one(this._backdrop, 'transitionend', callback);
          emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove(CLASS_NAME_SHOW$5);

          var callbackRemove = function callbackRemove() {
            _this22._removeBackdrop();

            callback();
          };

          if (isAnimated) {
            var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

            EventHandler.one(this._backdrop, 'transitionend', callbackRemove);
            emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else {
          callback();
        }
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$4);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this23 = this;

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
        EventHandler.off(this._element, 'transitionend');
        EventHandler.one(this._element, 'transitionend', function () {
          _this23._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            EventHandler.one(_this23._element, 'transitionend', function () {
              _this23._element.style.overflowY = '';
            });
            emulateTransitionEnd(_this23._element, modalTransitionDuration);
          }
        });
        emulateTransitionEnd(this._element, modalTransitionDuration);

        this._element.focus();
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------

    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing && !isRTL() || this._isBodyOverflowing && !isModalOverflowing && isRTL()) {
          this._element.style.paddingLeft = "".concat(this._scrollbarWidth, "px");
        }

        if (this._isBodyOverflowing && !isModalOverflowing && !isRTL() || !this._isBodyOverflowing && isModalOverflowing && isRTL()) {
          this._element.style.paddingRight = "".concat(this._scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      }
    }, {
      key: "_checkScrollbar",
      value: function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: "_setScrollbar",
      value: function _setScrollbar() {
        var _this24 = this;

        if (this._isBodyOverflowing) {
          this._setElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight', function (calculatedValue) {
            return calculatedValue + _this24._scrollbarWidth;
          });

          this._setElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight', function (calculatedValue) {
            return calculatedValue - _this24._scrollbarWidth;
          });

          this._setElementAttributes('body', 'paddingRight', function (calculatedValue) {
            return calculatedValue + _this24._scrollbarWidth;
          });
        }

        document.body.classList.add(CLASS_NAME_OPEN);
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProp, callback) {
        var _this25 = this;

        SelectorEngine.find(selector).forEach(function (element) {
          if (element !== document.body && window.innerWidth > element.clientWidth + _this25._scrollbarWidth) {
            return;
          }

          var actualValue = element.style[styleProp];
          var calculatedValue = window.getComputedStyle(element)[styleProp];
          Manipulator.setDataAttribute(element, styleProp, actualValue);
          element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
        });
      }
    }, {
      key: "_resetScrollbar",
      value: function _resetScrollbar() {
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight');

        this._resetElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight');

        this._resetElementAttributes('body', 'paddingRight');
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProp) {
        SelectorEngine.find(selector).forEach(function (element) {
          var value = Manipulator.getDataAttribute(element, styleProp);

          if (typeof value === 'undefined' && element === document.body) {
            element.style[styleProp] = '';
          } else {
            Manipulator.removeDataAttribute(element, styleProp);
            element.style[styleProp] = value;
          }
        });
      }
    }, {
      key: "_getScrollbarWidth",
      value: function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$6);

          var _config = _objectSpread({}, Default$5, {}, Manipulator.getDataAttributes(this), {}, _typeof(config) === 'object' && config ? config : {});

          if (!data) {
            data = new Modal(this, _config);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](relatedTarget);
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
        return DATA_KEY$6;
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this26 = this;

    var target = getElementFromSelector(this);

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, function () {
        if (isVisible(_this26)) {
          _this26.focus();
        }
      });
    });
    var data = Data.get(target, DATA_KEY$6);

    if (!data) {
      var config = _objectSpread({}, Manipulator.getDataAttributes(target), {}, Manipulator.getDataAttributes(this));

      data = new Modal(target, config);
    }

    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$6, Modal);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var getWidth = function getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    var documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };

  var hide = function hide() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWidth();
    document.body.style.overflow = 'hidden';

    _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });

    _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
      return calculatedValue - width;
    });

    _setElementAttributes('body', 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });
  };

  var _setElementAttributes = function _setElementAttributes(selector, styleProp, callback) {
    var scrollbarWidth = getWidth();
    SelectorEngine.find(selector).forEach(function (element) {
      if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      var actualValue = element.style[styleProp];
      var calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator.setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
    });
  };

  var reset = function reset() {
    document.body.style.overflow = 'auto';

    _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');

    _resetElementAttributes('body', 'paddingRight');
  };

  var _resetElementAttributes = function _resetElementAttributes(selector, styleProp) {
    SelectorEngine.find(selector).forEach(function (element) {
      var value = Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined' && element === document.body) {
        element.style.removeProperty(styleProp);
      } else {
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'offcanvas';
  var DATA_KEY$5 = 'bs.offcanvas';
  var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
  var DATA_API_KEY$2 = '.data-api';
  var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var ESCAPE_KEY = 'Escape';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  var CLASS_NAME_BACKDROP_BODY = 'offcanvas-backdrop';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_TOGGLING = 'offcanvas-toggling';
  var OPEN_SELECTOR = '.offcanvas.show';
  var ACTIVE_SELECTOR = "".concat(OPEN_SELECTOR, ", .").concat(CLASS_NAME_TOGGLING);
  var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
  var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
  var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
  var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY$5);
  var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
  var EVENT_CLICK_DISMISS$1 = "click.dismiss".concat(EVENT_KEY$5);
  var SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Offcanvas =
  /*#__PURE__*/
  function (_BaseComponent7) {
    _inherits(Offcanvas, _BaseComponent7);

    function Offcanvas(element, config) {
      var _this27;

      _classCallCheck(this, Offcanvas);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Offcanvas).call(this, element));
      _this27._config = _this27._getConfig(config);
      _this27._isShown = false;

      _this27._addEventListeners();

      return _this27;
    } // Getters


    _createClass(Offcanvas, [{
      key: "toggle",
      // Public
      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this28 = this;

        if (this._isShown) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });

        if (showEvent.defaultPrevented) {
          return;
        }

        this._isShown = true;
        this._element.style.visibility = 'visible';

        if (this._config.backdrop) {
          document.body.classList.add(CLASS_NAME_BACKDROP_BODY);
        }

        if (!this._config.scroll) {
          hide();
        }

        this._element.classList.add(CLASS_NAME_TOGGLING);

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        this._element.classList.add(CLASS_NAME_SHOW$4);

        var completeCallBack = function completeCallBack() {
          _this28._element.classList.remove(CLASS_NAME_TOGGLING);

          EventHandler.trigger(_this28._element, EVENT_SHOWN$2, {
            relatedTarget: relatedTarget
          });

          _this28._enforceFocusOnElement(_this28._element);
        };

        setTimeout(completeCallBack, getTransitionDurationFromElement(this._element));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this29 = this;

        if (!this._isShown) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

        if (hideEvent.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_TOGGLING);

        EventHandler.off(document, EVENT_FOCUSIN);

        this._element.blur();

        this._isShown = false;

        this._element.classList.remove(CLASS_NAME_SHOW$4);

        var completeCallback = function completeCallback() {
          _this29._element.setAttribute('aria-hidden', true);

          _this29._element.removeAttribute('aria-modal');

          _this29._element.removeAttribute('role');

          _this29._element.style.visibility = 'hidden';

          if (_this29._config.backdrop) {
            document.body.classList.remove(CLASS_NAME_BACKDROP_BODY);
          }

          if (!_this29._config.scroll) {
            reset();
          }

          EventHandler.trigger(_this29._element, EVENT_HIDDEN$2);

          _this29._element.classList.remove(CLASS_NAME_TOGGLING);
        };

        setTimeout(completeCallback, getTransitionDurationFromElement(this._element));
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default$4, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' ? config : {});
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(element) {
        EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

        EventHandler.on(document, EVENT_FOCUSIN, function (event) {
          if (document !== event.target && element !== event.target && !element.contains(event.target)) {
            element.focus();
          }
        });
        element.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this30 = this;

        EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
          return _this30.hide();
        });
        EventHandler.on(document, 'keydown', function (event) {
          if (_this30._config.keyboard && event.key === ESCAPE_KEY) {
            _this30.hide();
          }
        });
        EventHandler.on(document, EVENT_CLICK_DATA_API$1, function (event) {
          var target = SelectorEngine.findOne(getSelectorFromElement(event.target));

          if (!_this30._element.contains(event.target) && target !== _this30._element) {
            _this30.hide();
          }
        });
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, _typeof(config) === 'object' ? config : {});

          if (typeof config !== 'string') {
            return;
          }

          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](this);
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
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this31 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      // focus on trigger when it is closed
      if (isVisible(_this31)) {
        _this31.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine.findOne(ACTIVE_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      return;
    }

    var data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    SelectorEngine.find(OPEN_SELECTOR).forEach(function (el) {
      return (Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show();
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(NAME$5, Offcanvas);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
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
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
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

  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref5;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var allowlistKeys = Object.keys(allowList);

    var elements = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(createdDocument.body.querySelectorAll('*')));

    var _loop = function _loop(i, len) {
      var _ref6;

      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(el.attributes));

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'tooltip';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)".concat(CLASS_PREFIX$1, "\\S+"), 'g');
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$2 = {
    HIDE: "hide".concat(EVENT_KEY$4),
    HIDDEN: "hidden".concat(EVENT_KEY$4),
    SHOW: "show".concat(EVENT_KEY$4),
    SHOWN: "shown".concat(EVENT_KEY$4),
    INSERTED: "inserted".concat(EVENT_KEY$4),
    CLICK: "click".concat(EVENT_KEY$4),
    FOCUSIN: "focusin".concat(EVENT_KEY$4),
    FOCUSOUT: "focusout".concat(EVENT_KEY$4),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
  };
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$3 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function (_BaseComponent8) {
    _inherits(Tooltip, _BaseComponent8);

    function Tooltip(element, config) {
      var _this32;

      _classCallCheck(this, Tooltip);

      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, element)); // private

      _this32._isEnabled = true;
      _this32._timeout = 0;
      _this32._hoverState = '';
      _this32._activeTrigger = {};
      _this32._popper = null; // Protected

      _this32.config = _this32._getConfig(config);
      _this32.tip = null;

      _this32._setListeners();

      return _this32;
    } // Getters


    _createClass(Tooltip, [{
      key: "enable",
      // Public
      value: function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        EventHandler.off(this._element.closest(".".concat(CLASS_NAME_MODAL)), 'hide.bs.modal', this._hideModalHandler);

        if (this.tip && this.tip.parentNode) {
          this.tip.parentNode.removeChild(this.tip);
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper) {
          this._popper.destroy();
        }

        this._popper = null;
        this.config = null;
        this.tip = null;

        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this33 = this;

        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }

        if (!(this.isWithContent() && this._isEnabled)) {
          return;
        }

        var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        var shadowRoot = findShadowRoot(this._element);
        var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);

        this._element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          tip.classList.add(CLASS_NAME_FADE$3);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this._addAttachmentClass(attachment);

        var container = this._getContainer();

        Data.set(tip, this.constructor.DATA_KEY, this);

        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.appendChild(tip);
          EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }

        if (this._popper) {
          this._popper.update();
        } else {
          this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }

        tip.classList.add(CLASS_NAME_SHOW$3);
        var customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

        if (customClass) {
          var _tip$classList;

          (_tip$classList = tip.classList).add.apply(_tip$classList, _toConsumableArray(customClass.split(' ')));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement) {
          var _ref7;

          (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (element) {
            EventHandler.on(element, 'mouseover', noop());
          });
        }

        var complete = function complete() {
          var prevHoverState = _this33._hoverState;
          _this33._hoverState = null;
          EventHandler.trigger(_this33._element, _this33.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this33._leave(null, _this33);
          }
        };

        if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
          var transitionDuration = getTransitionDurationFromElement(this.tip);
          EventHandler.one(this.tip, 'transitionend', complete);
          emulateTransitionEnd(this.tip, transitionDuration);
        } else {
          complete();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this34 = this;

        if (!this._popper) {
          return;
        }

        var tip = this.getTipElement();

        var complete = function complete() {
          if (_this34._isWithActiveTrigger()) {
            return;
          }

          if (_this34._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this34._cleanTipClass();

          _this34._element.removeAttribute('aria-describedby');

          EventHandler.trigger(_this34._element, _this34.constructor.Event.HIDDEN);

          if (_this34._popper) {
            _this34._popper.destroy();

            _this34._popper = null;
          }
        };

        var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref8;

          (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (element) {
            return EventHandler.off(element, 'mouseover', noop);
          });
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;

        if (this.tip.classList.contains(CLASS_NAME_FADE$3)) {
          var transitionDuration = getTransitionDurationFromElement(tip);
          EventHandler.one(tip, 'transitionend', complete);
          emulateTransitionEnd(tip, transitionDuration);
        } else {
          complete();
        }

        this._hoverState = '';
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper !== null) {
          this._popper.update();
        }
      } // Protected

    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) {
          return this.tip;
        }

        var element = document.createElement('div');
        element.innerHTML = this.config.template;
        this.tip = element.children[0];
        return this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var tip = this.getTipElement();
        this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
        tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(element, content) {
        if (element === null) {
          return;
        }

        if (_typeof(content) === 'object' && isElement(content)) {
          if (content.jquery) {
            content = content[0];
          } // content is a DOM node or a jQuery


          if (this.config.html) {
            if (content.parentNode !== element) {
              element.innerHTML = '';
              element.appendChild(content);
            }
          } else {
            element.textContent = content.textContent;
          }

          return;
        }

        if (this.config.html) {
          if (this.config.sanitize) {
            content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
          }

          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var title = this._element.getAttribute('data-bs-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
        }

        return title;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(attachment) {
        if (attachment === 'right') {
          return 'end';
        }

        if (attachment === 'left') {
          return 'start';
        }

        return attachment;
      } // Private

    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || Data.get(event.delegateTarget, dataKey);

        if (!context) {
          context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
          Data.set(event.delegateTarget, dataKey, context);
        }

        return context;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this35 = this;

        var offset = this.config.offset;

        if (typeof offset === 'string') {
          return offset.split(',').map(function (val) {
            return Number.parseInt(val, 10);
          });
        }

        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this35._element);
          };
        }

        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this36 = this;

        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              altBoundary: true,
              fallbackPlacements: this.config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this.config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'onChange',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(data) {
              return _this36._handlePopperPlacementChange(data);
            }
          }],
          onFirstUpdate: function onFirstUpdate(data) {
            if (data.options.placement !== data.placement) {
              _this36._handlePopperPlacementChange(data);
            }
          }
        };
        return _objectSpread({}, defaultBsPopperConfig, {}, typeof this.config.popperConfig === 'function' ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(attachment) {
        this.getTipElement().classList.add("".concat(CLASS_PREFIX$1, "-").concat(this.updateAttachment(attachment)));
      }
    }, {
      key: "_getContainer",
      value: function _getContainer() {
        if (this.config.container === false) {
          return document.body;
        }

        if (isElement(this.config.container)) {
          return this.config.container;
        }

        return SelectorEngine.findOne(this.config.container);
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this37 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            EventHandler.on(_this37._element, _this37.constructor.Event.CLICK, _this37.config.selector, function (event) {
              return _this37.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this37.constructor.Event.MOUSEENTER : _this37.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this37.constructor.Event.MOUSELEAVE : _this37.constructor.Event.FOCUSOUT;
            EventHandler.on(_this37._element, eventIn, _this37.config.selector, function (event) {
              return _this37._enter(event);
            });
            EventHandler.on(_this37._element, eventOut, _this37.config.selector, function (event) {
              return _this37._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this37._element) {
            _this37.hide();
          }
        };

        EventHandler.on(this._element.closest(".".concat(CLASS_NAME_MODAL)), 'hide.bs.modal', this._hideModalHandler);

        if (this.config.selector) {
          this.config = _objectSpread({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');

        var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

        if (title || originalTitleType !== 'string') {
          this._element.setAttribute('data-bs-original-title', title || '');

          if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
            this._element.setAttribute('aria-label', title);
          }

          this._element.setAttribute('title', '');
        }
      }
    }, {
      key: "_enter",
      value: function _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
            delete dataAttributes[dataAttr];
          }
        });

        if (config && _typeof(config.container) === 'object' && config.container.jquery) {
          config.container = config.container[0];
        }

        config = _objectSpread({}, this.constructor.Default, {}, dataAttributes, {}, _typeof(config) === 'object' && config ? config : {});

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        }

        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var tip = this.getTipElement();
        var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(function (token) {
            return token.trim();
          }).forEach(function (tClass) {
            return tip.classList.remove(tClass);
          });
        }
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(popperData) {
        var state = popperData.state;

        if (!state) {
          return;
        }

        this.tip = state.elements.popper;

        this._cleanTipClass();

        this._addAttachmentClass(this._getAttachment(state.placement));
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$4);

          var _config = _typeof(config) === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
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
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME$4, Tooltip);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'popover';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)".concat(CLASS_PREFIX, "\\S+"), 'g');

  var Default$2 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event$1 = {
    HIDE: "hide".concat(EVENT_KEY$3),
    HIDDEN: "hidden".concat(EVENT_KEY$3),
    SHOW: "show".concat(EVENT_KEY$3),
    SHOWN: "shown".concat(EVENT_KEY$3),
    INSERTED: "inserted".concat(EVENT_KEY$3),
    CLICK: "click".concat(EVENT_KEY$3),
    FOCUSIN: "focusin".concat(EVENT_KEY$3),
    FOCUSOUT: "focusout".concat(EVENT_KEY$3),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$2 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

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
      // Overrides
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var tip = this.getTipElement(); // we use append for html objects to maintain js events

        this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

        var content = this._getContent();

        if (typeof content === 'function') {
          content = content.call(this._element);
        }

        this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      } // Private

    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(attachment) {
        this.getTipElement().classList.add("".concat(CLASS_PREFIX, "-").concat(this.updateAttachment(attachment)));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute('data-bs-content') || this.config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var tip = this.getTipElement();
        var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(function (token) {
            return token.trim();
          }).forEach(function (tClass) {
            return tip.classList.remove(tClass);
          });
        }
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$3);

          var _config = _typeof(config) === 'object' ? config : null;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            Data.set(this, DATA_KEY$3, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }, {
      key: "Default",
      // Getters
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
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME$3, Popover);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'scrollspy';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
  var DATA_API_KEY$1 = '.data-api';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
  var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function (_BaseComponent9) {
    _inherits(ScrollSpy, _BaseComponent9);

    function ScrollSpy(element, config) {
      var _this38;

      _classCallCheck(this, ScrollSpy);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpy).call(this, element));
      _this38._scrollElement = _this38._element.tagName === 'BODY' ? window : _this38._element;
      _this38._config = _this38._getConfig(config);
      _this38._selector = "".concat(_this38._config.target, " ").concat(SELECTOR_NAV_LINKS, ", ").concat(_this38._config.target, " ").concat(SELECTOR_LIST_ITEMS, ", ").concat(_this38._config.target, " .").concat(CLASS_NAME_DROPDOWN_ITEM);
      _this38._offsets = [];
      _this38._targets = [];
      _this38._activeTarget = null;
      _this38._scrollHeight = 0;
      EventHandler.on(_this38._scrollElement, EVENT_SCROLL, function () {
        return _this38._process();
      });

      _this38.refresh();

      _this38._process();

      return _this38;
    } // Getters


    _createClass(ScrollSpy, [{
      key: "refresh",
      // Public
      value: function refresh() {
        var _this39 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = SelectorEngine.find(this._selector);
        targets.map(function (element) {
          var targetSelector = getSelectorFromElement(element);
          var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this39._offsets.push(item[0]);

          _this39._targets.push(item[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);

        EventHandler.off(this._scrollElement, EVENT_KEY$2);
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default$1, {}, _typeof(config) === 'object' && config ? config : {});

        if (typeof config.target !== 'string' && isElement(config.target)) {
          var id = config.target.id;

          if (!id) {
            id = getUID(NAME$2);
            config.target.id = id;
          }

          config.target = "#".concat(id);
        }

        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
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
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(',').map(function (selector) {
          return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
        });

        var link = SelectorEngine.findOne(queries.join(','));

        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
          link.classList.add(CLASS_NAME_ACTIVE$1);
        } else {
          // Set triggered link as active
          link.classList.add(CLASS_NAME_ACTIVE$1);
          SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            }); // Handle special case when .nav-link is inside .nav-item

            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
              SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
                return item.classList.add(CLASS_NAME_ACTIVE$1);
              });
            });
          });
        }

        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        SelectorEngine.find(this._selector).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$1);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$1);
        });
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$2);

          var _config = _typeof(config) === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
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
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$2, ScrollSpy);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
  var DATA_API_KEY = '.data-api';
  var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
  var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
  var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
  var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

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
      // Public
      value: function show() {
        var _this40 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE) || isDisabled(this._element)) {
          return;
        }

        var previous;
        var target = getElementFromSelector(this._element);

        var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = SelectorEngine.find(itemSelector, listElement);
          previous = previous[previous.length - 1];
        }

        var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) : null;
        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
          relatedTarget: previous
        });

        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
          return;
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          EventHandler.trigger(previous, EVENT_HIDDEN$1, {
            relatedTarget: _this40._element
          });
          EventHandler.trigger(_this40._element, EVENT_SHOWN$1, {
            relatedTarget: previous
          });
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      } // Private

    }, {
      key: "_activate",
      value: function _activate(element, container, callback) {
        var _this41 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        var active = activeElements[0];
        var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

        var complete = function complete() {
          return _this41._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = getTransitionDurationFromElement(active);
          active.classList.remove(CLASS_NAME_SHOW$1);
          EventHandler.one(active, 'transitionend', complete);
          emulateTransitionEnd(active, transitionDuration);
        } else {
          complete();
        }
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(element, active, callback) {
        if (active) {
          active.classList.remove(CLASS_NAME_ACTIVE);
          var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

          if (dropdownChild) {
            dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        element.classList.add(CLASS_NAME_ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }

        if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = element.closest(SELECTOR_DROPDOWN);

          if (dropdownElement) {
            SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE).forEach(function (dropdown) {
              return dropdown.classList.add(CLASS_NAME_ACTIVE);
            });
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY$1) || new Tab(this);

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config]();
          }
        });
      }
    }, {
      key: "DATA_KEY",
      // Getters
      get: function get() {
        return DATA_KEY$1;
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    var data = Data.get(this, DATA_KEY$1) || new Tab(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$1, Tab);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'toast';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  var SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function (_BaseComponent11) {
    _inherits(Toast, _BaseComponent11);

    function Toast(element, config) {
      var _this42;

      _classCallCheck(this, Toast);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, element));
      _this42._config = _this42._getConfig(config);
      _this42._timeout = null;

      _this42._setListeners();

      return _this42;
    } // Getters


    _createClass(Toast, [{
      key: "show",
      // Public
      value: function show() {
        var _this43 = this;

        var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

        if (showEvent.defaultPrevented) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }

        var complete = function complete() {
          _this43._element.classList.remove(CLASS_NAME_SHOWING);

          _this43._element.classList.add(CLASS_NAME_SHOW);

          EventHandler.trigger(_this43._element, EVENT_SHOWN);

          if (_this43._config.autohide) {
            _this43._timeout = setTimeout(function () {
              _this43.hide();
            }, _this43._config.delay);
          }
        };

        this._element.classList.remove(CLASS_NAME_HIDE);

        reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOWING);

        if (this._config.animation) {
          var transitionDuration = getTransitionDurationFromElement(this._element);
          EventHandler.one(this._element, 'transitionend', complete);
          emulateTransitionEnd(this._element, transitionDuration);
        } else {
          complete();
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this44 = this;

        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }

        var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

        if (hideEvent.defaultPrevented) {
          return;
        }

        var complete = function complete() {
          _this44._element.classList.add(CLASS_NAME_HIDE);

          EventHandler.trigger(_this44._element, EVENT_HIDDEN);
        };

        this._element.classList.remove(CLASS_NAME_SHOW);

        if (this._config.animation) {
          var transitionDuration = getTransitionDurationFromElement(this._element);
          EventHandler.one(this._element, 'transitionend', complete);
          emulateTransitionEnd(this._element, transitionDuration);
        } else {
          complete();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }

        EventHandler.off(this._element, EVENT_CLICK_DISMISS);

        _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);

        this._config = null;
      } // Private

    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(this._element), {}, _typeof(config) === 'object' && config ? config : {});
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
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
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static

    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Data.get(this, DATA_KEY);

          var _config = _typeof(config) === 'object' && config;

          if (!data) {
            data = new Toast(this, _config);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }

            data[config](this);
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
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME, Toast);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta3): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    Modal: Modal,
    Offcanvas: Offcanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };
  return index_umd;
});