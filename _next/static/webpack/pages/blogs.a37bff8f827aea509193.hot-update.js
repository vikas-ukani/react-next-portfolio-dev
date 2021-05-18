webpackHotUpdate_N_E("pages/blogs",{

/***/ "./Components/Blogs/RecentArticals.jsx":
/*!*********************************************!*\
  !*** ./Components/Blogs/RecentArticals.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blogs.json */ \"./blogs.json\");\nvar _blogs_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../blogs.json */ \"./blogs.json\", 1);\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/Blogs/RecentArticals.jsx\",\n    _this = undefined;\n\n\n\nvar RecentArticles = function RecentArticles() {\n  console.log('data', _blogs_json__WEBPACK_IMPORTED_MODULE_1__[\"data\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"pt-6 pb-12 mt-40 \",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      id: \"card\",\n      className: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-center uppercase text-3xl xl:text-3xl\",\n        children: \"Recent Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n        children: _blogs_json__WEBPACK_IMPORTED_MODULE_1__[\"data\"].map(function (blog) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex flex-col md:flex-row overflow-hidden  bg-white rounded-lg shadow-xl  mt-6 w-100 mx-2 h-80\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \" w-auto md:w-1/2\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                className: \"inset-0 h-full w-full object-cover object-center\",\n                src: \"https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80\",\n                alt: \"Image 1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                className: \"  text-lg leading-tight truncate\",\n                children: blog.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                dangerouslySetInnerHTML: {\n                  __html: blog.excerpt\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2\",\n                children: [\"Vikas Ukani \\u2022 \", Date(blog.date).f]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 8\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = RecentArticles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentArticles);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecentArticles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9CbG9ncy9SZWNlbnRBcnRpY2Fscy5qc3g/NDFkNiJdLCJuYW1lcyI6WyJSZWNlbnRBcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwiYmxvZyIsInRpdGxlIiwiX19odG1sIiwiZXhjZXJwdCIsIkRhdGUiLCJkYXRlIiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkMsZ0RBQXBCO0FBR0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDQztBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQWUsZUFBUyxFQUFDLEVBQXpCO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFDLDRDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFLLGlCQUFTLEVBQUMsZ0RBQWY7QUFBQSxrQkFDRUEsZ0RBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLElBQUksRUFBSTtBQUNqQiw4QkFDQztBQUFLLHFCQUFTLEVBQUMsZ0dBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxxQ0FDQztBQUFLLHlCQUFTLEVBQUMsa0RBQWY7QUFBa0UsbUJBQUcsRUFBQyxrS0FBdEU7QUFBNlAsbUJBQUcsRUFBQztBQUFqUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUtDO0FBQUssdUJBQVMsRUFBQyw4REFBZjtBQUFBLHNDQUNDO0FBQUkseUJBQVMsRUFBQyxrQ0FBZDtBQUFBLDBCQUNFQSxJQUFJLENBQUNDO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUlDO0FBQUssdUNBQXVCLEVBQUU7QUFBQ0Msd0JBQU0sRUFBRUYsSUFBSSxDQUFDRztBQUFkO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQsZUFRQztBQUFHLHlCQUFTLEVBQUMsa0VBQWI7QUFBQSxrREFDc0JDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxJQUFOLENBQUosQ0FBZ0JDLENBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBb0JBLFNBckJBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWdDQSxDQXBDRDs7S0FBTVgsYztBQXNDU0EsNkVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL0Jsb2dzL1JlY2VudEFydGljYWxzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9ibG9ncy5qc29uJ1xuXG5jb25zdCBSZWNlbnRBcnRpY2xlcyA9ICgpID0+IHtcblx0Y29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcGItMTIgbXQtNDAgXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiY2FyZFwiIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRleHQtM3hsIHhsOnRleHQtM3hsXCI+UmVjZW50IEFydGljbGVzPC9oMj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdy0xMDAgbGc6dy00LzUgbXgtYXV0byBmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHRcdFx0e2RhdGEubWFwKGJsb2cgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG92ZXJmbG93LWhpZGRlbiAgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGwgIG10LTYgdy0xMDAgbXgtMiBoLTgwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgdy1hdXRvIG1kOnctMS8yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImluc2V0LTAgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDYyODI2MzAzMDg2LTMyOTQyNmQxYWVmNT9peGxpYj1yYi0xLjIuMSZhbXA7aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmFtcDthdXRvPWZvcm1hdCZhbXA7Zml0PWNyb3AmYW1wO3c9MTA1MCZhbXA7cT04MFwiIGFsdD1cIkltYWdlIDFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNCBweC02IHRleHQtZ3JheS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCIgIHRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YmxvZy50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBibG9nLmV4Y2VycHR9fSAvPiBcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8cCBjbGFzc05hbWU9XCJtdC0yXCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8L3A+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgbXQtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRWaWthcyBVa2FuaSAmYnVsbDsgeyBEYXRlKGJsb2cuZGF0ZSkuZn1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSl9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50QXJ0aWNsZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Blogs/RecentArticals.jsx\n");

/***/ })

})