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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finalSurvState\": () => (/* binding */ finalSurvState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst finalSurvState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"finalSurvState\",\n    default: {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdG9tcy9GaW5hbFN1cnZleS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsY0FBYyxHQUFHRCw0Q0FBSSxDQUFDO0lBQ2pDRSxHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCQyxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2F0b21zL0ZpbmFsU3VydmV5LmpzPzQ1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IGZpbmFsU3VydlN0YXRlID0gYXRvbSh7XG4gIGtleTogXCJmaW5hbFN1cnZTdGF0ZVwiLCAvLyB1bmlxdWUgSUQgKHdpdGggcmVzcGVjdCB0byBvdGhlciBhdG9tcy9zZWxlY3RvcnMpXG4gIGRlZmF1bHQ6IHt9LCAvLyBkZWZhdWx0IHZhbHVlIChha2EgaW5pdGlhbCB2YWx1ZSlcbn0pOyJdLCJuYW1lcyI6WyJhdG9tIiwiZmluYWxTdXJ2U3RhdGUiLCJrZXkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./atoms/FinalSurvey.js\n");

/***/ }),

/***/ "./pages/Loader.js":
/*!*************************!*\
  !*** ./pages/Loader.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"react-confetti\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"@heroicons/react/solid\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/FinalSurvey */ \"./atoms/FinalSurvey.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_submitSurvey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/submitSurvey */ \"./pages/api/submitSurvey.js\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst Loader = ()=>{\n    const finalSu = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilValue)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    console.log(\"finals\", finalSu);\n    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: rem , 1: setRem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: num , 1: setNum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [finalRes, setFinalRes] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_FinalSurvey__WEBPACK_IMPORTED_MODULE_5__.finalSurvState);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function delay(time) {\n        return new Promise((resolve)=>setTimeout(resolve, time));\n    }\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        ref.current.continuousStart();\n        const fiR = localStorage.getItem(\"finalRes\");\n        submitSurvey(JSON.parse(fiR));\n    }, []);\n    function submitSurvey(payload) {\n        console.log(\"tete\");\n        fetch(\"/api/submitSurvey\", {\n            method: \"POST\",\n            body: JSON.stringify(payload)\n        }).then(()=>{\n            ref.current.complete();\n            delay(300).then(()=>location.href = \"/Thanks\");\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    // delay(100).then(() => setHeight(window?.innerWidth));\n    // delay(100).then(() => setWidth(window?.innerHeight));\n    //delay(3000).then(() => setRem(false));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_8___default()), {\n            height: 5,\n            color: \"#33A7FF\",\n            ref: ref\n        }, void 0, false, {\n            fileName: \"/Users/Neeraj/Desktop/React-Builds/fd/Fake-Image-Detection/pages/Loader.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ0s7QUFDQztBQUNXO0FBQ0k7QUFDZDtBQUNNO0FBQ0o7QUFDYztBQUNUO0FBRS9DLE1BQU1hLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU1DLE9BQU8sR0FBR0gsc0RBQWMsQ0FBQ1AsOERBQWMsQ0FBQztJQUU5Q1csT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUUvQixNQUFNLEtBQUNHLEtBQUssTUFBRUMsUUFBUSxNQUFJbEIsK0NBQVEsRUFBRTtJQUVwQyxNQUFNLEtBQUNtQixNQUFNLE1BQUVDLFNBQVMsTUFBSXBCLCtDQUFRLEVBQUU7SUFFdEMsTUFBTSxLQUFDcUIsR0FBRyxNQUFFQyxNQUFNLE1BQUl0QiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUVwQyxNQUFNLEtBQUN1QixHQUFHLE1BQUVDLE1BQU0sTUFBSXhCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRXJDLE1BQU0sQ0FBQ3lCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyQixzREFBYyxDQUFDRCw4REFBYyxDQUFDO0lBRTlELE1BQU0sS0FBQ3VCLFNBQVMsTUFBRUMsVUFBVSxNQUFJNUIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFOUMsU0FBUzZCLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sR0FBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELE1BQU1JLEdBQUcsR0FBRzFCLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRXhCRCxnREFBUyxDQUFDLElBQU07UUFDZDJCLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxlQUFlLEVBQUUsQ0FBQztRQUM5QixNQUFNQyxHQUFHLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1Q2pDLFlBQVksQ0FBQ2tDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMvQixZQUFZLENBQUNvQyxPQUFPLEVBQUU7UUFDN0IzQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQjJCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFTCxJQUFJLENBQUNNLFNBQVMsQ0FBQ0osT0FBTyxDQUFDO1NBQzlCLENBQUMsQ0FDQ0ssSUFBSSxDQUFDLElBQU07WUFDVmIsR0FBRyxDQUFDQyxPQUFPLENBQUNhLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLElBQU1FLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2RyQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlELHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFFeEQsd0NBQXdDO0lBRXhDLHFCQUNFO2tCQUVJLDRFQUFDeEMsOERBQVU7WUFBQ08sTUFBTSxFQUFFLENBQUM7WUFBRWtDLEtBQUssRUFBQyxTQUFTO1lBQUNuQixHQUFHLEVBQUVBLEdBQUc7Ozs7O3FCQUFJO3FCQUVwRCxDQUNIO0FBQ0osQ0FBQztBQUVELGlFQUFlckIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9hZGVyLmpzP2I3YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyBmaW5hbFN1cnZTdGF0ZSB9IGZyb20gXCIuLi9hdG9tcy9GaW5hbFN1cnZleVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgc3VibWl0U3VydmV5IGZyb20gXCIuL2FwaS9zdWJtaXRTdXJ2ZXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdG9tLCBzZWxlY3RvciwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCI7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IHtcbiAgY29uc3QgZmluYWxTdSA9IHVzZVJlY29pbFZhbHVlKGZpbmFsU3VydlN0YXRlKTtcblxuICBjb25zb2xlLmxvZyhcImZpbmFsc1wiLCBmaW5hbFN1KTtcblxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3JlbSwgc2V0UmVtXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2ZpbmFsUmVzLCBzZXRGaW5hbFJlc10gPSB1c2VSZWNvaWxTdGF0ZShmaW5hbFN1cnZTdGF0ZSk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbiAgfVxuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmNvbnRpbnVvdXNTdGFydCgpO1xuICAgIGNvbnN0IGZpUiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluYWxSZXNcIik7XG4gICAgc3VibWl0U3VydmV5KEpTT04ucGFyc2UoZmlSKSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzdWJtaXRTdXJ2ZXkocGF5bG9hZCkge1xuICAgIGNvbnNvbGUubG9nKFwidGV0ZVwiKTtcbiAgICBmZXRjaChcIi9hcGkvc3VibWl0U3VydmV5XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudC5jb21wbGV0ZSgpO1xuICAgICAgICBkZWxheSgzMDApLnRoZW4oKCkgPT4gbG9jYXRpb24uaHJlZiA9IFwiL1RoYW5rc1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBcblxuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0SGVpZ2h0KHdpbmRvdz8uaW5uZXJXaWR0aCkpO1xuICAvLyBkZWxheSgxMDApLnRoZW4oKCkgPT4gc2V0V2lkdGgod2luZG93Py5pbm5lckhlaWdodCkpO1xuXG4gIC8vZGVsYXkoMzAwMCkudGhlbigoKSA9PiBzZXRSZW0oZmFsc2UpKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIFxuICAgICAgICA8TG9hZGluZ0JhciBoZWlnaHQ9ezV9IGNvbG9yPVwiIzMzQTdGRlwiIHJlZj17cmVmfSAvPlxuICAgICAgXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb25mZXR0aSIsIm1vdGlvbiIsIkhvbWVJY29uIiwiZmluYWxTdXJ2U3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInN1Ym1pdFN1cnZleSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImF0b20iLCJzZWxlY3RvciIsInVzZVJlY29pbFZhbHVlIiwiTG9hZGluZ0JhciIsIkxvYWRlciIsImZpbmFsU3UiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJzZXRXaWR0aCIsImhlaWdodCIsInNldEhlaWdodCIsInJlbSIsInNldFJlbSIsIm51bSIsInNldE51bSIsImZpbmFsUmVzIiwic2V0RmluYWxSZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVmIiwiY3VycmVudCIsImNvbnRpbnVvdXNTdGFydCIsImZpUiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwYXlsb2FkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwidGhlbiIsImNvbXBsZXRlIiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnIiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Loader.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/Loader.js"));
module.exports = __webpack_exports__;

})();