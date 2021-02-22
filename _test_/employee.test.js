const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Employee', () => {
            const employeeObj = new Employee(5, 'John', 'john@gmail');

            expect(employeeObj.id).toEqual(5)
            expect(employeeObj.name).toEqual('John')
            expect(employeeObj.email).toEqual('john@gmail')
        })
    })
});

console.log(employeeObj());