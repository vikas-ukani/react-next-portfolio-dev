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
            return e.target.className = 'n';
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.className = 'tetext-light-greext-light-orange';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0LmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsIm1hcCIsInByb2plY3QiLCJrZXkiLCJlIiwidGFyZ2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsUUFBdkI7QUFDQSxNQUFNRyxRQUFRLEdBQUc7QUFDYkMsYUFBUyxFQUFFLFFBREU7QUFFYkMsY0FBVSxFQUFFLElBRkM7QUFHYkMsWUFBUSxFQUFFLElBSEc7QUFJYkMsaUJBQWEsRUFBRSxNQUpGO0FBS2JDLGdCQUFZLEVBQUUsQ0FMRDtBQU1iQyxTQUFLLEVBQUU7QUFOTSxHQUFqQjtBQVNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQsa0NBQVlOLFFBQVo7QUFBQSxnQkFDS0gsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWO0FBQUEsNEJBQ1Y7QUFBZSxZQUFFLEVBQUVBLEdBQW5CO0FBQ0ksbUJBQVMsRUFBQyxvQ0FEZDtBQUVJLHNCQUFZLEVBQUUsc0JBQUFDLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNWLFNBQVQsR0FBcUIsR0FBekI7QUFBQSxXQUZuQjtBQUdJLHNCQUFZLEVBQUUsc0JBQUFTLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNWLFNBQVQsR0FBcUIsa0NBQXpCO0FBQUEsV0FIbkI7QUFBQSxpQ0FLSTtBQUFHLHFCQUFTLEVBQUMsV0FBYjtBQUNJLGdCQUFJLEVBQUMsRUFEVDtBQUVJLHVCQUFTUSxHQUZiO0FBQUEsb0NBSUk7QUFBSyxtQkFBSyxFQUFDLEtBQVg7QUFBaUIsb0JBQU0sRUFBQyxLQUF4QjtBQUE4QixpQkFBRyxFQUFDLCtCQUFsQztBQUNJLHVCQUFTLEVBQUMsNkRBRGQ7QUFFSSxpQkFBRyxFQUFFRCxPQUFPLENBQUNJLElBRmpCO0FBR0ksbUJBQUssRUFBQztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFRSTtBQUFHLHVCQUFTLEVBQUMsNkJBQWI7QUFBQSxxQ0FDSTtBQUFPLGtCQUFFLEVBQUMsNEJBQVY7QUFBQSwwQkFBd0NKLE9BQU8sQ0FBQ0k7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosV0FBVUgsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0FyQ0Q7O0tBQU1iLFk7QUF1Q1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3ZjM5MzAyZjJhYThiZGZlNWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzTGlzdCA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0JywgcHJvamVjdHMpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogXCI2MHB4XCIsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNwZWVkOiA1MDBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBpZD17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtlID0+IGUudGFyZ2V0LmNsYXNzTmFtZSA9ICduJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IGUudGFyZ2V0LmNsYXNzTmFtZSA9ICd0ZXRleHQtbGlnaHQtZ3JlZXh0LWxpZ2h0LW9yYW5nZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIiBzcmM9J2h0dHBzOi8vcGljc3VtLnBob3Rvcy82MDAvNjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dGFjaG1lbnQtcG9zdC10aHVtYm5haWwgc2l6ZS1wb3N0LXRodW1ibmFpbCB3cC1wb3N0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGlkPVwicHJvamVjdF9pZF9gJHtwcm9qZWN0LmlkfWBcIj57cHJvamVjdC5uYW1lfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==