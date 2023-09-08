//singleton
//Object.create

const obj = {
    name: "vishal",
    age : 67,
    salary: "too much",
    "city": "lucknow" 
}

// console.log(obj["city"]);
// console.log(obj["name"]);

//Interview Question
//Using symbol as a key in object

let mySym = Symbol("key1")

const myObj = {
    name: "hitesh",
    age: 20,
    [mySym]:"key2",   //way of using symbol as a key
    mySym : "not the actual symbol",
    city: "lucknow",
    greeting2 : `This is the one and only ${this.age}`, //value of age will not be shown here
    greeting3 : function(){                             //value of age will be shown here
        return `This is the one and only ${this.age}` 
    }
}


// console.log(myObj[mySym]);        //calling symbol
// console.log(myObj["name"]);       //calling other normal keys


console.log(myObj.greeting3());
// console.log(myObj);


/*reason
With Function
When you call this method, like myObj.greeting3(), the this keyword inside the method refers to the object (myObj) itself. This is because methods in JavaScript automatically bind this to the object they belong to. So, this.age correctly accesses the age property of myObj.

Without a Function:
In this case, this inside the object literal does not refer to the object itself but rather to the surrounding context, which is often undefined or refers to some other scope. It doesn't automatically point to the object being created.

*/