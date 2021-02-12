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
      var roundedValue = Math.round(value);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlQm91bmNlSW4iLCJ2YWx1ZSIsInJvdW5kZWRWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsImJ1aWxkU3R5bGVzIiwic3Ryb2tlTGluZWNhcCIsImJhY2tncm91bmRDb2xvciIsInBhdGhDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0NBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FBaUY7QUFBQTs7QUFBQSxNQUFyREMsU0FBcUQsUUFBckRBLFNBQXFEO0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsVUFBcUIsUUFBckJBLFVBQXFCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVGLHNCQUNJLHFFQUFDLGlFQUFEO0FBQ0ksY0FBVSxFQUFFLENBRGhCO0FBRUksWUFBUSxFQUFFLEVBRmQ7QUFHSSxZQUFRLEVBQUUsR0FIZDtBQUlJLGtCQUFjLEVBQUVDLG9EQUpwQjtBQUtJLFVBQU0sTUFMVjtBQU1JLGFBQVMsTUFOYjtBQU1jLFlBQVEsTUFOdEI7QUFNdUIsY0FBVSxNQU5qQztBQU1rQyxTQUFLLE1BTnZDO0FBQUEsY0FRSyxrQkFBQUMsS0FBSyxFQUFJO0FBQ04sVUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBWCxDQUFyQjtBQUNBLDBCQUNJLHFFQUFDLDhFQUFEO0FBQ0ksYUFBSyxFQUFFSCxVQURYO0FBRUksWUFBSSxZQUFLSSxZQUFMLE1BRlI7QUFHSSxtQkFBVyxFQUFFLEVBSGpCO0FBSUksd0JBQWdCLEVBQUU7QUFDbEI7QUFDeEI7QUFOb0I7QUFPSSxjQUFNLEVBQUVHLDhFQUFXLENBQUM7QUFDaEJDLHVCQUFhLEVBQUUsTUFEQztBQUVoQkMseUJBQWUsRUFBRVgsUUFGRDtBQUdoQkMsbUJBQVMsRUFBRUEsU0FISztBQUloQlcsbUJBQVMsRUFBRWI7QUFKSyxTQUFEO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlCSDtBQTNCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQkg7S0FoQ3VCRCxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjg5MGVkNzA1ZDJjZTMxOTAxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciwgYnVpbGRTdHlsZXMgfSBmcm9tICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhcic7XHJcbmltcG9ydCAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyIGZyb20gXCIuL0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IHsgZWFzZVF1YWRJbk91dCwgZWFzZUNpcmNsZUluLCBlYXNlQ3ViaWNJbiwgZWFzZUJvdW5jZUluIH0gZnJvbSBcImQzLWVhc2VcIjtcclxuXHJcbi8vIGNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoeyBmaWxsQ29sb3IsIG91dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSA9PiB7XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4vLyAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfSBzdHJva2VXaWR0aD17MTV9IHZhbHVlPXtwZXJjZW50YWdlfVxyXG4vLyAgICAgICAgICAgICB0ZXh0PXtgJHtwZXJjZW50YWdlfSVgfVxyXG4vLyAgICAgICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZUJhY2tJbigpfVxyXG5cclxuLy8gICAgICAgICAgICAgc3R5bGVzPXt7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIHJvb3Qgc3ZnIGVsZW1lbnRcclxuLy8gICAgICAgICAgICAgICAgIHJvb3Q6IHt9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBwYXRoLCBpLmUuIHRoZSBcImNvbXBsZXRlZCBwcm9ncmVzc1wiXHJcbi8vICAgICAgICAgICAgICAgICBwYXRoOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBgcmdiYSg2MiwgMTUyLCAxOTksICR7cGVyY2VudGFnZSAvIDEwMH0pYCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBjaXJjbGUgYmVoaW5kIHRoZSBwYXRoLCBpLmUuIHRoZSBcInRvdGFsIHByb2dyZXNzXCJcclxuLy8gICAgICAgICAgICAgICAgIHRyYWlsOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVHJhaWwgY29sb3JcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjZDZkNmQ2JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIHVzZSByb3VuZGVkIG9yIGZsYXQgY29ybmVycyBvbiB0aGUgZW5kcyAtIGNhbiB1c2UgJ2J1dHQnIG9yICdyb3VuZCdcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUm90YXRlIHRoZSB0cmFpbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwLjI1dHVybiknLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHRleHQ6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IGNvbG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNmODgnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRleHQgc2l6ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH19IC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzKHsgZmlsbENvbG9yLCBvdXRDb2xvciwgdGV4dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBbmltYXRlZFByb2dyZXNzUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWVTdGFydD17MH1cclxuICAgICAgICAgICAgdmFsdWVFbmQ9ezY2fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17MS40fVxyXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZUJvdW5jZUlufVxyXG4gICAgICAgICAgICByZXBlYXRcclxuICAgICAgICAgICAgZmlsbENvbG9yIG91dENvbG9yIHBlcmNlbnRhZ2UgdGl0bGVcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2Ake3JvdW5kZWRWYWx1ZX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBUaGlzIGlzIGltcG9ydGFudCB0byBpbmNsdWRlLCBiZWNhdXNlIGlmIHlvdSdyZSBmdWxseSBtYW5hZ2luZyB0aGVcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uIHlvdXJzZWxmLCB5b3UnbGwgd2FudCB0byBkaXNhYmxlIHRoZSBDU1MgYW5pbWF0aW9uLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2J1aWxkU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvdXRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogdGV4dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aENvbG9yOiBmaWxsQ29sb3IsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L0FuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9