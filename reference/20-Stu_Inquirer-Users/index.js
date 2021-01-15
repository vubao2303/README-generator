const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        choices: ['HTML', 'JavaScript', 'CSS', 'Python'],
        name: 'languages',
    },
    {
        type: 'checkbox',
        message: 'What is your preferred method of communication?',
        choices: ['Phone', 'email', 'snapchat', 'DMs'],
        name: 'communication',
    }
])
.then((response) =>{
    fs.appendFile('log.txt', JSON.stringify(response),(err) =>
    err ? console.error(err) : console.log('Commit logged!'))
});