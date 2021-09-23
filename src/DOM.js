
import { projectList, inbox } from "./todoList.js";
import './style.css';
import  headerIcon from "./headerIcon.svg";
import homeIcon from "./homeIcon.svg";
import clearIcon from "./clearIcon.svg";
import addIcon from "./addIcon.svg";
import radioIcon from "./radioIcon.svg";

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
    icon.src = headerIcon;
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
    iconHome.src = homeIcon;
    
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
    addProjectIcon.src = addIcon;
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
    projectList.getProjectList().forEach(element => {
        let project = document.createElement("div");
        project.className = "project";
        project.id = index + "p";

        let name = document.createElement("p");
        name.innerHTML = element.getProjectTitle();

        let closeButton = new Image();
        closeButton.src = clearIcon;
        closeButton.className = "close-button";
        closeButton.style.opacity = "0";

        closeButton.onmouseover = () => {
            closeButton.style.opacity = "1";
        }
        closeButton.onmouseleave = () => {
            closeButton.style.opacity = "0";
        }

        closeButton.onclick = () => {

            projectList.getProjectByIndex(project.id.slice(0,-1)).getTodoList().forEach(element => {
                projectList.getProject("Home").removeTodo(projectList.getProject("Home").getTodoList().indexOf(element));
            })

            projectList.removeProject(project.id.slice(0,-1));
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

    let currentProject = projectList.getProject(current.returnCurrent());

    if (currentProject === undefined) {
        currentProject = projectList.getProjectByIndex(current.returnCurrent());
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
                projectList.getProject("Home").sortArray();
            }
            else {
                projectList.getProjectByIndex(current.returnCurrent()).sortArray();
            }
        }
        else {
            if (current.returnCurrent() == "Home") {
                projectList.getProject("Home").unsortArray();
            }
            else {
                projectList.getProjectByIndex(current.returnCurrent()).unsortArray();
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
    plusIcon.src = addIcon;
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

    

}


function createListItem(todoItem) {
    let listItem = document.createElement("div");

    let iconRadio = new Image();
    iconRadio.src = radioIcon;
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
    deleteButton.src = clearIcon;
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
            let currentProject = projectList.getProjectByIndex(todoItem.getDescription());
            let homeProject = projectList.getProject("Home");
            
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
            let currentProject = projectList.getProjectByIndex(current.returnCurrent());
            let homeProject = projectList.getProject("Home");

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
                    let homeProject = projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf(todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = projectList.getProjectByIndex(todoItem.getDescription());
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
                if ( current.returnCurrent() == "Home" && projectList.getProject("Home").returnIsSorted() ) {
                    projectList.getProject("Home").unsortArray();
                    todoItem.setDueDate(editDateForm.value);
                    projectList.getProject("Home").sortArray();
                }
                else if ( current.returnCurrent() != "Home" && projectList.getProjectByIndex(current.returnCurrent()).returnIsSorted()){
                    projectList.getProjectByIndex(current.returnCurrent()).unsortArray();
                    todoItem.setDueDate(editDateForm.value);
                    projectList.getProjectByIndex(current.returnCurrent()).sortArray();
                }
                else {
                    todoItem.setDueDate(editDateForm.value);

                }

                if (current.returnCurrent() == "Home" && todoItem.getDescription() == "Home") {

                }
                else if (current.returnCurrent() != "Home") {
                    let homeProject = projectList.getProject("Home");
                    let homeIndex = homeProject.getTodoList().indexOf(todoItem);
                    homeProject.getTodoList().splice(homeIndex, 1, todoItem);
                }
                else {
                    let currentProject = projectList.getProjectByIndex(todoItem.getDescription());
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
export { createCurrentProjects, current, getMainBody, createMainList };

initializeSite();

import { initializeEventHandlers, addTaskEvent } from "./EventHandler.js";
import { add } from "date-fns";
initializeEventHandlers();