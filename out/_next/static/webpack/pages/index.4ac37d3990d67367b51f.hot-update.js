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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXIuanN4Il0sIm5hbWVzIjpbIkFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciIsInVuZGVmaW5lZCIsImlzQW5pbWF0ZWQiLCJwcm9wcyIsInJlcGVhdCIsImludGVydmFsIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZHVyYXRpb24iLCJjbGVhckludGVydmFsIiwidmFsdWUiLCJ2YWx1ZVN0YXJ0IiwidmFsdWVFbmQiLCJ0aW1pbmciLCJlYXNlIiwiZWFzaW5nRnVuY3Rpb24iLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7cVZBQ09DLFM7O2tWQUVIO0FBQ05DLGdCQUFVLEVBQUU7QUFETixLOzs7Ozs7O3dDQVFZO0FBQUE7O0FBQ2xCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxNQUFmLEVBQXVCO0FBQ3JCLGFBQUtDLFFBQUwsR0FBZ0JDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQixZQUFNO0FBQ3ZDLGdCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNaTixzQkFBVSxFQUFFLENBQUMsTUFBSSxDQUFDTyxLQUFMLENBQVdQO0FBRFosV0FBZDtBQUdELFNBSmUsRUFJYixLQUFLQyxLQUFMLENBQVdPLFFBQVgsR0FBc0IsSUFKVCxDQUFoQjtBQUtELE9BTkQsTUFNTztBQUNMLGFBQUtGLFFBQUwsQ0FBYztBQUNaTixvQkFBVSxFQUFFLENBQUMsS0FBS08sS0FBTCxDQUFXUDtBQURaLFNBQWQ7QUFHRDtBQUNGOzs7MkNBRXNCO0FBQ3JCSSxZQUFNLENBQUNLLGFBQVAsQ0FBcUIsS0FBS04sUUFBMUI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsMEJBQ0UscUVBQUMsa0RBQUQ7QUFDRSxhQUFLLEVBQUU7QUFBQSxpQkFBTztBQUNaTyxpQkFBSyxFQUFFLE1BQUksQ0FBQ1QsS0FBTCxDQUFXVTtBQUROLFdBQVA7QUFBQSxTQURUO0FBSUUsY0FBTSxFQUFFO0FBQUEsaUJBQU87QUFDYkQsaUJBQUssRUFBRSxDQUNMLE1BQUksQ0FBQ0gsS0FBTCxDQUFXUCxVQUFYLEdBQXdCLE1BQUksQ0FBQ0MsS0FBTCxDQUFXVyxRQUFuQyxHQUE4QyxNQUFJLENBQUNYLEtBQUwsQ0FBV1UsVUFEcEQsQ0FETTtBQUliRSxrQkFBTSxFQUFFO0FBQ05MLHNCQUFRLEVBQUUsTUFBSSxDQUFDUCxLQUFMLENBQVdPLFFBQVgsR0FBc0IsSUFEMUI7QUFFTk0sa0JBQUksRUFBRSxNQUFJLENBQUNiLEtBQUwsQ0FBV2M7QUFGWDtBQUpLLFdBQVA7QUFBQSxTQUpWO0FBQUEsa0JBY0c7QUFBQSxjQUFHTCxLQUFILFFBQUdBLEtBQUg7QUFBQSxpQkFBZSxNQUFJLENBQUNULEtBQUwsQ0FBV2UsUUFBWCxDQUFvQk4sS0FBcEIsQ0FBZjtBQUFBO0FBZEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBa0JEOzs7O0VBaERvQ08sNENBQUssQ0FBQ0MsUzs7MkpBQXZDcEIsd0Isa0JBT2tCO0FBQ3BCYSxZQUFVLEVBQUU7QUFEUSxDOztBQTRDVGIsdUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFjMzdkMzk5MGQ2NzM2N2I1MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZSB9IGZyb20gXCJyZWFjdC1tb3ZlXCI7XHJcblxyXG5jbGFzcyBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGludGVydmFsID0gdW5kZWZpbmVkO1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlzQW5pbWF0ZWQ6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlU3RhcnQ6IDBcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnJlcGVhdCkge1xyXG4gICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzQW5pbWF0ZWQ6ICF0aGlzLnN0YXRlLmlzQW5pbWF0ZWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNBbmltYXRlZDogIXRoaXMuc3RhdGUuaXNBbmltYXRlZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QW5pbWF0ZVxyXG4gICAgICAgIHN0YXJ0PXsoKSA9PiAoe1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVTdGFydFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHVwZGF0ZT17KCkgPT4gKHtcclxuICAgICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBbmltYXRlZCA/IHRoaXMucHJvcHMudmFsdWVFbmQgOiB0aGlzLnByb3BzLnZhbHVlU3RhcnRcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB0aW1pbmc6IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwLFxyXG4gICAgICAgICAgICBlYXNlOiB0aGlzLnByb3BzLmVhc2luZ0Z1bmN0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgdmFsdWUgfSkgPT4gdGhpcy5wcm9wcy5jaGlsZHJlbih2YWx1ZSl9XHJcbiAgICAgIDwvQW5pbWF0ZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=