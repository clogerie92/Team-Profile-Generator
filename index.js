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

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select your employees role.",
            choices: ["Engineer", "Intern"],
            name: "role"
        },
        {
            type: "input",
            message: "Please enter the emplpoyee's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the emplpoyee's id.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the emplpoyee's email.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the emplpoyee's school.",
            name: "school",
            when: (selected) => selected.role === "Intern"
        },
        {
            type: "input",
            message: "Please enter the emplpoyee's GitHub username.",
            name: "github",
            when: (selected) => selected.role === "Engineer"
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "confirmNewEmployee"
        },
    ]).then(employeeInfo => {
        const {name, id, email, role, school, github, confirmNewEmployee} = employeeInfo;
        let newEmployee;

        if(role === "Engineer") {
            newEmployee = new Engineer(name, id, email, github);
            console.log("Added: ", newEmployee);
        } else if (role === "Intern") {
            newEmployee = new Inter(name, id, email, school);
            console.log("Added: ", newEmployee)
        }
        team.push(newEmployee);

        if(confirmNewEmployee) {
            return addEmployee(team);
        } else {
            return team;
        }
    });
};

