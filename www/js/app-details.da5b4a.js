(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-details"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/AppDetails.less":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/pages/AppDetails.less ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".app-navbar-icon img {\\n  width: 28px;\\n  height: 28px;\\n  border-radius: 22%;\\n}\\n.app-navbar-button {\\n  transition: 200ms;\\n  opacity: 0;\\n}\\n.app-navbar-button .button {\\n  min-width: 72px;\\n}\\n.app-navbar.navbar-transparent-visible .app-navbar-button {\\n  opacity: 1;\\n}\\n.app-header {\\n  display: flex;\\n  align-items: stretch;\\n  margin-top: 0;\\n}\\n.app-header-icon {\\n  width: 118px;\\n  height: 118px;\\n  border-radius: 22%;\\n  margin-right: var(--f7-block-padding-horizontal);\\n  flex-shrink: 0;\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\n}\\n.theme-dark .app-header-icon {\\n  border: 1px solid rgba(255, 255, 255, 0.1);\\n}\\n@media (min-width: 768px) {\\n  .app-header-icon {\\n    width: 191px;\\n    height: 191px;\\n  }\\n}\\n.app-header-content {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  flex-shrink: 10;\\n  min-width: 0;\\n}\\n.app-header-title {\\n  font-size: 22px;\\n  font-weight: 600;\\n}\\n@media (min-width: 768px) {\\n  .app-header-title {\\n    font-size: 27px;\\n  }\\n}\\n.app-header-subtitle {\\n  font-size: 16px;\\n  opacity: 0.55;\\n}\\n@media (min-width: 768px) {\\n  .app-header-subtitle {\\n    font-size: 20px;\\n  }\\n}\\n.app-header-actions {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: auto;\\n}\\n.app-header-actions .button {\\n  min-width: 72px;\\n}\\n@media (min-width: 768px) {\\n  .app-header-actions {\\n    margin-bottom: auto;\\n  }\\n}\\n.app-header-rating {\\n  display: flex;\\n  flex-wrap: wrap;\\n  opacity: 0.55;\\n  align-items: center;\\n  position: relative;\\n}\\n.app-header-rating-value {\\n  font-size: 22px;\\n  font-weight: bold;\\n  margin-right: 4px;\\n}\\n.app-header-rating .rating-stars .f7-icons {\\n  font-size: 18px;\\n}\\n.app-header-rating-sub {\\n  position: absolute;\\n  left: 0;\\n  top: 100%;\\n  font-size: 12px;\\n  opacity: 0.75;\\n}\\n@media (min-width: 768px) {\\n  .app-header-rating-sub {\\n    position: static;\\n    margin-left: 16px;\\n    font-size: 14px;\\n    width: 100%;\\n    margin-left: 0;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .app-header {\\n    margin-bottom: calc(var(--f7-block-margin-vertical) + 30px + 16px);\\n  }\\n  .app-header-ratings {\\n    margin-top: 16px;\\n    margin-bottom: -46px;\\n    margin-left: calc(-118px - var(--f7-block-padding-horizontal));\\n  }\\n}\\n.app-screenshots {\\n  overflow: auto;\\n  scroll-snap-type: x mandatory;\\n  scrollbar-width: none;\\n  white-space: nowrap;\\n  font-size: 0;\\n  scroll-padding-left: calc(20px + var(--f7-safe-area-left));\\n}\\n.app-screenshots::-webkit-scrollbar {\\n  display: none;\\n  opacity: 0;\\n}\\n.app-screenshots img {\\n  width: 220px;\\n  border-radius: 22px;\\n  scroll-snap-align: start start;\\n  margin-right: 10px;\\n  background-color: #f1f1f1;\\n}\\n.theme-dark .app-screenshots img {\\n  background-color: #111;\\n}\\n@media (min-width: 768px) {\\n  .app-screenshots img {\\n    margin-right: 24px;\\n  }\\n}\\n.app-screenshots:after {\\n  content: '';\\n  width: 1px;\\n  height: 1px;\\n  flex-shrink: 0;\\n}\\n.app-description {\\n  font-size: 15px;\\n}\\n.app-description-content {\\n  position: relative;\\n  padding-top: 16px;\\n}\\n.app-description-content:before {\\n  content: '';\\n  position: absolute;\\n  background-color: var(--f7-block-strong-border-color);\\n  display: block;\\n  z-index: 15;\\n  top: 0;\\n  right: auto;\\n  bottom: auto;\\n  left: 0;\\n  height: 1px;\\n  width: 100%;\\n  transform-origin: 50% 0%;\\n  transform: scaleY(calc(1 / var(--f7-device-pixel-ratio)));\\n}\\n.app-description .link {\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n}\\n.app-description .link.active-state {\\n  opacity: 1;\\n}\\n.app-description .link:before {\\n  content: '';\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  height: 100%;\\n  width: 200%;\\n  background-image: linear-gradient(to left, #fff 50%, rgba(255, 255, 255, 0));\\n  z-index: -1;\\n}\\n.theme-dark .app-description .link:before {\\n  background-image: linear-gradient(to left, #000 50%, rgba(0, 0, 0, 0));\\n}\\n.app-description-text {\\n  display: -webkit-box;\\n  -webkit-line-clamp: 3;\\n  -webkit-box-orient: vertical;\\n  position: relative;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n.app-description-full .app-description-text {\\n  display: block;\\n  animation: app-description-fade-in 600ms;\\n}\\n.app-description-full .link {\\n  display: none;\\n}\\n@keyframes app-description-fade-in {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.app-ratings {\\n  display: flex;\\n  margin-bottom: 0;\\n}\\n.app-ratings-number {\\n  line-height: 1;\\n  text-align: center;\\n  font-weight: bold;\\n  flex-shrink: 0;\\n}\\n.app-ratings-number b,\\n.app-ratings-number span {\\n  display: block;\\n}\\n.app-ratings-number b {\\n  font-size: 60px;\\n  letter-spacing: -0.05em;\\n  font-weight: 800;\\n}\\n.app-ratings-number span {\\n  font-size: 15px;\\n  opacity: 0.55;\\n}\\n.app-ratings-votes {\\n  width: 100%;\\n  flex-shrink: 10;\\n  line-height: 10px;\\n  margin-top: 6px;\\n}\\n.app-ratings-votes i {\\n  font-size: 8px;\\n  opacity: 0.55;\\n}\\n.app-ratings-votes-row {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n.app-ratings-votes-progress {\\n  width: 70%;\\n  height: 2px;\\n  background: rgba(0, 0, 0, 0.17);\\n  border-radius: 2px;\\n  margin-left: 10px;\\n}\\n.app-ratings-votes-progress span {\\n  background: rgba(0, 0, 0, 0.55);\\n  display: block;\\n  height: 2px;\\n  border-radius: 2px;\\n}\\n.theme-dark .app-ratings-votes-progress {\\n  background: rgba(255, 255, 255, 0.17);\\n}\\n.theme-dark .app-ratings-votes-progress span {\\n  background: rgba(255, 255, 255, 0.55);\\n}\\n.app-ratings-votes-total {\\n  text-align: right;\\n  opacity: 0.55;\\n  margin-top: 4px;\\n}\\n.app-reviews {\\n  margin-top: 16px;\\n  scroll-snap-type: x mandatory;\\n  scrollbar-width: none;\\n  display: flex;\\n  overflow: auto;\\n}\\n.app-reviews::-webkit-scrollbar {\\n  display: none;\\n  opacity: 0;\\n}\\n@media (min-width: 768px) {\\n  .app-reviews {\\n    scroll-padding-left: calc(20px + var(--f7-safe-area-left));\\n  }\\n}\\n.app-reviews:after {\\n  content: '';\\n  flex-shrink: 0;\\n  width: 1px;\\n  height: 1px;\\n}\\n.app-reviews .app-review {\\n  border-radius: 10px;\\n  background: var(--f7-block-strong-bg-color);\\n  padding: 16px;\\n  scroll-snap-align: center center;\\n  width: 100%;\\n  max-width: 350px;\\n  margin-right: 10px;\\n  flex-shrink: 0;\\n  box-sizing: border-box;\\n}\\nhtml:not(.theme-dark) .app-reviews .app-review {\\n  background-color: #F2F2F6;\\n}\\n@media (min-width: 768px) {\\n  .app-reviews .app-review {\\n    margin-right: 24px;\\n    scroll-snap-align: start start;\\n  }\\n}\\n.app-reviews .app-review-header {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.app-reviews .app-review-header span:last-child {\\n  opacity: 0.55;\\n}\\n.app-reviews .app-review-header .rating-stars .f7-icons {\\n  font-size: 12px;\\n  color: var(--f7-color-orange);\\n}\\n.app-reviews .app-review-text {\\n  margin-top: 16px;\\n}\\n.app-information-list {\\n  --f7-list-bg-color: transparent;\\n  --f7-list-item-title-text-color: rgba(0, 0, 0, 0.55);\\n  --f7-list-item-after-text-color: #000;\\n}\\n.theme-dark .app-information-list {\\n  --f7-list-item-after-text-color: #fff;\\n  --f7-list-item-title-text-color: rgba(255, 255, 255, 0.55);\\n}\\n.app-information-list .item-link {\\n  --f7-list-item-title-text-color: var(--f7-theme-color);\\n  --f7-list-item-after-text-color: var(--f7-theme-color);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/pages/AppDetails.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/RatingStars.jsx":
/*!****************************************!*\
  !*** ./src/components/RatingStars.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framework7-react */ \"./node_modules/framework7-react/esm/framework7-react.js\");\n\n\n\nvar Rating = function Rating(_ref) {\n  var rating = _ref.rating;\n\n  function icon(n) {\n    if (n <= Math.floor(rating)) return 'star_fill';\n    if (n > Math.ceil(rating)) return 'star';\n    return 'star_lefthalf_fill';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"rating-stars\"\n  }, [1, 2, 3, 4, 5].map(function (n) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      key: n,\n      f7: icon(n)\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\n\n//# sourceURL=webpack:///./src/components/RatingStars.jsx?");

