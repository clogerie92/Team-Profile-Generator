const inquirer = require("inquirer");
const fs = require("fs");
const createHTML = require("./src/generateCards")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// employees array
const employees = [];
// manager prompt
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
        employees.push(manager);
    });
}
// engineer/intern prompt
const addEmployee = () => {
    console.log("Adding employees to the team!")
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select your employees role.",
            choices: ["Engineer", "Intern"],
            name: "role"
        },
        {
            type: "input",
            message: "Please enter the employee's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the employee's id.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the employee's email.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the employee's school.",
            name: "school",
            when: (selected) => selected.role === "Intern"
        },
        {
            type: "input",
            message: "Please enter the employee's GitHub username.",
            name: "github",
            when: (selected) => selected.role === "Engineer"
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "confirmNewEmployee",
            default: false
        },
    ]).then(employeeInfo => {
        const {name, id, email, role, school, github, confirmNewEmployee} = employeeInfo;
        let newEmployee;

        if(role === "Engineer") {
            newEmployee = new Engineer(name, id, email, github);
            console.log("Added: ", newEmployee);
        } else if (role === "Intern") {
            newEmployee = new Intern(name, id, email, school);
            console.log("Added: ", newEmployee)
        }
        employees.push(newEmployee);

        if(confirmNewEmployee) {
            return addEmployee(employees);
        } else {
            return employees;
        }
    });
};
// creates html file and adds it to dist folder
const htmlFile = teamData => {
    fs.writeFile("./dist/index.html", teamData, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("index.html file created in dist folder!");
        }
    })
};

addManager().then(addEmployee).then(employees => {
    return createHTML(employees);
}).then(htmlPage => {
    return htmlFile(htmlPage);
}).catch(error => {
    console.log(error);
});