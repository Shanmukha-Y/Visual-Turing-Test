"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Thanks";
exports.ids = ["pages/Thanks"];
exports.modules = {

/***/ "./atoms/FinalSurvey.js":
/*!******************************!*\
  !*** ./atoms/FinalSurvey.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finalSurvState\": () => (/* binding */ finalSurvState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst finalSurvState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"finalSurvState\",\n    default: {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdG9tcy9GaW5hbFN1cnZleS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsY0FBYyxHQUFHRCw0Q0FBSSxDQUFDO0lBQ2pDRSxHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCQyxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2F0b21zL0ZpbmFsU3VydmV5LmpzPzQ1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmFsU3VydlN0YXRlID0gYXRvbSh7XG4gIGtleTogXCJmaW5hbFN1cnZTdGF0ZVwiLCAvLyB1bmlxdWUgSUQgKHdpdGggcmVzcGVjdCB0byBvdGhlciBhdG9tcy9zZWxlY3RvcnMpXG4gIGRlZmF1bHQ6IHt9LCAvLyBkZWZhdWx0IHZhbHVlIChha2EgaW5pdGlhbCB2YWx1ZSlcbn0pOyJdLCJuYW1lcyI6WyJhdG9tIiwiZmluYWxTdXJ2U3RhdGUiLCJrZXkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./atoms/FinalSurvey.js\n");

/***/ }),

