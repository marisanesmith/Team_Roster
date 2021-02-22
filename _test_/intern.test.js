const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Intern', () => {
            const internObj = new Intern(3, 'Jessica', 'jessica@gmail', 'USF');

            expect(internObj.id).toEqual(3)
            expect(internObj.name).toEqual('Jessica')
            expect(internObj.email).toEqual('jessica@gmail')
            expect(internObj.school).toEqual('USF')
        })
    })
});

console.log(internObj());