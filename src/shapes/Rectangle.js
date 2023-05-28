const Shape = require('./Shape');


class Rectangle extends Shape {
    constructor(id, width, height) {
        super(id, width, height);
    }

    getArea() {
        let area = this.width * this.height;

        return area;
    }

    toString() {
        return `Rectangle id: ${this.id} w: ${this.width} h: ${this.height}`;
    }
}

module.exports = Rectangle;