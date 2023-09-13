//for each loop

/*
array.forEach(function(currentValue, index, array) {
  code to execute on each element
});

currentValue: This parameter represents the current element being processed in the array.
index (optional): It represents the index of the current element.
array (optional): The array that forEach() is being applied to.

you provide a callback function as an argument to forEach(). This function is executed once for each element in the array. Inside the callback function, you can perform any operations you want on the current element.

The forEach() method automatically iterates through each element in the array, starting from the first element and moving to the last one.

ou don't need to manually manage indices or track the length of the array. The forEach() loop handles all of that for you.

*/

const coding = ["vishal" , 1 , "coaching" , true]

// coding.forEach(function (value){
//     // console.log(value);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function fn(item){
//     console.log(item);
// }

// coding.forEach(fn)

// coding.forEach((item,index,array) => {
//     console.log(item , index , array);
// })

const myCoding = [
    {
        name : "vishal",
        age : 23
    },
    {
        name : "karan",
        age : 29
    },
    {
        name : "ropa",
        age : 26
    }
]

myCoding.forEach((item , index) => {
    console.log(item.name , index);
})