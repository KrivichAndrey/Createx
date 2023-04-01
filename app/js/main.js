(()=>{"use strict";var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _offerAccourdion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offerAccourdion */ \"./src/js/offerAccourdion.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n'use strickt';\n\n\n\n(0,_offerAccourdion__WEBPACK_IMPORTED_MODULE_0__.offerAccourdions)();\nif (document.querySelectorAll('[data-open-modal-cv]')) {\n  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.popaps)();\n}\n\n//# sourceURL=webpack://start/./src/js/main.js?")},"./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popaps\": () => (/* binding */ popaps)\n/* harmony export */ });\nfunction popaps() {\n  var modal = document.querySelector('.modal');\n  var modalOverlay = document.querySelector('.modal__inner');\n  var modalOpenTrigger = document.querySelectorAll('[data-open-modal-cv]');\n  var modalCloseTrigger = document.querySelectorAll('[data-close-modal-cv]');\n  function openModal() {\n    modal.classList.add('modal_visible');\n    modal.classList.remove('modal_hidden');\n    document.body.style.overflowY = 'hidden';\n  }\n  function closeModal() {\n    modal.classList.add('modal_hidden');\n    modal.classList.remove('modal_visible');\n    document.body.style.overflowY = '';\n  }\n  modalOpenTrigger.forEach(function (element) {\n    element.addEventListener('click', openModal);\n  });\n  modalCloseTrigger.forEach(function (element) {\n    element.addEventListener('click', closeModal);\n  });\n  modal.addEventListener('click', function (e) {\n    if (e.target === modalOverlay) {\n      closeModal();\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      closeModal();\n    }\n  });\n}\n\n//# sourceURL=webpack://start/./src/js/modal.js?")},"./src/js/offerAccourdion.js":
/*!***********************************!*\
  !*** ./src/js/offerAccourdion.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"offerAccourdions\": () => (/* binding */ offerAccourdions)\n/* harmony export */ });\nvar offerAccourdions = function offerAccourdions() {\n  'use strict';\n\n  if (document.querySelectorAll('.offerAccourdion')) {\n    var accourdion = document.querySelectorAll('.offerAccourdion');\n    accourdion.forEach(function (el) {\n      el.addEventListener('click', function (e) {\n        var control = e.currentTarget.querySelector('.offerAccourdion__control');\n        var content = e.currentTarget.querySelector('.offerAccourdion__content');\n        e.currentTarget.classList.toggle('offerAccourdion_open');\n        if (e.currentTarget.classList.contains('offerAccourdion_open')) {\n          control.setAttribute('aria-expanded', true);\n          content.setAttribute('aria-expanded', false);\n          content.style.maxHeight = \"\".concat(content.scrollHeight, \"px\");\n        } else {\n          control.setAttribute('aria-expanded', false);\n          content.setAttribute('aria-expanded', true);\n          content.style.maxHeight = null;\n        }\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack://start/./src/js/offerAccourdion.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var o=__webpack_module_cache__[e];if(void 0!==o)return o.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,o)=>{for(var r in o)__webpack_require__.o(o,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},__webpack_require__.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/main.js")})();
//# sourceMappingURL=main.js.map
