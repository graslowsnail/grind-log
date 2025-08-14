/*
Title: Factorial (Iterative)
Instructions:
Compute n! using a loop. Assume n is an integer where n >= 0.
a factorial is the product of all positive intergers from 1 to n
3! = 3 x 2 x 1 = 6
Input: number n
Output: number
*/

const computeFactorial = (n: number):number => {
  let sum = 1
  for(let i = 1; i <=n; i++){
    sum = sum*i
  }
  return sum
}

console.log(computeFactorial(5))
console.log(computeFactorial(4))
console.log(computeFactorial(3))
console.log(computeFactorial(2))
