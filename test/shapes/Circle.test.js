const Circle = require('../../src/shapes/Circle');
const Shape = require('../../src/shapes/Shape');

let circle = null;

describe('Circle', () => {
    beforeEach(() => {
        circle = new Circle('c1', 10);
    });

    test('is Circle and Shape', () => {
        expect(circle instanceof Shape).toBeTruthy();
        expect(circle instanceof Circle).toBeTruthy();
    });

    test('getArea()', () => {
        expect( circle.getArea() ).toBe(314);
    });

    test('toString()', () => {
        expect( circle.toString() ).toBe('Circle id: c1 r: 10');
    });
});