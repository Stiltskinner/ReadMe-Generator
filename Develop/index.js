// Steps to solve
// 1. User answers questions
// inquirer prompt
// 2. Pass answers in the .then()
// import generatemarkdown
// 3. Hand off to generate markdown to create MD syntax
// 4. Pass MD to writetofile

// TODO: Include packages needed for this application
const generator = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require('fs');

// Questions for user input
const questions = [
  {
    type: "input",
    message: "What is your username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Write instructions for how to install your project:",
    name: "install",
  },
  {
    type: "input",
    message: "Write instructions for how to use your program:",
    name: "howtouse",
  },
  {
    type: "input",
    message: "What guidelines would you like the user to follow for contributions?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How should the user test your program?",
    name: "test",
  },
  {
    type: "list",
    message: "Which license are you using?",
    name: "license",
    choices: ["MIT","GPLv2","Apache"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let parsedData = JSON.stringify(generator.generateMarkdown(data))
  // use fs.writefile here
  fs.writeFile(fileName, parsedData, (err) =>
  err ? console.error(err) : console.log('Success!'));
  // How do I use the markdown file here??
  // import markdown functions
}
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
        console.log("user responses", answers)
        writeToFile('ReadMe.md', answers);
    }

    );
}

// Function call to initialize app
init();
