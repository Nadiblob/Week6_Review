
class Group {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getArea() {
        let area = 0;
        for (let shape of this.shapes) {
            area += shape.getArea();
        }

        return area;
    }
}

module.exports = Group;