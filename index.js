const inquirer = require("inquirer")
const fs = require("fs")
const path = require('path')
const outPutFolder = path.resolve(__dirname, "output")
const htmlFile = path.join(outPutFolder, "index.html")
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
// const cards = require('./lib/cards')
const manCard = require('./output/manCard')
const engCard = require('./output/engCard')
const intCard = require('./output/intCard')

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
// ]).then((response) => {
//     const manager = new Manager(response.name, response.id, response.email, response.office);
//     managerCard = cards.manCard(manager.name, manager.id, manager.email, manager.office);
//     team += managerCard;
//     newTeamMbr();
// })
    ]).then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.office);
        team.push(manCard(manager));
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
        team.push(engCard(engineer));
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
        team.push(intCard(intern));
        newTeamMbr();
    })
};

function finalTeam(data) {
    const teamArrAdd = team.join("");
    return `<!DOCTYPE html>
    <lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
        <script src="https://kit.fontawesome.com/9834d6982e.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <title>Team Roster</title>
        </head>
    
        <body>
            <h1 class="red lighten-2">My Team</h1>
    
            <!-- Rows to display team members-->
            <div class="row">
                ${teamArrAdd}
              </div>
        
            <!--JavaScript at end of body for optimized loading-->
            <script type="text/javascript" src="js/materialize.min.js"></script>
            <script src="index.js"></script>
        </body>
    </html>`
}

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
    fs.writeFile('./index.html', finalTeam(team), (err) =>
    err ? console.log(err) : console.log ('200; your file is ready'))
    // if(!fs.existsSync(outPutFolder)){
    //     fs.mkdirSync(outPutFolder)
    // }
    // fs.writeFile(htmlFile, cards(team), "utf-8")
}


