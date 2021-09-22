import { projectList } from "./todoList";
import { createCurrentProjects, createMainList, current, getMainBody, 
         } from "./DOM";
import {async, format} from 'date-fns';


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
        let currentProject = projectList.getProject(current.returnCurrent());
        if (currentProject === undefined) {
            currentProject = projectList.getProjectByIndex(current.returnCurrent());
        }
        //console.log(datePicker.value);
        //console.log( new Date());
        currentProject.addTodo( inputTaskName.value, datePicker.value, inputDescription.value);
        createMainList();
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

        projectList.addProject(inputText.value);
        createCurrentProjects();
        infoTab.removeChild(infoTab.lastChild);
        addProjectButton.style.display = "block";
    }

}

function changeCurrentProject( index){
    current.setCurrent(index);
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
            current.setCurrent(element.id); 
            getMainBody();
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
export { initializeEventHandlers, addTaskEvent };