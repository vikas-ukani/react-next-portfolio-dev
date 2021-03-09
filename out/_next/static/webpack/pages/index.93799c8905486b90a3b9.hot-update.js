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
          onMouseEnter: function onMouseEnter(e) {
            return e.target.className = 'text-light-green';
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.className = 'text-light-orange';
          },
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
              lineNumber: 28,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "portfolio-text text-center ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
                id: "project_id_`${project.id}`",
                children: project.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0LmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsIm1hcCIsInByb2plY3QiLCJrZXkiLCJlIiwidGFyZ2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsUUFBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFDYkMsYUFBUyxFQUFFLFFBREU7QUFFYkMsY0FBVSxFQUFFLElBRkM7QUFHYkMsWUFBUSxFQUFFLElBSEc7QUFJYkMsaUJBQWEsRUFBRSxNQUpGO0FBS2JDLGdCQUFZLEVBQUUsQ0FMRDtBQU1iQyxTQUFLLEVBQUU7QUFOTSxHQUFqQjtBQVNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQsa0NBQVlOLFFBQVo7QUFBQSxnQkFDS0gsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWO0FBQUEsNEJBQ1Y7QUFBZSxZQUFFLEVBQUVBLEdBQW5CO0FBQ0ksbUJBQVMsRUFBQyxvQ0FEZDtBQUVJLHNCQUFZLEVBQUUsc0JBQUFDLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNWLFNBQVQsR0FBcUIsa0JBQXpCO0FBQUEsV0FGbkI7QUFHSSxzQkFBWSxFQUFFLHNCQUFBUyxDQUFDO0FBQUEsbUJBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTVixTQUFULEdBQXFCLG1CQUF6QjtBQUFBLFdBSG5CO0FBQUEsaUNBS0k7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFDSSxnQkFBSSxFQUFDLEVBRFQ7QUFFSSx1QkFBU1EsR0FGYjtBQUFBLG9DQUlJO0FBQUssbUJBQUssRUFBQyxLQUFYO0FBQWlCLG9CQUFNLEVBQUMsS0FBeEI7QUFBOEIsaUJBQUcsRUFBQywrQkFBbEM7QUFDSSx1QkFBUyxFQUFDLDZEQURkO0FBRUksaUJBQUcsRUFBRUQsT0FBTyxDQUFDSSxJQUZqQjtBQUdJLG1CQUFLLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBUUk7QUFBRyx1QkFBUyxFQUFDLDZCQUFiO0FBQUEscUNBQ0k7QUFBTyxrQkFBRSxFQUFDLDRCQUFWO0FBQUEsMEJBQXdDSixPQUFPLENBQUNJO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLFdBQVVILEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBckNEOztLQUFNYixZO0FBdUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Mzc5OWM4OTA1NDg2YjkwYTNiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0c0xpc3QgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncHJvamVjdCcsIHByb2plY3RzKTtcclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzcGVlZDogNTAwXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gaWQ9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGVsZW1lbnQtaXRlbSBwX29uZV90aGlyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiBlLnRhcmdldC5jbGFzc05hbWUgPSAndGV4dC1saWdodC1ncmVlbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBlLnRhcmdldC5jbGFzc05hbWUgPSAndGV4dC1saWdodC1vcmFuZ2UnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCIgc3JjPSdodHRwczovL3BpY3N1bS5waG90b3MvNjAwLzYwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0IHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBpZD1cInByb2plY3RfaWRfYCR7cHJvamVjdC5pZH1gXCI+e3Byb2plY3QubmFtZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=