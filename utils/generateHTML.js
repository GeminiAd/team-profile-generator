const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

/*
 *  Generates and returns a string that represents the HTML of the employee card given an employee.
 *  NOTE: The employee that is passed as a parameter is of a class that extends Employee and is not actually of the Employee class.
 * 
 *  @param { Employee } employee:   The Object that extends class Employee to generate the card for.
 * 
 *  @return { string } cardHTML:    The string representing the HTML of one employee card.
 */
function generateCard(employee) {
    let iconHTML = generateIconHTML(employee);
    let finalListItemHTML = generateFinalListItemHTML(employee);

    let cardHTML = `            <div class="col-sm-6 col-lg-4 col-xl-3 p-3">
                <div class="card shadow px-0">
                    <div class="card-header text-bg-primary">
                        ${iconHTML}
                        <h3 class="card-title">${employee.getName()}</h3>
                        <h5 class="card-subtitle">${employee.getRole()}</h5>
                    </div>
                    <div class="card-body my-3">
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            ${finalListItemHTML}
                        </ul>
                    </div>
                </div>
            </div>`;

    return cardHTML;
}

/*
 *  Generates and returns a string that represents the HTML of the section with the employee cards in it.
 *  NOTE: All employees in the array are of a class that extends Employee and are not actually of the Employee class.
 * 
 *  @param { [ Employee ] } employees:  An array of Objects that extend class Employee.
 * 
 *  @return { string } cardSection:     A string representing the HTML of the section that contains the cards of each employee.
 */
function generateCardSection(employees) {
    let cardSection = `    <main class="container-xxl">
        <div class="row d-flex justify-content-center">\n`;

    for (const employee of employees) {
        let cardHTML = generateCard(employee);
        cardSection += (cardHTML + "\n");
    }

    cardSection += `        </div>\n    </main>`;

    return cardSection;
}

/*
 *  Generates the HTML of the final list item for an employee card when given an employee.
 *  Each role - Manager, Engineer, and Intern - share several properties - name, id, and email. Each role has one property that
 *  the other doesn't: Manager has an officeNumber, Engineer has a github username, and Intern has a school. This function handles
 *  the logic for generating that final bit of information that is different for each role.
 *  NOTE: Any employee passed as a parameter isn't actually of class Employee directly but is of a class that extends Employee.
 * 
 *  @param { Employee } employee: An Object that extends class Employee.
 * 
 *  @return { string } finalListItemHTML:   A string representing the HTML of the final list item in the employee card for the given employee.
 */
function generateFinalListItemHTML(employee) {
    let finalListItemHTML;

    if (employee instanceof Manager) {
        finalListItemHTML = `<li class="list-group-item">Office number: ${employee.officeNumber}</li>`;
    } else if (employee instanceof Engineer) {
        finalListItemHTML = `<li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
    } else if (employee instanceof Intern) {
        finalListItemHTML = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    } else {
        /* If the employee is none of these classes, we have real problems. */
        throw new Error("Expected employee to be of class Manager, Engineer, or Intern");
    }

    return finalListItemHTML;
}

/*
 *  Generates and returns a string that represents the HTML of the team profile when given the list of employees.
 *  NOTE: All employees in the array are of a class that extends Employee and are not actually of the Employee class.
 *  
 *  @param { [ Employee ] } employees:  An array of Objects that extend class Employee.
 * 
 *  @return { string } HTML:            A string representing the HTML of the team profile generator.
 */
function generateHTML(employees) {
    let cardSection = generateCardSection(employees);

    let HTML = `<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet" />
    <title>Team Profile</title>
</head>
    
<body>
    <header>
        <h1 class="text-white">My Team</h1>
    </header>
    
${cardSection}
    
    <!-- Font Awesome v6 icons -->
    <script src="https://kit.fontawesome.com/77e25a049f.js" crossorigin="anonymous"></script>
</body>
    
</html>`;

    return HTML;
}

/*
 *  Generates the HTML of the icon that is displayed in the upper-right hand corner of the employee card when given an employee.
 *  This icon is different for each role, so this function handles the logic of returning the appropriate icon based on the class of employee.
 *  NOTE: Any employee passed as a parameter isn't actually of class Employee directly but is of a class that extends Employee.
 * 
 *  @param { Employee } employee: An Object that extends class Employee.
 * 
 *  @return { string } iconHTML: A string representing the HTML of the icon for the role of the employee that was passed as a parameter.
 */
function generateIconHTML(employee) {
    let iconHTML;

    if (employee instanceof Manager) {
        iconHTML = `<i class="fa-solid fa-mug-hot fa-2xl"></i>`;
    } else if (employee instanceof Engineer) {
        iconHTML = `<i class="fa-solid fa-glasses fa-2xl"></i>`;
    } else if (employee instanceof Intern) {
        iconHTML = `<i class="fa-solid fa-graduation-cap fa-2xl"></i>`;
    } else {
        /* If the employee is none of these classes, we have real problems. */
        throw new Error("Expected employee to be of class Manager, Engineer, or Intern");
    }

    return iconHTML;
}

module.exports = generateHTML;