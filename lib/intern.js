const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: School: ${this.school}`)
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;