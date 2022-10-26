const Employee = require("./Employee");

/*
 *  An Intern is the same as an Employee, it just has an additional property: the name of the school they are attending.
 *  The name of the school has to be a non-empty string or an error will be thrown.
 */
class Intern extends Employee {
    constructor(name, id, email, school) {
        /* Call the parent class's constructor so we gain all the error-handling and parameter assigning that class Employee does in its constructor. */
        super(name, id, email);

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;