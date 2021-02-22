const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('it should return an object containing a "job" property of Engineer', () => {
            const engineerObj = new Engineer(10, 'david', 'david@gmail', 'githubEngineer');

            expect(engineerObj.id).toEqual(10)
            expect(engineerObj.name).toEqual('david')
            expect(engineerObj.email).toEqual('david@gmail')
            expect(engineerObj.github).toEqual('githubEngineer')
        })
    })
});

console.log(engineerObj());