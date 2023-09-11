// {} -> scope

//let
let a = 10;
{
    let a = 100;
    // console.log(`inner : ${a}`);  //--> local scope
    //value of "a" in local scope is 100 and global scope is 10 thats why let is block scope
    //if variable a is not present inside local scope than vale of "a" from global scope will be printed.
    //But if "a" is not present in global scope than value from local scope is not acessible in global scope.
}

// console.log(`outer : ${a}`); //--> Global scope

//const
const b = 20
{
    const b = 200;
    // console.log(b);
    //same points as "let"
}
// console.log(b);

//var

var c = 30;
{
    var c = 300;
    //now value of "c" in local and global scope will be 300
}

// console.log(c);


function one(){
    const username = "vishal"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}
one()


//
if(true){
   let username = "vishal"
    if(username === "vishal"){
       let website = "youtube"
        // console.log(username +" " + website);
    }
    // console.log(website);  //could not acess
}

// console.log(username);   //could not acess


// *****************Intresting case**********************

f1()     //this is running fine
function f1(){
    // console.log(`vishal is the best`);
}


// value()    //ReferenceError: Cannot access 'value' before initialization
const value = function(){
    // console.log(`karan is best`);
}