const inquirer = require("inquirer")
const fs = require("fs")
const path = require('path')
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const manCard = require('./lib/cards')
const engCard = require('./lib/cards')
const intCard = require('./lib/cards')

const team = [];

manPrompt()

//initial prompt message

// const start = "Welcome to the Team Generator! Enter your employees information below!"
// console.log(start);

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
        }

    ]).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.office);
        team.push(manager);
        newTeamMbr();
    })
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
        }

    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        newTeamMbr();
    })
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
        }

    ]).then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        newTeamMbr();
    })
};

function newTeamMbr() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'nextEmployee',
            message: "Enter the next Employee",
            choices: ['Engineer', 'Intern', 'Finished']
        },
    ]).then((response) => {
        if (response.nextEmployee === "Engineer") {
            engPrompt() 
        }
        else if (response.nextEmployee === "Intern") {
            intPrompt()
        }
        else {
            createTeam()
        }
    })
}

function createTeam() {
    fs.writeFile('cards.js', createReadme, (err) =>
    err ? console.log(err) : console.log('Successfully created the team generator!')
    )
}


