/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nurse-service-website/./src/css/home.css?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/css/home.css */ \"./src/css/home.css\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const requestForm = document.getElementById(\"requestForm\");\r\n    const requestList = document.getElementById(\"requestList\");\r\n\r\n    let requests = JSON.parse(localStorage.getItem(\"requests\")) || [];\r\n\r\n    // ثبت درخواست جدید\r\n    if (requestForm) {\r\n        requestForm.addEventListener(\"submit\", function (event) {\r\n            event.preventDefault();\r\n\r\n            let name = document.getElementById(\"name\").value.trim();\r\n            let phone = document.getElementById(\"phone-number\").value.trim();\r\n            let service = document.getElementById(\"services\").value;\r\n\r\n            if (!name || !phone || !service) {\r\n                alert(\"لطفاً همه فیلدها را پر کنید.\");\r\n                return;\r\n            }\r\n\r\n            requests.push({ name, phone, service });\r\n            localStorage.setItem(\"requests\", JSON.stringify(requests));\r\n            alert(\"درخواست ثبت شد!\");\r\n            requestForm.reset();\r\n            renderRequests();\r\n        });\r\n    }\r\n\r\n\r\n\r\n\r\n    function renderRequests() {\r\n        const requestTableList = document.getElementById(\"requestTableList\");\r\n        const requestGridList = document.getElementById(\"requestGridList\");\r\n\r\n        requestTableList.innerHTML = \"\";\r\n        requestGridList.innerHTML = \"\";\r\n\r\n        requests.forEach((request, index) => {\r\n            // نمایش جدول برای صفحه‌های بزرگ‌تر از 580px\r\n            if (window.innerWidth > 580) {\r\n                const row = document.createElement(\"tr\");\r\n                row.className = \"border-b last:border-none hover:bg-gray-100 transition\";\r\n\r\n                row.innerHTML = `\r\n                <td class=\"p-4\">${request.name}</td>\r\n                <td class=\"p-4\">${request.phone}</td>\r\n                <td class=\"p-4\">${request.service}</td>\r\n                <td class=\"p-4 text-center\">\r\n                    <button class=\"delete-btn bg-red-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition\" data-index=\"${index}\">\r\n                        حذف\r\n                    </button>\r\n                </td>\r\n            `;\r\n\r\n                row.querySelector(\".delete-btn\").addEventListener(\"click\", () => {\r\n                    requests.splice(index, 1);\r\n                    localStorage.setItem(\"requests\", JSON.stringify(requests));\r\n                    renderRequests();\r\n                });\r\n\r\n                requestTableList.appendChild(row);\r\n            }\r\n            // نمایش Grid برای صفحه‌های کوچکتر از 580px\r\n            else {\r\n                const row = document.createElement(\"div\");\r\n                row.className = \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b last:border-none hover:bg-gray-100 transition p-4 items-center\";\r\n\r\n                row.innerHTML = `\r\n                <div class=\"p-4 bg-teal-200 rounded-md\">نام و نام خانوادگی : ${request.name}</div>\r\n                <div class=\"p-4 bg-teal-200 rounded-md\">شماره تلفن : ${request.phone}</div>\r\n                <div class=\"p-4 bg-teal-200 rounded-md\">خدمت درخواستی : ${request.service}</div>\r\n                <div class=\"p-4 text-center\">\r\n                    <button class=\"delete-btn bg-red-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-700 transition\" data-index=\"${index}\">\r\n                        حذف\r\n                    </button>\r\n                </div>\r\n            `;\r\n\r\n                row.querySelector(\".delete-btn\").addEventListener(\"click\", () => {\r\n                    requests.splice(index, 1);\r\n                    localStorage.setItem(\"requests\", JSON.stringify(requests));\r\n                    renderRequests();\r\n                });\r\n\r\n                requestGridList.appendChild(row);\r\n            }\r\n        });\r\n    }\r\n\r\n    // اجرای مجدد تابع هنگام تغییر سایز صفحه\r\n    window.addEventListener(\"resize\", renderRequests);\r\n\r\n    // اجرای اولیه هنگام بارگذاری صفحه\r\n    renderRequests();\r\n});\n\n//# sourceURL=webpack://nurse-service-website/./src/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/home.js");
/******/ 	
/******/ })()
;