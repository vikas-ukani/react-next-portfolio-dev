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
    console.log('max 60');
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
                          lineNumber: 65,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
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
                            lineNumber: 70,
                            columnNumber: 57
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        projects: filteredProjects()
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiUG9ydGZvbGlvU2VjdGlvbiIsInByb2plY3RzIiwiZGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInBybyIsImNhdGVnb3J5Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwibWFwIiwia2V5IiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0MsdUNBQUksQ0FBQ0QsUUFBdEI7QUFDQTs7QUFGdUMsa0JBR1NFLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR2hDQyxnQkFIZ0M7QUFBQSxNQUdkQyxtQkFIYztBQUl2Qzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLEVBQTZCLFNBQTdCLEVBQXdDLFFBQXhDLENBQW5CO0FBRUE7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlDLFlBQVksR0FBR1AsUUFBbkI7O0FBQ0EsUUFBSUcsZ0JBQWdCLEtBQUtFLFVBQVUsQ0FBQyxDQUFELENBQW5DLEVBQXdDO0FBQ3BDRSxrQkFBWSxHQUFHQSxZQUFZLENBQUNDLE1BQWIsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLGVBQUlOLGdCQUFnQixJQUFJTSxHQUFHLENBQUNDLFFBQTVCO0FBQUEsT0FBdkIsQ0FBZjtBQUNIOztBQUNESCxnQkFBWSxHQUFHQSxZQUFZLENBQUNJLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBZjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBT04sWUFBUCxDQVAyQixDQVEzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0gsR0EvQkQ7O0FBaUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBUyxRQUFFLEVBQUMsV0FBWjtBQUF3QixpQkFBUSxVQUFoQztBQUEyQywyQkFBa0IsU0FBN0Q7QUFDSSxlQUFTLEVBQUMsMkxBRGQ7QUFBQSw2QkFHSTtBQUFLLGlCQUFTLEVBQUMsa0RBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxzR0FBZjtBQUNJLHVCQUFRLFVBRFo7QUFDdUIsaUNBQWtCLFFBRHpDO0FBQUEsbUNBRUk7QUFBSyx1QkFBUyxFQUFDLG1EQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLCtGQUFmO0FBQ0ksNkJBQVEsVUFEWjtBQUN1Qix1Q0FBa0IsUUFEekM7QUFFSSxzQ0FBaUIsd0JBRnJCO0FBQUEseUNBR0k7QUFBSyw2QkFBUyxFQUFDLDRCQUFmO0FBQUEsMkNBQ0k7QUFBSyx3QkFBRSxFQUFDLG1CQUFSO0FBQTRCLCtCQUFTLEVBQUMsVUFBdEM7QUFBQSw4Q0FDSTtBQUFLLGlDQUFTLEVBQUMsaUJBQWY7QUFBQSwrQ0FDSTtBQUFLLG1DQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBS0k7QUFBSyxpQ0FBUyxFQUFDLHdEQUFmO0FBQUEsa0NBQ0tGLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLFVBQUNKLFFBQUQsRUFBV0ssR0FBWDtBQUFBLDhDQUNaO0FBQUssbUNBQU8sRUFBRTtBQUFBLHFDQUFNWCxtQkFBbUIsQ0FBQ00sUUFBRCxDQUF6QjtBQUFBLDZCQUFkO0FBQ0kscUNBQVMsRUFBQyxRQURkO0FBQ3VCLDJDQUFZLEdBRG5DO0FBQUEsc0NBRUtBLFFBQVEsQ0FBQ00sV0FBVDtBQUZMLDZCQUF3RE4sUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEWTtBQUFBLHlCQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMSixlQWNJLHFFQUFDLHVFQUFEO0FBQWMsZ0NBQVEsRUFBRUosZ0JBQWdCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtREg7O0dBNUZ1QlAsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxMTIxNzQ0ZTI2NGFjNWJhMmRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdHNIb2xkZXIgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNIb2xkZXJcIjtcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhLmpzb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RzTGlzdCBmcm9tIFwiLi9Qcm9qZWN0c0NvbnRhaW5lci9Qcm9qZWN0c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvU2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgLyoqIFN0YXRlIGZvciBjdXJyZW50IGFjdGl2ZSBzdGF0dXMgd2lzZSBwcm9qZWN0cyBsaXN0aW5nLiAqL1xuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICAgIC8qKiBjcmVhdGluZyBsaXN0IG9mIGZpbHRlcnMgZm9yIGFsbCBwcm9qZWN0cyAqL1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbJ2FsbCcsICdwaHAnLCAnamF2YXNjcmlwdCcsICdtYWNoaW5lJywgJ3B5dGhvbiddXG5cbiAgICAvKiogY3JlYXRpbmcgZmlsdGVyIGZvciBjYXRlZ29yeSB3aXNlIHByb2plY3RzIGxpc3RpbmcuLi4gKi9cbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyZWREYXRhID0gcHJvamVjdHM7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5ICE9PSBjYXRlZ29yaWVzWzBdKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKHBybyA9PiBzZWxlY3RlZENhdGVnb3J5ID09IHByby5jYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuc2xpY2UoMCwgNilcbiAgICAgICAgY29uc29sZS5sb2coJ21heCA2MCcpO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWREYXRhXG4gICAgICAgIC8vIHJldHVybiAoXG4gICAgICAgIC8vICAgICBmaWx0ZXJlZERhdGFcbiAgICAgICAgLy8gICAgICAgICAubWFwKChwcm9qZWN0LCBrZXkpID0+IChcbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gaWQ9e2tleX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBlbGVtZW50LWl0ZW0gcF9vbmVfdGhpcmRcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW0tbGluayBhamF4LXBvcnRmb2xpb1wiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInBvcnRmb2xpby9pdGVtLTEvaW5kZXguaHRtbFwiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD17a2V5fT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCIgc3JjPSdodHRwczovL3BpY3N1bS5waG90b3MvNjAwLzYwMCdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXR0YWNobWVudC1wb3N0LXRodW1ibmFpbCBzaXplLXBvc3QtdGh1bWJuYWlsIHdwLXBvc3QtaW1hZ2VcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cblxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0IHRleHQtY2VudGVyIFwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgb25Nb3VzZUVudGVyPXtlID0+IGUudGFyZ2V0LmNsYXNzTmFtZSA9ICd0ZXh0LWxpZ2h0LWdyZWVuJ31cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiBlLnRhcmdldC5jbGFzc05hbWUgPSAndGV4dC1saWdodC1vcmFuZ2UnfT57cHJvamVjdC5uYW1lfTwvc21hbGw+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIC8vICAgICAgICAgKSlcbiAgICAgICAgLy8gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGRhdGEtaWQ9XCI2MjUxOTQ5M1wiIGRhdGEtZWxlbWVudF90eXBlPVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXNlY3Rpb24gZWxlbWVudG9yLXRvcC1zZWN0aW9uIGVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTYyNTE5NDkzIG9wLXNlY3Rpb24gZWxlbWVudG9yLXNlY3Rpb24tYm94ZWQgZWxlbWVudG9yLXNlY3Rpb24taGVpZ2h0LWRlZmF1bHQgZWxlbWVudG9yLXNlY3Rpb24taGVpZ2h0LWRlZmF1bHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbnRhaW5lciBlbGVtZW50b3ItY29sdW1uLWdhcC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29sdW1uIGVsZW1lbnRvci1jb2wtMTAwIGVsZW1lbnRvci10b3AtY29sdW1uIGVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTVkNjUwMzRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiNWQ2NTAzNGFcIiBkYXRhLWVsZW1lbnRfdHlwZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbHVtbi13cmFwIGVsZW1lbnRvci1lbGVtZW50LXBvcHVsYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci13aWRnZXQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC0zYTc4OWQ1OCBlbGVtZW50b3Itd2lkZ2V0IGVsZW1lbnRvci13aWRnZXQtY29jby1wb3J0Zm9saW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIzYTc4OWQ1OFwiIGRhdGEtZWxlbWVudF90eXBlPVwid2lkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldF90eXBlPVwiY29jby1wb3J0Zm9saW8uZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpby13cmFwcGVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXItaWNvblwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1saXN0IGJ1dHRvbi1ncm91cCBmaWx0ZXJzLWJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpfSBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIqXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzTGlzdCBwcm9qZWN0cz17ZmlsdGVyZWRQcm9qZWN0cygpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgaWQ9XCJwb3J0Zm9saW8tZ3JpZFwiPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtc2l6ZXJcIj4gPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGbGlwTW92ZSBzdGFnZ2VyRHVyYXRpb25CeT1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGlwTW92ZT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0c0hvbGRlciAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+IDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==