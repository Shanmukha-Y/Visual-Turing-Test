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
exports.id = "pages/Loader";
exports.ids = ["pages/Loader"];
exports.modules = {

/***/ "./atoms/FinalSurvey.js":
/*!******************************!*\
  !*** ./atoms/FinalSurvey.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finalSurvState\": () => (/* binding */ finalSurvState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst finalSurvState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"finalSurvState\",\n    default: {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdG9tcy9GaW5hbFN1cnZleS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsY0FBYyxHQUFHRCw0Q0FBSSxDQUFDO0lBQ2pDRSxHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCQyxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2F0b21zL0ZpbmFsU3VydmV5LmpzPzQ1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaW5hbFN1cnZTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogXCJmaW5hbFN1cnZTdGF0ZVwiLCAvLyB1bmlxdWUgSUQgKHdpdGggcmVzcGVjdCB0byBvdGhlciBhdG9tcy9zZWxlY3RvcnMpXHJcbiAgZGVmYXVsdDoge30sIC8vIGRlZmF1bHQgdmFsdWUgKGFrYSBpbml0aWFsIHZhbHVlKVxyXG59KTsiXSwibmFtZXMiOlsiYXRvbSIsImZpbmFsU3VydlN0YXRlIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./atoms/FinalSurvey.js\n");

/***/ }),

