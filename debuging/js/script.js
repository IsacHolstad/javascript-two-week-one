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
    for(let i = 0; i <= 100; i++){
        console.log(i)

    }
};
console.time("mytimer");
counter();
console.timeEnd("mytimer");