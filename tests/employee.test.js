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
            const employee = new Employee("Steve Rogers", 1, "captainamerica@avengers.com");
            expect(employee.getName()).toEqual("Steve Rogers");
        });
    });
    describe("get id", () => {
        it("should return the employees id", () => {
            const employee = new Employee("Steve Rogers", 1, "captainamerica@avengers.com");
            expect(employee.getId()).toEqual(1);
        });
    });
    describe("get email", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("Steve Rogers", 1, "captainamerica@avengers.com");
            expect(employee.getEmail()).toEqual("captainamerica@avengers.com");
        });
    });
    describe("get role", () => {
        it("should return the employee's role", () => {
            const employee = new Employee("Steve Rogers", 1, "captainamerica@avengers.com");
        expect(employee.getRole()).toEqual("Employee");
        });
    });
});