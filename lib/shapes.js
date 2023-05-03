// Creates the parent class Shape with an empty string for the color input
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// Creates a Circle class which inherits the properties of the Shape class
class Circle extends Shape {
    render() {
        // Returns string for circle along with the color input
        return `circle cx="150" cy="100" r="80" fill="${this.color}"`
    }
};

// Creates a Square class which also inherits the properties of the Shape class
class Square extends Shape {
    render() {
        // Returns string for square along with the color input
        return `rect x="75" y="25" width="150" height="150" fill="${this.color}`
    }
};

// Creates a Square class which also inherits the properties of the Shape class
class Triangle extends Shape {
    render() {
        // Returns string for triangle along with the color input
        return `polygon height="150" width="150" points="20,200,275,200 150,0" fill="${this.color}`
    }
};

// Exports all three classes to be used in the main JS file
module.exports = { Circle, Square, Triangle };