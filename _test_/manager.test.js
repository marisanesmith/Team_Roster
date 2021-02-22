const Manager = require('../lib/manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Manager', () => {
            const managerObj = new Manager(7, 'Kate', 'kate@gmail', 'suite 2');

            expect(managerObj.id).toEqual(7)
            expect(managerObj.name).toEqual('Kate')
            expect(managerObj.email).toEqual('kate@gmail')
            expect(managerObj.github).toEqual('suite 2')
        })
    })
});

console.log(managerObj());