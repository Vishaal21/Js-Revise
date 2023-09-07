//Array

let arr = ["vishal", 28, true, { name: "vishal" }];
// console.log(arr);

console.log(arr[3]);

arr.push(5);
arr.push(8);
arr.pop();

// console.log(arr);

arr.unshift(9);
arr.unshift(90);
arr.shift();

let arr2 = arr.join();
// console.log(arr2);
// console.log(typeof arr2);  //string

//slice vs splice  (Interview Question)
let arr3 = [2, 3, 5, 7, 8, 9];

// console.log("A", arr3);

let narr3 = arr3.slice(1, 4);

// console.log("B", narr3);
// console.log("A", arr3);

let narr4 = arr3.splice(0, 3); //changes the contents of an array by removing or
//  replacing existing elements and/or adding new elements

// console.log("C", narr4);
// console.log("A", arr3);


// Adding elements through splice in array

// console.log(arr);

arr.splice(0,3,10,20,30); //  (start idx, end idx , items to be added )

// console.log(arr);


// 