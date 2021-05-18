webpackHotUpdate_N_E("pages/blogs",{

/***/ "./Components/Blogs/RecentArticals.jsx":
/*!*********************************************!*\
  !*** ./Components/Blogs/RecentArticals.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blogs.json */ \"./blogs.json\");\nvar _blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blogs.json */ \"./blogs.json\", 1);\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/Blogs/RecentArticals.jsx\",\n    _this = undefined;\n\n\n\nvar RecentArticles = function RecentArticles() {\n  console.log('data', _blogs_json__WEBPACK_IMPORTED_MODULE_1__[\"data\"]);\n\n  var getDateFormat = function getDateFormat(date) {\n    var newDate = new Date(date).getDate() + \"/\" + new Date(date).getMonth() + \"/\" + new Date(date).getFullYear();\n    return newDate;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"pt-6 pb-12 mt-40 \",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"card\",\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-center uppercase text-3xl xl:text-3xl\",\n        children: \"Recent Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n        children: _blogs_json__WEBPACK_IMPORTED_MODULE_1__[\"data\"].map(function (blog) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex flex-col md:flex-row overflow-hidden  bg-white rounded-lg shadow-xl  mt-6 w-100 mx-2 h-80\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \" w-auto md:w-1/2\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                className: \"inset-0 h-full w-full object-cover object-center\",\n                src: \"https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80\",\n                alt: \"Image 1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 19,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-full py-4 px-12 text-gray-800 flex flex-col justify-between\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                className: \" text-lg leading-tight truncate text-2xl\",\n                children: blog.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                dangerouslySetInnerHTML: {\n                  __html: blog.excerpt\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2\",\n                children: [\"Vikas Ukani \\u2022 \", getDateFormat(blog.date)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 8\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = RecentArticles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentArticles);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecentArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9CbG9ncy9SZWNlbnRBcnRpY2Fscy5qc3g/NDFkNiJdLCJuYW1lcyI6WyJSZWNlbnRBcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0RGF0ZUZvcm1hdCIsImRhdGUiLCJuZXdEYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibWFwIiwiYmxvZyIsInRpdGxlIiwiX19odG1sIiwiZXhjZXJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkMsZ0RBQXBCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsSUFBSSxFQUFJO0FBQzdCLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNGLElBQVQsRUFBZUcsT0FBZixLQUEyQixHQUEzQixHQUFpQyxJQUFJRCxJQUFKLENBQVNGLElBQVQsRUFBZUksUUFBZixFQUFqQyxHQUE2RCxHQUE3RCxHQUFtRSxJQUFJRixJQUFKLENBQVNGLElBQVQsRUFBZUssV0FBZixFQUFqRjtBQUNBLFdBQU9KLE9BQVA7QUFDQSxHQUhEOztBQUtBLHNCQUNDO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0M7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFlLGVBQVMsRUFBQyxFQUF6QjtBQUFBLDhCQUNDO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBSyxpQkFBUyxFQUFDLGdEQUFmO0FBQUEsa0JBQ0VILGdEQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFBQyxJQUFJLEVBQUk7QUFDakIsOEJBQ0M7QUFBSyxxQkFBUyxFQUFDLGdHQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQ0M7QUFBSyx5QkFBUyxFQUFDLGtEQUFmO0FBQWtFLG1CQUFHLEVBQUMsa0tBQXRFO0FBQTZQLG1CQUFHLEVBQUM7QUFBalE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFLQztBQUFLLHVCQUFTLEVBQUMsK0RBQWY7QUFBQSxzQ0FDQztBQUFJLHlCQUFTLEVBQUMsMENBQWQ7QUFBQSwwQkFDRUEsSUFBSSxDQUFDQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFJQztBQUFLLHVDQUF1QixFQUFFO0FBQUVDLHdCQUFNLEVBQUVGLElBQUksQ0FBQ0c7QUFBZjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpELGVBUUM7QUFBRyx5QkFBUyxFQUFDLGtFQUFiO0FBQUEsa0RBQ3FCWCxhQUFhLENBQUNRLElBQUksQ0FBQ1AsSUFBTixDQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQW9CQSxTQXJCQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnQ0EsQ0F2Q0Q7O0tBQU1MLGM7QUF5Q1NBLDZFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9CbG9ncy9SZWNlbnRBcnRpY2Fscy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vYmxvZ3MuanNvbidcblxuY29uc3QgUmVjZW50QXJ0aWNsZXMgPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcblx0Y29uc3QgZ2V0RGF0ZUZvcm1hdCA9IGRhdGUgPT4ge1xuXHRcdGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpICsgXCIvXCIgKyBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgXCIvXCIgKyBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpXG5cdFx0cmV0dXJuIG5ld0RhdGVcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTEyIG10LTQwIFwiPlxuXHRcdFx0PGRpdiBpZD1cImNhcmRcIiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LTN4bCB4bDp0ZXh0LTN4bFwiPlJlY2VudCBBcnRpY2xlczwvaDI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctMTAwIGxnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdHtkYXRhLm1hcChibG9nID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBvdmVyZmxvdy1oaWRkZW4gIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsICBtdC02IHctMTAwIG14LTIgaC04MFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIHctYXV0byBtZDp3LTEvMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnNldC0wIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2MjgyNjMwMzA4Ni0zMjk0MjZkMWFlZjU/aXhsaWI9cmItMS4yLjEmYW1wO2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZhbXA7YXV0bz1mb3JtYXQmYW1wO2ZpdD1jcm9wJmFtcDt3PTEwNTAmYW1wO3E9ODBcIiBhbHQ9XCJJbWFnZSAxXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcHgtMTIgdGV4dC1ncmF5LTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIiB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgdHJ1bmNhdGUgdGV4dC0yeGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Jsb2cudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJsb2cuZXhjZXJwdCB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxwIGNsYXNzTmFtZT1cIm10LTJcIj4gKi99XG5cblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8L3A+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgbXQtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRWaWthcyBVa2FuaSAmYnVsbDsge2dldERhdGVGb3JtYXQoYmxvZy5kYXRlKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSl9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50QXJ0aWNsZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Blogs/RecentArticals.jsx\n");

/***/ })

})