webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/PortfolioSection.jsx":
/*!******************************************************!*\
  !*** ./Components/HomeSections/PortfolioSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PortfolioSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectsContainer_ProjectsHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsHolder */ \"./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx\");\n/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-move */ \"./node_modules/react-flip-move/dist/react-flip-move.es.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ \"./data.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsList */ \"./Components/HomeSections/ProjectsContainer/ProjectsList.jsx\");\n/* harmony import */ var _ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/HomeSections/PortfolioSection.jsx\",\n    _s = $RefreshSig$();\n\n\n // import data from '../../data.json'\n\n\n\n\nfunction PortfolioSection() {\n  _s();\n\n  var _this = this;\n\n  var projects = _data_json__WEBPACK_IMPORTED_MODULE_3__.projects;\n  var categories = [];\n  projects.filter(function (pro) {\n    if (!categories.includes(pro.category)) {\n      categories.push(pro.category);\n    }\n  });\n  var defaultCategory = 'all';\n  /** State for current active status wise projects listing. */\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(defaultCategory),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  categories.unshift(defaultCategory);\n  /** creating filter for category wise projects listing... */\n\n  var filteredProjects = function filteredProjects() {\n    var filteredData = projects;\n\n    if (selectedCategory !== categories[0]) {\n      filteredData = filteredData.filter(function (pro) {\n        return selectedCategory == pro.category;\n      });\n    }\n\n    return filteredData.slice(0, 6);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      id: \"portfolio\",\n      \"data-id\": \"62519493\",\n      \"data-element_type\": \"section\",\n      className: \"elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"elementor-container elementor-column-gap-default\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"elementor-row\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d65034a\",\n            \"data-id\": \"5d65034a\",\n            \"data-element_type\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"elementor-column-wrap elementor-element-populated\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"elementor-widget-wrap\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"elementor-element elementor-element-3a789d58 elementor-widget elementor-widget-coco-portfolio\",\n                  \"data-id\": \"3a789d58\",\n                  \"data-element_type\": \"widget\",\n                  \"data-widget_type\": \"coco-portfolio.default\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"elementor-widget-container\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                      id: \"portfolio-wrapper\",\n                      className: \"relative\",\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"category-filter-icon\",\n                          children: \" \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 46,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 45,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter-list button-group filters-button-group\",\n                        children: categories.map(function (category, key) {\n                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                            onClick: function onClick() {\n                              return setSelectedCategory(category);\n                            },\n                            className: \"button\",\n                            \"data-filter\": \"*\",\n                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n                              children: category.toUpperCase()\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 53,\n                              columnNumber: 61\n                            }, _this)\n                          }, category, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 51,\n                            columnNumber: 57\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 49,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"elementor-element elementor-element-8225bc2 elementor-widget elementor-widget-heading\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"elementor-widget-container\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                            className: \"elementor-heading-title elementor-size-default\",\n                            children: \"My Projects\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 59,\n                            columnNumber: 57\n                          }, this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 58,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 57,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"text-2xl font-bold \",\n                        children: selectedCategory.toUpperCase()\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 63,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"pt-20\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_5___default.a, {\n                          projects: filteredProjects()\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 65,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 64,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"clear\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 67,\n                        columnNumber: 49\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 44,\n                      columnNumber: 45\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 41\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 37\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PortfolioSection, \"qeyjsikfcmXzrgERXiub8Ahnkgk=\");\n\n_c = PortfolioSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"PortfolioSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3g/MmE4OSJdLCJuYW1lcyI6WyJQb3J0Zm9saW9TZWN0aW9uIiwicHJvamVjdHMiLCJkYXRhIiwiY2F0ZWdvcmllcyIsImZpbHRlciIsInBybyIsImluY2x1ZGVzIiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGVmYXVsdENhdGVnb3J5IiwidXNlU3RhdGUiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInVuc2hpZnQiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyZWREYXRhIiwic2xpY2UiLCJtYXAiLCJrZXkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0MsdUNBQUksQ0FBQ0QsUUFBdEI7QUFDQSxNQUFJRSxVQUFVLEdBQUcsRUFBakI7QUFDQUYsVUFBUSxDQUFDRyxNQUFULENBQWdCLFVBQUFDLEdBQUcsRUFBSTtBQUNuQixRQUFJLENBQUNGLFVBQVUsQ0FBQ0csUUFBWCxDQUFvQkQsR0FBRyxDQUFDRSxRQUF4QixDQUFMLEVBQXdDO0FBQ3BDSixnQkFBVSxDQUFDSyxJQUFYLENBQWdCSCxHQUFHLENBQUNFLFFBQXBCO0FBQ0g7QUFDSixHQUpEO0FBS0EsTUFBTUUsZUFBZSxHQUFHLEtBQXhCO0FBQ0E7O0FBVHVDLGtCQVVTQyxzREFBUSxDQUFDRCxlQUFELENBVmpCO0FBQUEsTUFVaENFLGdCQVZnQztBQUFBLE1BVWRDLG1CQVZjOztBQVd2Q1QsWUFBVSxDQUFDVSxPQUFYLENBQW1CSixlQUFuQjtBQUVBOztBQUNBLE1BQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJQyxZQUFZLEdBQUdkLFFBQW5COztB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REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQXZFdUJkLGdCOztLQUFBQSxnQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvSG9tZVNlY3Rpb25zL1BvcnRmb2xpb1NlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RzSG9sZGVyIGZyb20gXCIuL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzSG9sZGVyXCI7XG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJ1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vZGF0YS5qc29uJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vZGF0YS5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0c0xpc3QgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb1NlY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xuICAgIGxldCBjYXRlZ29yaWVzID0gW11cbiAgICBwcm9qZWN0cy5maWx0ZXIocHJvID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKHByby5jYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChwcm8uY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGVmYXVsdENhdGVnb3J5ID0gJ2FsbCc7XG4gICAgLyoqIFN0YXRlIGZvciBjdXJyZW50IGFjdGl2ZSBzdGF0dXMgd2lzZSBwcm9qZWN0cyBsaXN0aW5nLiAqL1xuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKGRlZmF1bHRDYXRlZ29yeSlcbiAgICBjYXRlZ29yaWVzLnVuc2hpZnQoZGVmYXVsdENhdGVnb3J5KVxuXG4gICAgLyoqIGNyZWF0aW5nIGZpbHRlciBmb3IgY2F0ZWdvcnkgd2lzZSBwcm9qZWN0cyBsaXN0aW5nLi4uICovXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgdmFyIGZpbHRlcmVkRGF0YSA9IHByb2plY3RzO1xuICAgICAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeSAhPT0gY2F0ZWdvcmllc1swXSkge1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhLmZpbHRlcihwcm8gPT4gc2VsZWN0ZWRDYXRlZ29yeSA9PSBwcm8uY2F0ZWdvcnkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YS5zbGljZSgwLCA2KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBkYXRhLWlkPVwiNjI1MTk0OTNcIiBkYXRhLWVsZW1lbnRfdHlwZT1cInNlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnRvci1zZWN0aW9uIGVsZW1lbnRvci10b3Atc2VjdGlvbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC02MjUxOTQ5MyBvcC1zZWN0aW9uIGVsZW1lbnRvci1zZWN0aW9uLWJveGVkIGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0IGVsZW1lbnRvci1zZWN0aW9uLWhlaWdodC1kZWZhdWx0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb250YWluZXIgZWxlbWVudG9yLWNvbHVtbi1nYXAtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWNvbHVtbiBlbGVtZW50b3ItY29sLTEwMCBlbGVtZW50b3ItdG9wLWNvbHVtbiBlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC01ZDY1MDM0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjVkNjUwMzRhXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4td3JhcCBlbGVtZW50b3ItZWxlbWVudC1wb3B1bGF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtM2E3ODlkNTggZWxlbWVudG9yLXdpZGdldCBlbGVtZW50b3Itd2lkZ2V0LWNvY28tcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiM2E3ODlkNThcIiBkYXRhLWVsZW1lbnRfdHlwZT1cIndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXRfdHlwZT1cImNvY28tcG9ydGZvbGlvLmRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci13aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8td3JhcHBlclwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWljb25cIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXItbGlzdCBidXR0b24tZ3JvdXAgZmlsdGVycy1idXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KX0ga2V5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiIGRhdGEtZmlsdGVyPVwiKlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItZWxlbWVudCBlbGVtZW50b3ItZWxlbWVudC04MjI1YmMyIGVsZW1lbnRvci13aWRnZXQgZWxlbWVudG9yLXdpZGdldC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWhlYWRpbmctdGl0bGUgZWxlbWVudG9yLXNpemUtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBcIj57c2VsZWN0ZWRDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0c0xpc3QgcHJvamVjdHM9e2ZpbHRlcmVkUHJvamVjdHMoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/HomeSections/PortfolioSection.jsx\n");

/***/ }),

