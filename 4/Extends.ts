{
    class Worker {

        public name : string;
        public lastName : string;
        public age : number;
       

        constructor(name : string, lastName : string, age : number) {
            this.name = name;
            this.lastName = lastName
            this.age = age
        }
        public showInfo = () : string => {
            return `Worker info: ${this.name} ${this.lastName}. Age: ${this.age}.`
        }
    }

    class Director extends Worker {

        phone : number

        constructor(name : string , lastName : string, age: number,  phone : number ) {
            super( name, lastName , age)
            this.phone = phone;
        }
        showDirectorInfo() {
            return `My name is ${ this.name} ${this.lastName}. I am ${this.age} , and this is my phone number: ${this.phone} `
        }

    }

    const mainDirector = new Director('Łukasz', "Sztormowski", 41, 555555555);

    console.log(mainDirector.showInfo())

}