class Shape {
    constructor(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
    }

    toString() {
        return `Shape id: ${this.id} w: ${this.width} h: ${this.height}`;
    }
}

module.exports = Shape;