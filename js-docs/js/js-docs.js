//1.

/**
 *Add two numbers together

 * */

function addNumbers(a, b) {
    return a + b;

}
addNumbers();

//2.

/**
 *Says hello to user
 * */

function helloToApp() {
    return `<h1>hello user</h1>`;
}

helloToApp();

//3. @param

/**
 *Adds three numbers together
 * @param{number} a First Value
 * @param{number} b Second Value
 * @param{number} c Third Value

 **/

function addThreeNumbers(a, b, c){
    return a + b + c;
}

addThreeNumbers(10, 90, 20);

//4. using @return

///**
 //*@Return {datatype} returnDescription
 //**/

/**
 * Display cats names
 * @param {string} cat1 First Value
 * @param {string} cat2 Second Value
 * @param {string} cat3 Third Value
 * @param {string} cat4 Fourth Value
 * @return {string} List of cat names
 */


function addFourCats(cat1, cat2, cat3, cat4){
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`;
}
addFourCats("George", "Isac", "Shaun", "Ice");

// 5. @example below

/**
 *Adds Four numbers together
 * @param{number} a First Value
 * @param{number} b Second Value
 * @param{number} c Third Value
 * @param{number} d Fourth value
 * @return{number} Sum of numbers
 * ```JS
 * @example
 * const a = 10;
 * const b = 100;
 * const c = 10;
 * const d = 5;
 * const sum = addFourNumbers(a, b, c, d);
 * ```
 *
 **/

function addFourNumbers(a, b, c, d){
    return a + b + c + d;
}
addFourNumbers(10, 100, 10, 5);

//6. optional parameters

///**
 //* @param {datatype} [optionalParamName] optionalParametersDescription
 //*/

/**
 *Mulitply two numbers together
 *@param {number} a First Number
 *@param {number} [b] Second Number
 *@return {number} Multiplication of numbers
 * */

function multiplyNumbers (a,b = 10) {
    return a * b;

}
multiplyNumbers(1);


//7. @typeof example

/**
 * Adds two numbers
 * @typeof {(numbers)} NumberLike

 */

function addTwoDigits(a,b) {
    return a + b;
}

addTwoDigits();


//8. complex objects

/**
 * @param {Object} userObject blablabla
 * @param {string} userObject.name isac
 * @param {string} userObject.role blablabla
 */

function handelUserLogin({name, role}) {
    loginUserWithToken();

}

function loginUserWithToken(){

}

handelUserLogin({
    name: "isac",
    role: "dev"
});

const userLoginData = {
    name: "isac",
    role: "dev"
}

console.log(userLoginData);
console.log(userLoginData.name);






































