"use strict";
{ // lexical scope 
    const address = { city: "Sopot", street: "Grunwaldzka", streetNum: 12 };
    console.log(address);
    const testVar = "TestVAR";
    const returnBasicType = (type) => console.log(type);
    returnBasicType('Poszlo!');
    const fromOneToThree = 3;
    console.log(fromOneToThree);
}
