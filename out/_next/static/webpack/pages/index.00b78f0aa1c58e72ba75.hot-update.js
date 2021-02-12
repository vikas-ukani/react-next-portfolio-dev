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
        value: value,
        text: "".concat(roundedValue, "%"),
        strokeWidth: 15,
        counterClockwise: true
        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
        ,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__["buildStyles"])({
          pathTransition: "",
          strokeLinecap: "butt",
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlQm91bmNlSW4iLCJ2YWx1ZSIsInJvdW5kZWRWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsImJ1aWxkU3R5bGVzIiwicGF0aFRyYW5zaXRpb24iLCJzdHJva2VMaW5lY2FwIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwicGF0aENvbG9yIiwidHJhaWxDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0NBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FBc0U7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxVQUFxQixRQUFyQkEsVUFBcUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDakYsc0JBQ0kscUVBQUMsaUVBQUQ7QUFDSSxjQUFVLEVBQUUsQ0FEaEI7QUFFSSxZQUFRLEVBQUUsRUFGZDtBQUdJLFlBQVEsRUFBRSxHQUhkO0FBSUksa0JBQWMsRUFBRUMsb0RBSnBCO0FBS0ksVUFBTSxNQUxWO0FBTUksYUFBUyxNQU5iO0FBTWMsWUFBUSxNQU50QjtBQU11QixjQUFVLE1BTmpDO0FBTWtDLFNBQUssTUFOdkM7QUFBQSxjQVFLLGtCQUFBQyxLQUFLLEVBQUk7QUFDTixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFYLENBQXJCO0FBQ0EsMEJBQ0kscUVBQUMsOEVBQUQ7QUFDSSxhQUFLLEVBQUVBLEtBRFg7QUFFSSxZQUFJLFlBQUtDLFlBQUwsTUFGUjtBQUdJLG1CQUFXLEVBQUUsRUFIakI7QUFJSSx3QkFBZ0IsRUFBRTtBQUNsQjtBQUN4QjtBQU5vQjtBQU9JLGNBQU0sRUFBRUcsOEVBQVcsQ0FBQztBQUNoQkMsd0JBQWMsRUFBRSxFQURBO0FBRWhCQyx1QkFBYSxFQUFFLE1BRkM7QUFHaEJDLHlCQUFlLEVBQUUsU0FIRDtBQUloQkMsbUJBQVMsRUFBRSxNQUpLO0FBS2hCQyxtQkFBUyxFQUFFLE1BTEs7QUFNaEJDLG9CQUFVLEVBQUU7QUFOSSxTQUFEO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1CSDtBQTdCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7S0FsQ3VCaEIsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDBiNzhmMGFhMWM1OGU3MmJhNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3NiYXIsIGJ1aWxkU3R5bGVzIH0gZnJvbSAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXInO1xyXG5pbXBvcnQgJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcblxyXG5cclxuaW1wb3J0IEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciBmcm9tIFwiLi9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXJcIjtcclxuXHJcbmltcG9ydCB7IGVhc2VRdWFkSW5PdXQsIGVhc2VDaXJjbGVJbiwgZWFzZUN1YmljSW4sIGVhc2VCb3VuY2VJbiB9IGZyb20gXCJkMy1lYXNlXCI7XHJcblxyXG4vLyBjb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHsgZmlsbENvbG9yLCBvdXRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkgPT4ge1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NiYXJcclxuLy8gICAgICAgICAgICAgY291bnRlckNsb2Nrd2lzZT17dHJ1ZX0gc3Ryb2tlV2lkdGg9ezE1fSB2YWx1ZT17cGVyY2VudGFnZX1cclxuLy8gICAgICAgICAgICAgdGV4dD17YCR7cGVyY2VudGFnZX0lYH1cclxuLy8gICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb249e2Vhc2VCYWNrSW4oKX1cclxuXHJcbi8vICAgICAgICAgICAgIHN0eWxlcz17e1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSByb290IHN2ZyBlbGVtZW50XHJcbi8vICAgICAgICAgICAgICAgICByb290OiB7fSxcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgcGF0aCwgaS5lLiB0aGUgXCJjb21wbGV0ZWQgcHJvZ3Jlc3NcIlxyXG4vLyAgICAgICAgICAgICAgICAgcGF0aDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogYHJnYmEoNjIsIDE1MiwgMTk5LCAke3BlcmNlbnRhZ2UgLyAxMDB9KWAsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgY2lyY2xlIGJlaGluZCB0aGUgcGF0aCwgaS5lLiB0aGUgXCJ0b3RhbCBwcm9ncmVzc1wiXHJcbi8vICAgICAgICAgICAgICAgICB0cmFpbDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWlsIGNvbG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2Q2ZDZkNicsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gV2hldGhlciB0byB1c2Ugcm91bmRlZCBvciBmbGF0IGNvcm5lcnMgb24gdGhlIGVuZHMgLSBjYW4gdXNlICdidXR0JyBvciAncm91bmQnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgdHJhaWxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMC4yNXR1cm4pJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0OiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBjb2xvclxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjZjg4JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IHNpemVcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9fSAvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY3VsYXJQcm9ncmVzcyh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHBlcmNlbnRhZ2UsIHRpdGxlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICB2YWx1ZUVuZD17NjZ9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXsxLjR9XHJcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlQm91bmNlSW59XHJcbiAgICAgICAgICAgIHJlcGVhdFxyXG4gICAgICAgICAgICBmaWxsQ29sb3Igb3V0Q29sb3IgcGVyY2VudGFnZSB0aXRsZVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2Ake3JvdW5kZWRWYWx1ZX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBUaGlzIGlzIGltcG9ydGFudCB0byBpbmNsdWRlLCBiZWNhdXNlIGlmIHlvdSdyZSBmdWxseSBtYW5hZ2luZyB0aGVcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uIHlvdXJzZWxmLCB5b3UnbGwgd2FudCB0byBkaXNhYmxlIHRoZSBDU1MgYW5pbWF0aW9uLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e2J1aWxkU3R5bGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhUcmFuc2l0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJidXR0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNlOThjN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbENvbG9yOiBcInRyYW5zcGFyZW50XCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=