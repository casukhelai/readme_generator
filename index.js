// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Add Table of Contents somewhere here
const questions = [
    // Project Title
    {
        type: "input",
        message: "",
        name: "projectTitle",
    },
    // Enter Description
    {
        type: "input",
        message: "",
        name: "description",
    },
    // Installation instructions
    {
        type: "input",
        message: "",
        name: "installInstruct",
    },
    // Usage information
    {
        type: "input",
        message: "",
        name: "usageInfo",
    },
    // contribution guidelines
    {
        type: "input",
        message: "",
        name: "contriGuide",
    },
    // test instructions
    {
        type: "input",
        message: "",
        name: "testInstruct",
    },
    // License...change input to options(?)
    // add license badge to top of readme and notice is added to the section of the readme entitled license that explains which license the app is covered under
    {
        type: "input",
        message: "",
        name: "licenses",
    },
    // Github username
    {
        type: "input",
        message: "",
        name: "github",
    },
    // email
    {
        type: "input",
        message: "",
        name: "email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
