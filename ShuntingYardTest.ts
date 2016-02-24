/// <reference path="qunit.d.ts" />

test("Shunting yard test", function () {
    var shuntingYard = new ShuntingYard();
    equal(shuntingYard.transform("1"), "1");
    equal(shuntingYard.transform("1 + 2"), "1 2 +");
    equal(shuntingYard.transform("1 + 2 * 3"), "1 2 3 * +");
    equal(shuntingYard.transform("1 * 2 + 3"), "1 2 * 3 +");
    equal(shuntingYard.transform("1 * 2 * 3 + 4"), "1 2 3 * * 4 +");

});
