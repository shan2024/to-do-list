import { projectList } from "./todoList";
import {
    createCurrentProjects, createMainList, current, getMainBody,
} from "./DOM";

import clearIcon from "./clearIcon.svg";
import addIcon from "./addIcon.svg";


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

    let inputDescription = current.returnCurrent();
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
    addButton.src = addIcon;
    addButton.className = "add-button";

    let cancelButton = new Image();
    cancelButton.src = clearIcon;
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
        let currentProject = projectList.getProject(current.returnCurrent());
        if (currentProject === undefined) {
            currentProject = projectList.getProjectByIndex(current.returnCurrent());
        }
        

        if (inputTaskName.value == "") {
            inputTaskName.value = "untitled";
        }
        if (current.returnCurrent() != "Home") {
            projectList.getHomeProject().addTodo(inputTaskName.value, datePicker.value, inputDescription);
        }

        currentProject.addTodo(inputTaskName.value, datePicker.value, inputDescription);

        createMainList();
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
    addButton.src = addIcon;
    addButton.className = "add-button";

    let cancelButton = new Image();
    cancelButton.src = clearIcon;
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

        projectList.addProject(inputText.value);
        createCurrentProjects();
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "flex";
        addProjectListEvent();
    }

}

function changeCurrentProject(index) {
    let currentProject = projectList.getProjectByIndex(index.slice(0,-1));

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


    current.setCurrent(index.slice(0,-1));
    getMainBody();
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
        current.setCurrent("Home");
        let projectButtons = Array.from(document.querySelectorAll(".project"));
        projectButtons.forEach(element => {
            element.classList.remove("clicked");
        });
        homeButton.classList.add("clicked");
        let currentProject = projectList.getProject("Home");
        if (currentProject.returnIsSorted()) {
            currentProject.unsortArray();
        }
        getMainBody();
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
export { initializeEventHandlers, addTaskEvent };