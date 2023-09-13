//for in loop

let obj = {
    name: "vishla",
    age : 23,
    city : "lucknow"
}

// for(const i in obj){
//     console.log(i);  //will print keys
// }

// for (key in obj){
//     console.log("the value for" + key + "is " + obj[key]);   // The keys are treated as strings: "name", "age", "city"
// }

//array
let arr = [2,6,8,9]

for(const i in arr){  //i will be the indices of the array
    // console.log(arr[i]);
}

//map
let map = new Map()
map.set(1,"vishal")
map.set(2,"khushi")
map.set(3,"saurabh")


for(let key in map){
    // console.log(key); // will not print anything
}