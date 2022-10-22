const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require("fs");

const addTeamMemberChoices = [
    "Add an Engineer",
    "Add an Intern",
    "Finish building my team"
];

/* I'm going to ask this question in multiple scenarios, so I may as well define it here so I can reuse it later. */
const addAnotherTeamMemberQuestion = {
    type: "list",
    name: "teamAdd",
    message: "Choose your next action:",
    choices: addTeamMemberChoices,
    loop: false
};

/* The list of questions that will be fed into the inquirer prompt. */
const addManagerQuestions = [
    {
        name: "name",
        message: "Enter the team manager's name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter the team manager's employee ID: "
    },
    {
        name: "email",
        message: "Enter the team manager's email address: "
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Enter the team manager's office number: "
    },
    addAnotherTeamMemberQuestion
];

const addEngineerQuestions = [
    {
        name: "name",
        message: "Enter the engineer's name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter the engineer's employee ID: "
    },
    {
        name: "email",
        message: "Enter the engineer's email address: "
    },
    {
        name: "github",
        message: "Enter the engineer's github username: "
    },
    addAnotherTeamMemberQuestion
];

const addInternQuestions = [
    {
        name: "name",
        message: "Enter the intern's name: "
    },
    {
        type: "number",
        name: "id",
        message: "Enter the intern's employee ID: "
    },
    {
        name: "email",
        message: "Enter the intern's email address: "
    },
    {
        name: "school",
        message: "Enter the intern's alma mater: "
    },
    addAnotherTeamMemberQuestion
];

/* This will be our list of employees that we will add to as the user adds team members.  */
const employees = [];

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
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    }

    /* 2. Check if the answers object has the github key. */
    if (answers.github !== undefined) {
        /* a. If it does, create an Engineer Object from the given answers and add it to our team members list. */
        employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    }

    /* 3. Check if the answers object has the school key. */
    if (answers.school !== undefined) {
        /* a. If it does, create an Intern Object from the given answers and add it to our team members list. */
        employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    }
}

function generateHTML() {
    console.log(employees);
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
            addTeamMember(answers);

            if (answers.teamAdd === "Add an Engineer") {
                prompt(addEngineerQuestions);
            } else if (answers.teamAdd === "Add an Intern") {
                prompt(addInternQuestions);
            } else {
                generateHTML();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

init();