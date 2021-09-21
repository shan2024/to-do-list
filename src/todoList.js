

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


export {projectList,  inbox, };
