import TaskManager from "./task-manager.js";

//יצירת רשימה מס 1
const list1 = new TaskManager(); 

// יצירת 10 משימות בתוך רשימה מס' 1
// ניתן לכתוב באותיות גדולות/קטנות/גם וגם
// לא חייבים למלא את כל השדות
list1.addTask("task no. 1", "this is a test for task no. 1", "low", "planned");
list1.addTask("task no. 2", "this is a test for task no. 2","high", "done");
list1.addTask("task no. 3", "this is a test for task no. 3","high", "in progress");
list1.addTask("task no. 4", "this is a test for task no. 4","medium", "Done");
list1.addTask()
list1.addTask("task no. 6", "this is a test for task no. 6","medium", "DONE");
list1.addTask("task no. 7", "this is a test for task no. 7","medium", "Planned");
list1.addTask("task no. 8", "this is a test for task no. 8","other", "IN PROGRESS");
list1.addTask("task no. 9", "this is a test for task no. 9","High");
list1.addTask("task no. 10", "this is a test for task no. 10","medium");

// הדפסת רשימה 1
console.log("list no. 1", list1);

// מחיקת משימה מס' 2 מרשימה מס' 1
list1.deleteTask(2);
console.log("list no. 1 after deleting task no. 2", list1);

// הדפסת רשימה 1 לאחר מיון לפי סדר עדיפויות 
// high-medium-law-else
list1.sortTaskByPriority();
console.log("list no. 1 after a priority sort", list1);

// הדפסה של סינון משימות לפי סטטוס
// planned , in progress , done
console.log("status: planned", list1.getTaskByStatus("planned"));
console.log("status: in progress", list1.getTaskByStatus("in progress"));
console.log("status: done", list1.getTaskByStatus("Done"));

// הדפסת רשימה 1 לאחר עריכת משימות 6 ו 8
// מספיק להכניס רק את הערכים שרוצים לערוך
list1.editTask(6,"edited task no. 6","this is an editing test for task no. 6","","");
list1.editTask(8,"edited task no. 8","","medium","done");
console.log("list after editing", list1);

// מספר משימה לא קיים - תודפס הודעה בהתאם
list1.editTask(12,"edited task no. 12","","medium","done");

// יצירת רשימה מס' 2
const list2 = new TaskManager();

// יצירת 4 משימות לרשימה 2
list2.addTask("task no. 1-2", "this is a test for task no. 1", "low", "planned");
list2.addTask("task no. 2-2", "this is a test for task no. 2","high", "done");
list2.addTask("task no. 3-2", "this is a test for task no. 3","high", "in progress");
list2.addTask("task no. 4-2", "this is a test for task no. 4","medium", "Done");

// הדפסת רשימה 2
console.log("list no. 2", list2);



























