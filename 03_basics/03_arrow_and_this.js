const obj = {
    name : "vishal",
    age : 23,
    work : function(){
        console.log(`${this.name} is the best`);   //this will take the the value of current context in which it is present
        console.log(this);
    }
}

// obj.work();
// obj.name = "sam"
// obj.work();

//this in node environment is empty object while in browser is window object.
// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);   //undefined (this dosent work inside the function)

// }

//arrow function

let chai = () =>{
    let username = "vishal"
    // console.log(this.username);   //undefined
    // console.log(username);
}

// chai();

// let ans = (num1,num2) => {
//     return num1 + num2 
// }

//in curly braces {} i have to type return but during in ()no need to write retun keyword.

let ans = (num1,num2) => (num1 + num2)

// console.log(ans(7,9));

let objj = () => ({name : "vishal"})

// console.log(objj());    //{ name: 'vishal' }
