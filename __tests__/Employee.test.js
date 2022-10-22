const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an Object with a name, an id, and an email if provided valid arguments", () => {
            const bob = new Employee("Bob", 1, "bob@fakeaddress.com");

            expect(bob.name).toEqual("Bob");
            expect(bob.id).toEqual(1);
            expect(bob.email).toEqual("bob@fakeaddress.com");
        });

        it("Should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("Should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(2, 1, "bob@fakeaddress.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toEqual(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Bob", "1", "bob@fakeaddress.com");
            const err = new Error("Expected parameter 'id' to be a non-negative integer");

            expect(cb).toEqual(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Bob", "1", 4);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toEqual(err);
        });
    });
});