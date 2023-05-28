const Shape = require('./Shape');


const PI = 3.14;


class Circle extends Shape {
    constructor(id, radius) {
        super(id, radius * 2, radius * 2);
        this.radius = radius;
    }

    getArea() {
        let area = PI * (this.radius ** 2);

        return area;
    }

    toString() {
        return `Circle id: ${this.id} r: ${this.radius}`;
    }
}

module.exports = Circle;