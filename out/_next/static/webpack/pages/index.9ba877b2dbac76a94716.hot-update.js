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


var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\HomeSections\\PortfolioSection.jsx",
    _s = $RefreshSig$();





function PortfolioSection() {
  _s();

  var _this = this;

  var projects = _data_json__WEBPACK_IMPORTED_MODULE_3__.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('all'),
      selectedCategory = _useState[0],
      setSelectedCategory = _useState[1]; // let selectedCategory = 'php'


  var categories = ['all', 'php', 'javascript', 'machine', 'python']; // console.log('projects', categories);
  // const category = projects.

  var filteredProjects = function filteredProjects() {
    var filteredData = projects;

    if (selectedCategory == categories[0]) {
      filteredData = filteredData.filter(function (pro) {
        return selectedCategory == pro.category;
      });
    }

    return filteredData.filter(function (pro) {
      return selectedCategory == pro.category;
    }).map(function (project, key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid-item element-item p_one_third text",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "item-link ajax-portfolio",
          href: "portfolio/item-6/index.html",
          "data-id": "92",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: "600",
            height: "600",
            className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
            alt: "portfolio-data",
            srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-150x150.jpg 150w",
            sizes: "(max-width: 600px) 100vw, 600px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-holder",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "portfolio-text-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "portfolio-text",
                children: project.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "portfolio-cat",
                children: project.id
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, _this);
    });
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
                          lineNumber: 66,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 49
                      }, this), categories.map(function (category, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            setSelectedCategory(category); // console.log("click", selectedCategory, category)
                          },
                          children: category.toUpperCase()
                        }, category, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 57
                        }, _this);
                      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "category-filter-list button-group filters-button-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button is-checked",
                          "data-filter": "*",
                          children: " All"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".image",
                          children: "Image"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".text",
                          children: "Text"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".video",
                          children: "Video"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "portfolio-load-content-holder",
                        children: " "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_flip_move__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        staggerDurationBy: "30",
                        duration: 500,
                        children: filteredProjects()
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "clear"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiUG9ydGZvbGlvU2VjdGlvbiIsInByb2plY3RzIiwiZGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInBybyIsImNhdGVnb3J5IiwibWFwIiwicHJvamVjdCIsImtleSIsIm5hbWUiLCJpZCIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxHQUE0QjtBQUFBOztBQUFBOztBQUN2QyxNQUFNQyxRQUFRLEdBQUdDLHVDQUFJLENBQUNELFFBQXRCOztBQUR1QyxrQkFFU0Usc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFaENDLGdCQUZnQztBQUFBLE1BRWRDLG1CQUZjLGlCQUd2Qzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLEVBQTZCLFNBQTdCLEVBQXdDLFFBQXhDLENBQW5CLENBSnVDLENBS3ZDO0FBQ0E7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBRTNCLFFBQUlDLFlBQVksR0FBR1AsUUFBbkI7O0FBQ0EsUUFBSUcsZ0JBQWdCLElBQUlFLFVBQVUsQ0FBQyxDQUFELENBQWxDLEVBQXVDO0FBQ25DRSxrQkFBWSxHQUFHQSxZQUFZLENBQUNDLE1BQWIsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLGVBQUlOLGdCQUFnQixJQUFJTSxHQUFHLENBQUNDLFFBQTVCO0FBQUEsT0FBdkIsQ0FBZjtBQUNIOztBQUNELFdBQ0lILFlBQVksQ0FDUEMsTUFETCxDQUNZLFVBQUFDLEdB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUhKLGVBSUk7QUFBSyxtQ0FBUyxFQUFDLFFBQWY7QUFBd0IseUNBQVksUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWJKLGVBd0JJO0FBQUssaUNBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkF4QkosZUEwQkkscUVBQUMsdURBQUQ7QUFBVSx5Q0FBaUIsRUFBQyxJQUE1QjtBQUNJLGdDQUFRLEVBQUUsR0FEZDtBQUFBLGtDQUVLSixnQkFBZ0I7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkExQkosZUFpQ0k7QUFBSyxpQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2REg7O0dBeEd1QlAsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliYTg3N2IyZGJhYzc2YTk0NzE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdHNIb2xkZXIgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNIb2xkZXJcIjtcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhLmpzb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9TZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgICAvLyBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9ICdwaHAnXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFsnYWxsJywgJ3BocCcsICdqYXZhc2NyaXB0JywgJ21hY2hpbmUnLCAncHl0aG9uJ11cbiAgICAvLyBjb25zb2xlLmxvZygncHJvamVjdHMnLCBjYXRlZ29yaWVzKTtcbiAgICAvLyBjb25zdCBjYXRlZ29yeSA9IHByb2plY3RzLlxuXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+IHtcblxuICAgICAgICB2YXIgZmlsdGVyZWREYXRhID0gcHJvamVjdHM7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5ID09IGNhdGVnb3JpZXNbMF0pIHtcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YS5maWx0ZXIocHJvID0+IHNlbGVjdGVkQ2F0ZWdvcnkgPT0gcHJvLmNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBmaWx0ZXJlZERhdGFcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHBybyA9PiBzZWxlY3RlZENhdGVnb3J5ID09IHByby5jYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0LCBrZXkpID0+IChcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkIHRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW0tbGluayBhamF4LXBvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInBvcnRmb2xpby9pdGVtLTYvaW5kZXguaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjkyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpby1kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA2LmpwZyA2MDB3LCBodHRwczovL2RlbW8uY29jb2Jhc2ljLmNvbS92b2xvcy13cC9kZW1vLTMvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvcG9ydGZvbGlvX2l0ZW1fMDYtMzAweDMwMC5qcGcgMzAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA2LTE1MHgxNTAuanBnIDE1MHdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHRcIj57cHJvamVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRcIj57cHJvamVjdC5pZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICApXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBkYXRhLWlkPVwiNjI1MTk0OTNcIiBkYXRhLWVsZW1lbnRfdHlwZT1cInNlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnRvci1zZWN0aW9uIGVsZW1lbnRvci10b3Atc2VjdGlvbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC02MjUxOTQ5MyBvcC1zZWN0aW9uIGVsZW1lbnRvci1zZWN0aW9uLWJveGVkIGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0IGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb250YWluZXIgZWxlbWVudG9yLWNvbHVtbi1nYXAtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbHVtbiBlbGVtZW50b3ItY29sLTEwMCBlbGVtZW50b3ItdG9wLWNvbHVtbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC01ZDY1MDM0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjVkNjUwMzRhXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4td3JhcCBlbGVtZW50b3ItZWxlbWVudC1wb3B1bGF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtM2E3ODlkNTggZWxlbWVudG9yLXdpZGdldCBlbGVtZW50b3Itd2lkZ2V0LWNvY28tcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiM2E3ODlkNThcIiBkYXRhLWVsZW1lbnRfdHlwZT1cIndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXRfdHlwZT1cImNvY28tcG9ydGZvbGlvLmRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8td3JhcHBlclwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWljb25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpY2tcIiwgc2VsZWN0ZWRDYXRlZ29yeSwgY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1saXN0IGJ1dHRvbi1ncm91cCBmaWx0ZXJzLWJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWNoZWNrZWRcIiBkYXRhLWZpbHRlcj1cIipcIj4gQWxsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIi5pbWFnZVwiPkltYWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIi50ZXh0XCI+VGV4dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIudmlkZW9cIj5WaWRlbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1jaGVja2VkXCIgZGF0YS1maWx0ZXI9XCIqXCI+IEFsbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIuaW1hZ2VcIj5JbWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIudGV4dFwiPlRleHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGRhdGEtZmlsdGVyPVwiLnZpZGVvXCI+VmlkZW88L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbG9hZC1jb250ZW50LWhvbGRlclwiPiA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsaXBNb3ZlIHN0YWdnZXJEdXJhdGlvbkJ5PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzKCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxpcE1vdmU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvamVjdHNIb2xkZXIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==