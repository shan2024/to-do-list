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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nbody\n    content\n        header\n        body\n            infoTab\n                Home (info-tab-button)\n                Today \n                Week\n                Projects title (h2)\n                projects (current-projects)\n                    name (p)\n                    close-button\n                add project\n            mainBody\n                inboxTitle\n                inboxList (inbox-list)\n                    (list-item)\n                    itemTitle\n                    itemDate\n                    editButton\n                    deleteButton\n                addTaskButton\n\n        footer\n\n*/\n\nbody {\n   \n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nheader {\n    width: 100vw;\n}\n\n#body {\n    display:flex;\n    flex-direction: row;\n    height:80vh;\n}\n\n#info-tab {\n    display:flex;\n    flex-direction: column;\n    width:20vw;\n}\n\n#current-projects {\n    display:flex;\n    flex-direction: column;\n}\n\n.project {\n    display:flex;\n    justify-content: space-between;\n    \n}\n\n\n#main-body {\n    display:flex;\n    flex-direction: column;\n    width:80vw;\n    align-items: center;\n}\n\n#main-list {\n    display: flex;\n    flex-direction:column;\n}\n\n.list-item {\n    display: flex;\n}\nfooter {\n    width: 100vw;\n    \n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;CA0BC;;AAED;;AAEA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,8BAA8B;;AAElC;;;AAGA;IACI,YAAY;IACZ,sBAAsB;IACtB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,YAAY;;AAEhB","sourcesContent":["/*\nbody\n    content\n        header\n        body\n            infoTab\n                Home (info-tab-button)\n                Today \n                Week\n                Projects title (h2)\n                projects (current-projects)\n                    name (p)\n                    close-button\n                add project\n            mainBody\n                inboxTitle\n                inboxList (inbox-list)\n                    (list-item)\n                    itemTitle\n                    itemDate\n                    editButton\n                    deleteButton\n                addTaskButton\n\n        footer\n\n*/\n\nbody {\n   \n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\nheader {\n    width: 100vw;\n}\n\n#body {\n    display:flex;\n    flex-direction: row;\n    height:80vh;\n}\n\n#info-tab {\n    display:flex;\n    flex-direction: column;\n    width:20vw;\n}\n\n#current-projects {\n    display:flex;\n    flex-direction: column;\n}\n\n.project {\n    display:flex;\n    justify-content: space-between;\n    \n}\n\n\n#main-body {\n    display:flex;\n    flex-direction: column;\n    width:80vw;\n    align-items: center;\n}\n\n#main-list {\n    display: flex;\n    flex-direction:column;\n}\n\n.list-item {\n    display: flex;\n}\nfooter {\n    width: 100vw;\n    \n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _EventHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler.js */ "./src/EventHandler.js");




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
    let titleElement = document.createElement("h1");
    titleElement.innerHTML = "Todo List";
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

    let options = ["Home", "Today", "Month"];
    options.forEach(element => {
        let optionButton = document.createElement("button");
        optionButton.className = "info-tab-button";
        optionButton.innerHTML = element;
        optionButton.id = element;
        infoTab.appendChild(optionButton);
    });

    let projectTitle = document.createElement("h2");
    projectTitle.innerHTML = "Projects";

    //for projects in the localstorage, here we want to create options for them
    let currentProjects = document.createElement("div");
    currentProjects.id = "current-projects";

    let addProjectButton = document.createElement("button");
    addProjectButton.id = "add-project-button";
    addProjectButton.innerHTML = "Add Project";

    infoTab.appendChild(projectTitle);
    infoTab.appendChild(currentProjects);
    infoTab.appendChild(addProjectButton);


    createCurrentProjects();

}

