/*
 *  Class Employee has three properties: a string name, an integer ID, and a string email address.
 *  For simplicity purposes, I didn't check to see if someone enters their name as 1 or 2; if someone wants to
 *  enter a name like 1 or 2 for an employee, that's their problem. The employee's name has to be a non-empty string, however.
 *  ID has to be an integer. If it's a fractional value or a string, an error is thrown. Also, it was bugging me that two employees
 *  could have the same ID - that would never happen in a company - so I keep a list of all employee IDs in the Employee class. If
 *  you try to create an Employee and another Employee has the same ID, an error is thrown. The Employee's email address has to be a
 *  string value.
 */
class Employee {
    static employeeIDs = [];

    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0 || !Number.isInteger(id)) {
            throw new Error("Expected parameter 'id' to be a non-negative integer");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        /* Not necessary for this challenge, but it was bothering me that two Employees could exist with the same id. */
        if (Employee.employeeIDs.includes(id)) {
            throw new Error("An Employee already exists with the same 'id' parameter");
        }

        this.name = name;
        this.id = id;
        this.email = email;

        Employee.employeeIDs.push(this.id);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;