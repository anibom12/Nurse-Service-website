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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nurse-service-website/./src/css/style.css?");

/***/ }),

/***/ "./src/js/SignUp.js":
/*!**************************!*\
  !*** ./src/js/SignUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const signupForm = document.getElementById(\"signupForm\");\r\n  const messageDiv = document.getElementById(\"message\");\r\n\r\n  const users = JSON.parse(localStorage.getItem(\"users\")) || [];\r\n\r\n  signupForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const username = document.getElementById(\"username\").value.trim();\r\n    const email = document.getElementById(\"email\").value.trim();\r\n    const password = document.getElementById(\"password\").value;\r\n    const confirmPassword = document.getElementById(\"confirmPassword\").value;\r\n\r\n    messageDiv.textContent = \"\";\r\n\r\n    if (!validateEmail(email)) {\r\n      messageDiv.textContent = \"آدرس ایمیل معتبر نیست\";\r\n      return;\r\n    }\r\n\r\n    if (!validatePassword(password)) {\r\n      messageDiv.textContent = \"گذرواژه شما باید حداقل دارای 8 کاراکتر و شامل حروف ،اعداد و کارکترهای خاص باشد \";\r\n      return;\r\n    }\r\n\r\n\r\n    if (password !== confirmPassword) {\r\n      messageDiv.textContent = \"گذرواژه ها با هم تطابق ندارند\";\r\n      return;\r\n    }\r\n\r\n    if (users.find(user => user.email === email)) {\r\n      messageDiv.textContent = \" کاربری با این ایمیل قبلاً ثبت‌نام کرده است\";\r\n      return;\r\n    }\r\n\r\n    users.push({ username, email, password: hashPassword(password) });\r\n    localStorage.setItem(\"users\", JSON.stringify(users));\r\n\r\n    alert(\"ثبت نام با موفقیت انجام شد\");\r\n    signupForm.reset();\r\n    window.location.href = \"Log in.html\";\r\n  });\r\n\r\n  function validateEmail(email) {\r\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return emailRegex.test(email);\r\n  }\r\n\r\n  function validatePassword(password) {\r\n    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\r\n    return passwordRegex.test(password);\r\n  }\r\n\r\n  function hashPassword(password) {\r\n    return btoa(password);\r\n  }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://nurse-service-website/./src/js/SignUp.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/SignUp.js");
/******/ 	
/******/ })()
;