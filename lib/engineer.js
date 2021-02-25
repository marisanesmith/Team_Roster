const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: GitHub: ${this.github}`)
    }
    get Name() {
        return this.name;
    }
    get Id() {
        return this.id;
    }
    get Email() {
        return this.email;
    }

    get GitHub(){
        return this.github;
    }
}

module.exports = Engineer;