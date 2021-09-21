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




let current= (() => {

    let currentProjectSelected = "Home";

    let returnCurrent = () => {
        return currentProjectSelected;
    }

    let setCurrent = ( currentName ) => {
        currentProjectSelected = currentName;
    }

    return {returnCurrent, setCurrent};
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
        closeButton.innerHTML ="x";
        closeButton.className = "close-button";

        closeButton.onclick = () => {
            _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.removeProject( project.id );
            createCurrentProjects();
        }

        index++;


        project.appendChild(name);
        project.appendChild(closeButton);
        //console.log(project);
        currentProjects.appendChild(project);

    });


}



function getMainBody(){
    let mainBody = document.querySelector("#main-body");

    while (mainBody.firstChild) {
        mainBody.removeChild(mainBody.firstChild);
    }

    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject( current.returnCurrent() );

    let mainTitle = document.createElement("h2");
    mainTitle.innerHTML = currentProject.getProjectTitle();

    let mainList = document.createElement("div");
    mainList.id = "main-list";

    let addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.innerHTML = "Add Task";

    mainBody.appendChild(mainTitle);
    mainBody.appendChild(mainList);
    mainBody.appendChild(addTaskButton);

    

    createMainList();

}

function createMainList(){
    //get all possible todos, then simply list them
    let mainList = document.querySelector("#main-list");

    while (mainList.firstChild) {
        mainList.removeChild(mainList.firstChild);
    }

    let index = 0;

    let currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject( current.returnCurrent() );
    currentProject.getTodoList().forEach(element => {
        let listItem = createListItem( element );
        listItem.className = "list-item";
        listItem.id = index;
        index++;
        mainList.appendChild(listItem);
    });
}

