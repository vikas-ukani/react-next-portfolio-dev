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
    easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeBounceIn"] // repeat
    ,
    fillColor: true,
    outColor: true,
    percentage: true,
    title: true // values={[0, roundedValue]}
    ,
    children: function children(value) {
      var roundedValue = Math.round(percentage);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["CircularProgressbar"], {
        value: values,
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
        lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlQm91bmNlSW4iLCJ2YWx1ZSIsInJvdW5kZWRWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInZhbHVlcyIsImJ1aWxkU3R5bGVzIiwic3Ryb2tlTGluZWNhcCIsImJhY2tncm91bmRDb2xvciIsInBhdGhDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0NBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FBaUY7QUFBQTs7QUFBQSxNQUFyREMsU0FBcUQsUUFBckRBLFNBQXFEO0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQkMsVUFBcUIsUUFBckJBLFVBQXFCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVGLHNCQUNJLHFFQUFDLGlFQUFEO0FBQ0ksY0FBVSxFQUFFLENBRGhCO0FBRUksWUFBUSxFQUFFLEVBRmQ7QUFHSSxZQUFRLEVBQUUsR0FIZDtBQUlJLGtCQUFjLEVBQUVDLG9EQUpwQixDQUtJO0FBTEo7QUFNSSxhQUFTLE1BTmI7QUFNYyxZQUFRLE1BTnRCO0FBTXVCLGNBQVUsTUFOakM7QUFNa0MsU0FBSyxNQU52QyxDQU9BO0FBUEE7QUFBQSxjQVNLLGtCQUFBQyxLQUFLLEVBQUk7QUFDTixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixVQUFYLENBQXJCO0FBRUEsMEJBQ0kscUVBQUMsOEVBQUQ7QUFDSSxhQUFLLEVBQUVPLE1BRFg7QUFFSSxZQUFJLFlBQUtILFlBQUwsTUFGUjtBQUdJLG1CQUFXLEVBQUUsRUFIakI7QUFJSSx3QkFBZ0IsRUFBRTtBQUNsQjtBQUN4QjtBQU5vQjtBQU9JLGNBQU0sRUFBRUksOEVBQVcsQ0FBQztBQUNoQkMsdUJBQWEsRUFBRSxNQURDO0FBRWhCQyx5QkFBZSxFQUFFWixRQUZEO0FBR2hCQyxtQkFBUyxFQUFFQSxTQUhLO0FBSWhCWSxtQkFBUyxFQUFFZDtBQUpLLFNBQUQ7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJIO0FBN0JMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlDSDtLQWxDdUJELGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1ZjcxZjZiMDUwOGEyMWVjZTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzYmFyLCBidWlsZFN0eWxlcyB9IGZyb20gJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyJztcclxuaW1wb3J0ICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbmltcG9ydCBBbmltYXRlZFByb2dyZXNzUHJvdmlkZXIgZnJvbSBcIi4vQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBlYXNlUXVhZEluT3V0LCBlYXNlQ2lyY2xlSW4sIGVhc2VDdWJpY0luLCBlYXNlQm91bmNlSW4gfSBmcm9tIFwiZDMtZWFzZVwiO1xyXG5cclxuLy8gY29uc3QgQ2lyY3VsYXJQcm9ncmVzcyA9ICh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHBlcmNlbnRhZ2UsIHRpdGxlIH0pID0+IHtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzYmFyXHJcbi8vICAgICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2U9e3RydWV9IHN0cm9rZVdpZHRoPXsxNX0gdmFsdWU9e3BlcmNlbnRhZ2V9XHJcbi8vICAgICAgICAgICAgIHRleHQ9e2Ake3BlcmNlbnRhZ2V9JWB9XHJcbi8vICAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlQmFja0luKCl9XHJcblxyXG4vLyAgICAgICAgICAgICBzdHlsZXM9e3tcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgcm9vdCBzdmcgZWxlbWVudFxyXG4vLyAgICAgICAgICAgICAgICAgcm9vdDoge30sXHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIHBhdGgsIGkuZS4gdGhlIFwiY29tcGxldGVkIHByb2dyZXNzXCJcclxuLy8gICAgICAgICAgICAgICAgIHBhdGg6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJva2U6IGByZ2JhKDYyLCAxNTIsIDE5OSwgJHtwZXJjZW50YWdlIC8gMTAwfSlgLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAvLyBDdXN0b21pemUgdGhlIGNpcmNsZSBiZWhpbmQgdGhlIHBhdGgsIGkuZS4gdGhlIFwidG90YWwgcHJvZ3Jlc3NcIlxyXG4vLyAgICAgICAgICAgICAgICAgdHJhaWw6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUcmFpbCBjb2xvclxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJyNkNmQ2ZDYnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFdoZXRoZXIgdG8gdXNlIHJvdW5kZWQgb3IgZmxhdCBjb3JuZXJzIG9uIHRoZSBlbmRzIC0gY2FuIHVzZSAnYnV0dCcgb3IgJ3JvdW5kJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGUgdGhlIHRyYWlsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDAuMjV0dXJuKScsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgdGV4dDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRleHQgY29sb3JcclxuLy8gICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2Y4OCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBzaXplXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfX0gLz5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ2lyY3VsYXJQcm9ncmVzcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3MoeyBmaWxsQ29sb3IsIG91dENvbG9yLCB0ZXh0Q29sb3IsIHBlcmNlbnRhZ2UsIHRpdGxlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICB2YWx1ZUVuZD17NjZ9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxLjR9XHJcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlQm91bmNlSW59XHJcbiAgICAgICAgICAgIC8vIHJlcGVhdFxyXG4gICAgICAgICAgICBmaWxsQ29sb3Igb3V0Q29sb3IgcGVyY2VudGFnZSB0aXRsZVxyXG4gICAgICAgIC8vIHZhbHVlcz17WzAsIHJvdW5kZWRWYWx1ZV19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTWF0aC5yb3VuZChwZXJjZW50YWdlKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YCR7cm91bmRlZFZhbHVlfSVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgaW1wb3J0YW50IHRvIGluY2x1ZGUsIGJlY2F1c2UgaWYgeW91J3JlIGZ1bGx5IG1hbmFnaW5nIHRoZVxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24geW91cnNlbGYsIHlvdSdsbCB3YW50IHRvIGRpc2FibGUgdGhlIENTUyBhbmltYXRpb24uICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJidXR0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG91dENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoQ29sb3I6IGZpbGxDb2xvcixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=