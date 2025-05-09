// euler 5 
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. 
// what is the smalled positive number that is EVENLY DIVISIBLE by all numbers from 1 to 20?


// for every number 2-20 check if num is evenly divisible, so this function will be used as a helper
const isDivisable = (num) => {
  for (let i = 2 ; i <= 20 ; i++) {
    if (num % i !== 0 ) { 
      return false;
    }
  }
  return true;
}

let num = 20
while (!isDivisable(num)){
 num ++
}
  console.log("FOUND: ", num)

//answer FOUND:  232792560

