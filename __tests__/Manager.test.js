const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        /* 
         *  If Manager is an instance of Employee, we don't have to check if the constructor throws an error if an invalid name, id, or email address is
         *  provided, as we already handle that in the Employee class and test for that in the Employee test suite.
         */
        it("Should be an instance of an Employee", () => {
            const manager = new Manager("Bill Lumbergh", 2, "bill@fakeadress.com", 10);

            expect(manager instanceof Employee).toEqual(true);
        });

        it("Should create an Object with a name, an id, an email address, and an officeNumber if provided valid arguments", () => {
            const manager = new Manager("Bill Lumbergh", 2, "bill@fakeadress.com", 10);

            expect(manager.officeNumber).toEqual(10);
        });

        it("Should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new Manager("Bill Lumbergh", 2, "bill@fakeadress.com", "10");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative integer");

            expect(cb).toThrowError(err);
        });
    });

    describe("getRole", () => {
        it("Should return 'Manager'", () => {
            const manager = new Manager("Bill Lumbergh", 2, "bill@fakeadress.com", 10);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});