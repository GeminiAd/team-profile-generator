const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an Object with a name, an id, and an email if provided valid arguments", () => {
            const bob = new Employee("Bob", 1, "bob@fakeaddress.com");

            expect(bob.name).toEqual("Bob");
            expect(bob.id).toEqual(1);
            expect(bob.email).toEqual("bob@fakeaddress.com");
        });
    });
});