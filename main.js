/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Thin.ttf */ "./src/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nbody\n    content\n        header\n        body\n            infoTab\n                Home (info-tab-button)\n                Today \n                Week\n                Projects title (h2)\n                projects (current-projects)\n                    name (p)\n                    close-button\n                add project\n            mainBody\n                inboxTitle\n                inboxList (inbox-list)\n                    (list-item)\n                    itemTitle\n                    itemDate\n                    editButton\n                    deleteButton\n                addTaskButton\n\n        footer\n\n*/\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf') ;\n}\n* {\n    font-family: Roboto, Geneva, Tahoma, sans-serif;\n}\nbody {\n    background-color: rgb(235, 235, 229);\n    overflow: auto;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nheader {\n    display: flex;\n    width: 100vw;\n    height:12vh;\n    background-color: rgb(39, 37, 37);\n    color: white;\n    align-items: center;\n}\n\nheader img {\n    width: 100px;\n    color: white;\n    margin-left: 20px;\n}\n\nheader h1 {\n    margin-left: 20px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;\n    font-weight: 500;\n    font-size: 40px;\n}\n\n#body {\n    display: flex;\n    flex-direction: row;\n    height:88vh ;\n}\n\n#info-tab {\n    display: flex;\n    flex-direction: column;\n    padding-left: 30px;\n    padding-top: 20px;\n    padding-right: 20px;\n    background-color: rgb(219, 218, 218);\n    width: 15vw;\n    height:100%;\n    overflow: auto;\n}\n\n#home-button {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    margin:0;\n}\n\n#home-button img {\n    height:30px;\n}\n\n#home-button p {\n    margin-left: 5px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n}\n\n\n#home-button:hover {\n    background-color: rgb(204, 204, 204);\n\n}\n\n.clicked {\n    background-color: rgb(204, 204, 204) !important;\n}\n\n\n#home-button img {\n    width: 30px;\n}\n\n#Home {\n    background: none;\n    border-style: none;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#info-tab h2 {\n    font-weight: 900;\n    \n}\n\n#current-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    border-style:none;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    align-items: center;\n}\n\n.project:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.project p {\n    max-width: 400px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    hyphens: auto;\n}\n\n.close-button {\n    height:30px;\n    width: 30px;\n\n}\n\n.add-project-button {\n    margin-top: 10px;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n}\n\n.add-project-button:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.add-project-form {\n    margin-top: 10px;\n    height:45.66px;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    \n}\n\n.add-project-form input {\n    width:200px;\n    height:30.66px;\n    margin-right: auto;\n    border-radius: 5px;\n}\n\n.add-project-form img {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n}\n\n.add-project-form img:hover {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n    background-color: rgb(204, 204, 204);\n    border-radius: 5px;\n}\n\n\n\n\n\n#main-body {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    align-items: center;\n    overflow:auto;\n}\n\n.head-container{\n    display: flex;\n    align-items: center;\n    width: 500px;\n    \n    justify-content: end;\n}\n\n.head-container h2 {\n    margin-right: auto;\n    font-size: 40px;\n    max-width: 360px;\n    overflow:auto;\n\n}\n\n#main-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.list-item {\n    display: flex;\n    width:500px;\n    align-items: center;\n    justify-content: end;\n}\n\n.item-title {\n    margin-right: auto;\n    margin-left: 20px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    hyphens: auto;\n    max-width: 200px;\n}\n\n.item-date {\n    margin-right: 20px;\n}\n\n.title-edit-form {\n    margin-right: auto;\n    margin-left: 20px;\n}\n\n.add-task-button {\n    margin-top: 10px;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    width: 500px;\n}\n\n\n.add-task-button:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.add-task-form {\n    margin-top: 10px;\n    display:flex;\n    justify-content: end;\n    align-items: end;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    width: 500px;\n    height:30px;\n}\n\n.add-task-form input[type=date] {\n    margin-right: auto;\n}\n\n.add-task-form img {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n}\n\n.footer {\n    position: static;\n    text-align: center;\n    padding:0;\n    margin:0;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\nbody\n    content\n        header\n        body\n            infoTab\n                Home (info-tab-button)\n                Today \n                Week\n                Projects title (h2)\n                projects (current-projects)\n                    name (p)\n                    close-button\n                add project\n            mainBody\n                inboxTitle\n                inboxList (inbox-list)\n                    (list-item)\n                    itemTitle\n                    itemDate\n                    editButton\n                    deleteButton\n                addTaskButton\n\n        footer\n\n*/\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto-Thin.ttf') format('ttf') ;\n}\n* {\n    font-family: Roboto, Geneva, Tahoma, sans-serif;\n}\nbody {\n    background-color: rgb(235, 235, 229);\n    overflow: auto;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nheader {\n    display: flex;\n    width: 100vw;\n    height:12vh;\n    background-color: rgb(39, 37, 37);\n    color: white;\n    align-items: center;\n}\n\nheader img {\n    width: 100px;\n    color: white;\n    margin-left: 20px;\n}\n\nheader h1 {\n    margin-left: 20px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;\n    font-weight: 500;\n    font-size: 40px;\n}\n\n#body {\n    display: flex;\n    flex-direction: row;\n    height:88vh ;\n}\n\n#info-tab {\n    display: flex;\n    flex-direction: column;\n    padding-left: 30px;\n    padding-top: 20px;\n    padding-right: 20px;\n    background-color: rgb(219, 218, 218);\n    width: 15vw;\n    height:100%;\n    overflow: auto;\n}\n\n#home-button {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    margin:0;\n}\n\n#home-button img {\n    height:30px;\n}\n\n#home-button p {\n    margin-left: 5px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n}\n\n\n#home-button:hover {\n    background-color: rgb(204, 204, 204);\n\n}\n\n.clicked {\n    background-color: rgb(204, 204, 204) !important;\n}\n\n\n#home-button img {\n    width: 30px;\n}\n\n#Home {\n    background: none;\n    border-style: none;\n    font-size: 15px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#info-tab h2 {\n    font-weight: 900;\n    \n}\n\n#current-projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    border-style:none;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    align-items: center;\n}\n\n.project:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.project p {\n    max-width: 400px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    hyphens: auto;\n}\n\n.close-button {\n    height:30px;\n    width: 30px;\n\n}\n\n.add-project-button {\n    margin-top: 10px;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n}\n\n.add-project-button:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.add-project-form {\n    margin-top: 10px;\n    height:45.66px;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    \n}\n\n.add-project-form input {\n    width:200px;\n    height:30.66px;\n    margin-right: auto;\n    border-radius: 5px;\n}\n\n.add-project-form img {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n}\n\n.add-project-form img:hover {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n    background-color: rgb(204, 204, 204);\n    border-radius: 5px;\n}\n\n\n\n\n\n#main-body {\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    align-items: center;\n    overflow:auto;\n}\n\n.head-container{\n    display: flex;\n    align-items: center;\n    width: 500px;\n    \n    justify-content: end;\n}\n\n.head-container h2 {\n    margin-right: auto;\n    font-size: 40px;\n    max-width: 360px;\n    overflow:auto;\n\n}\n\n#main-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.list-item {\n    display: flex;\n    width:500px;\n    align-items: center;\n    justify-content: end;\n}\n\n.item-title {\n    margin-right: auto;\n    margin-left: 20px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    hyphens: auto;\n    max-width: 200px;\n}\n\n.item-date {\n    margin-right: 20px;\n}\n\n.title-edit-form {\n    margin-right: auto;\n    margin-left: 20px;\n}\n\n.add-task-button {\n    margin-top: 10px;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    width: 500px;\n}\n\n\n.add-task-button:hover {\n    background-color: rgb(204, 204, 204);\n}\n\n.add-task-form {\n    margin-top: 10px;\n    display:flex;\n    justify-content: end;\n    align-items: end;\n    background:none;\n    border-style: none;\n    border-radius: 5px;\n    width: 500px;\n    height:30px;\n}\n\n.add-task-form input[type=date] {\n    margin-right: auto;\n}\n\n.add-task-form img {\n    height:24px;\n    width: 24px;\n    margin-right: 10px;\n}\n\n.footer {\n    position: static;\n    text-align: center;\n    padding:0;\n    margin:0;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCurrentProjects": () => (/* binding */ createCurrentProjects),
/* harmony export */   "current": () => (/* binding */ current),
/* harmony export */   "getMainBody": () => (/* binding */ getMainBody),
/* harmony export */   "createMainList": () => (/* binding */ createMainList)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _headerIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerIcon.svg */ "./src/headerIcon.svg");
/* harmony import */ var _homeIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeIcon.svg */ "./src/homeIcon.svg");
/* harmony import */ var _clearIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearIcon.svg */ "./src/clearIcon.svg");
/* harmony import */ var _addIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addIcon.svg */ "./src/addIcon.svg");
/* harmony import */ var _radioIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radioIcon.svg */ "./src/radioIcon.svg");
/* harmony import */ var _EventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventHandler.js */ "./src/EventHandler.js");









