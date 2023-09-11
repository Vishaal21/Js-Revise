//function definition = function name + its parameters + function body(inside curly braces)
function fn() {
  // console.log("i am vishl");
}

// console.log(fn());   //undefined

//*******************different ways of defining functions****************************
//1) function declarations***********

function add(a, b) {
  return a + b;
}
// console.log(add(9,7));

//2) function expressions       //16

const value = function (num1, num2) {
  return num1 + num2;
}

// console.log(value(6,9));   //15

// 3) named function expressions
//In JavaScript, when you define a function expression and assign it to a variable, you can call the function using the variable name, not the name you provide within the function expression.
let fvalue = function flvalue(num1,num2){
    return num1 + num2
}
// console.log(flvalue(2,5)); //error


function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNumbers(8,9));

//undefined is trated as false in js
function loginUserName(user) {
  if (!user) {
    console.log("please enter a use name");
    return;
  } else {
    return `${user} just logged in`;
  }
}

// console.log(loginUserName(""));

//rest operator

function calculateValue(...num) {
  return num;
}

// console.log(calculateValue(2,4,5,7));  //[ 2, 4, 5, 7 ]

function calculateValues(num1, num2, ...number) {
  return number;
}

// console.log(calculateValues(2,4,5,7));  //[ 5, 7 ]

//passing object into function

const obj = {
  name: "vishal",
  age: 23,
};

function person(lobj) {
  return `Name of person is ${lobj.name}`;
}

// console.log(person(obj));

//passing array into function

let arr = [8, 7, 5, 99];

function person2(larr) {
  //i can pass anything to function
  return ` first element of array is ${larr[1]}`;
}

// console.log(person2(arr));
