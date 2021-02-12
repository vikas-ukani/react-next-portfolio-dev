webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Extra/AnimatedProgressProvider.jsx":
/*!*******************************************************!*\
  !*** ./Components/Extra/AnimatedProgressProvider.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_move__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-move */ "./node_modules/react-move/es/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AnimatedProgressProvider = /*#__PURE__*/function (_React$Component) {
  Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimatedProgressProvider, _React$Component);

  var _super = _createSuper(AnimatedProgressProvider);

  function AnimatedProgressProvider() {
    var _this;

    Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimatedProgressProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      valuesIndex: 0
    });

    return _this;
  }

  Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimatedProgressProvider, [{
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      setInterval(function () {
        _this3.setState({
          valuesIndex: (_this3.state.valuesIndex + 1) % _this3.props.values.length
        });
      }, this.props.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.props.values[this.state.valuesIndex]);
    }
  }]);

  return AnimatedProgressProvider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimatedProgressProvider, "defaultProps", {
  interval: 1000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXIuanN4Il0sIm5hbWVzIjpbIkFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciIsInZhbHVlc0luZGV4Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJpbnRlcnZhbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLHdCOzs7Ozs7Ozs7Ozs7Ozs7O2tWQUtNO0FBQ0pDLGlCQUFXLEVBQUU7QUFEVCxLOzs7Ozs7O3dDQUlZO0FBQUE7O0FBQ2hCQyxpQkFBVyxDQUFDLFlBQU07QUFDZCxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWRixxQkFBVyxFQUFFLENBQUMsTUFBSSxDQUFDRyxLQUFMLENBQVdILFdBQVgsR0FBeUIsQ0FBMUIsSUFBK0IsTUFBSSxDQUFDSSxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDO0FBRHBELFNBQWQ7QUFHSCxPQUpVLEVBSVIsS0FBS0YsS0FBTCxDQUFXRyxRQUpILENBQVg7QUFLSDs7O3dDQUVtQjtBQUFBOztBQUNwQk4saUJBQVcsQ0FBQyxZQUFNO0FBQ2hCLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1pGLHFCQUFXLEVBQUUsQ0FBQyxNQUFJLENBQUNHLEtBQUwsQ0FBV0gsV0FBWCxHQUF5QixDQUExQixJQUErQixNQUFJLENBQUNJLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkM7QUFEbEQsU0FBZDtBQUdELE9BSlUsRUFJUixLQUFLRixLQUFMLENBQVdHLFFBSkgsQ0FBWDtBQUtEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixLQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0IsS0FBS0YsS0FBTCxDQUFXSCxXQUE3QixDQUFwQixDQUFQO0FBQ0Q7Ozs7RUEzQm9DUyw0Q0FBSyxDQUFDQyxTOzsySkFBdkNYLHdCLGtCQUNvQjtBQUNsQlEsVUFBUSxFQUFFO0FBRFEsQzs7QUE2QlhSLHVGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxNzZlZmJkYTRhZGVlOGE4MWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFuaW1hdGUgfSBmcm9tIFwicmVhY3QtbW92ZVwiO1xyXG5cclxuY2xhc3MgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaW50ZXJ2YWw6IDEwMDBcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWVzSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc0luZGV4OiAodGhpcy5zdGF0ZS52YWx1ZXNJbmRleCArIDEpICUgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB2YWx1ZXNJbmRleDogKHRoaXMuc3RhdGUudmFsdWVzSW5kZXggKyAxKSAlIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aFxyXG4gICAgICB9KTtcclxuICAgIH0sIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5zdGF0ZS52YWx1ZXNJbmRleF0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9