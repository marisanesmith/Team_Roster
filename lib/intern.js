const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: School: ${this.school}`)
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

    get School(){
        return this.school;
    }
}

module.exports = Intern;