// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the project title:",
    },
    
    {
        type: "input",
        name: "description",
        message: "Please describe the project (motivation, purpose, what problem does it solve, what did you learn?):",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps require to intall your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for use:",
    },
    {
        type: "input",
        name: "credit",
        message: "Please list your collaborators:",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license application to this project:",
        choices: ["MIT", "Apache2.0", "GNU LGPL", "GNU LGPL","MPL2.0", "copyleft licenses", "Proprietary license", "none"],
    },
    {
        type: "input",
        name: "fullName",
        message: "Please enter your full Name:",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter Github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a valid email address:",
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function() {
        console.log("sucess");
    });
    };


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>{
        console.log("Creating Professional READMe.md File");
        //console.log(generateMarkdown);
        writeToFile("./Files/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
