"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Thanks",{

/***/ "./pages/Thanks.js":
/*!*************************!*\
  !*** ./pages/Thanks.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-top-loading-bar */ \"./node_modules/react-top-loading-bar/dist/index.modern.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Thanks = function() {\n    var delay = function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    var submitSurvey = function submitSurvey(payload) {\n        console.log(\"tete\");\n        fetch(\"/api/submitSurvey\", {\n            method: \"POST\",\n            body: JSON.stringify(payload)\n        }).then(function() {\n            ref6.current.complete();\n            delay(600).then(function() {\n                return setLoading(false);\n            });\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    _s();\n    var finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState);\n    console.log(\"finals\", finalSu);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), width = ref[0], setWidth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), height = ref1[0], setHeight = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), rem = ref2[0], setRem = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), num = ref3[0], setNum = ref3[1];\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState), 2), finalRes = ref4[0], setFinalRes = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref5[0], setLoading = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        ref6.current.continuousStart();\n        var fiR = localStorage.getItem(\"finalRes\");\n        console.log(\"finalR\", fiR);\n        submitSurvey(JSON.parse(fiR));\n    }, []);\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    delay(3000).then(function() {\n        return setRem(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            color: \"#33A7FF\",\n            ref: ref6\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                rem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"w-full\",\n                    gravity: 0.7,\n                    numberOfPieces: 70,\n                    tweenDuration: 2000\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                    lineNumber: 81,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    whileInView: {\n                        opacity: [\n                            0,\n                            1\n                        ]\n                    },\n                    transition: {\n                        duration: 2\n                    },\n                    id: \"mainHeading\",\n                    className: \"flex w-full min-h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col justify-center text-center items-center max-w-7xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-ubuntu font-semibold text-[4.3rem]\",\n                                children: \"Thanks for finishing the study\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                href: \"/\",\n                                //href={`${props.abouts[0].resume}?dl=`}\n                                className: \"flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.HomeIcon, {\n                                        className: \"h-7 w-7 animate-pulse hover:text-darkBgLight\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"tracking-wider\",\n                                        children: \"Go To Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n            lineNumber: 79,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Thanks, \"1WJYEY4ZWr/wVqsx7lFGiSNP6Gc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Thanks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thanks);\nvar _c;\n$RefreshReg$(_c, \"Thanks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtrREFBQyxZQUFVOzs7Ozs2Q0FBSTs7Ozs7O3FDQUNuQzs7Ozs7OzZCQUNQOzs7Ozt5QkFDSzs7Ozs7O2lCQUNUO3FCQUVQLENBQ0g7QUFDSixDQUFDO0dBcEdLeEMsTUFBTTs7UUFDTUYsa0RBQWM7UUFnQkVOLGtEQUFjOzs7QUFqQjFDUSxLQUFBQSxNQUFNO0FBc0daLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGhhbmtzLmpzPzQzZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyBmaW5hbFN1cnZTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9GaW5hbFN1cnZleVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgc3VibWl0U3VydmV5IGZyb20gXCIuL2FwaS9zdWJtaXRTdXJ2ZXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdG9tLCBzZWxlY3RvciwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCI7XG5cblxuXG5jb25zdCBUaGFua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbmFsU3UgPSB1c2VSZWNvaWxWYWx1ZShmaW5hbFN1cnZTdGF0ZSk7XG5cbiAgXG5cbiAgY29uc29sZS5sb2coXCJmaW5hbHNcIiwgZmluYWxTdSk7XG5cbiBcblxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3JlbSwgc2V0UmVtXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZSgxMDApO1xuXG4gIGNvbnN0IFtmaW5hbFJlcywgc2V0RmluYWxSZXNdID0gdXNlUmVjb2lsU3RhdGUoZmluYWxTdXJ2U3RhdGUpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG4gIH1cblxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgcmVmLmN1cnJlbnQuY29udGludW91c1N0YXJ0KCk7XG4gICAgY29uc3QgZmlSID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaW5hbFJlc1wiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZmluYWxSXCIsIGZpUik7XG5cbiAgICBzdWJtaXRTdXJ2ZXkoSlNPTi5wYXJzZShmaVIpKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdFN1cnZleShwYXlsb2FkKSB7XG4gICAgY29uc29sZS5sb2coXCJ0ZXRlXCIpO1xuICAgIGZldGNoKFwiL2FwaS9zdWJtaXRTdXJ2ZXlcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgZGVsYXkoNjAwKS50aGVuKCgpID0+IChzZXRMb2FkaW5nKGZhbHNlKSkpO1xuICAgICAgICBcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0SGVpZ2h0KHdpbmRvdz8uaW5uZXJXaWR0aCkpO1xuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0V2lkdGgod2luZG93Py5pbm5lckhlaWdodCkpO1xuXG4gIGRlbGF5KDMwMDApLnRoZW4oKCkgPT4gc2V0UmVtKGZhbHNlKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdCYXIgY29sb3I9XCIjMzNBN0ZGXCIgcmVmPXtyZWZ9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyZW0gJiYgKFxuICAgICAgICAgICAgPENvbmZldHRpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgIGdyYXZpdHk9ezAuN31cbiAgICAgICAgICAgICAgbnVtYmVyT2ZQaWVjZXM9ezcwfVxuICAgICAgICAgICAgICB0d2VlbkR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiBbMCwgMV0gfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIgfX1cbiAgICAgICAgICAgIGlkPVwibWFpbkhlYWRpbmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWluLWgtc2NyZWVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCAgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIG1heC13LTd4bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdWJ1bnR1IGZvbnQtc2VtaWJvbGQgdGV4dC1bNC4zcmVtXVwiPlxuICAgICAgICAgICAgICAgIFRoYW5rcyBmb3IgZmluaXNoaW5nIHRoZSBzdHVkeVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIC8vaHJlZj17YCR7cHJvcHMuYWJvdXRzWzBdLnJlc3VtZX0/ZGw9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTIwIGN1cnNvci1wb2ludGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtWzAuMnJlbV0gc3BhY2UteC01IGJnLWRhcmtCZ0xpZ2h0IHB5LTQgZm9udC11YnVudHUgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1ncmF5LTgwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBsZzpweC0xMCBsZzpob3ZlcjpiZy1ncmF5LTQwMCBsZzpob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJoLTcgdy03IGFuaW1hdGUtcHVsc2UgaG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXJcIj5HbyBUbyBIb21lPC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGFua3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb25mZXR0aSIsIm1vdGlvbiIsIkhvbWVJY29uIiwiZmluYWxTdXJ2U3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInN1Ym1pdFN1cnZleSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF0b20iLCJzZWxlY3RvciIsInVzZVJlY29pbFZhbHVlIiwiTG9hZGluZ0JhciIsIlRoYW5rcyIsImRlbGF5IiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZWYiLCJjdXJyZW50IiwiY29tcGxldGUiLCJzZXRMb2FkaW5nIiwiY2F0Y2giLCJlcnIiLCJmaW5hbFN1Iiwid2lkdGgiLCJzZXRXaWR0aCIsImhlaWdodCIsInNldEhlaWdodCIsInJlbSIsInNldFJlbSIsIm51bSIsInNldE51bSIsImZpbmFsUmVzIiwic2V0RmluYWxSZXMiLCJpc0xvYWRpbmciLCJjb250aW51b3VzU3RhcnQiLCJmaVIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJjb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImdyYXZpdHkiLCJudW1iZXJPZlBpZWNlcyIsInR3ZWVuRHVyYXRpb24iLCJ3aGlsZUluVmlldyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpZCIsImEiLCJ3aGlsZVRhcCIsInNjYWxlIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Thanks.js\n"));

/***/ })

});