const Employee = require("./Employee");

/*
 *  Engineer is the same as an Employee, only an Engineer has the github username field as well.
 *  The github username has to be a non-empty string or an error will be thrown.
 */
class Engineer extends Employee {
    constructor(name, id, email, github) {
        /* Call the parent class's constructor so we gain all the error-handling and parameter assigning that class Employee does in its constructor. */
        super(name, id, email);

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;