"use strict";
{
    class Worker {
        constructor(name, lastName, age) {
            this.showInfo = () => {
                return `Worker info: ${this.name} ${this.lastName}. Age: ${this.age}.`;
            };
            this.name = name;
            this.lastName = lastName;
            this.age = age;
        }
    }
    class Director extends Worker {
        constructor(name, lastName, age, phone) {
            super(name, lastName, age);
            this.phone = phone;
        }
        showDirectorInfo() {
            return `My name is ${this.name} ${this.lastName}. I am ${this.age} , and this is my phone number: ${this.phone} `;
        }
    }
    const mainDirector = new Director('Łukasz', "Sztormowski", 41, 555555555);
    console.log(mainDirector.showInfo());
}
