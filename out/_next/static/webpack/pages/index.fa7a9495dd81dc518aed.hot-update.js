webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Extra/AnimatedProgressProvider.jsx":
/*!*******************************************************!*\
  !*** ./Components/Extra/AnimatedProgressProvider.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_move__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-move */ "./node_modules/react-move/es/index.js");








var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\Extra\\AnimatedProgressProvider.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AnimatedProgressProvider = /*#__PURE__*/function (_React$Component) {
  Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimatedProgressProvider, _React$Component);

  var _super = _createSuper(AnimatedProgressProvider);

  function AnimatedProgressProvider() {
    var _this;

    Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnimatedProgressProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "interval", undefined);

    Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isAnimated: false
    });

    return _this;
  }

  Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimatedProgressProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.repeat) {
        this.interval = window.setInterval(function () {
          _this2.setState({
            isAnimated: !_this2.state.isAnimated
          });
        }, this.props.duration * 1000);
      } else {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_move__WEBPACK_IMPORTED_MODULE_9__["Animate"], {
        start: function start() {
          return {
            value: _this3.props.valueStart
          };
        },
        update: function update() {
          return {
            value: [_this3.state.isAnimated ? _this3.props.valueEnd : _this3.props.valueStart],
            timing: {
              duration: _this3.props.duration * 1000,
              ease: _this3.props.easingFunction
            }
          };
        },
        children: function children(_ref) {
          var value = _ref.value;
          return _this3.props.children(value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return AnimatedProgressProvider;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(AnimatedProgressProvider, "defaultProps", {
  valueStart: 0
});

/* harmony default export */ __webpack_exports__["default"] = (AnimatedProgressProvider);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/Extra/CircularProgress.jsx":
/*!***********************************************!*\
  !*** ./Components/Extra/CircularProgress.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircularProgress; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatedProgressProvider */ "./Components/Extra/AnimatedProgressProvider.jsx");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");

var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\Extra\\CircularProgress.jsx";



 // const CircularProgress = ({ fillColor, outColor, percentage, title }) => {
//     return (
//         <CircularProgressbar
//             counterClockwise={true} strokeWidth={15} value={percentage}
//             text={`${percentage}%`}
//             easingFunction={easeBackIn()}
//             styles={{
//                 // Customize the root svg element
//                 root: {},
//                 // Customize the path, i.e. the "completed progress"
//                 path: {
//                     stroke: `rgba(62, 152, 199, ${percentage / 100})`,
//                     strokeLinecap: 'butt',
//                 },
//                 // Customize the circle behind the path, i.e. the "total progress"
//                 trail: {
//                     // Trail color
//                     stroke: '#d6d6d6',
//                     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//                     strokeLinecap: 'butt',
//                     // Rotate the trail
//                     transform: 'rotate(0.25turn)',
//                     transformOrigin: 'center center',
//                 },
//                 text: {
//                     // Text color
//                     fill: '#f88',
//                     // Text size
//                     fontSize: '16px',
//                 }
//             }} />
//     )
// }
// export default CircularProgress;

function CircularProgress(_ref) {
  var _this = this;

  var fillColor = _ref.fillColor,
      outColor = _ref.outColor,
      textColor = _ref.textColor,
      percentage = _ref.percentage,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    valueStart: 0,
    valueEnd: 66,
    duration: 1.4,
    easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeBounceIn"],
    repeat: true,
    fillColor: true,
    outColor: true,
    percentage: true,
    title: true,
    children: function children(value) {
      var roundedValue = Math.round(percentage);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["CircularProgressbar"], {
        value: percentage,
        text: "".concat(roundedValue, "%"),
        strokeWidth: 15,
        counterClockwise: true
        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
        ,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["buildStyles"])({
          strokeLinecap: "butt",
          backgroundColor: outColor,
          textColor: textColor,
          pathColor: fillColor
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}
_c = CircularProgress;

var _c;

$RefreshReg$(_c, "CircularProgress");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/kapellmeister/es/BaseNode.js":
/*!***************************************************!*\
  !*** ./node_modules/kapellmeister/es/BaseNode.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./node_modules/kapellmeister/es/Events.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BaseNode = function () {
  function BaseNode(state) {
    _classCallCheck(this, BaseNode);

    this.state = state || {};
  }

  _createClass(BaseNode, [{
    key: "transition",
    value: function transition(config) {
      if (Array.isArray(config)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            this.parse(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        this.parse(config);
      }
    }
  }, {
    key: "isTransitioning",
    value: function isTransitioning() {
      return !!this.transitionData;
    }
  }, {
    key: "stopTransitions",
    value: function stopTransitions() {
      var transitions = this.transitionData;

      if (transitions) {
        Object.keys(transitions).forEach(function (t) {
          transitions[t].timer.stop();
        });
      }
    }
  }, {
    key: "setState",
    value: function setState(update) {
      if (typeof update === 'function') {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update(this.state));
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update);
      }
    }
  }, {
    key: "parse",
    value: function parse(config) {
      var _this = this;

      var clone = _objectSpread({}, config);

      var events = new _Events__WEBPACK_IMPORTED_MODULE_2__["default"](clone);

      if (clone.events) {
        delete clone.events;
      }

      var timing = _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_1__["timingDefaults"], clone.timing || {}, {
        time: Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["now"])()
      });

      if (clone.timing) {
        delete clone.timing;
      }

      Object.keys(clone).forEach(function (stateKey) {
        var tweens = [];
        var next = clone[stateKey];

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNamespace"])(next)) {
          Object.keys(next).forEach(function (attr) {
            var val = next[attr];

            if (Array.isArray(val)) {
              if (val.length === 1) {
                tweens.push(_this.getTween(attr, val[0], stateKey));
              } else {
                _this.setState(function (state) {
                  var _objectSpread2, _ref;

                  return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                });

                tweens.push(_this.getTween(attr, val[1], stateKey));
              }
            } else if (typeof val === 'function') {
              var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                  _this.setState(function (state) {
                    var _objectSpread3, _ref2;

                    return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                  });
                };

                return kapellmeisterNamespacedTween;
              };

              tweens.push(getNameSpacedCustomTween);
            } else {
              _this.setState(function (state) {
                var _objectSpread4, _ref3;

                return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
              });

              tweens.push(_this.getTween(attr, val, stateKey));
            }
          });
        } else {
          if (Array.isArray(next)) {
            if (next.length === 1) {
              tweens.push(_this.getTween(stateKey, next[0], null));
            } else {
              var _this$setState;

              _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

              tweens.push(_this.getTween(stateKey, next[1], null));
            }
          } else if (typeof next === 'function') {
            var getCustomTween = function getCustomTween() {
              var kapellmeisterTween = function kapellmeisterTween(t) {
                var _this$setState2;

                _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
              };

              return kapellmeisterTween;
            };

            tweens.push(getCustomTween);
          } else {
            var _this$setState3;

            _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

            tweens.push(_this.getTween(stateKey, next, null));
          }
        }

        _this.update({
          stateKey: stateKey,
          timing: timing,
          tweens: tweens,
          events: events,
          status: 0
        });
      });
    }
  }, {
    key: "getTween",
    value: function getTween(attr, endValue, nameSpace) {
      var _this2 = this;

      return function () {
        var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

        if (begValue === endValue) {
          return null;
        }

        var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

        var stateTween;

        if (nameSpace === null) {
          stateTween = function stateTween(t) {
            var _this2$setState;

            _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
          };
        } else {
          stateTween = function stateTween(t) {
            _this2.setState(function (state) {
              var _objectSpread5, _ref4;

              return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
            });
          };
        }

        return stateTween;
      };
    }
  }, {
    key: "update",
    value: function update(transition) {
      if (!this.transitionData) {
        this.transitionData = {};
      }

      this.init(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTransitionId"])(), transition);
    }
  }, {
    key: "init",
    value: function init(id, transition) {
      var _this3 = this;

      var n = transition.tweens.length;
      var tweens = new Array(n);

      var queue = function queue(elapsed) {
        transition.status = 1;
        transition.timer.restart(start, transition.timing.delay, transition.timing.time);

        if (transition.timing.delay <= elapsed) {
          start(elapsed - transition.timing.delay);
        }
      };

      this.transitionData[id] = transition;
      transition.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timer"])(queue, 0, transition.timing.time);

      var start = function start(elapsed) {
        if (transition.status !== 1) return stop();

        for (var tid in _this3.transitionData) {
          var t = _this3.transitionData[tid];

          if (t.stateKey !== transition.stateKey) {
            continue;
          }

          if (t.status === 3) {
            return Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(start);
          }

          if (t.status === 4) {
            t.status = 6;
            t.timer.stop();

            if (t.events.interrupt) {
              t.events.interrupt.call(_this3);
            }

            delete _this3.transitionData[tid];
          } else if (+tid < id) {
            t.status = 6;
            t.timer.stop();
            delete _this3.transitionData[tid];
          }
        }

        Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(function () {
          if (transition.status === 3) {
            transition.status = 4;
            transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
            tick(elapsed);
          }
        });
        transition.status = 2;

        if (transition.events.start) {
          transition.events.start.call(_this3);
        }

        if (transition.status !== 2) {
          return;
        }

        transition.status = 3;
        var j = -1;

        for (var i = 0; i < n; ++i) {
          var res = transition.tweens[i]();

          if (res) {
            tweens[++j] = res;
          }
        }

        tweens.length = j + 1;
      };

      var tick = function tick(elapsed) {
        var t = 1;

        if (elapsed < transition.timing.duration) {
          t = transition.timing.ease(elapsed / transition.timing.duration);
        } else {
          transition.timer.restart(stop);
          transition.status = 5;
        }

        var i = -1;

        while (++i < tweens.length) {
          tweens[i](t);
        }

        if (transition.status === 5) {
          if (transition.events.end) {
            transition.events.end.call(_this3);
          }

          stop();
        }
      };

      var stop = function stop() {
        transition.status = 6;
        transition.timer.stop();
        delete _this3.transitionData[id];

        for (var _ in _this3.transitionData) {
          return;
        }

        delete _this3.transitionData;
      };
    }
  }]);

  return BaseNode;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseNode);

/***/ }),

/***/ "./node_modules/kapellmeister/es/Events.js":
/*!*************************************************!*\
  !*** ./node_modules/kapellmeister/es/Events.js ***!
  \*************************************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Events = function Events(config) {
  var _this = this;

  _classCallCheck(this, Events);

  this.start = null;
  this.interrupt = null;
  this.end = null;

  if (config.events) {
    Object.keys(config.events).forEach(function (d) {
      if (typeof config.events[d] !== 'function') {
        throw new Error('Event handlers must be a function');
      } else {
        _this[d] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["once"])(config.events[d]);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./node_modules/kapellmeister/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/index.js ***!
  \************************************************/
/*! exports provided: BaseNode, now, timer, interval, timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseNode */ "./node_modules/kapellmeister/es/BaseNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _BaseNode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["interval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"]; });




/***/ }),

/***/ "./node_modules/kapellmeister/es/utils.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/utils.js ***!
  \************************************************/
/*! exports provided: getTransitionId, extend, once, isNamespace, timingDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionId", function() { return getTransitionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamespace", function() { return isNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingDefaults", function() { return timingDefaults; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transitionId = 0;
function getTransitionId() {
  return ++transitionId;
}
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
}
function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}
function isNamespace(prop) {
  return _typeof(prop) === 'object' && Array.isArray(prop) === false;
}

var linear = function linear(t) {
  return +t;
};

var timingDefaults = {
  delay: 0,
  duration: 250,
  ease: linear
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-move/es/Animate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-move/es/Animate/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NodeGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NodeGroup */ "./node_modules/react-move/es/NodeGroup/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./node_modules/react-move/es/utils.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

var Animate = function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Animate, _Component);

  var _super = _createSuper(Animate);

  function Animate() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Animate);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Animate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          start = _this$props.start,
          enter = _this$props.enter,
          update = _this$props.update,
          leave = _this$props.leave,
          interpolation = _this$props.interpolation,
          children = _this$props.children;
      var data = typeof start === 'function' ? start() : start;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NodeGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: show ? [data] : [],
        start: function start() {
          return data;
        },
        keyAccessor: keyAccessor,
        interpolation: interpolation,
        enter: typeof enter === 'function' ? enter : function () {
          return enter;
        },
        update: typeof update === 'function' ? update : function () {
          return update;
        },
        leave: typeof leave === 'function' ? leave : function () {
          return leave;
        }
      }, function (nodes) {
        if (!nodes[0]) {
          return null;
        }

        var renderedChildren = children(nodes[0].state);
        return renderedChildren && react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(renderedChildren);
      });
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Animate.propTypes =  true ? {
  show: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  interpolation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  start: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  enter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  update: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  leave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
} : undefined;
Animate.defaultProps = {
  show: true,
  interpolation: _utils__WEBPACK_IMPORTED_MODULE_8__["numeric"]
};
/* harmony default export */ __webpack_exports__["default"] = (Animate);

