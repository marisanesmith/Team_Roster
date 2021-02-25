const inquirer = require("inquirer")
const fs = require("fs")
const path = require('path')
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const team = [];

//initial prompt message

const start = "Welcome to the Team Generator! Enter your employees information below!"
console.log(start);

//create the questions for the user to enter specific data
function manPrompt() {
    inquirer
.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email address?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number?"
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: "Enter the next Employee",
            choices: ['Manager', 'Engineer', 'Intern', 'Finished']
        },

    ])
    // // .then(answers => {
    // //     console.log(answers);
    // //     const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    // //     console.log(manager);
    // //     team.push(manager);
    // //     managerPrompt();
    // })
};

function engPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineers's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineers's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineers's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub name?"
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: "Enter the next Employee",
            choices: ['Manager', 'Engineer', 'Intern', 'Finished']
        },

    ])
};

function intPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?"
        },
        {
            type: 'list',
            name: 'nextEmployee',
            message: "Enter the next Employee",
            choices: ['Manager', 'Engineer', 'Intern', 'Finished']
        },

    ])
};

function addMan() {
    manPrompt().then(function(response) {
        const manag = new Manager(answers.name, answers.id, answers.email, answers.office);
        console.log(manag);
        team.push(manag);
    })
}
// empty array which will store team member info from the prompts above
// const employeeList = [];


// .then((input) => {
//     if (input.employeeName === 'Engineer') {
//         console.log('engineer');
//  } else if (imput.employeeName === 'Intern') {
//         console.log('intern');
//  } else {
//      console.log('none')
//  }
// })

// .then((answer) => {
//     const newFile = createRoster(answer)
// })