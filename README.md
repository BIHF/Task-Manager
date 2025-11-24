# Task-Manager
## 📌 1. Description of the Application
This Task Manager is a console-based program created using the Node.js `readline` module.  It helps users manage daily tasks through a simple text interface.

### ✔ Implemented Functionalities
This Task Manager allows you to: <br>
  List tasks - View all your tasks with their completion status <br>
  Add new tasks - Create new tasks to track <br>
  Mark tasks as complete - Update task status when finished <br>
  Delete tasks - Remove tasks you no longer need
  Exit gracefully - Close the application properly


### ⭐ Additional Features
  Interactive menu-driven interface
  Task listing with completion indicators ([ ] for incomplete, [x] for complete)
  Add new tasks with validation
  Mark tasks as completed
  Delete tasks with confirmation
  Input validation for task numbers

## 📌 2. How to Run the Application
  Node.js version - v24.11.1
  No additional dependencies required

### ▶️ How to execute the program
Use the terminal/cmd and open the file location :
  cd "C:\Users\HP\OneDrive - Sabaragamuwa University of Sri Lanka\Desktop\Task Manager"
Run the program :
  node taskManager.js 
Push the program for GitHub repository :
  git push origin main

### ⚠️ Usage Notes & Limitations
Data Persistence: Tasks are stored in memory only and will be lost when the application closes
Input Validation: The application validates both menu choices and task numbers
Empty Tasks: Prevents adding tasks with empty names
Task Numbers: Uses 1-based indexing (first task is #1, not #0)
    
