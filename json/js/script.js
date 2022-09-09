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

const personJSON = '{"name": "Ola Nordmann", "id": 9, "isAdmin": true}';

const person = JSON.parse(personJSON);

console.log(person);
// Logs:
// {name: 'Ola Nordmann', id: 9, isAdmin: true}







