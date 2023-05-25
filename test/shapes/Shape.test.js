const Shape = require('../../src/shapes/Shape');


let shape = null;


describe('Shape', () => {
    beforeEach(() => {
        shape = new Shape('s1', 5, 10);
    });

    test('is a Shape', () => {
        expect(shape instanceof Shape).toBeTruthy();
    });

    test('toString()', () => {
        expect( shape.toString() ).toBe('Shape id: s1 w: 5 h: 10');
    });
});