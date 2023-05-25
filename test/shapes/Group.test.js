const Group = require('../../src/shapes/Group');
const Circle = require('../../src/shapes/Circle');
const Rectangle = require('../../src/shapes/Rectangle');


describe('Group', () => {
    test('is a Group', () => {
        let group = new Group();
        expect(group instanceof Group).toBeTruthy();
    });

    test('getArea()', () => {
        let group = new Group();
        let circle = new Circle('c1', 10);
        group.addShape(circle);
        let rect = new Rectangle('r1', 20, 40);
        group.addShape(rect);
        expect( group.getArea() ).toBe(314+800);
    });
});