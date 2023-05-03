// Imports required node pacakges
const inquirer = require('inquirer');
const fs = require('fs');
// Exports classes from shapes.js to be used
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// Function to write SVG file using the user's answers from the inquirer prompt
const generateData = ({shape, shapeColor, textColor, text}) => {
    let svg = "";
    svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <`;
    // Conditional statement to add to string based on the user's choice of shape
    let selectShape;
    if (shape === 'Circle') {
        selectShape = new Circle();
        svg += `circle cx="150" cy="100" r="80"`;
    } else if (shape === 'Square') {
        selectShape = new Square();
        svg += `rect x="75" y="25" width="150" height="150"`;
    } else {
        selectShape = new Triangle();
        svg += `polygon height="150" width="150" points="20,200,275,200 150,0"`;
    };
    svg += ` fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
    // Generates file using the data above and saves in the "examples" directory
    fs.writeFile(`./examples/${text}.svg`, svg, (err) => {
        err ? console.log(err) : console.log('File successfully created! Navigate to the "examples" folder to find your new logo.')
    })
};


// Function which uses inquirer.prompt to give the user questions to answer in their terminal 
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

// Calls the userPrompt function which initializes the inquirer.prompt questions for the user
userPrompt();