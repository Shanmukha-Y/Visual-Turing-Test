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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-top-loading-bar */ \"./node_modules/react-top-loading-bar/dist/index.modern.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Thanks = function() {\n    var delay = // const [isLoading, setLoading] = useState(true);\n    function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), width = ref[0], setWidth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), height = ref1[0], setHeight = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), rem = ref2[0], setRem = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState), 2), finalRes = ref3[0], setFinalRes = ref3[1];\n    // const ref = useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fiR = localStorage.getItem(\"finalRes\");\n        console.log(fiR);\n    }, []);\n    // function submitSurvey(payload) {\n    //   console.log(\"tete\");\n    //   fetch(\"/api/submitSurvey\", {\n    //     method: \"POST\",\n    //     body: JSON.stringify(payload),\n    //   })\n    //     .then(() => {\n    //       ref.current.complete();\n    //       delay(600).then(() => setLoading(false));\n    //     })\n    //     .catch((err) => {\n    //       console.log(err);\n    //     });\n    // }\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    delay(3000).then(function() {\n        return setRem(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                rem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"w-full\",\n                    gravity: 0.7,\n                    numberOfPieces: 70,\n                    tweenDuration: 2000\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    whileInView: {\n                        opacity: [\n                            0,\n                            1\n                        ]\n                    },\n                    transition: {\n                        duration: 2\n                    },\n                    id: \"mainHeading\",\n                    className: \"flex w-full min-h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col justify-center text-center items-center max-w-7xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-ubuntu font-semibold text-[4.3rem]\",\n                                children: \"Thanks for finishing the study\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                href: \"/\",\n                                //href={`${props.abouts[0].resume}?dl=`}\n                                className: \"flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.HomeIcon, {\n                                        className: \"h-7 w-7 animate-pulse hover:text-darkBgLight\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"tracking-wider\",\n                                        children: \"Go To Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Thanks, \"2AnGwlD5869k9wwrTTfFzmiEgFM=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Thanks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thanks);\nvar _c;\n$RefreshReg$(_c, \"Thanks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dFEsOERBQUNoQyw0REFBUTt3Q0FBQ2dDLFNBQVMsRUFBQyw4Q0FBOEM7Ozs7OzZDQUFHO2tEQUNyRSw4REFBQ2EsR0FBQzt3Q0FBQ2IsU0FBUyxFQUFDLGdCQUFnQjtrREFBQyxZQUFVOzs7Ozs2Q0FBSTs7Ozs7O3FDQUNuQzs7Ozs7OzZCQUNQOzs7Ozt5QkFDSzs7Ozs7O2lCQUNUO3FCQUNMLENBQ0g7QUFDSixDQUFDO0dBbkZLdEIsTUFBTTs7UUFDTUYsa0RBQWM7UUFRRU4sa0RBQWM7OztBQVQxQ1EsS0FBQUEsTUFBTTtBQXFGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1RoYW5rcy5qcz80M2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgeyBmaW5hbFN1cnZTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9GaW5hbFN1cnZleVwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHN1Ym1pdFN1cnZleSBmcm9tIFwiLi9hcGkvc3VibWl0U3VydmV5XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF0b20sIHNlbGVjdG9yLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiO1xyXG5cclxuY29uc3QgVGhhbmtzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbmFsU3UgPSB1c2VSZWNvaWxWYWx1ZShmaW5hbFN1cnZTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtyZW0sIHNldFJlbV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW2ZpbmFsUmVzLCBzZXRGaW5hbFJlc10gPSB1c2VSZWNvaWxTdGF0ZShmaW5hbFN1cnZTdGF0ZSk7XHJcblxyXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGZpUiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluYWxSZXNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhmaVIpXHJcbiAgICBcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHN1Ym1pdFN1cnZleShwYXlsb2FkKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInRldGVcIik7XHJcbiAgLy8gICBmZXRjaChcIi9hcGkvc3VibWl0U3VydmV5XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKTtcclxuXHJcbiAgLy8gICAgICAgZGVsYXkoNjAwKS50aGVuKCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGRlbGF5KDEwMCkudGhlbigoKSA9PiBzZXRIZWlnaHQod2luZG93Py5pbm5lcldpZHRoKSk7XHJcbiAgLy8gZGVsYXkoMTAwKS50aGVuKCgpID0+IHNldFdpZHRoKHdpbmRvdz8uaW5uZXJIZWlnaHQpKTtcclxuXHJcbiAgZGVsYXkoMzAwMCkudGhlbigoKSA9PiBzZXRSZW0oZmFsc2UpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3JlbSAmJiAoXHJcbiAgICAgICAgICA8Q29uZmV0dGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgZ3Jhdml0eT17MC43fVxyXG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlcz17NzB9XHJcbiAgICAgICAgICAgIHR3ZWVuRHVyYXRpb249ezIwMDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IFswLCAxXSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMiB9fVxyXG4gICAgICAgICAgaWQ9XCJtYWluSGVhZGluZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtaW4taC1zY3JlZW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4ICBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIgbWF4LXctN3hsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC11YnVudHUgZm9udC1zZW1pYm9sZCB0ZXh0LVs0LjNyZW1dXCI+XHJcbiAgICAgICAgICAgICAgVGhhbmtzIGZvciBmaW5pc2hpbmcgdGhlIHN0dWR5XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAvL2hyZWY9e2Ake3Byb3BzLmFib3V0c1swXS5yZXN1bWV9P2RsPWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtdC0yMCBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLVswLjJyZW1dIHNwYWNlLXgtNSBiZy1kYXJrQmdMaWdodCBweS00IGZvbnQtdWJ1bnR1IHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctZ3JheS04MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgbGc6cHgtMTAgbGc6aG92ZXI6YmctZ3JheS00MDAgbGc6aG92ZXI6dGV4dC1kYXJrQmdMaWdodFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwiaC03IHctNyBhbmltYXRlLXB1bHNlIGhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVyXCI+R28gVG8gSG9tZTwvcD5cclxuICAgICAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhhbmtzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb25mZXR0aSIsIm1vdGlvbiIsIkhvbWVJY29uIiwiZmluYWxTdXJ2U3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInN1Ym1pdFN1cnZleSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF0b20iLCJzZWxlY3RvciIsInVzZVJlY29pbFZhbHVlIiwiTG9hZGluZ0JhciIsIlRoYW5rcyIsImRlbGF5IiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZpbmFsU3UiLCJ3aWR0aCIsInNldFdpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwicmVtIiwic2V0UmVtIiwiZmluYWxSZXMiLCJzZXRGaW5hbFJlcyIsImZpUiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImdyYXZpdHkiLCJudW1iZXJPZlBpZWNlcyIsInR3ZWVuRHVyYXRpb24iLCJ3aGlsZUluVmlldyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpZCIsImEiLCJ3aGlsZVRhcCIsInNjYWxlIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Thanks.js\n"));

/***/ })

});