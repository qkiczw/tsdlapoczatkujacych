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


    class Car {
        
        protected mark : string;
        protected model : string;

        constructor( mark : string, model : string) {
            this.mark = mark;
            this.model = model;
        }

        public showCarInfo = () : string => {
            return `Car info: ${this.mark} ${this.model}`
        }
    
    }
    const ford = new Car('Ford', 'Focus');
    console.log(ford.showCarInfo());

    class Truck extends Car {

        private trailer : boolean

        constructor( mark: string, model: string, trailer : boolean) {
            super( mark, model)

            this.trailer = trailer;

        }
        public showTruckInfo = () => {
            return `Truck info: ${this.mark}, ${this.model}, trailer: ${this.trailer ? "Yes" : "No"}`
        }
    }
   const scania = new Truck('scania', 'costam', true);
   console.log(scania.showTruckInfo())
    
    
}