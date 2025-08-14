/*
Title: Prime Number Checker
Instructions:
Determine whether an integer n is prime. Assume n >= 1.
Input: number n
Output: boolean
*/
// a prime number can only be divided by itself and 1
const validateIfPrime = (n: number) => {
  let isPrime = 0
  for(let i = 1; i<=n; i++){
    if(n % i === 0){
      isPrime = isPrime+1
    }else if(isPrime > 2){
      return false
    }
  }
  return true
}

console.log(validateIfPrime(25))