/***/ "./pages/Loader.js":
/*!*************************!*\
  !*** ./pages/Loader.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"react-confetti\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"@heroicons/react/solid\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst Loader = ()=>{\n    const finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    console.log(\"finals\", finalSu);\n    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: rem , 1: setRem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: num , 1: setNum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [finalRes, setFinalRes] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function delay(time) {\n        return new Promise((resolve)=>setTimeout(resolve, time));\n    }\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        ref.current.continuousStart();\n        const fiR = localStorage.getItem(\"finalRes\");\n        submitSurvey(JSON.parse(fiR));\n    }, []);\n    function submitSurvey(payload) {\n        console.log(\"tete\");\n        fetch(\"/api/submitSurvey\", {\n            method: \"POST\",\n            body: JSON.stringify(payload)\n        }).then(()=>{\n            ref.current.complete();\n            delay(300).then(()=>location.href = \"/Thanks\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    //delay(3000).then(() => setRem(false));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8___default()), {\n            height: 5,\n            color: \"#33A7FF\",\n            ref: ref\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dariu\\\\OneDrive\\\\Desktop\\\\GenCT\\\\Visual-Turing-Test\\\\pages\\\\Loader.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ0s7QUFDQztBQUNXO0FBQ0k7QUFDZDtBQUNNO0FBQ0o7QUFDYztBQUNUO0FBRS9DLE1BQU1hLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0gsc0RBQWMsQ0FBQ1AsOERBQWMsQ0FBQztJQUU5Q1csT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUUvQixNQUFNLEtBQUNHLEtBQUssTUFBRUMsUUFBUSxNQUFJbEIsK0NBQVEsRUFBRTtJQUVwQyxNQUFNLEtBQUNtQixNQUFNLE1BQUVDLFNBQVMsTUFBSXBCLCtDQUFRLEVBQUU7SUFFdEMsTUFBTSxLQUFDcUIsR0FBRyxNQUFFQyxNQUFNLE1BQUl0QiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUVwQyxNQUFNLEtBQUN1QixHQUFHLE1BQUVDLE1BQU0sTUFBSXhCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRXJDLE1BQU0sQ0FBQ3lCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyQixzREFBYyxDQUFDRCw4REFBYyxDQUFDO0lBRTlELE1BQU0sS0FBQ3VCLFNBQVMsTUFBRUMsVUFBVSxNQUFJNUIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFOUMsU0FBUzZCLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sR0FBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELE1BQU1JLEdBQUcsR0FBRzFCLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRXhCRCxnREFBUyxDQUFDLElBQU07UUFDZDJCLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxlQUFlLEVBQUUsQ0FBQztRQUM5QixNQUFNQyxHQUFHLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1Q2pDLFlBQVksQ0FBQ2tDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMvQixZQUFZLENBQUNvQyxPQUFPLEVBQUU7UUFDN0IzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQjJCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFTCxJQUFJLENBQUNNLFNBQVMsQ0FBQ0osT0FBTyxDQUFDO1NBQzlCLENBQUMsQ0FDQ0ssSUFBSSxDQUFDLElBQU07WUFDVmIsR0FBRyxDQUFDQyxPQUFPLENBQUNhLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLElBQU1FLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2RyQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlELHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFFeEQsd0NBQXdDO0lBRXhDLHFCQUNFO2tCQUVJLDRFQUFDeEMsOERBQVU7WUFBQ08sTUFBTSxFQUFFLENBQUM7WUFBRWtDLEtBQUssRUFBQyxTQUFTO1lBQUNuQixHQUFHLEVBQUVBLEdBQUc7Ozs7O3FCQUFJO3FCQUVwRCxDQUNIO0FBQ0osQ0FBQztBQUVELGlFQUFlckIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9hZGVyLmpzP2I3YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbmZldHRpIGZyb20gXCJyZWFjdC1jb25mZXR0aVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCB7IGZpbmFsU3VydlN0YXRlIH0gZnJvbSBcIi4uL2F0b21zL0ZpbmFsU3VydmV5XCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgc3VibWl0U3VydmV5IGZyb20gXCIuL2FwaS9zdWJtaXRTdXJ2ZXlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXRvbSwgc2VsZWN0b3IsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmluYWxTdSA9IHVzZVJlY29pbFZhbHVlKGZpbmFsU3VydlN0YXRlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJmaW5hbHNcIiwgZmluYWxTdSk7XHJcblxyXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtyZW0sIHNldFJlbV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2ZpbmFsUmVzLCBzZXRGaW5hbFJlc10gPSB1c2VSZWNvaWxTdGF0ZShmaW5hbFN1cnZTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudC5jb250aW51b3VzU3RhcnQoKTtcclxuICAgIGNvbnN0IGZpUiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluYWxSZXNcIik7XHJcbiAgICBzdWJtaXRTdXJ2ZXkoSlNPTi5wYXJzZShmaVIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdFN1cnZleShwYXlsb2FkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRldGVcIik7XHJcbiAgICBmZXRjaChcIi9hcGkvc3VibWl0U3VydmV5XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQuY29tcGxldGUoKTtcclxuICAgICAgICBkZWxheSgzMDApLnRoZW4oKCkgPT4gbG9jYXRpb24uaHJlZiA9IFwiL1RoYW5rc1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0SGVpZ2h0KHdpbmRvdz8uaW5uZXJXaWR0aCkpO1xyXG4gIC8vIGRlbGF5KDEwMCkudGhlbigoKSA9PiBzZXRXaWR0aCh3aW5kb3c/LmlubmVySGVpZ2h0KSk7XHJcblxyXG4gIC8vZGVsYXkoMzAwMCkudGhlbigoKSA9PiBzZXRSZW0oZmFsc2UpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgXHJcbiAgICAgICAgPExvYWRpbmdCYXIgaGVpZ2h0PXs1fSBjb2xvcj1cIiMzM0E3RkZcIiByZWY9e3JlZn0gLz5cclxuICAgICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb25mZXR0aSIsIm1vdGlvbiIsIkhvbWVJY29uIiwiZmluYWxTdXJ2U3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInN1Ym1pdFN1cnZleSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF0b20iLCJzZWxlY3RvciIsInVzZVJlY29pbFZhbHVlIiwiTG9hZGluZ0JhciIsIkxvYWRlciIsImZpbmFsU3UiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJzZXRXaWR0aCIsImhlaWdodCIsInNldEhlaWdodCIsInJlbSIsInNldFJlbSIsIm51bSIsInNldE51bSIsImZpbmFsUmVzIiwic2V0RmluYWxSZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVmIiwiY3VycmVudCIsImNvbnRpbnVvdXNTdGFydCIsImZpUiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwYXlsb2FkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwidGhlbiIsImNvbXBsZXRlIiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnIiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Loader.js\n");

/***/ }),

