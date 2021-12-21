const inquirer = require('inquirer');
// const fs = require('fs')

// const generatePage = require('./src/page-template.js')

// const pageHtml = generatePage(Name, github)

// fs.writeFile('./index.html' , pageHtml, err => {
//     if(err) throw (err);

//     console.log('Portfolio complete! Check out index.html to see the output!')
// })

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers))