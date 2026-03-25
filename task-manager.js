import Task from "./task.js";

export default class TaskManager {
    constructor() {
        this.tasks = [];
        this.idCounter = 1;
    }


    addTask(title, description, priority, taskStatus) {
        const newTask = new Task(this.idCounter, title, description, priority, taskStatus);
        this.tasks.push(newTask);
        this.idCounter++;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id)
    }

    // getCompletedTasks() {
    //     return this.tasks.filter((task) => task.taskStatus.toUpperCase() == "DONE")
    // }

    getTaskByStatus(inputStatus) {
        return this.tasks.filter((task) => task.taskStatus.toUpperCase() == inputStatus.toUpperCase())
    }

    sortTaskByPriority() {
        const priorityOrder = {
            HIGH: 3,
            MEDIUM: 2,
            LOW: 1
        }
        const prioritySorted = this.tasks.sort((task1, task2) =>
            (priorityOrder[task2.priority.toUpperCase()] || 0) - (priorityOrder[task1.priority.toUpperCase()] || 0))
    }


    editTask(id, title, description, priority, taskStatus) {
        const taskToEdit = this.tasks.find((task) => task.id == id);
        if (!taskToEdit) {
            console.log("the id doesn't exist");
            return;
        }
        taskToEdit.editTask(title, description, priority, taskStatus);
    }
}