function createCurrentProjects() {
    //get all current projects, then for each create an element and append oto thing

    let currentProjects = document.getElementById("current-projects");
    //console.log(currentProjects);
    let index = 0;
    while (currentProjects.firstChild) {
        currentProjects.removeChild(currentProjects.firstChild);
    }
    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectList().forEach(element => {
        let project = document.createElement("div");
        project.className = "project";
        project.id = index;

        let name = document.createElement("p");
        name.innerHTML = element.getProjectTitle();

        let closeButton = document.createElement("button");
        closeButton.innerHTML = "x";
        closeButton.className = "close-button";

        closeButton.onclick = () => {
            console.log("closed");

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).getTodoList().forEach(element => {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").removeTodo( _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().indexOf(element));
            })

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.removeProject(project.id);
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
        //console.log(project);
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



    let mainTitle = document.createElement("h2");
    console.log(currentProject);
    mainTitle.innerHTML = currentProject.getProjectTitle();

    let mainList = document.createElement("div");
    mainList.id = "main-list";

    let addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.innerHTML = "Add Task";

    mainBody.appendChild(mainTitle);
    mainBody.appendChild(mainList);
    mainBody.appendChild(addTaskButton);
    if (current.returnCurrent() == "Today" || current.returnCurrent() == "Month") {
        addTaskButton.style.display = "none";
    }

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

    //console.log(currentProject);

}

function createListItem(todoItem) {
    let listItem = document.createElement("div");

    let itemTitle = document.createElement("p");
    itemTitle.innerHTML = todoItem.getTitle();

    let itemDate = document.createElement("p");
    itemDate.innerHTML = todoItem.getDueDate().toString().substring(0, 15);

    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDate);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    

    deleteButton.onclick = () => {
        if (current.returnCurrent() == "Home") {
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(current.returnCurrent()).removeTodo(listItem.id);
            console.log(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()));
            if (todoItem.getDescription() != "Home") {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().forEach(element => {
                    if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                        _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).removeTodo(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().indexOf(element));
                    }
                });
            }
        }
        else {
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).removeTodo(listItem.id);
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().forEach(element => {
                console.log(498759834);
                if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                    console.log(todoItem);
                    console.log(element);
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").removeTodo( _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().indexOf(element) );
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
        editForm.setAttribute("type", "text");
        editForm.value = todoItem.getTitle();

        itemTitle.replaceWith(editForm);
        e.stopPropagation();
        window.onclick = (e) => {
            e.stopPropagation();
            if (e.target != editForm){
                //console.log(324524542);
                todoItem.setTitle( editForm.value);

                if( current.returnCurrent() == "Home" && todoItem.getDescription() == "Home" ){

                }
                else if (current.returnCurrent() != "Home"){
                    let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf( todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex( todoItem.getDescription());
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
            if( e.target != editDateForm){
                todoItem.setDueDate( editDateForm.value);

                if( current.returnCurrent() == "Home" && todoItem.getDescription() == "Home" ){
                    
                }
                else if (current.returnCurrent() != "Home"){
                    let homeProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf( todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex( todoItem.getDescription());
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

    let footer = document.createElement("footer");
    let footerDescription = document.createElement("p");
    footerDescription.innerHTML = "Created By Seulchan Han";

    footer.appendChild(footerDescription);

    content.appendChild(footer);
}


initializeSite();


(0,_EventHandler_js__WEBPACK_IMPORTED_MODULE_2__.initializeEventHandlers)();

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





function addTaskClicked() {
    let addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.style.display = "none";

    let mainBody = document.querySelector("#main-body");

    let addTaskForm = document.createElement("div");

    let inputTaskName = document.createElement("input");
    inputTaskName.required = true;
    inputTaskName.setAttribute("placeholder", "untitled");
    inputTaskName.setAttribute("name", "task-name");
    inputTaskName.setAttribute("type", "text");

    let inputDescription = _DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent();
    //console.log(inputDescription);
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
    // console.log(new Date());

    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = "Cancel";

    addTaskForm.appendChild(inputTaskName);
    addTaskForm.appendChild(datePicker);
    addTaskForm.appendChild(addButton);
    addTaskForm.appendChild(cancelButton);

    mainBody.appendChild(addTaskForm);

    cancelButton.onclick = () => {
        mainBody.removeChild(mainBody.lastChild);
        addTaskButton.style.display = "block";
    }

    addButton.onclick = () => {
        let currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        if (currentProject === undefined) {
            currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        }
        //console.log(datePicker.value);
        //console.log( new Date());

        if ( inputTaskName.value == ""){
            inputTaskName.value = "untitled";
        }
        if ( _DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent() != "Home"){
            _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getHomeProject().addTodo(inputTaskName.value, datePicker.value, inputDescription);
        }

        currentProject.addTodo( inputTaskName.value, datePicker.value, inputDescription);

        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.createMainList)();
        mainBody.removeChild(mainBody.lastChild);
        addTaskButton.style.display = "block";
    }

}

function addProjectClicked() {
    let addProjectButton = document.querySelector("#add-project-button");
    addProjectButton.style.display = "none";

    let infoTab = document.querySelector("#info-tab");

    let addProjectForm = document.createElement("div");

    let inputText = document.createElement("input");
    inputText.required = true;
    inputText.setAttribute("placeholder", "untitled");
    inputText.setAttribute("name", "project-name");
    inputText.setAttribute("type", "text");

    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = "Cancel";

    addProjectForm.appendChild(inputText);
    addProjectForm.appendChild(addButton);
    addProjectForm.appendChild(cancelButton);

    infoTab.appendChild(addProjectForm);

    cancelButton.onclick = () => {
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "block";
    }

    addButton.onclick = () => {

        _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(inputText.value);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.createCurrentProjects)();
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "block";
    }

}

function changeCurrentProject( index){
    console.log("chagecurrent");
    _DOM__WEBPACK_IMPORTED_MODULE_1__.current.setCurrent(index);
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
    let addProjectButton = document.querySelector("#add-project-button");

    addProjectButton.addEventListener('click', addProjectClicked);


}

function addTaskEvent() {
    let addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", addTaskClicked);
}

function addOptionsEvent() {
    let arrayOptions = Array.from(document.querySelectorAll(".info-tab-button"));

    arrayOptions.forEach(element => {
        element.onclick = () => {
            _DOM__WEBPACK_IMPORTED_MODULE_1__.current.setCurrent(element.id); 
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.getMainBody)();
            addTaskEvent();
        }
    });
}

function addProjectListEvent() {
    let projectList = document.querySelector("#current-projects");

    projectList.addEventListener('click', e => {
        if (e.target.className == 'project') {
            changeCurrentProject( e.target.id );
        }
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


class Project{
    
    constructor( todoArray = [], projectTitle = "untitled" ){
        this.todoArray = todoArray;
        this.projectTitle = projectTitle;
    }

    addTodo(todoTitle, dueDate, description) {
        let newDate = new Date(dueDate.replace(/-/g, '\/'));
        console.log(dueDate);
        console.log(newDate);
        if( newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        this.todoArray.push(new Todo( todoTitle, newDate, description));
    }

    removeTodo(index) {
        
        this.todoArray.splice( index, 1);
          
    }

    getTodoList() {
        return this.todoArray;
    }

    getProjectTitle() {
        return this.projectTitle;
    }
}

class Todo {
    constructor(todoTitle = "untitled", dueDate = new Date(), description = "Home") {
        this.todoTitle = todoTitle;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTitle(title){
        this.todoTitle = title; 
    }

    setDueDate( date){
        let newDate = new Date(date.replace(/-/g, '\/'));
        if( newDate.getTime() !== newDate.getTime()){
            newDate = new Date();
        }
        this.dueDate = newDate;
    }

    setDescription( phrase){
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
    let home =  new Project(  [ new Todo("untitled", new Date(), "Home")], "Home" );


    let projectArray = [ new Project([], "untitled")];
    let addProject = ( projectName) => {
        if (projectName == ''){
            projectArray.push( new Project([], "untitled"));
        }
        else {
            projectArray.push( new Project([], projectName));

        }
    }

    let removeProject = (index)  => {
        console.log(index);
        console.log(projectArray);
        projectArray.splice( index, 1);
        console.log(projectArray);


    }

    let getProjectList =()=> {
        return projectArray;
    }

    let getProject = ( projectName) => {
        console.log(projectName);
        if ( projectName =="Home") {
            return home;
        }
        else if (projectName == "Today") {
            return getTodayProject();
        }
        else if (projectName == "Month") {
            return getMonthProject();
        }
        else {
            projectArray.forEach(element => {
                if ( element.getProjectTitle() == projectName ) {
                    return element;
                }
            });
            
        }
    }

    let getProjectByIndex = ( index ) => {
        return projectArray[index];
    }

    let getHomeProject = () => {
        return home;
    }

    let getTodayProject = () => {
        let todayList = [];
        let today = new Date();
        //console.log(projectArray);
        home.getTodoList().forEach(element => {
            //console.log( element.getDueDate().toString().substring(0,10) );
            //console.log( new Date());
            if ( element.getDueDate().toString().substring(0,10) == today.toString().substring(0,10) ) {
                todayList.push(element);
            }
        });

        return new Project( todayList, "Today");
    }

    let getMonthProject = () => {
        let monthList = [];
        let month = new Date();
        home.getTodoList().forEach(element => {
            if ( element.getDueDate().toString().substring(5,9) == month.toString().substring(5,9) ) {
                monthList.push(element);
            }
        });

        return new Project( monthList, "Month");
    }

    

    return {getHomeProject, addProject, removeProject, getProjectList, getProject,getTodayProject,getMonthProject,getProjectByIndex};
})();


// (() => {
//     let inboxArray = [ new Todo("untitled", "skjdf", "lsjdkf")];

//     function addTodo( todo){
//         inboxArray.push(todo);
//     }

//     function removeTodo(todo){
//         inboxArray.splice( inboxArray.indexOf( todo), 1);
//     }

//     function returnInboxArray() {
//         return inboxArray;
//     }
//     return { addTodo, removeTodo, returnInboxArray};
// })();





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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5ib2R5XFxuICAgIGNvbnRlbnRcXG4gICAgICAgIGhlYWRlclxcbiAgICAgICAgYm9keVxcbiAgICAgICAgICAgIGluZm9UYWJcXG4gICAgICAgICAgICAgICAgSG9tZSAoaW5mby10YWItYnV0dG9uKVxcbiAgICAgICAgICAgICAgICBUb2RheSBcXG4gICAgICAgICAgICAgICAgV2Vla1xcbiAgICAgICAgICAgICAgICBQcm9qZWN0cyB0aXRsZSAoaDIpXFxuICAgICAgICAgICAgICAgIHByb2plY3RzIChjdXJyZW50LXByb2plY3RzKVxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAocClcXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlLWJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGQgcHJvamVjdFxcbiAgICAgICAgICAgIG1haW5Cb2R5XFxuICAgICAgICAgICAgICAgIGluYm94VGl0bGVcXG4gICAgICAgICAgICAgICAgaW5ib3hMaXN0IChpbmJveC1saXN0KVxcbiAgICAgICAgICAgICAgICAgICAgKGxpc3QtaXRlbSlcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGVcXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0dG9uXFxuXFxuICAgICAgICBmb290ZXJcXG5cXG4qL1xcblxcbmJvZHkge1xcbiAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI2JvZHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDo4MHZoO1xcbn1cXG5cXG4jaW5mby10YWIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjIwdnc7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6ODB2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMEJDOztBQUVEOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCOztBQUVsQzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTs7QUFFaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG5ib2R5XFxuICAgIGNvbnRlbnRcXG4gICAgICAgIGhlYWRlclxcbiAgICAgICAgYm9keVxcbiAgICAgICAgICAgIGluZm9UYWJcXG4gICAgICAgICAgICAgICAgSG9tZSAoaW5mby10YWItYnV0dG9uKVxcbiAgICAgICAgICAgICAgICBUb2RheSBcXG4gICAgICAgICAgICAgICAgV2Vla1xcbiAgICAgICAgICAgICAgICBQcm9qZWN0cyB0aXRsZSAoaDIpXFxuICAgICAgICAgICAgICAgIHByb2plY3RzIChjdXJyZW50LXByb2plY3RzKVxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAocClcXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlLWJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGQgcHJvamVjdFxcbiAgICAgICAgICAgIG1haW5Cb2R5XFxuICAgICAgICAgICAgICAgIGluYm94VGl0bGVcXG4gICAgICAgICAgICAgICAgaW5ib3hMaXN0IChpbmJveC1saXN0KVxcbiAgICAgICAgICAgICAgICAgICAgKGxpc3QtaXRlbSlcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbURhdGVcXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblxcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0dG9uXFxuXFxuICAgICAgICBmb290ZXJcXG5cXG4qL1xcblxcbmJvZHkge1xcbiAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI2JvZHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDo4MHZoO1xcbn1cXG5cXG4jaW5mby10YWIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjIwdnc7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3RzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6ODB2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IHByb2plY3RMaXN0LCBpbmJveCB9IGZyb20gXCIuL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGN1cnJlbnQgPSAoKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQgPSBcIkhvbWVcIjtcblxuICAgIGxldCByZXR1cm5DdXJyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3RTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBsZXQgc2V0Q3VycmVudCA9IChjdXJyZW50TmFtZSkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gY3VycmVudE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmV0dXJuQ3VycmVudCwgc2V0Q3VycmVudCB9O1xufSkoKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNpdGUoKSB7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBET01Ta2VsZXRvbigpO1xuXG59XG5cbmZ1bmN0aW9uIERPTVNrZWxldG9uKCkge1xuXG4gICAgLy9jcmVhdGUgaGVhZGVyIERPTVxuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZUNvbHVtbkJvZHkoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcblxuXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBcIlRvZG8gTGlzdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkJvZHkoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xuXG4gICAgLy9tdXN0IGFwcGVuZCBtYWluYm9keSBmaXJzdFxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvVGFiLmlkID0gXCJpbmZvLXRhYlwiO1xuXG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQm9keS5pZCA9IFwibWFpbi1ib2R5XCI7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGluZm9UYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjcmVhdGVJbmZvVGFiKCk7XG4gICAgZ2V0TWFpbkJvZHkoKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UYWIoKSB7XG5cblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBvcHRpb25zID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiTW9udGhcIl07XG4gICAgb3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb3B0aW9uQnV0dG9uLmNsYXNzTmFtZSA9IFwiaW5mby10YWItYnV0dG9uXCI7XG4gICAgICAgIG9wdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb25CdXR0b24uaWQgPSBlbGVtZW50O1xuICAgICAgICBpbmZvVGFiLmFwcGVuZENoaWxkKG9wdGlvbkJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICAvL2ZvciBwcm9qZWN0cyBpbiB0aGUgbG9jYWxzdG9yYWdlLCBoZXJlIHdlIHdhbnQgdG8gY3JlYXRlIG9wdGlvbnMgZm9yIHRoZW1cbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50UHJvamVjdHMuaWQgPSBcImN1cnJlbnQtcHJvamVjdHNcIjtcblxuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdC1idXR0b25cIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuXG4gICAgY3JlYXRlQ3VycmVudFByb2plY3RzKCk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFByb2plY3RzKCkge1xuICAgIC8vZ2V0IGFsbCBjdXJyZW50IHByb2plY3RzLCB0aGVuIGZvciBlYWNoIGNyZWF0ZSBhbiBlbGVtZW50IGFuZCBhcHBlbmQgb3RvIHRoaW5nXG5cbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXByb2plY3RzXCIpO1xuICAgIC8vY29uc29sZS5sb2coY3VycmVudFByb2plY3RzKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChjdXJyZW50UHJvamVjdHMuZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdHMucmVtb3ZlQ2hpbGQoY3VycmVudFByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICAgICAgcHJvamVjdC5pZCA9IGluZGV4O1xuXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gZWxlbWVudC5nZXRQcm9qZWN0VGl0bGUoKTtcblxuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcInhcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZWRcIik7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIikucmVtb3ZlVG9kbyggcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIikuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgICAgICAvL2N1cnJlbnQuc2V0Q3VycmVudChcIkhvbWVcIik7XG4gICAgICAgICAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tYm9keVwiKTtcblxuICAgICAgICAgICAgd2hpbGUgKG1haW5Cb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG5cblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgY3VycmVudFByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgfSk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gZ2V0TWFpbkJvZHkoKSB7XG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICB3aGlsZSAobWFpbkJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcblxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIH1cblxuXG5cbiAgICBsZXQgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBtYWluVGl0bGUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICBsZXQgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLWxpc3RcIjtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW5MaXN0KTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJUb2RheVwiIHx8IGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiTW9udGhcIikge1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluTGlzdCgpO1xuXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluTGlzdCgpIHtcbiAgICAvL2dldCBhbGwgcG9zc2libGUgdG9kb3MsIHRoZW4gc2ltcGx5IGxpc3QgdGhlbVxuICAgIGxldCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1saXN0XCIpO1xuXG4gICAgd2hpbGUgKG1haW5MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkxpc3QucmVtb3ZlQ2hpbGQobWFpbkxpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIH1cbiAgICBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKGVsZW1lbnQpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBsaXN0SXRlbS5pZCA9IGluZGV4O1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBtYWluTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSh0b2RvSXRlbSkge1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG5cbiAgICBsZXQgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGF0ZS5pbm5lckhUTUwgPSB0b2RvSXRlbS5nZXREdWVEYXRlKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTUpO1xuXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCJlZGl0XCI7XG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJkZWxldGVcIjtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBcblxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnJlbW92ZVRvZG8obGlzdEl0ZW0uaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgodG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSkpO1xuICAgICAgICAgICAgaWYgKHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkgIT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKS5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbS5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSA9PSBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKS5yZW1vdmVUb2RvKHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkpLmdldFRvZG9MaXN0KCkuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS5yZW1vdmVUb2RvKGxpc3RJdGVtLmlkKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg0OTg3NTk4MzQpO1xuICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbS5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSA9PSBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLnJlbW92ZVRvZG8oIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLmdldFRvZG9MaXN0KCkuaW5kZXhPZihlbGVtZW50KSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgIH1cblxuICAgIC8vIGl0ZW1UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSwgdG9kb0l0ZW0pIHtcbiAgICAvLyAgICAgYWRkRWRpdEZvcm0oZSwgdG9kb0l0ZW0pXG4gICAgLy8gfSk7XG4gICAgaXRlbVRpdGxlLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBcblxuICAgICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVkaXRGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBlZGl0Rm9ybS52YWx1ZSA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG5cbiAgICAgICAgaXRlbVRpdGxlLnJlcGxhY2VXaXRoKGVkaXRGb3JtKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBlZGl0Rm9ybSl7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygzMjQ1MjQ1NDIpO1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtLnNldFRpdGxlKCBlZGl0Rm9ybS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiggY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIgJiYgdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSA9PSBcIkhvbWVcIiApe1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvbWVQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob21lSW5kZXggPSBob21lUHJvamVjdC5nZXRUb2RvTGlzdCgpLmluZGV4T2YoIHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5zcGxpY2UoaG9tZUluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCggdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmluZGV4T2YodG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLnNwbGljZShjdXJyZW50SW5kZXgsIDEsIHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3JlYXRlTWFpbkxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaXRlbURhdGUub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgIGxldCBlZGl0RGF0ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVkaXREYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvL0phbnVhcnkgaXMgMCFcbiAgICAgICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIFxuICAgICAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICBlZGl0RGF0ZUZvcm0uc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcblxuICAgICAgICBpdGVtRGF0ZS5yZXBsYWNlV2l0aChlZGl0RGF0ZUZvcm0pO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYoIGUudGFyZ2V0ICE9IGVkaXREYXRlRm9ybSl7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uc2V0RHVlRGF0ZSggZWRpdERhdGVGb3JtLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmKCBjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIkhvbWVcIiAmJiB0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpID09IFwiSG9tZVwiICl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50LnJldHVybkN1cnJlbnQoKSAhPSBcIkhvbWVcIil7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob21lUHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUluZGV4ID0gaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVQcm9qZWN0LmdldFRvZG9MaXN0KCkuc3BsaWNlKGhvbWVJbmRleCwgMSwgdG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoIHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5zcGxpY2UoY3VycmVudEluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3JlYXRlTWFpbkxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgbGV0IGZvb3RlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vdGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJDcmVhdGVkIEJ5IFNldWxjaGFuIEhhblwiO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUN1cnJlbnRQcm9qZWN0cywgY3VycmVudCwgZ2V0TWFpbkJvZHksIGNyZWF0ZU1haW5MaXN0IH07XG5cbmluaXRpYWxpemVTaXRlKCk7XG5cbmltcG9ydCB7IGluaXRpYWxpemVFdmVudEhhbmRsZXJzLCBhZGRUYXNrRXZlbnQgfSBmcm9tIFwiLi9FdmVudEhhbmRsZXIuanNcIjtcbmluaXRpYWxpemVFdmVudEhhbmRsZXJzKCk7IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VycmVudFByb2plY3RzLCBjcmVhdGVNYWluTGlzdCwgY3VycmVudCwgZ2V0TWFpbkJvZHksIFxuICAgICAgICAgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7YXN5bmMsIGZvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tDbGlja2VkKCkge1xuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tYm9keVwiKTtcblxuICAgIGxldCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidW50aXRsZWRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGlucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGN1cnJlbnQucmV0dXJuQ3VycmVudCgpO1xuICAgIC8vY29uc29sZS5sb2coaW5wdXREZXNjcmlwdGlvbik7XG4gICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgICBkZCA9ICcwJyArIGRkO1xuICAgIH1cblxuICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgIG1tID0gJzAnICsgbW07XG4gICAgfVxuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlLXBpY2tlclwiKTtcbiAgICAvLyBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIGRhdGVQaWNrZXIudmFsdWUgPSBjdXJyZW50RGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZFwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xuXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUYXNrTmFtZSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGVQaWNrZXIudmFsdWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBpZiAoIGlucHV0VGFza05hbWUudmFsdWUgPT0gXCJcIil7XG4gICAgICAgICAgICBpbnB1dFRhc2tOYW1lLnZhbHVlID0gXCJ1bnRpdGxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICggY3VycmVudC5yZXR1cm5DdXJyZW50KCkgIT0gXCJIb21lXCIpe1xuICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0SG9tZVByb2plY3QoKS5hZGRUb2RvKGlucHV0VGFza05hbWUudmFsdWUsIGRhdGVQaWNrZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFByb2plY3QuYWRkVG9kbyggaW5wdXRUYXNrTmFtZS52YWx1ZSwgZGF0ZVBpY2tlci52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY3JlYXRlTWFpbkxpc3QoKTtcbiAgICAgICAgbWFpbkJvZHkucmVtb3ZlQ2hpbGQobWFpbkJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Q2xpY2tlZCgpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgbGV0IGluZm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tdGFiXCIpO1xuXG4gICAgbGV0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJ1bnRpdGxlZFwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZGRcIjtcblxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcblxuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG5cbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaW5mb1RhYi5yZW1vdmVDaGlsZChpbmZvVGFiLmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGlucHV0VGV4dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuICAgICAgICBpbmZvVGFiLnJlbW92ZUNoaWxkKGluZm9UYWIubGFzdENoaWxkKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50UHJvamVjdCggaW5kZXgpe1xuICAgIGNvbnNvbGUubG9nKFwiY2hhZ2VjdXJyZW50XCIpO1xuICAgIGN1cnJlbnQuc2V0Q3VycmVudChpbmRleCk7XG4gICAgZ2V0TWFpbkJvZHkoKTtcbiAgICBhZGRUYXNrRXZlbnQoKTtcblxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRXZlbnRIYW5kbGVycygpIHtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBhZGRUYXNrRXZlbnQoKTtcbiAgICBhZGRPcHRpb25zRXZlbnQoKTtcbiAgICBhZGRQcm9qZWN0TGlzdEV2ZW50KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RFdmVudCgpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RDbGlja2VkKTtcblxuXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tFdmVudCgpIHtcbiAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tDbGlja2VkKTtcbn1cblxuZnVuY3Rpb24gYWRkT3B0aW9uc0V2ZW50KCkge1xuICAgIGxldCBhcnJheU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mby10YWItYnV0dG9uXCIpKTtcblxuICAgIGFycmF5T3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50LnNldEN1cnJlbnQoZWxlbWVudC5pZCk7IFxuICAgICAgICAgICAgZ2V0TWFpbkJvZHkoKTtcbiAgICAgICAgICAgIGFkZFRhc2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0RXZlbnQoKSB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LXByb2plY3RzXCIpO1xuXG4gICAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KCBlLnRhcmdldC5pZCApO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn1cbmV4cG9ydCB7IGluaXRpYWxpemVFdmVudEhhbmRsZXJzLCBhZGRUYXNrRXZlbnQgfTsiLCJcblxuY2xhc3MgUHJvamVjdHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciggdG9kb0FycmF5ID0gW10sIHByb2plY3RUaXRsZSA9IFwidW50aXRsZWRcIiApe1xuICAgICAgICB0aGlzLnRvZG9BcnJheSA9IHRvZG9BcnJheTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvVGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZHVlRGF0ZS5yZXBsYWNlKC8tL2csICdcXC8nKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRlKTtcbiAgICAgICAgaWYoIG5ld0RhdGUuZ2V0VGltZSgpICE9PSBuZXdEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaChuZXcgVG9kbyggdG9kb1RpdGxlLCBuZXdEYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICAgIFxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gICAgfVxufVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvVGl0bGUgPSBcInVudGl0bGVkXCIsIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBkZXNjcmlwdGlvbiA9IFwiSG9tZVwiKSB7XG4gICAgICAgIHRoaXMudG9kb1RpdGxlID0gdG9kb1RpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpe1xuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IHRpdGxlOyBcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKCBkYXRlKXtcbiAgICAgICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlLnJlcGxhY2UoLy0vZywgJ1xcLycpKTtcbiAgICAgICAgaWYoIG5ld0RhdGUuZ2V0VGltZSgpICE9PSBuZXdEYXRlLmdldFRpbWUoKSl7XG4gICAgICAgICAgICBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKCBwaHJhc2Upe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcGhyYXNlO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvVGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5cbmxldCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IGhvbWUgPSAgbmV3IFByb2plY3QoICBbIG5ldyBUb2RvKFwidW50aXRsZWRcIiwgbmV3IERhdGUoKSwgXCJIb21lXCIpXSwgXCJIb21lXCIgKTtcblxuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFsgbmV3IFByb2plY3QoW10sIFwidW50aXRsZWRcIildO1xuICAgIGxldCBhZGRQcm9qZWN0ID0gKCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gJycpe1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnB1c2goIG5ldyBQcm9qZWN0KFtdLCBcInVudGl0bGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5wdXNoKCBuZXcgUHJvamVjdChbXSwgcHJvamVjdE5hbWUpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpICA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG5cbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdExpc3QgPSgpPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5O1xuICAgIH1cblxuICAgIGxldCBnZXRQcm9qZWN0ID0gKCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmICggcHJvamVjdE5hbWUgPT1cIkhvbWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIGhvbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamVjdE5hbWUgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9kYXlQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamVjdE5hbWUgPT0gXCJNb250aFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9udGhQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCkgPT0gcHJvamVjdE5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdEJ5SW5kZXggPSAoIGluZGV4ICkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5W2luZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0SG9tZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob21lO1xuICAgIH1cblxuICAgIGxldCBnZXRUb2RheVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheUxpc3QgPSBbXTtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgICAgICBob21lLmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGVsZW1lbnQuZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApICk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5nZXREdWVEYXRlKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkgPT0gdG9kYXkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkgKSB7XG4gICAgICAgICAgICAgICAgdG9kYXlMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdCggdG9kYXlMaXN0LCBcIlRvZGF5XCIpO1xuICAgIH1cblxuICAgIGxldCBnZXRNb250aFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb250aExpc3QgPSBbXTtcbiAgICAgICAgbGV0IG1vbnRoID0gbmV3IERhdGUoKTtcbiAgICAgICAgaG9tZS5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDUsOSkgPT0gbW9udGgudG9TdHJpbmcoKS5zdWJzdHJpbmcoNSw5KSApIHtcbiAgICAgICAgICAgICAgICBtb250aExpc3QucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KCBtb250aExpc3QsIFwiTW9udGhcIik7XG4gICAgfVxuXG4gICAgXG5cbiAgICByZXR1cm4ge2dldEhvbWVQcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgZ2V0UHJvamVjdCxnZXRUb2RheVByb2plY3QsZ2V0TW9udGhQcm9qZWN0LGdldFByb2plY3RCeUluZGV4fTtcbn0pKCk7XG5cblxuLy8gKCgpID0+IHtcbi8vICAgICBsZXQgaW5ib3hBcnJheSA9IFsgbmV3IFRvZG8oXCJ1bnRpdGxlZFwiLCBcInNramRmXCIsIFwibHNqZGtmXCIpXTtcblxuLy8gICAgIGZ1bmN0aW9uIGFkZFRvZG8oIHRvZG8pe1xuLy8gICAgICAgICBpbmJveEFycmF5LnB1c2godG9kbyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKXtcbi8vICAgICAgICAgaW5ib3hBcnJheS5zcGxpY2UoIGluYm94QXJyYXkuaW5kZXhPZiggdG9kbyksIDEpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHJldHVybkluYm94QXJyYXkoKSB7XG4vLyAgICAgICAgIHJldHVybiBpbmJveEFycmF5O1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCByZXR1cm5JbmJveEFycmF5fTtcbi8vIH0pKCk7XG5cblxuZXhwb3J0IHtwcm9qZWN0TGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==