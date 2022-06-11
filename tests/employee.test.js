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
});