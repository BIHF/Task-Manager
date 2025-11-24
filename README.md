# Task-Manager
## 📌 1. Description of the Application
This Task Manager is a console-based program created using the Node.js `readline` module.  It helps users manage daily tasks through a simple text interface.

### ✔ Implemented Functionalities
This Task Manager allows you to: <br>
  List tasks - View all your tasks with their completion status <br>
  Add new tasks - Create new tasks to track <br>
  Mark tasks as complete - Update task status when finished <br>
  Delete tasks - Remove tasks you no longer need <br>
  Exit gracefully - Close the application properly


### ⭐ Additional Features
  Interactive menu-driven interface <br> 
  Task listing with completion indicators ([ ] for incomplete, [x] for complete) <br>
  Add new tasks with validation <br>
  Mark tasks as completed <br>
  Delete tasks with confirmation <br>
  Input validation for task numbers <br>

## 📌 2. How to Run the Application
  Node.js version - v24.11.1 <br>
  No additional dependencies required <br>

### ▶️ How to execute the program
Use the terminal/cmd and open the file location : <br>
  cd "C:\Users\HP\OneDrive - Sabaragamuwa University of Sri Lanka\Desktop\Task Manager" <br>
Run the program : <br>
  node taskManager.js <br>
Push the program for GitHub repository : <br>
  git push origin main <br>

### ⚠️ Usage Notes & Limitations
Data Persistence: Tasks are stored in memory only and will be lost when the application closes <br>
Input Validation: The application validates both menu choices and task numbers <br>
Empty Tasks: Prevents adding tasks with empty names <br>
Task Numbers: Uses 1-based indexing (first task is #1, not #0) 
    
