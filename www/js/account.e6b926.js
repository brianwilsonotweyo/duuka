(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Account.less":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/pages/Account.less ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".account-popup {\\n  --f7-popup-tablet-border-radius: 15px;\\n}\\n.account-page {\\n  --f7-navbar-height: 56px;\\n  --f7-list-button-text-align: left;\\n  --f7-list-margin-vertical: 20px;\\n}\\n.theme-dark .account-page {\\n  --f7-navbar-bg-color: #2C2C2E;\\n  --f7-navbar-bg-color-rgb: 50, 50, 50;\\n  --f7-page-bg-color: #1C1C1E;\\n  --f7-list-bg-color: #2C2C2E;\\n  --f7-block-strong-bg-color: #2C2C2E;\\n}\\n.account-page .account-user .item-inner {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n.account-page .account-user .item-title {\\n  font-weight: normal;\\n}\\n.account-page .account-user .item-subtitle {\\n  opacity: 0.55;\\n}\\n.account-page .account-user img {\\n  width: 56px;\\n  height: 56px;\\n  border-radius: 50%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/pages/Account.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/pages/Account.jsx":
/*!*******************************!*\
  !*** ./src/pages/Account.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framework7-react */ \"./node_modules/framework7-react/esm/framework7-react.js\");\n/* harmony import */ var _Account_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.less */ \"./src/pages/Account.less\");\n/* harmony import */ var _Account_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Account_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_avatar_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/avatar.jpeg */ \"./src/assets/avatar.jpeg\");\n/* harmony import */ var _assets_avatar_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_avatar_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Account = function Account() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"Popup\"], {\n    push: true,\n    swipeToClose: \"to-bottom\",\n    className: \"account-popup\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    className: \"account-page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    title: \"Account\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    popupClose: true,\n    slot: \"right\"\n  }, \"Done\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    mediaList: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    className: \"account-user\",\n    title: \"John Doe\",\n    subtitle: \"johndoe@gmail.com\",\n    chevronCenter: true,\n    link: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    slot: \"media\",\n    src: _assets_avatar_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"John Doe\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    title: \"Purchased\",\n    link: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    title: \"Subscriptions\",\n    link: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListButton\"], null, \"Redeem Gift Card or Code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListButton\"], null, \"Send Gift Card by Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListButton\"], null, \"Add Funds to Apple ID\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    title: \"Personalised Recommendations\",\n    link: true\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\n\n//# sourceURL=webpack:///./src/pages/Account.jsx?");

/***/ }),

/***/ "./src/pages/Account.less":
/*!********************************!*\
  !*** ./src/pages/Account.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Account.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Account.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Account.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Account.less\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./Account.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Account.less\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/pages/Account.less?");

/***/ })

}]);