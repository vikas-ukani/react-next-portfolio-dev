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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlUXVhZEluT3V0IiwidmFsdWUiLCJyb3VuZGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJidWlsZFN0eWxlcyIsInBhdGhUcmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7Q0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxnQkFBVCxPQUFzRTtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFVBQXFCLFFBQXJCQSxVQUFxQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDakY7QUFBQSx1RUFBQyxpRUFBRDtBQUNJLGNBQVUsRUFBRSxDQURoQjtBQUVJLFlBQVEsRUFBRSxFQUZkO0FBR0ksWUFBUSxFQUFFLEdBSGQ7QUFJSSxrQkFBYyxFQUFFQyxxREFKcEI7QUFLSSxVQUFNLE1BTFY7QUFBQSxjQU9LLGtCQUFBQyxLQUFLLEVBQUk7QUFDTixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFYLENBQXJCO0FBQ0EsMEJBQ0kscUVBQUMsOEVBQUQ7QUFDSSxhQUFLLEVBQUVBLEtBRFg7QUFFSSxZQUFJLFlBQUtDLFlBQUw7QUFDSjtBQUNwQjtBQUpnQjtBQUtJLGNBQU0sRUFBRUcsOEVBQVcsQ0FBQztBQUFFQyx3QkFBYyxFQUFFO0FBQWxCLFNBQUQ7QUFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0g7QUFsQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CSDtLQXJCdUJYLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5ZjEzOTQ2N2EwOWU0NDc5ZDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzYmFyLCBidWlsZFN0eWxlcyB9IGZyb20gJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyJztcclxuaW1wb3J0ICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbmltcG9ydCBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXIgZnJvbSBcIi4vQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBlYXNlUXVhZEluT3V0LCBlYXNlIH0gZnJvbSBcImQzLWVhc2VcIjtcclxuXHJcbi8vIGNvbnN0IENpcmN1bGFyUHJvZ3Jlc3MgPSAoeyBmaWxsQ29sb3IsIG91dENvbG9yLCBwZXJjZW50YWdlLCB0aXRsZSB9KSA9PiB7XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4vLyAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfSBzdHJva2VXaWR0aD17MTV9IHZhbHVlPXtwZXJjZW50YWdlfVxyXG4vLyAgICAgICAgICAgICB0ZXh0PXtgJHtwZXJjZW50YWdlfSVgfVxyXG4vLyAgICAgICAgICAgICBlYXNpbmdGdW5jdGlvbj17ZWFzZUJhY2tJbigpfVxyXG5cclxuLy8gICAgICAgICAgICAgc3R5bGVzPXt7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIHJvb3Qgc3ZnIGVsZW1lbnRcclxuLy8gICAgICAgICAgICAgICAgIHJvb3Q6IHt9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBwYXRoLCBpLmUuIHRoZSBcImNvbXBsZXRlZCBwcm9ncmVzc1wiXHJcbi8vICAgICAgICAgICAgICAgICBwYXRoOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBgcmdiYSg2MiwgMTUyLCAxOTksICR7cGVyY2VudGFnZSAvIDEwMH0pYCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSBjaXJjbGUgYmVoaW5kIHRoZSBwYXRoLCBpLmUuIHRoZSBcInRvdGFsIHByb2dyZXNzXCJcclxuLy8gICAgICAgICAgICAgICAgIHRyYWlsOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVHJhaWwgY29sb3JcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICcjZDZkNmQ2JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIHVzZSByb3VuZGVkIG9yIGZsYXQgY29ybmVycyBvbiB0aGUgZW5kcyAtIGNhbiB1c2UgJ2J1dHQnIG9yICdyb3VuZCdcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gUm90YXRlIHRoZSB0cmFpbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwLjI1dHVybiknLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHRleHQ6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IGNvbG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNmODgnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRleHQgc2l6ZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH19IC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzKHsgZmlsbENvbG9yLCBvdXRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkge1xyXG4gICAgPEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclxyXG4gICAgICAgIHZhbHVlU3RhcnQ9ezB9XHJcbiAgICAgICAgdmFsdWVFbmQ9ezY2fVxyXG4gICAgICAgIGR1cmF0aW9uPXsxLjR9XHJcbiAgICAgICAgZWFzaW5nRnVuY3Rpb249e2Vhc2VRdWFkSW5PdXR9XHJcbiAgICAgICAgcmVwZWF0XHJcbiAgICA+XHJcbiAgICAgICAge3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgJHtyb3VuZGVkVmFsdWV9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogVGhpcyBpcyBpbXBvcnRhbnQgdG8gaW5jbHVkZSwgYmVjYXVzZSBpZiB5b3UncmUgZnVsbHkgbWFuYWdpbmcgdGhlXHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uIHlvdXJzZWxmLCB5b3UnbGwgd2FudCB0byBkaXNhYmxlIHRoZSBDU1MgYW5pbWF0aW9uLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoeyBwYXRoVHJhbnNpdGlvbjogXCJcIiB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=