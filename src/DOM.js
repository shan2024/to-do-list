
import { projectList, inbox } from "./todoList.js";

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

    projectList.getProjectList().forEach(element => {
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

    inbox.returnInboxArray().forEach(element => {
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