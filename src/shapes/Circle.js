const Shape = require('./Shape');

// The area of a circle is PI times the radius squared,
// or in JS: PI * (this.radius ** 2)
const PI = 3.14;



class Circle extends Shape {
    constructor(id, radius) {
        super(id, radius * 2, radius * 2);
        this.radius = radius;
    }

    getArea() {
        return PI * (this.radius ** 2);
    }

    toString() {
        return `Circle id: ${this.id} r: ${this.radius}`;
    }
}

module.exports = Circle;