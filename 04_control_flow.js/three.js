//for in loop

let obj = {
    name: "vishla",
    age : 23,
    city : "lucknow"
}

for(const i in obj){
    // console.log(i);  //will print keys
}

for (key in obj){
    // console.log("the value for" + key + "is" + obj[key]);   // The keys are treated as strings: "name", "age", "city"
}

//map

let arr = [2,6,8,9]

for(const i in arr){
    console.log(arr[i]);
}