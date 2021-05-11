// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require("inquirer");

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Enter installation instructions',
      },
      {
        type: 'input',
        name: 'information',
        message: 'Enter usage information',
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'Enter contribution guidelines',
      },
      {
        type: 'input',
        name: 'testIns',
        message: 'Enter test instructions',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'BSD', 'GPL'],
      },
    ])
}

//WHEN I enter a description, installation instructions, 
//usage information, contribution guidelines, and test instructions

const generateMD = (answers) =>
`# ${answers.title}
![Link](https://img.shields.io/github/license/campe0n/readme_generator?label=${answers.license}&message=${answers.license}&style=flat-square)

## Description
${answers.description}

## Table of Contents
[Description](#description)

[Installation Instructions](#installation-instructions)

[Usage Information](#usage-information)

[Contribution Guidelines](#contribution-guidelines)

[Test Instructions](#test-instructions)

[Questions](#questions)

## Installation Instructions
${answers.instructions}

## Usage Information
${answers.information}

## Contribution Guidelines
${answers.guidelines}

## Test Instructions
${answers.testIns}

## Questions
If you have any questions, you can reach me using these methods.

[github](https://github.com/${answers.github})

email: ${answers.email}

## License
This project is licensed by ${answers.license}
`

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFileAsync('readme.md', generateMD(answers)))
}

// Function call to initialize app
init();
