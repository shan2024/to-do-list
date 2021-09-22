

class Project{
    
    constructor( todoArray = [], projectTitle = "untitled" ){
        this.todoArray = todoArray;
        this.projectTitle = projectTitle;
        this.storedArray = [];
    }

    addTodo(todoTitle, dueDate, description) {
        let newDate = new Date(dueDate.replace(/-/g, '\/'));
        console.log(dueDate);
        console.log(newDate);
        if( newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        this.todoArray.push(new Todo( todoTitle, newDate, description));
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

    sortArray() {
        let otherArray = [...this.todoArray];
        otherArray.sort( function(a,b){
            return a.getDueDate() - b.getDueDate();
        })
        
        this.storedArray = [...this.todoArray];
        this.todoArray = otherArray;
    }

    unsortArray() {
        this.todoArray = this.storedArray;
    }
    
}

class Todo {
    constructor(todoTitle = "untitled", dueDate = new Date(), description = "Home") {
        this.todoTitle = todoTitle;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTitle(title){
        this.todoTitle = title; 
    }

    setDueDate( date){
        let newDate = new Date(date.replace(/-/g, '\/'));
        if( newDate.getTime() !== newDate.getTime()){
            newDate = new Date();
        }
        this.dueDate = newDate;
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
    let home =  new Project(  [ new Todo("untitled", new Date(), "Home")], "Home" );


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

    let getHomeProject = () => {
        return home;
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

    

    return {getHomeProject, addProject, removeProject, getProjectList, getProject,getTodayProject,getMonthProject,getProjectByIndex};
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
