module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nzLx");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, file, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "nzLx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _document_MyDocument; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__("8cZr");
var document_default = /*#__PURE__*/__webpack_require__.n(next_document);

// CONCATENATED MODULE: ./Components/FooterScript.jsx


function FooterScript() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: "footer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "footer-content center-relative"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-post-20-css",
      href: "/react-next-portfolio-dev/css/post-20.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      defer: true,
      src: "/react-next-portfolio-dev/js/autoptimized.js"
    })]
  });
}
// CONCATENATED MODULE: ./Components/HeadScripts.jsx


function HeadScripts() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "dns-prefetch",
      href: "http://fonts.googleapis.com/"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "prettyPhoto-css",
      href: "/react-next-portfolio-dev/css/prettyPhoto.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "owl.theme.default-css",
      href: "/react-next-portfolio-dev/css/owl.theme.default.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "owl.carousel-css",
      href: "/react-next-portfolio-dev/css/owl.carousel.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "cocobasic-elementor-main-style-css",
      href: "/react-next-portfolio-dev/css/style.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "/react-next-portfolio-dev/css/style.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "contact-form-7-css",
      href: "/react-next-portfolio-dev/css/styles.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "volos-clear-style-css",
      href: "/react-next-portfolio-dev/css/clear.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "volos-common-style-css",
      href: "/react-next-portfolio-dev/css/common.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "sm-cleen-css",
      href: "/react-next-portfolio-dev/css/sm-clean.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "volos-main-theme-style-css",
      href: "/react-next-portfolio-dev/css/volos-wp.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-icons-css",
      href: "/react-next-portfolio-dev/css/elementor-icons.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-animations-css",
      href: "/react-next-portfolio-dev/css/animations.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-frontend-legacy-css",
      href: "/react-next-portfolio-dev/css/frontend-legacy.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-frontend-css",
      href: "/react-next-portfolio-dev/css/custom-frontend.min.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-post-355-css",
      href: "/react-next-portfolio-dev/css/post-355.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "stylesheet",
      id: "elementor-post-9-css",
      href: "/react-next-portfolio-dev/css/post-9.css",
      type: "text/css",
      media: "all"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      type: "text/javascript",
      src: "/react-next-portfolio-dev/js/jquery/jquery.min.js",
      id: "jquery-core-js"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "alternate",
      type: "application/json",
      href: "/react-next-portfolio-dev/9.json"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-90924782-1"
    })]
  });
}
// CONCATENATED MODULE: ./Components/SideBar.jsx


function SideBar() {
  let soundToggle = false;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "header-holder",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "header-wrapper",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "toggle-holder",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            id: "toggle",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "menu-line"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "top-pagination",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "current-num",
            children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "01"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "pagination-div"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "total-pages-num"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "my-info-wrapper",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            "data-elementor-type": "page",
            "data-elementor-id": "20",
            className: "elementor elementor-20",
            "data-elementor-settings": "[]",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "elementor-inner",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "elementor-section-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
                  className: "elementor-section elementor-top-section elementor-element elementor-element-64b73840 elementor-section-full_width elementor-section-height-default elementor-section-height-default",
                  "data-id": "64b73840",
                  "data-element_type": "section",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "elementor-container elementor-column-gap-no",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "elementor-row",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1d868ca8",
                        "data-id": "1d868ca8",
                        "data-element_type": "column",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: "elementor-column-wrap elementor-element-populated",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                            className: "elementor-widget-wrap",
                            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-646ac3f7 global-color elementor-widget elementor-widget-text-editor",
                              "data-id": "646ac3f7",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: " NAME"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-5ed3a12e elementor-widget elementor-widget-text-editor",
                              "data-id": "5ed3a12e",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: "Vikas Ukani"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-a4240e5 global-color elementor-widget elementor-widget-text-editor",
                              "data-id": "a4240e5",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: " ROLE"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-6c435a6 elementor-widget elementor-widget-text-editor",
                              "data-id": "6c435a6",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: " Software Engineer"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-36538e7f global-color elementor-widget elementor-widget-text-editor",
                              "data-id": "36538e7f",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: " EMAIL"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-7c10dbf4 elementor-widget elementor-widget-text-editor",
                              "data-id": "7c10dbf4",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix wp-block-latest-posts__post-date",
                                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                    href: "mailto:vikasukani5@gmail.com",
                                    className: "__cf_email__",
                                    children: "[ secured email ]"
                                  })
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-4f135e30 global-color elementor-widget elementor-widget-text-editor",
                              "data-id": "4f135e30",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: "PHONE"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-7ff2e84b elementor-widget elementor-widget-text-editor",
                              "data-id": "7ff2e84b",
                              "data-element_type": "widget",
                              "data-widget_type": "text-editor.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                  className: "elementor-text-editor elementor-clearfix",
                                  children: "(+91) 99096 59030"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                              className: "elementor-element elementor-element-6961185 elementor-widget elementor-widget-coco-music-waves",
                              "data-id": "6961185",
                              "data-element_type": "widget",
                              "data-widget_type": "coco-music-waves.default",
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                                className: "elementor-widget-container",
                                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                                  className: "music-waves",
                                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                                    className: "relative",
                                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("audio", {
                                      id: "musicWaves",
                                      src: "/react-next-portfolio-dev/images/audio.mp3",
                                      loop: true
                                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                                      className: "global-background-color"
                                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                                      className: "global-background-color"
                                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                                      className: "global-background-color"
                                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                                      className: "global-background-color"
                                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                                      className: "global-background-color"
                                    })]
                                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                                    className: "music-waves-text",
                                    children: ["SOUND", soundToggle == true ? ' ON' : ' OFF']
                                  })]
                                })
                              })
                            }), "Time:"]
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "menu-holder",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "menu-wrapper relative",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
              id: "header-main-menu",
              className: "big-menu",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                id: "menu-menu-1",
                className: "main-menu sm sm-clean",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-196",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-196",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#home",
                    children: "Home"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-197",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-197",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#introduce",
                    children: "Introduce"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-198",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-198",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#portfolio",
                    children: "Portfolio"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-199",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-199",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#experience",
                    children: "Experience"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-200",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-200",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#skills",
                    children: "Skills"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-201",
                  className: "one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-201",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "#contact",
                    children: "Contact"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  id: "menu-item-202",
                  className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-202",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    href: "blog/index.html",
                    children: "Blog"
                  })
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "big-num",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "current-big-num",
            children: "01"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "icon-scroll"
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./Layout/AppLayout.jsx





function AppLayout({
  children
}) {
  // const router = useRouter()
  // console.log('url', router.pathname);
  // console.log('url', router.pathname);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SideBar, {}), children]
  });
}

/* harmony default export */ var Layout_AppLayout = (AppLayout);
// CONCATENATED MODULE: ./pages/_document.jsx






class _document_MyDocument extends document_default.a {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(next_document["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(next_document["Head"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeadScripts, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("body", {
        className: "blog safari osx elementor-default elementor-kit-355 home page-template-default page page-id-9 unknown elementor-default elementor-kit-355 elementor-page elementor-page-9",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "doc-loader",
          children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/react-next-portfolio-dev/images/preloader.gif",
            alt: "Loading..."
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout_AppLayout, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(next_document["Main"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(next_document["NextScript"], {})]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterScript, {})]
    });
  }

}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ })

/******/ });