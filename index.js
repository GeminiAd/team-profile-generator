const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./utils/generateHTML");
const generateCSS = require("./utils/generateCSS");

const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require("./lib/Employee");

const addTeamMemberChoices = [
    "Add an Engineer",
    "Add an Intern",
    "Finish building my team"
];

/* I'm going to ask this question in multiple scenarios, so I may as well define it here so I can reuse it later. */
const addAnotherTeamMemberQuestion = {
    type: "list",
    name: "teamAdd",
    message: "Choose whether to add another team member or finish:",
    choices: addTeamMemberChoices,
    loop: false
};

/* The list of questions to add a manager that will be fed into the inquirer prompt. */
const addManagerQuestions = [
    {
        name: "name",
        message: "Enter the team manager's name: ",
        validate: validateName
    },
    {
        name: "id",
        message: "Enter the team manager's employee ID: ",
        validate: validateID
    },
    {
        name: "email",
        message: "Enter the team manager's email address: ",
        validate: validateEmail
    },
    {
        name: "officeNumber",
        message: "Enter the team manager's office number: ",
        validate: validateOfficeNumber
    }
];

/* The list of questions to add an engineer. */
const addEngineerQuestions = [
    {
        name: "name",
        message: "Enter the engineer's name: ",
        validate: validateName
    },
    {
        name: "id",
        message: "Enter the engineer's employee ID: ",
        validate: validateID
    },
    {
        name: "email",
        message: "Enter the engineer's email address: ",
        validate: validateEmail
    },
    {
        name: "github",
        message: "Enter the engineer's github username: ",
        validate: validateGithub
    }
];

/* The list of questions to add an intern. */
const addInternQuestions = [
    {
        name: "name",
        message: "Enter the intern's name: ",
        validate: validateName
    },
    {
        name: "id",
        message: "Enter the intern's employee ID: ",
        validate: validateID
    },
    {
        name: "email",
        message: "Enter the intern's email address: ",
        validate: validateEmail
    },
    {
        name: "school",
        message: "Enter the intern's alma mater: ",
        validate: validateSchool
    }
];

/* 
 *  This will be our list of employees that we will add to as the user adds team members.
 *  I want the manager to be displayed first followed by the engineers followed by the interns which is why I'm segregating them into different lists.
 */
const managers = [];
const engineers = [];
const interns = [];

/*
 *  Adds the appropriate team member when given the answers object from the inquirer prompt.
 *  In order to add a team member, we must:
 *      1. Check if the answers object has the officeNumber key.
 *          a. If it does, create a Manager Object from the given answers and add it to our team members list.
 *      2. Check if the answers object has the github key.
 *          a. If it does, create an Engineer Object from the given answers and add it to our team members list.
 *      3. Check if the answers object has the school key.
 *          a. If it does, create an Intern Object from the given answers and add it to our team members list.
 *
 *  @param {Object} answers:    An inquirer answer object. See: https://www.npmjs.com/package/inquirer/v/9.1.4#answers for reference.
 */
function addTeamMember(answers) {
    /* 1. Check if the answers object has the officeNumber key. */
    if (answers.officeNumber !== undefined) {
        /* a. If it does, create a Manager Object from the given answers and add it to our team members list. */
        managers.push(new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.officeNumber)));
    }

    /* 2. Check if the answers object has the github key. */
    if (answers.github !== undefined) {
        /* a. If it does, create an Engineer Object from the given answers and add it to our team members list. */
        engineers.push(new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github));
    }

    /* 3. Check if the answers object has the school key. */
    if (answers.school !== undefined) {
        /* a. If it does, create an Intern Object from the given answers and add it to our team members list. */
        interns.push(new Intern(answers.name, parseInt(answers.id), answers.email, answers.school));
    }
}

/*
 *  Uses the list of employees to generate and write the HTML and CSS to their respective files.
 */
function generateAndWriteTeamProfile() {
    let HTMLString = generateHTML([...managers, ...engineers, ...interns]);
    writeToFile("./dist/index.html", HTMLString);
    let CSString = generateCSS();
    writeToFile("./dist/style.css", CSString);
}

/*
 *  Initialize the team profile generator.
 */