function createListItem( todoItem) {
    let listItem = document.createElement("div");

    let itemTitle = document.createElement("p");
    itemTitle.innerHTML = todoItem.getTitle();

    let itemDate = document.createElement("p");
    itemDate.innerHTML = todoItem.getDueDate();

    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";

    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDate);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    deleteButton.onclick = () => {
        _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(current.returnCurrent()).removeTodo( listItem.id );
        createMainList();
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
/* harmony export */   "initializeEventHandlers": () => (/* binding */ initializeEventHandlers)
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

    let inputDescription = document.createElement("input");
    inputDescription.setAttribute("placeholder", "Description");
    inputDescription.setAttribute("name", "task-description");
    inputDescription.setAttribute("type", "text");

    let datePicker = document.createElement("input");
    datePicker.setAttribute("type", "datetime-local");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    datePicker.setAttribute("min", today);
    datePicker.setAttribute("name", "task-date-picker");

    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = "Cancel";

    addTaskForm.appendChild(inputTaskName);
    addTaskForm.appendChild(inputDescription);
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
        currentProject.addTodo( inputTaskName.value, datePicker.value, inputDescription.value);
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

function initializeEventHandlers() {
    addProjectEvent();
    addTaskEvent();
    addOptionsEvent();
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
        }
    });
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
        this.todoArray.push(new Todo( todoTitle, dueDate, description));
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
    constructor(todoTitle = "untitled", dueDate, description = "none") {
        this.todoTitle = todoTitle;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTitle(title){
        this.todoTitle = title; 
    }

    setDueDate( date){
        this.dueDate = date;
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
    let home =  new Project(  [ new Todo("untitled", "skjdf", "lsjdkf")], "Home" );


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
        if ( projectName =="Home") {
            return home;
        }
        else if (projectName == "Today") {
            return getTodayList();
        }
        else if (projectName == "Month") {
            return getMonthList();
        }
        else {
            projectArray.forEach(element => {
                if ( element.getProjectTitle == projectName) {
                    return element;
                }
            });
        }
    }

    let getTodayList = () => {
        let todayList = [];
        let today = new Date();
        console.log(projectArray);
        home.getTodoList().forEach(element => {
            if ( element.getDueDate().substring(0,10) == today ) {
                todayList.push(element);
            }
        });

        return todayList;
    }

    let getMonthList = () => {
        let monthList = [];
        let month = new Date();
        home.getTodoList().forEach(element => {
            if ( element.getDueDate().substring(0,10) == month.substring(0,7) ) {
                monthList.push(element);
            }
        });

        return monthList;
    }

    

    return {addProject, removeProject, getProjectList, getProject,getTodayList,getMonthList};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa3JCQUFrckIsUUFBUSxjQUFjLG9CQUFvQiw2QkFBNkIsNkJBQTZCLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxXQUFXLG1CQUFtQiwwQkFBMEIsa0JBQWtCLEdBQUcsZUFBZSxtQkFBbUIsNkJBQTZCLGlCQUFpQixHQUFHLHVCQUF1QixtQkFBbUIsNkJBQTZCLEdBQUcsY0FBYyxtQkFBbUIscUNBQXFDLFNBQVMsa0JBQWtCLG1CQUFtQiw2QkFBNkIsaUJBQWlCLDBCQUEwQixHQUFHLGdCQUFnQixvQkFBb0IsNEJBQTRCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFVBQVUsbUJBQW1CLFNBQVMsV0FBVyx5R0FBeUcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLGtxQkFBa3FCLFFBQVEsY0FBYyxvQkFBb0IsNkJBQTZCLDZCQUE2QixHQUFHLFlBQVksbUJBQW1CLEdBQUcsV0FBVyxtQkFBbUIsMEJBQTBCLGtCQUFrQixHQUFHLGVBQWUsbUJBQW1CLDZCQUE2QixpQkFBaUIsR0FBRyx1QkFBdUIsbUJBQW1CLDZCQUE2QixHQUFHLGNBQWMsbUJBQW1CLHFDQUFxQyxTQUFTLGtCQUFrQixtQkFBbUIsNkJBQTZCLGlCQUFpQiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDRCQUE0QixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxVQUFVLG1CQUFtQixTQUFTLHVCQUF1QjtBQUN6dEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNCQUFzQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZG1EO0FBQzlCOztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBMEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtRUFBeUI7QUFDckM7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsZ0VBQXNCOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixnRUFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsZ0VBQXNCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDc0U7O0FBRXRFOztBQUUwRDtBQUMxRCx5RUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUGtCO0FBRWpCOzs7QUFHeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE2Qiw2REFBc0IsQ0FBQyx1REFBcUI7QUFDekU7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsNkRBQXNCO0FBQzlCLFFBQVEsMkRBQXFCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQWtCO0FBQzlCLFlBQVksaURBQVc7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsSUFBSTs7O0FBR2tCOzs7Ozs7O1VDN0p0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbmJvZHlcXG4gICAgY29udGVudFxcbiAgICAgICAgaGVhZGVyXFxuICAgICAgICBib2R5XFxuICAgICAgICAgICAgaW5mb1RhYlxcbiAgICAgICAgICAgICAgICBIb21lIChpbmZvLXRhYi1idXR0b24pXFxuICAgICAgICAgICAgICAgIFRvZGF5IFxcbiAgICAgICAgICAgICAgICBXZWVrXFxuICAgICAgICAgICAgICAgIFByb2plY3RzIHRpdGxlIChoMilcXG4gICAgICAgICAgICAgICAgcHJvamVjdHMgKGN1cnJlbnQtcHJvamVjdHMpXFxuICAgICAgICAgICAgICAgICAgICBuYW1lIChwKVxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UtYnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZCBwcm9qZWN0XFxuICAgICAgICAgICAgbWFpbkJvZHlcXG4gICAgICAgICAgICAgICAgaW5ib3hUaXRsZVxcbiAgICAgICAgICAgICAgICBpbmJveExpc3QgKGluYm94LWxpc3QpXFxuICAgICAgICAgICAgICAgICAgICAobGlzdC1pdGVtKVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlXFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0ZVxcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZFRhc2tCdXR0b25cXG5cXG4gICAgICAgIGZvb3RlclxcblxcbiovXFxuXFxuYm9keSB7XFxuICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0Ojgwdmg7XFxufVxcblxcbiNpbmZvLXRhYiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MjB2dztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1ib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQkM7O0FBRUQ7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7O0FBRWxDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZOztBQUVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbmJvZHlcXG4gICAgY29udGVudFxcbiAgICAgICAgaGVhZGVyXFxuICAgICAgICBib2R5XFxuICAgICAgICAgICAgaW5mb1RhYlxcbiAgICAgICAgICAgICAgICBIb21lIChpbmZvLXRhYi1idXR0b24pXFxuICAgICAgICAgICAgICAgIFRvZGF5IFxcbiAgICAgICAgICAgICAgICBXZWVrXFxuICAgICAgICAgICAgICAgIFByb2plY3RzIHRpdGxlIChoMilcXG4gICAgICAgICAgICAgICAgcHJvamVjdHMgKGN1cnJlbnQtcHJvamVjdHMpXFxuICAgICAgICAgICAgICAgICAgICBuYW1lIChwKVxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UtYnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZCBwcm9qZWN0XFxuICAgICAgICAgICAgbWFpbkJvZHlcXG4gICAgICAgICAgICAgICAgaW5ib3hUaXRsZVxcbiAgICAgICAgICAgICAgICBpbmJveExpc3QgKGluYm94LWxpc3QpXFxuICAgICAgICAgICAgICAgICAgICAobGlzdC1pdGVtKVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlXFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0ZVxcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZFRhc2tCdXR0b25cXG5cXG4gICAgICAgIGZvb3RlclxcblxcbiovXFxuXFxuYm9keSB7XFxuICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0Ojgwdmg7XFxufVxcblxcbiNpbmZvLXRhYiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MjB2dztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1ib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgcHJvamVjdExpc3QsIGluYm94IH0gZnJvbSBcIi4vdG9kb0xpc3QuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgY3VycmVudD0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gXCJIb21lXCI7XG5cbiAgICBsZXQgcmV0dXJuQ3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgbGV0IHNldEN1cnJlbnQgPSAoIGN1cnJlbnROYW1lICkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gY3VycmVudE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZXR1cm5DdXJyZW50LCBzZXRDdXJyZW50fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgRE9NU2tlbGV0b24oKTtcblxufVxuXG5mdW5jdGlvbiBET01Ta2VsZXRvbigpIHtcblxuICAgIC8vY3JlYXRlIGhlYWRlciBET01cbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb2x1bW5Cb2R5KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG5cbiAgXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBcIlRvZG8gTGlzdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkJvZHkoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xuXG4gICAgLy9tdXN0IGFwcGVuZCBtYWluYm9keSBmaXJzdFxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvVGFiLmlkID0gXCJpbmZvLXRhYlwiO1xuXG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQm9keS5pZCA9IFwibWFpbi1ib2R5XCI7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGluZm9UYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjcmVhdGVJbmZvVGFiKCk7XG4gICAgZ2V0TWFpbkJvZHkoKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UYWIoKSB7XG5cblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBvcHRpb25zID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiTW9udGhcIl07XG4gICAgb3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb3B0aW9uQnV0dG9uLmNsYXNzTmFtZSA9IFwiaW5mby10YWItYnV0dG9uXCI7XG4gICAgICAgIG9wdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb25CdXR0b24uaWQgPSBlbGVtZW50O1xuICAgICAgICBpbmZvVGFiLmFwcGVuZENoaWxkKG9wdGlvbkJ1dHRvbik7ICAgIFxuICAgIH0pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgLy9mb3IgcHJvamVjdHMgaW4gdGhlIGxvY2Fsc3RvcmFnZSwgaGVyZSB3ZSB3YW50IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGVtXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3RzLmlkID0gXCJjdXJyZW50LXByb2plY3RzXCI7XG5cbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uXCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpO1xuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cblxuICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpIHtcbiAgICAvL2dldCBhbGwgY3VycmVudCBwcm9qZWN0cywgdGhlbiBmb3IgZWFjaCBjcmVhdGUgYW4gZWxlbWVudCBhbmQgYXBwZW5kIG90byB0aGluZ1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1wcm9qZWN0c1wiKTtcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudFByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3RzLnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3QuaWQgPSBpbmRleDtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID1cInhcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdCggcHJvamVjdC5pZCApO1xuICAgICAgICAgICAgY3JlYXRlQ3VycmVudFByb2plY3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrO1xuXG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIH0pO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGdldE1haW5Cb2R5KCl7XG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICB3aGlsZSAobWFpbkJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KCBjdXJyZW50LnJldHVybkN1cnJlbnQoKSApO1xuXG4gICAgbGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtYWluVGl0bGUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICBsZXQgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLWxpc3RcIjtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW5MaXN0KTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIFxuXG4gICAgY3JlYXRlTWFpbkxpc3QoKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluTGlzdCgpe1xuICAgIC8vZ2V0IGFsbCBwb3NzaWJsZSB0b2RvcywgdGhlbiBzaW1wbHkgbGlzdCB0aGVtXG4gICAgbGV0IG1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWxpc3RcIik7XG5cbiAgICB3aGlsZSAobWFpbkxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluTGlzdC5yZW1vdmVDaGlsZChtYWluTGlzdC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCggY3VycmVudC5yZXR1cm5DdXJyZW50KCkgKTtcbiAgICBjdXJyZW50UHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKCBlbGVtZW50ICk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtXCI7XG4gICAgICAgIGxpc3RJdGVtLmlkID0gaW5kZXg7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oIHRvZG9JdGVtKSB7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0uZ2V0VGl0bGUoKTtcblxuICAgIGxldCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1EYXRlLmlubmVySFRNTCA9IHRvZG9JdGVtLmdldER1ZURhdGUoKTtcblxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiZWRpdFwiO1xuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiZGVsZXRlXCI7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnJlbW92ZVRvZG8oIGxpc3RJdGVtLmlkICk7XG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGxldCBmb290ZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlckRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQ3JlYXRlZCBCeSBTZXVsY2hhbiBIYW5cIjtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuZXhwb3J0IHtjcmVhdGVDdXJyZW50UHJvamVjdHMgLCBjdXJyZW50LCBnZXRNYWluQm9keSwgY3JlYXRlTWFpbkxpc3R9O1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuXG5pbXBvcnQge2luaXRpYWxpemVFdmVudEhhbmRsZXJzfSBmcm9tIFwiLi9FdmVudEhhbmRsZXIuanNcIjtcbmluaXRpYWxpemVFdmVudEhhbmRsZXJzKCk7IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VycmVudFByb2plY3RzLCBjcmVhdGVNYWluTGlzdCwgY3VycmVudCwgZ2V0TWFpbkJvZHksIFxuICAgICAgICAgfSBmcm9tIFwiLi9ET01cIjtcblxuXG5mdW5jdGlvbiBhZGRUYXNrQ2xpY2tlZCgpIHtcbiAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICBsZXQgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInVudGl0bGVkXCIpO1xuICAgIGlucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stbmFtZVwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIpO1xuXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgdmFyIG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vSmFudWFyeSBpcyAwIVxuICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKSB7XG4gICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgfVxuXG4gICAgaWYgKG1tIDwgMTApIHtcbiAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICB9XG5cbiAgICB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibWluXCIsIHRvZGF5KTtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRhdGUtcGlja2VyXCIpO1xuXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbWFpbkJvZHkucmVtb3ZlQ2hpbGQobWFpbkJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGFkZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKCBpbnB1dFRhc2tOYW1lLnZhbHVlLCBkYXRlUGlja2VyLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgY3JlYXRlTWFpbkxpc3QoKTtcbiAgICAgICAgbWFpbkJvZHkucmVtb3ZlQ2hpbGQobWFpbkJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Q2xpY2tlZCgpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgbGV0IGluZm9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tdGFiXCIpO1xuXG4gICAgbGV0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUZXh0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJ1bnRpdGxlZFwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZGRcIjtcblxuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcblxuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG5cbiAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaW5mb1RhYi5yZW1vdmVDaGlsZChpbmZvVGFiLmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGlucHV0VGV4dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuICAgICAgICBpbmZvVGFiLnJlbW92ZUNoaWxkKGluZm9UYWIubGFzdENoaWxkKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRXZlbnRIYW5kbGVycygpIHtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBhZGRUYXNrRXZlbnQoKTtcbiAgICBhZGRPcHRpb25zRXZlbnQoKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEV2ZW50KCkge1xuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdENsaWNrZWQpO1xuXG5cbn1cblxuZnVuY3Rpb24gYWRkVGFza0V2ZW50KCkge1xuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0NsaWNrZWQpO1xufVxuXG5mdW5jdGlvbiBhZGRPcHRpb25zRXZlbnQoKSB7XG4gICAgbGV0IGFycmF5T3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmZvLXRhYi1idXR0b25cIikpO1xuXG4gICAgYXJyYXlPcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnQuc2V0Q3VycmVudChlbGVtZW50LmlkKTsgXG4gICAgICAgICAgICBnZXRNYWluQm9keSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgeyBpbml0aWFsaXplRXZlbnRIYW5kbGVycyB9OyIsIlxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCB0b2RvQXJyYXkgPSBbXSwgcHJvamVjdFRpdGxlID0gXCJ1bnRpdGxlZFwiICl7XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gdG9kb0FycmF5O1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG9UaXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaChuZXcgVG9kbyggdG9kb1RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICAgIFxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gICAgfVxufVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvVGl0bGUgPSBcInVudGl0bGVkXCIsIGR1ZURhdGUsIGRlc2NyaXB0aW9uID0gXCJub25lXCIpIHtcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSB0b2RvVGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgIHRoaXMudG9kb1RpdGxlID0gdGl0bGU7IFxuICAgIH1cblxuICAgIHNldER1ZURhdGUoIGRhdGUpe1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKCBwaHJhc2Upe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcGhyYXNlO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvVGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5cbmxldCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IGhvbWUgPSAgbmV3IFByb2plY3QoICBbIG5ldyBUb2RvKFwidW50aXRsZWRcIiwgXCJza2pkZlwiLCBcImxzamRrZlwiKV0sIFwiSG9tZVwiICk7XG5cblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbIG5ldyBQcm9qZWN0KFtdLCBcInVudGl0bGVkXCIpXTtcbiAgICBsZXQgYWRkUHJvamVjdCA9ICggcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09ICcnKXtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5wdXNoKCBuZXcgUHJvamVjdChbXSwgXCJ1bnRpdGxlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCggbmV3IFByb2plY3QoW10sIHByb2plY3ROYW1lKSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSAgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoIGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuXG4gICAgfVxuXG4gICAgbGV0IGdldFByb2plY3RMaXN0ID0oKT0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdCA9ICggcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgaWYgKCBwcm9qZWN0TmFtZSA9PVwiSG9tZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9tZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRUb2RheUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PSBcIk1vbnRoXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNb250aExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5nZXRQcm9qZWN0VGl0bGUgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2V0VG9kYXlMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXlMaXN0ID0gW107XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgICAgIGhvbWUuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmdldER1ZURhdGUoKS5zdWJzdHJpbmcoMCwxMCkgPT0gdG9kYXkgKSB7XG4gICAgICAgICAgICAgICAgdG9kYXlMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0b2RheUxpc3Q7XG4gICAgfVxuXG4gICAgbGV0IGdldE1vbnRoTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoTGlzdCA9IFtdO1xuICAgICAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSgpO1xuICAgICAgICBob21lLmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5nZXREdWVEYXRlKCkuc3Vic3RyaW5nKDAsMTApID09IG1vbnRoLnN1YnN0cmluZygwLDcpICkge1xuICAgICAgICAgICAgICAgIG1vbnRoTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9udGhMaXN0O1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHthZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgZ2V0UHJvamVjdCxnZXRUb2RheUxpc3QsZ2V0TW9udGhMaXN0fTtcbn0pKCk7XG5cblxuLy8gKCgpID0+IHtcbi8vICAgICBsZXQgaW5ib3hBcnJheSA9IFsgbmV3IFRvZG8oXCJ1bnRpdGxlZFwiLCBcInNramRmXCIsIFwibHNqZGtmXCIpXTtcblxuLy8gICAgIGZ1bmN0aW9uIGFkZFRvZG8oIHRvZG8pe1xuLy8gICAgICAgICBpbmJveEFycmF5LnB1c2godG9kbyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKXtcbi8vICAgICAgICAgaW5ib3hBcnJheS5zcGxpY2UoIGluYm94QXJyYXkuaW5kZXhPZiggdG9kbyksIDEpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHJldHVybkluYm94QXJyYXkoKSB7XG4vLyAgICAgICAgIHJldHVybiBpbmJveEFycmF5O1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCByZXR1cm5JbmJveEFycmF5fTtcbi8vIH0pKCk7XG5cblxuZXhwb3J0IHtwcm9qZWN0TGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==