/***/ "./pages/api/submitSurvey.js":
/*!***********************************!*\
  !*** ./pages/api/submitSurvey.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ submitSurvey)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"q6jx2yf7\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function submitSurvey(req, res) {\n    const { _id , Date , Knowledge , FinalSurvey  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"surveyResponses\",\n            Date,\n            Knowledge,\n            FinalSurvey\n        });\n    } catch (err) {\n        return res.status(500).json({\n            message: \"couldn't submit the survey\",\n            err\n        });\n    }\n    return res.status(200).json({\n        message: \"survey submitted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFcEM7QUFFbEMsTUFBTUMsTUFBTSxHQUFHO0lBQ3JCQyxPQUFPLEVBQUVDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsU0FBUyxFQUFFSCxVQUF5QztJQUNwREssVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRU4sYUFSSSxLQVFxQixZQUFZO0lBQzdDTyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxnQkFBZ0I7Q0FDbkM7QUFFRCxNQUFNQyxNQUFNLEdBQUdaLHFEQUFZLENBQUNDLE1BQU0sQ0FBQztBQUVwQixlQUFlWSxZQUFZLENBQ3pDQyxHQUFHLEVBQ0hDLEdBQUcsRUFDRjtJQUNELE1BQU0sRUFBRUMsR0FBRyxHQUFFQyxJQUFJLEdBQUVDLFNBQVMsR0FBRUMsV0FBVyxHQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUksQ0FBQztJQUVsRSxJQUFJO1FBQ0YsTUFBTVYsTUFBTSxDQUFDVyxNQUFNLENBQUM7WUFDbEJDLEtBQUssRUFBRSxpQkFBaUI7WUFDeEJQLElBQUk7WUFDSkMsU0FBUztZQUNUQyxXQUFXO1NBQ1osQ0FBQztJQUNKLEVBQUUsT0FBT00sR0FBRyxFQUFFO1FBQ1osT0FBT1YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNEJBQTRCO1lBQUVILEdBQUc7U0FBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxrQkFBa0I7S0FBRSxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzP2UxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuIFxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG4gXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXHJcbiBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxyXG4gdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXHJcbn1cclxuIFxyXG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoY29uZmlnKVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFN1cnZleShcclxuIHJlcSxcclxuIHJlc1xyXG4pIHtcclxuIGNvbnN0IHsgX2lkLCBEYXRlLCBLbm93bGVkZ2UsIEZpbmFsU3VydmV5IH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG4gXHJcbiB0cnkge1xyXG4gICBhd2FpdCBjbGllbnQuY3JlYXRlKHtcclxuICAgICBfdHlwZTogJ3N1cnZleVJlc3BvbnNlcycsXHJcbiAgICAgRGF0ZSxcclxuICAgICBLbm93bGVkZ2UsXHJcbiAgICAgRmluYWxTdXJ2ZXlcclxuICAgfSlcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcImNvdWxkbid0IHN1Ym1pdCB0aGUgc3VydmV5XCIsIGVyciB9KVxyXG4gfVxyXG4gXHJcbiByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnc3VydmV5IHN1Ym1pdHRlZCcgfSlcclxufSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwidG9rZW4iLCJTQU5JVFlfQVBJX1RPS0VOIiwiY2xpZW50Iiwic3VibWl0U3VydmV5IiwicmVxIiwicmVzIiwiX2lkIiwiRGF0ZSIsIktub3dsZWRnZSIsIkZpbmFsU3VydmV5IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZSIsIl90eXBlIiwiZXJyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/submitSurvey.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Loader.js"));
module.exports = __webpack_exports__;

})();