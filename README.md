# Task-Manager

## 📌 1. Description of the Application
This Task Manager is a console-based program created using the Node.js `readline` module.  
It helps users manage daily tasks through a simple text interface.

### ✔ Implemented Functionalities
This Task Manager allows you to:

- **List tasks** – View all tasks with their completion status  
- **Add new tasks** – Create new tasks to track  
- **Mark tasks as complete** – Update task status when finished  
- **Delete tasks** – Remove tasks you no longer need  
- **Exit gracefully** – Close the application safely  

### ⭐ Additional Features

- Interactive menu-driven interface  
- Task listing with completion indicators (`[ ]` for incomplete, `[x]` for complete)  
- Add new tasks with validation  
- Mark tasks as completed  
- Delete tasks with confirmation  
- Input validation for task numbers  

## 📌 2. How to Run the Application

- **Node.js version:** v24.11.1  
- **Dependencies:** No additional dependencies required  

### ▶️ How to Execute the Program

1. Open terminal/cmd and navigate to your file location:
   ```sh
   cd "C:\Users\HP\OneDrive - Sabaragamuwa University of Sri Lanka\Desktop\Task Manager"
2. Run the program:
   ```sh
    node taskManager.js
3. Push the program to GitHub repository:
   ```sh
     git push origin main

### ⚠️ Usage Notes & Limitations
- Data Persistence: Tasks are stored in memory only and will be lost when the application closes
- Input Validation: Application validates both menu choices and task numbers
- Empty Tasks: Prevents adding tasks with empty names
- Task Numbers: Uses 1-based indexing (first task is #1, not #0)
