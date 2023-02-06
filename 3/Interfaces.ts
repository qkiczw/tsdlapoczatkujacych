interface Person {
    name : string,
    id: number,
    email ?: string
}



const worker01 : Person  = {
    "name" : "Łukasz",
    "id" : 123,
    "email" : "qki@qki.pl"
};

const worker02 : Person  = {
    "name" : "Maciej",
    "id" : 124,
    "email" : "maciej@maciej.pl"
};

const worker03 : Person  = {
    "name" : "Martyna",
    "id" : 122,
};


function sendEmailsToWorkers( people : Person[] ) : Person[] {
 people.filter( person => person.email).forEach(person => console.log(`Sending email to ${person.email}`))
 return people
};
sendEmailsToWorkers([worker01, worker02, worker03]);


// Joinnig interfaces by using | or & (OR or AND)
{
    interface Worker {
        name : string,
        id: number,
        email ?: string
    }

    interface Director {
        name : string,
        id: number,
        email ?: string
        director : boolean,
        companyCar : boolean,
        companyPhone : boolean
    }


    const Milan : Worker = {
    "name" : "Milan",
    "id" : 10,
    "email" : "milan@minal.pl"
    }

    const Łukasz : Worker & Director = {
        "name" : "Łukasz",
        "id" : 1,
        "email" : "qki@qki.pl",
        "director" : true,
        "companyCar" : false,
        "companyPhone" : false
    }

}