// console.log(2>1)
// console.log(2!=1)


// console.log("2" > 1)
// console.log(true >= 1)
// console.log("" >= 0)

//Conversions below tend to create confusion so we try to avoid them as much as possible.

// console.log(null > 0);    0>0
// console.log(null == 0); 
// console.log(null >= 0);   0>=0

/*equality check == and comparisons (< , <= , > , >=) work differently in JS.
Comparisons convert null to a number , trating it as 0.
While equality dosent convert it.
*/

// === (Strict check check value and its data types)