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
      valueEnd: percentage,
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
            trailColor: outColor,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlUXVhZEluT3V0IiwidmFsdWUiLCJyb3VuZGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJidWlsZFN0eWxlcyIsInN0cm9rZUxpbmVjYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXRoQ29sb3IiLCJ0cmFpbENvbG9yIiwidHJhaWwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ2UsU0FBU0EsZ0JBQVQsT0FBaUY7QUFBQTs7QUFBQSxNQUFyREMsU0FBcUQsUUFBckRBLFNBQXFEO0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsVUFBcUIsUUFBckJBLFVBQXFCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVGLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsaUVBQUQ7QUFDSSxnQkFBVSxFQUFFLENBRGhCO0FBRUksY0FBUSxFQUFFRCxVQUZkO0FBR0ksY0FBUSxFQUFFLEdBSGQ7QUFJSSxvQkFBYyxFQUFFRSxxREFKcEI7QUFLSSxlQUFTLE1BTGI7QUFLYyxjQUFRLE1BTHRCO0FBS3VCLGdCQUFVLE1BTGpDO0FBS2tDLFdBQUssTUFMdkM7QUFBQSxnQkFPSyxrQkFBQUMsS0FBSyxFQUFJO0FBQ04sWUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBWCxDQUFyQjtBQUNBLDRCQUNJLHFFQUFDLDhFQUFEO0FBQ0ksZUFBSyxFQUFFQSxLQURYO0FBRUksY0FBSSxZQUFLQyxZQUFMLE1BRlI7QUFHSSwwQkFBZ0IsRUFBRSxJQUh0QjtBQUlJLHFCQUFXLEVBQUUsRUFKakI7QUFNSSxnQkFBTSxFQUFFRyw4RUFBVyxDQUFDO0FBQ2hCQyx5QkFBYSxFQUFFLE1BREM7QUFFaEJDLDJCQUFlLEVBQUVYLFFBRkQ7QUFHaEJDLHFCQUFTLEVBQUVBLFNBSEs7QUFJaEJXLHFCQUFTLEVBQUViLFNBSks7QUFLaEJjLHNCQUFVLEVBQUViLFFBTEk7QUFNaEJjLGlCQUFLLEVBQUU7QUFDSEMsb0JBQU0sRUFBRWYsUUFETDtBQUVIZ0IseUJBQVcsRUFBRTtBQUZWO0FBTlMsV0FBRDtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBcUJIO0FBOUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXNDSDtLQXZDdUJsQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YWI0ODVhNTRiZWZkODYzZWE1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciwgYnVpbGRTdHlsZXMgfSBmcm9tICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhcic7XHJcbmltcG9ydCAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyIGZyb20gXCIuL0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IHsgZWFzZVF1YWRJbk91dCwgZWFzZUNpcmNsZUluLCBlYXNlQ3ViaWNJbiwgZWFzZUJvdW5jZUluIH0gZnJvbSBcImQzLWVhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY3VsYXJQcm9ncmVzcyh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHRleHRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVFbmQ9e3BlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17MS41fVxyXG4gICAgICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb249e2Vhc2VRdWFkSW5PdXR9XHJcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3Igb3V0Q29sb3IgcGVyY2VudGFnZSB0aXRsZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgJHtyb3VuZGVkVmFsdWV9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezE1fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogb3V0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aENvbG9yOiBmaWxsQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxDb2xvcjogb3V0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBvdXRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA8L0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlcj5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=