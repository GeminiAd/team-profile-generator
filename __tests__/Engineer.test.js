const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create an Object with a name, an id, an email address, and a github username if provided valid arguments", () => {
            const engineer = new Engineer("Linus Torvalds", 1, "creator@linux.org", "torvalds");

            expect(engineer.github).toEqual("torvalds");
        });

        it("Should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Linus Torvalds", 1, "creator@linux.org", 1);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        /* 
         *  If Engineer is an instance of Employee, we don't have to check if the constructor throws an error if an invalid name, id, or email address is
         *  provided, as we already handle that in the Employee class and test for that in the Employee test suite.
         */
        it("Should be an instance of an Employee", () => {
            const engineer = new Engineer("Linus Torvalds", 1, "creator@linux.org", "torvalds");

            expect(engineer instanceof Employee).toEqual(true);
        });
    });

    describe("getGitHub", () => {
        it("Should return the github username it was instantiated with", () => {
            const gitHubUsername = "torvalds";
            const engineer = new Engineer("Linus Torvalds", 1, "creator@linux.org", gitHubUsername);

            expect(engineer.getGithub()).toEqual(gitHubUsername);
        })
    });

    describe("getRole", () => {
        it("Should return 'Engineer' for an Engineer", () => {
            const engineer = new Engineer("Linus Torvalds", 1, "creator@linux.org", "torvalds");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});