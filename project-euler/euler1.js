// Project Euler # 1
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6, and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let result = 0;
console.log(result);


const multiplesOfNumber= (n) => {
  for (let i = 1; i < n ; i++){
    if (i % 3 === 0 || i % 5 === 0 ) {
      console.log( `i divided by ${i}'s remainder is 0`);
      console.log(`${result} + ${i} ='s ${ result += i }`);
    }
  }
};

multiplesOfNumber(1000);
// correct anser is 233168

