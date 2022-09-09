// How to set a local storage variable

localStorage.setItem("name","isac");

// How to get local storage data

//getting data

//getItem();

const firstName = localStorage.getItem('name');

console.log(firstName);

// Remove local storage item // removeItem();

localStorage.removeItem('name');


// clear whole local storage // clear();

localStorage.setItem("name","isac");
localStorage.setItem("age","20");
localStorage.setItem("city","oslo");

//localStorage.clear();


// data array

const dataArray = '[{"name": "isac", "height": "188cm"}]'

localStorage.setItem(dataArray);

let dataArrayNew = localStorage.getItem("users");

console.log(dataArrayNew);
console.log(JSON.parse(dataArrayNew));


//HOMEWORK
// add tailwindCSS
// create a btn toggle between light and dark theme
//if you click the btn it will change bg color
//the bg color will be stored in local storage




