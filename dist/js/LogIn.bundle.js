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

/***/ "./src/js/LogIn.js":
/*!*************************!*\
  !*** ./src/js/LogIn.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const errorMessage = document.getElementById(\"error-message\");\r\n  const redirectReason = localStorage.getItem(\"redirectReason\");\r\n\r\n  if (redirectReason) {\r\n    errorMessage.textContent = redirectReason;\r\n    errorMessage.style.display = \"block\";\r\n    localStorage.removeItem(\"redirectReason\");\r\n  }\r\n\r\n  const loginForm = document.getElementById(\"loginForm\");\r\n\r\n  if (!localStorage.getItem(\"adminEmail\")) {\r\n    localStorage.setItem(\"adminEmail\", \"Admin@gmail.com\");\r\n  }\r\n  if (!localStorage.getItem(\"adminPass\")) {\r\n    localStorage.setItem(\"adminPass\", \"12345qwertYU**\");\r\n  }\r\n\r\n  loginForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const email = document.getElementById(\"email\").value.trim();\r\n    const password = document.getElementById(\"password\").value;\r\n\r\n    const storedAdminEmail = localStorage.getItem(\"adminEmail\");\r\n    const storedAdminPass = localStorage.getItem(\"adminPass\");\r\n\r\n    // بررسی ورود مدیر یا کاربر\r\n    if (email === storedAdminEmail && password === storedAdminPass) {\r\n      window.location.href = \"requests.html\"; // مدیر به صفحه درخواست‌ها منتقل می‌شود\r\n    } else {\r\n      const users = JSON.parse(localStorage.getItem(\"users\")) || [];\r\n      const hashedPassword = btoa(password);\r\n      const user = users.find(u => u.email === email && u.password === hashedPassword);\r\n\r\n      if (user) {\r\n        alert(\"ورود با موفقیت انجام شد\");\r\n        localStorage.setItem(\"loggedInUser\", email);\r\n        window.location.href = \"home.html\"; // کاربران معمولی به خانه منتقل می‌شوند\r\n      } else {\r\n        displayError(\"ایمیل یا گذرواژه نادرست است لطفا مجددا تلاش کنید\");\r\n      }\r\n    }\r\n  });\r\n\r\n  function displayError(message) {\r\n    const errorMessage = document.getElementById(\"error-message\");\r\n    errorMessage.textContent = message;\r\n    errorMessage.style.display = \"block\";\r\n  }\r\n});\n\n//# sourceURL=webpack://nurse-service-website/./src/js/LogIn.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/LogIn.js"]();
/******/ 	
/******/ })()
;