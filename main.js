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
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").removeTodo(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().indexOf(element));
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


    let headContainer = document.createElement("div");

    let mainTitle = document.createElement("h2");

    mainTitle.innerHTML = currentProject.getProjectTitle();
    let label = document.createElement("label");
    label.innerHTML = "Due Date";
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

    let addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.innerHTML = "Add Task";

    mainBody.appendChild(headContainer);
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
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).unsortArray();
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").unsortArray();

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(current.returnCurrent()).removeTodo(listItem.id);
            if (todoItem.getDescription() != "Home") {
                _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().forEach(element => {
                    if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                        _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).removeTodo(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().indexOf(element));
                    }
                });
            }
        }
        else {
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").unsortArray();
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).unsortArray();

            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent()).removeTodo(listItem.id);
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().forEach(element => {
                if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                    console.log(todoItem);
                    console.log(element);
                    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").removeTodo(_todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject("Home").getTodoList().indexOf(element));
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
            if (e.target != editForm) {
                //console.log(324524542);
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
                todoItem.setDueDate(editDateForm.value);

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
        this.storedArray = [];
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

    sortArray() {
        let otherArray = [...this.todoArray];
        otherArray.sort( function(a,b){
            return a.getDueDate() - b.getDueDate();
        })
        
        this.storedArray = [...this.todoArray];
        this.todoArray = otherArray;
    }

    unsortArray() {
        this.todoArray = this.storedArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixJQUFJOzs7QUFHa0I7Ozs7Ozs7VUNuTXRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuYm9keVxcbiAgICBjb250ZW50XFxuICAgICAgICBoZWFkZXJcXG4gICAgICAgIGJvZHlcXG4gICAgICAgICAgICBpbmZvVGFiXFxuICAgICAgICAgICAgICAgIEhvbWUgKGluZm8tdGFiLWJ1dHRvbilcXG4gICAgICAgICAgICAgICAgVG9kYXkgXFxuICAgICAgICAgICAgICAgIFdlZWtcXG4gICAgICAgICAgICAgICAgUHJvamVjdHMgdGl0bGUgKGgyKVxcbiAgICAgICAgICAgICAgICBwcm9qZWN0cyAoY3VycmVudC1wcm9qZWN0cylcXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKHApXFxuICAgICAgICAgICAgICAgICAgICBjbG9zZS1idXR0b25cXG4gICAgICAgICAgICAgICAgYWRkIHByb2plY3RcXG4gICAgICAgICAgICBtYWluQm9keVxcbiAgICAgICAgICAgICAgICBpbmJveFRpdGxlXFxuICAgICAgICAgICAgICAgIGluYm94TGlzdCAoaW5ib3gtbGlzdClcXG4gICAgICAgICAgICAgICAgICAgIChsaXN0LWl0ZW0pXFxuICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGVcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRlXFxuICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25cXG4gICAgICAgICAgICAgICAgYWRkVGFza0J1dHRvblxcblxcbiAgICAgICAgZm9vdGVyXFxuXFxuKi9cXG5cXG5ib2R5IHtcXG4gICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6ODB2aDtcXG59XFxuXFxuI2luZm8tdGFiIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDoyMHZ3O1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcblxcbiNtYWluLWJvZHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjgwdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIFxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBCQzs7QUFFRDs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4Qjs7QUFFbEM7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuYm9keVxcbiAgICBjb250ZW50XFxuICAgICAgICBoZWFkZXJcXG4gICAgICAgIGJvZHlcXG4gICAgICAgICAgICBpbmZvVGFiXFxuICAgICAgICAgICAgICAgIEhvbWUgKGluZm8tdGFiLWJ1dHRvbilcXG4gICAgICAgICAgICAgICAgVG9kYXkgXFxuICAgICAgICAgICAgICAgIFdlZWtcXG4gICAgICAgICAgICAgICAgUHJvamVjdHMgdGl0bGUgKGgyKVxcbiAgICAgICAgICAgICAgICBwcm9qZWN0cyAoY3VycmVudC1wcm9qZWN0cylcXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKHApXFxuICAgICAgICAgICAgICAgICAgICBjbG9zZS1idXR0b25cXG4gICAgICAgICAgICAgICAgYWRkIHByb2plY3RcXG4gICAgICAgICAgICBtYWluQm9keVxcbiAgICAgICAgICAgICAgICBpbmJveFRpdGxlXFxuICAgICAgICAgICAgICAgIGluYm94TGlzdCAoaW5ib3gtbGlzdClcXG4gICAgICAgICAgICAgICAgICAgIChsaXN0LWl0ZW0pXFxuICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGVcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EYXRlXFxuICAgICAgICAgICAgICAgICAgICBlZGl0QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25cXG4gICAgICAgICAgICAgICAgYWRkVGFza0J1dHRvblxcblxcbiAgICAgICAgZm9vdGVyXFxuXFxuKi9cXG5cXG5ib2R5IHtcXG4gICBcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6ODB2aDtcXG59XFxuXFxuI2luZm8tdGFiIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDoyMHZ3O1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcblxcbiNtYWluLWJvZHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjgwdnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIFxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgaW5ib3ggfSBmcm9tIFwiLi90b2RvTGlzdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxldCBjdXJyZW50ID0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gXCJIb21lXCI7XG5cbiAgICBsZXQgcmV0dXJuQ3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgbGV0IHNldEN1cnJlbnQgPSAoY3VycmVudE5hbWUpID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3RTZWxlY3RlZCA9IGN1cnJlbnROYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJldHVybkN1cnJlbnQsIHNldEN1cnJlbnQgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgRE9NU2tlbGV0b24oKTtcblxufVxuXG5mdW5jdGlvbiBET01Ta2VsZXRvbigpIHtcblxuICAgIC8vY3JlYXRlIGhlYWRlciBET01cbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb2x1bW5Cb2R5KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG5cblxuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJUb2RvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb2x1bW5Cb2R5KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcblxuICAgIC8vbXVzdCBhcHBlbmQgbWFpbmJvZHkgZmlyc3RcbiAgICBsZXQgaW5mb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mb1RhYi5pZCA9IFwiaW5mby10YWJcIjtcblxuICAgIGxldCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJvZHkuaWQgPSBcIm1haW4tYm9keVwiO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChpbmZvVGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gICAgY3JlYXRlSW5mb1RhYigpO1xuICAgIGdldE1haW5Cb2R5KCk7XG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvVGFiKCkge1xuXG5cbiAgICBsZXQgaW5mb1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mby10YWJcIik7XG5cbiAgICBsZXQgb3B0aW9ucyA9IFtcIkhvbWVcIiwgXCJUb2RheVwiLCBcIk1vbnRoXCJdO1xuICAgIG9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG9wdGlvbkJ1dHRvbi5jbGFzc05hbWUgPSBcImluZm8tdGFiLWJ1dHRvblwiO1xuICAgICAgICBvcHRpb25CdXR0b24uaW5uZXJIVE1MID0gZWxlbWVudDtcbiAgICAgICAgb3B0aW9uQnV0dG9uLmlkID0gZWxlbWVudDtcbiAgICAgICAgaW5mb1RhYi5hcHBlbmRDaGlsZChvcHRpb25CdXR0b24pO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgLy9mb3IgcHJvamVjdHMgaW4gdGhlIGxvY2Fsc3RvcmFnZSwgaGVyZSB3ZSB3YW50IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGVtXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3RzLmlkID0gXCJjdXJyZW50LXByb2plY3RzXCI7XG5cbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uXCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpO1xuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cblxuICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpIHtcbiAgICAvL2dldCBhbGwgY3VycmVudCBwcm9qZWN0cywgdGhlbiBmb3IgZWFjaCBjcmVhdGUgYW4gZWxlbWVudCBhbmQgYXBwZW5kIG90byB0aGluZ1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1wcm9qZWN0c1wiKTtcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudFByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3RzLnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3QuaWQgPSBpbmRleDtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCJ4XCI7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnV0dG9uXCI7XG5cbiAgICAgICAgY2xvc2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSkuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLnJlbW92ZVRvZG8ocHJvamVjdExpc3QuZ2V0UHJvamVjdChcIkhvbWVcIikuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LnJlbW92ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgICAgICAvL2N1cnJlbnQuc2V0Q3VycmVudChcIkhvbWVcIik7XG4gICAgICAgICAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tYm9keVwiKTtcblxuICAgICAgICAgICAgd2hpbGUgKG1haW5Cb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG5cblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgY3VycmVudFByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgfSk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gZ2V0TWFpbkJvZHkoKSB7XG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICB3aGlsZSAobWFpbkJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcblxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgIH1cblxuXG4gICAgbGV0IGhlYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICAgIG1haW5UaXRsZS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdC5nZXRQcm9qZWN0VGl0bGUoKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGxldCBzb3J0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc29ydElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICAgIHNvcnRJbnB1dC5vbmNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIkhvbWVcIikge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLnVuc29ydEFycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSkudW5zb3J0QXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgIH1cblxuICAgIGhlYWRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgICBoZWFkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBoZWFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRJbnB1dCk7XG5cbiAgICBsZXQgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLWxpc3RcIjtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChoZWFkQ29udGFpbmVyKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiVG9kYXlcIiB8fCBjdXJyZW50LnJldHVybkN1cnJlbnQoKSA9PSBcIk1vbnRoXCIpIHtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgY3JlYXRlTWFpbkxpc3QoKTtcblxuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkxpc3QoKSB7XG4gICAgLy9nZXQgYWxsIHBvc3NpYmxlIHRvZG9zLCB0aGVuIHNpbXBseSBsaXN0IHRoZW1cbiAgICBsZXQgbWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbGlzdFwiKTtcblxuICAgIHdoaWxlIChtYWluTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5MaXN0LnJlbW92ZUNoaWxkKG1haW5MaXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJsaXN0LWl0ZW1cIjtcbiAgICAgICAgbGlzdEl0ZW0uaWQgPSBpbmRleDtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSh0b2RvSXRlbSkge1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG5cbiAgICBsZXQgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtRGF0ZS5pbm5lckhUTUwgPSB0b2RvSXRlbS5nZXREdWVEYXRlKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTUpO1xuXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCJlZGl0XCI7XG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJkZWxldGVcIjtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cblxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkpLnVuc29ydEFycmF5KCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS51bnNvcnRBcnJheSgpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS5yZW1vdmVUb2RvKGxpc3RJdGVtLmlkKTtcbiAgICAgICAgICAgIGlmICh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgodG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSkuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkgPT0gZWxlbWVudC5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgodG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSkucmVtb3ZlVG9kbyhwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKS5nZXRUb2RvTGlzdCgpLmluZGV4T2YoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS51bnNvcnRBcnJheSgpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnVuc29ydEFycmF5KCk7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKS5yZW1vdmVUb2RvKGxpc3RJdGVtLmlkKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkgPT0gZWxlbWVudC5nZXREdWVEYXRlKCkudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKS5yZW1vdmVUb2RvKHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpLmdldFRvZG9MaXN0KCkuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgfVxuXG4gICAgLy8gaXRlbVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlLCB0b2RvSXRlbSkge1xuICAgIC8vICAgICBhZGRFZGl0Rm9ybShlLCB0b2RvSXRlbSlcbiAgICAvLyB9KTtcbiAgICBpdGVtVGl0bGUub25jbGljayA9IChlKSA9PiB7XG5cblxuICAgICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGVkaXRGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBlZGl0Rm9ybS52YWx1ZSA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG5cbiAgICAgICAgaXRlbVRpdGxlLnJlcGxhY2VXaXRoKGVkaXRGb3JtKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBlZGl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coMzI0NTI0NTQyKTtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5zZXRUaXRsZShlZGl0Rm9ybS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJIb21lXCIgJiYgdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSA9PSBcIkhvbWVcIikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob21lUHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoXCJIb21lXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUluZGV4ID0gaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaG9tZVByb2plY3QuZ2V0VG9kb0xpc3QoKS5zcGxpY2UoaG9tZUluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleCh0b2RvSXRlbS5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSwgdG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpdGVtRGF0ZS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGVkaXREYXRlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZWRpdERhdGVGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgICAgIGVkaXREYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuXG4gICAgICAgIGl0ZW1EYXRlLnJlcGxhY2VXaXRoKGVkaXREYXRlRm9ybSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gZWRpdERhdGVGb3JtKSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uc2V0RHVlRGF0ZShlZGl0RGF0ZUZvcm0udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiSG9tZVwiICYmIHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkgPT0gXCJIb21lXCIpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50LnJldHVybkN1cnJlbnQoKSAhPSBcIkhvbWVcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZVByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvbWVJbmRleCA9IGhvbWVQcm9qZWN0LmdldFRvZG9MaXN0KCkuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVQcm9qZWN0LmdldFRvZG9MaXN0KCkuc3BsaWNlKGhvbWVJbmRleCwgMSwgdG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5SW5kZXgodG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmluZGV4T2YodG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLnNwbGljZShjdXJyZW50SW5kZXgsIDEsIHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVNYWluTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBsZXQgZm9vdGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkNyZWF0ZWQgQnkgU2V1bGNoYW4gSGFuXCI7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGVzY3JpcHRpb24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudFByb2plY3RzLCBjdXJyZW50LCBnZXRNYWluQm9keSwgY3JlYXRlTWFpbkxpc3QgfTtcblxuaW5pdGlhbGl6ZVNpdGUoKTtcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMsIGFkZFRhc2tFdmVudCB9IGZyb20gXCIuL0V2ZW50SGFuZGxlci5qc1wiO1xuaW1wb3J0IHsgaGUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbml0aWFsaXplRXZlbnRIYW5kbGVycygpOyIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUN1cnJlbnRQcm9qZWN0cywgY3JlYXRlTWFpbkxpc3QsIGN1cnJlbnQsIGdldE1haW5Cb2R5LCBcbiAgICAgICAgIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQge2FzeW5jLCBmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuXG5mdW5jdGlvbiBhZGRUYXNrQ2xpY2tlZCgpIHtcbiAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICBsZXQgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInVudGl0bGVkXCIpO1xuICAgIGlucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZVwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBjdXJyZW50LnJldHVybkN1cnJlbnQoKTtcbiAgICAvL2NvbnNvbGUubG9nKGlucHV0RGVzY3JpcHRpb24pO1xuICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG5cbiAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGF0ZS1waWNrZXJcIik7XG4gICAgLy8gbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyBkYXRlUGlja2VyLnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUoKSk7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZGRcIjtcblxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcblxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0VGFza05hbWUpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRlUGlja2VyLnZhbHVlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyggbmV3IERhdGUoKSk7XG5cbiAgICAgICAgaWYgKCBpbnB1dFRhc2tOYW1lLnZhbHVlID09IFwiXCIpe1xuICAgICAgICAgICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9IFwidW50aXRsZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICE9IFwiSG9tZVwiKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmdldEhvbWVQcm9qZWN0KCkuYWRkVG9kbyhpbnB1dFRhc2tOYW1lLnZhbHVlLCBkYXRlUGlja2VyLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG8oIGlucHV0VGFza05hbWUudmFsdWUsIGRhdGVQaWNrZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENsaWNrZWQoKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidW50aXRsZWRcIik7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGluZm9UYWIucmVtb3ZlQ2hpbGQoaW5mb1RhYi5sYXN0Q2hpbGQpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChpbnB1dFRleHQudmFsdWUpO1xuICAgICAgICBjcmVhdGVDdXJyZW50UHJvamVjdHMoKTtcbiAgICAgICAgaW5mb1RhYi5yZW1vdmVDaGlsZChpbmZvVGFiLmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2plY3QoIGluZGV4KXtcbiAgICBjb25zb2xlLmxvZyhcImNoYWdlY3VycmVudFwiKTtcbiAgICBjdXJyZW50LnNldEN1cnJlbnQoaW5kZXgpO1xuICAgIGdldE1haW5Cb2R5KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG4gICAgYWRkT3B0aW9uc0V2ZW50KCk7XG4gICAgYWRkUHJvamVjdExpc3RFdmVudCgpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Q2xpY2tlZCk7XG5cblxufVxuXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnQoKSB7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrQ2xpY2tlZCk7XG59XG5cbmZ1bmN0aW9uIGFkZE9wdGlvbnNFdmVudCgpIHtcbiAgICBsZXQgYXJyYXlPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8tdGFiLWJ1dHRvblwiKSk7XG5cbiAgICBhcnJheU9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudC5zZXRDdXJyZW50KGVsZW1lbnQuaWQpOyBcbiAgICAgICAgICAgIGdldE1haW5Cb2R5KCk7XG4gICAgICAgICAgICBhZGRUYXNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdEV2ZW50KCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1wcm9qZWN0c1wiKTtcblxuICAgIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdCggZS50YXJnZXQuaWQgKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG59XG5leHBvcnQgeyBpbml0aWFsaXplRXZlbnRIYW5kbGVycywgYWRkVGFza0V2ZW50IH07IiwiXG5cbmNsYXNzIFByb2plY3R7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHRvZG9BcnJheSA9IFtdLCBwcm9qZWN0VGl0bGUgPSBcInVudGl0bGVkXCIgKXtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkgPSB0b2RvQXJyYXk7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICB0aGlzLnN0b3JlZEFycmF5ID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvVGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZHVlRGF0ZS5yZXBsYWNlKC8tL2csICdcXC8nKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRlKTtcbiAgICAgICAgaWYoIG5ld0RhdGUuZ2V0VGltZSgpICE9PSBuZXdEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaChuZXcgVG9kbyggdG9kb1RpdGxlLCBuZXdEYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICAgIFxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gICAgfVxuXG4gICAgc29ydEFycmF5KCkge1xuICAgICAgICBsZXQgb3RoZXJBcnJheSA9IFsuLi50aGlzLnRvZG9BcnJheV07XG4gICAgICAgIG90aGVyQXJyYXkuc29ydCggZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgIHJldHVybiBhLmdldER1ZURhdGUoKSAtIGIuZ2V0RHVlRGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdG9yZWRBcnJheSA9IFsuLi50aGlzLnRvZG9BcnJheV07XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gb3RoZXJBcnJheTtcbiAgICB9XG5cbiAgICB1bnNvcnRBcnJheSgpIHtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkgPSB0aGlzLnN0b3JlZEFycmF5O1xuICAgIH1cbiAgICBcbn1cblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodG9kb1RpdGxlID0gXCJ1bnRpdGxlZFwiLCBkdWVEYXRlID0gbmV3IERhdGUoKSwgZGVzY3JpcHRpb24gPSBcIkhvbWVcIikge1xuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IHRvZG9UaXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSB0aXRsZTsgXG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZSggZGF0ZSl7XG4gICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS5yZXBsYWNlKC8tL2csICdcXC8nKSk7XG4gICAgICAgIGlmKCBuZXdEYXRlLmdldFRpbWUoKSAhPT0gbmV3RGF0ZS5nZXRUaW1lKCkpe1xuICAgICAgICAgICAgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbiggcGhyYXNlKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBocmFzZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb1RpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuXG5sZXQgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICAgIGxldCBob21lID0gIG5ldyBQcm9qZWN0KCAgWyBuZXcgVG9kbyhcInVudGl0bGVkXCIsIG5ldyBEYXRlKCksIFwiSG9tZVwiKV0sIFwiSG9tZVwiICk7XG5cblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbIG5ldyBQcm9qZWN0KFtdLCBcInVudGl0bGVkXCIpXTtcbiAgICBsZXQgYWRkUHJvamVjdCA9ICggcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09ICcnKXtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5wdXNoKCBuZXcgUHJvamVjdChbXSwgXCJ1bnRpdGxlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCggbmV3IFByb2plY3QoW10sIHByb2plY3ROYW1lKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSAgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoIGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuXG4gICAgfVxuXG4gICAgbGV0IGdldFByb2plY3RMaXN0ID0oKT0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdCA9ICggcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAoIHByb2plY3ROYW1lID09XCJIb21lXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBob21lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2plY3ROYW1lID09IFwiVG9kYXlcIikge1xuICAgICAgICAgICAgcmV0dXJuIGdldFRvZGF5UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2plY3ROYW1lID09IFwiTW9udGhcIikge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1vbnRoUHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50LmdldFByb2plY3RUaXRsZSgpID09IHByb2plY3ROYW1lICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGdldFByb2plY3RCeUluZGV4ID0gKCBpbmRleCApID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheVtpbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGdldEhvbWVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaG9tZTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0VG9kYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXlMaXN0ID0gW107XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgaG9tZS5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpLnN1YnN0cmluZygwLDEwKSApO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApID09IHRvZGF5LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApICkge1xuICAgICAgICAgICAgICAgIHRvZGF5TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3QoIHRvZGF5TGlzdCwgXCJUb2RheVwiKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0TW9udGhQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhMaXN0ID0gW107XG4gICAgICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGhvbWUuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpLnN1YnN0cmluZyg1LDkpID09IG1vbnRoLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDUsOSkgKSB7XG4gICAgICAgICAgICAgICAgbW9udGhMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdCggbW9udGhMaXN0LCBcIk1vbnRoXCIpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtnZXRIb21lUHJvamVjdCwgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdExpc3QsIGdldFByb2plY3QsZ2V0VG9kYXlQcm9qZWN0LGdldE1vbnRoUHJvamVjdCxnZXRQcm9qZWN0QnlJbmRleH07XG59KSgpO1xuXG5cbi8vICgoKSA9PiB7XG4vLyAgICAgbGV0IGluYm94QXJyYXkgPSBbIG5ldyBUb2RvKFwidW50aXRsZWRcIiwgXCJza2pkZlwiLCBcImxzamRrZlwiKV07XG5cbi8vICAgICBmdW5jdGlvbiBhZGRUb2RvKCB0b2RvKXtcbi8vICAgICAgICAgaW5ib3hBcnJheS5wdXNoKHRvZG8pO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbyl7XG4vLyAgICAgICAgIGluYm94QXJyYXkuc3BsaWNlKCBpbmJveEFycmF5LmluZGV4T2YoIHRvZG8pLCAxKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiByZXR1cm5JbmJveEFycmF5KCkge1xuLy8gICAgICAgICByZXR1cm4gaW5ib3hBcnJheTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbywgcmV0dXJuSW5ib3hBcnJheX07XG4vLyB9KSgpO1xuXG5cbmV4cG9ydCB7cHJvamVjdExpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ET00uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=