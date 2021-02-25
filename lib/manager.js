const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: Office: ${this.office}`)
    }

    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getOffice() {return this.office};
    getRole() {return 'Manager'}
}

module.exports = Manager;