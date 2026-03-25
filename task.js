export default class Task {
constructor (id, title = "new task title", description = "new task description", priority = "high/medium/low", taskStatus = "planned/in progress/done"){

    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.taskStatus = taskStatus
}

editTask (title,description,priority,taskStatus){
if (title != "") this.title = title;
if (description != "") this.description = description;
if (priority != "") this.priority = priority;
if (taskStatus != "") this.taskStatus = taskStatus;
};

}
