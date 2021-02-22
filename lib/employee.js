class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    printInfo() {
        console.log(`Id: ${this.id} :: Name: ${this.name} :: Email: ${this.email}`)
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    get Email() {
        return this.email;
    }
}

module.experts = Employee;