/***/ }),

/***/ "./node_modules/react-move/es/NodeGroup/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-move/es/NodeGroup/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var kapellmeister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kapellmeister */ "./node_modules/kapellmeister/es/index.js");
/* harmony import */ var _core_mergeKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/mergeKeys */ "./node_modules/react-move/es/core/mergeKeys.js");
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/types */ "./node_modules/react-move/es/core/types.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./node_modules/react-move/es/utils.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var NodeGroup = function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NodeGroup, _Component);

  var _super = _createSuper(NodeGroup);

  function NodeGroup(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NodeGroup);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];
        var isTransitioning = n.isTransitioning();

        if (isTransitioning) {
          pending = true;
        }

        if (n.type === _core_types__WEBPACK_IMPORTED_MODULE_11__["LEAVE"] && !isTransitioning) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "interval", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "unmounting", false);

    var interpolation = props.interpolation;

    var Node = function (_BaseNode) {
      Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Node, _BaseNode);

      var _super2 = _createSuper(Node);

      function Node(key, data) {
        var _this2;

        Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Node);

        _this2 = _super2.call(this);

        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "getInterpolator", interpolation);

        _this2.key = key;
        _this2.data = data;
        _this2.type = _core_types__WEBPACK_IMPORTED_MODULE_11__["ENTER"];
        return _this2;
      }

      return Node;
    }(kapellmeister__WEBPACK_IMPORTED_MODULE_9__["BaseNode"]);

    _this.state = {
      Node: Node,
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = Object(kapellmeister__WEBPACK_IMPORTED_MODULE_9__["interval"])(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        nodeHash[key].stopTransitions();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var Node = prevState.Node,
            nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            var node = new Node();
            node.key = k;
            node.data = d;
            node.type = _core_types__WEBPACK_IMPORTED_MODULE_11__["ENTER"];
            nodeHash[k] = node;
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.data = data[nextKeyIndex[_k]];
            n.type = _core_types__WEBPACK_IMPORTED_MODULE_11__["UPDATE"];
          } else {
            n.type = _core_types__WEBPACK_IMPORTED_MODULE_11__["LEAVE"];
          }
        }

        var mergedNodeKeys = Object(_core_mergeKeys__WEBPACK_IMPORTED_MODULE_10__["default"])(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === _core_types__WEBPACK_IMPORTED_MODULE_11__["ENTER"]) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _n.transition(enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === _core_types__WEBPACK_IMPORTED_MODULE_11__["LEAVE"]) {
            _n.transition(leave(_d, keyIndex[_k2]));
          } else {
            _n.transition(update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

NodeGroup.propTypes =  true ? {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  keyAccessor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  interpolation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  start: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  enter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  update: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  leave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
} : undefined;
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {},
  interpolation: _utils__WEBPACK_IMPORTED_MODULE_12__["numeric"]
};
/* harmony default export */ __webpack_exports__["default"] = (NodeGroup);

/***/ }),

