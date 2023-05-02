class Shape {
    constructor() {
        this.shapeColor = "";
    }
}

class Circle extends Shape {
    render() {
        return `circle cx="150" cy="150" r="80" fill="${this.shapeColor}"`
    }
};

class Square extends Shape {
    render() {
        return `rect x="10" y="10" width="150" height="150" fill="${this.shapeColor}`        
    }
};

class Triangle extends Shape {
    render() {
        return `polygon height="150" width="150" points="0,200 300,200 150,0" fill="${this.shapeColor}`      
    }
};

module.exports = { Circle, Square, Triangle };