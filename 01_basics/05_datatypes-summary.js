/*
    Primitive

    7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

    Return Types of these primitive data types

       Number => number
       String  => string
       Boolean  => boolean
       null  => object  (important)
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
*/

const name = "vishal";

const score = 100;
const nextScore = 100.3;

const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id == anotherId);

const bigNumber = 4763873465896549n;

// console.table([typeof name, typeof score , typeof nextScore, typeof isLoggedIn, typeof temp, typeof userEmail, typeof id, typeof bigNumber]);

/*
    Reference (Non Primitive)

    Array, Objects, Function

    Return type of Non Primitive Data types

       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

const heroes = ["ironman", "thor", "loki"]

const obj = {
    name : "vishal",
    age : 22,
    placed : false
}

const fn = function fn(){
    console.log("vishal");
}

console.table([typeof heroes, typeof obj, typeof fn])