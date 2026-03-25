# Vanilla JavaScript Task Logic Engine

A pure JavaScript (ES6+) backend-logic implementation for task management, demonstrating advanced **Object-Oriented Programming (OOP)**, modular architecture, and robust data handling.

### 🚀 Key Features

* **Advanced OOP Architecture:**
    * **Multi-Instance Support:** Designed to support multiple independent task lists simultaneously, with each `TaskManager` instance maintaining its own state and unique ID counter.
    * **Class-Based Design:** Clear separation of concerns between the `Task` entity and the `TaskManager` controller.

* **Smart Task Creation & Defaults:**
    * **Auto-Completion Logic:** Implemented default values for missing task details (Title, Description, Priority, Status) to ensure the system never breaks due to partial data.
    * **Unique ID Management:** Automated, internal ID tracking for every task within its specific manager instance.

* **Dynamic Data Manipulation:**
    * **Smart Edit Method:** Flexible update logic that allows modifying specific fields while intelligently preserving existing data for unchanged fields.
    * **Priority Sorting Algorithm:** Custom logic that translates text-based priorities into numeric weights (**High: 3, Medium: 2, Low: 1**) for precise sorting.
    * **Case-Insensitive Filtering:** Robust search and filter functionality (`getTaskByStatus`) that handles inconsistent user input (e.g., "DONE", "done", "Done").

* **Error Handling & Data Integrity:**
    * **Validation:** Internal checks to ensure operations (edit/delete) are only performed on existing task IDs.
    * **User Feedback:** Console-based reporting for successful operations or missing data alerts.

### 🛠 Tech Stack

* **Language:** JavaScript (ES6+)
* **Paradigm:** Object-Oriented Programming (OOP)
* **Design Pattern:** Factory/Controller Pattern
* **Environment:** ES Modules (Modular import/export)

---
*Developed as part of the Full-Stack Software Development Program.*
