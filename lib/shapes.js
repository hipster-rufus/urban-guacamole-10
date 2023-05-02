class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends Shape {
    render() {
        `circle cx="150" cy="100" r="80" fill="${this.color}"`
    }
};

class Square extends Shape {
    render() {
        `rect x="75" y="25" width="150" height="150" fill="${this.color}`
    }
};

class Triangle extends Shape {
    render() {
        `polygon height="150" width="150" points="20,200,275,200 150,0" fill="${this.color}`
    }
};

module.exports = { Circle, Square, Triangle };