let current = (() => {

    let currentProjectSelected = "Home";

    let returnCurrent = () => {
        return currentProjectSelected;
    }

    let setCurrent = (currentName) => {
        currentProjectSelected = currentName;
    }

    return { returnCurrent, setCurrent };
})();

function initializeSite() {

    
    let body = document.querySelector("body");
    let content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    DOMSkeleton();

}

function DOMSkeleton() {

    //create header DOM
    createHeader();
    createColumnBody();
    createFooter();




}

function createHeader() {
    let content = document.querySelector("#content");

    let header = document.createElement("header");

    let icon = new Image();
    icon.src = _headerIcon_svg__WEBPACK_IMPORTED_MODULE_2__;
    let titleElement = document.createElement("h1");
    titleElement.innerHTML = "Check-list";
    header.appendChild(icon);
    header.appendChild(titleElement);

    content.appendChild(header);

}

function createColumnBody() {
    let content = document.querySelector("#content");

    let body = document.createElement("div");
    body.id = "body";

    //must append mainbody first
    let infoTab = document.createElement("div");
    infoTab.id = "info-tab";

    let mainBody = document.createElement("div");
    mainBody.id = "main-body";

    body.appendChild(infoTab);
    body.appendChild(mainBody);
    content.appendChild(body);

    createInfoTab();
    getMainBody();


}

function createInfoTab() {


    let infoTab = document.querySelector("#info-tab");

    
    let homeButton = document.createElement("button");
    homeButton.id = "home-button";

    let iconHome = new Image();
    iconHome.src = _homeIcon_svg__WEBPACK_IMPORTED_MODULE_3__;
    
    let optionButton = document.createElement("p");
    optionButton.className = "info-tab-button";
    optionButton.innerHTML = "Home";
    optionButton.id = "Home";

    homeButton.appendChild(iconHome);
    homeButton.appendChild(optionButton)
    infoTab.appendChild(homeButton);


    let projectTitle = document.createElement("h2");
    projectTitle.innerHTML = "Projects";

    //for projects in the localstorage, here we want to create options for them
    let currentProjects = document.createElement("div");
    currentProjects.id = "current-projects";

    let addProjectButton = document.createElement("button");
    addProjectButton.className = "add-project-button";

    let addProjectIcon = new Image();
    addProjectIcon.src = _addIcon_svg__WEBPACK_IMPORTED_MODULE_5__;
    let addProjectText = document.createElement("p");
    addProjectText.innerHTML = "Add Project"
    addProjectButton.appendChild(addProjectIcon);
    addProjectButton.appendChild(addProjectText);

    infoTab.appendChild(projectTitle);
    infoTab.appendChild(currentProjects);
    infoTab.appendChild(addProjectButton);


    createCurrentProjects();

}

function createCurrentProjects() {
    //get all current projects, then for each create an element and append oto thing

    let currentProjects = document.getElementById("current-projects");
    let index = 0;
    while (currentProjects.firstChild) {
        currentProjects.removeChild(currentProjects.firstChild);
    }
    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectList().forEach(element => {
        let project = document.createElement("div");
        project.className = "project";
        project.id = index + "p";

        let name = document.createElement("p");
        name.innerHTML = element.getProjectTitle();

        let closeButton = new Image();
        closeButton.src = _clearIcon_svg__WEBPACK_IMPORTED_MODULE_4__;
        closeButton.className = "close-button";
        closeButton.style.opacity = "0";

        closeButton.onmouseover = () => {
            closeButton.style.opacity = "1";
        }
        closeButton.onmouseleave = () => {
            closeButton.style.opacity = "0";
        }

        closeButton.onclick = () => {

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(project.id.slice(0,-1)).getTodoList().forEach(element => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").removeTodo(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().indexOf(element));
            })

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.removeProject(project.id.slice(0,-1));
            //current.setCurrent("Home");
            let mainBody = document.querySelector("#main-body");

            while (mainBody.firstChild) {
                mainBody.removeChild(mainBody.firstChild);
            }
            createCurrentProjects();


        }

        index++;


        project.appendChild(name);
        project.appendChild(closeButton);
        currentProjects.appendChild(project);

    });


}



function getMainBody() {
    let mainBody = document.querySelector("#main-body");

    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }

    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(current.returnCurrent());

    if (currentProject === undefined) {
        currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent());
    }


    let headContainer = document.createElement("div");
    headContainer.className = "head-container";

    let mainTitle = document.createElement("h2");

    mainTitle.innerHTML = currentProject.getProjectTitle();
    let label = document.createElement("label");
    label.innerHTML = "Sort By Date";
    let sortInput = document.createElement("input");
    sortInput.setAttribute("type", "checkbox");

    sortInput.onchange = (e) => {
        if (e.target.checked) {
            if (current.returnCurrent() == "Home") {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").sortArray();
            }
            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).sortArray();
            }
        }
        else {
            if (current.returnCurrent() == "Home") {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").unsortArray();
            }
            else {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).unsortArray();
            }
        }
        createMainList();
    }

    headContainer.appendChild(mainTitle);
    headContainer.appendChild(label);
    headContainer.appendChild(sortInput);

    let mainList = document.createElement("div");
    mainList.id = "main-list";

    let addTaskButton = document.createElement("div");

    let plusIcon = new Image();
    plusIcon.src = _addIcon_svg__WEBPACK_IMPORTED_MODULE_5__;
    let addDescription = document.createElement("p");
    addDescription.innerHTML = "Add Task";
    addTaskButton.className = "add-task-button";
    addTaskButton.appendChild(plusIcon);
    addTaskButton.appendChild(addDescription);
    mainBody.appendChild(headContainer);
    mainBody.appendChild(mainList);
    mainBody.appendChild(addTaskButton);
    // if (current.returnCurrent() == "Today" || current.returnCurrent() == "Month") {
    //     addTaskButton.style.display = "none";
    // }

    createMainList();



}

