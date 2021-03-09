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
    return filteredData.map(function (project, key) {
      return (
        /*#__PURE__*/
        //  id="p-item-65"
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: key,
          className: "grid-item element-item p_one_third",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "item-link ajax-portfolio",
            href: "portfolio/item-1/index.html",
            "data-id": key,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              width: "600",
              height: "600",
              src: "https://picsum.photos/600/600",
              className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
              alt: project.name,
              sizes: "(max-width: 600px) 100vw, 600px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text text-center ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                onMouseEnter: function onMouseEnter(e) {
                  return e.target.className = 'text-light-green';
                },
                onMouseLeave: function onMouseLeave(e) {
                  return e.target.className = 'text-light-orange';
                },
                children: project.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this)
      );
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
                          lineNumber: 63,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
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
                            lineNumber: 68,
                            columnNumber: 57
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "grid",
                        id: "portfolio-grid",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "grid-sizer",
                          children: " "
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProjectsList, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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

/***/ }),

/***/ "./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx":
/*!**********************************************************************!*\
  !*** ./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\Components\\HomeSections\\ProjectsContainer\\ProjectsHolder.jsx",
    _this = undefined;

var ProjectsHolder = function ProjectsHolder() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "grid",
    id: "portfolio-grid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid-sizer",
      children: " "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "p-item-65",
      className: "grid-item element-item p_one_third text",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link ajax-portfolio",
        href: "portfolio/item-1/index.html",
        "data-id": "65",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_01.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_01-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Work"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid-item element-item p_one_third image",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link",
        href: "wp-content/uploads/2019/11/img_blog_01.jpg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_02.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio-design",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_02-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Plants"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid-item element-item p_one_third video",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link",
        href: "https://vimeo.com/199192931",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_03.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio-item",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_03-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Handmade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Video"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "p-item-94",
      className: "grid-item element-item p_one_third text",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link ajax-portfolio",
        href: "portfolio/item-4/index.html",
        "data-id": "94",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_04.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio-content",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_04-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Architecture"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid-item element-item p_one_third image",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link",
        href: "wp-content/uploads/2019/11/img_blog_03.jpg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_05.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio-items",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_05-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Photography"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "p-item-92",
      className: "grid-item element-item p_one_third text",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "item-link ajax-portfolio",
        href: "portfolio/item-6/index.html",
        "data-id": "92",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          width: "600",
          height: "600",
          src: "images/portfolio_item_06.jpg",
          className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
          alt: "portfolio-data",
          loading: "lazy",
          srcSet: "https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06.jpg 600w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-300x300.jpg 300w, https://demo.cocobasic.com/volos-wp/demo-3/wp-content/uploads/2019/12/portfolio_item_06-150x150.jpg 150w",
          sizes: "(max-width: 600px) 100vw, 600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "portfolio-text-holder",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "portfolio-text-wrapper",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-text",
              children: "Art"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "portfolio-cat",
              children: "Text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, _this);
};

_c = ProjectsHolder;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsHolder);

var _c;

$RefreshReg$(_c, "ProjectsHolder");

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

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"id\":1,\"name\":\"php 1\",\"category\":\"php\"},{\"id\":1,\"name\":\"javascript 2\",\"category\":\"javascript\"},{\"id\":1,\"name\":\"python 3\",\"category\":\"python\"},{\"id\":1,\"name\":\"php 4\",\"category\":\"php\"},{\"id\":1,\"name\":\"javascript 5\",\"category\":\"javascript\"},{\"id\":1,\"name\":\"python 6\",\"category\":\"python\"},{\"id\":1,\"name\":\"machine 64\",\"category\":\"machine\"},{\"id\":1,\"name\":\"javascript 53\",\"category\":\"javascript\"},{\"id\":1,\"name\":\"python 54asd\",\"category\":\"python\"},{\"id\":1,\"name\":\"javascript asd\",\"category\":\"javascript\"}]}");

/***/ }),

/***/ "./node_modules/react-flip-move/dist/react-flip-move.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-flip-move/dist/react-flip-move.es.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function warnOnce(msg) {
  var hasWarned = false;
  return function () {
    if (!hasWarned) {
      console.warn(msg);
      hasWarned = true;
    }
  };
}


var statelessFunctionalComponentSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n');

var primitiveNodeSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');

var invalidTypeForTimingProp = function invalidTypeForTimingProp(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe prop you provided for \'' + args.prop + '\' is invalid. It needs to be a positive integer, or a string that can be resolved to a number. The value you provided is \'' + args.value + '\'.\n\nAs a result,  the default value for this parameter will be used, which is \'' + args.defaultValue + '\'.\n');
};

var invalidEnterLeavePreset = function invalidEnterLeavePreset(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe enter/leave preset you provided is invalid. We don\'t currently have a \'' + args.value + ' preset.\'\n\nAcceptable values are ' + args.acceptableValues + '. The default value of \'' + args.defaultValue + '\' will be used.\n');
};

var parentNodePositionStatic = warnOnce('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n');

var childIsDisabled = warnOnce('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n');

