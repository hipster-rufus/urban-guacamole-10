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
        `circle cx="150" cy="150" r="80" fill="${this.color}"`
    }
};

class Square extends Shape {
    render() {
        `rect x="10" y="10" width="150" height="150" fill="${this.color}`
    }
};

class Triangle extends Shape {
    render() {
        `polygon height="150" width="150" points="0,200 300,200 150,0" fill="${this.color}`
    }
};

module.exports = { Circle, Square, Triangle };