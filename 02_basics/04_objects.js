// const user = new Object(); //singleton object
// console.log(user);  

let obj = {
    name: "vishal", age : 23 , married : false
}

// console.log(obj);

let nobj = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            asliname : "vishal",
            srname : "singh"
        }
    }
}

// console.log(nobj.fullname.userfullname.asliname);

//merging differnt objects

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = {5 : "e" , 6 : "f"}

const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

const obj5 = Object.assign(obj1 , obj2 , obj3) 
//merging obj2,obj3 into the obj1.

// console.log(obj5 === obj1); //true

// or
const obj6 = Object.assign({} , obj1 , obj2 , obj3)

//but 90% time we will use spread operator while merging different objects

const obj7 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj7);

//mostly database will return values in the following form

const users = [
    {
        id : 1,
        email : "1@gmail.com"
    },
    {
        id : 2,
        email : "2@gmail.com"
    },
    {
        id : 3,
        email : "3@gmail.com"
    }
]

// console.log(users);

// console.log(Object.keys(obj));   //will give array of keys
// console.log(Object.values(obj));  //will give array of values

// console.log(obj.hasOwnProperty('isLoggedIn'));

//Object Destructuring

// const oobj = {1 : "a" , 5 : "b" , 6 : "c"}

const oobj = {a : "1" , b : "2" , c : "3"}

const {c: koibhinaam} = oobj;
console.log(koibhinaam);
console.log(c);  //now i cannot use this