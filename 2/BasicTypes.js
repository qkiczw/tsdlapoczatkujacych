"use strict";
let userName = "Łukasz";
let userAge = 40;
let male = true;
const displayGreetings = (name, age) => {
    console.log('\x1b[33m%s\x1b[0m', `Hi! My name is ${userName}. I am ${userAge} years old`);
};
displayGreetings(userName, userAge);
