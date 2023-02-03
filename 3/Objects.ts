{
    const userOne : {id: number, name : string, male : boolean, company ?: string} = {
        "id" : 1234,
        "name" : "Łukasz",
        "male" : true
    };

    console.log(userOne);

    const userTwo : {id : number, name : string, male : boolean, company ?: string} = {
        "id" : 456,
        "name" : "Maciej",
        "male" : true,
        "company" : "Shitty Soft" 

    }

    console.log(userTwo);
    

    const carObj : {company : string, model : string, year : number, diesel ?: boolean } = {
        "company" : "Ford",
        "model" : "Focus",
        "year" : 2004,
        "diesel" : true
    }
    console.log(carObj);
    
}