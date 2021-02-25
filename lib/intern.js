const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: School: ${this.school}`)
    }
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getSchool() {return this.school};
    getRole() {return 'Intern'}
}

module.exports = Intern;