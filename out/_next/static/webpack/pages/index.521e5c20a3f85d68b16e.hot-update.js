webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/PortfolioSection.jsx":
/*!******************************************************!*\
  !*** ./Components/HomeSections/PortfolioSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PortfolioSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectsContainer_ProjectsHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsHolder */ \"./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ \"./data.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsList */ \"./Components/HomeSections/ProjectsContainer/ProjectsList.jsx\");\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/HomeSections/PortfolioSection.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction PortfolioSection() {\n  _s();\n\n  var _this = this;\n\n  var projects = _data_json__WEBPACK_IMPORTED_MODULE_2__.projects;\n  var categories = [];\n  projects.filter(function (pro) {\n    if (!categories.includes(pro.category)) {\n      categories.push(pro.category);\n    }\n  });\n  var defaultCategory = 'all';\n  /** State for current active status wise projects listing. */\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultCategory),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  categories.unshift(defaultCategory);\n  /** creating filter for category wise projects listing... */\n\n  var filteredProjects = function filteredProjects() {\n    var filteredData = projects;\n\n    if (selectedCategory !== categories[0]) {\n      filteredData = filteredData.filter(function (pro) {\n        return selectedCategory == pro.category;\n      });\n    }\n\n    filteredData = projects.sort(function (a, b) {\n      return a.id - b.id;\n    });\n    return filteredData.slice(0, 6);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      id: \"portfolio\",\n      \"data-id\": \"62519493\",\n      \"data-element_type\": \"section\",\n      className: \"elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"elementor-container elementor-column-gap-default\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"elementor-row\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d65034a\",\n            \"data-id\": \"5d65034a\",\n            \"data-element_type\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"elementor-column-wrap elementor-element-populated\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"elementor-widget-wrap\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"elementor-element elementor-element-3a789d58 elementor-widget elementor-widget-coco-portfolio\",\n                  \"data-id\": \"3a789d58\",\n                  \"data-element_type\": \"widget\",\n                  \"data-widget_type\": \"coco-portfolio.default\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"elementor-widget-container\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                      id: \"portfolio-wrapper\",\n                      className: \"relative\",\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"category-filter-icon\",\n                          children: \" \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 45,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 44,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter-list button-group filters-button-group\",\n                        children: categories.map(function (category, key) {\n                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                            onClick: function onClick() {\n                              return setSelectedCategory(category);\n                            },\n                            className: \"button\",\n                            \"data-filter\": \"*\",\n                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n                              children: category.toUpperCase()\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 52,\n                              columnNumber: 61\n                            }, _this)\n                          }, category, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 50,\n                            columnNumber: 57\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 48,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"elementor-element elementor-element-8225bc2 elementor-widget elementor-widget-heading\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"elementor-widget-container\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                            className: \"elementor-heading-title elementor-size-default\",\n                            children: \"My Projects\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 58,\n                            columnNumber: 57\n                          }, this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 57,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 56,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"text-2xl font-bold \",\n                        children: selectedCategory.toUpperCase()\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 62,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"grid\",\n                        children: categories.map(function (category) {\n                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                            className: \"grid grid-flow-col auto-cols-max text-1xl btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full\",\n                            children: category\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 67,\n                            columnNumber: 53\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 65,\n                        columnNumber: 1\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"pt-20\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                          projects: filteredProjects()\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 73,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 72,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"clear\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 75,\n                        columnNumber: 49\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 43,\n                      columnNumber: 45\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 41\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 37\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PortfolioSection, \"qeyjsikfcmXzrgERXiub8Ahnkgk=\");\n\n_c = PortfolioSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"PortfolioSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3g/MmE4OSJdLCJuYW1lcyI6WyJQb3J0Zm9saW9TZWN0aW9uIiwicHJvamVjdHMiLCJkYXRhIiwiY2F0ZWdvcmllcyIsImZpbHRlciIsInBybyIsImluY2x1ZGVzIiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGVmYXVsdENhdGVnb3J5IiwidXNlU3RhdGUiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInVuc2hpZnQiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyZWREYXRhIiwic29ydCIsImEiLCJiIiwiaWQiLCJzbGljZSIsIm1hcCIsImtleSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0MsdUNBQUksQ0FBQ0QsUUFBdEI7QUFDQSxNQUFJRSxVQUFVLEdBQUcsRUFBakI7QUFDQUYsVUFBUSxDQUFDRyxNQUFULENBQWdCLFVBQUFDLEdBQUcsRUFBSTtBQUNuQixRQUFJLENBQUNGLFVBQVUsQ0FBQ0csUUFBWCxDQUFvQkQsR0FBRyxDQUFDRSxRQUF4QixDQUFMLEVBQXdDO0FBQ3BDSixnQkFBVSxDQUFDSyxJQUFYLENBQWdCSCxHQUFHLENBQUNFLFFBQXBCO0FBQ0g7QUFDSixHQUpEO0FBS0EsTUFBTUUsZUFBZSxHQUFHLEtBQXhCO0FBQ0E7O0FBVHVDLGtCQVVTQyxzREFBUSxDQUFDRCxlQUFELENBVmpCO0FBQUEsTUFVaENFLGdCQVZnQztBQUFBLE1BVWRDLG1CQVZjOztBQVd2Q1QsWUFBVSxDQUFDVSxPQUFYLENBQW1CSixlQUFuQjtBQUVBOztBQUNBLE1BQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJQyxZQUFZLEdB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QUFBSyxpQ0FBUyxFQUFDLE9BQWY7QUFBQSwrQ0FDSSxxRUFBQyx1RUFBRDtBQUFjLGtDQUFRLEVBQUVPLGdCQUFnQjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkE3QkosZUFnQ0k7QUFBSyxpQ0FBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkRIOztHQWpGdUJkLGdCOztLQUFBQSxnQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvSG9tZVNlY3Rpb25zL1BvcnRmb2xpb1NlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RzSG9sZGVyIGZyb20gXCIuL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzSG9sZGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhLmpzb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RzTGlzdCBmcm9tIFwiLi9Qcm9qZWN0c0NvbnRhaW5lci9Qcm9qZWN0c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvU2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxuICAgIHByb2plY3RzLmZpbHRlcihwcm8gPT4ge1xuICAgICAgICBpZiAoIWNhdGVnb3JpZXMuaW5jbHVkZXMocHJvLmNhdGVnb3J5KSkge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHByby5jYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkZWZhdWx0Q2F0ZWdvcnkgPSAnYWxsJztcbiAgICAvKiogU3RhdGUgZm9yIGN1cnJlbnQgYWN0aXZlIHN0YXR1cyB3aXNlIHByb2plY3RzIGxpc3RpbmcuICovXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoZGVmYXVsdENhdGVnb3J5KVxuICAgIGNhdGVnb3JpZXMudW5zaGlmdChkZWZhdWx0Q2F0ZWdvcnkpXG5cbiAgICAvKiogY3JlYXRpbmcgZmlsdGVyIGZvciBjYXRlZ29yeSB3aXNlIHByb2plY3RzIGxpc3RpbmcuLi4gKi9cbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyZWREYXRhID0gcHJvamVjdHM7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5ICE9PSBjYXRlZ29yaWVzWzBdKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKHBybyA9PiBzZWxlY3RlZENhdGVnb3J5ID09IHByby5jYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBwcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZERhdGEuc2xpY2UoMCwgNilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgZGF0YS1pZD1cIjYyNTE5NDkzXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50b3Itc2VjdGlvbiBlbGVtZW50b3ItdG9wLXNlY3Rpb24gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNjI1MTk0OTMgb3Atc2VjdGlvbiBlbGVtZW50b3Itc2VjdGlvbi1ib3hlZCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29udGFpbmVyIGVsZW1lbnRvci1jb2x1bW4tZ2FwLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4gZWxlbWVudG9yLWNvbC0xMDAgZWxlbWVudG9yLXRvcC1jb2x1bW4gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNWQ2NTAzNGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCI1ZDY1MDM0YVwiIGRhdGEtZWxlbWVudF90eXBlPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29sdW1uLXdyYXAgZWxlbWVudG9yLWVsZW1lbnQtcG9wdWxhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTNhNzg5ZDU4IGVsZW1lbnRvci13aWRnZXQgZWxlbWVudG9yLXdpZGdldC1jb2NvLXBvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjNhNzg5ZDU4XCIgZGF0YS1lbGVtZW50X3R5cGU9XCJ3aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0X3R5cGU9XCJjb2NvLXBvcnRmb2xpby5kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1pY29uXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWxpc3QgYnV0dG9uLWdyb3VwIGZpbHRlcnMtYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSl9IGtleT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIipcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtODIyNWJjMiBlbGVtZW50b3Itd2lkZ2V0IGVsZW1lbnRvci13aWRnZXQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVsZW1lbnRvci1oZWFkaW5nLXRpdGxlIGVsZW1lbnRvci1zaXplLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2plY3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgXCI+e3NlbGVjdGVkQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX08L2Rpdj5cblxuXG48ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1jb2wgYXV0by1jb2xzLW1heCB0ZXh0LTF4bCBidG4gYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC01IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0c0xpc3QgcHJvamVjdHM9e2ZpbHRlcmVkUHJvamVjdHMoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/HomeSections/PortfolioSection.jsx\n");

/***/ })

})