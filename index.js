const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const generateData = ({shape, shapeColor, textColor, text}) => {
    let svg = "";
    svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <`;
    let selectShape;
    if (shape === 'Circle') {
        selectShape = new Circle();
        svg += `circle cx="150" cy="150" r="80"`;
    } else if (shape === 'Square') {
        selectShape = new Square();
        svg += `rect x="10" y="10" width="150" height="150"`;
    } else {
        selectShape = new Triangle();
        svg += `polygon height="150" width="150" points="0,200 300,200 150,0"`;
    };
    svg += ` fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFile(`./examples/${text}.svg`, svg, (err) => {
        err ? console.log(err) : console.log('File successfully created! Navigate to the "examples" folder to find your new logo.')
    })
};

function userPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the text for your logo:',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter the color of your text:',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Choose a shape:',
            name: 'shape',
            choices: [
                'Circle',
                'Square',
                'Triangle'
            ]
        },
        {
            type: 'input',
            message: 'Enter the color of the shape:',
            name: 'shapeColor'
        }
    ])
    .then(generateData);
}

userPrompt();