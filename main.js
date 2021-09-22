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

    if (currentProject === undefined) {
        currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent());
    }



    let mainTitle = document.createElement("h2");
    console.log( currentProject);
    mainTitle.innerHTML = currentProject.getProjectTitle();

    let mainList = document.createElement("div");
    mainList.id = "main-list";

    let addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.innerHTML = "Add Task";

    mainBody.appendChild(mainTitle);
    mainBody.appendChild(mainList);
    mainBody.appendChild(addTaskButton);
    if (current.returnCurrent() == "Today" || current.returnCurrent() == "Month"){
        addTaskButton.style.display = "none";
    }
    

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
    if (currentProject === undefined) {
        currentProject = _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(current.returnCurrent());
    }
    currentProject.getTodoList().forEach(element => {
        let listItem = createListItem( element );
        listItem.className = "list-item";
        listItem.id = index;
        index++;
        mainList.appendChild(listItem);
    });

    //console.log(currentProject);

}

function createListItem( todoItem) {
    let listItem = document.createElement("div");

    let itemTitle = document.createElement("p");
    itemTitle.innerHTML = todoItem.getTitle();

    let itemDate = document.createElement("p");
    itemDate.innerHTML = todoItem.getDueDate().toString().substring(0,15);

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

    let inputDescription = document.createElement("input");
    inputDescription.setAttribute("placeholder", "Description");
    inputDescription.setAttribute("name", "task-description");
    inputDescription.setAttribute("type", "text");

    let datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");

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
        console.log("add clicked");
        let currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProject(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        if (currentProject === undefined) {
            currentProject = _todoList__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectByIndex(_DOM__WEBPACK_IMPORTED_MODULE_1__.current.returnCurrent());
        }
        //console.log(datePicker.value);
        //console.log( new Date());
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

function changeCurrentProject( index){
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
        this.todoArray.push(new Todo( todoTitle, new Date(dueDate), description));
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
    constructor(todoTitle = "untitled", dueDate = new Date(), description = "none") {
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
    let home =  new Project(  [ new Todo("untitled", new Date(), "lsjdkf")], "Home" );


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

    

    return {addProject, removeProject, getProjectList, getProject,getTodayProject,getMonthProject,getProjectByIndex};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbmJvZHlcXG4gICAgY29udGVudFxcbiAgICAgICAgaGVhZGVyXFxuICAgICAgICBib2R5XFxuICAgICAgICAgICAgaW5mb1RhYlxcbiAgICAgICAgICAgICAgICBIb21lIChpbmZvLXRhYi1idXR0b24pXFxuICAgICAgICAgICAgICAgIFRvZGF5IFxcbiAgICAgICAgICAgICAgICBXZWVrXFxuICAgICAgICAgICAgICAgIFByb2plY3RzIHRpdGxlIChoMilcXG4gICAgICAgICAgICAgICAgcHJvamVjdHMgKGN1cnJlbnQtcHJvamVjdHMpXFxuICAgICAgICAgICAgICAgICAgICBuYW1lIChwKVxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UtYnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZCBwcm9qZWN0XFxuICAgICAgICAgICAgbWFpbkJvZHlcXG4gICAgICAgICAgICAgICAgaW5ib3hUaXRsZVxcbiAgICAgICAgICAgICAgICBpbmJveExpc3QgKGluYm94LWxpc3QpXFxuICAgICAgICAgICAgICAgICAgICAobGlzdC1pdGVtKVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlXFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0ZVxcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZFRhc2tCdXR0b25cXG5cXG4gICAgICAgIGZvb3RlclxcblxcbiovXFxuXFxuYm9keSB7XFxuICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0Ojgwdmg7XFxufVxcblxcbiNpbmZvLXRhYiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MjB2dztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1ib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQkM7O0FBRUQ7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7O0FBRWxDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZOztBQUVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbmJvZHlcXG4gICAgY29udGVudFxcbiAgICAgICAgaGVhZGVyXFxuICAgICAgICBib2R5XFxuICAgICAgICAgICAgaW5mb1RhYlxcbiAgICAgICAgICAgICAgICBIb21lIChpbmZvLXRhYi1idXR0b24pXFxuICAgICAgICAgICAgICAgIFRvZGF5IFxcbiAgICAgICAgICAgICAgICBXZWVrXFxuICAgICAgICAgICAgICAgIFByb2plY3RzIHRpdGxlIChoMilcXG4gICAgICAgICAgICAgICAgcHJvamVjdHMgKGN1cnJlbnQtcHJvamVjdHMpXFxuICAgICAgICAgICAgICAgICAgICBuYW1lIChwKVxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UtYnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZCBwcm9qZWN0XFxuICAgICAgICAgICAgbWFpbkJvZHlcXG4gICAgICAgICAgICAgICAgaW5ib3hUaXRsZVxcbiAgICAgICAgICAgICAgICBpbmJveExpc3QgKGluYm94LWxpc3QpXFxuICAgICAgICAgICAgICAgICAgICAobGlzdC1pdGVtKVxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlXFxuICAgICAgICAgICAgICAgICAgICBpdGVtRGF0ZVxcbiAgICAgICAgICAgICAgICAgICAgZWRpdEJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXFxuICAgICAgICAgICAgICAgIGFkZFRhc2tCdXR0b25cXG5cXG4gICAgICAgIGZvb3RlclxcblxcbiovXFxuXFxuYm9keSB7XFxuICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jYm9keSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0Ojgwdmg7XFxufVxcblxcbiNpbmZvLXRhYiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MjB2dztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1ib2R5IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgcHJvamVjdExpc3QsIGluYm94IH0gZnJvbSBcIi4vdG9kb0xpc3QuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgY3VycmVudD0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gXCJIb21lXCI7XG5cbiAgICBsZXQgcmV0dXJuQ3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgbGV0IHNldEN1cnJlbnQgPSAoIGN1cnJlbnROYW1lICkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdFNlbGVjdGVkID0gY3VycmVudE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZXR1cm5DdXJyZW50LCBzZXRDdXJyZW50fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTaXRlKCkge1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgRE9NU2tlbGV0b24oKTtcblxufVxuXG5mdW5jdGlvbiBET01Ta2VsZXRvbigpIHtcblxuICAgIC8vY3JlYXRlIGhlYWRlciBET01cbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb2x1bW5Cb2R5KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG5cbiAgXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSBcIlRvZG8gTGlzdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkJvZHkoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9keS5pZCA9IFwiYm9keVwiO1xuXG4gICAgLy9tdXN0IGFwcGVuZCBtYWluYm9keSBmaXJzdFxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvVGFiLmlkID0gXCJpbmZvLXRhYlwiO1xuXG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQm9keS5pZCA9IFwibWFpbi1ib2R5XCI7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGluZm9UYWIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkJvZHkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjcmVhdGVJbmZvVGFiKCk7XG4gICAgZ2V0TWFpbkJvZHkoKTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UYWIoKSB7XG5cblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBvcHRpb25zID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiTW9udGhcIl07XG4gICAgb3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgb3B0aW9uQnV0dG9uLmNsYXNzTmFtZSA9IFwiaW5mby10YWItYnV0dG9uXCI7XG4gICAgICAgIG9wdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb25CdXR0b24uaWQgPSBlbGVtZW50O1xuICAgICAgICBpbmZvVGFiLmFwcGVuZENoaWxkKG9wdGlvbkJ1dHRvbik7ICAgIFxuICAgIH0pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgLy9mb3IgcHJvamVjdHMgaW4gdGhlIGxvY2Fsc3RvcmFnZSwgaGVyZSB3ZSB3YW50IHRvIGNyZWF0ZSBvcHRpb25zIGZvciB0aGVtXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudFByb2plY3RzLmlkID0gXCJjdXJyZW50LXByb2plY3RzXCI7XG5cbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uXCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpO1xuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cblxuICAgIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRQcm9qZWN0cygpIHtcbiAgICAvL2dldCBhbGwgY3VycmVudCBwcm9qZWN0cywgdGhlbiBmb3IgZWFjaCBjcmVhdGUgYW4gZWxlbWVudCBhbmQgYXBwZW5kIG90byB0aGluZ1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1wcm9qZWN0c1wiKTtcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudFByb2plY3RzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3RzLnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3QuaWQgPSBpbmRleDtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID1cInhcIjtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdCggcHJvamVjdC5pZCApO1xuICAgICAgICAgICAgY3JlYXRlQ3VycmVudFByb2plY3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrO1xuXG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIH0pO1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGdldE1haW5Cb2R5KCl7XG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICB3aGlsZSAobWFpbkJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQm9keS5yZW1vdmVDaGlsZChtYWluQm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KCBjdXJyZW50LnJldHVybkN1cnJlbnQoKSApO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG4gICAgfVxuXG5cblxuICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc29sZS5sb2coIGN1cnJlbnRQcm9qZWN0KTtcbiAgICBtYWluVGl0bGUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICBsZXQgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLWxpc3RcIjtcblxuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW5MaXN0KTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICBpZiAoY3VycmVudC5yZXR1cm5DdXJyZW50KCkgPT0gXCJUb2RheVwiIHx8IGN1cnJlbnQucmV0dXJuQ3VycmVudCgpID09IFwiTW9udGhcIil7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBcblxuICAgIGNyZWF0ZU1haW5MaXN0KCk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkxpc3QoKXtcbiAgICAvL2dldCBhbGwgcG9zc2libGUgdG9kb3MsIHRoZW4gc2ltcGx5IGxpc3QgdGhlbVxuICAgIGxldCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1saXN0XCIpO1xuXG4gICAgd2hpbGUgKG1haW5MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkxpc3QucmVtb3ZlQ2hpbGQobWFpbkxpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QoIGN1cnJlbnQucmV0dXJuQ3VycmVudCgpICk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlJbmRleChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gY3JlYXRlTGlzdEl0ZW0oIGVsZW1lbnQgKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJsaXN0LWl0ZW1cIjtcbiAgICAgICAgbGlzdEl0ZW0uaWQgPSBpbmRleDtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oIHRvZG9JdGVtKSB7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0uZ2V0VGl0bGUoKTtcblxuICAgIGxldCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1EYXRlLmlubmVySFRNTCA9IHRvZG9JdGVtLmdldER1ZURhdGUoKS50b1N0cmluZygpLnN1YnN0cmluZygwLDE1KTtcblxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiZWRpdFwiO1xuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiZGVsZXRlXCI7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3QoY3VycmVudC5yZXR1cm5DdXJyZW50KCkpLnJlbW92ZVRvZG8oIGxpc3RJdGVtLmlkICk7XG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGxldCBmb290ZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlckRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQ3JlYXRlZCBCeSBTZXVsY2hhbiBIYW5cIjtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuZXhwb3J0IHtjcmVhdGVDdXJyZW50UHJvamVjdHMgLCBjdXJyZW50LCBnZXRNYWluQm9keSwgY3JlYXRlTWFpbkxpc3R9O1xuXG5pbml0aWFsaXplU2l0ZSgpO1xuXG5pbXBvcnQge2luaXRpYWxpemVFdmVudEhhbmRsZXJzfSBmcm9tIFwiLi9FdmVudEhhbmRsZXIuanNcIjtcbmluaXRpYWxpemVFdmVudEhhbmRsZXJzKCk7IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VycmVudFByb2plY3RzLCBjcmVhdGVNYWluTGlzdCwgY3VycmVudCwgZ2V0TWFpbkJvZHksIFxuICAgICAgICAgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7YXN5bmMsIGZvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5cbmZ1bmN0aW9uIGFkZFRhc2tDbGlja2VkKCkge1xuICAgIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tYm9keVwiKTtcblxuICAgIGxldCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRhc2tOYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidW50aXRsZWRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1uYW1lXCIpO1xuICAgIGlucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIHZhciBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvL0phbnVhcnkgaXMgMCFcbiAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgICBkZCA9ICcwJyArIGRkO1xuICAgIH1cblxuICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgIG1tID0gJzAnICsgbW07XG4gICAgfVxuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlLXBpY2tlclwiKTtcblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZFwiO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xuXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUYXNrTmFtZSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBhZGRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGQgY2xpY2tlZFwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChjdXJyZW50LnJldHVybkN1cnJlbnQoKSk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3RCeUluZGV4KGN1cnJlbnQucmV0dXJuQ3VycmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGVQaWNrZXIudmFsdWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgY3VycmVudFByb2plY3QuYWRkVG9kbyggaW5wdXRUYXNrTmFtZS52YWx1ZSwgZGF0ZVBpY2tlci52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZU1haW5MaXN0KCk7XG4gICAgICAgIG1haW5Cb2R5LnJlbW92ZUNoaWxkKG1haW5Cb2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdENsaWNrZWQoKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwidW50aXRsZWRcIik7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGluZm9UYWIucmVtb3ZlQ2hpbGQoaW5mb1RhYi5sYXN0Q2hpbGQpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChpbnB1dFRleHQudmFsdWUpO1xuICAgICAgICBjcmVhdGVDdXJyZW50UHJvamVjdHMoKTtcbiAgICAgICAgaW5mb1RhYi5yZW1vdmVDaGlsZChpbmZvVGFiLmxhc3RDaGlsZCk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudFByb2plY3QoIGluZGV4KXtcbiAgICBjdXJyZW50LnNldEN1cnJlbnQoaW5kZXgpO1xuICAgIGdldE1haW5Cb2R5KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG5cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG4gICAgYWRkVGFza0V2ZW50KCk7XG4gICAgYWRkT3B0aW9uc0V2ZW50KCk7XG4gICAgYWRkUHJvamVjdExpc3RFdmVudCgpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0Q2xpY2tlZCk7XG5cblxufVxuXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnQoKSB7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrQ2xpY2tlZCk7XG59XG5cbmZ1bmN0aW9uIGFkZE9wdGlvbnNFdmVudCgpIHtcbiAgICBsZXQgYXJyYXlPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8tdGFiLWJ1dHRvblwiKSk7XG5cbiAgICBhcnJheU9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudC5zZXRDdXJyZW50KGVsZW1lbnQuaWQpOyBcbiAgICAgICAgICAgIGdldE1haW5Cb2R5KCk7XG4gICAgICAgICAgICBhZGRUYXNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGlzdEV2ZW50KCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1wcm9qZWN0c1wiKTtcblxuICAgIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdCggZS50YXJnZXQuaWQgKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG59XG5leHBvcnQgeyBpbml0aWFsaXplRXZlbnRIYW5kbGVycywgYWRkVGFza0V2ZW50IH07IiwiXG5cbmNsYXNzIFByb2plY3R7XG4gICAgXG4gICAgY29uc3RydWN0b3IoIHRvZG9BcnJheSA9IFtdLCBwcm9qZWN0VGl0bGUgPSBcInVudGl0bGVkXCIgKXtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkgPSB0b2RvQXJyYXk7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kb1RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKG5ldyBUb2RvKCB0b2RvVGl0bGUsIG5ldyBEYXRlKGR1ZURhdGUpLCBkZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICAgIFxuICAgIH1cblxuICAgIGdldFRvZG9MaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XG4gICAgfVxufVxuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvVGl0bGUgPSBcInVudGl0bGVkXCIsIGR1ZURhdGUgPSBuZXcgRGF0ZSgpLCBkZXNjcmlwdGlvbiA9IFwibm9uZVwiKSB7XG4gICAgICAgIHRoaXMudG9kb1RpdGxlID0gdG9kb1RpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpe1xuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IHRpdGxlOyBcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKCBkYXRlKXtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbiggcGhyYXNlKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHBocmFzZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb1RpdGxlO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuXG5sZXQgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICAgIGxldCBob21lID0gIG5ldyBQcm9qZWN0KCAgWyBuZXcgVG9kbyhcInVudGl0bGVkXCIsIG5ldyBEYXRlKCksIFwibHNqZGtmXCIpXSwgXCJIb21lXCIgKTtcblxuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFsgbmV3IFByb2plY3QoW10sIFwidW50aXRsZWRcIildO1xuICAgIGxldCBhZGRQcm9qZWN0ID0gKCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gJycpe1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnB1c2goIG5ldyBQcm9qZWN0KFtdLCBcInVudGl0bGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RBcnJheS5wdXNoKCBuZXcgUHJvamVjdChbXSwgcHJvamVjdE5hbWUpKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpICA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZSggaW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG5cbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdExpc3QgPSgpPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5O1xuICAgIH1cblxuICAgIGxldCBnZXRQcm9qZWN0ID0gKCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmICggcHJvamVjdE5hbWUgPT1cIkhvbWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIGhvbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamVjdE5hbWUgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9kYXlQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamVjdE5hbWUgPT0gXCJNb250aFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9udGhQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCkgPT0gcHJvamVjdE5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2V0UHJvamVjdEJ5SW5kZXggPSAoIGluZGV4ICkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5W2luZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0VG9kYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXlMaXN0ID0gW107XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgICAgICAgaG9tZS5nZXRUb2RvTGlzdCgpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpLnN1YnN0cmluZygwLDEwKSApO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuZ2V0RHVlRGF0ZSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApID09IHRvZGF5LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApICkge1xuICAgICAgICAgICAgICAgIHRvZGF5TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3QoIHRvZGF5TGlzdCwgXCJUb2RheVwiKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0TW9udGhQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhMaXN0ID0gW107XG4gICAgICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGhvbWUuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmdldER1ZURhdGUoKS50b1N0cmluZygpLnN1YnN0cmluZyg1LDkpID09IG1vbnRoLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDUsOSkgKSB7XG4gICAgICAgICAgICAgICAgbW9udGhMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdCggbW9udGhMaXN0LCBcIk1vbnRoXCIpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHthZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgZ2V0UHJvamVjdCxnZXRUb2RheVByb2plY3QsZ2V0TW9udGhQcm9qZWN0LGdldFByb2plY3RCeUluZGV4fTtcbn0pKCk7XG5cblxuLy8gKCgpID0+IHtcbi8vICAgICBsZXQgaW5ib3hBcnJheSA9IFsgbmV3IFRvZG8oXCJ1bnRpdGxlZFwiLCBcInNramRmXCIsIFwibHNqZGtmXCIpXTtcblxuLy8gICAgIGZ1bmN0aW9uIGFkZFRvZG8oIHRvZG8pe1xuLy8gICAgICAgICBpbmJveEFycmF5LnB1c2godG9kbyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKXtcbi8vICAgICAgICAgaW5ib3hBcnJheS5zcGxpY2UoIGluYm94QXJyYXkuaW5kZXhPZiggdG9kbyksIDEpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHJldHVybkluYm94QXJyYXkoKSB7XG4vLyAgICAgICAgIHJldHVybiBpbmJveEFycmF5O1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCByZXR1cm5JbmJveEFycmF5fTtcbi8vIH0pKCk7XG5cblxuZXhwb3J0IHtwcm9qZWN0TGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0RPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==