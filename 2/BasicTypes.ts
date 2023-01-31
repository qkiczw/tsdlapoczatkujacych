let userName : string = "Łukasz";
let userAge : number = 40;
let male : boolean = true

const displayGreetings = ( name : string, age : number ) => {
    console.log('\x1b[33m%s\x1b[0m', `Hi! My name is ${userName}. I am ${userAge} years old`)
}

displayGreetings(userName, userAge);