/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/forgetpassword.js":
/*!**********************************!*\
  !*** ./src/js/forgetpassword.js ***!
  \**********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const resetForm = document.getElementById(\"forgetform\");\r\n  const emailInput = document.getElementById(\"emailInput\");\r\n\r\n  let messageDiv = document.getElementById(\"message\");\r\n  if (!messageDiv) {\r\n    messageDiv = document.createElement(\"div\");\r\n    messageDiv.id = \"message\";\r\n    messageDiv.style.marginTop = \"10px\";\r\n    messageDiv.style.textAlign = \"center\";\r\n    messageDiv.style.color = \"red\";\r\n    resetForm.appendChild(messageDiv);\r\n  }\r\n\r\n  resetForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const email = emailInput.value.trim();\r\n    messageDiv.textContent = \"\";\r\n\r\n    if (!validateEmail(email)) {\r\n      messageDiv.textContent = \"لطفاًایمیل‌ معتبر وارد کنید.\";\r\n      return;\r\n    }\r\n\r\n    const users = JSON.parse(localStorage.getItem(\"users\")) || [];\r\n    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());\r\n\r\n    if (userExists) {\r\n      messageDiv.style.color = \"green\";\r\n      messageDiv.textContent = \"پیام به ایمیل شما ارسال شد\";\r\n    } else {\r\n      messageDiv.style.color = \"red\";\r\n      messageDiv.textContent = \"هیچ حسابی با این ایمیل یافت نشد.\";\r\n    }\r\n  });\r\n\r\n  function validateEmail(email) {\r\n    const emailRegex = /^[^\\s@]+@gmail\\.com$/i;\r\n    return emailRegex.test(email);\r\n  }\r\n});\n\n//# sourceURL=webpack://nurse-service-website/./src/js/forgetpassword.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/forgetpassword.js"]();
/******/ 	
/******/ })()
;