


function DOMSkeleton(mainBody) {

    //create header DOM
    let header = createHeader();
    let body = createColumnBody();
    let footer = createFooter();

    mainBody.appendChild(header);
    mainBody.appendChild(body);
    mainBody.appendChild(footer);


}

function createHeader() {
    let header = document.createElement("header");
    let titleElement = document.createElement("h1");
    titleElement.innerHTML = "Todo List";
    header.appendChild(titleElement);

    return header;
}

function createColumnBody() {
    let body = document.createElement("div");

    let infoTab = createInfoTab();
    //let mainBody = getMainBody();

    body.appendChild(infoTab);
    //body.appendChild(mainBody);

    return body;
}

function createInfoTab() {
    let infoTab = document.createElement("div");
    infoTab.className = "info-tab";

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
    let currentProjects = createCurrentProjects();

    let addProjectButton = document.createElement("button");
    addProjectButton.innerHTML = "Add Project";

    infoTab.appendChild(projectTitle);
    infoTab.appendChild(currentProjects);
    infoTab.appendChild(addProjectButton);

    return infoTab;
}

function createCurrentProjects() {
    //get all current projects, then for each create an element and append oto thing
}

function createFooter() {
    let footer = document.createElement("footer");
    let footerDescription = document.createElement("p");
    footerDescription.innerHTML = "Created By Seulchan Han";

    footer.appendChild(footerDescription);
    
    return footer;
}

function initializeSite() {

    let body = document.querySelector("body");
    let content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);
    DOMSkeleton();

}

export default initializeSite;