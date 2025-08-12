/*
Title: FizzBuzz
Instructions:
Print numbers from 1 to 100. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for numbers that are multiples of both 3 and 5 print "FizzBuzz".
Input: none
Output: string[] or a single formatted string representing results from 1..100
*/

// if n % 3 === 0 print Fizz
// if n % 5 === 0 print Buzz
// if n % 3 === 0 and n % 5 === 0 print FizzBuzz

const fizzBuzz = (n: number) => {
  for(let i = 1; i <= n; i ++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    } else if(i % 3 === 0){
      console.log("Fizz")
    } else if(i % 5 === 0){
      console.log("Buzz")
    } else console.log(i)
  }
}
fizzBuzz(100)