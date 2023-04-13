// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of this project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "credits",
        name: "Who contributed to this project?"
    },
    {
        type: "list",
        message: "Which license is needed for this project?",
        name: "license",
        choices: ["MIT", "Apache", "Boost", "None"]
    },
    {
        type: "input",
        message: "How did you test this projet",
        name: "test"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
