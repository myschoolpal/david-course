/*let x = 10;
let y;
let z = 20;
console.log(z)

let userID = null;
console.log(userID === undefined);//false
console.log(userID === null);//true

let passWord;
console.log(passWord === undefined);//true
console.log(passWord === null);//false

console.log(2 === 2.000000); //true
console.log(2 === 2.0000001); //false

let x = 7;
console.log(x + true); //true
*/

let isDoorOpen = true;

if (isDoorOpen) {
    console.log('Door is open');
}

let mystr = "";

let mya = "a";
let myb = 'b';

console.log(typeof mya);
console.log(typeof myb);

let mystr1 = "sandcastle";
let cost = 20;
let howMany = 5;

console.log("I like to build a " + mystr1 + ".");
console.log(`I like to build a ${mystr1}.`);
console.log(`Revenue is ${cost * howMany}.`);
console.log("One\nTwo\nThree\nFour");
console.log("Eight\\nine");

/*let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
while (arr1.length > 0) {
    arr2.push(arr1.pop());
}
console.log(arr2);
console.log(arr2.sort());*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
while (arr1.length > 0) {
    arr2.push(arr1.shift());
}
console.log(arr2);