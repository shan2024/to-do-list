/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "inbox": () => (/* binding */ inbox)
/* harmony export */ });


class Project{
    
    constructor( todoArray = [], projectTitle = "untitled" ){
        this.todoArray = todoArray;
        this.projectTitle = projectTitle;
    }

    addTodo(todo) {
        todoArray.push(todo);
    }

    removeTodo(todo) {
        this.todoArray.splice( this.todoArray.indexOf(todo), 1);
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

    let projectArray = [new Project([], "untitled")];

    let addProject = ( project) => {
        projectArray.push(project);
    }

    let removeProject = (project)  => {
        projectArray.splice( projectArray.indexOf(project), 1);
    }

    let getProjectList =()=> {
        return projectArray;
    }

    return {addProject, removeProject, getProjectList};
})();

let inbox = (() => {
    let inboxArray = [ new Todo("untitled", "skjdf", "lsjdkf")];

    function addTodo( todo){
        inboxArray.push(todo);
    }

    function removeTodo(todo){
        inboxArray.splice( inboxArray.indexOf( todo), 1);
    }

    function returnInboxArray() {
        return inboxArray;
    }
    return { addTodo, removeTodo, returnInboxArray};
})();





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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");



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
    getInboxBody();


}

function createInfoTab() {

    let body = document.querySelector('#body');

    let infoTab = document.querySelector("#info-tab");

    let options = ["Home", "Today", "Week"];
    options.forEach(element => {
        let optionButton = document.createElement("button");
        optionButton.className = "info-tab-button";
        optionButton.innerHTML = element;
        infoTab.appendChild(optionButton);    
    });

    let projectTitle = document.createElement("h2");
    projectTitle.innerHTML = "Projects";

    //for projects in the localstorage, here we want to create options for them
    let currentProjects = document.createElement("div");
    currentProjects.id = "current-projects";

    let addProjectButton = document.createElement("button");
    addProjectButton.innerHTML = "Add Project";

    infoTab.appendChild(projectTitle);
    infoTab.appendChild(currentProjects);
    infoTab.appendChild(addProjectButton);

    body.appendChild(infoTab);

    createCurrentProjects();

}

function createCurrentProjects() {
    //get all current projects, then for each create an element and append oto thing
    let currentProjects = document.getElementById("current-projects");
    //console.log(currentProjects);

    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.projectList.getProjectList().forEach(element => {
        let project = document.createElement("div");
        let name = document.createElement("p");
        name.innerHTML = element.getProjectTitle();

        let closeButton = document.createElement("button");
        closeButton.className = "close-button";

        project.appendChild(name);
        project.appendChild(closeButton);
        //console.log(project);
        currentProjects.appendChild(project);
    });


}

function getInboxBody(){
    let mainBody = document.querySelector("#main-body");

    let inboxTitle = document.createElement("h2");
    inboxTitle.innerHTML = "Inbox";

    let inboxList = document.createElement("div");
    inboxList.id = "inbox-list";

    let addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "Add Task";

    mainBody.appendChild(inboxTitle);
    mainBody.appendChild(inboxList);
    mainBody.appendChild(addTaskButton);

    createInboxList();

}

