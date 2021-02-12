webpackHotUpdate_N_E("pages/index",{

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




function CircularProgress(_ref) {
  var _this = this;

  var fillColor = _ref.fillColor,
      outColor = _ref.outColor,
      textColor = _ref.textColor,
      percentage = _ref.percentage,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      valueStart: 0,
      valueEnd: 66,
      duration: 1.5,
      easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeQuadInOut"],
      fillColor: true,
      outColor: true,
      percentage: true,
      title: true,
      children: function children(value) {
        var roundedValue = Math.round(value);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["CircularProgressbar"], {
          value: value,
          text: "".concat(roundedValue, "%"),
          counterClockwise: true,
          strokeWidth: 15,
          styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["buildStyles"])({
            strokeLinecap: "butt",
            backgroundColor: outColor,
            textColor: textColor,
            pathColor: fillColor,
            trail: {
              stroke: outColor,
              strokeWidth: 2
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlUXVhZEluT3V0IiwidmFsdWUiLCJyb3VuZGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJidWlsZFN0eWxlcyIsInN0cm9rZUxpbmVjYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXRoQ29sb3IiLCJ0cmFpbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDZSxTQUFTQSxnQkFBVCxPQUFpRjtBQUFBOztBQUFBLE1BQXJEQyxTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDO0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQXJCQyxVQUFxQixRQUFyQkEsVUFBcUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDNUYsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxpRUFBRDtBQUNJLGdCQUFVLEVBQUUsQ0FEaEI7QUFFSSxjQUFRLEVBQUUsRUFGZDtBQUdJLGNBQVEsRUFBRSxHQUhkO0FBSUksb0JBQWMsRUFBRUMscURBSnBCO0FBS0ksZUFBUyxNQUxiO0FBS2MsY0FBUSxNQUx0QjtBQUt1QixnQkFBVSxNQUxqQztBQUtrQyxXQUFLLE1BTHZDO0FBQUEsZ0JBT0ssa0JBQUFDLEtBQUssRUFBSTtBQUNOLFlBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQVgsQ0FBckI7QUFDQSw0QkFDSSxxRUFBQyw4RUFBRDtBQUNJLGVBQUssRUFBRUEsS0FEWDtBQUVJLGNBQUksWUFBS0MsWUFBTCxNQUZSO0FBR0ksMEJBQWdCLEVBQUUsSUFIdEI7QUFJSSxxQkFBVyxFQUFFLEVBSmpCO0FBTUksZ0JBQU0sRUFBRUcsOEVBQVcsQ0FBQztBQUNoQkMseUJBQWEsRUFBRSxNQURDO0FBRWhCQywyQkFBZSxFQUFFWCxRQUZEO0FBR2hCQyxxQkFBUyxFQUFFQSxTQUhLO0FBSWhCVyxxQkFBUyxFQUFFYixTQUpLO0FBTWhCYyxpQkFBSyxFQUFFO0FBQ0hDLG9CQUFNLEVBQUVkLFFBREw7QUFFSGUseUJBQVcsRUFBRTtBQUZWO0FBTlMsV0FBRDtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBcUJIO0FBOUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXNDSDtLQXZDdUJqQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYTdhYTIxNThiMDRkN2NhZTQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciwgYnVpbGRTdHlsZXMgfSBmcm9tICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhcic7XHJcbmltcG9ydCAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyIGZyb20gXCIuL0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IHsgZWFzZVF1YWRJbk91dCwgZWFzZUNpcmNsZUluLCBlYXNlQ3ViaWNJbiwgZWFzZUJvdW5jZUluIH0gZnJvbSBcImQzLWVhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY3VsYXJQcm9ncmVzcyh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHRleHRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVFbmQ9ezY2fVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezEuNX1cclxuICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlUXVhZEluT3V0fVxyXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yIG91dENvbG9yIHBlcmNlbnRhZ2UgdGl0bGVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YCR7cm91bmRlZFZhbHVlfSVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlckNsb2Nrd2lzZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxNX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2J1aWxkU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcImJ1dHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG91dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogdGV4dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhDb2xvcjogZmlsbENvbG9yLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG91dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==