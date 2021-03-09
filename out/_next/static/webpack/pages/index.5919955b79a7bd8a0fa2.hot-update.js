webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/ProjectsContainer/ProjectsList.jsx":
/*!********************************************************************!*\
  !*** ./Components/HomeSections/ProjectsContainer/ProjectsList.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\HomeSections\\ProjectsContainer\\ProjectsList.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_PROJECTS_React_NEXT_REACT_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ProjectsList = function ProjectsList(_ref) {
  var projects = _ref.projects;
  console.log('project', projects);
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
      children: projects.map(function (project, key) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          id: key,
          className: "grid-item element-item p_one_third",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            className: "item-link",
            href: "",
            "data-id": key,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              width: "600",
              height: "600",
              src: "https://picsum.photos/600/600",
              className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
              alt: project.name,
              sizes: "(max-width: 600px) 100vw, 600px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "portfolio-text text-center ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
                id: "",
                children: project.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_c = ProjectsList;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsList);

var _c;

$RefreshReg$(_c, "ProjectsList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0LmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsIm1hcCIsInByb2plY3QiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixRQUF2QjtBQUNBLE1BQU1HLFFBQVEsR0FBRztBQUNiQyxhQUFTLEVBQUUsUUFERTtBQUViQyxjQUFVLEVBQUUsSUFGQztBQUdiQyxZQUFRLEVBQUUsSUFIRztBQUliQyxpQkFBYSxFQUFFLE1BSkY7QUFLYkMsZ0JBQVksRUFBRSxDQUxEO0FBTWJDLFNBQUssRUFBRTtBQU5NLEdBQWpCO0FBU0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxrREFBRCxrQ0FBWU4sUUFBWjtBQUFBLGdCQUNLSCxRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEdBQVY7QUFBQSw0QkFDVjtBQUFlLFlBQUUsRUFBRUEsR0FBbkI7QUFDSSxtQkFBUyxFQUFDLG9DQURkO0FBQUEsaUNBRUk7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFDSSxnQkFBSSxFQUFDLEVBRFQ7QUFFSSx1QkFBU0EsR0FGYjtBQUFBLG9DQUlJO0FBQUssbUJBQUssRUFBQyxLQUFYO0FBQWlCLG9CQUFNLEVBQUMsS0FBeEI7QUFBOEIsaUJBQUcsRUFBQywrQkFBbEM7QUFDSSx1QkFBUyxFQUFDLDZEQURkO0FBRUksaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxJQUZqQjtBQUdJLG1CQUFLLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBUUk7QUFBRyx1QkFBUyxFQUFDLDZCQUFiO0FBQUEscUNBQ0k7QUFBTyxrQkFBRSxFQUFDLEVBQVY7QUFBQSwwQkFBY0YsT0FBTyxDQUFDRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixXQUFVRCxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQWxDRDs7S0FBTWIsWTtBQW9DU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTkxOTk1NWI3OWE3YmQ4YTBmYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5cclxuY29uc3QgUHJvamVjdHNMaXN0ID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2plY3QnLCBwcm9qZWN0cyk7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc3BlZWQ6IDUwMFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGlkPXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBlbGVtZW50LWl0ZW0gcF9vbmVfdGhpcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCIgc3JjPSdodHRwczovL3BpY3N1bS5waG90b3MvNjAwLzYwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0IHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBpZD1cIlwiPntwcm9qZWN0Lm5hbWV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0xpc3QiXSwic291cmNlUm9vdCI6IiJ9