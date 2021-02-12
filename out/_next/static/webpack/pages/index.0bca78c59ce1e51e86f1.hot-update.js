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
      percentage = _ref.percentage,
      title = _ref.title;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    valueStart: 0,
    valueEnd: 66,
    duration: 1.4,
    easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeQuadInOut"],
    repeat: true,
    children: function children(value) {
      var roundedValue = Math.round(value);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["CircularProgressbar"], {
        value: value,
        text: "".concat(roundedValue, "%")
        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
        ,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["buildStyles"])({
          pathTransition: ""
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlUXVhZEluT3V0IiwidmFsdWUiLCJyb3VuZGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJidWlsZFN0eWxlcyIsInBhdGhUcmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7Q0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxnQkFBVCxPQUFzRTtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFVBQXFCLFFBQXJCQSxVQUFxQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDakY7QUFBQSx1RUFBQyxpRUFBRDtBQUNJLGNBQVUsRUFBRSxDQURoQjtBQUVJLFlBQVEsRUFBRSxFQUZkO0FBR0ksWUFBUSxFQUFFLEdBSGQ7QUFJSSxrQkFBYyxFQUFFQyxxREFKcEI7QUFLSSxVQUFNLE1BTFY7QUFBQSxjQU9LLGtCQUFBQyxLQUFLLEVBQUk7QUFDTixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFYLENBQXJCO0FBQ0EsMEJBQ0kscUVBQUMsOEVBQUQ7QUFDSSxhQUFLLEVBQUVBLEtBRFg7QUFFSSxZQUFJLFlBQUtDLFlBQUw7QUFDSjtBQUNwQjtBQUpnQjtBQUtJLGNBQU0sRUFBRUcsOEVBQVcsQ0FBQztBQUFFQyx3QkFBYyxFQUFFO0FBQWxCLFNBQUQ7QUFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0g7QUFsQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CSDtLQXJCdUJYLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiY2E3OGM1OWNlMWU1MWU4NmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzYmFyLCBidWlsZFN0eWxlcyB9IGZyb20gJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyJztcclxuaW1wb3J0ICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbmltcG9ydCBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXIgZnJvbSBcIi4vQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBlYXNlUXVhZEluT3V0LCAgfSBmcm9tIFwiZDMtZWFzZVwiO1xyXG5cclxuLy8gY29uc3QgQ2lyY3VsYXJQcm9ncmVzcyA9ICh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHBlcmNlbnRhZ2UsIHRpdGxlIH0pID0+IHtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzYmFyXHJcbi8vICAgICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2U9e3RydWV9IHN0cm9rZVdpZHRoPXsxNX0gdmFsdWU9e3BlcmNlbnRhZ2V9XHJcbi8vICAgICAgICAgICAgIHRleHQ9e2Ake3BlcmNlbnRhZ2V9JWB9XHJcbi8vICAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlQmFja0luKCl9XHJcblxyXG4vLyAgICAgICAgICAgICBzdHlsZXM9e3tcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgcm9vdCBzdmcgZWxlbWVudFxyXG4vLyAgICAgICAgICAgICAgICAgcm9vdDoge30sXHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIHBhdGgsIGkuZS4gdGhlIFwiY29tcGxldGVkIHByb2dyZXNzXCJcclxuLy8gICAgICAgICAgICAgICAgIHBhdGg6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGByZ2JhKDYyLCAxNTIsIDE5OSwgJHtwZXJjZW50YWdlIC8gMTAwfSlgLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIGNpcmNsZSBiZWhpbmQgdGhlIHBhdGgsIGkuZS4gdGhlIFwidG90YWwgcHJvZ3Jlc3NcIlxyXG4vLyAgICAgICAgICAgICAgICAgdHJhaWw6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUcmFpbCBjb2xvclxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyNkNmQ2ZDYnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFdoZXRoZXIgdG8gdXNlIHJvdW5kZWQgb3IgZmxhdCBjb3JuZXJzIG9uIHRoZSBlbmRzIC0gY2FuIHVzZSAnYnV0dCcgb3IgJ3JvdW5kJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGUgdGhlIHRyYWlsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDAuMjV0dXJuKScsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgdGV4dDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRleHQgY29sb3JcclxuLy8gICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2Y4OCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBzaXplXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfX0gLz5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ2lyY3VsYXJQcm9ncmVzcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3MoeyBmaWxsQ29sb3IsIG91dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSB7XHJcbiAgICA8QW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXHJcbiAgICAgICAgdmFsdWVTdGFydD17MH1cclxuICAgICAgICB2YWx1ZUVuZD17NjZ9XHJcbiAgICAgICAgZHVyYXRpb249ezEuNH1cclxuICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZVF1YWRJbk91dH1cclxuICAgICAgICByZXBlYXRcclxuICAgID5cclxuICAgICAgICB7dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2Ake3JvdW5kZWRWYWx1ZX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAvKiBUaGlzIGlzIGltcG9ydGFudCB0byBpbmNsdWRlLCBiZWNhdXNlIGlmIHlvdSdyZSBmdWxseSBtYW5hZ2luZyB0aGVcclxuICAgICAgICAgICAgICBhbmltYXRpb24geW91cnNlbGYsIHlvdSdsbCB3YW50IHRvIGRpc2FibGUgdGhlIENTUyBhbmltYXRpb24uICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtidWlsZFN0eWxlcyh7IHBhdGhUcmFuc2l0aW9uOiBcIlwiIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgPC9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXI+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==