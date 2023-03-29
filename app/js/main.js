(()=>{"use strict";var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _offerAccourdion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offerAccourdion */ "./src/js/offerAccourdion.js");\n\n(0,_offerAccourdion__WEBPACK_IMPORTED_MODULE_0__.offerAccourdions)();\n\n//# sourceURL=webpack://start/./src/js/main.js?')},"./src/js/offerAccourdion.js":
/*!***********************************!*\
  !*** ./src/js/offerAccourdion.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"offerAccourdions\": () => (/* binding */ offerAccourdions)\n/* harmony export */ });\nvar offerAccourdions = function offerAccourdions() {\n  'use strict';\n\n  var accourdion = document.querySelectorAll('.offerAccourdion');\n  accourdion.forEach(function (el) {\n    el.addEventListener('click', function (e) {\n      var control = e.currentTarget.querySelector('.offerAccourdion__control');\n      var content = e.currentTarget.querySelector('.offerAccourdion__content');\n      e.currentTarget.classList.toggle('offerAccourdion_open');\n      if (e.currentTarget.classList.contains('offerAccourdion_open')) {\n        control.setAttribute('aria-expanded', true);\n        content.setAttribute('aria-expanded', false);\n        content.style.maxHeight = \"\".concat(content.scrollHeight, \"px\");\n      } else {\n        control.setAttribute('aria-expanded', false);\n        content.setAttribute('aria-expanded', true);\n        content.style.maxHeight = null;\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://start/./src/js/offerAccourdion.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/main.js")})();
//# sourceMappingURL=main.js.map