function createMainList() {
    //get all possible todos, then simply list them
    let mainList = document.querySelector("#main-list");

    while (mainList.firstChild) {
        mainList.removeChild(mainList.firstChild);
    }

    let index = 0;

    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(current.returnCurrent());
    if (currentProject === undefined) {
        currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent());
    }
    currentProject.getTodoList().forEach(element => {
        let listItem = createListItem(element);
        listItem.className = "list-item";
        listItem.id = index;
        index++;
        mainList.appendChild(listItem);
    });

    

}


function createListItem(todoItem) {
    let listItem = document.createElement("div");

    let iconRadio = new Image();
    iconRadio.src = _radioIcon_svg__WEBPACK_IMPORTED_MODULE_6__;
    iconRadio.className = "radio-icon";

    let itemTitle = document.createElement("p");
    itemTitle.className = "item-title";
    itemTitle.innerHTML = todoItem.getTitle();

    let itemDate = document.createElement("p");
    itemDate.className = "item-date";

    itemDate.innerHTML = todoItem.getDueDate().toString().substring(0, 15);

    // let editButton = document.createElement("button");
    // editButton.innerHTML = "edit";

    let deleteButton = new Image();
    deleteButton.src = _clearIcon_svg__WEBPACK_IMPORTED_MODULE_4__;
    deleteButton.className = "list-delete-button";

    deleteButton.style.opacity = "0";

    deleteButton.onmouseover = () => {
        deleteButton.style.opacity = "1";
        }
        deleteButton.onmouseleave = () => {
            deleteButton.style.opacity = "0";
        }

    listItem.appendChild(iconRadio);

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDate);
    //listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);


    deleteButton.onclick = () => {
        
        if (current.returnCurrent() == "Home") {
            let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription());
            let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
            
            if( homeProject.returnIsSorted()) {
                homeProject.unsortArray();
                homeProject.removeTodo( homeProject.getTodoList().indexOf(todoItem));
                homeProject.sortArray();
            }
            else {
                homeProject.removeTodo( homeProject.getTodoList().indexOf(todoItem));

            }
            if (todoItem.getDescription() != "Home") {
                currentProject.getTodoList().forEach(element => {
                    if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                        currentProject.removeTodo(currentProject.getTodoList().indexOf(element));
                    }
                });
            }

            
        }
        else {
            let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent());
            let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");

            if (currentProject.returnIsSorted()) {
                currentProject.unsortArray();
                currentProject.removeTodo(currentProject.getTodoList().indexOf(todoItem));
                currentProject.sortArray();
            }
            else {
                currentProject.removeTodo(currentProject.getTodoList().indexOf(todoItem));

            }
            homeProject.getTodoList().forEach(element => {
                if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                    
                    homeProject.removeTodo(homeProject.getTodoList().indexOf(element));
                }
            })

            

        }
        createMainList();
    }

    // itemTitle.addEventListener("click", function(e, todoItem) {
    //     addEditForm(e, todoItem)
    // });
    itemTitle.onclick = (e) => {


        let editForm = document.createElement("input");
        editForm.className = "title-edit-form";
        editForm.setAttribute("type", "text");
        editForm.value = todoItem.getTitle();

        itemTitle.replaceWith(editForm);
        e.stopPropagation();
        window.onclick = (e) => {
            e.stopPropagation();
            if (e.target != editForm) {
                todoItem.setTitle(editForm.value);

                if (current.returnCurrent() == "Home" && todoItem.getDescription() == "Home") {

                }
                else if (current.returnCurrent() != "Home") {
                    let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf(todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription());
                    let currentIndex = currentProject.getTodoList().indexOf(todoItem);
                    currentProject.getTodoList().splice(currentIndex, 1, todoItem);
                }
                createMainList();
            }
        }

    }

    itemDate.onclick = (e) => {
        let editDateForm = document.createElement("input");
        editDateForm.setAttribute("type", "date");

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy + '-' + mm + '-' + dd;
        editDateForm.setAttribute("min", today);

        itemDate.replaceWith(editDateForm);
        e.stopPropagation();
        window.onclick = (e) => {
            e.stopPropagation();
            if (e.target != editDateForm) {
                if ( current.returnCurrent() == "Home" && _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").returnIsSorted() ) {
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").unsortArray();
                    todoItem.setDueDate(editDateForm.value);
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").sortArray();
                }
                else if ( current.returnCurrent() != "Home" && _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).returnIsSorted()){
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).unsortArray();
                    todoItem.setDueDate(editDateForm.value);
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).sortArray();
                }
                else {
                    todoItem.setDueDate(editDateForm.value);

                }

                if (current.returnCurrent() == "Home" && todoItem.getDescription() == "Home") {

                }
                else if (current.returnCurrent() != "Home") {
                    let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf(todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription());
                    let currentIndex = currentProject.getTodoList().indexOf(todoItem);
                    currentProject.getTodoList().splice(currentIndex, 1, todoItem);
                }


                
                createMainList();
            }
        }
    }

    return listItem;
}



function createFooter() {

    let content = document.querySelector("#content");

    //e = "footer";
    let footerDescription = document.createElement("p");
    footerDescription.innerHTML = "Created By Seulchan Han";
    footerDescription.className = "footer";
    //footer.appendChild(footerDescription);

    content.appendChild(footerDescription);
}


initializeSite();



(0,_EventHandler_js__WEBPACK_IMPORTED_MODULE_7__.initializeEventHandlers)();

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeEventHandlers": () => (/* binding */ initializeEventHandlers),
/* harmony export */   "addTaskEvent": () => (/* binding */ addTaskEvent)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _clearIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearIcon.svg */ "./src/clearIcon.svg");
/* harmony import */ var _addIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addIcon.svg */ "./src/addIcon.svg");







function addTaskClicked() {
    let addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.style.display = "none";

    let mainBody = document.querySelector("#main-body");

    let addTaskForm = document.createElement("div");
    addTaskForm.className = "add-task-form";

    let inputTaskName = document.createElement("input");
    inputTaskName.required = true;
    inputTaskName.setAttribute("placeholder", "untitled");
    inputTaskName.setAttribute("name", "task-name");
    inputTaskName.setAttribute("type", "text");

    let inputDescription = _DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent();
    let datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    datePicker.setAttribute("min", today);
    datePicker.setAttribute("name", "task-date-picker");
    // let currentDate = new Date();
    // datePicker.value = currentDate;

    let addButton = new Image();
    addButton.src = _addIcon_svg__WEBPACK_IMPORTED_MODULE_3__;
    addButton.className = "add-button";

    let cancelButton = new Image();
    cancelButton.src = _clearIcon_svg__WEBPACK_IMPORTED_MODULE_2__;
    cancelButton.className = "clear-button";

    addTaskForm.appendChild(inputTaskName);
    addTaskForm.appendChild(datePicker);
    addTaskForm.appendChild(addButton);
    addTaskForm.appendChild(cancelButton);
    mainBody.appendChild(addTaskForm);

    cancelButton.onclick = () => {
        mainBody.removeChild(mainBody.lastChild);
        addTaskButton.style.display = "flex";
    }

    addButton.onclick = () => {
        let currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        if (currentProject === undefined) {
            currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        }
        

        if (inputTaskName.value == "") {
            inputTaskName.value = "untitled";
        }
        if (_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent() != "Home") {
            _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getHomeProject().addTodo(inputTaskName.value, datePicker.value, inputDescription);
        }

        currentProject.addTodo(inputTaskName.value, datePicker.value, inputDescription);

        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.createMainList)();
        mainBody.removeChild(mainBody.lastChild);
        addTaskButton.style.display = "flex";
    }

}

