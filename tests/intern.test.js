const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("object", () => {
        it("should create an intern object", () => {
            const intern = new Engineer("Natasha Romanoff", 3, "blackwidow@avengers.com", "BWU");
            expect(intern.school).toEqual("BWU");
        });
    });
});