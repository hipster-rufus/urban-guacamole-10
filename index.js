const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const generateData = ({shape, shapeColor, textColor, text}) => {
    let svg = "";
    svg = `<svg version-"1.1" width="300" height="200 xmlns=""http://www.w3.org/2000/svg">
        < `;
        let selectedShape;
        if (shape === 'Circle') {
            selectedShape = new Circle();
            svg += `circle cx="150" cy="150" r="80" fill="${shapeColor}"`;
        } else if (shape === 'Square') {
            selectedShape = new Square();
            svg += `rect x="10" y="10" width="150" height="150" fill="${shapeColor}"`;
        } else {
            selectedShape = new Triangle();
            svg += `polygon height="150" width="150" points="0,200 300,200 150,0" fill="${shapeColor}"`;
        };
    svg += `/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFile('/examples/logo.svg', svg, (err) => {
        err ? console.log(err) : console.log('File successfully created! Navigate to the "examples" folder to find your new logo.')
    })
};

function userPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text would you like to display on your logo?',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What is the color of the text?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'What is the shape of your logo?',
            name: 'shape',
            choices: [
                'Circle',
                'Square',
                'Triangle'
            ]
        },
        {
            type: 'list',
            message: 'What is the color of the shape?',
            name: 'shapeColor'
        }
    ])
    .then(generateData);
}

userPrompt();