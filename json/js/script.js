//How it works
// JSON is actually a very simple process and only contains two main aspects to it.
//
// We convert our JavaScript data to JSON using JSON.stringify(). Then when we get JSON, we convert it to JavaScript data by using JSON.parse().
///**
//
//* @type {{name: string, id: number, isAdmin: boolean}}
//* Answer in console will be: a string of objects
//*/
//const person = {
//    name: 'Ola Nordmann',
//    id: 9,
//    isAdmin: true
//};
//console.log(person.id);

//const personJSON = JSON.stringify(person);

//console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}

///**
 //* @type {{code: number, name: string, id: number, areAdmin: boolean}}
// * Return in console will be: a string of 4 objects;
// */

//const userId = {
//    name: 'isac',
//    code: 2345,
//    id: 329,
//    areAdmin: true,

//}
//console.log(userId.code);
//const personAdminJSON = JSON.stringify(userId);
//console.log(personAdminJSON);

//
// 1. How t convert javascript to JSON
//JSON.stringify();

const userDetails = {
    name: "isac",
    id: 593,
    isStudent: true,
    section: "learning front-end"
}
console.log("js format: ", userDetails);

const userDataJSON = JSON.stringify(userDetails);

console.log("User details in JSON format: ", userDataJSON);

//json parse used to convert jason data to js data
const userDataBackToJS = JSON.parse(userDataJSON);
console.log("Json data converted back to JS: ", userDataBackToJS);

const dogData = '{"name": "albert", "age": 4, "owner": "isac", "id": 501}';

console.log(dogData);

const dogDataToJson = JSON.parse(dogData);
console.log(dogDataToJson);


// Own example

const teslaData = {
    id: 53020,
    color: "red",
    wheelDrive: "awd",
    interiorColor: "white",
    owner: "isac",
    hp: 401,
    seats: 5,
    damage: 0,
    salvagedTitle: 0,
    previouseOwners: 2,
    year: 2019
}
console.log(teslaData);

const teslaDataToJson = JSON.stringify(teslaData);
console.log(teslaDataToJson);

const teslaDataBackToJs = JSON.parse(teslaDataToJson);
console.log(teslaDataBackToJs);

//