/***/ "./node_modules/react-move/es/core/mergeKeys.js":
/*!******************************************************!*\
  !*** ./node_modules/react-move/es/core/mergeKeys.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (mergeKeys);

/***/ }),

/***/ "./node_modules/react-move/es/core/types.js":
/*!**************************************************!*\
  !*** ./node_modules/react-move/es/core/types.js ***!
  \**************************************************/
/*! exports provided: ENTER, UPDATE, LEAVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE", function() { return LEAVE; });
var ENTER = 'ENTER';
var UPDATE = 'UPDATE';
var LEAVE = 'LEAVE';

/***/ }),

/***/ "./node_modules/react-move/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-move/es/index.js ***!
  \*********************************************/
/*! exports provided: Animate, NodeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate */ "./node_modules/react-move/es/Animate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animate", function() { return _Animate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NodeGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeGroup */ "./node_modules/react-move/es/NodeGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeGroup", function() { return _NodeGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/react-move/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/react-move/es/utils.js ***!
  \*********************************************/
/*! exports provided: numeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
function numeric(beg, end) {
  var a = +beg;
  var b = +end - a;
  return function (t) {
    return a + b * t;
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0V4dHJhL0NpcmN1bGFyUHJvZ3Jlc3MuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2thcGVsbG1laXN0ZXIvZXMvQmFzZU5vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9rYXBlbGxtZWlzdGVyL2VzL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2thcGVsbG1laXN0ZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9rYXBlbGxtZWlzdGVyL2VzL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb3ZlL2VzL0FuaW1hdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb3ZlL2VzL05vZGVHcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vdmUvZXMvY29yZS9tZXJnZUtleXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb3ZlL2VzL2NvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb3ZlL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW92ZS9lcy91dGlscy5qcyJdLCJuYW1lcyI6WyJBbmltYXRlZFByb2dyZXNzUHJvdmlkZXIiLCJ1bmRlZmluZWQiLCJpc0FuaW1hdGVkIiwicHJvcHMiLCJyZXBlYXQiLCJpbnRlcnZhbCIsIndpbmRvdyIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzdGF0ZSIsImR1cmF0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInZhbHVlIiwidmFsdWVTdGFydCIsInZhbHVlRW5kIiwidGltaW5nIiwiZWFzZSIsImVhc2luZ0Z1bmN0aW9uIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJmaWxsQ29sb3IiLCJvdXRDb2xvciIsInRleHRDb2xvciIsInBlcmNlbnRhZ2UiLCJ0aXRsZSIsImVhc2VCb3VuY2VJbiIsInJvdW5kZWRWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsImJ1aWxkU3R5bGVzIiwic3Ryb2tlTGluZWNhcCIsImJhY2tncm91bmRDb2xvciIsInBhdGhDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLHdCOzs7Ozs7Ozs7Ozs7Ozs7O3FWQUNPQyxTOztrVkFFSDtBQUNOQyxnQkFBVSxFQUFFO0FBRE4sSzs7Ozs7Ozt3Q0FRWTtBQUFBOztBQUNsQixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsTUFBZixFQUF1QjtBQUNyQixhQUFLQyxRQUFMLEdBQWdCQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsWUFBTTtBQUN2QyxnQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWk4sc0JBQVUsRUFBRSxDQUFDLE1BQUksQ0FBQ08sS0FBTCxDQUFXUDtBQURaLFdBQWQ7QUFHRCxTQUplLEVBSWIsS0FBS0MsS0FBTCxDQUFXTyxRQUFYLEdBQXNCLElBSlQsQ0FBaEI7QUFLRCxPQU5ELE1BTU87QUFDTCxhQUFLRixRQUFMLENBQWM7QUFDWk4sb0JBQVUsRUFBRSxDQUFDLEtB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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VDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsMkJBQTJCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUMzRHhCO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBLG9COzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQzs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTdhOTQ5NWRkODFkYzUxOGFlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcInJlYWN0LW1vdmVcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgaW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaXNBbmltYXRlZDogZmFsc2VcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdmFsdWVTdGFydDogMFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucmVwZWF0KSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNBbmltYXRlZDogIXRoaXMuc3RhdGUuaXNBbmltYXRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0FuaW1hdGVkOiAhdGhpcy5zdGF0ZS5pc0FuaW1hdGVkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBbmltYXRlXHJcbiAgICAgICAgc3RhcnQ9eygpID0+ICh7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVN0YXJ0XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgdXBkYXRlPXsoKSA9PiAoe1xyXG4gICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0FuaW1hdGVkID8gdGhpcy5wcm9wcy52YWx1ZUVuZCA6IHRoaXMucHJvcHMudmFsdWVTdGFydFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHRpbWluZzoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDAsXHJcbiAgICAgICAgICAgIGVhc2U6IHRoaXMucHJvcHMuZWFzaW5nRnVuY3Rpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyB2YWx1ZSB9KSA9PiB0aGlzLnByb3BzLmNoaWxkcmVuKHZhbHVlKX1cclxuICAgICAgPC9BbmltYXRlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciwgYnVpbGRTdHlsZXMgfSBmcm9tICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhcic7XHJcbmltcG9ydCAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyIGZyb20gXCIuL0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IHsgZWFzZVF1YWRJbk91dCwgZWFzZUNpcmNsZUluLCBlYXNlQ3ViaWNJbiwgZWFzZUJvdW5jZUluIH0gZnJvbSBcImQzLWVhc2VcIjtcclxuXHJcbi8vIGNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoeyBmaWxsQ29sb3IsIG91dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSA9PiB7XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4vLyAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfSBzdHJva2VXaWR0aD17MTV9IHZhbHVlPXtwZXJjZW50YWdlfVxyXG4vLyAgICAgICAgICAgICB0ZXh0PXtgJHtwZXJjZW50YWdlfSVgfVxyXG4vLyAgICAgICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZUJhY2tJbigpfVxyXG5cclxuLy8gICAgICAgICAgICAgc3R5bGVzPXt7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIHJvb3Qgc3ZnIGVsZW1lbnRcclxuLy8gICAgICAgICAgICAgICAgIHJvb3Q6IHt9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBwYXRoLCBpLmUuIHRoZSBcImNvbXBsZXRlZCBwcm9ncmVzc1wiXHJcbi8vICAgICAgICAgICAgICAgICBwYXRoOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBgcmdiYSg2MiwgMTUyLCAxOTksICR7cGVyY2VudGFnZSAvIDEwMH0pYCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBjaXJjbGUgYmVoaW5kIHRoZSBwYXRoLCBpLmUuIHRoZSBcInRvdGFsIHByb2dyZXNzXCJcclxuLy8gICAgICAgICAgICAgICAgIHRyYWlsOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVHJhaWwgY29sb3JcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjZDZkNmQ2JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIHVzZSByb3VuZGVkIG9yIGZsYXQgY29ybmVycyBvbiB0aGUgZW5kcyAtIGNhbiB1c2UgJ2J1dHQnIG9yICdyb3VuZCdcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUm90YXRlIHRoZSB0cmFpbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwLjI1dHVybiknLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHRleHQ6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IGNvbG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNmODgnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRleHQgc2l6ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH19IC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzKHsgZmlsbENvbG9yLCBvdXRDb2xvciwgdGV4dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBbmltYXRlZFByb2dyZXNzUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWVTdGFydD17MH1cclxuICAgICAgICAgICAgdmFsdWVFbmQ9ezY2fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MS40fVxyXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZUJvdW5jZUlufVxyXG4gICAgICAgICAgICByZXBlYXRcclxuICAgICAgICAgICAgZmlsbENvbG9yIG91dENvbG9yIHBlcmNlbnRhZ2UgdGl0bGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YCR7cm91bmRlZFZhbHVlfSVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgaW1wb3J0YW50IHRvIGluY2x1ZGUsIGJlY2F1c2UgaWYgeW91J3JlIGZ1bGx5IG1hbmFnaW5nIHRoZVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24geW91cnNlbGYsIHlvdSdsbCB3YW50IHRvIGRpc2FibGUgdGhlIENTUyBhbmltYXRpb24uICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJidXR0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG91dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoQ29sb3I6IGZpbGxDb2xvcixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImV4cG9ydCB7XG4gIG5vdyxcbiAgdGltZXIsXG4gIHRpbWVyRmx1c2hcbn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lb3V0XG59IGZyb20gXCIuL3RpbWVvdXQuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBpbnRlcnZhbFxufSBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuIiwiaW1wb3J0IHtUaW1lciwgbm93fSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXIsIHRvdGFsID0gZGVsYXk7XG4gIGlmIChkZWxheSA9PSBudWxsKSByZXR1cm4gdC5yZXN0YXJ0KGNhbGxiYWNrLCBkZWxheSwgdGltZSksIHQ7XG4gIGRlbGF5ID0gK2RlbGF5LCB0aW1lID0gdGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZTtcbiAgdC5yZXN0YXJ0KGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIGVsYXBzZWQgKz0gdG90YWw7XG4gICAgdC5yZXN0YXJ0KHRpY2ssIHRvdGFsICs9IGRlbGF5LCB0aW1lKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkKTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsImltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICB2YXIgdCA9IG5ldyBUaW1lcjtcbiAgZGVsYXkgPSBkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheTtcbiAgdC5yZXN0YXJ0KGZ1bmN0aW9uKGVsYXBzZWQpIHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdl4oCZdmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlbuKAmXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbChudWxsLCBlKTtcbiAgICB0ID0gdC5fbmV4dDtcbiAgfVxuICAtLWZyYW1lO1xufVxuXG5mdW5jdGlvbiB3YWtlKCkge1xuICBjbG9ja05vdyA9IChjbG9ja0xhc3QgPSBjbG9jay5ub3coKSkgKyBjbG9ja1NrZXc7XG4gIGZyYW1lID0gdGltZW91dCA9IDA7XG4gIHRyeSB7XG4gICAgdGltZXJGbHVzaCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGZyYW1lID0gMDtcbiAgICBuYXAoKTtcbiAgICBjbG9ja05vdyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9rZSgpIHtcbiAgdmFyIG5vdyA9IGNsb2NrLm5vdygpLCBkZWxheSA9IG5vdyAtIGNsb2NrTGFzdDtcbiAgaWYgKGRlbGF5ID4gcG9rZURlbGF5KSBjbG9ja1NrZXcgLT0gZGVsYXksIGNsb2NrTGFzdCA9IG5vdztcbn1cblxuZnVuY3Rpb24gbmFwKCkge1xuICB2YXIgdDAsIHQxID0gdGFza0hlYWQsIHQyLCB0aW1lID0gSW5maW5pdHk7XG4gIHdoaWxlICh0MSkge1xuICAgIGlmICh0MS5fY2FsbCkge1xuICAgICAgaWYgKHRpbWUgPiB0MS5fdGltZSkgdGltZSA9IHQxLl90aW1lO1xuICAgICAgdDAgPSB0MSwgdDEgPSB0MS5fbmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdDIgPSB0MS5fbmV4dCwgdDEuX25leHQgPSBudWxsO1xuICAgICAgdDEgPSB0MCA/IHQwLl9uZXh0ID0gdDIgOiB0YXNrSGVhZCA9IHQyO1xuICAgIH1cbiAgfVxuICB0YXNrVGFpbCA9IHQwO1xuICBzbGVlcCh0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSkge1xuICBpZiAoZnJhbWUpIHJldHVybjsgLy8gU29vbmVzdCBhbGFybSBhbHJlYWR5IHNldCwgb3Igd2lsbCBiZS5cbiAgaWYgKHRpbWVvdXQpIHRpbWVvdXQgPSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHZhciBkZWxheSA9IHRpbWUgLSBjbG9ja05vdzsgLy8gU3RyaWN0bHkgbGVzcyB0aGFuIGlmIHdlIHJlY29tcHV0ZWQgY2xvY2tOb3cuXG4gIGlmIChkZWxheSA+IDI0KSB7XG4gICAgaWYgKHRpbWUgPCBJbmZpbml0eSkgdGltZW91dCA9IHNldFRpbWVvdXQod2FrZSwgdGltZSAtIGNsb2NrLm5vdygpIC0gY2xvY2tTa2V3KTtcbiAgICBpZiAoaW50ZXJ2YWwpIGludGVydmFsID0gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgY2xvY2tMYXN0ID0gY2xvY2subm93KCksIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9rZSwgcG9rZURlbGF5KTtcbiAgICBmcmFtZSA9IDEsIHNldEZyYW1lKHdha2UpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgbm93LCB0aW1lciwgdGltZW91dCB9IGZyb20gJ2QzLXRpbWVyJztcbmltcG9ydCB7IHRpbWluZ0RlZmF1bHRzLCBleHRlbmQsIGdldFRyYW5zaXRpb25JZCwgaXNOYW1lc3BhY2UgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9FdmVudHMnO1xuXG52YXIgQmFzZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJhc2VOb2RlKHN0YXRlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VOb2RlKTtcblxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSB8fCB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNlTm9kZSwgW3tcbiAgICBrZXk6IFwidHJhbnNpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2l0aW9uKGNvbmZpZykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjb25maWdbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYXJzZShpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2UoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNUcmFuc2l0aW9uaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNpdGlvbmluZygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMudHJhbnNpdGlvbkRhdGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BUcmFuc2l0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wVHJhbnNpdGlvbnMoKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25EYXRhO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXModHJhbnNpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc1t0XS50aW1lci5zdG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLnN0YXRlLCB1cGRhdGUodGhpcy5zdGF0ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMuc3RhdGUsIHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGNvbmZpZykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGNsb25lID0gX29iamVjdFNwcmVhZCh7fSwgY29uZmlnKTtcblxuICAgICAgdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoY2xvbmUpO1xuXG4gICAgICBpZiAoY2xvbmUuZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSBjbG9uZS5ldmVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1pbmcgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aW1pbmdEZWZhdWx0cywgY2xvbmUudGltaW5nIHx8IHt9LCB7XG4gICAgICAgIHRpbWU6IG5vdygpXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNsb25lLnRpbWluZykge1xuICAgICAgICBkZWxldGUgY2xvbmUudGltaW5nO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhjbG9uZSkuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGVLZXkpIHtcbiAgICAgICAgdmFyIHR3ZWVucyA9IFtdO1xuICAgICAgICB2YXIgbmV4dCA9IGNsb25lW3N0YXRlS2V5XTtcblxuICAgICAgICBpZiAoaXNOYW1lc3BhY2UobmV4dCkpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhuZXh0KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gbmV4dFthdHRyXTtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHR3ZWVucy5wdXNoKF90aGlzLmdldFR3ZWVuKGF0dHIsIHZhbFswXSwgc3RhdGVLZXkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfb2JqZWN0U3ByZWFkMiwgX3JlZjtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltzdGF0ZUtleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZVtzdGF0ZUtleV0sIChfb2JqZWN0U3ByZWFkMiA9IHt9LCBfb2JqZWN0U3ByZWFkMlthdHRyXSA9IHZhbFswXSwgX29iamVjdFNwcmVhZDIpKSwgX3JlZjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHR3ZWVucy5wdXNoKF90aGlzLmdldFR3ZWVuKGF0dHIsIHZhbFsxXSwgc3RhdGVLZXkpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHZhciBnZXROYW1lU3BhY2VkQ3VzdG9tVHdlZW4gPSBmdW5jdGlvbiBnZXROYW1lU3BhY2VkQ3VzdG9tVHdlZW4oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGthcGVsbG1laXN0ZXJOYW1lc3BhY2VkVHdlZW4gPSBmdW5jdGlvbiBrYXBlbGxtZWlzdGVyTmFtZXNwYWNlZFR3ZWVuKHQpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX29iamVjdFNwcmVhZDMsIF9yZWYyO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMiA9IHt9LCBfcmVmMltzdGF0ZUtleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZVtzdGF0ZUtleV0sIChfb2JqZWN0U3ByZWFkMyA9IHt9LCBfb2JqZWN0U3ByZWFkM1thdHRyXSA9IHZhbCh0KSwgX29iamVjdFNwcmVhZDMpKSwgX3JlZjI7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGthcGVsbG1laXN0ZXJOYW1lc3BhY2VkVHdlZW47XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdHdlZW5zLnB1c2goZ2V0TmFtZVNwYWNlZEN1c3RvbVR3ZWVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBfb2JqZWN0U3ByZWFkNCwgX3JlZjM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjMgPSB7fSwgX3JlZjNbc3RhdGVLZXldID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGVbc3RhdGVLZXldLCAoX29iamVjdFNwcmVhZDQgPSB7fSwgX29iamVjdFNwcmVhZDRbYXR0cl0gPSB2YWwsIF9vYmplY3RTcHJlYWQ0KSksIF9yZWYzO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB0d2VlbnMucHVzaChfdGhpcy5nZXRUd2VlbihhdHRyLCB2YWwsIHN0YXRlS2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV4dCkpIHtcbiAgICAgICAgICAgIGlmIChuZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICB0d2VlbnMucHVzaChfdGhpcy5nZXRUd2VlbihzdGF0ZUtleSwgbmV4dFswXSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF90aGlzJHNldFN0YXRlO1xuXG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKChfdGhpcyRzZXRTdGF0ZSA9IHt9LCBfdGhpcyRzZXRTdGF0ZVtzdGF0ZUtleV0gPSBuZXh0WzBdLCBfdGhpcyRzZXRTdGF0ZSkpO1xuXG4gICAgICAgICAgICAgIHR3ZWVucy5wdXNoKF90aGlzLmdldFR3ZWVuKHN0YXRlS2V5LCBuZXh0WzFdLCBudWxsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGdldEN1c3RvbVR3ZWVuID0gZnVuY3Rpb24gZ2V0Q3VzdG9tVHdlZW4oKSB7XG4gICAgICAgICAgICAgIHZhciBrYXBlbGxtZWlzdGVyVHdlZW4gPSBmdW5jdGlvbiBrYXBlbGxtZWlzdGVyVHdlZW4odCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRzZXRTdGF0ZTI7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSgoX3RoaXMkc2V0U3RhdGUyID0ge30sIF90aGlzJHNldFN0YXRlMltzdGF0ZUtleV0gPSBuZXh0KHQpLCBfdGhpcyRzZXRTdGF0ZTIpKTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICByZXR1cm4ga2FwZWxsbWVpc3RlclR3ZWVuO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdHdlZW5zLnB1c2goZ2V0Q3VzdG9tVHdlZW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkc2V0U3RhdGUzO1xuXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSgoX3RoaXMkc2V0U3RhdGUzID0ge30sIF90aGlzJHNldFN0YXRlM1tzdGF0ZUtleV0gPSBuZXh0LCBfdGhpcyRzZXRTdGF0ZTMpKTtcblxuICAgICAgICAgICAgdHdlZW5zLnB1c2goX3RoaXMuZ2V0VHdlZW4oc3RhdGVLZXksIG5leHQsIG51bGwpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy51cGRhdGUoe1xuICAgICAgICAgIHN0YXRlS2V5OiBzdGF0ZUtleSxcbiAgICAgICAgICB0aW1pbmc6IHRpbWluZyxcbiAgICAgICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgICAgICBzdGF0dXM6IDBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VHdlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHdlZW4oYXR0ciwgZW5kVmFsdWUsIG5hbWVTcGFjZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBiZWdWYWx1ZSA9IG5hbWVTcGFjZSA/IF90aGlzMi5zdGF0ZVtuYW1lU3BhY2VdW2F0dHJdIDogX3RoaXMyLnN0YXRlW2F0dHJdO1xuXG4gICAgICAgIGlmIChiZWdWYWx1ZSA9PT0gZW5kVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gX3RoaXMyLmdldEludGVycG9sYXRvcihiZWdWYWx1ZSwgZW5kVmFsdWUsIGF0dHIsIG5hbWVTcGFjZSk7XG5cbiAgICAgICAgdmFyIHN0YXRlVHdlZW47XG5cbiAgICAgICAgaWYgKG5hbWVTcGFjZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlVHdlZW4gPSBmdW5jdGlvbiBzdGF0ZVR3ZWVuKHQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIkc2V0U3RhdGU7XG5cbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSgoX3RoaXMyJHNldFN0YXRlID0ge30sIF90aGlzMiRzZXRTdGF0ZVthdHRyXSA9IGkodCksIF90aGlzMiRzZXRTdGF0ZSkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVUd2VlbiA9IGZ1bmN0aW9uIHN0YXRlVHdlZW4odCkge1xuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICB2YXIgX29iamVjdFNwcmVhZDUsIF9yZWY0O1xuXG4gICAgICAgICAgICAgIHJldHVybiBfcmVmNCA9IHt9LCBfcmVmNFtuYW1lU3BhY2VdID0gX29iamVjdFNwcmVhZCh7fSwgc3RhdGVbbmFtZVNwYWNlXSwgKF9vYmplY3RTcHJlYWQ1ID0ge30sIF9vYmplY3RTcHJlYWQ1W2F0dHJdID0gaSh0KSwgX29iamVjdFNwcmVhZDUpKSwgX3JlZjQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlVHdlZW47XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKHRyYW5zaXRpb24pIHtcbiAgICAgIGlmICghdGhpcy50cmFuc2l0aW9uRGF0YSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EYXRhID0ge307XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdChnZXRUcmFuc2l0aW9uSWQoKSwgdHJhbnNpdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChpZCwgdHJhbnNpdGlvbikge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBuID0gdHJhbnNpdGlvbi50d2VlbnMubGVuZ3RoO1xuICAgICAgdmFyIHR3ZWVucyA9IG5ldyBBcnJheShuKTtcblxuICAgICAgdmFyIHF1ZXVlID0gZnVuY3Rpb24gcXVldWUoZWxhcHNlZCkge1xuICAgICAgICB0cmFuc2l0aW9uLnN0YXR1cyA9IDE7XG4gICAgICAgIHRyYW5zaXRpb24udGltZXIucmVzdGFydChzdGFydCwgdHJhbnNpdGlvbi50aW1pbmcuZGVsYXksIHRyYW5zaXRpb24udGltaW5nLnRpbWUpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLnRpbWluZy5kZWxheSA8PSBlbGFwc2VkKSB7XG4gICAgICAgICAgc3RhcnQoZWxhcHNlZCAtIHRyYW5zaXRpb24udGltaW5nLmRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uRGF0YVtpZF0gPSB0cmFuc2l0aW9uO1xuICAgICAgdHJhbnNpdGlvbi50aW1lciA9IHRpbWVyKHF1ZXVlLCAwLCB0cmFuc2l0aW9uLnRpbWluZy50aW1lKTtcblxuICAgICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoZWxhcHNlZCkge1xuICAgICAgICBpZiAodHJhbnNpdGlvbi5zdGF0dXMgIT09IDEpIHJldHVybiBzdG9wKCk7XG5cbiAgICAgICAgZm9yICh2YXIgdGlkIGluIF90aGlzMy50cmFuc2l0aW9uRGF0YSkge1xuICAgICAgICAgIHZhciB0ID0gX3RoaXMzLnRyYW5zaXRpb25EYXRhW3RpZF07XG5cbiAgICAgICAgICBpZiAodC5zdGF0ZUtleSAhPT0gdHJhbnNpdGlvbi5zdGF0ZUtleSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZW91dChzdGFydCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHQuc3RhdHVzID09PSA0KSB7XG4gICAgICAgICAgICB0LnN0YXR1cyA9IDY7XG4gICAgICAgICAgICB0LnRpbWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgaWYgKHQuZXZlbnRzLmludGVycnVwdCkge1xuICAgICAgICAgICAgICB0LmV2ZW50cy5pbnRlcnJ1cHQuY2FsbChfdGhpczMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgX3RoaXMzLnRyYW5zaXRpb25EYXRhW3RpZF07XG4gICAgICAgICAgfSBlbHNlIGlmICgrdGlkIDwgaWQpIHtcbiAgICAgICAgICAgIHQuc3RhdHVzID0gNjtcbiAgICAgICAgICAgIHQudGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzMy50cmFuc2l0aW9uRGF0YVt0aWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0cmFuc2l0aW9uLnN0YXR1cyA9PT0gMykge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5zdGF0dXMgPSA0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbi50aW1lci5yZXN0YXJ0KHRpY2ssIHRyYW5zaXRpb24udGltaW5nLmRlbGF5LCB0cmFuc2l0aW9uLnRpbWluZy50aW1lKTtcbiAgICAgICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNpdGlvbi5zdGF0dXMgPSAyO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmV2ZW50cy5zdGFydCkge1xuICAgICAgICAgIHRyYW5zaXRpb24uZXZlbnRzLnN0YXJ0LmNhbGwoX3RoaXMzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uLnN0YXR1cyAhPT0gMikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zaXRpb24uc3RhdHVzID0gMztcbiAgICAgICAgdmFyIGogPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIHZhciByZXMgPSB0cmFuc2l0aW9uLnR3ZWVuc1tpXSgpO1xuXG4gICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgdHdlZW5zWysral0gPSByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHdlZW5zLmxlbmd0aCA9IGogKyAxO1xuICAgICAgfTtcblxuICAgICAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHQgPSAxO1xuXG4gICAgICAgIGlmIChlbGFwc2VkIDwgdHJhbnNpdGlvbi50aW1pbmcuZHVyYXRpb24pIHtcbiAgICAgICAgICB0ID0gdHJhbnNpdGlvbi50aW1pbmcuZWFzZShlbGFwc2VkIC8gdHJhbnNpdGlvbi50aW1pbmcuZHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zaXRpb24udGltZXIucmVzdGFydChzdG9wKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLnN0YXR1cyA9IDU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IC0xO1xuXG4gICAgICAgIHdoaWxlICgrK2kgPCB0d2VlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgdHdlZW5zW2ldKHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24uc3RhdHVzID09PSA1KSB7XG4gICAgICAgICAgaWYgKHRyYW5zaXRpb24uZXZlbnRzLmVuZCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5ldmVudHMuZW5kLmNhbGwoX3RoaXMzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBzdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5zdGF0dXMgPSA2O1xuICAgICAgICB0cmFuc2l0aW9uLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgZGVsZXRlIF90aGlzMy50cmFuc2l0aW9uRGF0YVtpZF07XG5cbiAgICAgICAgZm9yICh2YXIgXyBpbiBfdGhpczMudHJhbnNpdGlvbkRhdGEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgX3RoaXMzLnRyYW5zaXRpb25EYXRhO1xuICAgICAgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmFzZU5vZGU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VOb2RlOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCB7IG9uY2UgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB2YXIgRXZlbnRzID0gZnVuY3Rpb24gRXZlbnRzKGNvbmZpZykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHMpO1xuXG4gIHRoaXMuc3RhcnQgPSBudWxsO1xuICB0aGlzLmludGVycnVwdCA9IG51bGw7XG4gIHRoaXMuZW5kID0gbnVsbDtcblxuICBpZiAoY29uZmlnLmV2ZW50cykge1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmV2ZW50c1tkXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IGhhbmRsZXJzIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXNbZF0gPSBvbmNlKGNvbmZpZy5ldmVudHNbZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRXZlbnRzOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZU5vZGUgfSBmcm9tICcuL0Jhc2VOb2RlJztcbmV4cG9ydCB7IG5vdywgdGltZXIsIGludGVydmFsLCB0aW1lb3V0IH0gZnJvbSAnZDMtdGltZXInOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciB0cmFuc2l0aW9uSWQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25JZCgpIHtcbiAgcmV0dXJuICsrdHJhbnNpdGlvbklkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChvYmosIHByb3BzKSB7XG4gIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICBvYmpbaV0gPSBwcm9wc1tpXTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiB0cmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmdW5jLmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZXNwYWNlKHByb3ApIHtcbiAgcmV0dXJuIF90eXBlb2YocHJvcCkgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvcCkgPT09IGZhbHNlO1xufVxuXG52YXIgbGluZWFyID0gZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgcmV0dXJuICt0O1xufTtcblxuZXhwb3J0IHZhciB0aW1pbmdEZWZhdWx0cyA9IHtcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGxpbmVhclxufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5vZGVHcm91cCBmcm9tICcuLi9Ob2RlR3JvdXAnO1xuaW1wb3J0IHsgbnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzJztcblxudmFyIGtleUFjY2Vzc29yID0gZnVuY3Rpb24ga2V5QWNjZXNzb3IoKSB7XG4gIHJldHVybiAnJCRrZXkkJCc7XG59O1xuXG52YXIgQW5pbWF0ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFuaW1hdGUpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGUpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGUsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNob3cgPSBfdGhpcyRwcm9wcy5zaG93LFxuICAgICAgICAgIHN0YXJ0ID0gX3RoaXMkcHJvcHMuc3RhcnQsXG4gICAgICAgICAgZW50ZXIgPSBfdGhpcyRwcm9wcy5lbnRlcixcbiAgICAgICAgICB1cGRhdGUgPSBfdGhpcyRwcm9wcy51cGRhdGUsXG4gICAgICAgICAgbGVhdmUgPSBfdGhpcyRwcm9wcy5sZWF2ZSxcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uID0gX3RoaXMkcHJvcHMuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIGRhdGEgPSB0eXBlb2Ygc3RhcnQgPT09ICdmdW5jdGlvbicgPyBzdGFydCgpIDogc3RhcnQ7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChOb2RlR3JvdXAsIHtcbiAgICAgICAgZGF0YTogc2hvdyA/IFtkYXRhXSA6IFtdLFxuICAgICAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGtleUFjY2Vzc29yOiBrZXlBY2Nlc3NvcixcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbixcbiAgICAgICAgZW50ZXI6IHR5cGVvZiBlbnRlciA9PT0gJ2Z1bmN0aW9uJyA/IGVudGVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlbnRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiB0eXBlb2YgdXBkYXRlID09PSAnZnVuY3Rpb24nID8gdXBkYXRlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB0eXBlb2YgbGVhdmUgPT09ICdmdW5jdGlvbicgPyBsZWF2ZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbGVhdmU7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChub2Rlcykge1xuICAgICAgICBpZiAoIW5vZGVzWzBdKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IGNoaWxkcmVuKG5vZGVzWzBdLnN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlO1xufShDb21wb25lbnQpO1xuXG5BbmltYXRlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGludGVycG9sYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICBzdGFydDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgZW50ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgdXBkYXRlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGxlYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59IDoge307XG5BbmltYXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAgaW50ZXJwb2xhdGlvbjogbnVtZXJpY1xufTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJhc2VOb2RlLCBpbnRlcnZhbCB9IGZyb20gJ2thcGVsbG1laXN0ZXInO1xuaW1wb3J0IG1lcmdlS2V5cyBmcm9tICcuLi9jb3JlL21lcmdlS2V5cyc7XG5pbXBvcnQgeyBFTlRFUiwgVVBEQVRFLCBMRUFWRSB9IGZyb20gJy4uL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgbnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzJztcblxudmFyIE5vZGVHcm91cCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb2RlR3JvdXAsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTm9kZUdyb3VwKTtcblxuICBmdW5jdGlvbiBOb2RlR3JvdXAocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUdyb3VwKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFuaW1hdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgbm9kZUtleXMgPSBfdGhpcyRzdGF0ZS5ub2RlS2V5cyxcbiAgICAgICAgICBub2RlSGFzaCA9IF90aGlzJHN0YXRlLm5vZGVIYXNoO1xuXG4gICAgICBpZiAoX3RoaXMudW5tb3VudGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gICAgICB2YXIgbmV4dE5vZGVLZXlzID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gbm9kZUtleXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrID0gbm9kZUtleXNbaV07XG4gICAgICAgIHZhciBuID0gbm9kZUhhc2hba107XG4gICAgICAgIHZhciBpc1RyYW5zaXRpb25pbmcgPSBuLmlzVHJhbnNpdGlvbmluZygpO1xuXG4gICAgICAgIGlmIChpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuLnR5cGUgPT09IExFQVZFICYmICFpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICBkZWxldGUgbm9kZUhhc2hba107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vZGVLZXlzLnB1c2goayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGVLZXlzOiBuZXh0Tm9kZUtleXMsXG4gICAgICAgICAgbm9kZXM6IG5leHROb2RlS2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVIYXNoW2tleV07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImludGVydmFsXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVubW91bnRpbmdcIiwgZmFsc2UpO1xuXG4gICAgdmFyIGludGVycG9sYXRpb24gPSBwcm9wcy5pbnRlcnBvbGF0aW9uO1xuXG4gICAgdmFyIE5vZGUgPSBmdW5jdGlvbiAoX0Jhc2VOb2RlKSB7XG4gICAgICBfaW5oZXJpdHMoTm9kZSwgX0Jhc2VOb2RlKTtcblxuICAgICAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoTm9kZSk7XG5cbiAgICAgIGZ1bmN0aW9uIE5vZGUoa2V5LCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpczI7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG4gICAgICAgIF90aGlzMiA9IF9zdXBlcjIuY2FsbCh0aGlzKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcImdldEludGVycG9sYXRvclwiLCBpbnRlcnBvbGF0aW9uKTtcblxuICAgICAgICBfdGhpczIua2V5ID0ga2V5O1xuICAgICAgICBfdGhpczIuZGF0YSA9IGRhdGE7XG4gICAgICAgIF90aGlzMi50eXBlID0gRU5URVI7XG4gICAgICAgIHJldHVybiBfdGhpczI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOb2RlO1xuICAgIH0oQmFzZU5vZGUpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBOb2RlOiBOb2RlLFxuICAgICAgbm9kZUtleXM6IFtdLFxuICAgICAgbm9kZUhhc2g6IHt9LFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vZGVHcm91cCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMuZGF0YSAhPT0gdGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnVubW91bnRpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0SW50ZXJ2YWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRJbnRlcnZhbCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWwodGhpcy5hbmltYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwucmVzdGFydCh0aGlzLmFuaW1hdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG5vZGVLZXlzID0gX3RoaXMkc3RhdGUyLm5vZGVLZXlzLFxuICAgICAgICAgIG5vZGVIYXNoID0gX3RoaXMkc3RhdGUyLm5vZGVIYXNoO1xuICAgICAgdGhpcy51bm1vdW50aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIG5vZGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBub2RlSGFzaFtrZXldLnN0b3BUcmFuc2l0aW9ucygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5ub2Rlcyk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGF0YSAhPT0gcHJldlN0YXRlLmRhdGEpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXh0UHJvcHMuZGF0YSxcbiAgICAgICAgICAgIGtleUFjY2Vzc29yID0gbmV4dFByb3BzLmtleUFjY2Vzc29yLFxuICAgICAgICAgICAgc3RhcnQgPSBuZXh0UHJvcHMuc3RhcnQsXG4gICAgICAgICAgICBlbnRlciA9IG5leHRQcm9wcy5lbnRlcixcbiAgICAgICAgICAgIHVwZGF0ZSA9IG5leHRQcm9wcy51cGRhdGUsXG4gICAgICAgICAgICBsZWF2ZSA9IG5leHRQcm9wcy5sZWF2ZTtcbiAgICAgICAgdmFyIE5vZGUgPSBwcmV2U3RhdGUuTm9kZSxcbiAgICAgICAgICAgIG5vZGVLZXlzID0gcHJldlN0YXRlLm5vZGVLZXlzLFxuICAgICAgICAgICAgbm9kZUhhc2ggPSBwcmV2U3RhdGUubm9kZUhhc2g7XG4gICAgICAgIHZhciBrZXlJbmRleCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBrZXlJbmRleFtub2RlS2V5c1tpXV0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRLZXlJbmRleCA9IHt9O1xuICAgICAgICB2YXIgbmV4dE5vZGVLZXlzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGRhdGEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIGQgPSBkYXRhW19pXTtcbiAgICAgICAgICB2YXIgayA9IGtleUFjY2Vzc29yKGQsIF9pKTtcbiAgICAgICAgICBuZXh0S2V5SW5kZXhba10gPSBfaTtcbiAgICAgICAgICBuZXh0Tm9kZUtleXMucHVzaChrKTtcblxuICAgICAgICAgIGlmIChrZXlJbmRleFtrXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgICAgICBub2RlLmtleSA9IGs7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gRU5URVI7XG4gICAgICAgICAgICBub2RlSGFzaFtrXSA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbm9kZUtleXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgIHZhciBfayA9IG5vZGVLZXlzW19pMl07XG4gICAgICAgICAgdmFyIG4gPSBub2RlSGFzaFtfa107XG5cbiAgICAgICAgICBpZiAobmV4dEtleUluZGV4W19rXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuLmRhdGEgPSBkYXRhW25leHRLZXlJbmRleFtfa11dO1xuICAgICAgICAgICAgbi50eXBlID0gVVBEQVRFO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuLnR5cGUgPSBMRUFWRTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWVyZ2VkTm9kZUtleXMgPSBtZXJnZUtleXMobm9kZUtleXMsIGtleUluZGV4LCBuZXh0Tm9kZUtleXMsIG5leHRLZXlJbmRleCk7XG5cbiAgICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgbWVyZ2VkTm9kZUtleXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICAgIHZhciBfazIgPSBtZXJnZWROb2RlS2V5c1tfaTNdO1xuICAgICAgICAgIHZhciBfbiA9IG5vZGVIYXNoW19rMl07XG4gICAgICAgICAgdmFyIF9kID0gX24uZGF0YTtcblxuICAgICAgICAgIGlmIChfbi50eXBlID09PSBFTlRFUikge1xuICAgICAgICAgICAgX24uc2V0U3RhdGUoc3RhcnQoX2QsIG5leHRLZXlJbmRleFtfazJdKSk7XG5cbiAgICAgICAgICAgIF9uLnRyYW5zaXRpb24oZW50ZXIoX2QsIG5leHRLZXlJbmRleFtfazJdKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChfbi50eXBlID09PSBMRUFWRSkge1xuICAgICAgICAgICAgX24udHJhbnNpdGlvbihsZWF2ZShfZCwga2V5SW5kZXhbX2syXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbi50cmFuc2l0aW9uKHVwZGF0ZShfZCwgbmV4dEtleUluZGV4W19rMl0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgbm9kZXM6IG1lcmdlZE5vZGVLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUhhc2hba2V5XTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBub2RlSGFzaDogbm9kZUhhc2gsXG4gICAgICAgICAgbm9kZUtleXM6IG1lcmdlZE5vZGVLZXlzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb2RlR3JvdXA7XG59KENvbXBvbmVudCk7XG5cbk5vZGVHcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBrZXlBY2Nlc3NvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW50ZXJwb2xhdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXJ0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBlbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0gOiB7fTtcbk5vZGVHcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVudGVyOiBmdW5jdGlvbiBlbnRlcigpIHt9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICBsZWF2ZTogZnVuY3Rpb24gbGVhdmUoKSB7fSxcbiAgaW50ZXJwb2xhdGlvbjogbnVtZXJpY1xufTtcbmV4cG9ydCBkZWZhdWx0IE5vZGVHcm91cDsiLCJmdW5jdGlvbiBtZXJnZUtleXMoY3Vyck5vZGVLZXlzLCBjdXJyS2V5SW5kZXgsIG5leHROb2RlS2V5cywgbmV4dEtleUluZGV4KSB7XG4gIHZhciBhbGxLZXlzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Tm9kZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxLZXlzW2ldID0gbmV4dE5vZGVLZXlzW2ldO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGN1cnJOb2RlS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICBpZiAobmV4dEtleUluZGV4W2N1cnJOb2RlS2V5c1tfaV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsbEtleXMucHVzaChjdXJyTm9kZUtleXNbX2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxsS2V5cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG5leHRPcmRlckEgPSBuZXh0S2V5SW5kZXhbYV07XG4gICAgdmFyIG5leHRPcmRlckIgPSBuZXh0S2V5SW5kZXhbYl07XG4gICAgdmFyIGN1cnJPcmRlckEgPSBjdXJyS2V5SW5kZXhbYV07XG4gICAgdmFyIGN1cnJPcmRlckIgPSBjdXJyS2V5SW5kZXhbYl07XG5cbiAgICBpZiAobmV4dE9yZGVyQSAhPSBudWxsICYmIG5leHRPcmRlckIgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5leHRLZXlJbmRleFthXSAtIG5leHRLZXlJbmRleFtiXTtcbiAgICB9IGVsc2UgaWYgKGN1cnJPcmRlckEgIT0gbnVsbCAmJiBjdXJyT3JkZXJCICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBjdXJyS2V5SW5kZXhbYV0gLSBjdXJyS2V5SW5kZXhbYl07XG4gICAgfSBlbHNlIGlmIChuZXh0T3JkZXJBICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG5leHROb2RlS2V5cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgIHZhciBwaXZvdCA9IG5leHROb2RlS2V5c1tfaTJdO1xuXG4gICAgICAgIGlmICghY3VycktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRPcmRlckEgPCBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIGN1cnJPcmRlckIgPiBjdXJyS2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRPcmRlckEgPiBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIGN1cnJPcmRlckIgPCBjdXJyS2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgbmV4dE5vZGVLZXlzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBfcGl2b3QgPSBuZXh0Tm9kZUtleXNbX2kzXTtcblxuICAgICAgaWYgKCFjdXJyS2V5SW5kZXhbX3Bpdm90XSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRPcmRlckIgPCBuZXh0S2V5SW5kZXhbX3Bpdm90XSAmJiBjdXJyT3JkZXJBID4gY3VycktleUluZGV4W19waXZvdF0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKG5leHRPcmRlckIgPiBuZXh0S2V5SW5kZXhbX3Bpdm90XSAmJiBjdXJyT3JkZXJBIDwgY3VycktleUluZGV4W19waXZvdF0pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlS2V5czsiLCJleHBvcnQgdmFyIEVOVEVSID0gJ0VOVEVSJztcbmV4cG9ydCB2YXIgVVBEQVRFID0gJ1VQREFURSc7XG5leHBvcnQgdmFyIExFQVZFID0gJ0xFQVZFJzsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFuaW1hdGUgfSBmcm9tICcuL0FuaW1hdGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb2RlR3JvdXAgfSBmcm9tICcuL05vZGVHcm91cCc7IiwiZXhwb3J0IGZ1bmN0aW9uIG51bWVyaWMoYmVnLCBlbmQpIHtcbiAgdmFyIGEgPSArYmVnO1xuICB2YXIgYiA9ICtlbmQgLSBhO1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gYSArIGIgKiB0O1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=