function addProjectClicked() {
    let addProjectButton = document.querySelector(".add-project-button");
    addProjectButton.style.display = "none";

    let infoTab = document.querySelector("#info-tab");

    let addProjectForm = document.createElement("div");
    addProjectForm.className = "add-project-form";

    let inputText = document.createElement("input");
    inputText.required = true;
    inputText.setAttribute("placeholder", "untitled");
    inputText.setAttribute("name", "project-name");
    inputText.setAttribute("type", "text");

    let addButton = new Image();
    addButton.src = _addIcon_svg__WEBPACK_IMPORTED_MODULE_3__;
    addButton.className = "add-button";

    let cancelButton = new Image();
    cancelButton.src = _clearIcon_svg__WEBPACK_IMPORTED_MODULE_2__;
    cancelButton.className = "clear-button";

    addProjectForm.appendChild(inputText);
    addProjectForm.appendChild(addButton);
    addProjectForm.appendChild(cancelButton);

    infoTab.appendChild(addProjectForm);

    cancelButton.onclick = () => {
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "flex";
    }

    addButton.onclick = () => {

        _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(inputText.value);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.createCurrentProjects)();
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "flex";
        addProjectListEvent();
    }

}

function changeCurrentProject(index) {
    let currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(index.slice(0,-1));

    let projectButtons = Array.from(document.querySelectorAll(".project"));
        projectButtons.forEach(element => {
            element.classList.remove("clicked");
    });
    //console.log(index.slice(0,-1));
    let selectedProject = document.getElementById(index);
    selectedProject.classList.add("clicked");
    let homeButton = document.querySelector("#home-button");
    homeButton.classList.remove("clicked");
    if (currentProject.returnIsSorted()) {
        currentProject.unsortArray();
    }


    _DOM__WEBPACK_IMPORTED_MODULE_1__.current.setCurrent(index.slice(0,-1));
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.getMainBody)();
    addTaskEvent();

}

function initializeEventHandlers() {
    addProjectEvent();
    addTaskEvent();
    addOptionsEvent();
    addProjectListEvent();
}

function addProjectEvent() {
    let addProjectButton = document.querySelector(".add-project-button");

    addProjectButton.addEventListener('click', addProjectClicked);


}

function addTaskEvent() {
    let addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", addTaskClicked);
}

function addOptionsEvent() {
    let homeButton = document.querySelector("#home-button");

    homeButton.onclick = () => {
        _DOM__WEBPACK_IMPORTED_MODULE_1__.current.setCurrent("Home");
        let projectButtons = Array.from(document.querySelectorAll(".project"));
        projectButtons.forEach(element => {
            element.classList.remove("clicked");
        });
        homeButton.classList.add("clicked");
        let currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
        if (currentProject.returnIsSorted()) {
            currentProject.unsortArray();
        }
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.getMainBody)();
        addTaskEvent();
    }


    // arrayOptions.forEach(element => {
    //     element.onclick = () => {
    //         current.setCurrent(element.id); 
    //         let currentProject = projectList.getProject("Home");
    //         if (currentProject.returnIsSorted()){
    //         currentProject.unsortArray();
    // }
    //         getMainBody();
    //         addTaskEvent();
    //     }
    // });
}

function addProjectListEvent() {
    let projectList = Array.from(document.querySelectorAll(".project"));
    console.log(projectList);
    projectList.forEach(element => {
        element.addEventListener('click', e => {
            console.log(345345);
            changeCurrentProject(element.id);
            
        })
    })

    

}


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });



class Project {

    constructor(todoArray = [], projectTitle = "untitled") {
        this.todoArray = todoArray;
        this.projectTitle = projectTitle;
        this.storedArray = [];
        this.isSorted = false;
    }

    addTodo(todoTitle, dueDate, description) {
        let newDate = new Date(dueDate.replace(/-/g, '\/'));
        
        if (newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        if (this.isSorted) {
            this.unsortArray();
            this.todoArray.push(new Todo(todoTitle, newDate, description));
            this.sortArray();
        }
        else {
            this.todoArray.push(new Todo(todoTitle, newDate, description));
        }


    }

    removeTodo(index) {

        this.todoArray.splice(index, 1);


    }

    getTodoList() {
        return this.todoArray;
    }

    getProjectTitle() {
        return this.projectTitle;
    }

    sortArray() {
        let otherArray = [...this.todoArray];
        otherArray.sort(function (a, b) {
            return a.getDueDate() - b.getDueDate();
        })

        this.storedArray = [...this.todoArray];
        this.todoArray = otherArray;
        this.isSorted = true;
    }

    unsortArray() {
        this.todoArray = this.storedArray;
        this.isSorted = false;
    }

    returnIsSorted() {
        return this.isSorted;
    }

}

class Todo {
    constructor(todoTitle = "untitled", dueDate = new Date(), description = "Home") {
        this.todoTitle = todoTitle;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTitle(title) {
        this.todoTitle = title;
    }

    setDueDate(date) {
        let newDate = new Date(date.replace(/-/g, '\/'));
        if (newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        this.dueDate = newDate;
    }

    setDescription(phrase) {
        this.description = phrase;
    }

    getTitle() {
        return this.todoTitle;
    }

    getDueDate() {
        return this.dueDate;
    }

    getDescription() {
        return this.description;
    }
}


let projectList = (() => {
    let home = new Project([new Todo("Sample Task", new Date(), "Home")], "Home");
    let projectArray = [new Project([], "Sample Project")];


    let addProject = (projectName) => {
        if (projectName == '') {
            projectArray.push(new Project([], "untitled"));

        }
        else {
            projectArray.push(new Project([], projectName));

        }
    }

    let removeProject = (index) => {
        projectArray.splice(index, 1);


    }

    let getProjectList = () => {
        return projectArray;
    }

    let getProject = (projectName) => {
        if (projectName == "Home") {
            return home;
        }
        else {
            projectArray.forEach(element => {
                if (element.getProjectTitle() == projectName) {
                    return element;
                }
            });

        }
    }

    let getProjectByIndex = (index) => {
        return projectArray[index];
    }

    let getHomeProject = () => {
        return home;
    }





    return { getHomeProject, addProject, removeProject, getProjectList, getProject, getProjectByIndex };
})();





/***/ }),

/***/ "./src/Roboto-Thin.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Thin.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1711b41f3ae4cb322eea.ttf";

/***/ }),

/***/ "./src/addIcon.svg":
/*!*************************!*\
  !*** ./src/addIcon.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376e9b6a44e5b3142f12.svg";

/***/ }),

/***/ "./src/clearIcon.svg":
/*!***************************!*\
  !*** ./src/clearIcon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244b66874c46718f7e06.svg";

/***/ }),

/***/ "./src/headerIcon.svg":
/*!****************************!*\
  !*** ./src/headerIcon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c89d95bce7822bbba55b.svg";

/***/ }),

