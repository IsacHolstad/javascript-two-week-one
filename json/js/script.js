//How it works
// JSON is actually a very simple process and only contains two main aspects to it.
//
// We convert our JavaScript data to JSON using JSON.stringify(). Then when we get JSON, we convert it to JavaScript data by using JSON.parse().
const person = {
    name: 'Ola Nordmann',
    id: 9,
    isAdmin: true
};
console.log(person.id);

const personJSON = JSON.stringify(person);

console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}