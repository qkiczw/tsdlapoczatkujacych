"use strict";
let numA = 4;
let numB = 5;
function sumTwoNumbers(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return "Arguments are not numbers";
    }
}
console.log(`First Case => `, sumTwoNumbers(numA, numB));
console.log(`Second Case => `, sumTwoNumbers("a", "v"));
