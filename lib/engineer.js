const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: GitHub: ${this.github}`)
    }

    getGitHub(){
        return this.github;
    }
}

module.exports = Engineer;