/***/ }),

/***/ "./src/components/ScreenshotThumb.jsx":
/*!********************************************!*\
  !*** ./src/components/ScreenshotThumb.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\n\nvar ScreenshotThumb = function ScreenshotThumb(_ref) {\n  var src = _ref.src,\n      onClick = _ref.onClick,\n      alt = _ref.alt;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      loaded = _useState2[0],\n      setLoaded = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    style: {\n      opacity: loaded ? 1 : 0,\n      transitionDuration: '600ms'\n    },\n    onLoad: function onLoad() {\n      return setLoaded(true);\n    },\n    onClick: onClick,\n    src: src,\n    alt: alt\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScreenshotThumb);\n\n//# sourceURL=webpack:///./src/components/ScreenshotThumb.jsx?");

/***/ }),

/***/ "./src/pages/AppDetails.jsx":
/*!**********************************!*\
  !*** ./src/pages/AppDetails.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framework7-react */ \"./node_modules/framework7-react/esm/framework7-react.js\");\n/* harmony import */ var _components_RatingStars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RatingStars */ \"./src/components/RatingStars.jsx\");\n/* harmony import */ var _components_AppstoreBlockTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppstoreBlockTitle */ \"./src/components/AppstoreBlockTitle.jsx\");\n/* harmony import */ var _components_ScreenshotThumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ScreenshotThumb */ \"./src/components/ScreenshotThumb.jsx\");\n/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/data */ \"./src/js/data.js\");\n/* harmony import */ var _AppDetails_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppDetails.less */ \"./src/pages/AppDetails.less\");\n/* harmony import */ var _AppDetails_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AppDetails_less__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n/* eslint-disable react/no-array-index-key */\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\n/* eslint-disable react/no-danger */\n\n/* eslint-disable react/jsx-one-expression-per-line */\n\n\n\n\n\n\n\n\nfunction getAppById(id) {\n  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_js_data__WEBPACK_IMPORTED_MODULE_7__[\"apps\"]), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_js_data__WEBPACK_IMPORTED_MODULE_7__[\"games\"])).find(function (app) {\n    return app.id === parseInt(id, 10);\n  });\n}\n\nfunction formatDate(date) {\n  var formatter = new Intl.DateTimeFormat('en', {\n    year: 'numeric',\n    month: 'short',\n    day: 'numeric'\n  });\n  return formatter.format(new Date(date));\n}\n\nvar AppDetails = function AppDetails(_ref) {\n  var id = _ref.id,\n      backText = _ref.backText;\n  var app = getAppById(id);\n  var pb = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      showFullDescription = _useState2[0],\n      setShowFullDescription = _useState2[1];\n\n  var ratingVotes = {\n    5: 500,\n    4: 100,\n    3: 80,\n    2: 50,\n    1: 200\n  };\n  var totalVotes = Object.values(ratingVotes).reduce(function (acc, current) {\n    return acc + current;\n  });\n\n  function pageInit() {\n    pb.current = framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"f7\"].photoBrowser.create({\n      photos: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(app.screenshots),\n      toolbar: false,\n      navbarShowCount: false\n    });\n  }\n\n  function pageDestroy() {\n    if (pb.current) pb.current.destroy();\n  }\n\n  function openPhotoBrowser(index) {\n    if (!pb.current) return;\n    pb.current.open(index);\n  }\n\n  function createAppDescription() {\n    return {\n      __html: (app.description || '').replace(/\\n/g, '<br>')\n    };\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], {\n    onPageInit: pageInit,\n    onPageBeforeRemove: pageDestroy\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n    transparent: true,\n    backLink: backText || 'Back',\n    className: \"app-navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-navbar-icon\",\n    slot: \"title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    src: app.icon,\n    alt: app.title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-navbar-button\",\n    slot: \"right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    external: true,\n    target: \"_blank\",\n    href: \"https://apps.apple.com/app/id\".concat(app.id),\n    round: true,\n    fill: true\n  }, \"GET\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block app-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    src: app.icon,\n    alt: app.title,\n    className: \"app-header-icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-title\"\n  }, app.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-subtitle\"\n  }, app.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-actions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    external: true,\n    target: \"_blank\",\n    href: \"https://apps.apple.com/app/id\".concat(app.id),\n    round: true,\n    fill: true\n  }, \"GET\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    iconF7: \"square_arrow_up\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-rating\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-rating-value\"\n  }, app.rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: app.rating\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-header-rating-sub\"\n  }, \"930 Ratings\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block app-screenshots\"\n  }, app.screenshotsThumbs.map(function (screenshot, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ScreenshotThumb__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onClick: function onClick() {\n        return openPhotoBrowser(index);\n      },\n      src: screenshot,\n      key: index,\n      alt: \"Screenshot\"\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block app-description \".concat(showFullDescription ? 'app-description-full' : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-description-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-description-text\",\n    dangerouslySetInnerHTML: createAppDescription()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    onClick: function onClick() {\n      return setShowFullDescription(true);\n    }\n  }, \"more\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppstoreBlockTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Ratings & Reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], null, \"See All\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block app-ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-ratings-number\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, app.rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"out of 5\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-ratings-votes\"\n  }, [5, 4, 3, 2, 1].map(function (rating) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"app-ratings-votes-row\",\n      key: rating\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"app-ratings-votes-stars\"\n    }, Array.from({\n      length: rating\n    }).map(function (el, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n        key: index,\n        f7: \"star_fill\"\n      });\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"app-ratings-votes-progress\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      style: {\n        width: \"\".concat(ratingVotes[rating] / totalVotes * 100, \"%\")\n      }\n    })));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-ratings-votes-total\"\n  }, totalVotes, \" Ratings\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block app-reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"John\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"2d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 5\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"Mike\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"3d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 3\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur laudantium, laborum sunt adipisci magni in doloremque neque error earum fugiat! Nihil molestias rem tenetur laboriosam illo similique nobis adipisci?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"Vladimir\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"3d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 2\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, repudiandae minima? Reprehenderit ab placeat delectus necessitatibus suscipit cumque laborum modi, eaque, a consequuntur, pariatur et itaque. Vitae odio necessitatibus amet.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"Karoly\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"4d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 4\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab ex! Architecto alias delectus, optio eos nostrum obcaecati repellat distinctio, ab, quam dolores voluptatem ex inventore facere expedita exercitationem repudiandae?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"Peter\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"4d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 5\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo odit exercitationem eligendi maiores rerum quo, quos ullam quam! Quia facilis consequatur vitae cupiditate molestias maiores odit magnam quo itaque.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"b\", null, \"Alim\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"5d ago\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RatingStars__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: 1\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"johndoe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"app-review-text\"\n  }, \"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa accusantium qui praesentium, obcaecati quae illum, tempora molestias similique nihil sunt in tempore ipsam laborum illo maxime amet quos consectetur!\"))), app.versions && app.versions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppstoreBlockTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"What's New\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n    className: \"display-flex justify-content-space-between\",\n    style: {\n      opacity: 0.55\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, \"Version \", app.versions[app.versions.length - 1].version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, formatDate(app.versions[app.versions.length - 1].release_date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", null, app.versions[app.versions.length - 1].release_notes || ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppstoreBlockTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Information\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"List\"], {\n    noHairlines: true,\n    noChevron: true,\n    className: \"safe-areas-inset app-information-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Provider\",\n    after: app.developer.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Size\",\n    after: \"\".concat(Math.floor(app.size / 1000000), \" MB\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Compatibility\",\n    after: \"Works on this iPhone\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Languages\",\n    after: \"English\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Age Rating\",\n    after: \"12+\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"In-App Purchases\",\n    after: \"Yes\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    title: \"Copyright\",\n    after: \"\\xA9 \".concat(app.developer.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    link: \"https://apps.apple.com/developer/id\".concat(app.developer.id),\n    external: true,\n    target: \"_blank\",\n    title: \"Developer Website\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n    slot: \"after\",\n    f7: \"compass\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n    link: \"https://apps.apple.com/developer/id\".concat(app.developer.id),\n    external: true,\n    target: \"_blank\",\n    title: \"Privacy Policy\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n    slot: \"after\",\n    f7: \"hand_raised_fill\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppDetails);\n\n//# sourceURL=webpack:///./src/pages/AppDetails.jsx?");

/***/ }),

/***/ "./src/pages/AppDetails.less":
/*!***********************************!*\
  !*** ./src/pages/AppDetails.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./AppDetails.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/AppDetails.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./AppDetails.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/AppDetails.less\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!./AppDetails.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/pages/AppDetails.less\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/pages/AppDetails.less?");

/***/ })

}]);