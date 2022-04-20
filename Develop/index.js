// Steps to solve
    // 1. User answers questions
        // inquirer prompt
    // 2. Pass answers in the .then()
        // import generatemarkdown
    // 3. Hand off to generate markdown to create MD syntax
    // 4. Pass MD to writetofile

// TODO: Include packages needed for this application
const generateMD = require("./utils/generateMarkdown.js");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is your username?","What is the title of your project?","Write a description of your project:", "Write instructions for how to install your project:","Which license are you using?","Write instructions for how to use your program:","How should the user test your program?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs.writefile here
    // How do I use the markdown file here??
    // import markdown functions
}

// TODO: Create a function to initialize app
function init() {
        // Write inquirer prompt
    // call writetofile inside .then()
    // pass answers to writetofile here
}


// Function call to initialize app
init();
