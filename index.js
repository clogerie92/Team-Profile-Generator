const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const employees = [];

managerQuestions().then((response) => {
    console.log(response);
    const htmlFile = "dist/index.html";
    fs.writeFile(path.resolve(__dirname, htmlFile), "test", (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Worked!")
        }
    });
});

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the engineer's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the engineer's email address",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the engineer's github username",
            name: "github"
        },
        {
            type: "input",
            message: "Please enter the engineer's id",
            name: "id"
        }
    ]).then((response) => {
        console.log(response);
        return new Engineer(response.name, response.email, response.id, response.github);
    });
}

function internQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the intern's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the intern's email address",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the intern's school",
            name: "school"
        },
        {
            type: "input",
            message: "Please enter the intern's id",
            name: "id"
        }
    ]).then((response) => {
        console.log(response);
        return new Intern(response.name, response.email, response.id, response.school);
    });
}

function managerQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your id",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your office number",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "Would you like to add an employee, engineer, or intern?",
            choices: ["employee", "engineer", "intern"],
            name: "team"
        }
    ]).then((response) => {
        console.log(response);
        return new Manager(response.name, response.email, response.id, response.officeNumber);
    });
}


// engineerQuestions();
// internQuestions();