/***/ "./pages/Thanks.js":
/*!*************************!*\
  !*** ./pages/Thanks.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"react-confetti\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"@heroicons/react/solid\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst Thanks = ()=>{\n    const finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: rem , 1: setRem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [finalRes, setFinalRes] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    // const [isLoading, setLoading] = useState(true);\n    function delay(time) {\n        return new Promise((resolve)=>setTimeout(resolve, time));\n    }\n    // const ref = useRef(null);\n    // useEffect(() => {\n    //   ref.current.continuousStart();\n    //   const fiR = localStorage.getItem(\"finalRes\");\n    //   submitSurvey(JSON.parse(fiR));\n    // }, []);\n    // function submitSurvey(payload) {\n    //   console.log(\"tete\");\n    //   fetch(\"/api/submitSurvey\", {\n    //     method: \"POST\",\n    //     body: JSON.stringify(payload),\n    //   })\n    //     .then(() => {\n    //       ref.current.complete();\n    //       delay(600).then(() => setLoading(false));\n    //     })\n    //     .catch((err) => {\n    //       console.log(err);\n    //     });\n    // }\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    delay(3000).then(()=>setRem(false));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                rem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"w-full\",\n                    gravity: 0.7,\n                    numberOfPieces: 70,\n                    tweenDuration: 2000\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileInView: {\n                        opacity: [\n                            0,\n                            1\n                        ]\n                    },\n                    transition: {\n                        duration: 2\n                    },\n                    id: \"mainHeading\",\n                    className: \"flex w-full min-h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col justify-center text-center items-center max-w-7xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-ubuntu font-semibold text-[4.3rem]\",\n                                children: \"Thanks for finishing the study\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                href: \"/\",\n                                //href={`${props.abouts[0].resume}?dl=`}\n                                className: \"flex mt-20 cursor-pointer justify-center rounded-[0.2rem] space-x-5 bg-darkBgLight py-4 font-ubuntu text-lg font-semibold text-white shadow-md shadow-gray-800 transition duration-500 ease-in-out lg:px-10 lg:hover:bg-gray-400 lg:hover:text-darkBgLight\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.HomeIcon, {\n                                        className: \"h-7 w-7 animate-pulse hover:text-darkBgLight\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"tracking-wider\",\n                                        children: \"Go To Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Thanks.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thanks);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9UaGFua3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ0s7QUFDQztBQUNXO0FBQ0k7QUFDZDtBQUNNO0FBQ0o7QUFDYztBQUNUO0FBRS9DLE1BQU1hLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0gsc0RBQWMsQ0FBQ1AsOERBQWMsQ0FBQztJQUU5QyxNQUFNLEtBQUNXLEtBQUssTUFBRUMsUUFBUSxNQUFJaEIsK0NBQVEsRUFBRTtJQUVwQyxNQUFNLEtBQUNpQixNQUFNLE1BQUVDLFNBQVMsTUFBSWxCLCtDQUFRLEVBQUU7SUFFdEMsTUFBTSxLQUFDbUIsR0FBRyxNQUFFQyxNQUFNLE1BQUlwQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUVwQyxNQUFNLENBQUNxQixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHakIsc0RBQWMsQ0FBQ0QsOERBQWMsQ0FBQztJQUU5RCxrREFBa0Q7SUFFbEQsU0FBU21CLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sR0FBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDRCQUE0QjtJQUU1QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtEQUFrRDtJQUVsRCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUVWLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsT0FBTztJQUNQLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFFaEMsa0RBQWtEO0lBQ2xELFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixJQUFJO0lBRUosd0RBQXdEO0lBQ3hELHdEQUF3RDtJQUV4REQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBTVIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFdEMscUJBQ0U7a0JBQ0UsNEVBQUNTLEtBQUc7O2dCQUNEVixHQUFHLGtCQUNGLDhEQUFDbEIsdURBQVE7b0JBQ1A2QixTQUFTLEVBQUMsUUFBUTtvQkFDbEJDLE9BQU8sRUFBRSxHQUFHO29CQUNaQyxjQUFjLEVBQUUsRUFBRTtvQkFDbEJDLGFBQWEsRUFBRSxJQUFJOzs7Ozs2QkFDbkI7OEJBRUosOERBQUMvQixxREFBVTtvQkFDVGdDLFdBQVcsRUFBRTt3QkFBRUMsT0FBTyxFQUFFO0FBQUMsNkJBQUM7QUFBRSw2QkFBQzt5QkFBQztxQkFBRTtvQkFDaENDLFVBQVUsRUFBRTt3QkFBRUMsUUFBUSxFQUFFLENBQUM7cUJBQUU7b0JBQzNCQyxFQUFFLEVBQUMsYUFBYTtvQkFDaEJSLFNBQVMsRUFBQywwQkFBMEI7OEJBRXBDLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUVBQTBFOzswQ0FDdkYsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7MENBQUMsZ0NBRXpEOzs7Ozt5Q0FBTTswQ0FFTiw4REFBQzVCLG1EQUFRO2dDQUNQc0MsUUFBUSxFQUFFO29DQUFFQyxLQUFLLEVBQUUsR0FBRztpQ0FBRTtnQ0FDeEJDLElBQUksRUFBQyxHQUFHO2dDQUNSLHdDQUF3QztnQ0FDeENaLFNBQVMsRUFBQyw0UEFBNFA7O2tEQUV0USw4REFBQzNCLDREQUFRO3dDQUFDMkIsU0FBUyxFQUFDLDhDQUE4Qzs7Ozs7aURBQUc7a0RBQ3JFLDhEQUFDYSxHQUFDO3dDQUFDYixTQUFTLEVBQUMsZ0JBQWdCO2tEQUFDLFlBQVU7Ozs7O2lEQUFJOzs7Ozs7eUNBQ25DOzs7Ozs7aUNBQ1A7Ozs7OzZCQUNLOzs7Ozs7cUJBQ1Q7cUJBQ0wsQ0FDSDtBQUNKLENBQUM7QUFFRCxpRUFBZWpCLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1RoYW5rcy5qcz80M2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IHsgZmluYWxTdXJ2U3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvRmluYWxTdXJ2ZXlcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHN1Ym1pdFN1cnZleSBmcm9tIFwiLi9hcGkvc3VibWl0U3VydmV5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXRvbSwgc2VsZWN0b3IsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiO1xuXG5jb25zdCBUaGFua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbmFsU3UgPSB1c2VSZWNvaWxWYWx1ZShmaW5hbFN1cnZTdGF0ZSk7XG5cbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtyZW0sIHNldFJlbV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbZmluYWxSZXMsIHNldEZpbmFsUmVzXSA9IHVzZVJlY29pbFN0YXRlKGZpbmFsU3VydlN0YXRlKTtcblxuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xuICB9XG5cbiAgLy8gY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgcmVmLmN1cnJlbnQuY29udGludW91c1N0YXJ0KCk7XG4gIC8vICAgY29uc3QgZmlSID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaW5hbFJlc1wiKTtcblxuICAvLyAgIHN1Ym1pdFN1cnZleShKU09OLnBhcnNlKGZpUikpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gZnVuY3Rpb24gc3VibWl0U3VydmV5KHBheWxvYWQpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInRldGVcIik7XG4gIC8vICAgZmV0Y2goXCIvYXBpL3N1Ym1pdFN1cnZleVwiLCB7XG4gIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gIC8vICAgfSlcbiAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKTtcblxuICAvLyAgICAgICBkZWxheSg2MDApLnRoZW4oKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gIC8vICAgICB9KTtcbiAgLy8gfVxuXG4gIC8vIGRlbGF5KDEwMCkudGhlbigoKSA9PiBzZXRIZWlnaHQod2luZG93Py5pbm5lcldpZHRoKSk7XG4gIC8vIGRlbGF5KDEwMCkudGhlbigoKSA9PiBzZXRXaWR0aCh3aW5kb3c/LmlubmVySGVpZ2h0KSk7XG5cbiAgZGVsYXkoMzAwMCkudGhlbigoKSA9PiBzZXRSZW0oZmFsc2UpKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVtICYmIChcbiAgICAgICAgICA8Q29uZmV0dGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICBncmF2aXR5PXswLjd9XG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlcz17NzB9XG4gICAgICAgICAgICB0d2VlbkR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogWzAsIDFdIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMiB9fVxuICAgICAgICAgIGlkPVwibWFpbkhlYWRpbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIG1pbi1oLXNjcmVlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCAgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIG1heC13LTd4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXVidW50dSBmb250LXNlbWlib2xkIHRleHQtWzQuM3JlbV1cIj5cbiAgICAgICAgICAgICAgVGhhbmtzIGZvciBmaW5pc2hpbmcgdGhlIHN0dWR5XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAvL2hyZWY9e2Ake3Byb3BzLmFib3V0c1swXS5yZXN1bWV9P2RsPWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbXQtMjAgY3Vyc29yLXBvaW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1bMC4ycmVtXSBzcGFjZS14LTUgYmctZGFya0JnTGlnaHQgcHktNCBmb250LXVidW50dSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LWdyYXktODAwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGxnOnB4LTEwIGxnOmhvdmVyOmJnLWdyYXktNDAwIGxnOmhvdmVyOnRleHQtZGFya0JnTGlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPVwiaC03IHctNyBhbmltYXRlLXB1bHNlIGhvdmVyOnRleHQtZGFya0JnTGlnaHRcIiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlclwiPkdvIFRvIEhvbWU8L3A+XG4gICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoYW5rcztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbmZldHRpIiwibW90aW9uIiwiSG9tZUljb24iLCJmaW5hbFN1cnZTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwic3VibWl0U3VydmV5IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiYXRvbSIsInNlbGVjdG9yIiwidXNlUmVjb2lsVmFsdWUiLCJMb2FkaW5nQmFyIiwiVGhhbmtzIiwiZmluYWxTdSIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyZW0iLCJzZXRSZW0iLCJmaW5hbFJlcyIsInNldEZpbmFsUmVzIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImRpdiIsImNsYXNzTmFtZSIsImdyYXZpdHkiLCJudW1iZXJPZlBpZWNlcyIsInR3ZWVuRHVyYXRpb24iLCJ3aGlsZUluVmlldyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpZCIsImEiLCJ3aGlsZVRhcCIsInNjYWxlIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Thanks.js\n");

/***/ }),

