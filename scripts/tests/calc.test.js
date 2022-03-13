const addition = require("../calc");

describe ("Calculator", () => {
    describe ("Addition function", ()=> {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 21 for 10 + 11", () => {
            expect(addition(10, 11)).toBe(21);
        })
    });
    describe ("Subtraction function", ()=> {
        // test("should return 2 for 22 - 20", () => {
        //     expect(subtraction(22, 20)).toBe(2);
        // });
    });
    describe ("Multiply function", ()=> {

    });
    describe ("Division function", ()=> {

    });
})