const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        /* Call the parent class's constructor so we gain all the error-handling and parameter assigning that class Employee does in its constructor. */
        super(name, id, email);

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
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