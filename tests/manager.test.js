const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("object", () => {
        it("should create a manager object", () => {
            const manager = new Manager("Nick Fury", 4, "fury@avengers.com", 123);
            expect(manager.officeNumber).toEqual(123);
        });
    });
    describe("get role", () => {
        it("should return the manager's role", () => {
            const manager = new Manager("Nick Fury", 4, "fury@avengers.com", 123);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});