/***/ "./src/homeIcon.svg":
/*!**************************!*\
  !*** ./src/homeIcon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c1b0a7e81b8c3fa5b5.svg";

/***/ }),

/***/ "./src/radioIcon.svg":
/*!***************************!*\
  !*** ./src/radioIcon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c17813b3df6e6930c708.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSx3ckJBQXdyQiw0QkFBNEIsMEVBQTBFLEdBQUcsS0FBSyxzREFBc0QsR0FBRyxRQUFRLDJDQUEyQyxxQkFBcUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsNkJBQTZCLEdBQUcsWUFBWSxvQkFBb0IsbUJBQW1CLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDBCQUEwQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLG1FQUFtRSx1QkFBdUIsc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsMEJBQTBCLG1CQUFtQixHQUFHLGVBQWUsb0JBQW9CLDZCQUE2Qix5QkFBeUIsd0JBQXdCLDBCQUEwQiwyQ0FBMkMsa0JBQWtCLGtCQUFrQixxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQiw2QkFBNkIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsZUFBZSxHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyxvQkFBb0IsdUJBQXVCLHlCQUF5QixvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLDBCQUEwQiwyQ0FBMkMsS0FBSyxjQUFjLHNEQUFzRCxHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxXQUFXLHVCQUF1Qix5QkFBeUIsc0JBQXNCLGdEQUFnRCxHQUFHLGtCQUFrQix1QkFBdUIsU0FBUyx1QkFBdUIsb0JBQW9CLDZCQUE2QixHQUFHLGNBQWMsb0JBQW9CLHFDQUFxQyx3QkFBd0IseUJBQXlCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLEdBQUcsb0JBQW9CLDJDQUEyQyxHQUFHLGdCQUFnQix1QkFBdUIsZ0NBQWdDLDRCQUE0QixvQkFBb0IsR0FBRyxtQkFBbUIsa0JBQWtCLGtCQUFrQixLQUFLLHlCQUF5Qix1QkFBdUIsbUJBQW1CLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsR0FBRywrQkFBK0IsMkNBQTJDLEdBQUcsdUJBQXVCLHVCQUF1QixxQkFBcUIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsU0FBUyw2QkFBNkIsa0JBQWtCLHFCQUFxQix5QkFBeUIseUJBQXlCLEdBQUcsMkJBQTJCLGtCQUFrQixrQkFBa0IseUJBQXlCLEdBQUcsaUNBQWlDLGtCQUFrQixrQkFBa0IseUJBQXlCLDJDQUEyQyx5QkFBeUIsR0FBRyx3QkFBd0Isb0JBQW9CLDZCQUE2QixrQkFBa0IsMEJBQTBCLG9CQUFvQixHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLG1CQUFtQixpQ0FBaUMsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQix1QkFBdUIsb0JBQW9CLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsR0FBRyxnQkFBZ0Isb0JBQW9CLGtCQUFrQiwwQkFBMEIsMkJBQTJCLEdBQUcsaUJBQWlCLHlCQUF5Qix3QkFBd0IsZ0NBQWdDLDRCQUE0QixvQkFBb0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLHNCQUFzQix5QkFBeUIsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixtQkFBbUIsNkJBQTZCLDBCQUEwQixzQkFBc0IseUJBQXlCLHlCQUF5QixtQkFBbUIsR0FBRyw4QkFBOEIsMkNBQTJDLEdBQUcsb0JBQW9CLHVCQUF1QixtQkFBbUIsMkJBQTJCLHVCQUF1QixzQkFBc0IseUJBQXlCLHlCQUF5QixtQkFBbUIsa0JBQWtCLEdBQUcscUNBQXFDLHlCQUF5QixHQUFHLHdCQUF3QixrQkFBa0Isa0JBQWtCLHlCQUF5QixHQUFHLGFBQWEsdUJBQXVCLHlCQUF5QixnQkFBZ0IsZUFBZSxLQUFLLE9BQU8seUdBQXlHLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFB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LENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5ib2R5XFxuICAgIGNvbnRlbnRcXG4gICAgICAgIGhlYWRlclxcbiAgICAgICAgYm9keVxcbiAgICAgICAgICAgIGluZm9UYWJcXG4gICAgICAgICAgICAgICAgSG9tZSAoaW5mby10YWItYnV0dG9uKVxcbiAgICAgICAgICAgICAgICBUb2RheSBcXG4gICAgICAgICAgICAgICAgV2Vla1xcbiAgICAgICAgICAgICAgICBQcm9qZWN0cyB0aXRsZSAoaDIpXFxuICAgICAgICAgICAgICAgIHByb2plY3RzIChjdXJyZW50LXByb2plY3RzKVxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAocClcXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlLWJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGQgcHJvamVjdFxcbiAgICAgICAgICAgIG1haW5Cb2R5XFxuICAgICAgICAgICAgICAgIGluYm94VGl0bGVcXG4gICAgICAgICAgICAgICAgaW5ib3hMaXN0IChpbmJveC1saXN0KVxcbiAgICAgICAgICAgICAgICAgICAgKGxpc3QtaXRlbSlcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGVcXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0dG9uXFxuXFxuICAgICAgICBmb290ZXJcXG5cXG4qL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpIDtcXG59XFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMjkpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDoxMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM3LCAzNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDo4OHZoIDtcXG59XFxuXFxuI2luZm8tdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE4LCAyMTgpO1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jaG9tZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuI2hvbWUtYnV0dG9uIGltZyB7XFxuICAgIGhlaWdodDozMHB4O1xcbn1cXG5cXG4jaG9tZS1idXR0b24gcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5cXG4jaG9tZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuXFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbiNob21lLWJ1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI0hvbWUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNpbmZvLXRhYiBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIFxcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItc3R5bGU6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4ucHJvamVjdCBwIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcblxcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGhlaWdodDo0NS42NnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgXFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGhlaWdodDozMC42NnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gaW1nIHtcXG4gICAgaGVpZ2h0OjI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGltZzpob3ZlciB7XFxuICAgIGhlaWdodDoyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI21haW4tYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4uaGVhZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uaGVhZC1jb250YWluZXIgaDIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG59XFxuXFxuI21haW4tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDo1MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGl0bGUtZWRpdC1mb3JtIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIGltZyB7XFxuICAgIGhlaWdodDoyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBCQzs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQiwyREFBNEM7QUFDaEQ7QUFDQTtJQUNJLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNERBQTREO0lBQzVELGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOzs7Ozs7QUFNQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZOztJQUVaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFROztBQUVaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuYm9keVxcbiAgICBjb250ZW50XFxuICAgICAgICBoZWFkZXJcXG4gICAgICAgIGJvZHlcXG4gICAgICAgICAgICBpbmZvVGFiXFxuICAgICAgICAgICAgICAgIEhvbWUgKGluZm8tdGFiLWJ1dHRvbilcXG4gICAgICAgICAgICAgICAgVG9kYXkgXFxuICAgICAgICAgICAgICAgIFdlZWtcXG4gICAgICAgICAgICAgICAgUHJvamVjdHMgdGl0bGUgKGgyKVxcbiAgICAgICAgICAgICAgICBwcm9qZWN0cyAoY3VycmVudC1wcm9qZWN0cylcXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKHApXFxuICAgICAgICAgICAgICAgICAgICBjbG9zZS1idXR0b25cXG4gICAgICAgICAgICAgICAgYWRkIHByb2plY3RcXG4gICAgICAgICAgICBtYWluQm9keVxcbiAgICAgICAgICAgICAgICBpbmJveFRpdGxlXFxuICAgICAgICAgICAgICAgIGluYm94TGlzdCAoaW5ib3gtbGlzdClcXG4gICAgICAgICAgICAgICAgICAgIChsaXN0LWl0ZW0pXFxuICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGVcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRlXFxuICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25cXG4gICAgICAgICAgICAgICAgYWRkVGFza0J1dHRvblxcblxcbiAgICAgICAgZm9vdGVyXFxuXFxuKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3R0ZicpIDtcXG59XFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMjkpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDoxMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM3LCAzNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDo4OHZoIDtcXG59XFxuXFxuI2luZm8tdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE4LCAyMTgpO1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jaG9tZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuI2hvbWUtYnV0dG9uIGltZyB7XFxuICAgIGhlaWdodDozMHB4O1xcbn1cXG5cXG4jaG9tZS1idXR0b24gcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5cXG4jaG9tZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuXFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbiNob21lLWJ1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuI0hvbWUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNpbmZvLXRhYiBoMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIFxcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItc3R5bGU6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4ucHJvamVjdCBwIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcblxcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGhlaWdodDo0NS42NnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgXFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGhlaWdodDozMC42NnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gaW1nIHtcXG4gICAgaGVpZ2h0OjI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGltZzpob3ZlciB7XFxuICAgIGhlaWdodDoyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuI21haW4tYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4uaGVhZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uaGVhZC1jb250YWluZXIgaDIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG59XFxuXFxuI21haW4tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDo1MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGl0bGUtZWRpdC1mb3JtIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIGltZyB7XFxuICAgIGhlaWdodDoyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IHByb2plY3RMaXN0LCBpbmJveCB9IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAgaGVhZGVySWNvbiBmcm9tIFwiLi9oZWFkZXJJY29uLnN2Z1wiO1xuaW1wb3J0IGhvbWVJY29uIGZyb20gXCIuL2hvbWVJY29uLnN2Z1wiO1xuaW1wb3J0IGNsZWFySWNvbiBmcm9tIFwiLi9jbGVhckljb24uc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9hZGRJY29uLnN2Z1wiO1xuaW1wb3J0IHJhZGlvSWNvbiBmcm9tIFwiLi9yYWRpb0ljb24uc3ZnXCI7XG5cbmxldCBjdXJyZW50ID0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gXCJIb21lXCI7XG5cbiAgICBsZXQgcmV0dXJuQ3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgbGV0IHNldEN1cnJlbnQgPSAoY3VycmVudE5hbWUpID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3RTZWxlY3RlZCA9IGN1cnJlbnROYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJldHVybkN1cnJlbnQsIHNldEN1cnJlbnQgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuXG4gICAgXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgRE9NU2tlbGV0b24oKTtcblxufVxuXG5mdW5jdGlvbiBET01Ta2VsZXRvbigpIHtcblxuICAgIC8vY3JlYXRlIGhlYWRlciBET01cbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb2x1bW5Cb2R5KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG5cblxuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGljb24uc3JjID0gaGVhZGVySWNvbjtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBcIkNoZWNrLWxpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29sdW1uQm9keSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2R5LmlkID0gXCJib2R5XCI7XG5cbiAgICAvL211c3QgYXBwZW5kIG1haW5ib2R5IGZpcnN0XG4gICAgbGV0IGluZm9UYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9UYWIuaWQgPSBcImluZm8tdGFiXCI7XG5cbiAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Cb2R5LmlkID0gXCJtYWluLWJvZHlcIjtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5mb1RhYik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQm9keSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcblxuICAgIGNyZWF0ZUluZm9UYWIoKTtcbiAgICBnZXRNYWluQm9keSgpO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1RhYigpIHtcblxuXG4gICAgbGV0IGluZm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tdGFiXCIpO1xuXG4gICAgXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGhvbWVCdXR0b24uaWQgPSBcImhvbWUtYnV0dG9uXCI7XG5cbiAgICBsZXQgaWNvbkhvbWUgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uSG9tZS5zcmMgPSBob21lSWNvbjtcbiAgICBcbiAgICBsZXQgb3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgb3B0aW9uQnV0dG9uLmNsYXNzTmFtZSA9IFwiaW5mby10YWItYnV0dG9uXCI7XG4gICAgb3B0aW9uQnV0dG9uLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICAgIG9wdGlvbkJ1dHRvbi5pZCA9IFwiSG9tZVwiO1xuXG4gICAgaG9tZUJ1dHRvbi5hcHBlbmRDaGlsZChpY29uSG9tZSk7XG4gICAgaG9tZUJ1dHRvbi5hcHBlbmRDaGlsZChvcHRpb25CdXR0b24pXG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgLy9mb3IgcHJvamVjdHMgaW4gdGhlIGxvY2Fsc3RvcmFnZSwgaGVyZSB3ZSB3YW50IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGVtXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3RzLmlkID0gXCJjdXJyZW50LXByb2plY3RzXCI7XG5cbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZC1wcm9qZWN0LWJ1dHRvblwiO1xuXG4gICAgbGV0IGFkZFByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gICAgYWRkUHJvamVjdEljb24uc3JjID0gYWRkSWNvbjtcbiAgICBsZXQgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRQcm9qZWN0VGV4dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RJY29uKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RUZXh0KTtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuXG4gICAgY3JlYXRlQ3VycmVudFByb2plY3RzKCk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFByb2plY3RzKCkge1xuICAgIC8vZ2V0IGFsbCBjdXJyZW50IHByb2plY3RzLCB0aGVuIGZvciBlYWNoIGNyZWF0ZSBhbiBlbGVtZW50IGFuZCBhcHBlbmQgb3RvIHRoaW5nXG5cbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXByb2plY3RzXCIpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnRQcm9qZWN0cy5maXJzdENoaWxkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5yZW1vdmVDaGlsZChjdXJyZW50UHJvamVjdHMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHByb2plY3RMaXN0LmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICBwcm9qZWN0LmlkID0gaW5kZXggKyBcInBcIjtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGNsb3NlQnV0dG9uLnNyYyA9IGNsZWFySWNvbjtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcbiAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgICAgIGNsb3NlQnV0dG9uLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlQnV0dG9uLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KHByb2plY3QuaWQuc2xpY2UoMCwtMSkpLmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS5yZW1vdmVUb2RvKHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLmdldFRvZG9MaXN0KCkuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3QuaWQuc2xpY2UoMCwtMSkpO1xuICAgICAgICAgICAgLy9jdXJyZW50LnNldEN1cnJlbnQoXCJIb21lXCIpO1xuICAgICAgICAgICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYWluQm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFpbkJvZHkucmVtb3ZlQ2hpbGQobWFpbkJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVDdXJyZW50UHJvamVjdHMoKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrO1xuXG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIH0pO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGdldE1haW5Cb2R5KCkge1xuICAgIGxldCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1ib2R5XCIpO1xuXG4gICAgd2hpbGUgKG1haW5Cb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkJvZHkucmVtb3ZlQ2hpbGQobWFpbkJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG5cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICB9XG5cblxuICAgIGxldCBoZWFkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaGVhZC1jb250YWluZXJcIjtcblxuICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgICBtYWluVGl0bGUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCk7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IFwiU29ydCBCeSBEYXRlXCI7XG4gICAgbGV0IHNvcnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzb3J0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gICAgc29ydElucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIkhvbWVcIikge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIikudW5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS51bnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgfVxuXG4gICAgaGVhZENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydElucHV0KTtcblxuICAgIGxldCBtYWluTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkxpc3QuaWQgPSBcIm1haW4tbGlzdFwiO1xuXG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcGx1c0ljb24uc3JjID0gYWRkSWNvbjtcbiAgICBsZXQgYWRkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGREZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc05hbWUgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQoYWRkRGVzY3JpcHRpb24pO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGhlYWRDb250YWluZXIpO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW5MaXN0KTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICAvLyBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJUb2RheVwiIHx8IGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiTW9udGhcIikge1xuICAgIC8vICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyB9XG5cbiAgICBjcmVhdGVNYWluTGlzdCgpO1xuXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluTGlzdCgpIHtcbiAgICAvL2dldCBhbGwgcG9zc2libGUgdG9kb3MsIHRoZW4gc2ltcGx5IGxpc3QgdGhlbVxuICAgIGxldCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1saXN0XCIpO1xuXG4gICAgd2hpbGUgKG1haW5MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkxpc3QucmVtb3ZlQ2hpbGQobWFpbkxpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIH1cbiAgICBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBsaXN0SXRlbS5pZCA9IGluZGV4O1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBtYWluTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBcblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRvZG9JdGVtKSB7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBpY29uUmFkaW8gPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uUmFkaW8uc3JjID0gcmFkaW9JY29uO1xuICAgIGljb25SYWRpby5jbGFzc05hbWUgPSBcInJhZGlvLWljb25cIjtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NOYW1lID0gXCJpdGVtLXRpdGxlXCI7XG4gICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG5cbiAgICBsZXQgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGF0ZS5jbGFzc05hbWUgPSBcIml0ZW0tZGF0ZVwiO1xuXG4gICAgaXRlbURhdGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE1KTtcblxuICAgIC8vIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBlZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiZWRpdFwiO1xuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBjbGVhckljb247XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwibGlzdC1kZWxldGUtYnV0dG9uXCI7XG5cbiAgICBkZWxldGVCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gICAgZGVsZXRlQnV0dG9uLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpY29uUmFkaW8pO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtRGF0ZSk7XG4gICAgLy9saXN0SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG5cbiAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIkhvbWVcIikge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgodG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgICAgICBsZXQgaG9tZVByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIGhvbWVQcm9qZWN0LnJldHVybklzU29ydGVkKCkpIHtcbiAgICAgICAgICAgICAgICBob21lUHJvamVjdC51bnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgICAgIGhvbWVQcm9qZWN0LnJlbW92ZVRvZG8oIGhvbWVQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIGhvbWVQcm9qZWN0LnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9tZVByb2plY3QucmVtb3ZlVG9kbyggaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKHRvZG9JdGVtKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkgPT0gZWxlbWVudC5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyhjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmluZGV4T2YoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgICAgICAgICAgbGV0IGhvbWVQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5yZXR1cm5Jc1NvcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QudW5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvKGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyhjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmluZGV4T2YodG9kb0l0ZW0pKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbS5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSA9PSBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBob21lUHJvamVjdC5yZW1vdmVUb2RvKGhvbWVQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgIH1cblxuICAgIC8vIGl0ZW1UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSwgdG9kb0l0ZW0pIHtcbiAgICAvLyAgICAgYWRkRWRpdEZvcm0oZSwgdG9kb0l0ZW0pXG4gICAgLy8gfSk7XG4gICAgaXRlbVRpdGxlLm9uY2xpY2sgPSAoZSkgPT4ge1xuXG5cbiAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc05hbWUgPSBcInRpdGxlLWVkaXQtZm9ybVwiO1xuICAgICAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgZWRpdEZvcm0udmFsdWUgPSB0b2RvSXRlbS5nZXRUaXRsZSgpO1xuXG4gICAgICAgIGl0ZW1UaXRsZS5yZXBsYWNlV2l0aChlZGl0Rm9ybSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gZWRpdEZvcm0pIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5zZXRUaXRsZShlZGl0Rm9ybS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIgJiYgdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSA9PSBcIkhvbWVcIikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob21lUHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUluZGV4ID0gaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5zcGxpY2UoaG9tZUluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSwgdG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpdGVtRGF0ZS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGVkaXREYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWRpdERhdGVGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgICAgIGVkaXREYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuXG4gICAgICAgIGl0ZW1EYXRlLnJlcGxhY2VXaXRoKGVkaXREYXRlRm9ybSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gZWRpdERhdGVGb3JtKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIkhvbWVcIiAmJiBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS5yZXR1cm5Jc1NvcnRlZCgpICkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS51bnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvSXRlbS5zZXREdWVEYXRlKGVkaXREYXRlRm9ybS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggY3VycmVudC5yZXR1cm5DdXJyZW50KCkgIT0gXCJIb21lXCIgJiYgcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnJldHVybklzU29ydGVkKCkpe1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSkudW5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0l0ZW0uc2V0RHVlRGF0ZShlZGl0RGF0ZUZvcm0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSkuc29ydEFycmF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvSXRlbS5zZXREdWVEYXRlKGVkaXREYXRlRm9ybS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIgJiYgdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSA9PSBcIkhvbWVcIikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob21lUHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUluZGV4ID0gaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5zcGxpY2UoaG9tZUluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSwgdG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3JlYXRlTWFpbkxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy9lID0gXCJmb290ZXJcIjtcbiAgICBsZXQgZm9vdGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkNyZWF0ZWQgQnkgU2V1bGNoYW4gSGFuXCI7XG4gICAgZm9vdGVyRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJmb290ZXJcIjtcbiAgICAvL2Zvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEZXNjcmlwdGlvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckRlc2NyaXB0aW9uKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUN1cnJlbnRQcm9qZWN0cywgY3VycmVudCwgZ2V0TWFpbkJvZHksIGNyZWF0ZU1haW5MaXN0IH07XG5cbmluaXRpYWxpemVTaXRlKCk7XG5cbmltcG9ydCB7IGluaXRpYWxpemVFdmVudEhhbmRsZXJzLCBhZGRUYXNrRXZlbnQgfSBmcm9tIFwiLi9FdmVudEhhbmRsZXIuanNcIjtcbmltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoKTsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cywgY3JlYXRlTWFpbkxpc3QsIGN1cnJlbnQsIGdldE1haW5Cb2R5LFxufSBmcm9tIFwiLi9ET01cIjtcblxuaW1wb3J0IGNsZWFySWNvbiBmcm9tIFwiLi9jbGVhckljb24uc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9hZGRJY29uLnN2Z1wiO1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tDbGlja2VkKCkge1xuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tYm9keVwiKTtcblxuICAgIGxldCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1mb3JtXCI7XG5cbiAgICBsZXQgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidW50aXRsZWRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGlucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGN1cnJlbnQucmV0dXJuQ3VycmVudCgpO1xuICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG5cbiAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGF0ZS1waWNrZXJcIik7XG4gICAgLy8gbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyBkYXRlUGlja2VyLnZhbHVlID0gY3VycmVudERhdGU7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgYWRkQnV0dG9uLnNyYyA9IGFkZEljb247XG4gICAgYWRkQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLWJ1dHRvblwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNhbmNlbEJ1dHRvbi5zcmMgPSBjbGVhckljb247XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xlYXItYnV0dG9uXCI7XG5cbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuICAgIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChpbnB1dFRhc2tOYW1lLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGlucHV0VGFza05hbWUudmFsdWUgPSBcInVudGl0bGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRIb21lUHJvamVjdCgpLmFkZFRvZG8oaW5wdXRUYXNrTmFtZS52YWx1ZSwgZGF0ZVBpY2tlci52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKGlucHV0VGFza05hbWUudmFsdWUsIGRhdGVQaWNrZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Q2xpY2tlZCgpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgbGV0IGluZm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tdGFiXCIpO1xuXG4gICAgbGV0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSBcImFkZC1wcm9qZWN0LWZvcm1cIjtcblxuICAgIGxldCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJ1bnRpdGxlZFwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgYWRkQnV0dG9uLnNyYyA9IGFkZEljb247XG4gICAgYWRkQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLWJ1dHRvblwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNhbmNlbEJ1dHRvbi5zcmMgPSBjbGVhckljb247XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xlYXItYnV0dG9uXCI7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGluZm9UYWIucmVtb3ZlQ2hpbGQoaW5mb1RhYi5sYXN0Q2hpbGQpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGlucHV0VGV4dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuICAgICAgICBpbmZvVGFiLnJlbW92ZUNoaWxkKGluZm9UYWIubGFzdENoaWxkKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGFkZFByb2plY3RMaXN0RXZlbnQoKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2plY3QoaW5kZXgpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChpbmRleC5zbGljZSgwLC0xKSk7XG5cbiAgICBsZXQgcHJvamVjdEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKSk7XG4gICAgICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2coaW5kZXguc2xpY2UoMCwtMSkpO1xuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmRleCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdC5yZXR1cm5Jc1NvcnRlZCgpKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnVuc29ydEFycmF5KCk7XG4gICAgfVxuXG5cbiAgICBjdXJyZW50LnNldEN1cnJlbnQoaW5kZXguc2xpY2UoMCwtMSkpO1xuICAgIGdldE1haW5Cb2R5KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG4gICAgYWRkT3B0aW9uc0V2ZW50KCk7XG4gICAgYWRkUHJvamVjdExpc3RFdmVudCgpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Q2xpY2tlZCk7XG5cblxufVxuXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnQoKSB7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrQ2xpY2tlZCk7XG59XG5cbmZ1bmN0aW9uIGFkZE9wdGlvbnNFdmVudCgpIHtcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1idXR0b25cIik7XG5cbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnQuc2V0Q3VycmVudChcIkhvbWVcIik7XG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnJldHVybklzU29ydGVkKCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnVuc29ydEFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TWFpbkJvZHkoKTtcbiAgICAgICAgYWRkVGFza0V2ZW50KCk7XG4gICAgfVxuXG5cbiAgICAvLyBhcnJheU9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAvLyAgICAgZWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgY3VycmVudC5zZXRDdXJyZW50KGVsZW1lbnQuaWQpOyBcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpO1xuICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnJldHVybklzU29ydGVkKCkpe1xuICAgIC8vICAgICAgICAgY3VycmVudFByb2plY3QudW5zb3J0QXJyYXkoKTtcbiAgICAvLyB9XG4gICAgLy8gICAgICAgICBnZXRNYWluQm9keSgpO1xuICAgIC8vICAgICAgICAgYWRkVGFza0V2ZW50KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExpc3RFdmVudCgpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDM0NTM0NSk7XG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBcblxufVxuZXhwb3J0IHsgaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMsIGFkZFRhc2tFdmVudCB9OyIsIlxuXG5cbmNsYXNzIFByb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IodG9kb0FycmF5ID0gW10sIHByb2plY3RUaXRsZSA9IFwidW50aXRsZWRcIikge1xuICAgICAgICB0aGlzLnRvZG9BcnJheSA9IHRvZG9BcnJheTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIHRoaXMuc3RvcmVkQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5pc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kb1RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUucmVwbGFjZSgvLS9nLCAnXFwvJykpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5ld0RhdGUuZ2V0VGltZSgpICE9PSBuZXdEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTb3J0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2gobmV3IFRvZG8odG9kb1RpdGxlLCBuZXdEYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5zb3J0QXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0FycmF5LnB1c2gobmV3IFRvZG8odG9kb1RpdGxlLCBuZXdEYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcblxuICAgICAgICB0aGlzLnRvZG9BcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cbiAgICB9XG5cbiAgICBnZXRUb2RvTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0FycmF5O1xuICAgIH1cblxuICAgIGdldFByb2plY3RUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIHNvcnRBcnJheSgpIHtcbiAgICAgICAgbGV0IG90aGVyQXJyYXkgPSBbLi4udGhpcy50b2RvQXJyYXldO1xuICAgICAgICBvdGhlckFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmdldER1ZURhdGUoKSAtIGIuZ2V0RHVlRGF0ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc3RvcmVkQXJyYXkgPSBbLi4udGhpcy50b2RvQXJyYXldO1xuICAgICAgICB0aGlzLnRvZG9BcnJheSA9IG90aGVyQXJyYXk7XG4gICAgICAgIHRoaXMuaXNTb3J0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVuc29ydEFycmF5KCkge1xuICAgICAgICB0aGlzLnRvZG9BcnJheSA9IHRoaXMuc3RvcmVkQXJyYXk7XG4gICAgICAgIHRoaXMuaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm5Jc1NvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTb3J0ZWQ7XG4gICAgfVxuXG59XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9UaXRsZSA9IFwidW50aXRsZWRcIiwgZHVlRGF0ZSA9IG5ldyBEYXRlKCksIGRlc2NyaXB0aW9uID0gXCJIb21lXCIpIHtcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSB0b2RvVGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUoZGF0ZSkge1xuICAgICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUucmVwbGFjZSgvLS9nLCAnXFwvJykpO1xuICAgICAgICBpZiAobmV3RGF0ZS5nZXRUaW1lKCkgIT09IG5ld0RhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKHBocmFzZSkge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcGhyYXNlO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvVGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5cbmxldCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IGhvbWUgPSBuZXcgUHJvamVjdChbbmV3IFRvZG8oXCJTYW1wbGUgVGFza1wiLCBuZXcgRGF0ZSgpLCBcIkhvbWVcIildLCBcIkhvbWVcIik7XG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtuZXcgUHJvamVjdChbXSwgXCJTYW1wbGUgUHJvamVjdFwiKV07XG5cblxuICAgIGxldCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSAnJykge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnB1c2gobmV3IFByb2plY3QoW10sIFwidW50aXRsZWRcIikpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChbXSwgcHJvamVjdE5hbWUpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cblxuICAgIH1cblxuICAgIGxldCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBob21lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCkgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBnZXRQcm9qZWN0QnlJbmRleCA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5W2luZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0SG9tZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob21lO1xuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHsgZ2V0SG9tZVByb2plY3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0QnlJbmRleCB9O1xufSkoKTtcblxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ET00uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=