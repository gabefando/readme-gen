// TODO: Include packages needed for this application
const fs = require('fs')
const inquire = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your Email Address:"
    },
    {
        type: "input",
        name: "title",
        message: "Enter the name of the project:"
    },
    {
        type: "input",
        name: "desc",
        message: "Write a description of the project:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the command you will use to install dependencies (default is npm i)",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "Enter the command you will use to run tests (default is npm test)",
        default: "npm test"
    },
    {
        type: "input",
        name: "projectusage",
        message: "Enter anything the user has to know about the project"
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter any info the user needs to know about contributing to the project"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
