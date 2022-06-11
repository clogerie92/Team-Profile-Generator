const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("object", () => {
        it("should create employee object", () => {
            const employee = new Employee("Steve Rogers", 1, "captainamerica@avengers.com");

            expect(employee.name).toEqual("Steve Rogers");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("captainamerica@avengers.com");
        });
    });

    describe("get name", () => {
        it("should return the employee's name", () => {
            const employee = new Employee ("Tony Stark", 2, "ironman@avengers.com");

            expect(employee.getName()).toEqual("Tony Stark");
        });
    });
});