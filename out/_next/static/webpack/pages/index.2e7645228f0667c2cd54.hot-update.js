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
/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimatedProgressProvider */ "./Components/Extra/AnimatedProgressProvider.jsx");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");



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
  var _this = this,
      _jsxDEV2;

  var fillColor = _ref.fillColor,
      outColor = _ref.outColor,
      textColor = _ref.textColor,
      percentage = _ref.percentage,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AnimatedProgressProvider__WEBPACK_IMPORTED_MODULE_4__["default"], (_jsxDEV2 = {
      valueStart: 0,
      valueEnd: 66,
      duration: 1.4,
      easingFunction: d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeQuadInOut"],
      repeat: true,
      fillColor: true,
      outColor: true,
      percentage: true,
      title: true
    }, Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "repeat", true), Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "children", function children(value) {
      var roundedValue = Math.round(percentage);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["CircularProgressbar"], {
        value: roundedValue,
        text: "".concat(roundedValue, "%"),
        counterClockwise: true,
        strokeWidth: 15,
        styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["buildStyles"])({
          pathTransition: "none",
          strokeLinecap: "butt",
          backgroundColor: outColor,
          textColor: textColor,
          pathColor: fillColor
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }, _this);
    }), _jsxDEV2), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9FeHRyYS9DaXJjdWxhclByb2dyZXNzLmpzeCJdLCJuYW1lcyI6WyJDaXJjdWxhclByb2dyZXNzIiwiZmlsbENvbG9yIiwib3V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJjZW50YWdlIiwidGl0bGUiLCJlYXNlUXVhZEluT3V0IiwidmFsdWUiLCJyb3VuZGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJidWlsZFN0eWxlcyIsInBhdGhUcmFuc2l0aW9uIiwic3Ryb2tlTGluZWNhcCIsImJhY2tncm91bmRDb2xvciIsInBhdGhDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0NBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsZ0JBQVQsT0FBaUY7QUFBQTtBQUFBOztBQUFBLE1BQXJEQyxTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDO0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQXJCQyxVQUFxQixRQUFyQkEsVUFBcUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDNUYsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxpRUFBRDtBQUNJLGdCQUFVLEVBQUUsQ0FEaEI7QUFFSSxjQUFRLEVBQUUsRUFGZDtBQUdJLGNBQVEsRUFBRSxHQUhkO0FBSUksb0JBQWMsRUFBRUMscURBSnBCO0FBS0ksWUFBTSxNQUxWO0FBTUksZUFBUyxNQU5iO0FBTWMsY0FBUSxNQU50QjtBQU11QixnQkFBVSxNQU5qQztBQU1rQyxXQUFLO0FBTnZDLDhXQVNLLGtCQUFBQyxLQUFLLEVBQUk7QUFDTixVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixVQUFYLENBQXJCO0FBQ0EsMEJBQ0kscUVBQUMsOEVBQUQ7QUFDSSxhQUFLLEVBQUVJLFlBRFg7QUFFSSxZQUFJLFlBQUtBLFlBQUwsTUFGUjtBQUdJLHdCQUFnQixFQUFFLElBSHRCO0FBSUksbUJBQVcsRUFBRSxFQUpqQjtBQU1JLGNBQU0sRUFBRUcsOEVBQVcsQ0FBQztBQUNoQkMsd0JBQWMsRUFBRSxNQURBO0FBRWhCQyx1QkFBYSxFQUFFLE1BRkM7QUFHaEJDLHlCQUFlLEVBQUVaLFFBSEQ7QUFJaEJDLG1CQUFTLEVBQUVBLFNBSks7QUFLaEJZLG1CQUFTLEVBQUVkO0FBTEssU0FBRDtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFpQkgsS0E1Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBb0NIO0tBckN1QkQsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmU3NjQ1MjI4ZjA2NjdjMmNkNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3NiYXIsIGJ1aWxkU3R5bGVzIH0gZnJvbSAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXInO1xyXG5pbXBvcnQgJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcblxyXG5cclxuaW1wb3J0IEFuaW1hdGVkUHJvZ3Jlc3NQcm92aWRlciBmcm9tIFwiLi9BbmltYXRlZFByb2dyZXNzUHJvdmlkZXJcIjtcclxuXHJcbmltcG9ydCB7IGVhc2VRdWFkSW5PdXQsIGVhc2VDaXJjbGVJbiwgZWFzZUN1YmljSW4sIGVhc2VCb3VuY2VJbiB9IGZyb20gXCJkMy1lYXNlXCI7XHJcblxyXG4vLyBjb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHsgZmlsbENvbG9yLCBvdXRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkgPT4ge1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NiYXJcclxuLy8gICAgICAgICAgICAgY291bnRlckNsb2Nrd2lzZT17dHJ1ZX0gc3Ryb2tlV2lkdGg9ezE1fSB2YWx1ZT17cGVyY2VudGFnZX1cclxuLy8gICAgICAgICAgICAgdGV4dD17YCR7cGVyY2VudGFnZX0lYH1cclxuLy8gICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb249e2Vhc2VCYWNrSW4oKX1cclxuXHJcbi8vICAgICAgICAgICAgIHN0eWxlcz17e1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gQ3VzdG9taXplIHRoZSByb290IHN2ZyBlbGVtZW50XHJcbi8vICAgICAgICAgICAgICAgICByb290OiB7fSxcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgcGF0aCwgaS5lLiB0aGUgXCJjb21wbGV0ZWQgcHJvZ3Jlc3NcIlxyXG4vLyAgICAgICAgICAgICAgICAgcGF0aDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogYHJnYmEoNjIsIDE1MiwgMTk5LCAke3BlcmNlbnRhZ2UgLyAxMDB9KWAsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgY2lyY2xlIGJlaGluZCB0aGUgcGF0aCwgaS5lLiB0aGUgXCJ0b3RhbCBwcm9ncmVzc1wiXHJcbi8vICAgICAgICAgICAgICAgICB0cmFpbDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWlsIGNvbG9yXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnI2Q2ZDZkNicsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gV2hldGhlciB0byB1c2Ugcm91bmRlZCBvciBmbGF0IGNvcm5lcnMgb24gdGhlIGVuZHMgLSBjYW4gdXNlICdidXR0JyBvciAncm91bmQnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgdHJhaWxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMC4yNXR1cm4pJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0OiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBjb2xvclxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjZjg4JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IHNpemVcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9fSAvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY3VsYXJQcm9ncmVzcyh7IGZpbGxDb2xvciwgb3V0Q29sb3IsIHRleHRDb2xvciwgcGVyY2VudGFnZSwgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVFbmQ9ezY2fVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezEuNH1cclxuICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uPXtlYXNlUXVhZEluT3V0fVxyXG4gICAgICAgICAgICAgICAgcmVwZWF0XHJcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3Igb3V0Q29sb3IgcGVyY2VudGFnZSB0aXRsZVxyXG4gICAgICAgICAgICAgICAgcmVwZWF0XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTWF0aC5yb3VuZChwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JvdW5kZWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2Ake3JvdW5kZWRWYWx1ZX0lYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MTV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtidWlsZFN0eWxlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFRyYW5zaXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogb3V0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aENvbG9yOiBmaWxsQ29sb3IsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZWRQcm9ncmVzc1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==