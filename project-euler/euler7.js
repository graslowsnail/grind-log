// project euler 7
// 


let arr = [];
let i = 2;

const isPrime = (n) => {
  if ( n < 2 ) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0 ) return false; // divisible by somthing else
  }
  return true;
}

while (arr.length < 10001) {
  if(isPrime(i) === true) {
  arr.push(i)
  }
  i++
  }

console.log(`The 10001st prime is: ${arr[arr.length - 1]}`);

// correct answer is : 104743


// arr[arr.length - 1] is the last element in the array

