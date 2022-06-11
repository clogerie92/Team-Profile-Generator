const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("object", () => {
        it("should create an engineer object", () => {
            const engineer = new Engineer("Tony Stark", 2, "ironman@avengers.com", "iamironman");
            expect(engineer.gitHub).toEqual("iamironman");
        });
    });
    describe("get GitHub", () => {
        it("should return engineer's GitHub username", () => {
            const engineer = new Engineer("Tony Stark", 2, "ironman@avengers.com", "iamironman");
            expect(engineer.getGithub()).toEqual("iamironman");
        });
    });
    describe("get role", () => {
        it("should return engineer's role", () => {
            const engineer = new Engineer("Tony Stark", 2, "ironman@avengers.com", "iamironman");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});