const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: Office: ${this.office}`)
    }

    getOffice(){
        return this.office;
    }
}

module.exports = Manager;