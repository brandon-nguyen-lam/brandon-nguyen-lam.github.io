"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , children  } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            display: \"flex\",\n            p: \"2\",\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    href: \"/\",\n                    scroll: false,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                        align: \"center\",\n                        mr: 5,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                            as: \"h1\",\n                            size: \"lg\",\n                            letterSpacing: \"tighter\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                        src: \"https://cdn.frankerfacez.com/emoticon/604743/4\",\n                                        width: 10,\n                                        height: 10\n                                    }, void 0, false, {\n                                        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\"),\n                                        fontFamily: \"M PLUS Rounded 1c\",\n                                        fontWeight: \"Bold\",\n                                        ml: 3,\n                                        px: 1,\n                                        children: \"Brandon Lam\"\n                                    }, void 0, false, {\n                                        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                    direcion: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    justifyContent: \"flex-end\",\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/projects\",\n                            path: path,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/blog\",\n                            path: path,\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/contact\",\n                            path: path,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton,\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                    variant: \"outline\",\n                                    \"aria-label\": \"Options\"\n                                }, void 0, false, {\n                                    fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/projects\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                children: \"Projects\"\n                                            }, void 0, false, {\n                                                fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/blog\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                children: \"Blog\"\n                                            }, void 0, false, {\n                                                fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/contact\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                                children: \"Contact\"\n                                            }, void 0, false, {\n                                                fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/Developer/personal-site/components/navbar.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/root/Developer/personal-site/components/navbar.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/root/Developer/personal-site/components/navbar.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQ3pCLDRFQUFDdkQsc0RBQVFBOzBEQUFDOzs7Ozs7Ozs7OztzREFFWiw4REFBQ1Isa0RBQVFBOzRDQUFDbUIsTUFBSzs0Q0FBWTRDLFFBQVE7c0RBQ2pDLDRFQUFDdkQsc0RBQVFBOzBEQUFDOzs7Ozs7Ozs7OztzREFFWiw4REFBQ1Isa0RBQVFBOzRDQUFDbUIsTUFBSzs0Q0FBUTRDLFFBQVE7c0RBQzdCLDRFQUFDdkQsc0RBQVFBOzBEQUFDOzs7Ozs7Ozs7OztzREFFWiw4REFBQ1Isa0RBQVFBOzRDQUFDbUIsTUFBSzs0Q0FBVzRDLFFBQVE7c0RBQ2hDLDRFQUFDdkQsc0RBQVFBOzBEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUxQjtJQW5GTW9COztRQVFFaEIsK0RBQWlCQTtRQWtCRUEsK0RBQWlCQTs7O01BMUJ0Q2dCO0FBcUZOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgQm94LFxyXG4gIExpbmssXHJcbiAgU3RhY2ssXHJcbiAgSGVhZGluZyxcclxuICBGbGV4LFxyXG4gIE1lbnUsXHJcbiAgTWVudUl0ZW0sXHJcbiAgTWVudUxpc3QsXHJcbiAgTWVudUJ1dHRvbixcclxuICBJY29uQnV0dG9uLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIEltYWdlLFxyXG4gIFRleHQsXHJcbiAgSFN0YWNrXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IGNoZWNrVGFyZ2V0Rm9yTmV3VmFsdWVzIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcclxuICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICA8TGluayBwPXsyfVxyXG4gICAgICAgICAgICBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMyc6IGluYWN0aXZlQ29sb3J9PlxyXG5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBwYXRoIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICBhcz1cIm5hdlwiXHJcbiAgICB3PVwiMTAwJVwiXHJcbiAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cclxuICAgIHN0eWxlPXt7IGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScgfX1cclxuICAgIHpJbmRleD17MX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIHA9XCIyXCJcclxuICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCJcclxuICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc2Nyb2xsPXtmYWxzZX0+XHJcbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCJ0aWdodGVyXCJ9PlxyXG4gICAgICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9eydodHRwczovL2Nkbi5mcmFua2VyZmFjZXouY29tL2Vtb3RpY29uLzYwNDc0My80J30gd2lkdGg9ezEwfSBoZWlnaHQ9ezEwfSAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnd2hpdGVBbHBoYS45MDAnKX1cclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnTSBQTFVTIFJvdW5kZWQgMWMnfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJCb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICBtbD17M31cclxuICAgICAgICAgICAgICAgICAgICBweD17MX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCcmFuZG9uIExhbVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPEhTdGFja1xyXG4gICAgICAgIGRpcmVjaW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgICAgd2lkdGg9e3sgYmFzZTogXCJmdWxsXCIsIG1kOiBcImF1dG9cIiB9fVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGZsZXhHcm93PXsxfVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcHJvamVjdHNcIiBwYXRoPXtwYXRofT5Qcm9qZWN0czwvTGlua0l0ZW0+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9ibG9nXCIgcGF0aD17cGF0aH0+QmxvZzwvTGlua0l0ZW0+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9jb250YWN0XCIgcGF0aD17cGF0aH0+Q29udGFjdDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcblxyXG4gICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249e1wicmlnaHRcIn0+XHJcbiAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7YmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnVCdXR0b25cclxuICAgICAgICAgICAgICAgIGFzPXtJY29uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtcIk9wdGlvbnNcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbT5Ib21lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Byb2plY3RzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0+UHJvamVjdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYmxvZ1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkJsb2c8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtPkNvbnRhY3Q8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJJbWFnZSIsIlRleHQiLCJIU3RhY2siLCJIYW1idXJnZXJJY29uIiwiY2hlY2tUYXJnZXRGb3JOZXdWYWx1ZXMiLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZiYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsInNjcm9sbCIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibWwiLCJweCIsImRpcmVjaW9uIiwiYmFzZSIsIm1kIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCIsImZsZXgiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});