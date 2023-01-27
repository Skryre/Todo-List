export default class Projects {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    setTitle(title) {
        this.title = title
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }
    
    getTitle() {
        return this.title
    }
    
    getDate() {
        return this.dueDate
    }

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle)
      }
    
    contains(taskTitle) {
        return this.tasks.some((task) => task.getTitle() === taskTitle)
    }
    
    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.Title)) 
        return this.tasks.push(newTask)
    }
    
    deleteTask(taskTitle) {
        const taskDelete = this.tasks.find(
          (task) => task.returnTitle() === taskTitle
        )
        this.tasks.splice(this.tasks.indexOf(taskDelete), 1)
    }
}