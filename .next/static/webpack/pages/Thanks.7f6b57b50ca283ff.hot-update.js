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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-top-loading-bar */ \"./node_modules/react-top-loading-bar/dist/index.modern.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar answers = {\n    1: \"Fake\",\n    2: \"Real\",\n    3: \"Fake\",\n    4: \"Real\",\n    5: \"Real\",\n    6: \"Fake\",\n    7: \"Fake\",\n    8: \"Real\",\n    9: \"Real\",\n    10: \"Real\",\n    11: \"Real\",\n    12: \"Real\",\n    13: \"Fake\",\n    14: \"Fake\",\n    15: \"Real\",\n    16: \"Real\",\n    17: \"Fake\",\n    18: \"Fake\",\n    19: \"Fake\",\n    20: \"Real\",\n    21: \"Fake\",\n    22: \"Fake\",\n    23: \"Real\",\n    24: \"Fake\",\n    25: \"Real\",\n    26: \"Real\",\n    27: \"Fake\",\n    28: \"Fake\",\n    29: \"Real\",\n    30: \"Fake\"\n};\nvar Thanks = function() {\n    var delay = // const [isLoading, setLoading] = useState(true);\n    function delay(time) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, time);\n        });\n    };\n    _s();\n    var finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), width = ref[0], setWidth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), height = ref1[0], setHeight = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), rem = ref2[0], setRem = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_3__.finalSurvState), 2), finalRes = ref3[0], setFinalRes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), correct = ref4[0], setCorrect = ref4[1];\n    // const ref = useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fiR = localStorage.getItem(\"finalRes\");\n        res = JSON.parse(fiR);\n    }, []);\n    // function submitSurvey(payload) {\n    //   console.log(\"tete\");\n    //   fetch(\"/api/submitSurvey\", {\n    //     method: \"POST\",\n    //     body: JSON.stringify(payload),\n    //   })\n    //     .then(() => {\n    //       ref.current.complete();\n    //       delay(600).then(() => setLoading(false));\n    //     })\n    //     .catch((err) => {\n    //       console.log(err);\n    //     });\n    // }\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    delay(3000).then(function() {\n        return setRem(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                rem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"w-full\",\n                    gravity: 0.7,\n                    numberOfPieces: 70,\n                    tweenDuration: 2000\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    whileInView: {\n                        opacity: [\n                            0,\n                            1\n                        ]\n                    },\n                    transition: {\n                        duration: 2\n                    },\n                    id: \"mainHeading\",\n                    className: \"flex w-full min-h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col justify-center text-center items-center max-w-7xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-ubuntu font-semibold text-[4.3rem]\",\n                                children: \"Thanks for finishing the study\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.a, {\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                href: \"/\",\n                                //href={`${props.abouts[0].resume}?dl=`}\n                                className: \"flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.HomeIcon, {\n                                        className: \"h-7 w-7 animate-pulse hover:text-darkBgLight\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"tracking-wider\",\n                                        children: \"Go To Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Thanks.js\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Thanks, \"obJMHX8EwMSfV2ceNflsBP/mjzQ=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Thanks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thanks);\nvar _c;\n$RefreshReg$(_c, \"Thanks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UaGFua3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFpQztBQUNLO0FBQ0M7QUFDVztBQUNJO0FBQ2Q7QUFDTTtBQUNKO0FBQ2M7QUFDVDtBQUUvQyxJQUFNYSxPQUFPLEdBQUc7QUFDZCxLQUFDLEVBQUUsTUFBTTtBQUNULEtBQUMsRUFBRSxNQUFNO0FBQ1QsS0FBQyxFQUFFLE1BQU07QUFDVCxLQUFDLEVBQUUsTUFBTTtBQUNULEtBQUMsRUFBRSxNQUFNO0FBQ1QsS0FBQyxFQUFFLE1BQU07QUFDVCxLQUFDLEVBQUUsTUFBTTtBQUNULEtBQUMsRUFBRSxNQUFNO0FBQ1QsS0FBQyxFQUFFLE1BQU07QUFDVCxNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07QUFDVixNQUFFLEVBQUUsTUFBTTtBQUNWLE1BQUUsRUFBRSxNQUFNO0FBQ1YsTUFBRSxFQUFFLE1BQU07Q0FDWDtBQUVELElBQU1DLE1BQU0sR0FBRyxXQUFNO1FBY1ZDLEtBQUssR0FGZCxrREFBa0Q7SUFFbEQsU0FBU0EsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDbkIsT0FBTyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztJQUM3RCxDQUFDOztJQWZELElBQU1JLE9BQU8sR0FBR1Qsc0RBQWMsQ0FBQ1AsOERBQWMsQ0FBQztJQUU5QyxJQUEwQkosR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdCcUIsS0FBSyxHQUFjckIsR0FBVSxHQUF4QixFQUFFc0IsUUFBUSxHQUFJdEIsR0FBVSxHQUFkO0lBRXRCLElBQTRCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBL0J1QixNQUFNLEdBQWV2QixJQUFVLEdBQXpCLEVBQUV3QixTQUFTLEdBQUl4QixJQUFVLEdBQWQ7SUFFeEIsSUFBc0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBN0J5QixHQUFHLEdBQVl6QixJQUFjLEdBQTFCLEVBQUUwQixNQUFNLEdBQUkxQixJQUFjLEdBQWxCO0lBRWxCLElBQWdDSyxJQUE4QixvRkFBOUJBLHNEQUFjLENBQUNELDhEQUFjLENBQUMsTUFBdkR1QixRQUFRLEdBQWlCdEIsSUFBOEIsR0FBL0MsRUFBRXVCLFdBQVcsR0FBSXZCLElBQThCLEdBQWxDO0lBQzVCLElBQThCTCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJDNkIsT0FBTyxHQUFnQjdCLElBQWMsR0FBOUIsRUFBRThCLFVBQVUsR0FBSTlCLElBQWMsR0FBbEI7SUFRMUIsNEJBQTRCO0lBRTVCTyxnREFBUyxDQUFDLFdBQU07UUFFZCxJQUFNd0IsR0FBRyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDNUNDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQztJQUV2QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBRWhDLGtEQUFrRDtJQUNsRCxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsSUFBSTtJQUVKLHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFFeERoQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNzQixJQUFJLENBQUM7ZUFBTVgsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUFBLENBQUMsQ0FBQztJQUV0QyxxQkFDRTtrQkFDRSw0RUFBQ1ksS0FBRzs7Z0JBQ0RiLEdBQUcsa0JBQ0YsOERBQUN4Qix1REFBUTtvQkFDUHNDLFNBQVMsRUFBQyxRQUFRO29CQUNsQkMsT0FBTyxFQUFFLEdBQUc7b0JBQ1pDLGNBQWMsRUFBRSxFQUFFO29CQUNsQkMsYUFBYSxFQUFFLElBQUk7Ozs7O3lCQUNuQjs4QkFFSiw4REFBQ3hDLHFEQUFVO29CQUNUeUMsV0FBVyxFQUFFO3dCQUFFQyxPQUFPLEVBQUU7QUFBQyw2QkFBQztBQUFFLDZCQUFDO3lCQUFDO3FCQUFFO29CQUNoQ0MsVUFBVSxFQUFFO3dCQUFFQyxRQUFRLEVBQUUsQ0FBQztxQkFBRTtvQkFDM0JDLEVBQUUsRUFBQyxhQUFhO29CQUNoQlIsU0FBUyxFQUFDLDBCQUEwQjs4QkFFcEMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx5RUFBMEU7OzBDQUN2Riw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHlDQUF5QzswQ0FBQyxnQ0FFekQ7Ozs7O3FDQUFNOzBDQUVOLDhEQUFDckMsbURBQVE7Z0NBQ1ArQyxRQUFRLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxHQUFHO2lDQUFFO2dDQUN4QkMsSUFBSSxFQUFDLEdBQUc7Z0NBQ1Isd0NBQXdDO2dDQUN4Q1osU0FBUyxFQUFDLDRQQUE0UDs7a0RBRXRRLDhEQUFDcEMsNERBQVE7d0NBQUNvQyxTQUFTLEVBQUMsOENBQThDOzs7Ozs2Q0FBRztrREFDckUsOERBQUNhLEdBQUM7d0NBQUNiLFNBQVMsRUFBQyxnQkFBZ0I7a0RBQUMsWUFBVTs7Ozs7NkNBQUk7Ozs7OztxQ0FDbkM7Ozs7Ozs2QkFDUDs7Ozs7eUJBQ0s7Ozs7OztpQkFDVDtxQkFDTCxDQUNIO0FBQ0osQ0FBQztHQXBGS3pCLE1BQU07O1FBQ01ILGtEQUFjO1FBUUVOLGtEQUFjOzs7QUFUMUNTLEtBQUFBLE1BQU07QUFzRlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9UaGFua3MuanM/NDNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IHsgZmluYWxTdXJ2U3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvRmluYWxTdXJ2ZXlcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCBzdWJtaXRTdXJ2ZXkgZnJvbSBcIi4vYXBpL3N1Ym1pdFN1cnZleVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdG9tLCBzZWxlY3RvciwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIjtcclxuXHJcbmNvbnN0IGFuc3dlcnMgPSB7XHJcbiAgMTogXCJGYWtlXCIsXHJcbiAgMjogXCJSZWFsXCIsXHJcbiAgMzogXCJGYWtlXCIsXHJcbiAgNDogXCJSZWFsXCIsXHJcbiAgNTogXCJSZWFsXCIsXHJcbiAgNjogXCJGYWtlXCIsXHJcbiAgNzogXCJGYWtlXCIsXHJcbiAgODogXCJSZWFsXCIsXHJcbiAgOTogXCJSZWFsXCIsXHJcbiAgMTA6IFwiUmVhbFwiLFxyXG4gIDExOiBcIlJlYWxcIixcclxuICAxMjogXCJSZWFsXCIsXHJcbiAgMTM6IFwiRmFrZVwiLFxyXG4gIDE0OiBcIkZha2VcIixcclxuICAxNTogXCJSZWFsXCIsXHJcbiAgMTY6IFwiUmVhbFwiLFxyXG4gIDE3OiBcIkZha2VcIixcclxuICAxODogXCJGYWtlXCIsXHJcbiAgMTk6IFwiRmFrZVwiLFxyXG4gIDIwOiBcIlJlYWxcIixcclxuICAyMTogXCJGYWtlXCIsXHJcbiAgMjI6IFwiRmFrZVwiLFxyXG4gIDIzOiBcIlJlYWxcIixcclxuICAyNDogXCJGYWtlXCIsXHJcbiAgMjU6IFwiUmVhbFwiLFxyXG4gIDI2OiBcIlJlYWxcIixcclxuICAyNzogXCJGYWtlXCIsXHJcbiAgMjg6IFwiRmFrZVwiLFxyXG4gIDI5OiBcIlJlYWxcIixcclxuICAzMDogXCJGYWtlXCJcclxufVxyXG5cclxuY29uc3QgVGhhbmtzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbmFsU3UgPSB1c2VSZWNvaWxWYWx1ZShmaW5hbFN1cnZTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtyZW0sIHNldFJlbV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW2ZpbmFsUmVzLCBzZXRGaW5hbFJlc10gPSB1c2VSZWNvaWxTdGF0ZShmaW5hbFN1cnZTdGF0ZSk7XHJcbiAgY29uc3QgW2NvcnJlY3QsIHNldENvcnJlY3RdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gZGVsYXkodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgZmlSID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaW5hbFJlc1wiKTtcclxuICAgIHJlcyA9IEpTT04ucGFyc2UoZmlSKVxyXG4gICAgXHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBmdW5jdGlvbiBzdWJtaXRTdXJ2ZXkocGF5bG9hZCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJ0ZXRlXCIpO1xyXG4gIC8vICAgZmV0Y2goXCIvYXBpL3N1Ym1pdFN1cnZleVwiLCB7XHJcbiAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gIC8vICAgfSlcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIHJlZi5jdXJyZW50LmNvbXBsZXRlKCk7XHJcblxyXG4gIC8vICAgICAgIGRlbGF5KDYwMCkudGhlbigoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0SGVpZ2h0KHdpbmRvdz8uaW5uZXJXaWR0aCkpO1xyXG4gIC8vIGRlbGF5KDEwMCkudGhlbigoKSA9PiBzZXRXaWR0aCh3aW5kb3c/LmlubmVySGVpZ2h0KSk7XHJcblxyXG4gIGRlbGF5KDMwMDApLnRoZW4oKCkgPT4gc2V0UmVtKGZhbHNlKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW0gJiYgKFxyXG4gICAgICAgICAgPENvbmZldHRpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIGdyYXZpdHk9ezAuN31cclxuICAgICAgICAgICAgbnVtYmVyT2ZQaWVjZXM9ezcwfVxyXG4gICAgICAgICAgICB0d2VlbkR1cmF0aW9uPXsyMDAwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiBbMCwgMV0gfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIgfX1cclxuICAgICAgICAgIGlkPVwibWFpbkhlYWRpbmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWluLWgtc2NyZWVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCAgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIG1heC13LTd4bFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdWJ1bnR1IGZvbnQtc2VtaWJvbGQgdGV4dC1bNC4zcmVtXVwiPlxyXG4gICAgICAgICAgICAgIFRoYW5rcyBmb3IgZmluaXNoaW5nIHRoZSBzdHVkeVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgLy9ocmVmPXtgJHtwcm9wcy5hYm91dHNbMF0ucmVzdW1lfT9kbD1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbXQtMjAgY3Vyc29yLXBvaW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1bMC4ycmVtXSBzcGFjZS14LTUgYmctZGFya0JnTGlnaHQgcHktNCBmb250LXVidW50dSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LWdyYXktODAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGxnOnB4LTEwIGxnOmhvdmVyOmJnLWdyYXktNDAwIGxnOmhvdmVyOnRleHQtZGFya0JnTGlnaHRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEhvbWVJY29uIGNsYXNzTmFtZT1cImgtNyB3LTcgYW5pbWF0ZS1wdWxzZSBob3Zlcjp0ZXh0LWRhcmtCZ0xpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlclwiPkdvIFRvIEhvbWU8L3A+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoYW5rcztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29uZmV0dGkiLCJtb3Rpb24iLCJIb21lSWNvbiIsImZpbmFsU3VydlN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJzdWJtaXRTdXJ2ZXkiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJhdG9tIiwic2VsZWN0b3IiLCJ1c2VSZWNvaWxWYWx1ZSIsIkxvYWRpbmdCYXIiLCJhbnN3ZXJzIiwiVGhhbmtzIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZmluYWxTdSIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyZW0iLCJzZXRSZW0iLCJmaW5hbFJlcyIsInNldEZpbmFsUmVzIiwiY29ycmVjdCIsInNldENvcnJlY3QiLCJmaVIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzIiwiSlNPTiIsInBhcnNlIiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImdyYXZpdHkiLCJudW1iZXJPZlBpZWNlcyIsInR3ZWVuRHVyYXRpb24iLCJ3aGlsZUluVmlldyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpZCIsImEiLCJ3aGlsZVRhcCIsInNjYWxlIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Thanks.js\n"));

/***/ })

});