// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Enter project title',
    name: 'title'
},
{
    type: 'input',
    message: 'Enter description',
    name: 'description',
},
{
    type: 'input',
    message: 'Enter installation instructions, or leave blank if not applicable',
    name: 'installation',
},
{
      type: 'input',
      message: 'Enter usage information',
      name: 'usage'
},
{
    type: 'input',
    message: 'Enter contribution guidelines, or leave blank if not applicable',
    name: 'contribution'
},
{
    type: 'input',
    message: 'Enter test information, or leave blank if not applicable',
    name: 'tests'
},
{
    type: 'list',
    message: 'Choose a license, or choose none if unlicensed',
    choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'None'],
    name: 'license'
},
{
    type: 'input',
    message: 'Enter contribution guidelines',
    name: 'contributions'
},
{
    type: 'input',
    message: 'Enter GitHub username',
    name: 'username'
},
{
    type: 'input',
    message: 'Enter email',
    name: 'email'
}
]

inquirer
    .prompt(questions)
// TODO: Create a function to write README file
    .then((data) => {
        const README = generateMarkdown(data)
fs.writeFile('./README.md', README, (err) => 
err ? console.log(err) : console.log('successfully created README!'))
    })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
