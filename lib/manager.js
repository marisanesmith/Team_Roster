const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    printInfo() {
        console.log(`Name: ${this.name}:: Id: ${this.id} :: Email: ${this.email} :: Office: ${this.office}`)
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
    get Office(){
        return this.office;
    }
}

module.exports = Manager;