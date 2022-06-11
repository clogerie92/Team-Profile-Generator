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
    describe("get id", () => {
        it("should return the employees id", () => {
            const employee = new Employee ("Natasha Romanoff", 3, "blackwidow@avengers.com");
            expect(employee.getId()).toEqual(3);
        });
    });
    describe("get email", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("Bruce Banner", 4, "hulk@avengers.com");
            expect(employee.getEmail()).toEqual("hulk@avengers.com");
        });
    });
    describe("get role", () => {
        it("should return the employee's role", () => {
            const employee = new Employee("Thor", 5, "thor@avengers.com");
        expect(employee.getRole()).toEqual("Employee");
        });
    });
});