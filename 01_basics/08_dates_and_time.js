//Date

let date = new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

let myDate = new Date("2023-12-11")
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023 , 12, 11 , 5 , 45)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date(2023 , 12 , 11)
console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate2.getTime());   //will return the ms value to created date since 1971.
// console.log(Date.now());     // returns the current timestamp in milliseconds since 1971.
