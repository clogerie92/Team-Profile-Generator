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
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-md">
                    <span>Team Profile Generator</span>
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