const { Circle, Square, Triangle } = require("./shapes.js");

// Passing Test - A string should render correctly as intended by the program
describe('Circle Pass', () => {
    test('should render a string of code for a circle with a red fill', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            'circle cx="150" cy="150" r="80" fill="red"'
        );
    });
});

// Failing Test -  The toEqual() function should return false when passed an empty string
describe('Square Fail', () => {
    test('should return false for an empty value', () => {
        const shape = new Square();
        shape.setColor("");
        expect(shape.render()).toEqual(false);
    });
});

// Exceptions Test - An error should be thrown out if inputted data is not long enough
describe('Triangle Error', () => {
    test('should throw an error when the text is less than 3 characters long', () => {
        const shape = () => new Triangle("Pu");
        const err = new Error(
            'Name of the color must be at least 3 characters long'
        );

        expect(shape).toThrowError(err);
    });
});