function createInboxList(){
    //get all possible todos, then simply list them
    let inboxList = document.querySelector("#inbox-list");

    _todoList_js__WEBPACK_IMPORTED_MODULE_0__.inbox.returnInboxArray().forEach(element => {
        let listItem = createListItem( element );
        listItem.className = "list-item";
        inboxList.appendChild(listItem);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBRzhCOzs7Ozs7O1VDOUYvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xtRDs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxvRUFBMEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxnRUFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBQcm9qZWN0e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCB0b2RvQXJyYXkgPSBbXSwgcHJvamVjdFRpdGxlID0gXCJ1bnRpdGxlZFwiICl7XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gdG9kb0FycmF5O1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNwbGljZSggdGhpcy50b2RvQXJyYXkuaW5kZXhPZih0b2RvKSwgMSk7XG4gICAgfVxuXG4gICAgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9BcnJheTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RUaXRsZTtcbiAgICB9XG59XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9UaXRsZSA9IFwidW50aXRsZWRcIiwgZHVlRGF0ZSwgZGVzY3JpcHRpb24gPSBcIm5vbmVcIikge1xuICAgICAgICB0aGlzLnRvZG9UaXRsZSA9IHRvZG9UaXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50b2RvVGl0bGUgPSB0aXRsZTsgXG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZSggZGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oIHBocmFzZSl7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwaHJhc2U7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9UaXRsZTtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5sZXQgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtuZXcgUHJvamVjdChbXSwgXCJ1bnRpdGxlZFwiKV07XG5cbiAgICBsZXQgYWRkUHJvamVjdCA9ICggcHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSAgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKCBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGdldFByb2plY3RMaXN0ID0oKT0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RMaXN0fTtcbn0pKCk7XG5cbmxldCBpbmJveCA9ICgoKSA9PiB7XG4gICAgbGV0IGluYm94QXJyYXkgPSBbIG5ldyBUb2RvKFwidW50aXRsZWRcIiwgXCJza2pkZlwiLCBcImxzamRrZlwiKV07XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKCB0b2RvKXtcbiAgICAgICAgaW5ib3hBcnJheS5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbyl7XG4gICAgICAgIGluYm94QXJyYXkuc3BsaWNlKCBpbmJveEFycmF5LmluZGV4T2YoIHRvZG8pLCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5JbmJveEFycmF5KCkge1xuICAgICAgICByZXR1cm4gaW5ib3hBcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbywgcmV0dXJuSW5ib3hBcnJheX07XG59KSgpO1xuXG5cbmV4cG9ydCB7cHJvamVjdExpc3QsICBpbmJveCwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCwgaW5ib3ggfSBmcm9tIFwiLi90b2RvTGlzdC5qc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplU2l0ZSgpIHtcblxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIERPTVNrZWxldG9uKCk7XG5cbn1cblxuZnVuY3Rpb24gRE9NU2tlbGV0b24oKSB7XG5cbiAgICAvL2NyZWF0ZSBoZWFkZXIgRE9NXG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQ29sdW1uQm9keSgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuXG4gIFxuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJUb2RvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb2x1bW5Cb2R5KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvZHkuaWQgPSBcImJvZHlcIjtcblxuICAgIC8vbXVzdCBhcHBlbmQgbWFpbmJvZHkgZmlyc3RcbiAgICBsZXQgaW5mb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mb1RhYi5pZCA9IFwiaW5mby10YWJcIjtcblxuICAgIGxldCBtYWluQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJvZHkuaWQgPSBcIm1haW4tYm9keVwiO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChpbmZvVGFiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gICAgY3JlYXRlSW5mb1RhYigpO1xuICAgIGdldEluYm94Qm9keSgpO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1RhYigpIHtcblxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZHknKTtcblxuICAgIGxldCBpbmZvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvLXRhYlwiKTtcblxuICAgIGxldCBvcHRpb25zID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiV2Vla1wiXTtcbiAgICBvcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBvcHRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBvcHRpb25CdXR0b24uY2xhc3NOYW1lID0gXCJpbmZvLXRhYi1idXR0b25cIjtcbiAgICAgICAgb3B0aW9uQnV0dG9uLmlubmVySFRNTCA9IGVsZW1lbnQ7XG4gICAgICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQob3B0aW9uQnV0dG9uKTsgICAgXG4gICAgfSk7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICAvL2ZvciBwcm9qZWN0cyBpbiB0aGUgbG9jYWxzdG9yYWdlLCBoZXJlIHdlIHdhbnQgdG8gY3JlYXRlIG9wdGlvbnMgZm9yIHRoZW1cbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50UHJvamVjdHMuaWQgPSBcImN1cnJlbnQtcHJvamVjdHNcIjtcblxuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgIGluZm9UYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBpbmZvVGFiLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0cyk7XG4gICAgaW5mb1RhYi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5mb1RhYik7XG5cbiAgICBjcmVhdGVDdXJyZW50UHJvamVjdHMoKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50UHJvamVjdHMoKSB7XG4gICAgLy9nZXQgYWxsIGN1cnJlbnQgcHJvamVjdHMsIHRoZW4gZm9yIGVhY2ggY3JlYXRlIGFuIGVsZW1lbnQgYW5kIGFwcGVuZCBvdG8gdGhpbmdcbiAgICBsZXQgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXByb2plY3RzXCIpO1xuICAgIC8vY29uc29sZS5sb2coY3VycmVudFByb2plY3RzKTtcblxuICAgIHByb2plY3RMaXN0LmdldFByb2plY3RMaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0UHJvamVjdFRpdGxlKCk7XG5cbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1idXR0b25cIjtcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgY3VycmVudFByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gZ2V0SW5ib3hCb2R5KCl7XG4gICAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWJvZHlcIik7XG5cbiAgICBsZXQgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpbmJveFRpdGxlLmlubmVySFRNTCA9IFwiSW5ib3hcIjtcblxuICAgIGxldCBpbmJveExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94TGlzdC5pZCA9IFwiaW5ib3gtbGlzdFwiO1xuXG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiO1xuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoaW5ib3hUaXRsZSk7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoaW5ib3hMaXN0KTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGNyZWF0ZUluYm94TGlzdCgpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94TGlzdCgpe1xuICAgIC8vZ2V0IGFsbCBwb3NzaWJsZSB0b2RvcywgdGhlbiBzaW1wbHkgbGlzdCB0aGVtXG4gICAgbGV0IGluYm94TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3gtbGlzdFwiKTtcblxuICAgIGluYm94LnJldHVybkluYm94QXJyYXkoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbSggZWxlbWVudCApO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSBcImxpc3QtaXRlbVwiO1xuICAgICAgICBpbmJveExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSggdG9kb0l0ZW0pIHtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSB0b2RvSXRlbS5nZXRUaXRsZSgpO1xuXG4gICAgbGV0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbURhdGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpO1xuXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCJlZGl0XCI7XG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gXCJkZWxldGVcIjtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgbGV0IGZvb3RlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vdGVyRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJDcmVhdGVkIEJ5IFNldWxjaGFuIEhhblwiO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRlc2NyaXB0aW9uKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmluaXRpYWxpemVTaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9