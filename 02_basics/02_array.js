let arr1 = [2,3,4,5]
let arr2 = [8,9,10]
arr1.push(arr2)        //changes the original array
// console.log(arr1);  // [ 2, 3, 4, 5, [ 8, 9, 10 ] ]
arr3 = arr1.concat(arr2)  //concat and return new array does not change the original array
console.log(arr3);   //[ 2, 3, 4, 5, [ 8, 9, 10 ], 8, 9, 10 ]
// console.log(arr1);

//spread operator
arr4 = [...arr1,...arr2]
// console.log(arr4);

//
const anotherArray = [1,2,3 , [2,4,5, [8,9,0],6],7];
const realArray = anotherArray.flat(Infinity)
// console.log(realArray);

//
// console.log(Array.isArray(arr4));
// console.log(Array.from("vishal"));  //convert the argument in array [ 'v', 'i', 's', 'h', 'a', 'l' ]

// console.log(Array.of("vishal",1,true,78)); //convert the given arguments in the arrays ['vishal', 1, true, 78 ]
