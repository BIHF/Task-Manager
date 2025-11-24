import { Console } from "console";
import readline from "readline";
const r1 = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})
let tasks = [];

// Show menu options
function showMenu(){
    console.log("\nWelcome to Task Manager!");
    console.log("1. List tasks");
    console.log("2. Add new task");
    console.log("3. Mark task as complete");
    console.log("4. Delete task");
    console.log("5. Exit");
    r1.question("Enter your choice: ",handleMenu);
}

//Handle user input
function handleMenu(choice) {
  switch (choice) {
    case "1": listTasks(); break;
    case "2": addNewTasks(); break;
    case "3": markTaskasComplete(); break;
    case "4": deleteTask(); break;
    case "5": exit(); break;
    default: console.log("Invalid choice"); 
        showMenu();
  }
}

showMenu();

//List all tasks
function listTasks() {
    console.log("\nYour Tasks:");

    if (tasks.length == 0){
        Console.log("No tasks yet.");
    } else {
        for (let i = 0; i< tasks.length; i++){
            let task = tasks[i];
            let status = task.completed ? "[x]" : "[ ]";

            console.log((i+1) + "." + status + " " + task.name);
        }
    }

    showMenu();
}

//Add a new task
function addNewTasks(){ 
    r1.question("Enter new task name:", function(taskName){
        if (taskName.trim() === ""){
            console.log("Task name cannot be empty!");
            showMenu();
            return;
            
        }
    tasks.push({ name: taskName, completed: false });
        console.log("✅ Task added!\n");
        showMenu();
    });
}

// Mark a task as copleted
function markTaskasComplete(){
    r1.question("Enter task number to complete: ", function(num){
        let index = Number(num) - 1;

        if (index < 0 || index >= tasks.length) {
            console.log("Invail task number!");
            showMenu();
            return;
        }
        tasks[index].completed = true;
        console.log("✅ Task " + num + " marked as complete!");
        showMenu();
    });    
}

//Delete a task
function deleteTask() {
    r1.question("Enter task number to delete: ", function(num) {
        let index = Number(num) - 1;

        if (index < 0 || index >= tasks.length) {
            console.log ( "Invaild task number!");
            showMenu();
            return;
        }

        tasks.splice(index, 1);
        console.log("❌ Task deleted!");
        showMenu(); 
    });
}

// End the program
function exit() {
    console.log("👋 Exiting program. Goodbye!");
    r1.close();  // stop input
}
