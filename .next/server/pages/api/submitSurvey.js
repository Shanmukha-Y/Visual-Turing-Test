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
exports.id = "pages/api/submitSurvey";
exports.ids = ["pages/api/submitSurvey"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/submitSurvey.js":
/*!***********************************!*\
  !*** ./pages/api/submitSurvey.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ submitSurvey)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"q6jx2yf7\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function submitSurvey(req, res) {\n    const { _id , Date , Knowledge , FinalSurvey  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"surveyResponses\",\n            Date,\n            Knowledge,\n            FinalSurvey\n        });\n    } catch (err) {\n        return res.status(500).json({\n            message: \"couldn't submit the survey\",\n            err\n        });\n    }\n    return res.status(200).json({\n        message: \"survey submitted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFcEM7QUFFbEMsTUFBTUMsTUFBTSxHQUFHO0lBQ3JCQyxPQUFPLEVBQUVDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsU0FBUyxFQUFFSCxVQUF5QztJQUNwREssVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRU4sYUFSSSxLQVFxQixZQUFZO0lBQzdDTyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxnQkFBZ0I7Q0FDbkM7QUFFRCxNQUFNQyxNQUFNLEdBQUdaLHFEQUFZLENBQUNDLE1BQU0sQ0FBQztBQUVwQixlQUFlWSxZQUFZLENBQ3pDQyxHQUFHLEVBQ0hDLEdBQUcsRUFDRjtJQUNELE1BQU0sRUFBRUMsR0FBRyxHQUFFQyxJQUFJLEdBQUVDLFNBQVMsR0FBRUMsV0FBVyxHQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUksQ0FBQztJQUVsRSxJQUFJO1FBQ0YsTUFBTVYsTUFBTSxDQUFDVyxNQUFNLENBQUM7WUFDbEJDLEtBQUssRUFBRSxpQkFBaUI7WUFDeEJQLElBQUk7WUFDSkMsU0FBUztZQUNUQyxXQUFXO1NBQ1osQ0FBQztJQUNKLEVBQUUsT0FBT00sR0FBRyxFQUFFO1FBQ1osT0FBT1YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNEJBQTRCO1lBQUVILEdBQUc7U0FBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxrQkFBa0I7S0FBRSxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzP2UxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuIFxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG4gXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXHJcbiBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxyXG4gdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXHJcbn1cclxuIFxyXG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoY29uZmlnKVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFN1cnZleShcclxuIHJlcSxcclxuIHJlc1xyXG4pIHtcclxuIGNvbnN0IHsgX2lkLCBEYXRlLCBLbm93bGVkZ2UsIEZpbmFsU3VydmV5IH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG4gXHJcbiB0cnkge1xyXG4gICBhd2FpdCBjbGllbnQuY3JlYXRlKHtcclxuICAgICBfdHlwZTogJ3N1cnZleVJlc3BvbnNlcycsXHJcbiAgICAgRGF0ZSxcclxuICAgICBLbm93bGVkZ2UsXHJcbiAgICAgRmluYWxTdXJ2ZXlcclxuICAgfSlcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcImNvdWxkbid0IHN1Ym1pdCB0aGUgc3VydmV5XCIsIGVyciB9KVxyXG4gfVxyXG4gXHJcbiByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnc3VydmV5IHN1Ym1pdHRlZCcgfSlcclxufSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwidG9rZW4iLCJTQU5JVFlfQVBJX1RPS0VOIiwiY2xpZW50Iiwic3VibWl0U3VydmV5IiwicmVxIiwicmVzIiwiX2lkIiwiRGF0ZSIsIktub3dsZWRnZSIsIkZpbmFsU3VydmV5IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZSIsIl90eXBlIiwiZXJyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/submitSurvey.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submitSurvey.js"));
module.exports = __webpack_exports__;

})();