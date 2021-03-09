webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ajax_loader_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax-loader.gif */ "./node_modules/slick-carousel/slick/ajax-loader.gif");
/* harmony import */ var _fonts_slick_eot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/slick.eot */ "./node_modules/slick-carousel/slick/fonts/slick.eot");
/* harmony import */ var _fonts_slick_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/slick.woff */ "./node_modules/slick-carousel/slick/fonts/slick.woff");
/* harmony import */ var _fonts_slick_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/slick.ttf */ "./node_modules/slick-carousel/slick/fonts/slick.ttf");
/* harmony import */ var _fonts_slick_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonts/slick.svg */ "./node_modules/slick-carousel/slick/fonts/slick.svg");
// Imports







var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_ajax_loader_gif__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_slick_eot__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_slick_eot__WEBPACK_IMPORTED_MODULE_3__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_slick_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_slick_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_slick_svg__WEBPACK_IMPORTED_MODULE_6__["default"], { hash: "#slick" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset 'UTF-8';\n\n/* Slider */\n\n.slick-loading .slick-list\n{\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center no-repeat;\n}\n\n/* Icons */\n\n@font-face\n{\n  font-family: 'slick';\n\n  font-weight: normal;\n\n  font-style: normal;\n\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('embedded-opentype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');\n}\n\n/* Arrows */\n\n.slick-prev,\n.slick-next\n{\n  font-size: 0;\n  line-height: 0;\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n  color: transparent;\n  outline: none;\n  background: transparent;\n}\n\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n  opacity: 1;\n}\n\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n  opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n  font-family: 'slick';\n  font-size: 20px;\n  line-height: 1;\n  opacity: .75;\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n  left: -25px;\n}\n\n[dir='rtl'] .slick-prev\n{\n  right: -25px;\n  left: auto;\n}\n\n.slick-prev:before\n{\n  content: '←';\n}\n\n[dir='rtl'] .slick-prev:before\n{\n  content: '→';\n}\n\n.slick-next\n{\n  right: -25px;\n}\n\n[dir='rtl'] .slick-next\n{\n  right: auto;\n  left: -25px;\n}\n\n.slick-next:before\n{\n  content: '→';\n}\n\n[dir='rtl'] .slick-next:before\n{\n  content: '←';\n}\n\n/* Dots */\n\n.slick-dotted.slick-slider\n{\n  margin-bottom: 30px;\n}\n\n.slick-dots\n{\n  position: absolute;\n  bottom: -25px;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.slick-dots li\n{\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n\n.slick-dots li button\n{\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n  outline: none;\n}\n\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n  opacity: 1;\n}\n\n.slick-dots li button:before\n{\n  font-family: 'slick';\n  font-size: 6px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: '•';\n  text-align: center;\n  opacity: .25;\n  color: black;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-dots li.slick-active button:before\n{\n  opacity: .75;\n  color: black;\n}\n", "",{"version":3,"sources":["webpack://node_modules/slick-carousel/slick/slick-theme.css"],"names":[],"mappings":"AAAA,gBAAgB;;AAChB,WAAW;;AACX;;EAEI,gFAAiE;AACrE;;AAEA,UAAU;;AACV;;EAEI,oBAAoB;;EACpB,mBAAmB;;EACnB,kBAAkB;;EAElB,4CAA6B;;EAC7B,mPAAqM;AACzM;;AACA,WAAW;;AACX;;;EAGI,YAAY;EACZ,cAAc;EAEd,kBAAkB;EAClB,QAAQ;EAER,cAAc;EAEd,WAAW;EACX,YAAY;EACZ,UAAU;EAGV,6BAA6B;EAE7B,eAAe;EAEf,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;AAC3B;;AACA;;;;;EAKI,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AAC3B;;AACA;;;;;EAKI,UAAU;AACd;;AACA;;;EAGI,YAAY;AAChB;;AAEA;;;EAGI,oBAAoB;EACpB,eAAe;EACf,cAAc;EAEd,YAAY;EACZ,YAAY;EAEZ,mCAAmC;EACnC,kCAAkC;AACtC;;AAEA;;EAEI,WAAW;AACf;;AACA;;EAEI,YAAY;EACZ,UAAU;AACd;;AACA;;EAEI,YAAY;AAChB;;AACA;;EAEI,YAAY;AAChB;;AAEA;;EAEI,YAAY;AAChB;;AACA;;EAEI,WAAW;EACX,WAAW;AACf;;AACA;;EAEI,YAAY;AAChB;;AACA;;EAEI,YAAY;AAChB;;AAEA,SAAS;;AACT;;EAEI,mBAAmB;AACvB;;AAEA;;EAEI,kBAAkB;EAClB,aAAa;EAEb,cAAc;EAEd,WAAW;EACX,UAAU;EACV,SAAS;EAET,gBAAgB;EAEhB,kBAAkB;AACtB;;AACA;;EAEI,kBAAkB;EAElB,qBAAqB;EAErB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,UAAU;EAEV,eAAe;AACnB;;AACA;;EAEI,YAAY;EACZ,cAAc;EAEd,cAAc;EAEd,WAAW;EACX,YAAY;EACZ,YAAY;EAEZ,eAAe;EAEf,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,uBAAuB;AAC3B;;AACA;;;EAGI,aAAa;AACjB;;AACA;;;EAGI,UAAU;AACd;;AACA;;EAEI,oBAAoB;EACpB,cAAc;EACd,iBAAiB;EAEjB,kBAAkB;EAClB,MAAM;EACN,OAAO;EAEP,WAAW;EACX,YAAY;EAEZ,YAAY;EACZ,kBAAkB;EAElB,YAAY;EACZ,YAAY;EAEZ,mCAAmC;EACnC,kCAAkC;AACtC;;AACA;;EAEI,YAAY;EACZ,YAAY;AAChB","sourcesContent":["@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url('./ajax-loader.gif') center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url('./fonts/slick.eot');\n    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Slider */\n\n.slick-slider\n{\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.slick-list:focus\n{\n  outline: none;\n}\n\n.slick-list.dragging\n{\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.slick-track:before,\n.slick-track:after\n{\n  display: table;\n  content: '';\n}\n\n.slick-track:after\n{\n  clear: both;\n}\n\n.slick-loading .slick-track\n{\n  visibility: hidden;\n}\n\n.slick-slide\n{\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n\n[dir='rtl'] .slick-slide\n{\n  float: right;\n}\n\n.slick-slide img\n{\n  display: block;\n}\n\n.slick-slide.slick-loading img\n{\n  display: none;\n}\n\n.slick-slide.dragging img\n{\n  pointer-events: none;\n}\n\n.slick-initialized .slick-slide\n{\n  display: block;\n}\n\n.slick-loading .slick-slide\n{\n  visibility: hidden;\n}\n\n.slick-vertical .slick-slide\n{\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://node_modules/slick-carousel/slick/slick.css"],"names":[],"mappings":"AAAA,WAAW;;AACX;;EAEI,kBAAkB;EAElB,cAAc;EACd,sBAAsB;EAEtB,yBAAyB;EACtB,sBAAsB;EACrB,qBAAqB;EACjB,iBAAiB;EAEzB,2BAA2B;EAC3B,wBAAwB;EAEpB,mBAAmB;EACvB,wCAAwC;AAC5C;;AAEA;;EAEI,kBAAkB;EAElB,cAAc;EACd,gBAAgB;EAEhB,SAAS;EACT,UAAU;AACd;;AACA;;EAEI,aAAa;AACjB;;AACA;;EAEI,eAAe;EACf,YAAY;AAChB;;AAEA;;;EAOY,+BAA+B;AAC3C;;AAEA;;EAEI,kBAAkB;EAClB,MAAM;EACN,OAAO;EAEP,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACtB;;AACA;;;EAGI,cAAc;EAEd,WAAW;AACf;;AACA;;EAEI,WAAW;AACf;;AACA;;EAEI,kBAAkB;AACtB;;AAEA;;EAEI,aAAa;EACb,WAAW;EAEX,YAAY;EACZ,eAAe;AACnB;;AACA;;EAEI,YAAY;AAChB;;AACA;;EAEI,cAAc;AAClB;;AACA;;EAEI,aAAa;AACjB;;AACA;;EAEI,oBAAoB;AACxB;;AACA;;EAEI,cAAc;AAClB;;AACA;;EAEI,kBAAkB;AACtB;;AACA;;EAEI,cAAc;EAEd,YAAY;EAEZ,6BAA6B;AACjC;;AACA;EACI,aAAa;AACjB","sourcesContent":["/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************!*\
  !*** (webpack)/css-loader/getUrl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/ajax-loader.gif":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/ajax-loader.gif ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.eot":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.eot ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.svg":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.ttf":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.ttf ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/fonts/slick.woff":
/*!************************************************************!*\
  !*** ./node_modules/slick-carousel/slick/fonts/slick.woff ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/slick.295183786cd8a138986521d9f388a286.woff");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick-theme.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick-theme.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.css",
      function () {
        content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick-theme.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick-theme.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick.css",
      function () {
        content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./slick.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/slick-carousel/slick/slick.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2FqYXgtbG9hZGVyLmdpZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLmVvdCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLnR0ZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL2ZvbnRzL3NsaWNrLndvZmYiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3M/ZWU5YSIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcz9jMjUzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNxRjtBQUNPO0FBQzlCO0FBQ0E7QUFDQztBQUNEO0FBQ0E7QUFDOUQsOEJBQThCLDRFQUEy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QSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLCtTQUE2STtBQUNuSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLCtTQUE2STs7QUFFdks7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQU8scUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUYsSztBQUlNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY2YTBmOWIzYzliYWJkNTQ3YjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hamF4LWxvYWRlci5naWZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9mb250cy9zbGljay5lb3RcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9mb250cy9zbGljay53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4vZm9udHMvc2xpY2sudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4vZm9udHMvc2xpY2suc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI3NsaWNrXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCAnVVRGLTgnO1xcblxcbi8qIFNsaWRlciAqL1xcblxcbi5zbGljay1sb2FkaW5nIC5zbGljay1saXN0XFxue1xcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xcbn1cXG5cXG4vKiBJY29ucyAqL1xcblxcbkBmb250LWZhY2VcXG57XFxuICBmb250LWZhbWlseTogJ3NsaWNrJztcXG5cXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpO1xcbn1cXG5cXG4vKiBBcnJvd3MgKi9cXG5cXG4uc2xpY2stcHJldixcXG4uc2xpY2stbmV4dFxcbntcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stcHJldjpob3ZlcixcXG4uc2xpY2stcHJldjpmb2N1cyxcXG4uc2xpY2stbmV4dDpob3ZlcixcXG4uc2xpY2stbmV4dDpmb2N1c1xcbntcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLFxcbi5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlXFxue1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcbi5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZVxcbntcXG4gIG9wYWNpdHk6IC4yNTtcXG59XFxuXFxuLnNsaWNrLXByZXY6YmVmb3JlLFxcbi5zbGljay1uZXh0OmJlZm9yZVxcbntcXG4gIGZvbnQtZmFtaWx5OiAnc2xpY2snO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBvcGFjaXR5OiAuNzU7XFxuICBjb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zbGljay1wcmV2XFxue1xcbiAgbGVmdDogLTI1cHg7XFxufVxcblxcbltkaXI9J3J0bCddIC5zbGljay1wcmV2XFxue1xcbiAgcmlnaHQ6IC0yNXB4O1xcbiAgbGVmdDogYXV0bztcXG59XFxuXFxuLnNsaWNrLXByZXY6YmVmb3JlXFxue1xcbiAgY29udGVudDogJ+KGkCc7XFxufVxcblxcbltkaXI9J3J0bCddIC5zbGljay1wcmV2OmJlZm9yZVxcbntcXG4gIGNvbnRlbnQ6ICfihpInO1xcbn1cXG5cXG4uc2xpY2stbmV4dFxcbntcXG4gIHJpZ2h0OiAtMjVweDtcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLW5leHRcXG57XFxuICByaWdodDogYXV0bztcXG4gIGxlZnQ6IC0yNXB4O1xcbn1cXG5cXG4uc2xpY2stbmV4dDpiZWZvcmVcXG57XFxuICBjb250ZW50OiAn4oaSJztcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLW5leHQ6YmVmb3JlXFxue1xcbiAgY29udGVudDogJ+KGkCc7XFxufVxcblxcbi8qIERvdHMgKi9cXG5cXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlclxcbntcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zbGljay1kb3RzXFxue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNsaWNrLWRvdHMgbGlcXG57XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b25cXG57XFxuICBmb250LXNpemU6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcixcXG4uc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXNcXG57XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b246aG92ZXI6YmVmb3JlLFxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmVcXG57XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlXFxue1xcbiAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICBmb250LXNpemU6IDZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY29udGVudDogJ+KAoic7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAuMjU7XFxuICBjb2xvcjogYmxhY2s7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlXFxue1xcbiAgb3BhY2l0eTogLjc1O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBQ2hCLFdBQVc7O0FBQ1g7O0VBRUksZ0ZBQWlFO0FBQ3JFOztBQUVBLFVBQVU7O0FBQ1Y7O0VBRUksb0JBQW9COztFQUNwQixtQkFBbUI7O0VBQ25CLGtCQUFrQjs7RUFFbEIsNENBQTZCOztFQUM3QixtUEFBcU07QUFDek07O0FBQ0EsV0FBVzs7QUFDWDs7O0VBR0ksWUFBWTtFQUNaLGNBQWM7RUFFZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUVSLGNBQWM7RUFFZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFHViw2QkFBNkI7RUFFN0IsZUFBZTtFQUVmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUMzQjs7QUFDQTs7Ozs7RUFLSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtBQUMzQjs7QUFDQTs7Ozs7RUFLSSxVQUFVO0FBQ2Q7O0FBQ0E7OztFQUdJLFlBQVk7QUFDaEI7O0FBRUE7OztFQUdJLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUVkLFlBQVk7RUFDWixZQUFZO0VBRVosbUNBQW1DO0VBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7RUFFSSxXQUFXO0FBQ2Y7O0FBQ0E7O0VBRUksWUFBWTtFQUNaLFVBQVU7QUFDZDs7QUFDQTs7RUFFSSxZQUFZO0FBQ2hCOztBQUNBOztFQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0VBRUksWUFBWTtBQUNoQjs7QUFDQTs7RUFFSSxXQUFXO0VBQ1gsV0FBVztBQUNmOztBQUNBOztFQUVJLFlBQVk7QUFDaEI7O0FBQ0E7O0VBRUksWUFBWTtBQUNoQjs7QUFFQSxTQUFTOztBQUNUOztFQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7RUFFSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUViLGNBQWM7RUFFZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFFVCxnQkFBZ0I7RUFFaEIsa0JBQWtCO0FBQ3RCOztBQUNBOztFQUVJLGtCQUFrQjtFQUVsQixxQkFBcUI7RUFFckIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUVWLGVBQWU7QUFDbkI7O0FBQ0E7O0VBRUksWUFBWTtFQUNaLGNBQWM7RUFFZCxjQUFjO0VBRWQsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBRVosZUFBZTtFQUVmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtBQUMzQjs7QUFDQTs7O0VBR0ksYUFBYTtBQUNqQjs7QUFDQTs7O0VBR0ksVUFBVTtBQUNkOztBQUNBOztFQUVJLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsaUJBQWlCO0VBRWpCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUVQLFdBQVc7RUFDWCxZQUFZO0VBRVosWUFBWTtFQUNaLGtCQUFrQjtFQUVsQixZQUFZO0VBQ1osWUFBWTtFQUVaLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDdEM7O0FBQ0E7O0VBRUksWUFBWTtFQUNaLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgJ1VURi04JztcXG4vKiBTbGlkZXIgKi9cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stbGlzdFxcbntcXG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4vYWpheC1sb2FkZXIuZ2lmJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XFxufVxcblxcbi8qIEljb25zICovXFxuQGZvbnQtZmFjZVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdzbGljayc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvc2xpY2suZW90Jyk7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL3NsaWNrLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi9mb250cy9zbGljay53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi9mb250cy9zbGljay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi9mb250cy9zbGljay5zdmcjc2xpY2snKSBmb3JtYXQoJ3N2ZycpO1xcbn1cXG4vKiBBcnJvd3MgKi9cXG4uc2xpY2stcHJldixcXG4uc2xpY2stbmV4dFxcbntcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stcHJldjpob3ZlcixcXG4uc2xpY2stcHJldjpmb2N1cyxcXG4uc2xpY2stbmV4dDpob3ZlcixcXG4uc2xpY2stbmV4dDpmb2N1c1xcbntcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLFxcbi5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcXG4uc2xpY2stbmV4dDpob3ZlcjpiZWZvcmUsXFxuLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlXFxue1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uc2xpY2stcHJldi5zbGljay1kaXNhYmxlZDpiZWZvcmUsXFxuLnNsaWNrLW5leHQuc2xpY2stZGlzYWJsZWQ6YmVmb3JlXFxue1xcbiAgICBvcGFjaXR5OiAuMjU7XFxufVxcblxcbi5zbGljay1wcmV2OmJlZm9yZSxcXG4uc2xpY2stbmV4dDpiZWZvcmVcXG57XFxuICAgIGZvbnQtZmFtaWx5OiAnc2xpY2snO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcblxcbiAgICBvcGFjaXR5OiAuNzU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5zbGljay1wcmV2XFxue1xcbiAgICBsZWZ0OiAtMjVweDtcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXByZXZcXG57XFxuICAgIHJpZ2h0OiAtMjVweDtcXG4gICAgbGVmdDogYXV0bztcXG59XFxuLnNsaWNrLXByZXY6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAn4oaQJztcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXByZXY6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAn4oaSJztcXG59XFxuXFxuLnNsaWNrLW5leHRcXG57XFxuICAgIHJpZ2h0OiAtMjVweDtcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLW5leHRcXG57XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAtMjVweDtcXG59XFxuLnNsaWNrLW5leHQ6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAn4oaSJztcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLW5leHQ6YmVmb3JlXFxue1xcbiAgICBjb250ZW50OiAn4oaQJztcXG59XFxuXFxuLyogRG90cyAqL1xcbi5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyXFxue1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uc2xpY2stZG90c1xcbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0yNXB4O1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2xpY2stZG90cyBsaVxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uXFxue1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyLFxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1c1xcbntcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyOmJlZm9yZSxcXG4uc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXM6YmVmb3JlXFxue1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlXFxue1xcbiAgICBmb250LWZhbWlseTogJ3NsaWNrJztcXG4gICAgZm9udC1zaXplOiA2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG4gICAgY29udGVudDogJ+KAoic7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgb3BhY2l0eTogLjI1O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4uc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZVxcbntcXG4gICAgb3BhY2l0eTogLjc1O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFNsaWRlciAqL1xcblxcbi5zbGljay1zbGlkZXJcXG57XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zbGljay1saXN0XFxue1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNsaWNrLWxpc3Q6Zm9jdXNcXG57XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2xpY2stbGlzdC5kcmFnZ2luZ1xcbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGN1cnNvcjogaGFuZDtcXG59XFxuXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdFxcbntcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcblxcbi5zbGljay10cmFja1xcbntcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2xpY2stdHJhY2s6YmVmb3JlLFxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogJyc7XFxufVxcblxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stdHJhY2tcXG57XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zbGljay1zbGlkZVxcbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuXFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXNsaWRlXFxue1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uc2xpY2stc2xpZGUgaW1nXFxue1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zbGljay1zbGlkZS5zbGljay1sb2FkaW5nIGltZ1xcbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWdcXG57XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZVxcbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2xpY2stbG9hZGluZyAuc2xpY2stc2xpZGVcXG57XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGVcXG57XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7O0FBQ1g7O0VBRUksa0JBQWtCO0VBRWxCLGNBQWM7RUFDZCxzQkFBc0I7RUFFdEIseUJBQXlCO0VBQ3RCLHNCQUFzQjtFQUNyQixxQkFBcUI7RUFDakIsaUJBQWlCO0VBRXpCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFFcEIsbUJBQW1CO0VBQ3ZCLHdDQUF3QztBQUM1Qzs7QUFFQTs7RUFFSSxrQkFBa0I7RUFFbEIsY0FBYztFQUNkLGdCQUFnQjtFQUVoQixTQUFTO0VBQ1QsVUFBVTtBQUNkOztBQUNBOztFQUVJLGFBQWE7QUFDakI7O0FBQ0E7O0VBRUksZUFBZTtFQUNmLFlBQVk7QUFDaEI7O0FBRUE7OztFQU9ZLCtCQUErQjtBQUMzQzs7QUFFQTs7RUFFSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFFUCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7O0VBR0ksY0FBYztFQUVkLFdBQVc7QUFDZjs7QUFDQTs7RUFFSSxXQUFXO0FBQ2Y7O0FBQ0E7O0VBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztFQUVJLGFBQWE7RUFDYixXQUFXO0VBRVgsWUFBWTtFQUNaLGVBQWU7QUFDbkI7O0FBQ0E7O0VBRUksWUFBWTtBQUNoQjs7QUFDQTs7RUFFSSxjQUFjO0FBQ2xCOztBQUNBOztFQUVJLGFBQWE7QUFDakI7O0FBQ0E7O0VBRUksb0JBQW9CO0FBQ3hCOztBQUNBOztFQUVJLGNBQWM7QUFDbEI7O0FBQ0E7O0VBRUksa0JBQWtCO0FBQ3RCOztBQUNBOztFQUVJLGNBQWM7RUFFZCxZQUFZO0VBRVosNkJBQTZCO0FBQ2pDOztBQUNBO0VBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTbGlkZXIgKi9cXG4uc2xpY2stc2xpZGVyXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XFxuICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2xpY2stbGlzdFxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4uc2xpY2stbGlzdDpmb2N1c1xcbntcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNsaWNrLWxpc3QuZHJhZ2dpbmdcXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY3Vyc29yOiBoYW5kO1xcbn1cXG5cXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0XFxue1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuXFxuLnNsaWNrLXRyYWNrXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zbGljay10cmFjazpiZWZvcmUsXFxuLnNsaWNrLXRyYWNrOmFmdGVyXFxue1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG5cXG4gICAgY29udGVudDogJyc7XFxufVxcbi5zbGljay10cmFjazphZnRlclxcbntcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFja1xcbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuW2Rpcj0ncnRsJ10gLnNsaWNrLXNsaWRlXFxue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcbi5zbGljay1zbGlkZSBpbWdcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWdcXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zbGljay1zbGlkZS5kcmFnZ2luZyBpbWdcXG57XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlXFxue1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zbGljay12ZXJ0aWNhbCAuc2xpY2stc2xpZGVcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezkxOmZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHIpe2lmKCFyKXtyPXt9fWU9ZSYmZS5fX2VzTW9kdWxlP2UuZGVmYXVsdDplO2lmKHR5cGVvZiBlIT09XCJzdHJpbmdcIil7cmV0dXJuIGV9aWYoL15bJ1wiXS4qWydcIl0kLy50ZXN0KGUpKXtlPWUuc2xpY2UoMSwtMSl9aWYoci5oYXNoKXtlKz1yLmhhc2h9aWYoL1tcIicoKSBcXHRcXG5dLy50ZXN0KGUpfHxyLm5lZWRRdW90ZXMpe3JldHVybidcIicuY29uY2F0KGUucmVwbGFjZSgvXCIvZywnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csXCJcXFxcblwiKSwnXCInKX1yZXR1cm4gZX19fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe2lmKHJbdF0pe3JldHVybiByW3RdLmV4cG9ydHN9dmFyIF89clt0XT17ZXhwb3J0czp7fX07dmFyIG49dHJ1ZTt0cnl7ZVt0XShfLF8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtuPWZhbHNlfWZpbmFsbHl7aWYobilkZWxldGUgclt0XX1yZXR1cm4gXy5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkxKX0oKTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL2FqYXgtbG9hZGVyLmZiNmYzYzIzMGNiODQ2ZTI1MjQ3ZGZhYTFkYTk0ZDhmLmdpZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvc2xpY2suYTRlOTdmNWEyYTY0ZjBhYjEzMjMyM2ZiZWIzM2FlMjkuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9zbGljay4yNjMwYTNlM2VhYjIxYzYwN2UyMTU3NjU3MWI5NWI5ZC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL3NsaWNrLmM5NGY3NjcxZGNjOTlkY2U0M2UyMmE4OWY0ODZmN2MyLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvc2xpY2suMjk1MTgzNzg2Y2Q4YTEzODk4NjUyMWQ5ZjM4OGEyODYud29mZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc2xpY2stdGhlbWUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc2xpY2stdGhlbWUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL3NsaWNrLXRoZW1lLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL3NsaWNrLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL3NsaWNrLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9zbGljay5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcblxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9