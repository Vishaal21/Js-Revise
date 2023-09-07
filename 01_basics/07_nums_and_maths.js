let num1 = 500
// console.log(num1);

let num2 = new Number(500)
// console.log(num2);

// console.log(typeof num1 , typeof num2);    //(number , object)

// console.log(num2);

// console.log(num2.toString().charAt(2));

// console.log(num2.length);

/* toString()

it converts the value or object into a string temporarily for the purpose of displaying or working with it as a string, 
but it doesn't permanently change the original value or object. The original value or object remains unchanged in its original data type.

*/

//eg
let num = 42;
let str = "Hello";
let bool = true;

// console.log(num.toString());   // "42"
// console.log(str.toString());   // "Hello"
// console.log(bool.toString());  // "true"


let number1 = 600.67084738;
console.log(number1.toFixed(1));  //600.7
console.log(number1.toPrecision(5)); //600.67

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));



// *************************Maths***********************



// console.log(Math.abs(-5));
// console.log(Math.LN10);
// console.log(Math.max(3,5,8,-34873));
// console.log(Math.sqrt(8));

// console.log(Math.abs(Math.random()*10+1));

let min = 10
let max = 20

// console.log(Math.floor(Math.random()*(max-min + 1)+ min));
