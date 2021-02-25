const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Employee', () => {
            const employeeObj = new Employee('John', 5, 'john@gmail');

            expect(employeeObj.name).toEqual('John')
            expect(employeeObj.id).toEqual(5)
            expect(employeeObj.email).toEqual('john@gmail')
        })
    })
});

// console.log(employeeObj());