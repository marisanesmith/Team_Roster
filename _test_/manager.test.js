const Manager = require('../lib/manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Manager', () => {
            const managerObj = new Manager('Kate', 7, 'kate@gmail', 'suite 2');

            expect(managerObj.name).toEqual('Kate')
            expect(managerObj.id).toEqual(7)
            expect(managerObj.email).toEqual('kate@gmail')
            expect(managerObj.office).toEqual('suite 2')
        })
    })
});