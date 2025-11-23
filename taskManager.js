import { Console } from "console";
import readline from "readline";
const r1 = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})
let tasks = [];

function showMenu(){
    console.log("\nWelcome to Task Manager!");
    console.log("1. List tasks");
    console.log("2. Add new task");
    console.log("3. Mark task as complete");
    console.log("4. Delete task");
    console.log("5. Exit");
    r1.question("Enter your choice: ",handleMenu);
}

function handleMenu(choice) {
  switch (choice) {
    case "1": listTasks(); break;
    case "2": addNewTasks(); break;
    case "3": markTaskasComplete(); break;
    case "4": deleteTask(); break;
    case "5": exit(); break;
    default: console.log("Invalid choice"); 
  }
}

showMenu();

function listTasks() {
    console.log("\nYour Tasks:");

    if (tasks.length == 0){
        Console.log("No tasks yet.");
    } else {
        for (let i = 0; i< tasks.length; i++){
            let task = tasks[i];
            let status = task.completed ? "[✔]" : "[ ]";

            console.log((i+1) + "." + status + " " + task.name);
        }
    }

    showMenu();
}

function addNewTasks(){ 
    r1.question("Enter new task name:", function(taskName){
        if (taskName.trim() === ""){
            console.log("Task name cannot be empty!");
            return;
        }
    tasks.push({ name: taskName, completed: false });
        console.log("✅ Task added!\n");
        showMenu();
    });
}

function markTaskasComplete(){
    r1.question("Enter task number to complete: ", function(num){
        let index = Number(num) - 1;

        if (index < 0 || index >= tasks.length) {
            console.log("Invail task number!");
            return;
        }
        tasks[index].completed = true;
        console.log("✔ Task marked as complete!")
        showMenu();
    });

    
}
