const Manager = require("../lib/Manager");

const createManagerCard = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-secondary>
                <h5>${manager.name}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Manager<i class="bi bi-clipboard2"></i></h5>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email:<a href="${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const createEngineerCard = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${engineer.name}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Engineer<i class="bi bi-pc-display-horizontal"></i></h5>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email:<a href="email at:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `;
};

const createInternCard = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${intern.name}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Intern<i class="bi bi-person-badge"></i></h5>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="email at:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

createHtml = (employeeData) => {
    cardsArray = [];

    for (let i = 0; i < employeeData.length; i++) {
        const employee = employeeData[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManagerCard(employee);
            cardsArray.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = createEngineerCard(employee);
            cardsArray.push(engineerCard);
            
        } else if (role === "Intern") {
            const internCard = createInternCard(employee);
            cardsArray.push(internCard);
        }
    }

    // cardsArray.forEach(card => {
    //     const employee = employeeData[i];
    //     const role = employee.getRole();
        
    //     // switch(role) {
    //     //     case "Manager":
    //     //         const managerCard = createManagerCard(employee);
    //     //         cardsArray.push(managerCard);
    //     //         break;
    //     //     case "Engineer":
    //     //         const engineerCard = createEngineerCard(employee);
    //     //         cardsArray.push(engineerCard);
    //     //         break;
    //     //     case "Intern":
    //     //         const internCard = createInternCard(employee);
    //     //         cardsArray.push(internCard);
    //     //         break;
    //     //     default:
    //     //         console.log("Please select a role!");
    //     // }
    // });

    const teamCards = cardsArray.join("");
    const teamPage = teamWebPage(teamCards);
    return teamPage;
}

// creates team webpage
const teamWebPage = function(employeeCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Abel&family=Macondo&family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-md">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile Generator</span>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="employee-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = createHtml;