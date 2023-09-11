//iife --> immediately invoked function expression)
//Reasons of iife ->
/*
1)It encapsulates my inside code from the otside pollution of global scope.
as variables inside iife have their own private scope within iife and cannot be acessed outside of iife.

2)If i want to execute my function as soon as it is declared.
*/

(function chai(){
    console.log("vishal is great");
})();


(function aurcode(){
    console.log("hitesh is great");
})()
//By adding the extra parentheses around the function declaration (function chai() {...}), you are telling JavaScript to immediately invoke (run) the function after defining it. 

let val1 = 10;
let val2 = 9;
function addNum(num1 , num2){
    let result = num1 + num2
    return result
}
let result1 = addNum(val1 , val2);
let result2 = addNum(8,9)