const balance = 100;
// console.log(balance), console.log(balance+6); //dont do this way

switch (balance) {
    case 121:   //we can use any data type after case
        console.log("its 121");
        break;
    case 100:
        console.log("its 110");
        // break;
    case 1001:
        console.log("its 100");
        // break;
    default:
        console.log("i am the best");
        // break;
}

//if any case is matched than its code will be executed and we will come out of program due to the encounter of break keyword.
//but if we comment break keyword than all the code from the matching case will be executed including the default case.

//falsy values

// false,0,-0, BigInt 0n, "" , null , undefined , NaN

//truthy values
//"0" , "false" , " " , [] , {} , function fn(){}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0)console.log("empty object");
// else console.log("non empty onject");

//interview
// console.log(false== 0);  //true
// console.log(false == ''); //true
// console.log(0 ==''); //true

//nullish coalsecing operator (??): null undefined

let val1;
val1 = 5 ?? undefined    //5
val1 = null ?? 7 ?? 8 ?? 90 //7
val1 = null ?? undefined  //undefined
// console.log(val1);

//terniary operator

// condintion ? if true than this : if not true than this 

let num = 100

console.log(num >=80 ? "greater than 80" : "less than 80");