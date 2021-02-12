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
        lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXIuanN4Il0sIm5hbWVzIjpbIkFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciIsInVuZGVmaW5lZCIsInZhbHVlc0luZGV4IiwiaXNBbmltYXRlZCIsInByb3BzIiwicmVwZWF0IiwiaW50ZXJ2YWwiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwic3RhdGUiLCJkdXJhdGlvbiIsInZhbHVlcyIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJ2YWx1ZSIsInZhbHVlU3RhcnQiLCJ2YWx1ZUVuZCIsInRpbWluZyIsImVhc2UiLCJlYXNpbmdGdW5jdGlvbiIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSx3Qjs7Ozs7Ozs7Ozs7Ozs7OztxVkFDU0MsUzs7a1ZBRUg7QUFDSkMsaUJBQVcsRUFBRSxDQURUO0FBRUpDLGdCQUFVLEVBQUU7QUFGUixLOzs7Ozs7O3dDQVNZO0FBQUE7O0FBQ2hCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxNQUFmLEVBQXVCO0FBQ25CLGFBQUtDLFFBQUwsR0FBZ0JDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQixZQUFNO0FBQ3JDLGdCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWTixzQkFBVSxFQUFFLENBQUMsTUFBSSxDQUFDTyxLQUFMLENBQVdQO0FBRGQsV0FBZDtBQUdILFNBSmUsRUFJYixLQUFLQyxLQUFMLENBQVdPLFFBQVgsR0FBc0IsSUFKVCxDQUFoQjtBQUtILE9BTkQsTUFNTztBQUNILGFBQUtGLFFBQUwsQ0FBYztBQUNWTixvQkFBVSxFQUFFLENBQUMsS0FBS08sS0FBTCxDQUFXUDtBQURkLFNBQWQ7QUFHSDs7QUFDREssaUJBQVcsQ0FBQyxZQUFNO0FBQ2QsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFDVlAscUJBQVcsRUFBRSxDQUFDLE1BQUksQ0FBQ1EsS0FBTCxDQUFXUixXQUFYLEdBQXlCLENBQTFCLElBQStCLE1BQUksQ0FBQ0UsS0FBTCxDQUFXUSxNQUFYLENBQWtCQztBQURwRCxTQUFkO0FBR0gsT0FKVSxFQUlSLEtBQUtULEtBQUwsQ0FBV0UsUUFKSCxDQUFYO0FBS0g7OzsyQ0FFc0I7QUFDbkJDLFlBQU0sQ0FBQ08sYUFBUCxDQUFxQixLQUFLUixRQUExQjtBQUNIOzs7NkJBRVE7QUFBQTs7QUFDTCwwQkFDSSxxRUFBQyxrREFBRDtBQUNJLGFBQUssRUFBRTtBQUFBLGlCQUFPO0FBQ1ZTLGlCQUFLLEVBQUUsTUFBSSxDQUFDWCxLQUFMLENBQVdZO0FBRFIsV0FBUDtBQUFBLFNBRFg7QUFJSSxjQUFNLEVBQUU7QUFBQSxpQkFBTztBQUNYRCxpQkFBSyxFQUFFLENBQ0gsTUFBSSxDQUFDTCxLQUFMLENBQVdQLFVBQVgsR0FBd0IsTUFBSSxDQUFDQyxLQUFMLENBQVdhLFFBQW5DLEdBQThDLE1BQUksQ0FBQ2IsS0FBTCxDQUFXWSxVQUR0RCxDQURJO0FBSVhFLGtCQUFNLEVBQUU7QUFDSlAsc0JBQVEsRUFBRSxNQUFJLENBQUNQLEtBQUwsQ0FBV08sUUFBWCxHQUFzQixJQUQ1QjtBQUVKUSxrQkFBSSxFQUFFLE1BQUksQ0FBQ2YsS0FBTCxDQUFXZ0I7QUFGYjtBQUpHLFdBQVA7QUFBQSxTQUpaO0FBQUEsa0JBY0s7QUFBQSxjQUFHTCxLQUFILFFBQUdBLEtBQUg7QUFBQSxpQkFDRyxNQUFJLENBQUNYLEtBQUwsQ0FBV2lCLFFBQVgsQ0FBb0IsTUFBSSxDQUFDakIsS0FBTCxDQUFXUSxNQUFYLENBQWtCLE1BQUksQ0FBQ0YsS0FBTCxDQUFXUixXQUE3QixDQUFwQixDQURIO0FBQUE7QUFkTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFvQkg7Ozs7RUF4RGtDb0IsNENBQUssQ0FBQ0MsUzs7MkpBQXZDdkIsd0Isa0JBUW9CO0FBQ2xCZ0IsWUFBVSxFQUFFO0FBRE0sQzs7QUFtRFhoQix1RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYTZhNTVhMTMyMTE4NzFkNTI2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBbmltYXRlIH0gZnJvbSBcInJlYWN0LW1vdmVcIjtcclxuXHJcbmNsYXNzIEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBpbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZXNJbmRleDogMCxcclxuICAgICAgICBpc0FuaW1hdGVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgdmFsdWVTdGFydDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBlYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGVkOiAhdGhpcy5zdGF0ZS5pc0FuaW1hdGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNBbmltYXRlZDogIXRoaXMuc3RhdGUuaXNBbmltYXRlZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc0luZGV4OiAodGhpcy5zdGF0ZS52YWx1ZXNJbmRleCArIDEpICUgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgc3RhcnQ9eygpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVTdGFydFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGU9eygpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0FuaW1hdGVkID8gdGhpcy5wcm9wcy52YWx1ZUVuZCA6IHRoaXMucHJvcHMudmFsdWVTdGFydFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogdGhpcy5wcm9wcy5lYXNpbmdGdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgdmFsdWUgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMucHJvcHMudmFsdWVzW3RoaXMuc3RhdGUudmFsdWVzSW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9BbmltYXRlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==