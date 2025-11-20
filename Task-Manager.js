import readline from "readline";
const r1 = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})
let tasks = [];

function showMenu(){
    console.log("\nWelcome to Task Manager!");
    console.log("1.List tasks");
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
    default: console.log("Invalid choice"); showMenu();
  }
}

showMenu();