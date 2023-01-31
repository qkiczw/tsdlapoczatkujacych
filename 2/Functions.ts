function testFn(numA : number, numB : number) : number {
    return numA + numB
}

console.log(testFn(5, 10))

const showUserAge = (userName : string , userAge : number) : string => {
    return `The ${userName} age is ${userAge}`
}

console.log(showUserAge('Maciej', 38));