var enterPresets = {
  elevator: {
    from: { transform: 'scale(0)', opacity: '0' },
    to: { transform: '', opacity: '' }
  },
  fade: {
    from: { opacity: '0' },
    to: { opacity: '' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(0)', transformOrigin: 'center top' },
    to: { transform: '', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(0)', transformOrigin: 'left center' },
    to: { transform: '', transformOrigin: 'left center' }
  },
  none: null
};
/**
 * React Flip Move | enterLeavePresets
 * (c) 2016-present Joshua Comeau
 *
 * This contains the master list of presets available for enter/leave animations,
 * along with the mapping between preset and styles.
 */


var leavePresets = {
  elevator: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0)', opacity: '0' }
  },
  fade: {
    from: { opacity: '1' },
    to: { opacity: '0' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(1)', transformOrigin: 'center top' },
    to: { transform: 'scaleY(0)', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(1)', transformOrigin: 'left center' },
    to: { transform: 'scaleX(0)', transformOrigin: 'left center' }
  },
  none: null
};

// For now, appearPresets will be identical to enterPresets.
// Assigning a custom export in case we ever want to add appear-specific ones.
var appearPresets = enterPresets;

var defaultPreset = 'elevator';
var disablePreset = 'none';

var find = function find(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
};


var every = function every(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line import/no-mutable-exports
var _isArray = function isArray(arr) {
  _isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
  return _isArray(arr);
};

var isElementAnSFC = function isElementAnSFC(element) {
  var isNativeDOMElement = typeof element.type === 'string';

  if (isNativeDOMElement) {
    return false;
  }

  return typeof element.type === 'function' && !element.type.prototype.isReactComponent;
};

function omit(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (attrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

function arraysEqual(a, b) {
  var sameObject = a === b;
  if (sameObject) {
    return true;
  }

  var notBothArrays = !_isArray(a) || !_isArray(b);
  var differentLengths = a.length !== b.length;

  if (notBothArrays || differentLengths) {
    return false;
  }

  return every(function (element, index) {
    return element === b[index];
  }, a);
}

function memoizeString(fn) {
  var cache = {};

  return function (str) {
    if (!cache[str]) {
      cache[str] = fn(str);
    }
    return cache[str];
  };
}

var hyphenate = memoizeString(function (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * React Flip Move | propConverter
 * (c) 2016-present Joshua Comeau
 *
 * Abstracted away a bunch of the messy business with props.
 *   - props flow types and defaultProps
 *   - Type conversion (We accept 'string' and 'number' values for duration,
 *     delay, and other fields, but we actually need them to be ints.)
 *   - Children conversion (we need the children to be an array. May not always
 *     be, if a single child is passed in.)
 *   - Resolving animation presets into their base CSS styles
 */
/* eslint-disable block-scoped-var */

// eslint-disable-next-line no-duplicate-imports


function propConverter(ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(FlipMovePropConverter, _Component);

    function FlipMovePropConverter() {
      classCallCheck(this, FlipMovePropConverter);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    // eslint-disable-next-line class-methods-use-this
    FlipMovePropConverter.prototype.checkChildren = function checkChildren(children) {
      // Skip all console warnings in production.
      // Bail early, to avoid unnecessary work.
      if (false) {}

      // same as React.Node, but without fragments, see https://github.com/facebook/flow/issues/4781


      // FlipMove does not support stateless functional components.
      // Check to see if any supplied components won't work.
      // If the child doesn't have a key, it means we aren't animating it.
      // It's allowed to be an SFC, since we ignore it.
      react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (child) {
        // null, undefined, and booleans will be filtered out by Children.toArray
        if (child == null || typeof child === 'boolean') {
          return;
        }

        if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
          primitiveNodeSupplied();
          return;
        }

        if (isElementAnSFC(child) && child.key != null) {
          statelessFunctionalComponentSupplied();
        }
      });
    };

    FlipMovePropConverter.prototype.convertProps = function convertProps(props) {
      var workingProps = {
        // explicitly bypass the props that don't need conversion
        children: props.children,
        easing: props.easing,
        onStart: props.onStart,
        onFinish: props.onFinish,
        onStartAll: props.onStartAll,
        onFinishAll: props.onFinishAll,
        typeName: props.typeName,
        disableAllAnimations: props.disableAllAnimations,
        getPosition: props.getPosition,
        maintainContainerHeight: props.maintainContainerHeight,
        verticalAlignment: props.verticalAlignment,

        // Do string-to-int conversion for all timing-related props
        duration: this.convertTimingProp('duration'),
        delay: this.convertTimingProp('delay'),
        staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
        staggerDelayBy: this.convertTimingProp('staggerDelayBy'),

        // Our enter/leave animations can be specified as boolean (default or
        // disabled), string (preset name), or object (actual animation values).
        // Let's standardize this so that they're always objects
        appearAnimation: this.convertAnimationProp(props.appearAnimation, appearPresets),
        enterAnimation: this.convertAnimationProp(props.enterAnimation, enterPresets),
        leaveAnimation: this.convertAnimationProp(props.leaveAnimation, leavePresets),

        delegated: {}
      };

      this.checkChildren(workingProps.children);

      // Gather any additional props;
      // they will be delegated to the ReactElement created.
      var primaryPropKeys = Object.keys(workingProps);
      var delegatedProps = omit(this.props, primaryPropKeys);

      // The FlipMove container element needs to have a non-static position.
      // We use `relative` by default, but it can be overridden by the user.
      // Now that we're delegating props, we need to merge this in.
      delegatedProps.style = _extends({
        position: 'relative'
      }, delegatedProps.style);

      workingProps.delegated = delegatedProps;

      return workingProps;
    };

    FlipMovePropConverter.prototype.convertTimingProp = function convertTimingProp(prop) {
      var rawValue = this.props[prop];

      var value = typeof rawValue === 'number' ? rawValue : parseInt(rawValue, 10);

      if (isNaN(value)) {
        var defaultValue = FlipMovePropConverter.defaultProps[prop];

        if (true) {
          invalidTypeForTimingProp({
            prop: prop,
            value: rawValue,
            defaultValue: defaultValue
          });
        }

        return defaultValue;
      }

      return value;
    };

    // eslint-disable-next-line class-methods-use-this


    FlipMovePropConverter.prototype.convertAnimationProp = function convertAnimationProp(animation, presets) {
      switch (typeof animation === 'undefined' ? 'undefined' : _typeof(animation)) {
        case 'boolean':
          {
            // If it's true, we want to use the default preset.
            // If it's false, we want to use the 'none' preset.
            return presets[animation ? defaultPreset : disablePreset];
          }

        case 'string':
          {
            var presetKeys = Object.keys(presets);

            if (presetKeys.indexOf(animation) === -1) {
              if (true) {
                invalidEnterLeavePreset({
                  value: animation,
                  acceptableValues: presetKeys.join(', '),
                  defaultValue: defaultPreset
                });
              }

              return presets[defaultPreset];
            }

            return presets[animation];
          }

        default:
          {
            return animation;
          }
      }
    };

    FlipMovePropConverter.prototype.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComposedComponent, this.convertProps(this.props));
    };

    return FlipMovePropConverter;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
    easing: 'ease-in-out',
    duration: 350,
    delay: 0,
    staggerDurationBy: 0,
    staggerDelayBy: 0,
    typeName: 'div',
    enterAnimation: defaultPreset,
    leaveAnimation: defaultPreset,
    disableAllAnimations: false,
    getPosition: function getPosition(node) {
      return node.getBoundingClientRect();
    },
    maintainContainerHeight: false,
    verticalAlignment: 'top'
  }, _temp;
}

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * These methods read from and write to the DOM.
 * They almost always have side effects, and will hopefully become the
 * only spot in the codebase with impure functions.
 */
function applyStylesToDOMNode(_ref) {
  var domNode = _ref.domNode,
      styles = _ref.styles;

  // Can't just do an object merge because domNode.styles is no regular object.
  // Need to do it this way for the engine to fire its `set` listeners.
  Object.keys(styles).forEach(function (key) {
    domNode.style.setProperty(hyphenate(key), styles[key]);
  });
}

// Modified from Modernizr
function whichTransitionEvent() {
  var transitions = {
    transition: 'transitionend',
    '-o-transition': 'oTransitionEnd',
    '-moz-transition': 'transitionend',
    '-webkit-transition': 'webkitTransitionEnd'
  };

  // If we're running in a browserless environment (eg. SSR), it doesn't apply.
  // Return a placeholder string, for consistent type return.
  if (typeof document === 'undefined') return '';

  var el = document.createElement('fakeelement');

  var match = find(function (t) {
    return el.style.getPropertyValue(t) !== undefined;
  }, Object.keys(transitions));

  // If no `transition` is found, we must be running in a browser so ancient,
  // React itself won't run. Return an empty string, for consistent type return
  return match ? transitions[match] : '';
}

var getRelativeBoundingBox = function getRelativeBoundingBox(_ref2) {
  var childDomNode = _ref2.childDomNode,
      parentDomNode = _ref2.parentDomNode,
      getPosition = _ref2.getPosition;

  var parentBox = getPosition(parentDomNode);

  var _getPosition = getPosition(childDomNode),
      top = _getPosition.top,
      left = _getPosition.left,
      right = _getPosition.right,
      bottom = _getPosition.bottom,
      width = _getPosition.width,
      height = _getPosition.height;

  return {
    top: top - parentBox.top,
    left: left - parentBox.left,
    right: parentBox.right - right,
    bottom: parentBox.bottom - bottom,
    width: width,
    height: height
  };
};

/** getPositionDelta
 * This method returns the delta between two bounding boxes, to figure out
 * how many pixels on each axis the element has moved.
 *
 */
var getPositionDelta = function getPositionDelta(_ref3) {
  var childDomNode = _ref3.childDomNode,
      childBoundingBox = _ref3.childBoundingBox,
      parentBoundingBox = _ref3.parentBoundingBox,
      getPosition = _ref3.getPosition;

  // TEMP: A mystery bug is sometimes causing unnecessary boundingBoxes to
  var defaultBox = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    width: 0
  };

  // Our old box is its last calculated position, derived on mount or at the
  // start of the previous animation.
  var oldRelativeBox = childBoundingBox || defaultBox;
  var parentBox = parentBoundingBox || defaultBox;

  // Our new box is the new final resting place: Where we expect it to wind up
  // after the animation. First we get the box in absolute terms (AKA relative
  // to the viewport), and then we calculate its relative box (relative to the
  // parent container)
  var newAbsoluteBox = getPosition(childDomNode);
  var newRelativeBox = {
    top: newAbsoluteBox.top - parentBox.top,
    left: newAbsoluteBox.left - parentBox.left
  };

  return [oldRelativeBox.left - newRelativeBox.left, oldRelativeBox.top - newRelativeBox.top];
};

/** removeNodeFromDOMFlow
 * This method does something very sneaky: it removes a DOM node from the
 * document flow, but without actually changing its on-screen position.
 *
 * It works by calculating where the node is, and then applying styles
 * so that it winds up being positioned absolutely, but in exactly the
 * same place.
 *
 * This is a vital part of the FLIP technique.
 */
var removeNodeFromDOMFlow = function removeNodeFromDOMFlow(childData, verticalAlignment) {
  var domNode = childData.domNode,
      boundingBox = childData.boundingBox;


  if (!domNode || !boundingBox) {
    return;
  }

  // For this to work, we have to offset any given `margin`.
  var computed = window.getComputedStyle(domNode);

  // We need to clean up margins, by converting and removing suffix:
  // eg. '21px' -> 21
  var marginAttrs = ['margin-top', 'margin-left', 'margin-right'];
  var margins = marginAttrs.reduce(function (acc, margin) {
    var _babelHelpers$extends;

    var propertyVal = computed.getPropertyValue(margin);

    return _extends({}, acc, (_babelHelpers$extends = {}, _babelHelpers$extends[margin] = Number(propertyVal.replace('px', '')), _babelHelpers$extends));
  }, {});

  // If we're bottom-aligned, we need to add the height of the child to its
  // top offset. This is because, when the container is bottom-aligned, its
  // height shrinks from the top, not the bottom. We're removing this node
  // from the flow, so the top is going to drop by its height.
  var topOffset = verticalAlignment === 'bottom' ? boundingBox.top - boundingBox.height : boundingBox.top;

  var styles = {
    position: 'absolute',
    top: topOffset - margins['margin-top'] + 'px',
    left: boundingBox.left - margins['margin-left'] + 'px',
    right: boundingBox.right - margins['margin-right'] + 'px'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

/** updateHeightPlaceholder
 * An optional property to FlipMove is a `maintainContainerHeight` boolean.
 * This property creates a node that fills space, so that the parent
 * container doesn't collapse when its children are removed from the
 * document flow.
 */
var updateHeightPlaceholder = function updateHeightPlaceholder(_ref4) {
  var domNode = _ref4.domNode,
      parentData = _ref4.parentData,
      getPosition = _ref4.getPosition;

  var parentDomNode = parentData.domNode;
  var parentBoundingBox = parentData.boundingBox;

  if (!parentDomNode || !parentBoundingBox) {
    return;
  }

  // We need to find the height of the container *without* the placeholder.
  // Since it's possible that the placeholder might already be present,
  // we first set its height to 0.
  // This allows the container to collapse down to the size of just its
  // content (plus container padding or borders if any).
  applyStylesToDOMNode({ domNode: domNode, styles: { height: '0' } });

  // Find the distance by which the container would be collapsed by elements
  // leaving. We compare the freshly-available parent height with the original,
  // cached container height.
  var originalParentHeight = parentBoundingBox.height;
  var collapsedParentHeight = getPosition(parentDomNode).height;
  var reductionInHeight = originalParentHeight - collapsedParentHeight;

  // If the container has become shorter, update the padding element's
  // height to take up the difference. Otherwise set its height to zero,
  // so that it has no effect.
  var styles = {
    height: reductionInHeight > 0 ? reductionInHeight + 'px' : '0'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

var getNativeNode = function getNativeNode(element) {
  // When running in a windowless environment, abort!
  if (typeof HTMLElement === 'undefined') {
    return null;
  }

  // `element` may already be a native node.
  if (element instanceof HTMLElement) {
    return element;
  }

  // While ReactDOM's `findDOMNode` is discouraged, it's the only
  // publicly-exposed way to find the underlying DOM node for
  // composite components.
  var foundNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(element);

  if (foundNode && foundNode.nodeType === Node.TEXT_NODE) {
    // Text nodes are not supported
    return null;
  }
  // eslint-disable-next-line flowtype/no-weak-types
  return foundNode;
};

var createTransitionString = function createTransitionString(index, props) {
  var delay = props.delay,
      duration = props.duration;
  var staggerDurationBy = props.staggerDurationBy,
      staggerDelayBy = props.staggerDelayBy,
      easing = props.easing;


  delay += index * staggerDelayBy;
  duration += index * staggerDurationBy;

  var cssProperties = ['transform', 'opacity'];

  return cssProperties.map(function (prop) {
    return prop + ' ' + duration + 'ms ' + easing + ' ' + delay + 'ms';
  }).join(', ');
};

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * For information on how this code is laid out, check out CODE_TOUR.md
 */

/* eslint-disable react/prop-types */

// eslint-disable-next-line no-duplicate-imports


var transitionEnd = whichTransitionEvent();
var noBrowserSupport = !transitionEnd;

function getKey(childData) {
  return childData.key || '';
}

function getElementChildren(children) {
  // Fix incomplete typing of Children.toArray
  // eslint-disable-next-line flowtype/no-weak-types
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
}

var FlipMove$1 = function (_Component) {
  inherits(FlipMove, _Component);

  function FlipMove() {
    var _temp, _this, _ret;

    classCallCheck(this, FlipMove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      children: getElementChildren(
      // `this.props` ought to always be defined at this point, but a report
      // was made about it not being defined in IE10.
      // TODO: Test in IE10, to see if there's an underlying cause that can
      // be addressed.
      _this.props ? _this.props.children : []).map(function (element) {
        return _extends({}, element, {
          element: element,
          appearing: true
        });
      })
    }, _this.childrenData = {}, _this.parentData = {
      domNode: null,
      boundingBox: null
    }, _this.heightPlaceholderData = {
      domNode: null
    }, _this.remainingAnimations = 0, _this.childrenToAnimate = [], _this.findDOMContainer = function () {
      // eslint-disable-next-line react/no-find-dom-node
      var domNode = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this);
      var parentNode = domNode && domNode.parentNode;

      // This ought to be impossible, but handling it for Flow's sake.
      if (!parentNode || !(parentNode instanceof HTMLElement)) {
        return;
      }

      // If the parent node has static positioning, leave animations might look
      // really funky. Let's automatically apply `position: relative` in this
      // case, to prevent any quirkiness.
      if (window.getComputedStyle(parentNode).position === 'static') {
        parentNode.style.position = 'relative';
        parentNodePositionStatic();
      }

      _this.parentData.domNode = parentNode;
    }, _this.runAnimation = function () {
      var dynamicChildren = _this.state.children.filter(_this.doesChildNeedToBeAnimated);

      // Splitting DOM reads and writes to be peformed in batches
      var childrenInitialStyles = dynamicChildren.map(function (child) {
        return _this.computeInitialStyles(child);
      });
      dynamicChildren.forEach(function (child, index) {
        _this.remainingAnimations += 1;
        _this.childrenToAnimate.push(getKey(child));
        _this.animateChild(child, index, childrenInitialStyles[index]);
      });

      if (typeof _this.props.onStartAll === 'function') {
        _this.callChildrenHook(_this.props.onStartAll);
      }
    }, _this.doesChildNeedToBeAnimated = function (child) {
      // If the child doesn't have a key, it's an immovable child (one that we
      // do not want to do FLIP stuff to.)
      if (!getKey(child)) {
        return false;
      }

      var childData = _this.getChildData(getKey(child));
      var childDomNode = childData.domNode;
      var childBoundingBox = childData.boundingBox;
      var parentBoundingBox = _this.parentData.boundingBox;

      if (!childDomNode) {
        return false;
      }

      var _this$props = _this.props,
          appearAnimation = _this$props.appearAnimation,
          enterAnimation = _this$props.enterAnimation,
          leaveAnimation = _this$props.leaveAnimation,
          getPosition = _this$props.getPosition;


      var isAppearingWithAnimation = child.appearing && appearAnimation;
      var isEnteringWithAnimation = child.entering && enterAnimation;
      var isLeavingWithAnimation = child.leaving && leaveAnimation;

      if (isAppearingWithAnimation || isEnteringWithAnimation || isLeavingWithAnimation) {
        return true;
      }

      // If it isn't entering/leaving, we want to animate it if it's
      // on-screen position has changed.

      var _getPositionDelta = getPositionDelta({
        childDomNode: childDomNode,
        childBoundingBox: childBoundingBox,
        parentBoundingBox: parentBoundingBox,
        getPosition: getPosition
      }),
          dX = _getPositionDelta[0],
          dY = _getPositionDelta[1];

      return dX !== 0 || dY !== 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // Copy props.children into state.
  // To understand why this is important (and not an anti-pattern), consider
  // how "leave" animations work. An item has "left" when the component
  // receives a new set of props that do NOT contain the item.
  // If we just render the props as-is, the item would instantly disappear.
  // We want to keep the item rendered for a little while, until its animation
  // can complete. Because we cannot mutate props, we make `state` the source
  // of truth.


  // FlipMove needs to know quite a bit about its children in order to do
  // its job. We store these as a property on the instance. We're not using
  // state, because we don't want changes to trigger re-renders, we just
  // need a place to keep the data for reference, when changes happen.
  // This field should not be accessed directly. Instead, use getChildData,
  // putChildData, etc...


  // Similarly, track the dom node and box of our parent element.


  // If `maintainContainerHeight` prop is set to true, we'll create a
  // placeholder element which occupies space so that the parent height
  // doesn't change when items are removed from the document flow (which
  // happens during leave animations)


  // Keep track of remaining animations so we know when to fire the
  // all-finished callback, and clean up after ourselves.
  // NOTE: we can't simply use childrenToAnimate.length to track remaining
  // animations, because we need to maintain the list of animating children,
  // to pass to the `onFinishAll` handler.


  FlipMove.prototype.componentDidMount = function componentDidMount() {
    // Because React 16 no longer requires wrapping elements, Flip Move can opt
    // to not wrap the children in an element. In that case, find the parent
    // element using `findDOMNode`.
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }

    // Run our `appearAnimation` if it was requested, right after the
    // component mounts.
    var shouldTriggerFLIP = this.props.appearAnimation && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.componentDidUpdate = function componentDidUpdate(previousProps) {
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }
    // If the children have been re-arranged, moved, or added/removed,
    // trigger the main FLIP animation.
    //
    // IMPORTANT: We need to make sure that the children have actually changed.
    // At the end of the transition, we clean up nodes that need to be removed.
    // We DON'T want this cleanup to trigger another update.

    var oldChildrenKeys = getElementChildren(this.props.children).map(function (d) {
      return d.key;
    });
    var nextChildrenKeys = getElementChildren(previousProps.children).map(function (d) {
      return d.key;
    });

    var shouldTriggerFLIP = !arraysEqual(oldChildrenKeys, nextChildrenKeys) && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.calculateNextSetOfChildren = function calculateNextSetOfChildren(nextChildren) {
    var _this2 = this;

    // We want to:
    //   - Mark all new children as `entering`
    //   - Pull in previous children that aren't in nextChildren, and mark them
    //     as `leaving`
    //   - Preserve the nextChildren list order, with leaving children in their
    //     appropriate places.
    //

    var updatedChildren = nextChildren.map(function (nextChild) {
      var child = _this2.findChildByKey(nextChild.key);

      // If the current child did exist, but it was in the midst of leaving,
      // we want to treat it as though it's entering
      var isEntering = !child || child.leaving;

      return _extends({}, nextChild, { element: nextChild, entering: isEntering });
    });

    // This is tricky. We want to keep the nextChildren's ordering, but with
    // any just-removed items maintaining their original position.
    // eg.
    //   this.state.children  = [ 1, 2, 3, 4 ]
    //   nextChildren         = [ 3, 1 ]
    //
    // In this example, we've removed the '2' & '4'
    // We want to end up with:  [ 2, 3, 1, 4 ]
    //
    // To accomplish that, we'll iterate through this.state.children. whenever
    // we find a match, we'll append our `leaving` flag to it, and insert it
    // into the nextChildren in its ORIGINAL position. Note that, as we keep
    // inserting old items into the new list, the "original" position will
    // keep incrementing.
    var numOfChildrenLeaving = 0;
    this.state.children.forEach(function (child, index) {
      var isLeaving = !find(function (_ref) {
        var key = _ref.key;
        return key === getKey(child);
      }, nextChildren);

      // If the child isn't leaving (or, if there is no leave animation),
      // we don't need to add it into the state children.
      if (!isLeaving || !_this2.props.leaveAnimation) return;

      var nextChild = _extends({}, child, { leaving: true });
      var nextChildIndex = index + numOfChildrenLeaving;

      updatedChildren.splice(nextChildIndex, 0, nextChild);
      numOfChildrenLeaving += 1;
    });

    return updatedChildren;
  };

  FlipMove.prototype.prepForAnimation = function prepForAnimation() {
    var _this3 = this;

    // Our animation prep consists of:
    // - remove children that are leaving from the DOM flow, so that the new
    //   layout can be accurately calculated,
    // - update the placeholder container height, if needed, to ensure that
    //   the parent's height doesn't collapse.

    var _props = this.props,
        leaveAnimation = _props.leaveAnimation,
        maintainContainerHeight = _props.maintainContainerHeight,
        getPosition = _props.getPosition;

    // we need to make all leaving nodes "invisible" to the layout calculations
    // that will take place in the next step (this.runAnimation).

    if (leaveAnimation) {
      var leavingChildren = this.state.children.filter(function (child) {
        return child.leaving;
      });

      leavingChildren.forEach(function (leavingChild) {
        var childData = _this3.getChildData(getKey(leavingChild));

        // Warn if child is disabled
        if (!_this3.isAnimationDisabled(_this3.props) && childData.domNode && childData.domNode.disabled) {
          childIsDisabled();
        }

        // We need to take the items out of the "flow" of the document, so that
        // its siblings can move to take its place.
        if (childData.boundingBox) {
          removeNodeFromDOMFlow(childData, _this3.props.verticalAlignment);
        }
      });

      if (maintainContainerHeight && this.heightPlaceholderData.domNode) {
        updateHeightPlaceholder({
          domNode: this.heightPlaceholderData.domNode,
          parentData: this.parentData,
          getPosition: getPosition
        });
      }
    }

    // For all children not in the middle of entering or leaving,
    // we need to reset the transition, so that the NEW shuffle starts from
    // the right place.
    this.state.children.forEach(function (child) {
      var _getChildData = _this3.getChildData(getKey(child)),
          domNode = _getChildData.domNode;

      // Ignore children that don't render DOM nodes (eg. by returning null)


      if (!domNode) {
        return;
      }

      if (!child.entering && !child.leaving) {
        applyStylesToDOMNode({
          domNode: domNode,
          styles: {
            transition: ''
          }
        });
      }
    });
  };

  // eslint-disable-next-line camelcase


  FlipMove.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // When the component is handed new props, we need to figure out the
    // "resting" position of all currently-rendered DOM nodes.
    // We store that data in this.parent and this.children,
    // so it can be used later to work out the animation.
    this.updateBoundingBoxCaches();

    // Convert opaque children object to array.
    var nextChildren = getElementChildren(nextProps.children);

    // Next, we need to update our state, so that it contains our new set of
    // children. If animation is disabled or unsupported, this is easy;
    // we just copy our props into state.
    // Assuming that we can animate, though, we have to do some work.
    // Essentially, we want to keep just-deleted nodes in the DOM for a bit
    // longer, so that we can animate them away.
    this.setState({
      children: this.isAnimationDisabled(nextProps) ? nextChildren.map(function (element) {
        return _extends({}, element, { element: element });
      }) : this.calculateNextSetOfChildren(nextChildren)
    });
  };

  FlipMove.prototype.animateChild = function animateChild(child, index, childInitialStyles) {
    var _this4 = this;

    var _getChildData2 = this.getChildData(getKey(child)),
        domNode = _getChildData2.domNode;

    if (!domNode) {
      return;
    }

    // Apply the relevant style for this DOM node
    // This is the offset from its actual DOM position.
    // eg. if an item has been re-rendered 20px lower, we want to apply a
    // style of 'transform: translate(-20px)', so that it appears to be where
    // it started.
    // In FLIP terminology, this is the 'Invert' stage.
    applyStylesToDOMNode({
      domNode: domNode,
      styles: childInitialStyles
    });

    // Start by invoking the onStart callback for this child.
    if (this.props.onStart) this.props.onStart(child, domNode);

    // Next, animate the item from it's artificially-offset position to its
    // new, natural position.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // NOTE, RE: the double-requestAnimationFrame:
        // Sadly, this is the most browser-compatible way to do this I've found.
        // Essentially we need to set the initial styles outside of any request
        // callbacks to avoid batching them. Then, a frame needs to pass with
        // the styles above rendered. Then, on the second frame, we can apply
        // our final styles to perform the animation.

        // Our first order of business is to "undo" the styles applied in the
        // previous frames, while also adding a `transition` property.
        // This way, the item will smoothly transition from its old position
        // to its new position.

        // eslint-disable-next-line flowtype/require-variable-type
        var styles = {
          transition: createTransitionString(index, _this4.props),
          transform: '',
          opacity: ''
        };

        if (child.appearing && _this4.props.appearAnimation) {
          styles = _extends({}, styles, _this4.props.appearAnimation.to);
        } else if (child.entering && _this4.props.enterAnimation) {
          styles = _extends({}, styles, _this4.props.enterAnimation.to);
        } else if (child.leaving && _this4.props.leaveAnimation) {
          styles = _extends({}, styles, _this4.props.leaveAnimation.to);
        }

        // In FLIP terminology, this is the 'Play' stage.
        applyStylesToDOMNode({ domNode: domNode, styles: styles });
      });
    });

    this.bindTransitionEndHandler(child);
  };

  FlipMove.prototype.bindTransitionEndHandler = function bindTransitionEndHandler(child) {
    var _this5 = this;

    var _getChildData3 = this.getChildData(getKey(child)),
        domNode = _getChildData3.domNode;

    if (!domNode) {
      return;
    }

    // The onFinish callback needs to be bound to the transitionEnd event.
    // We also need to unbind it when the transition completes, so this ugly
    // inline function is required (we need it here so it closes over
    // dependent variables `child` and `domNode`)
    var transitionEndHandler = function transitionEndHandler(ev) {
      // It's possible that this handler is fired not on our primary transition,
      // but on a nested transition (eg. a hover effect). Ignore these cases.
      if (ev.target !== domNode) return;

      // Remove the 'transition' inline style we added. This is cleanup.
      domNode.style.transition = '';

      // Trigger any applicable onFinish/onFinishAll hooks
      _this5.triggerFinishHooks(child, domNode);

      domNode.removeEventListener(transitionEnd, transitionEndHandler);

      if (child.leaving) {
        _this5.removeChildData(getKey(child));
      }
    };

    domNode.addEventListener(transitionEnd, transitionEndHandler);
  };

  FlipMove.prototype.triggerFinishHooks = function triggerFinishHooks(child, domNode) {
    var _this6 = this;

    if (this.props.onFinish) this.props.onFinish(child, domNode);

    // Reduce the number of children we need to animate by 1,
    // so that we can tell when all children have finished.
    this.remainingAnimations -= 1;

    if (this.remainingAnimations === 0) {
      // Remove any items from the DOM that have left, and reset `entering`.
      var nextChildren = this.state.children.filter(function (_ref2) {
        var leaving = _ref2.leaving;
        return !leaving;
      }).map(function (item) {
        return _extends({}, item, {
          // fix for Flow
          element: item.element,
          appearing: false,
          entering: false
        });
      });

      this.setState({ children: nextChildren }, function () {
        if (typeof _this6.props.onFinishAll === 'function') {
          _this6.callChildrenHook(_this6.props.onFinishAll);
        }

        // Reset our variables for the next iteration
        _this6.childrenToAnimate = [];
      });

      // If the placeholder was holding the container open while elements were
      // leaving, we we can now set its height to zero.
      if (this.heightPlaceholderData.domNode) {
        this.heightPlaceholderData.domNode.style.height = '0';
      }
    }
  };

  FlipMove.prototype.callChildrenHook = function callChildrenHook(hook) {
    var _this7 = this;

    var elements = [];
    var domNodes = [];

    this.childrenToAnimate.forEach(function (childKey) {
      // If this was an exit animation, the child may no longer exist.
      // If so, skip it.
      var child = _this7.findChildByKey(childKey);

      if (!child) {
        return;
      }

      elements.push(child);

      if (_this7.hasChildData(childKey)) {
        domNodes.push(_this7.getChildData(childKey).domNode);
      }
    });

    hook(elements, domNodes);
  };

  FlipMove.prototype.updateBoundingBoxCaches = function updateBoundingBoxCaches() {
    var _this8 = this;

    // This is the ONLY place that parentData and childrenData's
    // bounding boxes are updated. They will be calculated at other times
    // to be compared to this value, but it's important that the cache is
    // updated once per update.
    var parentDomNode = this.parentData.domNode;

    if (!parentDomNode) {
      return;
    }

    this.parentData.boundingBox = this.props.getPosition(parentDomNode);

    // Splitting DOM reads and writes to be peformed in batches
    var childrenBoundingBoxes = [];

    this.state.children.forEach(function (child) {
      var childKey = getKey(child);

      // It is possible that a child does not have a `key` property;
      // Ignore these children, they don't need to be moved.
      if (!childKey) {
        childrenBoundingBoxes.push(null);
        return;
      }

      // In very rare circumstances, for reasons unknown, the ref is never
      // populated for certain children. In this case, avoid doing this update.
      // see: https://github.com/joshwcomeau/react-flip-move/pull/91
      if (!_this8.hasChildData(childKey)) {
        childrenBoundingBoxes.push(null);
        return;
      }

      var childData = _this8.getChildData(childKey);

      // If the child element returns null, we need to avoid trying to
      // account for it
      if (!childData.domNode || !child) {
        childrenBoundingBoxes.push(null);
        return;
      }

      childrenBoundingBoxes.push(getRelativeBoundingBox({
        childDomNode: childData.domNode,
        parentDomNode: parentDomNode,
        getPosition: _this8.props.getPosition
      }));
    });

    this.state.children.forEach(function (child, index) {
      var childKey = getKey(child);

      var childBoundingBox = childrenBoundingBoxes[index];

      if (!childKey) {
        return;
      }

      _this8.setChildData(childKey, {
        boundingBox: childBoundingBox
      });
    });
  };

  FlipMove.prototype.computeInitialStyles = function computeInitialStyles(child) {
    if (child.appearing) {
      return this.props.appearAnimation ? this.props.appearAnimation.from : {};
    } else if (child.entering) {
      if (!this.props.enterAnimation) {
        return {};
      }
      // If this child was in the middle of leaving, it still has its
      // absolute positioning styles applied. We need to undo those.
      return _extends({
        position: '',
        top: '',
        left: '',
        right: '',
        bottom: ''
      }, this.props.enterAnimation.from);
    } else if (child.leaving) {
      return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
    }

    var childData = this.getChildData(getKey(child));
    var childDomNode = childData.domNode;
    var childBoundingBox = childData.boundingBox;
    var parentBoundingBox = this.parentData.boundingBox;

    if (!childDomNode) {
      return {};
    }

    var _getPositionDelta2 = getPositionDelta({
      childDomNode: childDomNode,
      childBoundingBox: childBoundingBox,
      parentBoundingBox: parentBoundingBox,
      getPosition: this.props.getPosition
    }),
        dX = _getPositionDelta2[0],
        dY = _getPositionDelta2[1];

    return {
      transform: 'translate(' + dX + 'px, ' + dY + 'px)'
    };
  };

  // eslint-disable-next-line class-methods-use-this


  FlipMove.prototype.isAnimationDisabled = function isAnimationDisabled(props) {
    // If the component is explicitly passed a `disableAllAnimations` flag,
    // we can skip this whole process. Similarly, if all of the numbers have
    // been set to 0, there is no point in trying to animate; doing so would
    // only cause a flicker (and the intent is probably to disable animations)
    // We can also skip this rigamarole if there's no browser support for it.
    return noBrowserSupport || props.disableAllAnimations || props.duration === 0 && props.delay === 0 && props.staggerDurationBy === 0 && props.staggerDelayBy === 0;
  };

  FlipMove.prototype.findChildByKey = function findChildByKey(key) {
    return find(function (child) {
      return getKey(child) === key;
    }, this.state.children);
  };

  FlipMove.prototype.hasChildData = function hasChildData(key) {
    // Object has some built-in properties on its prototype, such as toString.  hasOwnProperty makes
    // sure that key is present on childrenData itself, not on its prototype.
    return Object.prototype.hasOwnProperty.call(this.childrenData, key);
  };

  FlipMove.prototype.getChildData = function getChildData(key) {
    return this.hasChildData(key) ? this.childrenData[key] : {};
  };

  FlipMove.prototype.setChildData = function setChildData(key, data) {
    this.childrenData[key] = _extends({}, this.getChildData(key), data);
  };

  FlipMove.prototype.removeChildData = function removeChildData(key) {
    delete this.childrenData[key];
    this.setState(function (prevState) {
      return _extends({}, prevState, {
        children: prevState.children.filter(function (child) {
          return child.element.key !== key;
        })
      });
    });
  };

  FlipMove.prototype.createHeightPlaceholder = function createHeightPlaceholder() {
    var _this9 = this;

    var typeName = this.props.typeName;

    // If requested, create an invisible element at the end of the list.
    // Its height will be modified to prevent the container from collapsing
    // prematurely.

    var isContainerAList = typeName === 'ul' || typeName === 'ol';
    var placeholderType = isContainerAList ? 'li' : 'div';

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(placeholderType, {
      key: 'height-placeholder',
      ref: function ref(domNode) {
        _this9.heightPlaceholderData.domNode = domNode;
      },
      style: { visibility: 'hidden', height: 0 }
    });
  };

  FlipMove.prototype.childrenWithRefs = function childrenWithRefs() {
    var _this10 = this;

    // We need to clone the provided children, capturing a reference to the
    // underlying DOM node. Flip Move needs to use the React escape hatches to
    // be able to do its calculations.
    return this.state.children.map(function (child) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child.element, {
        ref: function ref(element) {
          // Stateless Functional Components are not supported by FlipMove,
          // because they don't have instances.
          if (!element) {
            return;
          }

          var domNode = getNativeNode(element);
          _this10.setChildData(getKey(child), { domNode: domNode });
        }
      });
    });
  };

  FlipMove.prototype.render = function render() {
    var _this11 = this;

    var _props2 = this.props,
        typeName = _props2.typeName,
        delegated = _props2.delegated,
        leaveAnimation = _props2.leaveAnimation,
        maintainContainerHeight = _props2.maintainContainerHeight;


    var children = this.childrenWithRefs();
    if (leaveAnimation && maintainContainerHeight) {
      children.push(this.createHeightPlaceholder());
    }

    if (!typeName) return children;

    var props = _extends({}, delegated, {
      children: children,
      ref: function ref(node) {
        _this11.parentData.domNode = node;
      }
    });

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(typeName, props);
  };

  return FlipMove;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var enhancedFlipMove = /* #__PURE__ */propConverter(FlipMove$1);

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 */

/* harmony default export */ __webpack_exports__["default"] = (enhancedFlipMove);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_HomeSections_ContectSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/HomeSections/ContectSection */ "./Components/HomeSections/ContectSection.jsx");
/* harmony import */ var _Components_HomeSections_ExperienceSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/HomeSections/ExperienceSection */ "./Components/HomeSections/ExperienceSection.jsx");
/* harmony import */ var _Components_HomeSections_FrontSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/HomeSections/FrontSection */ "./Components/HomeSections/FrontSection.jsx");
/* harmony import */ var _Components_HomeSections_IntroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/HomeSections/IntroSection */ "./Components/HomeSections/IntroSection.jsx");
/* harmony import */ var _Components_HomeSections_PortfolioSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/HomeSections/PortfolioSection */ "./Components/HomeSections/PortfolioSection.jsx");
/* harmony import */ var _Components_HomeSections_SkillSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/HomeSections/SkillSection */ "./Components/HomeSections/SkillSection.jsx");