function init() {
    prompt(addManagerQuestions);
}

/* 
 *  Prompts the user for input when given a series of questions.
 *  Since we will be prompting the user at least once but possibly more, it's best to put prompting in its own function to easily call it.
 * 
 *  @param {Object} questions:  An inquirer question object. See: https://www.npmjs.com/package/inquirer/v/9.1.4#objects for reference.
 */
function prompt(questions) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            try {
                addTeamMember(answers);

                promptToAddNewTeamMember();
            } catch (err) {
                console.log(`Error: ${err.message}`);

                prompt(questions);
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

/*
 *  Prompts the user to add another team member. I did have this work being done by the function prompt() before, but I want this program to have the
 *  behavior such that if you enter an invalid parameter for an employee, the program re-prompts you for the correct information instead of quitting.
 *  In order to implement that, I have to modularize prompting to add a new team member, so I can check the inputs beforehand.
 */
function promptToAddNewTeamMember() {
    inquirer
        .prompt([addAnotherTeamMemberQuestion])
        .then((answers) => {
            if (answers.teamAdd === "Add an Engineer") {
                prompt(addEngineerQuestions);
            } else if (answers.teamAdd === "Add an Intern") {
                prompt(addInternQuestions);
            } else {
                generateAndWriteTeamProfile();
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

/*
 *  Writes the given data in the form of a string to the given filename.
 *
 *  @param {string} fileName:   The file name to write to, in the form of a string.
 *  @param {string} data:       The data to be written to the file system, in the form of a string.
 */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            /* If for some reason the dist directory doesn't exist, just create the directory and write the file, we don't need the file system to bitch about it. */
            if (err.errno === -4058) {
                fs.mkdir("./dist/", (err) => {
                    writeToFile(fileName, data);
                });
            } else {
                console.error(err);
            }
        } else {
            console.log(fileName + ' saved!');
        }
    });
}

/*
 *  Function to validate the input email address given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Employee's email address.
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateEmail(answer) {
    if (!answer.trim().length) {
        return "ERROR: Expected email address to be a non-empty string";
    } else if (!answer.includes("@")) {
        return "ERROR: Expected email address to include '@' character";
    } else {
        return true;
    }
}

/*
 *  Function to validate the input employee ID given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Employee's ID in the form of a string (inquirer is buggy when validating after converting string to numbers).
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateID(answer) {
    let ID = Number(answer);
    if (typeof ID !== "number" || isNaN(ID) || ID < 0 || !Number.isInteger(ID) || !answer.trim().length) {
        return "ERROR: Expected employee ID to be a non-negative integer";
    } else if (Employee.employeeIDs.includes(ID)) {
        return "ERROR: An Employee already exists with the same employee ID";
    } else {
        return true;
    }
}

/*
 *  Function to validate the input github username given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Engineer's github username in the form of a string.
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateGithub(answer) {
    if (!answer.trim().length) {
        return "ERROR: Expected github username to be a non-empty string";
    } else {
        return true;
    }
}

/*
 *  Function to validate the input employee name given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Employee's name in the form of a string.
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateName(answer) {
    if (!answer.trim().length) {
        return "ERROR: Expected name to be a non-empty string";
    } else {
        return true;
    }
}

/*
 *  Function to validate the input team manager's office number given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Manager's office number in the form of a string (inquirer is buggy when validating after converting string to numbers).
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateOfficeNumber(answer) {
    let officeNumber = Number(answer);
    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0 || !Number.isInteger(officeNumber) || !answer.trim().length) {
        return "ERROR: Expected office number to be a non-negative integer";
    } else {
        return true;
    }
}

/*
 *  Function to validate the input school given to the inquirer prompt.
 *  For reference on the inquirer validate function, see: https://www.npmjs.com/package/inquirer/v/9.1.4#objects
 *
 *  @param {string} answer: The user's input from entering an Intern's school in the form of a string.
 * 
 *  @return: Error message string if the answer is not valid, true otherwise.
 */
function validateSchool(answer) {
    if (!answer.trim().length) {
        return "ERROR: Expected alma mater to be a non-empty string";
    } else {
        return true;
    }
}

init();