/***/ "./Components/HomeSections/ProjectsContainer/ProjectsList.jsx":
/*!********************************************************************!*\
  !*** ./Components/HomeSections/ProjectsContainer/ProjectsList.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL0NvbXBvbmVudHMvSG9tZVNlY3Rpb25zL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzTGlzdC5qc3guanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/HomeSections/ProjectsContainer/ProjectsList.jsx\n");

/***/ }),

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
false,

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
false,

/***/ "./node_modules/enquire.js/src/Util.js":
false,

/***/ "./node_modules/enquire.js/src/index.js":
false,

/***/ "./node_modules/json2mq/index.js":
false,

/***/ "./node_modules/lodash.debounce/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/react-slick/lib/arrows.js":
false,

/***/ "./node_modules/react-slick/lib/default-props.js":
false,

/***/ "./node_modules/react-slick/lib/dots.js":
false,

/***/ "./node_modules/react-slick/lib/index.js":
false,

/***/ "./node_modules/react-slick/lib/initial-state.js":
false,

/***/ "./node_modules/react-slick/lib/inner-slider.js":
false,

/***/ "./node_modules/react-slick/lib/slider.js":
false,

/***/ "./node_modules/react-slick/lib/track.js":
false,

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/string-convert/camel2hyphen.js":
false

})