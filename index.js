// TODO: Include packages needed for this application
const inquirer=require("inquirer"); //for user input
const fs=require("fs");//for saving the read me 
const generateMarkdown= require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

{
    type:"input",
    name:"projecttitle",
    message:"Please enter the title of the Project:- ",
},
{
    type:"input",
    name:"description",
    message:"Please give a short description of the project:- ",

},

{
    type:"input",
    name:"userstory",
    message:"Please enter the user story of the project:- ",

},
{
    type:"input",
    name:"criteria",
    message:"Please enter the acceptance criteria of the project:- ",
},

{
    type:"input",
    name:"install",
    message:"Please provide instructions and commands for installation for the project:- ",
},
{
    type:"input",
    name:"deploy",
    message:"Please enter your deployment URL:- ",
},
{
    type:"input",
    name:"usage",
    message:"Please state the purpose the project:- ",

},

{
    type:"input",
    name:"tests",
    message:"Please enter the test cases for the project:- ",
},

 {
    type:"image",
    name:"screenshot",
    message:"Please Upload your screenshot(s).",
 },

{
    type:"input",
    name:"username",
    message:"Please enter your name:- ",
},
{
    type:"input",
    name:"emailID",
    message:"Please enter your E-mail address:- ",
},

{
    type:"input",
    name:"github",
    message:"Please enter your GitHub Repo URL:- ",
},
{
    type:"list",
    choices:['GNU AGPLv3',
    'GNU GPLv3', 
    'GNU LGPLv3',
    'Mozilla Public License 2.0', 
    'Apache License 2.0', 
    'MIT License',
    'The Unlicense',
    'Boost Software License 1.0'],
    name:"license",
    message:"Please select a license for the project:",
},

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), function(err){
        if(err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
//The init() function is a function that is called 
//when the user wants to initialize the application. 
//The function first prompts the user to answer a series of questions, 
//and then it uses the answers to create a data object. 
//The data object is then written to a file called TheREADMEFile.md.
//The null value is used to indicate that 
//the data object should not be indented when it is serialized to JSON. This is done to make the output more readable.
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(JSON.stringify(data,null,""));
        // data.renderLicenseBadge=renderLicenseBadge(data.license);
        writeToFile("TheREADMEFile.md",data);

    });
      }
// Function call to initialize app
init();
