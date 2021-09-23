


class Project {

    constructor(todoArray = [], projectTitle = "untitled") {
        this.todoArray = todoArray;
        this.projectTitle = projectTitle;
        this.storedArray = [];
        this.isSorted = false;
    }

    addTodo(todoTitle, dueDate, description) {
        let newDate = new Date(dueDate.replace(/-/g, '\/'));
        
        if (newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        if (this.isSorted) {
            this.unsortArray();
            this.todoArray.push(new Todo(todoTitle, newDate, description));
            this.sortArray();
        }
        else {
            this.todoArray.push(new Todo(todoTitle, newDate, description));
        }


    }

    removeTodo(index) {

        this.todoArray.splice(index, 1);


    }

    getTodoList() {
        return this.todoArray;
    }

    getProjectTitle() {
        return this.projectTitle;
    }

    sortArray() {
        let otherArray = [...this.todoArray];
        otherArray.sort(function (a, b) {
            return a.getDueDate() - b.getDueDate();
        })

        this.storedArray = [...this.todoArray];
        this.todoArray = otherArray;
        this.isSorted = true;
    }

    unsortArray() {
        this.todoArray = this.storedArray;
        this.isSorted = false;
    }

    returnIsSorted() {
        return this.isSorted;
    }

}

class Todo {
    constructor(todoTitle = "untitled", dueDate = new Date(), description = "Home") {
        this.todoTitle = todoTitle;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTitle(title) {
        this.todoTitle = title;
    }

    setDueDate(date) {
        let newDate = new Date(date.replace(/-/g, '\/'));
        if (newDate.getTime() !== newDate.getTime()) {
            newDate = new Date();
        }
        this.dueDate = newDate;
    }

    setDescription(phrase) {
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
    let home = new Project([new Todo("Sample Task", new Date(), "Home")], "Home");
    let projectArray = [new Project([], "Sample Project")];


    let addProject = (projectName) => {
        if (projectName == '') {
            projectArray.push(new Project([], "untitled"));

        }
        else {
            projectArray.push(new Project([], projectName));

        }
    }

    let removeProject = (index) => {
        projectArray.splice(index, 1);


    }

    let getProjectList = () => {
        return projectArray;
    }

    let getProject = (projectName) => {
        if (projectName == "Home") {
            return home;
        }
        else {
            projectArray.forEach(element => {
                if (element.getProjectTitle() == projectName) {
                    return element;
                }
            });

        }
    }

    let getProjectByIndex = (index) => {
        return projectArray[index];
    }

    let getHomeProject = () => {
        return home;
    }





    return { getHomeProject, addProject, removeProject, getProjectList, getProject, getProjectByIndex };
})();


export { projectList };
