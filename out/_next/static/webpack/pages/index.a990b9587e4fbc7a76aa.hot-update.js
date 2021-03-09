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
      children: [projects.map, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: key,
        className: "grid-item element-item p_one_third",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "item-link ajax-portfolio",
          href: "portfolio/item-1/index.html",
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
            lineNumber: 27,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "portfolio-text text-center ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
              onMouseEnter: function onMouseEnter(e) {
                return e.target.className = 'text-light-green';
              },
              onMouseLeave: function onMouseLeave(e) {
                return e.target.className = 'text-light-orange';
              },
              children: project.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0LmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsIm1hcCIsImtleSIsInByb2plY3QiLCJuYW1lIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsUUFBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFDYkMsYUFBUyxFQUFFLFFBREU7QUFFYkMsY0FBVSxFQUFFLElBRkM7QUFHYkMsWUFBUSxFQUFFLElBSEc7QUFJYkMsaUJBQWEsRUFBRSxNQUpGO0FBS2JDLGdCQUFZLEVBQUUsQ0FMRDtBQU1iQyxTQUFLLEVBQUU7QUFOTSxHQUFqQjtBQVNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQsa0NBQVlOLFFBQVo7QUFBQSxpQkFDS0gsUUFBUSxDQUFDVSxHQURkLGVBRUk7QUFBZSxVQUFFLEVBQUVDLEdBQW5CO0FBRUksaUJBQVMsRUFBQyxvQ0FGZDtBQUFBLCtCQUdJO0FBQUcsbUJBQVMsRUFBQywwQkFBYjtBQUNJLGNBQUksRUFBQyw2QkFEVDtBQUVJLHFCQUFTQSxHQUZiO0FBQUEsa0NBS0k7QUFBSyxpQkFBSyxFQUFDLEtBQVg7QUFBaUIsa0JBQU0sRUFBQyxLQUF4QjtBQUE4QixlQUFHLEVBQUMsK0JBQWxDO0FBQ0kscUJBQVMsRUFBQyw2REFEZDtBQUVJLGVBQUcsRUFBRUMsT0FBTyxDQUFDQyxJQUZqQjtBQUdJLGlCQUFLLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUk7QUFBRyxxQkFBUyxFQUFDLDZCQUFiO0FBQUEsbUNBQ0k7QUFBTywwQkFBWSxFQUFFLHNCQUFBQyxDQUFDO0FBQUEsdUJBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTWCxTQUFULEdBQXFCLGtCQUF6QjtBQUFBLGVBQXRCO0FBQ0ksMEJBQVksRUFBRSxzQkFBQVUsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU1gsU0FBVCxHQUFxQixtQkFBekI7QUFBQSxlQURuQjtBQUFBLHdCQUNrRVEsT0FBTyxDQUFDQztBQUQxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISixTQUFVRixHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0F2Q0Q7O0tBQU1aLFk7QUF5Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5OTBiOTU4N2U0ZmJjN2E3NmFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzTGlzdCA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0JywgcHJvamVjdHMpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNwZWVkOiA1MDBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gaWQ9e2tleX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGVsZW1lbnQtaXRlbSBwX29uZV90aGlyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW0tbGluayBhamF4LXBvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJwb3J0Zm9saW8vaXRlbS0xL2luZGV4Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjYwMFwiIHNyYz0naHR0cHM6Ly9waWNzdW0ucGhvdG9zLzYwMC82MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNjAwcHgpIDEwMHZ3LCA2MDBweFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGV4dCB0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBvbk1vdXNlRW50ZXI9e2UgPT4gZS50YXJnZXQuY2xhc3NOYW1lID0gJ3RleHQtbGlnaHQtZ3JlZW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBlLnRhcmdldC5jbGFzc05hbWUgPSAndGV4dC1saWdodC1vcmFuZ2UnfT57cHJvamVjdC5uYW1lfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==