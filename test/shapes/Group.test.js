const Group = require('../../src/shapes/Group');
const Circle = require('../../src/shapes/Circle');
const Rectangle = require('../../src/shapes/Rectangle');


describe('Group', () => {
    test('addShape()', () => {
        let group = new Group();
        let circle = new Circle('c1', 10);
        group.addShape(circle);
        expect(group.shapes.length).toBe(1);
        let rect = new Rectangle('r1', 20, 40);
        group.addShape(rect);
        expect(group.shapes.length).toBe(2);
    });

    test('getArea()', () => {
        let group = new Group();
        let circle = new Circle('c1', 10);  // area: 314
        group.addShape(circle);
        let rect = new Rectangle('r1', 20, 40);  // area: 800
        group.addShape(rect);
        expect( group.getArea() ).toBe(314+800);
    });
});