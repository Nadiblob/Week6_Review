const Group = require('../../src/shapes/Group');
const Circle = require('../../src/shapes/Circle');
const Rectangle = require('../../src/shapes/Rectangle');


describe('Group', () => {
    test('getArea()', () => {
        let group = new Group();
        let circle = new Circle('c1', 10);  // area: 314
        group.addShape(circle);
        let rect = new Rectangle('r1', 20, 40);  // area: 800
        group.addShape(rect);
        expect( group.getArea() ).toBe(314+800);
    });
});