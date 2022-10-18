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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ submitSurvey)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"q6jx2yf7\",\n    apiVersion: \"2021-03-25\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function submitSurvey(req, res) {\n    const { _id , Date , FinalSurvey  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"surveyResponses\",\n            Date,\n            FinalSurvey\n        });\n    } catch (err) {\n        return res.status(500).json({\n            message: \"couldn't submit the survey\",\n            err\n        });\n    }\n    return res.status(200).json({\n        message: \"survey submitted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0U3VydmV5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFcEM7QUFFbEMsTUFBTUMsTUFBTSxHQUFHO0lBQ3BCQyxPQUFPLEVBQUVDLFlBQXNDLElBQUksQ0FBWTtJQUMvREcsU0FBUyxFQUFFSCxVQUF5QztJQUNwREssVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRU4sYUFSRyxLQVFzQixZQUFZO0lBQzdDTyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxnQkFBZ0I7Q0FDcEM7QUFFRCxNQUFNQyxNQUFNLEdBQUdaLHFEQUFZLENBQUNDLE1BQU0sQ0FBQztBQUVwQixlQUFlWSxZQUFZLENBQ3hDQyxHQUFHLEVBQ0hDLEdBQUcsRUFDSDtJQUNBLE1BQU0sRUFBRUMsR0FBRyxHQUFFQyxJQUFJLEdBQUVDLFdBQVcsR0FBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sR0FBRyxDQUFDTyxJQUFJLENBQUM7SUFFdkQsSUFBSTtRQUNGLE1BQU1ULE1BQU0sQ0FBQ1UsTUFBTSxDQUFDO1lBQ2xCQyxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCTixJQUFJO1lBQ0pDLFdBQVc7U0FDWixDQUFDO0lBQ0osRUFBRSxPQUFPTSxHQUFHLEVBQUU7UUFDWixPQUFPVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSw0QkFBNEI7WUFBRUgsR0FBRztTQUFFLENBQUM7SUFDN0UsQ0FBQztJQUVELE9BQU9ULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtLQUFFLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zdWJtaXRTdXJ2ZXkuanM/ZTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gIGFwaVZlcnNpb246ICcyMDIxLTAzLTI1JyxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcbn1cblxuY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KGNvbmZpZylcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc3VibWl0U3VydmV5KFxuICByZXEsXG4gIHJlc1xuKSB7XG4gIGNvbnN0IHsgX2lkLCBEYXRlLCBGaW5hbFN1cnZleSB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcblxuICB0cnkge1xuICAgIGF3YWl0IGNsaWVudC5jcmVhdGUoe1xuICAgICAgX3R5cGU6ICdzdXJ2ZXlSZXNwb25zZXMnLFxuICAgICAgRGF0ZSxcbiAgICAgIEZpbmFsU3VydmV5XG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJjb3VsZG4ndCBzdWJtaXQgdGhlIHN1cnZleVwiLCBlcnIgfSlcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdzdXJ2ZXkgc3VibWl0dGVkJyB9KVxufVxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsIlNBTklUWV9BUElfVE9LRU4iLCJjbGllbnQiLCJzdWJtaXRTdXJ2ZXkiLCJyZXEiLCJyZXMiLCJfaWQiLCJEYXRlIiwiRmluYWxTdXJ2ZXkiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlIiwiX3R5cGUiLCJlcnIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submitSurvey.js\n");

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