

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


export {projectList };
