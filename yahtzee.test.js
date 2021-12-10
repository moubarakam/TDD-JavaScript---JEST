const yahtzee = require("./yahtzee");
describe('TDD - Yahtzee', () => {

        test('test - Three Of a Kind', () => {
            const result = yahtzee(4, 6, 3, 4, 4);
            expect(result).toBe(21);
        })
        
    }
)