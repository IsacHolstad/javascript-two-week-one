//console.log("hello");

//Example 1

// destruct from objects

//const { } = objectName;

const person = {
    name: "Isac",
    lastName: "Holstad",
    country: "NOR"
}

//const greeting = `hello i am
// ${person.name}
//${person.lastName}
//i am from ${person.country}`;

//console.log(greeting);

const {name, lastName, country } = person;

const greeting = `Hello i am ${name} ${lastName} and i am from ${country}`;

console.log(greeting);

const teslaCar = {
    carName: "Tesla model 3",
    range: "500km",
    color: "red",
    year: 2022,
}

const {carName, range, color, year} = teslaCar;

const teslaData = `${carName}, the renge of the car is: ${range}`

console.log(teslaData);

//
const user = {
    firstName: "Isac",
    country: "Norway",
    age: "20",
    email: "isac@gmail.com",
    job: "developer",
}



function  greetUsers({firstName, country, age, job }) {

    console.log(`hello ${firstName}, from ${country} you are welcome, i see you are ${age} years old, and a pro ${job} ` );
}



greetUsers(user);

// destructing in arrays




