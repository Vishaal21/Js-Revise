// let score = false

// console.log(typeof score)
// console.log(typeof (score))


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*
conversion results from anything to Number
"33" => 33
"33abc" => NaN
"vishal" => NaN
true=> 1; false=>0
*/

let value = "";

let booleanValue = Boolean(value)

// console.log(booleanValue);

/* 
conversion results from anything to boolean
"" => false
"abc" => true
0 => false
1 => true
*/

let someNumber = 67
let stringSomeNumber = Boolean(someNumber)

console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);  //true


// Operations

let str1 = "vishal"
let str2 = " singh"

// console.log("1" + 2 + 3)
// console.log(1+ 3 + "2")

// console.log(+true)
// console.log(+"")

let a = 100;

b = a++;
c= ++a;

console.log(b + " " + c);

