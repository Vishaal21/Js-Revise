//for of loop

// let arr = [8,9,5,7,9]
// for(i of arr){
//     console.log(`the value is ${i}`);
// }

// let name = "vishal singh"
// for (i of name){
//     console.log(`the character is ${i}`);
// }

//maps
//holds unique values
const map = new Map()
map.set(1,80)
map.set(4,80)
map.set(5,80)
map.set(8,80)

// console.log(map);

for(key of map){
    // console.log(key);  //here i will get array of key and value for each entry, so we will destructure the array
}

for(let [key,value] of map){
    console.log(`key is ${key} and value is ${value}`); 
}

//for of on objects

const obj = {
    name : "vishal",
    age : 23
}

// for(key of obj){
//     // console.log(key);   //for of do not work on object
// }

