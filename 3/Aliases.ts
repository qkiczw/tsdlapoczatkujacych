{ // lexical scope 
    type basicTypes = number | string | boolean;


    type myOwnTypes = number | string | object;
    const address : myOwnTypes = { city: "Sopot", street: "Grunwaldzka", streetNum: 12}
    console.log(address)

    const testVar : basicTypes = "TestVAR"

    const returnBasicType =( type : basicTypes) : void => console.log(type);  

    returnBasicType('Poszlo!');


    type rightNumbers = 1|2|3
    const fromOneToThree : rightNumbers = 3
    console.log(fromOneToThree);

}