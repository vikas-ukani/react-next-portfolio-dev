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
                          lineNumber: 30,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 49
                      }, this), categories.map(function (category, key) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: category
                        }, key, false, {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                          columnNumber: 57
                        }, _this);
                      }), categories.map(function (category, k) {
                        {
                          console.log(category);
                        } // <button key={category}>{category.toUpperCase}</button>
                      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        children: "asd"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "category-filter-list button-group filters-button-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button is-checked",
                          "data-filter": "*",
                          children: " All"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 47,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".image",
                          children: "Image"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 48,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".text",
                          children: "Text"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "button",
                          "data-filter": ".video",
                          children: "Video"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "portfolio-load-content-holder",
                        children: " older "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 49
                      }, this), "Checking", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_flip_move__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        children: projects.filter(function (pro) {
                          return selectedCategory == pro.category;
                        }).map(function (project, key) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            children: project.name
                          }, key, false, {
                            fileName: _jsxFileName,
                            lineNumber: 63,
                            columnNumber: 61
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "clear"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiUG9ydGZvbGlvU2VjdGlvbiIsInByb2plY3RzIiwiZGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJrZXkiLCJrIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInBybyIsInByb2plY3QiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxHQUE0QjtBQUFBOztBQUFBOztBQUN2QyxNQUFNQyxRQUFRLEdBQUdDLHVDQUFJLENBQUNELFFBQXRCOztBQUR1QyxrQkFFU0Usc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFaENDLGdCQUZnQztBQUFBLE1BRWRDLG1CQUZjLGlCQUd2Qzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxZQUFmLEVBQTZCLFNBQTdCLEVBQXdDLFFBQXhDLENBQW5CLENBSnVDLENBS3ZDO0FBQ0E7O0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFTLFFBQUUsRUFBQyxXQUFaO0FBQXdCLGlCQUFRLFVBQWhDO0FBQTJDLDJCQUFrQixTQUE3RDtBQUNJLGVBQVMsRUFBQywyTEFEZDtBQUFBLDZCQUdJO0FBQUssaUJBQVMsRUFBQyxrREFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLHNHQUFmO0FBQ0ksdUJBQVEsVUFEWjtBQUN1QixpQ0FBa0IsUUFEekM7QUFBQSxtQ0FFSTtBQUFLLHVCQUFTLEVBQUMsbURBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsdUJBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMsK0ZBQWY7QUFDSSw2QkFBUSxVQURaO0FBQ3VCLHVDQUFrQixRQUR6QztBQUVJLHNDQUFpQix3QkFGckI7QUFBQSx5Q0FHSTtBQUFLLDZCQUFTLEVBQUMsNEJBQWY7QUFBQSwyQ0FDSTtBQUFLLHdCQUFFLEVBQUMsbUJBQVI7QUFBNEIsK0JBQVMsRUFBQyxVQUF0QztBQUFBLDhDQUNJO0FBQUssaUNBQVMsRUFBQyxpQkFBZjtBQUFBLCtDQUNJO0FBQUssbUNBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosRUFLS0EsVUFBVSxDQUNOQyxHQURKLENBQ1EsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsNENBQ0Q7QUFBQSxvQ0FDS0Q7QUFETCwyQkFBVUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURDO0FBQUEsdUJBRFIsQ0FMTCxFQVdLSCxVQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQVdFLENBQVgsRUFBaUI7QUFDN0I7QUFBRUMsaUNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQXdCLHlCQURHLENBRzdCO0FBQ0gsdUJBSkEsQ0FYTCxlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFoQkosZUFrQkk7QUFBSyxpQ0FBUyxFQUFDLHdEQUFmO0FBQUEsZ0RBQ0k7QUFBSyxtQ0FBUyxFQUFDLG1CQUFmO0FBQW1DLHlDQUFZLEdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLGVBRUk7QUFBSyxtQ0FBUyxFQUFDLFFBQWY7QUFBd0IseUNBQVksUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkosZUFHSTtBQUFLLG1DQUFTLEVBQUMsUUFBZjtBQUF3Qix5Q0FBWSxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FISixlQUlJO0FBQUssbUNBQVMsRUFBQyxRQUFmO0FBQXdCLHlDQUFZLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFsQkosZUE2Qkk7QUFBSyxpQ0FBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTdCSiwyQkErQkkscUVBQUMsdURBQUQ7QUFBQSxrQ0FDS1AsUUFBUSxDQUNKWSxNQURKLENBQ1csVUFBQUMsR0FBRztBQUFBLGlDQUFJVixnQkFBZ0IsSUFBSVUsR0FBRyxDQUFDTixRQUE1QjtBQUFBLHlCQURkLEVBRUlELEdBRkosQ0FFUSxVQUFDUSxPQUFELEVBQVVOLEdBQVY7QUFBQSw4Q0FDRDtBQUFBLHNDQUNLTSxPQUFPLENBQUNDO0FBRGIsNkJBQVVQLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEQztBQUFBLHlCQUZSO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkEvQkosZUEwQ0k7QUFBSyxpQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzRUg7O0dBN0V1QlQsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkOGQ0NGRiZDZmZGZhMzI1OGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdHNIb2xkZXIgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNIb2xkZXJcIjtcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhLmpzb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9TZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgICAvLyBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9ICdwaHAnXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFsnYWxsJywgJ3BocCcsICdqYXZhc2NyaXB0JywgJ21hY2hpbmUnLCAncHl0aG9uJ11cbiAgICAvLyBjb25zb2xlLmxvZygncHJvamVjdHMnLCBjYXRlZ29yaWVzKTtcbiAgICAvLyBjb25zdCBjYXRlZ29yeSA9IHByb2plY3RzLlxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGRhdGEtaWQ9XCI2MjUxOTQ5M1wiIGRhdGEtZWxlbWVudF90eXBlPVwic2VjdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXNlY3Rpb24gZWxlbWVudG9yLXRvcC1zZWN0aW9uIGVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTYyNTE5NDkzIG9wLXNlY3Rpb24gZWxlbWVudG9yLXNlY3Rpb24tYm94ZWQgZWxlbWVudG9yLXNlY3Rpb24taGVpZ2h0LWRlZmF1bHQgZWxlbWVudG9yLXNlY3Rpb24taGVpZ2h0LWRlZmF1bHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbnRhaW5lciBlbGVtZW50b3ItY29sdW1uLWdhcC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29sdW1uIGVsZW1lbnRvci1jb2wtMTAwIGVsZW1lbnRvci10b3AtY29sdW1uIGVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTVkNjUwMzRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiNWQ2NTAzNGFcIiBkYXRhLWVsZW1lbnRfdHlwZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbHVtbi13cmFwIGVsZW1lbnRvci1lbGVtZW50LXBvcHVsYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci13aWRnZXQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC0zYTc4OWQ1OCBlbGVtZW50b3Itd2lkZ2V0IGVsZW1lbnRvci13aWRnZXQtY29jby1wb3J0Zm9saW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIzYTc4OWQ1OFwiIGRhdGEtZWxlbWVudF90eXBlPVwid2lkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldF90eXBlPVwiY29jby1wb3J0Zm9saW8uZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpby13cmFwcGVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXItaWNvblwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNhdGVnb3J5LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29uc29sZS5sb2coY2F0ZWdvcnkpOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8YnV0dG9uIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeS50b1VwcGVyQ2FzZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgPmFzZDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1saXN0IGJ1dHRvbi1ncm91cCBmaWx0ZXJzLWJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWNoZWNrZWRcIiBkYXRhLWZpbHRlcj1cIipcIj4gQWxsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIi5pbWFnZVwiPkltYWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIi50ZXh0XCI+VGV4dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIudmlkZW9cIj5WaWRlbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1jaGVja2VkXCIgZGF0YS1maWx0ZXI9XCIqXCI+IEFsbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIuaW1hZ2VcIj5JbWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgZGF0YS1maWx0ZXI9XCIudGV4dFwiPlRleHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIGRhdGEtZmlsdGVyPVwiLnZpZGVvXCI+VmlkZW88L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbG9hZC1jb250ZW50LWhvbGRlclwiPiBvbGRlciA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxpcE1vdmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocHJvID0+IHNlbGVjdGVkQ2F0ZWdvcnkgPT0gcHJvLmNhdGVnb3J5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsaXBNb3ZlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2plY3RzSG9sZGVyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==