const Rectangle = require('../../src/shapes/Rectangle');
const Shape = require('../../src/shapes/Shape');


let rect = null;


describe('Rectangle', () => {
    beforeEach(() => {
        rect = new Rectangle('r1', 20, 40);
    });

    test('is Rectangle and Shape', () => {
        expect(rect instanceof Shape).toBeTruthy();
        expect(rect instanceof Rectangle).toBeTruthy();
    });

    test('getArea()', () => {
        expect( rect.getArea() ).toBe(800);
    });

    test('toString()', () => {
        expect( rect.toString() ).toBe('Rectangle id: r1 w: 20 h: 40');
    });
});