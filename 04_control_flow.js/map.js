//***************Map********************

const arr = [1,2,3,4,5,6,7,8,9,10]

// let ans = arr.map((num) => num*10)

// console.log(ans);

// ans = arr.map((num) => num*10).
// filter((num) => num>21)

// console.log(ans);


// *******************Reduce**********************

// const narr = [11,26,3]

// const ans = narr.reduce((acc , currVal) => {

//     console.log(`acc : ${acc} currVal : ${currVal}`)

//     return acc  + currVal}
//     , 0) 

// console.log(ans);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//adding the prices 

const ans = shoppingCart.reduce((acc , cr) => (cr.price + acc) , 0)

console.log(ans);
