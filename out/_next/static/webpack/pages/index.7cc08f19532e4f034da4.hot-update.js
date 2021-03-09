webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/PortfolioSection.jsx":
/*!******************************************************!*\
  !*** ./Components/HomeSections/PortfolioSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortfolioSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectsContainer_ProjectsHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsHolder */ "./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./data.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsList */ "./Components/HomeSections/ProjectsContainer/ProjectsList.jsx");


var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\HomeSections\\PortfolioSection.jsx",
    _s = $RefreshSig$();






function PortfolioSection() {
  _s();

  var _this = this;

  var projects = _data_json__WEBPACK_IMPORTED_MODULE_3__.projects;
  /** State for current active status wise projects listing. */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('all'),
      selectedCategory = _useState[0],
      setSelectedCategory = _useState[1];
  /** creating list of filters for all projects */


  var categories = ['all', 'php', 'javascript', 'machine', 'python'];
  /** creating filter for category wise projects listing... */

  var filteredProjects = function filteredProjects() {
    var filteredData = projects;

    if (selectedCategory !== categories[0]) {
      filteredData = filteredData.filter(function (pro) {
        return selectedCategory == pro.category;
      });
    }

    filteredData = filteredData.slice(0, 6);
    return filteredData; // return (
    //     filteredData
    //         .map((project, key) => (
    //             <div key={key} id={key}
    //                 className="grid-item element-item p_one_third">
    //                 <a className="item-link ajax-portfolio"
    //                     href="portfolio/item-1/index.html"
    //                     data-id={key}>
    //                     <img width="600" height="600" src='https://picsum.photos/600/600'
    //                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
    //                         alt={project.name}
    //                         sizes="(max-width: 600px) 100vw, 600px" />
    //                     <p className="portfolio-text text-center ">
    //                         <small onMouseEnter={e => e.target.className = 'text-light-green'}
    //                             onMouseLeave={e => e.target.className = 'text-light-orange'}>{project.name}</small>
    //                     </p>
    //                 </a>
    //             </div>
    //         ))
    // )
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "portfolio",
      "data-id": "62519493",
      "data-element_type": "section",
      className: "elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "elementor-container elementor-column-gap-default",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "elementor-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d65034a",
            "data-id": "5d65034a",
            "data-element_type": "column",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "elementor-column-wrap elementor-element-populated",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "elementor-widget-wrap",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "elementor-element elementor-element-3a789d58 elementor-widget elementor-widget-coco-portfolio",
                  "data-id": "3a789d58",
                  "data-element_type": "widget",
                  "data-widget_type": "coco-portfolio.default",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "elementor-widget-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      id: "portfolio-wrapper",
                      className: "relative",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "category-filter",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "category-filter-icon",
                          children: " "
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "category-filter-list button-group filters-button-group",
                        children: categories.map(function (category, key) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            onClick: function onClick() {
                              return setSelectedCategory(category);
                            },
                            className: "button",
                            "data-filter": "*",
                            children: category.toUpperCase()
                          }, category, false, {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 57
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "grid",
                        id: "portfolio-grid",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          projects: filteredProjects()
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s(PortfolioSection, "ka1F1ceqEXioutdx48zEaS3nBME=");

_c = PortfolioSection;

var _c;

$RefreshReg$(_c, "PortfolioSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiUG9ydGZvbGlvU2VjdGlvbiIsInByb2plY3RzIiwiZGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInBybyIsImNhdGVnb3J5Iiwic2xpY2UiLCJtYXAiLCJrZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQTs7QUFDdkMsTUFBTUMsUUFBUSxHQUFHQyx1Q0FBSSxDQUFDRCxRQUF0QjtBQUNBOztBQUZ1QyxrQkFHU0Usc0RBQVEsQ0FBQyxLQUFELENBSGpCO0FBQUEsTUFHaENDLGdCQUhnQztBQUFBLE1BR2RDLG1CQUhjO0FBSXZDOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLFlBQWYsRUFBNkIsU0FBN0IsRUFBd0MsUUFBeEMsQ0FBbkI7QUFFQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBSUMsWUFBWSxHQUFHUCxRQUFuQjs7QUFDQSxRQUFJRyxnQkFBZ0IsS0FBS0UsVUFBVSxDQUFDLENBQUQsQ0FBbkMsRUFBd0M7QUFDcENFLGtCQUFZLEdBQUdBLFlBQVksQ0FBQ0MsTUFBYixDQUFvQixVQUFBQyxHQUFHO0FBQUEsZUFBSU4sZ0JBQWdCLElBQUlNLEdBQUcsQ0FBQ0MsUUFBNUI7QUFBQSxPQUF2QixDQUFmO0FBQ0g7O0FBQ0RILGdCQUFZLEdBQUdBLFlBQVksQ0FBQ0ksS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFmO0FBQ0EsV0FBT0osWUFBUCxDQU4yQixDQU8zQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0gsR0E5QkQ7O0FBZ0NBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBUyxRQUFFLEVBQUMsV0FBWjtBQUF3QixpQkFBUSxVQUFoQztBQUEyQywyQkFBa0IsU0FBN0Q7QUFDSSxlQUFTLEVBQUMsMkxBRGQ7QUFBQSw2QkFHSTtBQUFLLGlCQUFTLEVBQUMsa0RBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxzR0FBZjtBQUNJLHVCQUFRLFVBRFo7QUFDdUIsaUNBQWtCLFFBRHpDO0FBQUEsbUNBRUk7QUFBSyx1QkFBUyxFQUFDLG1EQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLCtGQUFmO0FBQ0ksNkJBQVEsVUFEWjtBQUN1Qix1Q0FBa0IsUUFEekM7QUFFSSxzQ0FBaUIsd0JBRnJCO0FBQUEseUNBR0k7QUFBSyw2QkFBUyxFQUFDLDRCQUFmO0FBQUEsMkNBQ0k7QUFBSyx3QkFBRSxFQUFDLG1CQUFSO0FBQTRCLCtCQUFTLEVBQUMsVUFBdEM7QUFBQSw4Q0FDSTtBQUFLLGlDQUFTLEVBQUMsaUJBQWY7QUFBQSwrQ0FDSTtBQUFLLG1DQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBS0k7QUFBSyxpQ0FBUyxFQUFDLHdEQUFmO0FBQUEsa0NBQ0tGLFVBQVUsQ0FBQ08sR0FBWCxDQUFlLFVBQUNGLFFBQUQsRUFBV0csR0FBWDtBQUFBLDhDQUNaO0FBQUssbUNBQU8sRUFBRTtBQUFBLHFDQUFNVCxtQkFBbUIsQ0FBQ00sUUFBRCxDQUF6QjtBQUFBLDZCQUFkO0FBQ0kscUNBQVMsRUFBQyxRQURkO0FBQ3VCLDJDQUFZLEdBRG5DO0FBQUEsc0NBRUtBLFFBQVEsQ0FBQ0ksV0FBVDtBQUZMLDZCQUF3REosUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEWTtBQUFBLHlCQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMSixlQWVJO0FBQUssaUNBQVMsRUFBQyxNQUFmO0FBQXNCLDBCQUFFLEVBQUMsZ0JBQXpCO0FBQUEsK0NBQ0kscUVBQUMsdUVBQUQ7QUFBYyxrQ0FBUSxFQUFFSixnQkFBZ0I7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtREg7O0dBM0Z1QlAsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdjYzA4ZjE5NTMyZTRmMDM0ZGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdHNIb2xkZXIgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNIb2xkZXJcIjtcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhLmpzb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RzTGlzdCBmcm9tIFwiLi9Qcm9qZWN0c0NvbnRhaW5lci9Qcm9qZWN0c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvU2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgLyoqIFN0YXRlIGZvciBjdXJyZW50IGFjdGl2ZSBzdGF0dXMgd2lzZSBwcm9qZWN0cyBsaXN0aW5nLiAqL1xuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICAgIC8qKiBjcmVhdGluZyBsaXN0IG9mIGZpbHRlcnMgZm9yIGFsbCBwcm9qZWN0cyAqL1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbJ2FsbCcsICdwaHAnLCAnamF2YXNjcmlwdCcsICdtYWNoaW5lJywgJ3B5dGhvbiddXG5cbiAgICAvKiogY3JlYXRpbmcgZmlsdGVyIGZvciBjYXRlZ29yeSB3aXNlIHByb2plY3RzIGxpc3RpbmcuLi4gKi9cbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyZWREYXRhID0gcHJvamVjdHM7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5ICE9PSBjYXRlZ29yaWVzWzBdKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKHBybyA9PiBzZWxlY3RlZENhdGVnb3J5ID09IHByby5jYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuc2xpY2UoMCwgNilcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YVxuICAgICAgICAvLyByZXR1cm4gKFxuICAgICAgICAvLyAgICAgZmlsdGVyZWREYXRhXG4gICAgICAgIC8vICAgICAgICAgLm1hcCgocHJvamVjdCwga2V5KSA9PiAoXG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGlkPXtrZXl9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLWxpbmsgYWpheC1wb3J0Zm9saW9cIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJwb3J0Zm9saW8vaXRlbS0xL2luZGV4Lmh0bWxcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9e2tleX0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjYwMFwiIHNyYz0naHR0cHM6Ly9waWNzdW0ucGhvdG9zLzYwMC82MDAnXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dGFjaG1lbnQtcG9zdC10aHVtYm5haWwgc2l6ZS1wb3N0LXRodW1ibmFpbCB3cC1wb3N0LWltYWdlXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNjAwcHgpIDEwMHZ3LCA2MDBweFwiIC8+XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGV4dCB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIG9uTW91c2VFbnRlcj17ZSA9PiBlLnRhcmdldC5jbGFzc05hbWUgPSAndGV4dC1saWdodC1ncmVlbid9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2UgPT4gZS50YXJnZXQuY2xhc3NOYW1lID0gJ3RleHQtbGlnaHQtb3JhbmdlJ30+e3Byb2plY3QubmFtZX08L3NtYWxsPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAvLyAgICAgICAgICkpXG4gICAgICAgIC8vIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBkYXRhLWlkPVwiNjI1MTk0OTNcIiBkYXRhLWVsZW1lbnRfdHlwZT1cInNlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnRvci1zZWN0aW9uIGVsZW1lbnRvci10b3Atc2VjdGlvbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC02MjUxOTQ5MyBvcC1zZWN0aW9uIGVsZW1lbnRvci1zZWN0aW9uLWJveGVkIGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0IGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb250YWluZXIgZWxlbWVudG9yLWNvbHVtbi1nYXAtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbHVtbiBlbGVtZW50b3ItY29sLTEwMCBlbGVtZW50b3ItdG9wLWNvbHVtbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC01ZDY1MDM0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjVkNjUwMzRhXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4td3JhcCBlbGVtZW50b3ItZWxlbWVudC1wb3B1bGF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtM2E3ODlkNTggZWxlbWVudG9yLXdpZGdldCBlbGVtZW50b3Itd2lkZ2V0LWNvY28tcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiM2E3ODlkNThcIiBkYXRhLWVsZW1lbnRfdHlwZT1cIndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXRfdHlwZT1cImNvY28tcG9ydGZvbGlvLmRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8td3JhcHBlclwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWljb25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXItbGlzdCBidXR0b24tZ3JvdXAgZmlsdGVycy1idXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KX0ga2V5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiIGRhdGEtZmlsdGVyPVwiKlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgaWQ9XCJwb3J0Zm9saW8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0c0xpc3QgcHJvamVjdHM9e2ZpbHRlcmVkUHJvamVjdHMoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkLXNpemVyXCI+IDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEZsaXBNb3ZlIHN0YWdnZXJEdXJhdGlvbkJ5PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsaXBNb3ZlPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0c0hvbGRlciAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+IDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==