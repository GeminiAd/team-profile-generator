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
            const cb = () => new Employee(2, 2, "bob@fakeaddress.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Bob", "1", "bob@fakeaddress.com");
            const err = new Error("Expected parameter 'id' to be a non-negative integer");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not an integer", () => {
            const cb = () => new Employee("Bob", 1.34, "bob@fakeaddress.com");
            const err = new Error("Expected parameter 'id' to be a non-negative integer");

            expect(cb).toThrowError(err);
        });

        /* Not necessary for this challenge, but it was bothering me that two Employees could exist with the same id. */
        it("Should throw an error if an Employee exists that has the same 'id'", () => {
            const cb = () => {
                const bob = new Employee("Bob", 23, "bob@fakeaddress.com");
                const bill = new Employee("Bill", 23, "bill@fakeaddress.com");
            };
            const err = new Error("An Employee already exists with the same 'id' parameter");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Bob", 6, 4);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    /* One could argue that testing getters and setters is trivial, but getter functions are part of the specifications, so I will test them here. */
    describe("getName", () => {
        it("Should return the name it was instantiated with", () => {
            const name = "Bob";
            const bob = new Employee(name, 8, "bob@fakeaddress.com");

            expect(bob.getName()).toEqual(name);
        });
    });
    describe("getId", () => {
        it("Should return the id it was instantiated with", () => {
            const id = 43;
            const bob = new Employee("Bob", id, "bob@fakeaddress.com");

            expect(bob.getId()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("Should return the email it was instantiated with", () => {
            const email = "bob@fakeaddress.com";
            const bob = new Employee("Bob", 9, email);

            expect(bob.getEmail()).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("Should return 'Employee' for an Employee", () => {
            const bob = new Employee("Bob", 10, "bob@fakeaddress.com");

            expect(bob.getRole()).toEqual("Employee");
        });
    });
});