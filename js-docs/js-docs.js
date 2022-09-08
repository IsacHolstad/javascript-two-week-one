
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
 *@return {string} List of cat names
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