var _jsxFileName = "D:\\__PROJECTS__\\React\\NEXT_REACT\\react-next-portfolio-dev\\pages\\index.js";







function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "content",
        className: "site-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content-holder center-relative content-1300 post-9 page type-page status-publish hentry",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "data-elementor-type": "wp-page",
            "data-elementor-id": "9",
            className: "elementor elementor-9",
            "data-elementor-settings": "[]",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "elementor-inner",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "elementor-section-wrap",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_FrontSection__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_IntroSection__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_PortfolioSection__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_ExperienceSection__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_SkillSection__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_HomeSections_ContectSection__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "clear",
            children: " "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "comments",
            className: "comments-holder",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "clear",
              children: " "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "clear",
            children: " "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZVNlY3Rpb25zL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzSG9sZGVyLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsaXAtbW92ZS9kaXN0L3JlYWN0LWZsaXAtbW92ZS5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9ydGZvbGlvU2VjdGlvbiIsInByb2plY3RzIiwiZGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsInBybyIsImNhdGVnb3J5Iiwic2xpY2UiLCJtYXAiLCJwcm9qZWN0Iiwia2V5IiwibmFtZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0b1VwcGVyQ2FzZSIsIlByb2plY3RzSG9sZGVyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQTs7QUFDdkMsTUFBTUMsUUFBUSxHQUFHQyx1Q0FBSSxDQUFDRCxRQUF0QjtBQUNBOztBQUZ1QyxrQkFHU0Usc0RBQVEsQ0FBQyxLQUFELENBSGpCO0FBQUEsTUFHaENDLGdCQUhnQztBQUFBLE1BR2RDLG1CQUhjO0FBSXZDOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLFlBQWYsRUFBNkIsU0FBN0IsRUFBd0MsUUFBeEMsQ0FBbkI7QUFFQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFD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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQyxFQUFFLEVBRTFDOztBQUVQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0IsZ0RBQVE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsY0FBYywyQ0FBMkM7QUFDakYsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxVQUFVLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksbUJBQW1CO0FBQ3pELE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCw4QkFBOEI7QUFDOUIsU0FBUztBQUNULDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUCxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVywyREFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsY0FBYztBQUNkLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsbUJBQW1CO0FBQ2xFO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Y2Q2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2Qsc0JBQ0U7QUFBQSwyQkFJRTtBQUFBLDZCQUNFO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsaUJBQVMsRUFBQyxjQUE1QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx5RkFBZjtBQUFBLGtDQUNFO0FBQUssbUNBQW9CLFNBQXpCO0FBQW1DLGlDQUFrQixHQUFyRDtBQUF5RCxxQkFBUyxFQUFDLHVCQUFuRTtBQUNFLHVDQUF3QixJQUQxQjtBQUFBLG1DQUVFO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyx3QkFBZjtBQUFBLHdDQUVFLHFFQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFJRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGLGVBTUUscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORixlQVFFLHFFQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkYsZUFVRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGLGVBWUUscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQW9CRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkYsZUFxQkU7QUFBSyxjQUFFLEVBQUMsVUFBUjtBQUFtQixxQkFBUyxFQUFDLGlCQUE3QjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkYsZUF3QkU7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsbUJBREY7QUFxQ0Q7O0tBdENRQSxJO0FBd0NNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NWRlZjkyNjVkOGJkMzYwYWQ0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RzSG9sZGVyIGZyb20gXCIuL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzSG9sZGVyXCI7XG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vZGF0YS5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvU2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgLyoqIFN0YXRlIGZvciBjdXJyZW50IGFjdGl2ZSBzdGF0dXMgd2lzZSBwcm9qZWN0cyBsaXN0aW5nLiAqL1xuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICAgIC8qKiBjcmVhdGluZyBsaXN0IG9mIGZpbHRlcnMgZm9yIGFsbCBwcm9qZWN0cyAqL1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbJ2FsbCcsICdwaHAnLCAnamF2YXNjcmlwdCcsICdtYWNoaW5lJywgJ3B5dGhvbiddXG5cbiAgICAvKiogY3JlYXRpbmcgZmlsdGVyIGZvciBjYXRlZ29yeSB3aXNlIHByb2plY3RzIGxpc3RpbmcuLi4gKi9cbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyZWREYXRhID0gcHJvamVjdHM7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5ICE9PSBjYXRlZ29yaWVzWzBdKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKHBybyA9PiBzZWxlY3RlZENhdGVnb3J5ID09IHByby5jYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuc2xpY2UoMCwgNilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YVxuICAgICAgICAgICAgICAgIC5tYXAoKHByb2plY3QsIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAvLyAgaWQ9XCJwLWl0ZW0tNjVcIlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBpZD17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGVsZW1lbnQtaXRlbSBwX29uZV90aGlyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1saW5rIGFqYXgtcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwicG9ydGZvbGlvL2l0ZW0tMS9pbmRleC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIiBzcmM9J2h0dHBzOi8vcGljc3VtLnBob3Rvcy82MDAvNjAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBvbk1vdXNlRW50ZXI9e2UgPT4gZS50YXJnZXQuY2xhc3NOYW1lID0gJ3RleHQtbGlnaHQtZ3JlZW4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IGUudGFyZ2V0LmNsYXNzTmFtZSA9ICd0ZXh0LWxpZ2h0LW9yYW5nZSd9Pntwcm9qZWN0Lm5hbWV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgZGF0YS1pZD1cIjYyNTE5NDkzXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50b3Itc2VjdGlvbiBlbGVtZW50b3ItdG9wLXNlY3Rpb24gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNjI1MTk0OTMgb3Atc2VjdGlvbiBlbGVtZW50b3Itc2VjdGlvbi1ib3hlZCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29udGFpbmVyIGVsZW1lbnRvci1jb2x1bW4tZ2FwLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4gZWxlbWVudG9yLWNvbC0xMDAgZWxlbWVudG9yLXRvcC1jb2x1bW4gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNWQ2NTAzNGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCI1ZDY1MDM0YVwiIGRhdGEtZWxlbWVudF90eXBlPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29sdW1uLXdyYXAgZWxlbWVudG9yLWVsZW1lbnQtcG9wdWxhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTNhNzg5ZDU4IGVsZW1lbnRvci13aWRnZXQgZWxlbWVudG9yLXdpZGdldC1jb2NvLXBvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjNhNzg5ZDU4XCIgZGF0YS1lbGVtZW50X3R5cGU9XCJ3aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0X3R5cGU9XCJjb2NvLXBvcnRmb2xpby5kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1pY29uXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWxpc3QgYnV0dG9uLWdyb3VwIGZpbHRlcnMtYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSl9IGtleT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIipcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgaWQ9XCJwb3J0Zm9saW8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1zaXplclwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHNMaXN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGbGlwTW92ZSBzdGFnZ2VyRHVyYXRpb25CeT1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGlwTW92ZT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvamVjdHNIb2xkZXIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufSIsImNvbnN0IFByb2plY3RzSG9sZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiBpZD1cInBvcnRmb2xpby1ncmlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1zaXplclwiPiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInAtaXRlbS02NVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkIHRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW0tbGluayBhamF4LXBvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cInBvcnRmb2xpby9pdGVtLTEvaW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjY1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTElOSyArIFwiaW1hZ2VzL3BvcnRmb2xpb19pdGVtXzAxLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpb1wiIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzAxLmpwZyA2MDB3LCBodHRwczovL2RlbW8uY29jb2Jhc2ljLmNvbS92b2xvcy13cC9kZW1vLTMvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvcG9ydGZvbGlvX2l0ZW1fMDEtMzAweDMwMC5qcGcgMzAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzAxLTE1MHgxNTAuanBnIDE1MHdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHRcIj5Xb3JrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdFwiPlRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ3cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9pbWdfYmxvZ18wMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBkYXRhLXJlbD1cInByZXR0eVBob3RvW3BvcnRmb2xpbzFdXCIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTElOSyArIFwiaW1hZ2VzL3BvcnRmb2xpb19pdGVtXzAyLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpby1kZXNpZ25cIiBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD1cImh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wMi5qcGcgNjAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzAyLTMwMHgzMDAuanBnIDMwMHcsIGh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wMi0xNTB4MTUwLmpwZyAxNTB3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0XCI+UGxhbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdFwiPkltYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBlbGVtZW50LWl0ZW0gcF9vbmVfdGhpcmQgdmlkZW9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW0tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmltZW8uY29tLzE5OTE5MjkzMVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGRhdGEtcmVsPVwicHJldHR5UGhvdG9bcG9ydGZvbGlvMV1cIiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5MSU5LICsgXCJpbWFnZXMvcG9ydGZvbGlvX2l0ZW1fMDMuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dGFjaG1lbnQtcG9zdC10aHVtYm5haWwgc2l6ZS1wb3N0LXRodW1ibmFpbCB3cC1wb3N0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicG9ydGZvbGlvLWl0ZW1cIiBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD1cImh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wMy5qcGcgNjAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzAzLTMwMHgzMDAuanBnIDMwMHcsIGh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wMy0xNTB4MTUwLmpwZyAxNTB3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0XCI+SGFuZG1hZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdFwiPlZpZGVvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwLWl0ZW0tOTRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIGVsZW1lbnQtaXRlbSBwX29uZV90aGlyZCB0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLWxpbmsgYWpheC1wb3J0Zm9saW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJwb3J0Zm9saW8vaXRlbS00L2luZGV4Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCI5NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkxJTksgKyBcImltYWdlcy9wb3J0Zm9saW9faXRlbV8wNC5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXR0YWNobWVudC1wb3N0LXRodW1ibmFpbCBzaXplLXBvc3QtdGh1bWJuYWlsIHdwLXBvc3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwb3J0Zm9saW8tY29udGVudFwiIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA0LmpwZyA2MDB3LCBodHRwczovL2RlbW8uY29jb2Jhc2ljLmNvbS92b2xvcy13cC9kZW1vLTMvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvcG9ydGZvbGlvX2l0ZW1fMDQtMzAweDMwMC5qcGcgMzAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA0LTE1MHgxNTAuanBnIDE1MHdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmNoaXRlY3R1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3J0Zm9saW8tY2F0XCI+VGV4dDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZWxlbWVudC1pdGVtIHBfb25lX3RoaXJkIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ3cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9pbWdfYmxvZ18wMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBkYXRhLXJlbD1cInByZXR0eVBob3RvW3BvcnRmb2xpbzFdXCIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTElOSyArIFwiaW1hZ2VzL3BvcnRmb2xpb19pdGVtXzA1LmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdHRhY2htZW50LXBvc3QtdGh1bWJuYWlsIHNpemUtcG9zdC10aHVtYm5haWwgd3AtcG9zdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBvcnRmb2xpby1pdGVtc1wiIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA1LmpwZyA2MDB3LCBodHRwczovL2RlbW8uY29jb2Jhc2ljLmNvbS92b2xvcy13cC9kZW1vLTMvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTIvcG9ydGZvbGlvX2l0ZW1fMDUtMzAweDMwMC5qcGcgMzAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA1LTE1MHgxNTAuanBnIDE1MHdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxMDB2dywgNjAwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b2dyYXBoeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRcIj5JbWFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicC1pdGVtLTkyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBlbGVtZW50LWl0ZW0gcF9vbmVfdGhpcmQgdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1saW5rIGFqYXgtcG9ydGZvbGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwicG9ydGZvbGlvL2l0ZW0tNi9pbmRleC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiOTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5MSU5LICsgXCJpbWFnZXMvcG9ydGZvbGlvX2l0ZW1fMDYuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0dGFjaG1lbnQtcG9zdC10aHVtYm5haWwgc2l6ZS1wb3N0LXRodW1ibmFpbCB3cC1wb3N0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicG9ydGZvbGlvLWRhdGFcIiBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD1cImh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wNi5qcGcgNjAwdywgaHR0cHM6Ly9kZW1vLmNvY29iYXNpYy5jb20vdm9sb3Mtd3AvZGVtby0zL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL3BvcnRmb2xpb19pdGVtXzA2LTMwMHgzMDAuanBnIDMwMHcsIGh0dHBzOi8vZGVtby5jb2NvYmFzaWMuY29tL3ZvbG9zLXdwL2RlbW8tMy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9wb3J0Zm9saW9faXRlbV8wNi0xNTB4MTUwLmpwZyAxNTB3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2MDBweCkgMTAwdncsIDYwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcnRmb2xpby10ZXh0XCI+QXJ0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdFwiPlRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNIb2xkZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCwgY2xvbmVFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NLCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gd2Fybk9uY2UobXNnKSB7XG4gIHZhciBoYXNXYXJuZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbn1cblxuXG52YXIgc3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudFN1cHBsaWVkID0gd2Fybk9uY2UoJ1xcbj4+IEVycm9yLCB2aWEgcmVhY3QtZmxpcC1tb3ZlIDw8XFxuXFxuWW91IHByb3ZpZGVkIGEgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50IGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gVW5mb3J0dW5hdGVseSwgU0ZDcyBhcmVuXFwndCBzdXBwb3J0ZWQsIGJlY2F1c2UgRmxpcCBNb3ZlIG5lZWRzIGFjY2VzcyB0byB0aGUgYmFja2luZyBpbnN0YW5jZXMgdmlhIHJlZnMsIGFuZCBTRkNzIGRvblxcJ3QgaGF2ZSBhIHB1YmxpYyBpbnN0YW5jZSB0aGF0IGhvbGRzIHRoYXQgaW5mby5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIGNvbXBvbmVudHMgaW4gYSBuYXRpdmUgZWxlbWVudCAoZWcuIDxkaXY+KSwgb3IgYSBub24tZnVuY3Rpb25hbCBjb21wb25lbnQuXFxuJyk7XG5cbnZhciBwcmltaXRpdmVOb2RlU3VwcGxpZWQgPSB3YXJuT25jZSgnXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5Zb3UgcHJvdmlkZWQgYSBwcmltaXRpdmUgKHRleHQgb3IgbnVtYmVyKSBub2RlIGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gRmxpcCBNb3ZlIG5lZWRzIGNvbnRhaW5lcnMgd2l0aCB1bmlxdWUga2V5cyB0byBtb3ZlIGNoaWxkcmVuIGFyb3VuZC5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIHZhbHVlIGluIGEgbmF0aXZlIGVsZW1lbnQgKGVnLiA8c3Bhbj4pLCBvciBhIGNvbXBvbmVudC5cXG4nKTtcblxudmFyIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcCA9IGZ1bmN0aW9uIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcChhcmdzXG4vLyBwcmV0dGllci1pZ25vcmVcbikge1xuICByZXR1cm4gY29uc29sZS5lcnJvcignXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5UaGUgcHJvcCB5b3UgcHJvdmlkZWQgZm9yIFxcJycgKyBhcmdzLnByb3AgKyAnXFwnIGlzIGludmFsaWQuIEl0IG5lZWRzIHRvIGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgb3IgYSBzdHJpbmcgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgdG8gYSBudW1iZXIuIFRoZSB2YWx1ZSB5b3UgcHJvdmlkZWQgaXMgXFwnJyArIGFyZ3MudmFsdWUgKyAnXFwnLlxcblxcbkFzIGEgcmVzdWx0LCAgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdXNlZCwgd2hpY2ggaXMgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJy5cXG4nKTtcbn07XG5cbnZhciBpbnZhbGlkRW50ZXJMZWF2ZVByZXNldCA9IGZ1bmN0aW9uIGludmFsaWRFbnRlckxlYXZlUHJlc2V0KGFyZ3Ncbi8vIHByZXR0aWVyLWlnbm9yZVxuKSB7XG4gIHJldHVybiBjb25zb2xlLmVycm9yKCdcXG4+PiBFcnJvciwgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcblRoZSBlbnRlci9sZWF2ZSBwcmVzZXQgeW91IHByb3ZpZGVkIGlzIGludmFsaWQuIFdlIGRvblxcJ3QgY3VycmVudGx5IGhhdmUgYSBcXCcnICsgYXJncy52YWx1ZSArICcgcHJlc2V0LlxcJ1xcblxcbkFjY2VwdGFibGUgdmFsdWVzIGFyZSAnICsgYXJncy5hY2NlcHRhYmxlVmFsdWVzICsgJy4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJyB3aWxsIGJlIHVzZWQuXFxuJyk7XG59O1xuXG52YXIgcGFyZW50Tm9kZVBvc2l0aW9uU3RhdGljID0gd2Fybk9uY2UoJ1xcbj4+IFdhcm5pbmcsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5XaGVuIHVzaW5nIFwid3JhcHBlcmxlc3NcIiBtb2RlIChieSBzdXBwbHlpbmcgXFwndHlwZU5hbWVcXCcgb2YgXFwnbnVsbFxcJyksIHN0cmFuZ2UgdGhpbmdzIGhhcHBlbiB3aGVuIHRoZSBkaXJlY3QgcGFyZW50IGhhcyB0aGUgZGVmYXVsdCBcInN0YXRpY1wiIHBvc2l0aW9uLlxcblxcbkZsaXBNb3ZlIGhhcyBhZGRlZCBcXCdwb3NpdGlvbjogcmVsYXRpdmVcXCcgdG8gdGhpcyBub2RlLCB0byBlbnN1cmUgRmxpcCBNb3ZlIGFuaW1hdGVzIGNvcnJlY3RseS5cXG5cXG5UbyBhdm9pZCBzZWVpbmcgdGhpcyB3YXJuaW5nLCBzaW1wbHkgYXBwbHkgYSBub24tc3RhdGljIHBvc2l0aW9uIHRvIHRoYXQgcGFyZW50IG5vZGUuXFxuJyk7XG5cbnZhciBjaGlsZElzRGlzYWJsZWQgPSB3YXJuT25jZSgnXFxuPj4gV2FybmluZywgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcbk9uZSBvciBtb3JlIG9mIEZsaXAgTW92ZVxcJ3MgY2hpbGQgZWxlbWVudHMgaGF2ZSB0aGUgaHRtbCBhdHRyaWJ1dGUgXFwnZGlzYWJsZWRcXCcgc2V0IHRvIHRydWUuXFxuXFxuUGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgY2F1c2UgYW5pbWF0aW9ucyB0byBicmVhayBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSBhbmQgYmVsb3cuIEVpdGhlciByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBvciBzZXQgXFwnYW5pbWF0aW9uXFwnIHRvIGZhbHNlLlxcbicpO1xuXG52YXIgZW50ZXJQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAnMCcgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCBvcGFjaXR5OiAnJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcwJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcnIH1cbiAgfSxcbiAgYWNjb3JkaW9uVmVydGljYWw6IHtcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnJywgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIHRvcCcgfVxuICB9LFxuICBhY2NvcmRpb25Ib3Jpem9udGFsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfVxuICB9LFxuICBub25lOiBudWxsXG59O1xuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmUgfCBlbnRlckxlYXZlUHJlc2V0c1xuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogVGhpcyBjb250YWlucyB0aGUgbWFzdGVyIGxpc3Qgb2YgcHJlc2V0cyBhdmFpbGFibGUgZm9yIGVudGVyL2xlYXZlIGFuaW1hdGlvbnMsXG4gKiBhbG9uZyB3aXRoIHRoZSBtYXBwaW5nIGJldHdlZW4gcHJlc2V0IGFuZCBzdHlsZXMuXG4gKi9cblxuXG52YXIgbGVhdmVQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAnMScgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcxJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGFjY29yZGlvblZlcnRpY2FsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgdG9wJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH1cbiAgfSxcbiAgYWNjb3JkaW9uSG9yaXpvbnRhbDoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDApJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH1cbiAgfSxcbiAgbm9uZTogbnVsbFxufTtcblxuLy8gRm9yIG5vdywgYXBwZWFyUHJlc2V0cyB3aWxsIGJlIGlkZW50aWNhbCB0byBlbnRlclByZXNldHMuXG4vLyBBc3NpZ25pbmcgYSBjdXN0b20gZXhwb3J0IGluIGNhc2Ugd2UgZXZlciB3YW50IHRvIGFkZCBhcHBlYXItc3BlY2lmaWMgb25lcy5cbnZhciBhcHBlYXJQcmVzZXRzID0gZW50ZXJQcmVzZXRzO1xuXG52YXIgZGVmYXVsdFByZXNldCA9ICdlbGV2YXRvcic7XG52YXIgZGlzYWJsZVByZXNldCA9ICdub25lJztcblxudmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSwgYXJyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBhcnJbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxudmFyIGV2ZXJ5ID0gZnVuY3Rpb24gZXZlcnkocHJlZGljYXRlLCBhcnIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xudmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG4gIHJldHVybiBfaXNBcnJheShhcnIpO1xufTtcblxudmFyIGlzRWxlbWVudEFuU0ZDID0gZnVuY3Rpb24gaXNFbGVtZW50QW5TRkMoZWxlbWVudCkge1xuICB2YXIgaXNOYXRpdmVET01FbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZyc7XG5cbiAgaWYgKGlzTmF0aXZlRE9NRWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZWxlbWVudC50eXBlID09PSAnZnVuY3Rpb24nICYmICFlbGVtZW50LnR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59O1xuXG5mdW5jdGlvbiBvbWl0KG9iaikge1xuICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuXG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoYXR0cnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhLCBiKSB7XG4gIHZhciBzYW1lT2JqZWN0ID0gYSA9PT0gYjtcbiAgaWYgKHNhbWVPYmplY3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBub3RCb3RoQXJyYXlzID0gIV9pc0FycmF5KGEpIHx8ICFfaXNBcnJheShiKTtcbiAgdmFyIGRpZmZlcmVudExlbmd0aHMgPSBhLmxlbmd0aCAhPT0gYi5sZW5ndGg7XG5cbiAgaWYgKG5vdEJvdGhBcnJheXMgfHwgZGlmZmVyZW50TGVuZ3Rocykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWxlbWVudCA9PT0gYltpbmRleF07XG4gIH0sIGEpO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplU3RyaW5nKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKCFjYWNoZVtzdHJdKSB7XG4gICAgICBjYWNoZVtzdHJdID0gZm4oc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW3N0cl07XG4gIH07XG59XG5cbnZhciBoeXBoZW5hdGUgPSBtZW1vaXplU3RyaW5nKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cblxuXG5cblxuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZSB8IHByb3BDb252ZXJ0ZXJcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICpcbiAqIEFic3RyYWN0ZWQgYXdheSBhIGJ1bmNoIG9mIHRoZSBtZXNzeSBidXNpbmVzcyB3aXRoIHByb3BzLlxuICogICAtIHByb3BzIGZsb3cgdHlwZXMgYW5kIGRlZmF1bHRQcm9wc1xuICogICAtIFR5cGUgY29udmVyc2lvbiAoV2UgYWNjZXB0ICdzdHJpbmcnIGFuZCAnbnVtYmVyJyB2YWx1ZXMgZm9yIGR1cmF0aW9uLFxuICogICAgIGRlbGF5LCBhbmQgb3RoZXIgZmllbGRzLCBidXQgd2UgYWN0dWFsbHkgbmVlZCB0aGVtIHRvIGJlIGludHMuKVxuICogICAtIENoaWxkcmVuIGNvbnZlcnNpb24gKHdlIG5lZWQgdGhlIGNoaWxkcmVuIHRvIGJlIGFuIGFycmF5LiBNYXkgbm90IGFsd2F5c1xuICogICAgIGJlLCBpZiBhIHNpbmdsZSBjaGlsZCBpcyBwYXNzZWQgaW4uKVxuICogICAtIFJlc29sdmluZyBhbmltYXRpb24gcHJlc2V0cyBpbnRvIHRoZWlyIGJhc2UgQ1NTIHN0eWxlc1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtdmFyICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kdXBsaWNhdGUtaW1wb3J0c1xuXG5cbmZ1bmN0aW9uIHByb3BDb252ZXJ0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhGbGlwTW92ZVByb3BDb252ZXJ0ZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRmxpcE1vdmVQcm9wQ29udmVydGVyKCkge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRmxpcE1vdmVQcm9wQ29udmVydGVyKTtcbiAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNoZWNrQ2hpbGRyZW4gPSBmdW5jdGlvbiBjaGVja0NoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICAvLyBTa2lwIGFsbCBjb25zb2xlIHdhcm5pbmdzIGluIHByb2R1Y3Rpb24uXG4gICAgICAvLyBCYWlsIGVhcmx5LCB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzYW1lIGFzIFJlYWN0Lk5vZGUsIGJ1dCB3aXRob3V0IGZyYWdtZW50cywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy80NzgxXG5cblxuICAgICAgLy8gRmxpcE1vdmUgZG9lcyBub3Qgc3VwcG9ydCBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGFueSBzdXBwbGllZCBjb21wb25lbnRzIHdvbid0IHdvcmsuXG4gICAgICAvLyBJZiB0aGUgY2hpbGQgZG9lc24ndCBoYXZlIGEga2V5LCBpdCBtZWFucyB3ZSBhcmVuJ3QgYW5pbWF0aW5nIGl0LlxuICAgICAgLy8gSXQncyBhbGxvd2VkIHRvIGJlIGFuIFNGQywgc2luY2Ugd2UgaWdub3JlIGl0LlxuICAgICAgQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIC8vIG51bGwsIHVuZGVmaW5lZCwgYW5kIGJvb2xlYW5zIHdpbGwgYmUgZmlsdGVyZWQgb3V0IGJ5IENoaWxkcmVuLnRvQXJyYXlcbiAgICAgICAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHR5cGVvZiBjaGlsZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2hpbGQpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBwcmltaXRpdmVOb2RlU3VwcGxpZWQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbGVtZW50QW5TRkMoY2hpbGQpICYmIGNoaWxkLmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudFN1cHBsaWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnRQcm9wcyA9IGZ1bmN0aW9uIGNvbnZlcnRQcm9wcyhwcm9wcykge1xuICAgICAgdmFyIHdvcmtpbmdQcm9wcyA9IHtcbiAgICAgICAgLy8gZXhwbGljaXRseSBieXBhc3MgdGhlIHByb3BzIHRoYXQgZG9uJ3QgbmVlZCBjb252ZXJzaW9uXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZWFzaW5nOiBwcm9wcy5lYXNpbmcsXG4gICAgICAgIG9uU3RhcnQ6IHByb3BzLm9uU3RhcnQsXG4gICAgICAgIG9uRmluaXNoOiBwcm9wcy5vbkZpbmlzaCxcbiAgICAgICAgb25TdGFydEFsbDogcHJvcHMub25TdGFydEFsbCxcbiAgICAgICAgb25GaW5pc2hBbGw6IHByb3BzLm9uRmluaXNoQWxsLFxuICAgICAgICB0eXBlTmFtZTogcHJvcHMudHlwZU5hbWUsXG4gICAgICAgIGRpc2FibGVBbGxBbmltYXRpb25zOiBwcm9wcy5kaXNhYmxlQWxsQW5pbWF0aW9ucyxcbiAgICAgICAgZ2V0UG9zaXRpb246IHByb3BzLmdldFBvc2l0aW9uLFxuICAgICAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodDogcHJvcHMubWFpbnRhaW5Db250YWluZXJIZWlnaHQsXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBwcm9wcy52ZXJ0aWNhbEFsaWdubWVudCxcblxuICAgICAgICAvLyBEbyBzdHJpbmctdG8taW50IGNvbnZlcnNpb24gZm9yIGFsbCB0aW1pbmctcmVsYXRlZCBwcm9wc1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnZHVyYXRpb24nKSxcbiAgICAgICAgZGVsYXk6IHRoaXMuY29udmVydFRpbWluZ1Byb3AoJ2RlbGF5JyksXG4gICAgICAgIHN0YWdnZXJEdXJhdGlvbkJ5OiB0aGlzLmNvbnZlcnRUaW1pbmdQcm9wKCdzdGFnZ2VyRHVyYXRpb25CeScpLFxuICAgICAgICBzdGFnZ2VyRGVsYXlCeTogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnc3RhZ2dlckRlbGF5QnknKSxcblxuICAgICAgICAvLyBPdXIgZW50ZXIvbGVhdmUgYW5pbWF0aW9ucyBjYW4gYmUgc3BlY2lmaWVkIGFzIGJvb2xlYW4gKGRlZmF1bHQgb3JcbiAgICAgICAgLy8gZGlzYWJsZWQpLCBzdHJpbmcgKHByZXNldCBuYW1lKSwgb3Igb2JqZWN0IChhY3R1YWwgYW5pbWF0aW9uIHZhbHVlcykuXG4gICAgICAgIC8vIExldCdzIHN0YW5kYXJkaXplIHRoaXMgc28gdGhhdCB0aGV5J3JlIGFsd2F5cyBvYmplY3RzXG4gICAgICAgIGFwcGVhckFuaW1hdGlvbjogdGhpcy5jb252ZXJ0QW5pbWF0aW9uUHJvcChwcm9wcy5hcHBlYXJBbmltYXRpb24sIGFwcGVhclByZXNldHMpLFxuICAgICAgICBlbnRlckFuaW1hdGlvbjogdGhpcy5jb252ZXJ0QW5pbWF0aW9uUHJvcChwcm9wcy5lbnRlckFuaW1hdGlvbiwgZW50ZXJQcmVzZXRzKSxcbiAgICAgICAgbGVhdmVBbmltYXRpb246IHRoaXMuY29udmVydEFuaW1hdGlvblByb3AocHJvcHMubGVhdmVBbmltYXRpb24sIGxlYXZlUHJlc2V0cyksXG5cbiAgICAgICAgZGVsZWdhdGVkOiB7fVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKHdvcmtpbmdQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIC8vIEdhdGhlciBhbnkgYWRkaXRpb25hbCBwcm9wcztcbiAgICAgIC8vIHRoZXkgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8gdGhlIFJlYWN0RWxlbWVudCBjcmVhdGVkLlxuICAgICAgdmFyIHByaW1hcnlQcm9wS2V5cyA9IE9iamVjdC5rZXlzKHdvcmtpbmdQcm9wcyk7XG4gICAgICB2YXIgZGVsZWdhdGVkUHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIHByaW1hcnlQcm9wS2V5cyk7XG5cbiAgICAgIC8vIFRoZSBGbGlwTW92ZSBjb250YWluZXIgZWxlbWVudCBuZWVkcyB0byBoYXZlIGEgbm9uLXN0YXRpYyBwb3NpdGlvbi5cbiAgICAgIC8vIFdlIHVzZSBgcmVsYXRpdmVgIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgdXNlci5cbiAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRlbGVnYXRpbmcgcHJvcHMsIHdlIG5lZWQgdG8gbWVyZ2UgdGhpcyBpbi5cbiAgICAgIGRlbGVnYXRlZFByb3BzLnN0eWxlID0gX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSwgZGVsZWdhdGVkUHJvcHMuc3R5bGUpO1xuXG4gICAgICB3b3JraW5nUHJvcHMuZGVsZWdhdGVkID0gZGVsZWdhdGVkUHJvcHM7XG5cbiAgICAgIHJldHVybiB3b3JraW5nUHJvcHM7XG4gICAgfTtcblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUuY29udmVydFRpbWluZ1Byb3AgPSBmdW5jdGlvbiBjb252ZXJ0VGltaW5nUHJvcChwcm9wKSB7XG4gICAgICB2YXIgcmF3VmFsdWUgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgcmF3VmFsdWUgPT09ICdudW1iZXInID8gcmF3VmFsdWUgOiBwYXJzZUludChyYXdWYWx1ZSwgMTApO1xuXG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBGbGlwTW92ZVByb3BDb252ZXJ0ZXIuZGVmYXVsdFByb3BzW3Byb3BdO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaW52YWxpZFR5cGVGb3JUaW1pbmdQcm9wKHtcbiAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICB2YWx1ZTogcmF3VmFsdWUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnRBbmltYXRpb25Qcm9wID0gZnVuY3Rpb24gY29udmVydEFuaW1hdGlvblByb3AoYW5pbWF0aW9uLCBwcmVzZXRzKSB7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiBhbmltYXRpb24gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFuaW1hdGlvbikpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gSWYgaXQncyB0cnVlLCB3ZSB3YW50IHRvIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXQuXG4gICAgICAgICAgICAvLyBJZiBpdCdzIGZhbHNlLCB3ZSB3YW50IHRvIHVzZSB0aGUgJ25vbmUnIHByZXNldC5cbiAgICAgICAgICAgIHJldHVybiBwcmVzZXRzW2FuaW1hdGlvbiA/IGRlZmF1bHRQcmVzZXQgOiBkaXNhYmxlUHJlc2V0XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcHJlc2V0S2V5cyA9IE9iamVjdC5rZXlzKHByZXNldHMpO1xuXG4gICAgICAgICAgICBpZiAocHJlc2V0S2V5cy5pbmRleE9mKGFuaW1hdGlvbikgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZEVudGVyTGVhdmVQcmVzZXQoe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAgIGFjY2VwdGFibGVWYWx1ZXM6IHByZXNldEtleXMuam9pbignLCAnKSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFByZXNldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHByZXNldHNbZGVmYXVsdFByZXNldF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVzZXRzW2FuaW1hdGlvbl07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIHRoaXMuY29udmVydFByb3BzKHRoaXMucHJvcHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZsaXBNb3ZlUHJvcENvbnZlcnRlcjtcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICBkdXJhdGlvbjogMzUwLFxuICAgIGRlbGF5OiAwLFxuICAgIHN0YWdnZXJEdXJhdGlvbkJ5OiAwLFxuICAgIHN0YWdnZXJEZWxheUJ5OiAwLFxuICAgIHR5cGVOYW1lOiAnZGl2JyxcbiAgICBlbnRlckFuaW1hdGlvbjogZGVmYXVsdFByZXNldCxcbiAgICBsZWF2ZUFuaW1hdGlvbjogZGVmYXVsdFByZXNldCxcbiAgICBkaXNhYmxlQWxsQW5pbWF0aW9uczogZmFsc2UsXG4gICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uIGdldFBvc2l0aW9uKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0sXG4gICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQ6IGZhbHNlLFxuICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJ1xuICB9LCBfdGVtcDtcbn1cblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmVcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICpcbiAqIFRoZXNlIG1ldGhvZHMgcmVhZCBmcm9tIGFuZCB3cml0ZSB0byB0aGUgRE9NLlxuICogVGhleSBhbG1vc3QgYWx3YXlzIGhhdmUgc2lkZSBlZmZlY3RzLCBhbmQgd2lsbCBob3BlZnVsbHkgYmVjb21lIHRoZVxuICogb25seSBzcG90IGluIHRoZSBjb2RlYmFzZSB3aXRoIGltcHVyZSBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzVG9ET01Ob2RlKF9yZWYpIHtcbiAgdmFyIGRvbU5vZGUgPSBfcmVmLmRvbU5vZGUsXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcblxuICAvLyBDYW4ndCBqdXN0IGRvIGFuIG9iamVjdCBtZXJnZSBiZWNhdXNlIGRvbU5vZGUuc3R5bGVzIGlzIG5vIHJlZ3VsYXIgb2JqZWN0LlxuICAvLyBOZWVkIHRvIGRvIGl0IHRoaXMgd2F5IGZvciB0aGUgZW5naW5lIHRvIGZpcmUgaXRzIGBzZXRgIGxpc3RlbmVycy5cbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkb21Ob2RlLnN0eWxlLnNldFByb3BlcnR5KGh5cGhlbmF0ZShrZXkpLCBzdHlsZXNba2V5XSk7XG4gIH0pO1xufVxuXG4vLyBNb2RpZmllZCBmcm9tIE1vZGVybml6clxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSB7XG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJy1vLXRyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICctbW96LXRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJy13ZWJraXQtdHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIC8vIElmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBicm93c2VybGVzcyBlbnZpcm9ubWVudCAoZWcuIFNTUiksIGl0IGRvZXNuJ3QgYXBwbHkuXG4gIC8vIFJldHVybiBhIHBsYWNlaG9sZGVyIHN0cmluZywgZm9yIGNvbnNpc3RlbnQgdHlwZSByZXR1cm4uXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcblxuICB2YXIgbWF0Y2ggPSBmaW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IHVuZGVmaW5lZDtcbiAgfSwgT2JqZWN0LmtleXModHJhbnNpdGlvbnMpKTtcblxuICAvLyBJZiBubyBgdHJhbnNpdGlvbmAgaXMgZm91bmQsIHdlIG11c3QgYmUgcnVubmluZyBpbiBhIGJyb3dzZXIgc28gYW5jaWVudCxcbiAgLy8gUmVhY3QgaXRzZWxmIHdvbid0IHJ1bi4gUmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIGNvbnNpc3RlbnQgdHlwZSByZXR1cm5cbiAgcmV0dXJuIG1hdGNoID8gdHJhbnNpdGlvbnNbbWF0Y2hdIDogJyc7XG59XG5cbnZhciBnZXRSZWxhdGl2ZUJvdW5kaW5nQm94ID0gZnVuY3Rpb24gZ2V0UmVsYXRpdmVCb3VuZGluZ0JveChfcmVmMikge1xuICB2YXIgY2hpbGREb21Ob2RlID0gX3JlZjIuY2hpbGREb21Ob2RlLFxuICAgICAgcGFyZW50RG9tTm9kZSA9IF9yZWYyLnBhcmVudERvbU5vZGUsXG4gICAgICBnZXRQb3NpdGlvbiA9IF9yZWYyLmdldFBvc2l0aW9uO1xuXG4gIHZhciBwYXJlbnRCb3ggPSBnZXRQb3NpdGlvbihwYXJlbnREb21Ob2RlKTtcblxuICB2YXIgX2dldFBvc2l0aW9uID0gZ2V0UG9zaXRpb24oY2hpbGREb21Ob2RlKSxcbiAgICAgIHRvcCA9IF9nZXRQb3NpdGlvbi50b3AsXG4gICAgICBsZWZ0ID0gX2dldFBvc2l0aW9uLmxlZnQsXG4gICAgICByaWdodCA9IF9nZXRQb3NpdGlvbi5yaWdodCxcbiAgICAgIGJvdHRvbSA9IF9nZXRQb3NpdGlvbi5ib3R0b20sXG4gICAgICB3aWR0aCA9IF9nZXRQb3NpdGlvbi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9nZXRQb3NpdGlvbi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRvcCAtIHBhcmVudEJveC50b3AsXG4gICAgbGVmdDogbGVmdCAtIHBhcmVudEJveC5sZWZ0LFxuICAgIHJpZ2h0OiBwYXJlbnRCb3gucmlnaHQgLSByaWdodCxcbiAgICBib3R0b206IHBhcmVudEJveC5ib3R0b20gLSBib3R0b20sXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59O1xuXG4vKiogZ2V0UG9zaXRpb25EZWx0YVxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZGVsdGEgYmV0d2VlbiB0d28gYm91bmRpbmcgYm94ZXMsIHRvIGZpZ3VyZSBvdXRcbiAqIGhvdyBtYW55IHBpeGVscyBvbiBlYWNoIGF4aXMgdGhlIGVsZW1lbnQgaGFzIG1vdmVkLlxuICpcbiAqL1xudmFyIGdldFBvc2l0aW9uRGVsdGEgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbkRlbHRhKF9yZWYzKSB7XG4gIHZhciBjaGlsZERvbU5vZGUgPSBfcmVmMy5jaGlsZERvbU5vZGUsXG4gICAgICBjaGlsZEJvdW5kaW5nQm94ID0gX3JlZjMuY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgIHBhcmVudEJvdW5kaW5nQm94ID0gX3JlZjMucGFyZW50Qm91bmRpbmdCb3gsXG4gICAgICBnZXRQb3NpdGlvbiA9IF9yZWYzLmdldFBvc2l0aW9uO1xuXG4gIC8vIFRFTVA6IEEgbXlzdGVyeSBidWcgaXMgc29tZXRpbWVzIGNhdXNpbmcgdW5uZWNlc3NhcnkgYm91bmRpbmdCb3hlcyB0b1xuICB2YXIgZGVmYXVsdEJveCA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG5cbiAgLy8gT3VyIG9sZCBib3ggaXMgaXRzIGxhc3QgY2FsY3VsYXRlZCBwb3NpdGlvbiwgZGVyaXZlZCBvbiBtb3VudCBvciBhdCB0aGVcbiAgLy8gc3RhcnQgb2YgdGhlIHByZXZpb3VzIGFuaW1hdGlvbi5cbiAgdmFyIG9sZFJlbGF0aXZlQm94ID0gY2hpbGRCb3VuZGluZ0JveCB8fCBkZWZhdWx0Qm94O1xuICB2YXIgcGFyZW50Qm94ID0gcGFyZW50Qm91bmRpbmdCb3ggfHwgZGVmYXVsdEJveDtcblxuICAvLyBPdXIgbmV3IGJveCBpcyB0aGUgbmV3IGZpbmFsIHJlc3RpbmcgcGxhY2U6IFdoZXJlIHdlIGV4cGVjdCBpdCB0byB3aW5kIHVwXG4gIC8vIGFmdGVyIHRoZSBhbmltYXRpb24uIEZpcnN0IHdlIGdldCB0aGUgYm94IGluIGFic29sdXRlIHRlcm1zIChBS0EgcmVsYXRpdmVcbiAgLy8gdG8gdGhlIHZpZXdwb3J0KSwgYW5kIHRoZW4gd2UgY2FsY3VsYXRlIGl0cyByZWxhdGl2ZSBib3ggKHJlbGF0aXZlIHRvIHRoZVxuICAvLyBwYXJlbnQgY29udGFpbmVyKVxuICB2YXIgbmV3QWJzb2x1dGVCb3ggPSBnZXRQb3NpdGlvbihjaGlsZERvbU5vZGUpO1xuICB2YXIgbmV3UmVsYXRpdmVCb3ggPSB7XG4gICAgdG9wOiBuZXdBYnNvbHV0ZUJveC50b3AgLSBwYXJlbnRCb3gudG9wLFxuICAgIGxlZnQ6IG5ld0Fic29sdXRlQm94LmxlZnQgLSBwYXJlbnRCb3gubGVmdFxuICB9O1xuXG4gIHJldHVybiBbb2xkUmVsYXRpdmVCb3gubGVmdCAtIG5ld1JlbGF0aXZlQm94LmxlZnQsIG9sZFJlbGF0aXZlQm94LnRvcCAtIG5ld1JlbGF0aXZlQm94LnRvcF07XG59O1xuXG4vKiogcmVtb3ZlTm9kZUZyb21ET01GbG93XG4gKiBUaGlzIG1ldGhvZCBkb2VzIHNvbWV0aGluZyB2ZXJ5IHNuZWFreTogaXQgcmVtb3ZlcyBhIERPTSBub2RlIGZyb20gdGhlXG4gKiBkb2N1bWVudCBmbG93LCBidXQgd2l0aG91dCBhY3R1YWxseSBjaGFuZ2luZyBpdHMgb24tc2NyZWVuIHBvc2l0aW9uLlxuICpcbiAqIEl0IHdvcmtzIGJ5IGNhbGN1bGF0aW5nIHdoZXJlIHRoZSBub2RlIGlzLCBhbmQgdGhlbiBhcHBseWluZyBzdHlsZXNcbiAqIHNvIHRoYXQgaXQgd2luZHMgdXAgYmVpbmcgcG9zaXRpb25lZCBhYnNvbHV0ZWx5LCBidXQgaW4gZXhhY3RseSB0aGVcbiAqIHNhbWUgcGxhY2UuXG4gKlxuICogVGhpcyBpcyBhIHZpdGFsIHBhcnQgb2YgdGhlIEZMSVAgdGVjaG5pcXVlLlxuICovXG52YXIgcmVtb3ZlTm9kZUZyb21ET01GbG93ID0gZnVuY3Rpb24gcmVtb3ZlTm9kZUZyb21ET01GbG93KGNoaWxkRGF0YSwgdmVydGljYWxBbGlnbm1lbnQpIHtcbiAgdmFyIGRvbU5vZGUgPSBjaGlsZERhdGEuZG9tTm9kZSxcbiAgICAgIGJvdW5kaW5nQm94ID0gY2hpbGREYXRhLmJvdW5kaW5nQm94O1xuXG5cbiAgaWYgKCFkb21Ob2RlIHx8ICFib3VuZGluZ0JveCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvciB0aGlzIHRvIHdvcmssIHdlIGhhdmUgdG8gb2Zmc2V0IGFueSBnaXZlbiBgbWFyZ2luYC5cbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG5cbiAgLy8gV2UgbmVlZCB0byBjbGVhbiB1cCBtYXJnaW5zLCBieSBjb252ZXJ0aW5nIGFuZCByZW1vdmluZyBzdWZmaXg6XG4gIC8vIGVnLiAnMjFweCcgLT4gMjFcbiAgdmFyIG1hcmdpbkF0dHJzID0gWydtYXJnaW4tdG9wJywgJ21hcmdpbi1sZWZ0JywgJ21hcmdpbi1yaWdodCddO1xuICB2YXIgbWFyZ2lucyA9IG1hcmdpbkF0dHJzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtYXJnaW4pIHtcbiAgICB2YXIgX2JhYmVsSGVscGVycyRleHRlbmRzO1xuXG4gICAgdmFyIHByb3BlcnR5VmFsID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZShtYXJnaW4pO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIChfYmFiZWxIZWxwZXJzJGV4dGVuZHMgPSB7fSwgX2JhYmVsSGVscGVycyRleHRlbmRzW21hcmdpbl0gPSBOdW1iZXIocHJvcGVydHlWYWwucmVwbGFjZSgncHgnLCAnJykpLCBfYmFiZWxIZWxwZXJzJGV4dGVuZHMpKTtcbiAgfSwge30pO1xuXG4gIC8vIElmIHdlJ3JlIGJvdHRvbS1hbGlnbmVkLCB3ZSBuZWVkIHRvIGFkZCB0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCB0byBpdHNcbiAgLy8gdG9wIG9mZnNldC4gVGhpcyBpcyBiZWNhdXNlLCB3aGVuIHRoZSBjb250YWluZXIgaXMgYm90dG9tLWFsaWduZWQsIGl0c1xuICAvLyBoZWlnaHQgc2hyaW5rcyBmcm9tIHRoZSB0b3AsIG5vdCB0aGUgYm90dG9tLiBXZSdyZSByZW1vdmluZyB0aGlzIG5vZGVcbiAgLy8gZnJvbSB0aGUgZmxvdywgc28gdGhlIHRvcCBpcyBnb2luZyB0byBkcm9wIGJ5IGl0cyBoZWlnaHQuXG4gIHZhciB0b3BPZmZzZXQgPSB2ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ2JvdHRvbScgPyBib3VuZGluZ0JveC50b3AgLSBib3VuZGluZ0JveC5oZWlnaHQgOiBib3VuZGluZ0JveC50b3A7XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IHRvcE9mZnNldCAtIG1hcmdpbnNbJ21hcmdpbi10b3AnXSArICdweCcsXG4gICAgbGVmdDogYm91bmRpbmdCb3gubGVmdCAtIG1hcmdpbnNbJ21hcmdpbi1sZWZ0J10gKyAncHgnLFxuICAgIHJpZ2h0OiBib3VuZGluZ0JveC5yaWdodCAtIG1hcmdpbnNbJ21hcmdpbi1yaWdodCddICsgJ3B4J1xuICB9O1xuXG4gIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG59O1xuXG4vKiogdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXJcbiAqIEFuIG9wdGlvbmFsIHByb3BlcnR5IHRvIEZsaXBNb3ZlIGlzIGEgYG1haW50YWluQ29udGFpbmVySGVpZ2h0YCBib29sZWFuLlxuICogVGhpcyBwcm9wZXJ0eSBjcmVhdGVzIGEgbm9kZSB0aGF0IGZpbGxzIHNwYWNlLCBzbyB0aGF0IHRoZSBwYXJlbnRcbiAqIGNvbnRhaW5lciBkb2Vzbid0IGNvbGxhcHNlIHdoZW4gaXRzIGNoaWxkcmVuIGFyZSByZW1vdmVkIGZyb20gdGhlXG4gKiBkb2N1bWVudCBmbG93LlxuICovXG52YXIgdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiB1cGRhdGVIZWlnaHRQbGFjZWhvbGRlcihfcmVmNCkge1xuICB2YXIgZG9tTm9kZSA9IF9yZWY0LmRvbU5vZGUsXG4gICAgICBwYXJlbnREYXRhID0gX3JlZjQucGFyZW50RGF0YSxcbiAgICAgIGdldFBvc2l0aW9uID0gX3JlZjQuZ2V0UG9zaXRpb247XG5cbiAgdmFyIHBhcmVudERvbU5vZGUgPSBwYXJlbnREYXRhLmRvbU5vZGU7XG4gIHZhciBwYXJlbnRCb3VuZGluZ0JveCA9IHBhcmVudERhdGEuYm91bmRpbmdCb3g7XG5cbiAgaWYgKCFwYXJlbnREb21Ob2RlIHx8ICFwYXJlbnRCb3VuZGluZ0JveCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gZmluZCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgKndpdGhvdXQqIHRoZSBwbGFjZWhvbGRlci5cbiAgLy8gU2luY2UgaXQncyBwb3NzaWJsZSB0aGF0IHRoZSBwbGFjZWhvbGRlciBtaWdodCBhbHJlYWR5IGJlIHByZXNlbnQsXG4gIC8vIHdlIGZpcnN0IHNldCBpdHMgaGVpZ2h0IHRvIDAuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSBjb250YWluZXIgdG8gY29sbGFwc2UgZG93biB0byB0aGUgc2l6ZSBvZiBqdXN0IGl0c1xuICAvLyBjb250ZW50IChwbHVzIGNvbnRhaW5lciBwYWRkaW5nIG9yIGJvcmRlcnMgaWYgYW55KS5cbiAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHsgaGVpZ2h0OiAnMCcgfSB9KTtcblxuICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBieSB3aGljaCB0aGUgY29udGFpbmVyIHdvdWxkIGJlIGNvbGxhcHNlZCBieSBlbGVtZW50c1xuICAvLyBsZWF2aW5nLiBXZSBjb21wYXJlIHRoZSBmcmVzaGx5LWF2YWlsYWJsZSBwYXJlbnQgaGVpZ2h0IHdpdGggdGhlIG9yaWdpbmFsLFxuICAvLyBjYWNoZWQgY29udGFpbmVyIGhlaWdodC5cbiAgdmFyIG9yaWdpbmFsUGFyZW50SGVpZ2h0ID0gcGFyZW50Qm91bmRpbmdCb3guaGVpZ2h0O1xuICB2YXIgY29sbGFwc2VkUGFyZW50SGVpZ2h0ID0gZ2V0UG9zaXRpb24ocGFyZW50RG9tTm9kZSkuaGVpZ2h0O1xuICB2YXIgcmVkdWN0aW9uSW5IZWlnaHQgPSBvcmlnaW5hbFBhcmVudEhlaWdodCAtIGNvbGxhcHNlZFBhcmVudEhlaWdodDtcblxuICAvLyBJZiB0aGUgY29udGFpbmVyIGhhcyBiZWNvbWUgc2hvcnRlciwgdXBkYXRlIHRoZSBwYWRkaW5nIGVsZW1lbnQnc1xuICAvLyBoZWlnaHQgdG8gdGFrZSB1cCB0aGUgZGlmZmVyZW5jZS4gT3RoZXJ3aXNlIHNldCBpdHMgaGVpZ2h0IHRvIHplcm8sXG4gIC8vIHNvIHRoYXQgaXQgaGFzIG5vIGVmZmVjdC5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBoZWlnaHQ6IHJlZHVjdGlvbkluSGVpZ2h0ID4gMCA/IHJlZHVjdGlvbkluSGVpZ2h0ICsgJ3B4JyA6ICcwJ1xuICB9O1xuXG4gIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG59O1xuXG52YXIgZ2V0TmF0aXZlTm9kZSA9IGZ1bmN0aW9uIGdldE5hdGl2ZU5vZGUoZWxlbWVudCkge1xuICAvLyBXaGVuIHJ1bm5pbmcgaW4gYSB3aW5kb3dsZXNzIGVudmlyb25tZW50LCBhYm9ydCFcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIGBlbGVtZW50YCBtYXkgYWxyZWFkeSBiZSBhIG5hdGl2ZSBub2RlLlxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBXaGlsZSBSZWFjdERPTSdzIGBmaW5kRE9NTm9kZWAgaXMgZGlzY291cmFnZWQsIGl0J3MgdGhlIG9ubHlcbiAgLy8gcHVibGljbHktZXhwb3NlZCB3YXkgdG8gZmluZCB0aGUgdW5kZXJseWluZyBET00gbm9kZSBmb3JcbiAgLy8gY29tcG9zaXRlIGNvbXBvbmVudHMuXG4gIHZhciBmb3VuZE5vZGUgPSBmaW5kRE9NTm9kZShlbGVtZW50KTtcblxuICBpZiAoZm91bmROb2RlICYmIGZvdW5kTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyBUZXh0IG5vZGVzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcbiAgcmV0dXJuIGZvdW5kTm9kZTtcbn07XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uU3RyaW5nID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvblN0cmluZyhpbmRleCwgcHJvcHMpIHtcbiAgdmFyIGRlbGF5ID0gcHJvcHMuZGVsYXksXG4gICAgICBkdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xuICB2YXIgc3RhZ2dlckR1cmF0aW9uQnkgPSBwcm9wcy5zdGFnZ2VyRHVyYXRpb25CeSxcbiAgICAgIHN0YWdnZXJEZWxheUJ5ID0gcHJvcHMuc3RhZ2dlckRlbGF5QnksXG4gICAgICBlYXNpbmcgPSBwcm9wcy5lYXNpbmc7XG5cblxuICBkZWxheSArPSBpbmRleCAqIHN0YWdnZXJEZWxheUJ5O1xuICBkdXJhdGlvbiArPSBpbmRleCAqIHN0YWdnZXJEdXJhdGlvbkJ5O1xuXG4gIHZhciBjc3NQcm9wZXJ0aWVzID0gWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddO1xuXG4gIHJldHVybiBjc3NQcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwcm9wICsgJyAnICsgZHVyYXRpb24gKyAnbXMgJyArIGVhc2luZyArICcgJyArIGRlbGF5ICsgJ21zJztcbiAgfSkuam9pbignLCAnKTtcbn07XG5cbi8qKlxuICogUmVhY3QgRmxpcCBNb3ZlXG4gKiAoYykgMjAxNi1wcmVzZW50IEpvc2h1YSBDb21lYXVcbiAqXG4gKiBGb3IgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgY29kZSBpcyBsYWlkIG91dCwgY2hlY2sgb3V0IENPREVfVE9VUi5tZFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5cblxudmFyIHRyYW5zaXRpb25FbmQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xudmFyIG5vQnJvd3NlclN1cHBvcnQgPSAhdHJhbnNpdGlvbkVuZDtcblxuZnVuY3Rpb24gZ2V0S2V5KGNoaWxkRGF0YSkge1xuICByZXR1cm4gY2hpbGREYXRhLmtleSB8fCAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIC8vIEZpeCBpbmNvbXBsZXRlIHR5cGluZyBvZiBDaGlsZHJlbi50b0FycmF5XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG4gIHJldHVybiBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbn1cblxudmFyIEZsaXBNb3ZlJDEgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhGbGlwTW92ZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxpcE1vdmUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZsaXBNb3ZlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46IGdldEVsZW1lbnRDaGlsZHJlbihcbiAgICAgIC8vIGB0aGlzLnByb3BzYCBvdWdodCB0byBhbHdheXMgYmUgZGVmaW5lZCBhdCB0aGlzIHBvaW50LCBidXQgYSByZXBvcnRcbiAgICAgIC8vIHdhcyBtYWRlIGFib3V0IGl0IG5vdCBiZWluZyBkZWZpbmVkIGluIElFMTAuXG4gICAgICAvLyBUT0RPOiBUZXN0IGluIElFMTAsIHRvIHNlZSBpZiB0aGVyZSdzIGFuIHVuZGVybHlpbmcgY2F1c2UgdGhhdCBjYW5cbiAgICAgIC8vIGJlIGFkZHJlc3NlZC5cbiAgICAgIF90aGlzLnByb3BzID8gX3RoaXMucHJvcHMuY2hpbGRyZW4gOiBbXSkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgYXBwZWFyaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9LCBfdGhpcy5jaGlsZHJlbkRhdGEgPSB7fSwgX3RoaXMucGFyZW50RGF0YSA9IHtcbiAgICAgIGRvbU5vZGU6IG51bGwsXG4gICAgICBib3VuZGluZ0JveDogbnVsbFxuICAgIH0sIF90aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YSA9IHtcbiAgICAgIGRvbU5vZGU6IG51bGxcbiAgICB9LCBfdGhpcy5yZW1haW5pbmdBbmltYXRpb25zID0gMCwgX3RoaXMuY2hpbGRyZW5Ub0FuaW1hdGUgPSBbXSwgX3RoaXMuZmluZERPTUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1maW5kLWRvbS1ub2RlXG4gICAgICB2YXIgZG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZSAmJiBkb21Ob2RlLnBhcmVudE5vZGU7XG5cbiAgICAgIC8vIFRoaXMgb3VnaHQgdG8gYmUgaW1wb3NzaWJsZSwgYnV0IGhhbmRsaW5nIGl0IGZvciBGbG93J3Mgc2FrZS5cbiAgICAgIGlmICghcGFyZW50Tm9kZSB8fCAhKHBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgaGFzIHN0YXRpYyBwb3NpdGlvbmluZywgbGVhdmUgYW5pbWF0aW9ucyBtaWdodCBsb29rXG4gICAgICAvLyByZWFsbHkgZnVua3kuIExldCdzIGF1dG9tYXRpY2FsbHkgYXBwbHkgYHBvc2l0aW9uOiByZWxhdGl2ZWAgaW4gdGhpc1xuICAgICAgLy8gY2FzZSwgdG8gcHJldmVudCBhbnkgcXVpcmtpbmVzcy5cbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnROb2RlKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHBhcmVudE5vZGVQb3NpdGlvblN0YXRpYygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wYXJlbnREYXRhLmRvbU5vZGUgPSBwYXJlbnROb2RlO1xuICAgIH0sIF90aGlzLnJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkeW5hbWljQ2hpbGRyZW4gPSBfdGhpcy5zdGF0ZS5jaGlsZHJlbi5maWx0ZXIoX3RoaXMuZG9lc0NoaWxkTmVlZFRvQmVBbmltYXRlZCk7XG5cbiAgICAgIC8vIFNwbGl0dGluZyBET00gcmVhZHMgYW5kIHdyaXRlcyB0byBiZSBwZWZvcm1lZCBpbiBiYXRjaGVzXG4gICAgICB2YXIgY2hpbGRyZW5Jbml0aWFsU3R5bGVzID0gZHluYW1pY0NoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbXB1dGVJbml0aWFsU3R5bGVzKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgICAgZHluYW1pY0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBfdGhpcy5yZW1haW5pbmdBbmltYXRpb25zICs9IDE7XG4gICAgICAgIF90aGlzLmNoaWxkcmVuVG9BbmltYXRlLnB1c2goZ2V0S2V5KGNoaWxkKSk7XG4gICAgICAgIF90aGlzLmFuaW1hdGVDaGlsZChjaGlsZCwgaW5kZXgsIGNoaWxkcmVuSW5pdGlhbFN0eWxlc1tpbmRleF0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMub25TdGFydEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpcy5jYWxsQ2hpbGRyZW5Ib29rKF90aGlzLnByb3BzLm9uU3RhcnRBbGwpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmRvZXNDaGlsZE5lZWRUb0JlQW5pbWF0ZWQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIC8vIElmIHRoZSBjaGlsZCBkb2Vzbid0IGhhdmUgYSBrZXksIGl0J3MgYW4gaW1tb3ZhYmxlIGNoaWxkIChvbmUgdGhhdCB3ZVxuICAgICAgLy8gZG8gbm90IHdhbnQgdG8gZG8gRkxJUCBzdHVmZiB0by4pXG4gICAgICBpZiAoIWdldEtleShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgICAgdmFyIGNoaWxkRG9tTm9kZSA9IGNoaWxkRGF0YS5kb21Ob2RlO1xuICAgICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZERhdGEuYm91bmRpbmdCb3g7XG4gICAgICB2YXIgcGFyZW50Qm91bmRpbmdCb3ggPSBfdGhpcy5wYXJlbnREYXRhLmJvdW5kaW5nQm94O1xuXG4gICAgICBpZiAoIWNoaWxkRG9tTm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcGVhckFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmFwcGVhckFuaW1hdGlvbixcbiAgICAgICAgICBlbnRlckFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmVudGVyQW5pbWF0aW9uLFxuICAgICAgICAgIGxlYXZlQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMubGVhdmVBbmltYXRpb24sXG4gICAgICAgICAgZ2V0UG9zaXRpb24gPSBfdGhpcyRwcm9wcy5nZXRQb3NpdGlvbjtcblxuXG4gICAgICB2YXIgaXNBcHBlYXJpbmdXaXRoQW5pbWF0aW9uID0gY2hpbGQuYXBwZWFyaW5nICYmIGFwcGVhckFuaW1hdGlvbjtcbiAgICAgIHZhciBpc0VudGVyaW5nV2l0aEFuaW1hdGlvbiA9IGNoaWxkLmVudGVyaW5nICYmIGVudGVyQW5pbWF0aW9uO1xuICAgICAgdmFyIGlzTGVhdmluZ1dpdGhBbmltYXRpb24gPSBjaGlsZC5sZWF2aW5nICYmIGxlYXZlQW5pbWF0aW9uO1xuXG4gICAgICBpZiAoaXNBcHBlYXJpbmdXaXRoQW5pbWF0aW9uIHx8IGlzRW50ZXJpbmdXaXRoQW5pbWF0aW9uIHx8IGlzTGVhdmluZ1dpdGhBbmltYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzbid0IGVudGVyaW5nL2xlYXZpbmcsIHdlIHdhbnQgdG8gYW5pbWF0ZSBpdCBpZiBpdCdzXG4gICAgICAvLyBvbi1zY3JlZW4gcG9zaXRpb24gaGFzIGNoYW5nZWQuXG5cbiAgICAgIHZhciBfZ2V0UG9zaXRpb25EZWx0YSA9IGdldFBvc2l0aW9uRGVsdGEoe1xuICAgICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRG9tTm9kZSxcbiAgICAgICAgY2hpbGRCb3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgICAgcGFyZW50Qm91bmRpbmdCb3g6IHBhcmVudEJvdW5kaW5nQm94LFxuICAgICAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb25cbiAgICAgIH0pLFxuICAgICAgICAgIGRYID0gX2dldFBvc2l0aW9uRGVsdGFbMF0sXG4gICAgICAgICAgZFkgPSBfZ2V0UG9zaXRpb25EZWx0YVsxXTtcblxuICAgICAgcmV0dXJuIGRYICE9PSAwIHx8IGRZICE9PSAwO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cbiAgLy8gQ29weSBwcm9wcy5jaGlsZHJlbiBpbnRvIHN0YXRlLlxuICAvLyBUbyB1bmRlcnN0YW5kIHdoeSB0aGlzIGlzIGltcG9ydGFudCAoYW5kIG5vdCBhbiBhbnRpLXBhdHRlcm4pLCBjb25zaWRlclxuICAvLyBob3cgXCJsZWF2ZVwiIGFuaW1hdGlvbnMgd29yay4gQW4gaXRlbSBoYXMgXCJsZWZ0XCIgd2hlbiB0aGUgY29tcG9uZW50XG4gIC8vIHJlY2VpdmVzIGEgbmV3IHNldCBvZiBwcm9wcyB0aGF0IGRvIE5PVCBjb250YWluIHRoZSBpdGVtLlxuICAvLyBJZiB3ZSBqdXN0IHJlbmRlciB0aGUgcHJvcHMgYXMtaXMsIHRoZSBpdGVtIHdvdWxkIGluc3RhbnRseSBkaXNhcHBlYXIuXG4gIC8vIFdlIHdhbnQgdG8ga2VlcCB0aGUgaXRlbSByZW5kZXJlZCBmb3IgYSBsaXR0bGUgd2hpbGUsIHVudGlsIGl0cyBhbmltYXRpb25cbiAgLy8gY2FuIGNvbXBsZXRlLiBCZWNhdXNlIHdlIGNhbm5vdCBtdXRhdGUgcHJvcHMsIHdlIG1ha2UgYHN0YXRlYCB0aGUgc291cmNlXG4gIC8vIG9mIHRydXRoLlxuXG5cbiAgLy8gRmxpcE1vdmUgbmVlZHMgdG8ga25vdyBxdWl0ZSBhIGJpdCBhYm91dCBpdHMgY2hpbGRyZW4gaW4gb3JkZXIgdG8gZG9cbiAgLy8gaXRzIGpvYi4gV2Ugc3RvcmUgdGhlc2UgYXMgYSBwcm9wZXJ0eSBvbiB0aGUgaW5zdGFuY2UuIFdlJ3JlIG5vdCB1c2luZ1xuICAvLyBzdGF0ZSwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IGNoYW5nZXMgdG8gdHJpZ2dlciByZS1yZW5kZXJzLCB3ZSBqdXN0XG4gIC8vIG5lZWQgYSBwbGFjZSB0byBrZWVwIHRoZSBkYXRhIGZvciByZWZlcmVuY2UsIHdoZW4gY2hhbmdlcyBoYXBwZW4uXG4gIC8vIFRoaXMgZmllbGQgc2hvdWxkIG5vdCBiZSBhY2Nlc3NlZCBkaXJlY3RseS4gSW5zdGVhZCwgdXNlIGdldENoaWxkRGF0YSxcbiAgLy8gcHV0Q2hpbGREYXRhLCBldGMuLi5cblxuXG4gIC8vIFNpbWlsYXJseSwgdHJhY2sgdGhlIGRvbSBub2RlIGFuZCBib3ggb2Ygb3VyIHBhcmVudCBlbGVtZW50LlxuXG5cbiAgLy8gSWYgYG1haW50YWluQ29udGFpbmVySGVpZ2h0YCBwcm9wIGlzIHNldCB0byB0cnVlLCB3ZSdsbCBjcmVhdGUgYVxuICAvLyBwbGFjZWhvbGRlciBlbGVtZW50IHdoaWNoIG9jY3VwaWVzIHNwYWNlIHNvIHRoYXQgdGhlIHBhcmVudCBoZWlnaHRcbiAgLy8gZG9lc24ndCBjaGFuZ2Ugd2hlbiBpdGVtcyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudCBmbG93ICh3aGljaFxuICAvLyBoYXBwZW5zIGR1cmluZyBsZWF2ZSBhbmltYXRpb25zKVxuXG5cbiAgLy8gS2VlcCB0cmFjayBvZiByZW1haW5pbmcgYW5pbWF0aW9ucyBzbyB3ZSBrbm93IHdoZW4gdG8gZmlyZSB0aGVcbiAgLy8gYWxsLWZpbmlzaGVkIGNhbGxiYWNrLCBhbmQgY2xlYW4gdXAgYWZ0ZXIgb3Vyc2VsdmVzLlxuICAvLyBOT1RFOiB3ZSBjYW4ndCBzaW1wbHkgdXNlIGNoaWxkcmVuVG9BbmltYXRlLmxlbmd0aCB0byB0cmFjayByZW1haW5pbmdcbiAgLy8gYW5pbWF0aW9ucywgYmVjYXVzZSB3ZSBuZWVkIHRvIG1haW50YWluIHRoZSBsaXN0IG9mIGFuaW1hdGluZyBjaGlsZHJlbixcbiAgLy8gdG8gcGFzcyB0byB0aGUgYG9uRmluaXNoQWxsYCBoYW5kbGVyLlxuXG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQmVjYXVzZSBSZWFjdCAxNiBubyBsb25nZXIgcmVxdWlyZXMgd3JhcHBpbmcgZWxlbWVudHMsIEZsaXAgTW92ZSBjYW4gb3B0XG4gICAgLy8gdG8gbm90IHdyYXAgdGhlIGNoaWxkcmVuIGluIGFuIGVsZW1lbnQuIEluIHRoYXQgY2FzZSwgZmluZCB0aGUgcGFyZW50XG4gICAgLy8gZWxlbWVudCB1c2luZyBgZmluZERPTU5vZGVgLlxuICAgIGlmICh0aGlzLnByb3BzLnR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbmRET01Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICAvLyBSdW4gb3VyIGBhcHBlYXJBbmltYXRpb25gIGlmIGl0IHdhcyByZXF1ZXN0ZWQsIHJpZ2h0IGFmdGVyIHRoZVxuICAgIC8vIGNvbXBvbmVudCBtb3VudHMuXG4gICAgdmFyIHNob3VsZFRyaWdnZXJGTElQID0gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24gJiYgIXRoaXMuaXNBbmltYXRpb25EaXNhYmxlZCh0aGlzLnByb3BzKTtcblxuICAgIGlmIChzaG91bGRUcmlnZ2VyRkxJUCkge1xuICAgICAgdGhpcy5wcmVwRm9yQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnJ1bkFuaW1hdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maW5kRE9NQ29udGFpbmVyKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBjaGlsZHJlbiBoYXZlIGJlZW4gcmUtYXJyYW5nZWQsIG1vdmVkLCBvciBhZGRlZC9yZW1vdmVkLFxuICAgIC8vIHRyaWdnZXIgdGhlIG1haW4gRkxJUCBhbmltYXRpb24uXG4gICAgLy9cbiAgICAvLyBJTVBPUlRBTlQ6IFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGNoaWxkcmVuIGhhdmUgYWN0dWFsbHkgY2hhbmdlZC5cbiAgICAvLyBBdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLCB3ZSBjbGVhbiB1cCBub2RlcyB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAvLyBXZSBET04nVCB3YW50IHRoaXMgY2xlYW51cCB0byB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuXG4gICAgdmFyIG9sZENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcbiAgICB2YXIgbmV4dENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbihwcmV2aW91c1Byb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcblxuICAgIHZhciBzaG91bGRUcmlnZ2VyRkxJUCA9ICFhcnJheXNFcXVhbChvbGRDaGlsZHJlbktleXMsIG5leHRDaGlsZHJlbktleXMpICYmICF0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQodGhpcy5wcm9wcyk7XG5cbiAgICBpZiAoc2hvdWxkVHJpZ2dlckZMSVApIHtcbiAgICAgIHRoaXMucHJlcEZvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5ydW5BbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNhbGN1bGF0ZU5leHRTZXRPZkNoaWxkcmVuID0gZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFNldE9mQ2hpbGRyZW4obmV4dENoaWxkcmVuKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBXZSB3YW50IHRvOlxuICAgIC8vICAgLSBNYXJrIGFsbCBuZXcgY2hpbGRyZW4gYXMgYGVudGVyaW5nYFxuICAgIC8vICAgLSBQdWxsIGluIHByZXZpb3VzIGNoaWxkcmVuIHRoYXQgYXJlbid0IGluIG5leHRDaGlsZHJlbiwgYW5kIG1hcmsgdGhlbVxuICAgIC8vICAgICBhcyBgbGVhdmluZ2BcbiAgICAvLyAgIC0gUHJlc2VydmUgdGhlIG5leHRDaGlsZHJlbiBsaXN0IG9yZGVyLCB3aXRoIGxlYXZpbmcgY2hpbGRyZW4gaW4gdGhlaXJcbiAgICAvLyAgICAgYXBwcm9wcmlhdGUgcGxhY2VzLlxuICAgIC8vXG5cbiAgICB2YXIgdXBkYXRlZENoaWxkcmVuID0gbmV4dENoaWxkcmVuLm1hcChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczIuZmluZENoaWxkQnlLZXkobmV4dENoaWxkLmtleSk7XG5cbiAgICAgIC8vIElmIHRoZSBjdXJyZW50IGNoaWxkIGRpZCBleGlzdCwgYnV0IGl0IHdhcyBpbiB0aGUgbWlkc3Qgb2YgbGVhdmluZyxcbiAgICAgIC8vIHdlIHdhbnQgdG8gdHJlYXQgaXQgYXMgdGhvdWdoIGl0J3MgZW50ZXJpbmdcbiAgICAgIHZhciBpc0VudGVyaW5nID0gIWNoaWxkIHx8IGNoaWxkLmxlYXZpbmc7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV4dENoaWxkLCB7IGVsZW1lbnQ6IG5leHRDaGlsZCwgZW50ZXJpbmc6IGlzRW50ZXJpbmcgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIGlzIHRyaWNreS4gV2Ugd2FudCB0byBrZWVwIHRoZSBuZXh0Q2hpbGRyZW4ncyBvcmRlcmluZywgYnV0IHdpdGhcbiAgICAvLyBhbnkganVzdC1yZW1vdmVkIGl0ZW1zIG1haW50YWluaW5nIHRoZWlyIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIC8vIGVnLlxuICAgIC8vICAgdGhpcy5zdGF0ZS5jaGlsZHJlbiAgPSBbIDEsIDIsIDMsIDQgXVxuICAgIC8vICAgbmV4dENoaWxkcmVuICAgICAgICAgPSBbIDMsIDEgXVxuICAgIC8vXG4gICAgLy8gSW4gdGhpcyBleGFtcGxlLCB3ZSd2ZSByZW1vdmVkIHRoZSAnMicgJiAnNCdcbiAgICAvLyBXZSB3YW50IHRvIGVuZCB1cCB3aXRoOiAgWyAyLCAzLCAxLCA0IF1cbiAgICAvL1xuICAgIC8vIFRvIGFjY29tcGxpc2ggdGhhdCwgd2UnbGwgaXRlcmF0ZSB0aHJvdWdoIHRoaXMuc3RhdGUuY2hpbGRyZW4uIHdoZW5ldmVyXG4gICAgLy8gd2UgZmluZCBhIG1hdGNoLCB3ZSdsbCBhcHBlbmQgb3VyIGBsZWF2aW5nYCBmbGFnIHRvIGl0LCBhbmQgaW5zZXJ0IGl0XG4gICAgLy8gaW50byB0aGUgbmV4dENoaWxkcmVuIGluIGl0cyBPUklHSU5BTCBwb3NpdGlvbi4gTm90ZSB0aGF0LCBhcyB3ZSBrZWVwXG4gICAgLy8gaW5zZXJ0aW5nIG9sZCBpdGVtcyBpbnRvIHRoZSBuZXcgbGlzdCwgdGhlIFwib3JpZ2luYWxcIiBwb3NpdGlvbiB3aWxsXG4gICAgLy8ga2VlcCBpbmNyZW1lbnRpbmcuXG4gICAgdmFyIG51bU9mQ2hpbGRyZW5MZWF2aW5nID0gMDtcbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGlzTGVhdmluZyA9ICFmaW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gZ2V0S2V5KGNoaWxkKTtcbiAgICAgIH0sIG5leHRDaGlsZHJlbik7XG5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBpc24ndCBsZWF2aW5nIChvciwgaWYgdGhlcmUgaXMgbm8gbGVhdmUgYW5pbWF0aW9uKSxcbiAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRkIGl0IGludG8gdGhlIHN0YXRlIGNoaWxkcmVuLlxuICAgICAgaWYgKCFpc0xlYXZpbmcgfHwgIV90aGlzMi5wcm9wcy5sZWF2ZUFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgICB2YXIgbmV4dENoaWxkID0gX2V4dGVuZHMoe30sIGNoaWxkLCB7IGxlYXZpbmc6IHRydWUgfSk7XG4gICAgICB2YXIgbmV4dENoaWxkSW5kZXggPSBpbmRleCArIG51bU9mQ2hpbGRyZW5MZWF2aW5nO1xuXG4gICAgICB1cGRhdGVkQ2hpbGRyZW4uc3BsaWNlKG5leHRDaGlsZEluZGV4LCAwLCBuZXh0Q2hpbGQpO1xuICAgICAgbnVtT2ZDaGlsZHJlbkxlYXZpbmcgKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkQ2hpbGRyZW47XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnByZXBGb3JBbmltYXRpb24gPSBmdW5jdGlvbiBwcmVwRm9yQW5pbWF0aW9uKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gT3VyIGFuaW1hdGlvbiBwcmVwIGNvbnNpc3RzIG9mOlxuICAgIC8vIC0gcmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIGxlYXZpbmcgZnJvbSB0aGUgRE9NIGZsb3csIHNvIHRoYXQgdGhlIG5ld1xuICAgIC8vICAgbGF5b3V0IGNhbiBiZSBhY2N1cmF0ZWx5IGNhbGN1bGF0ZWQsXG4gICAgLy8gLSB1cGRhdGUgdGhlIHBsYWNlaG9sZGVyIGNvbnRhaW5lciBoZWlnaHQsIGlmIG5lZWRlZCwgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyAgIHRoZSBwYXJlbnQncyBoZWlnaHQgZG9lc24ndCBjb2xsYXBzZS5cblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF9wcm9wcy5sZWF2ZUFuaW1hdGlvbixcbiAgICAgICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQgPSBfcHJvcHMubWFpbnRhaW5Db250YWluZXJIZWlnaHQsXG4gICAgICAgIGdldFBvc2l0aW9uID0gX3Byb3BzLmdldFBvc2l0aW9uO1xuXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIGFsbCBsZWF2aW5nIG5vZGVzIFwiaW52aXNpYmxlXCIgdG8gdGhlIGxheW91dCBjYWxjdWxhdGlvbnNcbiAgICAvLyB0aGF0IHdpbGwgdGFrZSBwbGFjZSBpbiB0aGUgbmV4dCBzdGVwICh0aGlzLnJ1bkFuaW1hdGlvbikuXG5cbiAgICBpZiAobGVhdmVBbmltYXRpb24pIHtcbiAgICAgIHZhciBsZWF2aW5nQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmxlYXZpbmc7XG4gICAgICB9KTtcblxuICAgICAgbGVhdmluZ0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGxlYXZpbmdDaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkobGVhdmluZ0NoaWxkKSk7XG5cbiAgICAgICAgLy8gV2FybiBpZiBjaGlsZCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoIV90aGlzMy5pc0FuaW1hdGlvbkRpc2FibGVkKF90aGlzMy5wcm9wcykgJiYgY2hpbGREYXRhLmRvbU5vZGUgJiYgY2hpbGREYXRhLmRvbU5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZElzRGlzYWJsZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdGFrZSB0aGUgaXRlbXMgb3V0IG9mIHRoZSBcImZsb3dcIiBvZiB0aGUgZG9jdW1lbnQsIHNvIHRoYXRcbiAgICAgICAgLy8gaXRzIHNpYmxpbmdzIGNhbiBtb3ZlIHRvIHRha2UgaXRzIHBsYWNlLlxuICAgICAgICBpZiAoY2hpbGREYXRhLmJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgcmVtb3ZlTm9kZUZyb21ET01GbG93KGNoaWxkRGF0YSwgX3RoaXMzLnByb3BzLnZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYWludGFpbkNvbnRhaW5lckhlaWdodCAmJiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlKSB7XG4gICAgICAgIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyKHtcbiAgICAgICAgICBkb21Ob2RlOiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlLFxuICAgICAgICAgIHBhcmVudERhdGE6IHRoaXMucGFyZW50RGF0YSxcbiAgICAgICAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9yIGFsbCBjaGlsZHJlbiBub3QgaW4gdGhlIG1pZGRsZSBvZiBlbnRlcmluZyBvciBsZWF2aW5nLFxuICAgIC8vIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRyYW5zaXRpb24sIHNvIHRoYXQgdGhlIE5FVyBzaHVmZmxlIHN0YXJ0cyBmcm9tXG4gICAgLy8gdGhlIHJpZ2h0IHBsYWNlLlxuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBfZ2V0Q2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgICBkb21Ob2RlID0gX2dldENoaWxkRGF0YS5kb21Ob2RlO1xuXG4gICAgICAvLyBJZ25vcmUgY2hpbGRyZW4gdGhhdCBkb24ndCByZW5kZXIgRE9NIG5vZGVzIChlZy4gYnkgcmV0dXJuaW5nIG51bGwpXG5cblxuICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGlsZC5lbnRlcmluZyAmJiAhY2hpbGQubGVhdmluZykge1xuICAgICAgICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7XG4gICAgICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cblxuICBGbGlwTW92ZS5wcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBXaGVuIHRoZSBjb21wb25lbnQgaXMgaGFuZGVkIG5ldyBwcm9wcywgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZVxuICAgIC8vIFwicmVzdGluZ1wiIHBvc2l0aW9uIG9mIGFsbCBjdXJyZW50bHktcmVuZGVyZWQgRE9NIG5vZGVzLlxuICAgIC8vIFdlIHN0b3JlIHRoYXQgZGF0YSBpbiB0aGlzLnBhcmVudCBhbmQgdGhpcy5jaGlsZHJlbixcbiAgICAvLyBzbyBpdCBjYW4gYmUgdXNlZCBsYXRlciB0byB3b3JrIG91dCB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMudXBkYXRlQm91bmRpbmdCb3hDYWNoZXMoKTtcblxuICAgIC8vIENvbnZlcnQgb3BhcXVlIGNoaWxkcmVuIG9iamVjdCB0byBhcnJheS5cbiAgICB2YXIgbmV4dENoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAvLyBOZXh0LCB3ZSBuZWVkIHRvIHVwZGF0ZSBvdXIgc3RhdGUsIHNvIHRoYXQgaXQgY29udGFpbnMgb3VyIG5ldyBzZXQgb2ZcbiAgICAvLyBjaGlsZHJlbi4gSWYgYW5pbWF0aW9uIGlzIGRpc2FibGVkIG9yIHVuc3VwcG9ydGVkLCB0aGlzIGlzIGVhc3k7XG4gICAgLy8gd2UganVzdCBjb3B5IG91ciBwcm9wcyBpbnRvIHN0YXRlLlxuICAgIC8vIEFzc3VtaW5nIHRoYXQgd2UgY2FuIGFuaW1hdGUsIHRob3VnaCwgd2UgaGF2ZSB0byBkbyBzb21lIHdvcmsuXG4gICAgLy8gRXNzZW50aWFsbHksIHdlIHdhbnQgdG8ga2VlcCBqdXN0LWRlbGV0ZWQgbm9kZXMgaW4gdGhlIERPTSBmb3IgYSBiaXRcbiAgICAvLyBsb25nZXIsIHNvIHRoYXQgd2UgY2FuIGFuaW1hdGUgdGhlbSBhd2F5LlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46IHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZChuZXh0UHJvcHMpID8gbmV4dENoaWxkcmVuLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHsgZWxlbWVudDogZWxlbWVudCB9KTtcbiAgICAgIH0pIDogdGhpcy5jYWxjdWxhdGVOZXh0U2V0T2ZDaGlsZHJlbihuZXh0Q2hpbGRyZW4pXG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIGFuaW1hdGVDaGlsZChjaGlsZCwgaW5kZXgsIGNoaWxkSW5pdGlhbFN0eWxlcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIF9nZXRDaGlsZERhdGEyID0gdGhpcy5nZXRDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSksXG4gICAgICAgIGRvbU5vZGUgPSBfZ2V0Q2hpbGREYXRhMi5kb21Ob2RlO1xuXG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHJlbGV2YW50IHN0eWxlIGZvciB0aGlzIERPTSBub2RlXG4gICAgLy8gVGhpcyBpcyB0aGUgb2Zmc2V0IGZyb20gaXRzIGFjdHVhbCBET00gcG9zaXRpb24uXG4gICAgLy8gZWcuIGlmIGFuIGl0ZW0gaGFzIGJlZW4gcmUtcmVuZGVyZWQgMjBweCBsb3dlciwgd2Ugd2FudCB0byBhcHBseSBhXG4gICAgLy8gc3R5bGUgb2YgJ3RyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KScsIHNvIHRoYXQgaXQgYXBwZWFycyB0byBiZSB3aGVyZVxuICAgIC8vIGl0IHN0YXJ0ZWQuXG4gICAgLy8gSW4gRkxJUCB0ZXJtaW5vbG9neSwgdGhpcyBpcyB0aGUgJ0ludmVydCcgc3RhZ2UuXG4gICAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoe1xuICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgIHN0eWxlczogY2hpbGRJbml0aWFsU3R5bGVzXG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCBieSBpbnZva2luZyB0aGUgb25TdGFydCBjYWxsYmFjayBmb3IgdGhpcyBjaGlsZC5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN0YXJ0KSB0aGlzLnByb3BzLm9uU3RhcnQoY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgLy8gTmV4dCwgYW5pbWF0ZSB0aGUgaXRlbSBmcm9tIGl0J3MgYXJ0aWZpY2lhbGx5LW9mZnNldCBwb3NpdGlvbiB0byBpdHNcbiAgICAvLyBuZXcsIG5hdHVyYWwgcG9zaXRpb24uXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5PVEUsIFJFOiB0aGUgZG91YmxlLXJlcXVlc3RBbmltYXRpb25GcmFtZTpcbiAgICAgICAgLy8gU2FkbHksIHRoaXMgaXMgdGhlIG1vc3QgYnJvd3Nlci1jb21wYXRpYmxlIHdheSB0byBkbyB0aGlzIEkndmUgZm91bmQuXG4gICAgICAgIC8vIEVzc2VudGlhbGx5IHdlIG5lZWQgdG8gc2V0IHRoZSBpbml0aWFsIHN0eWxlcyBvdXRzaWRlIG9mIGFueSByZXF1ZXN0XG4gICAgICAgIC8vIGNhbGxiYWNrcyB0byBhdm9pZCBiYXRjaGluZyB0aGVtLiBUaGVuLCBhIGZyYW1lIG5lZWRzIHRvIHBhc3Mgd2l0aFxuICAgICAgICAvLyB0aGUgc3R5bGVzIGFib3ZlIHJlbmRlcmVkLiBUaGVuLCBvbiB0aGUgc2Vjb25kIGZyYW1lLCB3ZSBjYW4gYXBwbHlcbiAgICAgICAgLy8gb3VyIGZpbmFsIHN0eWxlcyB0byBwZXJmb3JtIHRoZSBhbmltYXRpb24uXG5cbiAgICAgICAgLy8gT3VyIGZpcnN0IG9yZGVyIG9mIGJ1c2luZXNzIGlzIHRvIFwidW5kb1wiIHRoZSBzdHlsZXMgYXBwbGllZCBpbiB0aGVcbiAgICAgICAgLy8gcHJldmlvdXMgZnJhbWVzLCB3aGlsZSBhbHNvIGFkZGluZyBhIGB0cmFuc2l0aW9uYCBwcm9wZXJ0eS5cbiAgICAgICAgLy8gVGhpcyB3YXksIHRoZSBpdGVtIHdpbGwgc21vb3RobHkgdHJhbnNpdGlvbiBmcm9tIGl0cyBvbGQgcG9zaXRpb25cbiAgICAgICAgLy8gdG8gaXRzIG5ldyBwb3NpdGlvbi5cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvcmVxdWlyZS12YXJpYWJsZS10eXBlXG4gICAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY3JlYXRlVHJhbnNpdGlvblN0cmluZyhpbmRleCwgX3RoaXM0LnByb3BzKSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICAgIG9wYWNpdHk6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNoaWxkLmFwcGVhcmluZyAmJiBfdGhpczQucHJvcHMuYXBwZWFyQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmFwcGVhckFuaW1hdGlvbi50byk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZW50ZXJpbmcgJiYgX3RoaXM0LnByb3BzLmVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmVudGVyQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5sZWF2aW5nICYmIF90aGlzNC5wcm9wcy5sZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICAgIHN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIF90aGlzNC5wcm9wcy5sZWF2ZUFuaW1hdGlvbi50byk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBGTElQIHRlcm1pbm9sb2d5LCB0aGlzIGlzIHRoZSAnUGxheScgc3RhZ2UuXG4gICAgICAgIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyKGNoaWxkKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24gYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyKGNoaWxkKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgX2dldENoaWxkRGF0YTMgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgZG9tTm9kZSA9IF9nZXRDaGlsZERhdGEzLmRvbU5vZGU7XG5cbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgb25GaW5pc2ggY2FsbGJhY2sgbmVlZHMgdG8gYmUgYm91bmQgdG8gdGhlIHRyYW5zaXRpb25FbmQgZXZlbnQuXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHVuYmluZCBpdCB3aGVuIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgc28gdGhpcyB1Z2x5XG4gICAgLy8gaW5saW5lIGZ1bmN0aW9uIGlzIHJlcXVpcmVkICh3ZSBuZWVkIGl0IGhlcmUgc28gaXQgY2xvc2VzIG92ZXJcbiAgICAvLyBkZXBlbmRlbnQgdmFyaWFibGVzIGBjaGlsZGAgYW5kIGBkb21Ob2RlYClcbiAgICB2YXIgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kSGFuZGxlcihldikge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgaGFuZGxlciBpcyBmaXJlZCBub3Qgb24gb3VyIHByaW1hcnkgdHJhbnNpdGlvbixcbiAgICAgIC8vIGJ1dCBvbiBhIG5lc3RlZCB0cmFuc2l0aW9uIChlZy4gYSBob3ZlciBlZmZlY3QpLiBJZ25vcmUgdGhlc2UgY2FzZXMuXG4gICAgICBpZiAoZXYudGFyZ2V0ICE9PSBkb21Ob2RlKSByZXR1cm47XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgJ3RyYW5zaXRpb24nIGlubGluZSBzdHlsZSB3ZSBhZGRlZC4gVGhpcyBpcyBjbGVhbnVwLlxuICAgICAgZG9tTm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cbiAgICAgIC8vIFRyaWdnZXIgYW55IGFwcGxpY2FibGUgb25GaW5pc2gvb25GaW5pc2hBbGwgaG9va3NcbiAgICAgIF90aGlzNS50cmlnZ2VyRmluaXNoSG9va3MoY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgICBkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuXG4gICAgICBpZiAoY2hpbGQubGVhdmluZykge1xuICAgICAgICBfdGhpczUucmVtb3ZlQ2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS50cmlnZ2VyRmluaXNoSG9va3MgPSBmdW5jdGlvbiB0cmlnZ2VyRmluaXNoSG9va3MoY2hpbGQsIGRvbU5vZGUpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRmluaXNoKSB0aGlzLnByb3BzLm9uRmluaXNoKGNoaWxkLCBkb21Ob2RlKTtcblxuICAgIC8vIFJlZHVjZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHdlIG5lZWQgdG8gYW5pbWF0ZSBieSAxLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIHRlbGwgd2hlbiBhbGwgY2hpbGRyZW4gaGF2ZSBmaW5pc2hlZC5cbiAgICB0aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgLT0gMTtcblxuICAgIGlmICh0aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgPT09IDApIHtcbiAgICAgIC8vIFJlbW92ZSBhbnkgaXRlbXMgZnJvbSB0aGUgRE9NIHRoYXQgaGF2ZSBsZWZ0LCBhbmQgcmVzZXQgYGVudGVyaW5nYC5cbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGxlYXZpbmcgPSBfcmVmMi5sZWF2aW5nO1xuICAgICAgICByZXR1cm4gIWxlYXZpbmc7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpdGVtLCB7XG4gICAgICAgICAgLy8gZml4IGZvciBGbG93XG4gICAgICAgICAgZWxlbWVudDogaXRlbS5lbGVtZW50LFxuICAgICAgICAgIGFwcGVhcmluZzogZmFsc2UsXG4gICAgICAgICAgZW50ZXJpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogbmV4dENoaWxkcmVuIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczYucHJvcHMub25GaW5pc2hBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczYuY2FsbENoaWxkcmVuSG9vayhfdGhpczYucHJvcHMub25GaW5pc2hBbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgb3VyIHZhcmlhYmxlcyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgIF90aGlzNi5jaGlsZHJlblRvQW5pbWF0ZSA9IFtdO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciB3YXMgaG9sZGluZyB0aGUgY29udGFpbmVyIG9wZW4gd2hpbGUgZWxlbWVudHMgd2VyZVxuICAgICAgLy8gbGVhdmluZywgd2Ugd2UgY2FuIG5vdyBzZXQgaXRzIGhlaWdodCB0byB6ZXJvLlxuICAgICAgaWYgKHRoaXMuaGVpZ2h0UGxhY2Vob2xkZXJEYXRhLmRvbU5vZGUpIHtcbiAgICAgICAgdGhpcy5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jYWxsQ2hpbGRyZW5Ib29rID0gZnVuY3Rpb24gY2FsbENoaWxkcmVuSG9vayhob29rKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgZG9tTm9kZXMgPSBbXTtcblxuICAgIHRoaXMuY2hpbGRyZW5Ub0FuaW1hdGUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRLZXkpIHtcbiAgICAgIC8vIElmIHRoaXMgd2FzIGFuIGV4aXQgYW5pbWF0aW9uLCB0aGUgY2hpbGQgbWF5IG5vIGxvbmdlciBleGlzdC5cbiAgICAgIC8vIElmIHNvLCBza2lwIGl0LlxuICAgICAgdmFyIGNoaWxkID0gX3RoaXM3LmZpbmRDaGlsZEJ5S2V5KGNoaWxkS2V5KTtcblxuICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICBpZiAoX3RoaXM3Lmhhc0NoaWxkRGF0YShjaGlsZEtleSkpIHtcbiAgICAgICAgZG9tTm9kZXMucHVzaChfdGhpczcuZ2V0Q2hpbGREYXRhKGNoaWxkS2V5KS5kb21Ob2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGhvb2soZWxlbWVudHMsIGRvbU5vZGVzKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUudXBkYXRlQm91bmRpbmdCb3hDYWNoZXMgPSBmdW5jdGlvbiB1cGRhdGVCb3VuZGluZ0JveENhY2hlcygpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIC8vIFRoaXMgaXMgdGhlIE9OTFkgcGxhY2UgdGhhdCBwYXJlbnREYXRhIGFuZCBjaGlsZHJlbkRhdGEnc1xuICAgIC8vIGJvdW5kaW5nIGJveGVzIGFyZSB1cGRhdGVkLiBUaGV5IHdpbGwgYmUgY2FsY3VsYXRlZCBhdCBvdGhlciB0aW1lc1xuICAgIC8vIHRvIGJlIGNvbXBhcmVkIHRvIHRoaXMgdmFsdWUsIGJ1dCBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSBjYWNoZSBpc1xuICAgIC8vIHVwZGF0ZWQgb25jZSBwZXIgdXBkYXRlLlxuICAgIHZhciBwYXJlbnREb21Ob2RlID0gdGhpcy5wYXJlbnREYXRhLmRvbU5vZGU7XG5cbiAgICBpZiAoIXBhcmVudERvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudERhdGEuYm91bmRpbmdCb3ggPSB0aGlzLnByb3BzLmdldFBvc2l0aW9uKHBhcmVudERvbU5vZGUpO1xuXG4gICAgLy8gU3BsaXR0aW5nIERPTSByZWFkcyBhbmQgd3JpdGVzIHRvIGJlIHBlZm9ybWVkIGluIGJhdGNoZXNcbiAgICB2YXIgY2hpbGRyZW5Cb3VuZGluZ0JveGVzID0gW107XG5cbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRLZXkgPSBnZXRLZXkoY2hpbGQpO1xuXG4gICAgICAvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgY2hpbGQgZG9lcyBub3QgaGF2ZSBhIGBrZXlgIHByb3BlcnR5O1xuICAgICAgLy8gSWdub3JlIHRoZXNlIGNoaWxkcmVuLCB0aGV5IGRvbid0IG5lZWQgdG8gYmUgbW92ZWQuXG4gICAgICBpZiAoIWNoaWxkS2V5KSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEluIHZlcnkgcmFyZSBjaXJjdW1zdGFuY2VzLCBmb3IgcmVhc29ucyB1bmtub3duLCB0aGUgcmVmIGlzIG5ldmVyXG4gICAgICAvLyBwb3B1bGF0ZWQgZm9yIGNlcnRhaW4gY2hpbGRyZW4uIEluIHRoaXMgY2FzZSwgYXZvaWQgZG9pbmcgdGhpcyB1cGRhdGUuXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Nod2NvbWVhdS9yZWFjdC1mbGlwLW1vdmUvcHVsbC85MVxuICAgICAgaWYgKCFfdGhpczguaGFzQ2hpbGREYXRhKGNoaWxkS2V5KSkge1xuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXM4LmdldENoaWxkRGF0YShjaGlsZEtleSk7XG5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBlbGVtZW50IHJldHVybnMgbnVsbCwgd2UgbmVlZCB0byBhdm9pZCB0cnlpbmcgdG9cbiAgICAgIC8vIGFjY291bnQgZm9yIGl0XG4gICAgICBpZiAoIWNoaWxkRGF0YS5kb21Ob2RlIHx8ICFjaGlsZCkge1xuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChnZXRSZWxhdGl2ZUJvdW5kaW5nQm94KHtcbiAgICAgICAgY2hpbGREb21Ob2RlOiBjaGlsZERhdGEuZG9tTm9kZSxcbiAgICAgICAgcGFyZW50RG9tTm9kZTogcGFyZW50RG9tTm9kZSxcbiAgICAgICAgZ2V0UG9zaXRpb246IF90aGlzOC5wcm9wcy5nZXRQb3NpdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZEtleSA9IGdldEtleShjaGlsZCk7XG5cbiAgICAgIHZhciBjaGlsZEJvdW5kaW5nQm94ID0gY2hpbGRyZW5Cb3VuZGluZ0JveGVzW2luZGV4XTtcblxuICAgICAgaWYgKCFjaGlsZEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzOC5zZXRDaGlsZERhdGEoY2hpbGRLZXksIHtcbiAgICAgICAgYm91bmRpbmdCb3g6IGNoaWxkQm91bmRpbmdCb3hcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jb21wdXRlSW5pdGlhbFN0eWxlcyA9IGZ1bmN0aW9uIGNvbXB1dGVJbml0aWFsU3R5bGVzKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFwcGVhcmluZykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXBwZWFyQW5pbWF0aW9uID8gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24uZnJvbSA6IHt9O1xuICAgIH0gZWxzZSBpZiAoY2hpbGQuZW50ZXJpbmcpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5lbnRlckFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGlzIGNoaWxkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIGxlYXZpbmcsIGl0IHN0aWxsIGhhcyBpdHNcbiAgICAgIC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIHN0eWxlcyBhcHBsaWVkLiBXZSBuZWVkIHRvIHVuZG8gdGhvc2UuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgIHRvcDogJycsXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICByaWdodDogJycsXG4gICAgICAgIGJvdHRvbTogJydcbiAgICAgIH0sIHRoaXMucHJvcHMuZW50ZXJBbmltYXRpb24uZnJvbSk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC5sZWF2aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5sZWF2ZUFuaW1hdGlvbiA/IHRoaXMucHJvcHMubGVhdmVBbmltYXRpb24uZnJvbSA6IHt9O1xuICAgIH1cblxuICAgIHZhciBjaGlsZERhdGEgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKTtcbiAgICB2YXIgY2hpbGREb21Ob2RlID0gY2hpbGREYXRhLmRvbU5vZGU7XG4gICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZERhdGEuYm91bmRpbmdCb3g7XG4gICAgdmFyIHBhcmVudEJvdW5kaW5nQm94ID0gdGhpcy5wYXJlbnREYXRhLmJvdW5kaW5nQm94O1xuXG4gICAgaWYgKCFjaGlsZERvbU5vZGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dldFBvc2l0aW9uRGVsdGEyID0gZ2V0UG9zaXRpb25EZWx0YSh7XG4gICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRG9tTm9kZSxcbiAgICAgIGNoaWxkQm91bmRpbmdCb3g6IGNoaWxkQm91bmRpbmdCb3gsXG4gICAgICBwYXJlbnRCb3VuZGluZ0JveDogcGFyZW50Qm91bmRpbmdCb3gsXG4gICAgICBnZXRQb3NpdGlvbjogdGhpcy5wcm9wcy5nZXRQb3NpdGlvblxuICAgIH0pLFxuICAgICAgICBkWCA9IF9nZXRQb3NpdGlvbkRlbHRhMlswXSxcbiAgICAgICAgZFkgPSBfZ2V0UG9zaXRpb25EZWx0YTJbMV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKCcgKyBkWCArICdweCwgJyArIGRZICsgJ3B4KSdcbiAgICB9O1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBGbGlwTW92ZS5wcm90b3R5cGUuaXNBbmltYXRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzQW5pbWF0aW9uRGlzYWJsZWQocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIGV4cGxpY2l0bHkgcGFzc2VkIGEgYGRpc2FibGVBbGxBbmltYXRpb25zYCBmbGFnLFxuICAgIC8vIHdlIGNhbiBza2lwIHRoaXMgd2hvbGUgcHJvY2Vzcy4gU2ltaWxhcmx5LCBpZiBhbGwgb2YgdGhlIG51bWJlcnMgaGF2ZVxuICAgIC8vIGJlZW4gc2V0IHRvIDAsIHRoZXJlIGlzIG5vIHBvaW50IGluIHRyeWluZyB0byBhbmltYXRlOyBkb2luZyBzbyB3b3VsZFxuICAgIC8vIG9ubHkgY2F1c2UgYSBmbGlja2VyIChhbmQgdGhlIGludGVudCBpcyBwcm9iYWJseSB0byBkaXNhYmxlIGFuaW1hdGlvbnMpXG4gICAgLy8gV2UgY2FuIGFsc28gc2tpcCB0aGlzIHJpZ2FtYXJvbGUgaWYgdGhlcmUncyBubyBicm93c2VyIHN1cHBvcnQgZm9yIGl0LlxuICAgIHJldHVybiBub0Jyb3dzZXJTdXBwb3J0IHx8IHByb3BzLmRpc2FibGVBbGxBbmltYXRpb25zIHx8IHByb3BzLmR1cmF0aW9uID09PSAwICYmIHByb3BzLmRlbGF5ID09PSAwICYmIHByb3BzLnN0YWdnZXJEdXJhdGlvbkJ5ID09PSAwICYmIHByb3BzLnN0YWdnZXJEZWxheUJ5ID09PSAwO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5maW5kQ2hpbGRCeUtleSA9IGZ1bmN0aW9uIGZpbmRDaGlsZEJ5S2V5KGtleSkge1xuICAgIHJldHVybiBmaW5kKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGdldEtleShjaGlsZCkgPT09IGtleTtcbiAgICB9LCB0aGlzLnN0YXRlLmNoaWxkcmVuKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuaGFzQ2hpbGREYXRhID0gZnVuY3Rpb24gaGFzQ2hpbGREYXRhKGtleSkge1xuICAgIC8vIE9iamVjdCBoYXMgc29tZSBidWlsdC1pbiBwcm9wZXJ0aWVzIG9uIGl0cyBwcm90b3R5cGUsIHN1Y2ggYXMgdG9TdHJpbmcuICBoYXNPd25Qcm9wZXJ0eSBtYWtlc1xuICAgIC8vIHN1cmUgdGhhdCBrZXkgaXMgcHJlc2VudCBvbiBjaGlsZHJlbkRhdGEgaXRzZWxmLCBub3Qgb24gaXRzIHByb3RvdHlwZS5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2hpbGRyZW5EYXRhLCBrZXkpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5nZXRDaGlsZERhdGEgPSBmdW5jdGlvbiBnZXRDaGlsZERhdGEoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQ2hpbGREYXRhKGtleSkgPyB0aGlzLmNoaWxkcmVuRGF0YVtrZXldIDoge307XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnNldENoaWxkRGF0YSA9IGZ1bmN0aW9uIHNldENoaWxkRGF0YShrZXksIGRhdGEpIHtcbiAgICB0aGlzLmNoaWxkcmVuRGF0YVtrZXldID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0Q2hpbGREYXRhKGtleSksIGRhdGEpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5yZW1vdmVDaGlsZERhdGEgPSBmdW5jdGlvbiByZW1vdmVDaGlsZERhdGEoa2V5KSB7XG4gICAgZGVsZXRlIHRoaXMuY2hpbGRyZW5EYXRhW2tleV07XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBjaGlsZHJlbjogcHJldlN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQuZWxlbWVudC5rZXkgIT09IGtleTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jcmVhdGVIZWlnaHRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIGNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy5wcm9wcy50eXBlTmFtZTtcblxuICAgIC8vIElmIHJlcXVlc3RlZCwgY3JlYXRlIGFuIGludmlzaWJsZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAgLy8gSXRzIGhlaWdodCB3aWxsIGJlIG1vZGlmaWVkIHRvIHByZXZlbnQgdGhlIGNvbnRhaW5lciBmcm9tIGNvbGxhcHNpbmdcbiAgICAvLyBwcmVtYXR1cmVseS5cblxuICAgIHZhciBpc0NvbnRhaW5lckFMaXN0ID0gdHlwZU5hbWUgPT09ICd1bCcgfHwgdHlwZU5hbWUgPT09ICdvbCc7XG4gICAgdmFyIHBsYWNlaG9sZGVyVHlwZSA9IGlzQ29udGFpbmVyQUxpc3QgPyAnbGknIDogJ2Rpdic7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChwbGFjZWhvbGRlclR5cGUsIHtcbiAgICAgIGtleTogJ2hlaWdodC1wbGFjZWhvbGRlcicsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihkb21Ob2RlKSB7XG4gICAgICAgIF90aGlzOS5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZSA9IGRvbU5vZGU7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicsIGhlaWdodDogMCB9XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNoaWxkcmVuV2l0aFJlZnMgPSBmdW5jdGlvbiBjaGlsZHJlbldpdGhSZWZzKCkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgdGhlIHByb3ZpZGVkIGNoaWxkcmVuLCBjYXB0dXJpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgLy8gdW5kZXJseWluZyBET00gbm9kZS4gRmxpcCBNb3ZlIG5lZWRzIHRvIHVzZSB0aGUgUmVhY3QgZXNjYXBlIGhhdGNoZXMgdG9cbiAgICAvLyBiZSBhYmxlIHRvIGRvIGl0cyBjYWxjdWxhdGlvbnMuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZC5lbGVtZW50LCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBTdGF0ZWxlc3MgRnVuY3Rpb25hbCBDb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEZsaXBNb3ZlLFxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhleSBkb24ndCBoYXZlIGluc3RhbmNlcy5cbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZG9tTm9kZSA9IGdldE5hdGl2ZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgX3RoaXMxMC5zZXRDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSwgeyBkb21Ob2RlOiBkb21Ob2RlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdHlwZU5hbWUgPSBfcHJvcHMyLnR5cGVOYW1lLFxuICAgICAgICBkZWxlZ2F0ZWQgPSBfcHJvcHMyLmRlbGVnYXRlZCxcbiAgICAgICAgbGVhdmVBbmltYXRpb24gPSBfcHJvcHMyLmxlYXZlQW5pbWF0aW9uLFxuICAgICAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodCA9IF9wcm9wczIubWFpbnRhaW5Db250YWluZXJIZWlnaHQ7XG5cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5XaXRoUmVmcygpO1xuICAgIGlmIChsZWF2ZUFuaW1hdGlvbiAmJiBtYWludGFpbkNvbnRhaW5lckhlaWdodCkge1xuICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICghdHlwZU5hbWUpIHJldHVybiBjaGlsZHJlbjtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWxlZ2F0ZWQsIHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgX3RoaXMxMS5wYXJlbnREYXRhLmRvbU5vZGUgPSBub2RlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodHlwZU5hbWUsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gRmxpcE1vdmU7XG59KENvbXBvbmVudCk7XG5cbnZhciBlbmhhbmNlZEZsaXBNb3ZlID0gLyogI19fUFVSRV9fICovcHJvcENvbnZlcnRlcihGbGlwTW92ZSQxKTtcblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmVcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2VkRmxpcE1vdmU7XG4iLCJpbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvQ29udGVjdFNlY3Rpb24nXG5pbXBvcnQgRXhwZXJpZW5jZVNlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvRXhwZXJpZW5jZVNlY3Rpb24nXG5pbXBvcnQgRnJvbnRTZWN0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvSG9tZVNlY3Rpb25zL0Zyb250U2VjdGlvbidcbmltcG9ydCBJbnRyb1NlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvSW50cm9TZWN0aW9uJ1xuaW1wb3J0IFBvcnRmb2xpb1NlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbidcbmltcG9ydCBTa2lsbFNlY3Rpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvU2tpbGxTZWN0aW9uJ1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5WaWthcyBVa2FuaSBQb3J0Zm9saW8gU2l0ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+ICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJzaXRlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaG9sZGVyIGNlbnRlci1yZWxhdGl2ZSBjb250ZW50LTEzMDAgcG9zdC05IHBhZ2UgdHlwZS1wYWdlIHN0YXR1cy1wdWJsaXNoIGhlbnRyeVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLWVsZW1lbnRvci10eXBlPVwid3AtcGFnZVwiIGRhdGEtZWxlbWVudG9yLWlkPVwiOVwiIGNsYXNzTmFtZT1cImVsZW1lbnRvciBlbGVtZW50b3ItOVwiXG4gICAgICAgICAgICAgIGRhdGEtZWxlbWVudG9yLXNldHRpbmdzPVwiW11cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIj5cblxuICAgICAgICAgICAgICAgICAgPEZyb250U2VjdGlvbiAvPlxuXG4gICAgICAgICAgICAgICAgICA8SW50cm9TZWN0aW9uIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9TZWN0aW9uIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlU2VjdGlvbiAvPlxuXG4gICAgICAgICAgICAgICAgICA8U2tpbGxTZWN0aW9uIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxDb250YWN0U2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiPiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21tZW50c1wiIGNsYXNzTmFtZT1cImNvbW1lbnRzLWhvbGRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+IDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyXCI+IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=