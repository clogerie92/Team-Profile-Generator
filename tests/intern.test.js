const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("object", () => {
        it("should create an intern object", () => {
            const intern = new Intern("Natasha Romanoff", 3, "blackwidow@avengers.com", "BWU");
            expect(intern.school).toEqual("BWU");
        });
    });
    describe("get school", () => {
        it("should return the intern's school", () => {
            const intern = new Intern("Natasha Romanoff", 3, "blackwidow@avengers.com", "BWU");
            expect(intern.school).toEqual("BWU");
        });
    });
    describe("get role", () => {
        it("should return the intern's role", () => {
            const intern = new Intern("Natasha Romanoff", 3, "blackwidow@avengers.com", "BWU");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});