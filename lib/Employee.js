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