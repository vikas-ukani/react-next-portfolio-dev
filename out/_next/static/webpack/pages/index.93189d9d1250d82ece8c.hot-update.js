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
      valuesIndex: 0,
      isAnimated: true
    });

    return _this;
  }

  Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimatedProgressProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          valuesIndex: (_this2.state.valuesIndex + 1) % _this2.props.values.length
        });
      }, this.props.interval);
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
          return _this3.props.children(_this3.props.values[_this3.state.valuesIndex]);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXIuanN4Il0sIm5hbWVzIjpbIkFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciIsInVuZGVmaW5lZCIsInZhbHVlc0luZGV4IiwiaXNBbmltYXRlZCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByb3BzIiwidmFsdWVzIiwibGVuZ3RoIiwiaW50ZXJ2YWwiLCJ3aW5kb3ciLCJjbGVhckludGVydmFsIiwidmFsdWUiLCJ2YWx1ZVN0YXJ0IiwidmFsdWVFbmQiLCJ0aW1pbmciLCJkdXJhdGlvbiIsImVhc2UiLCJlYXNpbmdGdW5jdGlvbiIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSx3Qjs7Ozs7Ozs7Ozs7Ozs7OztxVkFDU0MsUzs7a1ZBRUg7QUFDSkMsaUJBQVcsRUFBRSxDQURUO0FBRUpDLGdCQUFVLEVBQUU7QUFGUixLOzs7Ozs7O3dDQVNZO0FBQUE7O0FBQ2hCQyxpQkFBVyxDQUFDLFlBQU07QUFDZCxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWSCxxQkFBVyxFQUFFLENBQUMsTUFBSSxDQUFDSSxLQUFMLENBQVdKLFdBQVgsR0FBeUIsQ0FBMUIsSUFBK0IsTUFBSSxDQUFDSyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDO0FBRHBELFNBQWQ7QUFHSCxPQUpVLEVBSVIsS0FBS0YsS0FBTCxDQUFXRyxRQUpILENBQVg7QUFLSDs7OzJDQUVzQjtBQUNuQkMsWUFBTSxDQUFDQyxhQUFQLENBQXFCLEtBQUtGLFFBQTFCO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUNMLDBCQUNJLHFFQUFDLGtEQUFEO0FBQ0ksYUFBSyxFQUFFO0FBQUEsaUJBQU87QUFDVkcsaUJBQUssRUFBRSxNQUFJLENBQUNOLEtBQUwsQ0FBV087QUFEUixXQUFQO0FBQUEsU0FEWDtBQUlJLGNBQU0sRUFBRTtBQUFBLGlCQUFPO0FBQ1hELGlCQUFLLEVBQUUsQ0FDSCxNQUFJLENBQUNQLEtBQUwsQ0FBV0gsVUFBWCxHQUF3QixNQUFJLENBQUNJLEtBQUwsQ0FBV1EsUUFBbkMsR0FBOEMsTUFBSSxDQUFDUixLQUFMLENBQVdPLFVBRHRELENBREk7QUFJWEUsa0JBQU0sRUFBRTtBQUNKQyxzQkFBUSxFQUFFLE1BQUksQ0FBQ1YsS0FBTCxDQUFXVSxRQUFYLEdBQXNCLElBRDVCO0FBRUpDLGtCQUFJLEVBQUUsTUFBSSxDQUFDWCxLQUFMLENBQVdZO0FBRmI7QUFKRyxXQUFQO0FBQUEsU0FKWjtBQUFBLGtCQWNLO0FBQUEsY0FBR04sS0FBSCxRQUFHQSxLQUFIO0FBQUEsaUJBQ0csTUFBSSxDQUFDTixLQUFMLENBQVdhLFFBQVgsQ0FBb0IsTUFBSSxDQUFDYixLQUFMLENBQVdDLE1BQVgsQ0FBa0IsTUFBSSxDQUFDRixLQUFMLENBQVdKLFdBQTdCLENBQXBCLENBREg7QUFBQTtBQWRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW9CSDs7OztFQTdDa0NtQiw0Q0FBSyxDQUFDQyxTOzsySkFBdkN0Qix3QixrQkFRb0I7QUFDbEJjLFlBQVUsRUFBRTtBQURNLEM7O0FBd0NYZCx1RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MzE4OWQ5ZDEyNTBkODJlY2U4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcInJlYWN0LW1vdmVcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBpbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZXNJbmRleDogMCxcclxuICAgICAgICBpc0FuaW1hdGVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgdmFsdWVTdGFydDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzSW5kZXg6ICh0aGlzLnN0YXRlLnZhbHVlc0luZGV4ICsgMSkgJSB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbmltYXRlXHJcbiAgICAgICAgICAgICAgICBzdGFydD17KCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVN0YXJ0XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZT17KCkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQW5pbWF0ZWQgPyB0aGlzLnByb3BzLnZhbHVlRW5kIDogdGhpcy5wcm9wcy52YWx1ZVN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1pbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiB0aGlzLnByb3BzLmVhc2luZ0Z1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyB2YWx1ZSB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5zdGF0ZS52YWx1ZXNJbmRleF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=