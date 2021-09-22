
import { projectList, inbox } from "./todoList.js";
import './style.css';

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
    projectList.getProjectList().forEach(element => {
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
            projectList.removeProject(project.id);
            current.setCurrent("Home");
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

    let currentProject = projectList.getProject(current.returnCurrent());

    if (currentProject === undefined) {
        currentProject = projectList.getProjectByIndex(current.returnCurrent());
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

    let currentProject = projectList.getProject(current.returnCurrent());
    if (currentProject === undefined) {
        currentProject = projectList.getProjectByIndex(current.returnCurrent());
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
            projectList.getProject(current.returnCurrent()).removeTodo(listItem.id);
            console.log(projectList.getProjectByIndex(todoItem.getDescription()));
            if (todoItem.getDescription() != "Home") {
                projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().forEach(element => {
                    if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                        projectList.getProjectByIndex(todoItem.getDescription()).removeTodo(projectList.getProjectByIndex(todoItem.getDescription()).getTodoList().indexOf(element));
                    }
                });
            }
        }
        else {
            projectList.getProjectByIndex(current.returnCurrent()).removeTodo(listItem.id);
            projectList.getProject("Home").getTodoList().forEach(element => {
                console.log(498759834);
                if (todoItem.getDueDate().toString() == element.getDueDate().toString()) {
                    console.log(todoItem);
                    console.log(element);
                    projectList.getProject("Home").removeTodo( projectList.getProject("Home").getTodoList().indexOf(element) );
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
export { createCurrentProjects, current, getMainBody, createMainList };

initializeSite();

import { initializeEventHandlers, addTaskEvent } from "./EventHandler.js";
initializeEventHandlers();