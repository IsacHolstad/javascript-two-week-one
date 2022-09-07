//examples of console usage
//console.log();
//console.clear();
//console.warn();
//console.error();
//console.table();

//.1

console.log("hello message");

const name = "isac";

console.log(name);

const responsOne = [
    {
        name: "isac",
        age: 20
    },
    {
        name: "william",
        age: 21
    }
];

const responsTwo = [
    {
        name: "holstad",
        age: 20
    },
    {
        name: "william",
        age: 21
    }
];

console.log("respone one:", responsOne);
console.log("respone two:", responsTwo);


const sum = 1+2;

console.log("my " + "name " + "is " + "isac ");
console.log(`my name is isac ${sum}`);

//2.

//console.clear();

//3.

console.table(responsTwo);


//4.

console.time(); //this start the timer
console.timeEnd(); //this ends the timer

function counter() {
    for(let i = 0; i <= 1; i++){
        console.log(i)

    }
};
console.time("mytimer");
counter();
console.timeEnd("mytimer");

//getting the avergae
let averageOnes = (3 + 5 + 2) /3;
console.log(averageOnes);


//extra


//function getAverage(num1, num2, num3) {
    //return (num1 + num2 + num3) / 3;


//}
//getAverage();

//let myAverage = getAverage(2, 5, 4);
//console.log("my average", myAverage);


const myArray = [1, 2, 3, 4, 5];

function getArrAverage(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];

    }
    console.log("total", total);
    const numberOfItemInArr = arr.length;
    console.log(numberOfItemInArr);
    //slet average = total / numberOfItemInArr;
    return total / numberOfItemInArr;

}
const resultAverage = getArrAverage(myArray);
console.log(resultAverage);




//async function getCatyFacts() {
  //  const response = await fetch("https://catfacts.ninja/facts");
   // console.log(response)
  //  const catFacts = await response.json();

//};

//getCatyFacts();

//error happening because async await isnt done



