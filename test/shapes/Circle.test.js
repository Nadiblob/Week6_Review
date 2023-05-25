const Circle = require('../../src/shapes/Circle');
const Shape = require('../../src/shapes/Shape');


let circle = null;


describe('Circle', () => {
    beforeEach(() => {
        circle = new Circle('c1', 10);
    });

    test('is a child class of Shape', () => {
        // FIX ME (look at similar Rectangle test)
    });

    test('getArea()', () => {
        expect( circle.getArea() ).toBe(314);
    });

    test('toString()', () => {
        // FIX ME
    });
});