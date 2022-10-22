const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        /* 
         *  If Intern is an instance of Employee, we don't have to check if the constructor throws an error if an invalid name, id, or email address is
         *  provided, as we already handle that in the Employee class and test for that in the Employee test suite.
         */
        it("Should be an instance of an Employee", () => {
            const intern = new Intern("Ryan Howard", 59, "ryan.howard@dunder-mifflin.com", "University of Scranton");

            expect(intern instanceof Employee).toEqual(true);
        });

        it("Should create an Object with a name, an id, an email address, and a school if provided valid arguments", () => {
            const intern = new Intern("Ryan Howard", 64, "ryan.howard@dunder-mifflin.com", "University of Scranton");

            expect(intern.school).toEqual("University of Scranton");
        });

        it("Should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern("Ryan Howard", 65, "ryan.howard@dunder-mifflin.com", 1);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe("getSchool", () => {
        it("Should return the same school name it was instantiated with", () => {
            const internSchool = "University of Scranton";
            const intern = new Intern("Ryan Howard", 67, "ryan.howard@dunder-mifflin.com", internSchool);

            expect(intern.getSchool()).toEqual(internSchool);
        });
    });

    describe("getRole", () => {
        it("Should return 'Intern' for an Intern", () => {
            const intern = new Intern("Ryan Howard", 68, "ryan.howard@dunder-mifflin.com", "University of Scranton");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});