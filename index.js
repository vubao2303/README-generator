// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');
// const generateMarkdown = require('./utils/generateMarkdown.js');




// // TODO: Create an array of questions for user input
// const questions = [  

// ];
// console.log(questions)

// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'What is your user name?',
//         name: 'username',
//     },
//     {
//       type: 'input',
//       message: 'What is your GitHub name?',
//       name: 'GitHub',
//   },
//     {
//         type: 'checkbox',
//         message: 'What languages do you know?',
//         choices: ['HTML', 'JavaScript', 'CSS', 'Python'],
//         name: 'languages',
//     },
//     {
//         type: 'checkbox',
//         message: 'What is your preferred method of communication?',
//         choices: ['Phone', 'email', 'snapchat', 'DMs'],
//         name: 'communication',
//     }
// ])
// .then((response) =>{
//   var createReadme = `
// <h1> Name: ${response.username}</h1>
// <p> GB: ${response.GitHub}</p>
// <p> Languagues: ${response.languages}</p>

// `
//     fs.writeFile('README.md', createReadme,(err) =>
//     err ? console.error(err) : console.log('Commit logged!'))
// });








// lets try this to see if it works


// const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);
// async function generateMarkdown() {
//     try {
//         const {name} = await inquirer.prompt( {
//             type: 'input',
//             message: 'What is your GitHub username?',
//             name: 'name'
//         });
//         const readme = `








        
        
        
        
        
//         `;


//         await writeFileAsync('GENREADME.md', readme);
//         console.log("Success!");
//     } catch (err){
//         console.log("Error: ");
//         console.log(err);
//     }
// }
// generateMarkdown();


// the old school way 
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
                type: 'list',
                message: 'What kind of license should your project have?',
                choices: ['MIT','Banana'],
                name: 'license'
            },
            {
                type: 'checkbox',
                message: 'What command/commands should be run to install dependencies?',
                choices: ['npm install', 'JavaScript', 'CSS', 'Python'],
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
                message: 'What is your linkedin?',
                name: 'linkedin'
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
## Site Picture
![Site]()

# Table of Contents 
[Tittle](#readme-generator)

[Site Picutre](#Site-picture)

[Table of Contents](#Table-of-Content)

[Description of Page Building ](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Deployed Link](#Deployed-Link)

[Author](#Author)

[License](#License)


## Description of Page Building 
* Install init and install inquire 
  
* In index.js file  
  <ul>
  <li> 
  <li> 
  <li> 
  <li> 
  </li>
  </ul>
    
* In README.md file 
  <ul>
  <li> Name variables as pointers to html page and to use in functions
  <li> Add on click functions to generate events 
  <li> Use ajax funtion to get API querylinks from OpenWeather website 
  <li> Console log out response to traverse through the objects and find information about the weather

  </ul>



## Code Snippet


## Technologies Used
- ${response.useage} - gives interacticve elements to web pages
    * [${response.contributing}](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Git - version control system to track changes to source code
  * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)


## Deployed Link

* [See Live Site](https://vubao2303.github.io/weather-dashboard/)


## Author

* **${response.username}** 

- [Link to Portfolio Site](https://github.com/vubao2303)
- [Link to Github](${response.username})
- [Link to LinkedIn](${response.linkedin})

## License ${response.license}
`;

                fs.writeFile('generateReadme.md', readme, (err) =>
                    err ? console.error(err) : console.log('Commit logged!'));
        });
}
getInfo();