{
    class Person {
    
    public name : string;
    public age : number;
    private gender : string

    
    constructor(name : string, age : number, gender : string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };

    showInfo = () : string => {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const lukasz = new Person("Lukasz", 41, "straight")

lukasz.age = 50; // It will be changed becasue the property is public and you can use it beyond the class
// lukasz.gender = gay; //It will not be changed because the property is private, it can only be used in the class where it was created.

console.log(lukasz);

}

