// Imports needed
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// Question array that holds all inquirer questions
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
        message: "Who contributed to this project?",
        name: "credits"
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

// This function uses fs to take in data and create a file based on the function calls params
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log("README.md generated at the root of this project!")
        }
    })
}

// Initializes inquirer, and based on user input, calls writeToFile passing in params needed to create a README.md file
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app when node index.js is ran in the terminal
init();