/***/ "./pages/api/submitSurvey.js":
/*!***********************************!*\
  !*** ./pages/api/submitSurvey.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ submitSurvey)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"q6jx2yf7\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function submitSurvey(req, res) {\n    const { _id , Date , FinalSurvey  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"surveyResponses\",\n            Date,\n            FinalSurvey\n        });\n    } catch (err) {\n        return res.status(500).json({\n            message: \"couldn't submit the survey\",\n            err\n        });\n    }\n    return res.status(200).json({\n        message: \"survey submitted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFcEM7QUFFbEMsTUFBTUMsTUFBTSxHQUFHO0lBQ3BCQyxPQUFPLEVBQUVDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsU0FBUyxFQUFFSCxVQUF5QztJQUNwREssVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRU4sYUFSRyxLQVFzQixZQUFZO0lBQzdDTyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxnQkFBZ0I7Q0FDcEM7QUFFRCxNQUFNQyxNQUFNLEdBQUdaLHFEQUFZLENBQUNDLE1BQU0sQ0FBQztBQUVwQixlQUFlWSxZQUFZLENBQ3hDQyxHQUFHLEVBQ0hDLEdBQUcsRUFDSDtJQUNBLE1BQU0sRUFBRUMsR0FBRyxHQUFFQyxJQUFJLEdBQUVDLFdBQVcsR0FBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sR0FBRyxDQUFDTyxJQUFJLENBQUM7SUFFdkQsSUFBSTtRQUNGLE1BQU1ULE1BQU0sQ0FBQ1UsTUFBTSxDQUFDO1lBQ2xCQyxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCTixJQUFJO1lBQ0pDLFdBQVc7U0FDWixDQUFDO0lBQ0osRUFBRSxPQUFPTSxHQUFHLEVBQUU7UUFDWixPQUFPVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSw0QkFBNEI7WUFBRUgsR0FBRztTQUFFLENBQUM7SUFDN0UsQ0FBQztJQUVELE9BQU9ULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtLQUFFLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zdWJtaXRTdXJ2ZXkuanM/ZTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gIGFwaVZlcnNpb246ICcyMDIxLTAzLTI1JyxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcbn1cblxuY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KGNvbmZpZylcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc3VibWl0U3VydmV5KFxuICByZXEsXG4gIHJlc1xuKSB7XG4gIGNvbnN0IHsgX2lkLCBEYXRlLCBGaW5hbFN1cnZleSB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcblxuICB0cnkge1xuICAgIGF3YWl0IGNsaWVudC5jcmVhdGUoe1xuICAgICAgX3R5cGU6ICdzdXJ2ZXlSZXNwb25zZXMnLFxuICAgICAgRGF0ZSxcbiAgICAgIEZpbmFsU3VydmV5XG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJjb3VsZG4ndCBzdWJtaXQgdGhlIHN1cnZleVwiLCBlcnIgfSlcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdzdXJ2ZXkgc3VibWl0dGVkJyB9KVxufVxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsIlNBTklUWV9BUElfVE9LRU4iLCJjbGllbnQiLCJzdWJtaXRTdXJ2ZXkiLCJyZXEiLCJyZXMiLCJfaWQiLCJEYXRlIiwiRmluYWxTdXJ2ZXkiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlIiwiX3R5cGUiLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/submitSurvey.js\n");

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-confetti":
/*!*********************************!*\
  !*** external "react-confetti" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-confetti");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Thanks.js"));
module.exports = __webpack_exports__;

})();