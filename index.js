// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Add Table of Contents somewhere here
const questions = [
    // Project Title
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
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
        name: "installation",
    },
    // Usage information
    {
        type: "input",
        message: "How is this application meant to be used?",
        name: "usage",
    },
    // contribution guidelines
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution",
    },
    // test instructions
    {
        type: "input",
        message: "What command should be run for testing?",
        name: "testing",
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
function writeToFile(README, data) {
    console.log('write: "' + data + '" :write')
    
    // assume not writing to the same file everytime, since parameter is more specific
    fs.writeFile(README, data, (err) =>
    err ? console.log(err) : console.log("successfully created README.md"));
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README.md generator.\nPlease answer the following prompts:");
    inquirer.prompt(questions)
    .then(data => {
        console.log('init: "' + data + '" :init')
        const info = generateMarkdown(data);
        
        writeToFile("README.md", info);
    })
};
// Function call to initialize app
init();
