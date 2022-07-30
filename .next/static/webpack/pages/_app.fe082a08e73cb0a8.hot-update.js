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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle */ \"./components/toggle.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-menu */ \"./components/dropdown-menu.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, id = param.id, children = param.children;\n    var active = path === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: href,\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n            p: 2,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                variant: \"custom\",\n                children: [\n                    children,\n                    active === selectedLink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                        className: \"underline\",\n                        layoutId: \"underline\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                        lineNumber: 30,\n                        columnNumber: 49\n                    }, _this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({\n        as: \"nav\",\n        w: \"100%\",\n        zIndex: 1,\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue)(_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].colors.light, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].colors.dark)\n    }, props), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            display: \"flex\",\n            p: \"2%\",\n            maxW: \"container.xl\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                            as: \"h1\",\n                            size: \"lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Spacer, {}, void 0, false, {\n                    fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    justifyContent: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/about/#start\",\n                            path: path,\n                            children: \"about\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/projects/#start\",\n                            path: path,\n                            children: \"projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                            lineNumber: 80,\n                            columnNumber: 24\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/nckasman/Desktop/projects/next_website/app/components/navbar.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUMsS0FBSyxFQUFHLE9BQU87OEJBQ2hCLDRFQUFDckMsaURBQUc7d0JBQUNrRCxFQUFFLEVBQUksQ0FBQzt3QkFBRWhCLE9BQU8sRUFBSTs0QkFBQ1EsSUFBSSxFQUFFLGNBQWM7NEJBQUVDLEVBQUUsRUFBRSxNQUFNO3lCQUFDO2tDQUN4RCw0RUFBQ25DLHNEQUFZOzs7O2lDQUFHOzs7Ozs2QkFDYjs7Ozs7eUJBQ0o7Ozs7OztpQkFDRTs7Ozs7YUFDVixDQUNUO0NBQ0o7R0FqREtpQixNQUFNOztRQVFFbEIsK0RBQWlCOzs7QUFSekJrQixNQUFBQSxNQUFNO0FBbURaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL3RvZ2dsZVwiXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge1xuICAgIENvbnRhaW5lcixcbiAgICBCb3gsXG4gICAgU3BhY2VyLFxuICAgIEJ1dHRvbixcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiLi9kcm9wZG93bi1tZW51XCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCJcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBpZCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmID0ge2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHAgPSB7Mn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgPSBcImN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmUgPT09IHNlbGVjdGVkTGluayA/ICg8bW90aW9uLmRpdiBjbGFzc05hbWUgPSBcInVuZGVybGluZVwiIGxheW91dElkID0gXCJ1bmRlcmxpbmVcIiAvPikgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgYXMgPSBcIm5hdlwiXG4gICAgICAgIHcgPSBcIjEwMCVcIlxuICAgICAgICB6SW5kZXggPSB7MX1cbiAgICAgICAgYmcgPSB7dXNlQ29sb3JNb2RlVmFsdWUodGhlbWUuY29sb3JzLmxpZ2h0LCB0aGVtZS5jb2xvcnMuZGFyayl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBwID0gXCIyJVwiXG4gICAgICAgICAgICBtYXhXID0gXCJjb250YWluZXIueGxcIlxuICAgICAgICAgICAgd3JhcCA9IFwid3JhcFwiXG4gICAgICAgICAgICBhbGlnbiA9IFwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnkgPSBcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduID0gXCJjZW50ZXJcIiBtciA9IHs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXMgPSBcImgxXCIgc2l6ZSA9IFwibGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxTcGFjZXIgLz5cblxuICAgICAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHt7YmFzZTogJ2NvbHVtbicsIG1kOiAncm93J319XG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IHt7YmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnfX1cbiAgICAgICAgICAgICAgICB3aWR0aCA9IHt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zID0gJ2NlbnRlcidcbiAgICAgICAgICAgICAgICBmbGV4R3JvdyA9ICB7MX1cbiAgICAgICAgICAgICAgICBtdCA9IHt7YmFzZTogNCwgbm1kOiAwfX1cbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudCA9ICdyaWdodCdcbiAgICAgICAgICAgICAgICA+ICAgXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmID0gXCIvYWJvdXQvI3N0YXJ0XCIgcGF0aCA9IHtwYXRofT5hYm91dDwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmID0gXCIvcHJvamVjdHMvI3N0YXJ0XCIgcGF0aCA9IHtwYXRofT5wcm9qZWN0czwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxCb3ggYWxpZ24gPSBcInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWwgPSB7Mn0gZGlzcGxheSA9IHt7YmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMb2dvIiwiVG9nZ2xlIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJTcGFjZXIiLCJCdXR0b24iLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsInVzZUNvbG9yTW9kZVZhbHVlIiwiRHJvcGRvd25NZW51IiwibW90aW9uIiwidXNlU3RhdGUiLCJ0aGVtZSIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJpZCIsImNoaWxkcmVuIiwiYWN0aXZlIiwicGFzc0hyZWYiLCJwIiwidmFyaWFudCIsInNlbGVjdGVkTGluayIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dElkIiwiTmF2YmFyIiwicHJvcHMiLCJhcyIsInciLCJ6SW5kZXgiLCJiZyIsImNvbG9ycyIsImxpZ2h0IiwiZGFyayIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJubWQiLCJqdXN0aWZ5Q29udGVudCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});