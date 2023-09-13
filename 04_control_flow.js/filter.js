//if i want to conditionally check any number and return it that is not possible in forEach as it dosen't return anyhting

// const coding = ["java" , "js" , "python"]
// const ans = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(ans);

//****************************Filter*******************************

const nums = [1,2,3,5,6,7,8,9,10]

//it return elements of array which will me the conditions specified in the function body

// const ans = nums.filter((item) => item>4)  //it will return as there is implicit return statment by js

// const ans = nums.filter((item) => {
//     item > 5 // this will not work because when there is scope involve {} we have to use return statment to return elements
// })

// const ans = nums.filter((item) => {
//     return item > 5  // [ 6, 7, 8, 9, 10 ]
// })

// console.log(ans);

//to do the above work by foreach

// nums.forEach((item) => {
//     if(item > 4)console.log(item) 
// })

// Eg : =>

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => (bk.genre === 'Fiction'))

userBooks = books.filter((bk) => {
    return bk.genre == "Fiction" && bk.edition <=2990
})



// console.log(userBooks);
