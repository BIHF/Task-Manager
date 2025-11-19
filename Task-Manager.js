import readline from "readline";
const r1 = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})
let tasks = [];

function showMenu(){
    console.log("                          ");
    console.log("\nWelcome to Task Manager!");
    console.log("1.List tasks");
    console.log("2. Add new task");
    console.log("3. Mark task as complete");
    console.log("4. Delete task");
    console.log("5. Exit");
}
