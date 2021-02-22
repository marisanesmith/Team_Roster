const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your manager?'
    },
    {   
        type: 'list',
        name: 'employeeName',
        message: "What is the Employee's job title?",
        choices: ['Engineer', 'Intern', 'None']
    }
])

.then((input) => {
    if (input.employeeName === 'Engineer') {
        console.log('engineer');
 } else if (imput.employeeName === 'Intern') {
        console.log('intern');
 } else {
     console.log('none')
 }
})

.then((answer) => {
    const newFile = createRoster(answer)
})