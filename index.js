const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the manager's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the manager's id.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the manager's email.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the manager's office number.",
            name: "officeNumber"
        },
    ]).then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        console.log("Added: ", manager);
        team.push(manager);
    });
}

addManager();
