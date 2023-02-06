"use strict";
const worker01 = {
    "name": "Łukasz",
    "id": 123,
    "email": "qki@qki.pl"
};
const worker02 = {
    "name": "Maciej",
    "id": 124,
    "email": "maciej@maciej.pl"
};
const worker03 = {
    "name": "Martyna",
    "id": 122,
};
function sendEmailsToWorkers(people) {
    people.filter(person => person.email).forEach(person => console.log(`Sending email to ${person.email}`));
    return people;
}
;
sendEmailsToWorkers([worker01, worker02, worker03]);
// Joinnig interfaces by using | or & (OR or AND)
{
    const Milan = {
        "name": "Milan",
        "id": 10,
        "email": "milan@minal.pl"
    };
    const Łukasz = {
        "name": "Łukasz",
        "id": 1,
        "email": "qki@qki.pl",
        "director": true,
        "companyCar": false,
        "companyPhone": false
    };
}
