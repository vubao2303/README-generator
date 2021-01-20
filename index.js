const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function getInfo() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'project'
    },
    {
      type: 'input',
      message: 'Please write a short desciption of your project',
      name: 'description'
    },

    {
      type: 'checkbox',
      message: 'What kind of license should your project have?',
      choices:['MTI', 'GNU', 'MPL', 'BSL'],
      name: 'license'
    },
    {
      type: 'list',
      message: 'What command/commands should be run to install dependencies?',
      choices: ['npm install', 'npm build', 'npm ci'],
      name: 'command',
    },

    {
      type: 'input',
      message: 'What command/commands should be run to run test?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'What does the user need to know about using the repo?',
      choices: ['JavaScript', 'CSS', 'Python'],
      name: 'usesage'
    },

    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributing'
    }
  ])
    .then((response) => {
      const readme = `
# ${response.project}  

# Description   
${response.description}  

# Table of Contents 
[Tittle](#readme-generator)  

[Desprition](#Desprition)

[Table of Contents](#Table-of-Content)  

[Installation](#Installation)  

[Usage](#Usage)  

[Contributing](#Contributing)  

[Test](#Test)

[Author](#Author)  

[License](#License)  
 

## Installation  
- ${response.command} 
- ![Inquirer package](https://www.npmjs.com/package/inquirer).

## Usage
-${response.usesage}

## Contributing  
-${response.contributing} - contribute to the repo  

## Test 

- Command to run test:  ${response.test}

## Technologies Used
 - ${response.command}   
 - ${response.usesage}   
 - ${response.contributing}  


## Questions

* ** B TRAM VU ** 

- [Github](${response.username})
- [Email](${response.email})

## License   

- ![License](https://img.shields.io/badge/license-${response.license}-blue.svg)

`;

      fs.writeFile('generateReadme.md', readme, (err) =>
      err ? console.error(err) : console.log('Commit logged!'));
    });
}
getInfo();