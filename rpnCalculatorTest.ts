/// <reference path="qunit.d.ts" />

test("Rpn calculator test", function () {
    var calc : RpnCalculator = new RpnCalculator();

    equal(calc.calc(""), "");
   equal(calc.calc("1"), "1");
    equal(calc.calc("22"), "22");
    equal(calc.calc("1 1 +"), "2");
    equal(calc.calc("2 1 -"), "1");
    equal(calc.calc("2 2 *"), "4");
    equal(calc.calc("4 2 /"), "2");
});