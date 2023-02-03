##Usefull commands
- npx tsc - compile all ts files in the directory
- npx tsc --watch - this command runs a watch option and automatically compile all changes made in ts files 
- npx nodemon ./file.ts - it starts a file automatically after a compilation (first install nodemon via npm)

## TYPES
### Basic Types:
- variable : string - declare only a text in "",'' and ``(ES6 string templates)
- variable : number - declare only a numbers
- variable : boolean - declare only a true or false statement
- variable : any - declare everything (strings, numbers, objects, arrays, functions)()

## Arrays Types:
- variable : number[] = [] - declare only an array with numbers
- variable : string[] = [] - declare only an array with strings

## Functions:
In functions you must declare types of parameters, and after brackets you have to declare what type of data the functions returns.

**An example:**
(it also works with ES6 arrow functions)
```
function testFn(numA : number, numB : number) : number {
    return numA + numB
}
```
In function that returns nothing (e.g print something in the browser console) you should use "void" type.
```
function printSomething(str : string) : void {
    console.log("something");
}
```

## Union Types
You can use couple different types of types declare in one variable (It is better than the any type)
**An example:**
(You must use the OR operator known from if statements in JavaScript)
```
let userAge : number | string;
```

## How to Check basic types
You can use "typeof" and check is variable is "string", "number", "boolean" or "any".
**An example**
```
const userID = 1234

if(typeof userID === "number") {
    console.log('userID is a number')
}

```

## Aliases
You can create your own types.
**An example**
```
type addressTypes = number | string;
const address : addressTypes = "Sopot, Grunwaldzka 12"

or

type rightNumbers = 1|2|3
const fromOneToThree : rightNumbers = 3 // its only allow numbers from 1 to 3 

```

## Typing Objects
You can properly type an object by declare all needed types in brackets {}. Object also can have an optional type "?:" which allows to declare an object with or without the optional type.
**An example**
```
const carObj : {company : string, model : string, year : number, diesel ?: boolean } = {
 "company" : "Ford",
 "model" : "Focus",
 "year" : 2004,
 "diesel" : true // an optional type
}
```