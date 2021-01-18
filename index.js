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
      type: 'input',
      message: 'What kind of license should your project have?',
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
${response.description}

## Description of Page Building 
- Command to install dependencies: ${response.command}
- Command to run test:  ${response.test}

## Technologies Used
-${response.usesage} - gives interacticve elements to web pages
-${response.contributing} - contribute to the repo

## Author

* ** B TRAM VU ** 

- [Github](${response.username})
- [Email](${response.email})

## License ${response.license}
`;

      fs.writeFile('generateReadme.md', readme, (err) =>
      err ? console.error(err) : console.log('Commit logged!'));
    });
}
getInfo();