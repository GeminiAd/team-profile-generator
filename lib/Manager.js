const Employee = require("./Employee");

/*
 *  Manager is the same as Employee, except it has one additional property: office number.
 *  The office number has to be a non-negative integer, or an error is thrown. Since there is
 *  only one team manager per team, I didn't check to see if any other managers share the same office number.
 */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        /* Call the parent class's constructor so we gain all the error-handling and parameter assigning that class Employee does in its constructor. */
        super(name, id, email);

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0 || !Number.isInteger(officeNumber)) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative integer");
        }

        this.officeNumber = officeNumber;
    }

    /* Override class Employee's getRole() function */
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;