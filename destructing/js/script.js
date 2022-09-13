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

const people = [
    {
        name: "isac",
        age: "20",
        score: 10
    },
    {
        name: "morten",
        age: "40",
        score: 9
    },
    {
        name: "rolf",
        age: "20",
        score: 6
    },
    {
        name: "maya",
        age: "20",
        score: 1
    },
];

// rule condition score  >= 5
// filtering the winners (people with score over 5) from losers witch have under 5 in score

const winners = people.filter((currentItem) =>{
    if(currentItem.score >= 5){
        return true;
    }
});

console.log("None destructed way", winners);

// This is the destructed way that looks cleaner and shorted code

const secondWinners = people.filter(({score}) =>{
    if(score >= 9){
        return true;
    }
});

console.log("Destructed way", secondWinners);

// Destruct from array

//const [
    //values
//] = arrayName;

//const [value1, value2]= arrayName;
//                     0   1   2   3   4   5  indexes
const streetNumbers = [12, 34, 55, 65, 76, 82];

// 'x' will be the index of 0
// 'y' will be the index of 1

const [x, y] = streetNumbers;

console.log(x, y);
// Logs:
// 12 34

//create a string array of names witch contains 4 names
// and then destruct the first 3 name

const names = ["Hesh", "Linda", "Alex", "Fariad", "Isac", "Annabell", "Morty", "Mark", "Ronaldo", "Messi"];

//log :
//Hesh linda alex

const [a, b, c, d, ...others] = names;
// "...others" will get you the rest of the array
console.log(a, b, c,);
console.log(others);
//logs:
// Hesh Linda Alex





