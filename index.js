// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Add Table of Contents somewhere here
const questions = [
    // Project Title
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectTitle",
    },
    // Enter Description
    {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "description",
    },
    // Installation instructions
    {
        type: "input",
        message: "What command should be run to install any dependencies?",
        name: "installInstruct",
    },
    // Usage information
    {
        type: "input",
        message: "How is this application meant to be used?",
        name: "usageInfo",
    },
    // contribution guidelines
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contriGuide",
    },
    // test instructions
    {
        type: "input",
        message: "What command should be run for testing?",
        name: "testInstruct",
    },
    // License...change input to options(?)
    // add license badge to top of readme and notice is added to the section of the readme entitled license that explains which license the app is covered under
    {
        type: "list",
        message: "What license should your README have?",
        choices: [
            "MIT",
            "GNU v3",
            "Apache 2.0",
            "Mozilla Public License 2.0",
            "Unlicense"
        ],
        name: "license",
    },
    // Github username
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github",
    },
    // email
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
