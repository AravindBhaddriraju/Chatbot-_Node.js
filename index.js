const { NlpManager } = require("node-nlp");
console.log("Starting Chatbot ...");

const manager = new NlpManager({ languages: ["en"] });
manager.load();

// Loading a module readline, this will be able to take input from the terminal.
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Chatbot started!");
rl.setPrompt("> ");
rl.prompt();

rl.on("line", async function (line) {
    // Here Passing our input text to the manager to get response and display response answer.
    const response = await manager.process("en", line);
    console.log(response.answer);
    rl.prompt();
}).on("close", function () {
    process.exit(0);
});