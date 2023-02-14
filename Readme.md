## Usefull commands
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

## Interfaces
An interface is like a blueprint for an object. Rather than declare every time the same type of an object you can create one interface and declare it to the objects with the same structure. You can also declare a couple intrefaces to one object using OR or AND. 
**An example**
```
interface Car {
    "mark" : string,
    "model" : string,
    "year" : number,
    "diesel" ?: boolean
}

const FordFocus : Car = {
    "mark" : "Ford",
    "model" : "Focus",
    "year" : 2004,
    "diesel" : true
}


```

## Composition of types
You can compose a interface with other interfaces inside the main one.
**An example**
```
interface Address {
    city : string,
    street : string,
    postCode: number

}

interface GeoData {
    adress: Address,
    longitude : number,
    latitude : number,
}

const myAdress = {
    "adress" : {
        "city" : "Black Water City",
        "street" : "Main street",
        "postCode" : 22
    },
    "longitude" : 33,
    "latitude" : 45,
}

```

## Extending interfaces
You can create a new interface extending another one using word "extends"
**An Example**
``
interface Worker {
    "name" : string,
    "age" : number,
    "id" : number,
    "email" ?: string
}

interface TeamManager extends Worker {
    "companyPhone" : number,
    "companyCar" : Boolean
}

const andyTheManager : TeamManager = {
    "name" : "Andy Tarkowsky",
    "age" : 35,
    "id" : 1234,
    "email" : "andy@worker.co",
    "companyPhone" : 55555333,
    "companyCar" : true
}

``

## Class declaratrion
**An example**
``

class WorkStation {

    cpuManufacture : string;
    cpuModel : string;
    ram : number;
    ssd : boolean
    os: string

    constructor(cpuManufacture : string, cpuModel : string, ram : number, ssd : boolean, os : string) {
        this.cpuManufacture = cpuManufacture;
        this.cpuModel = cpuModel;
        this.ram = ram;
        this.ssd = ssd;
        this.os = os;
    }

    showSpecification = () : string => {
        return `
        ###########SPECIFICATION############
        CPU - ${this.cpuManufacture}, ${this.cpuModel}
        RAM - ${this.ram}
        SSD - ${true ? "Yes" : "No"} 
        OS - ${this.os}
        ####################################
        `
    }

};

const developer =  new WorkStation("AMD", "RYZEN 5", 16, true, "Windows 10");

``