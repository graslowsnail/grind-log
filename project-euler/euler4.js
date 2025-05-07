// project euler 4
//A palindromic number reads the same both ways.
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.


// range for 3 digit numbers. 100-999

let maxPalindrome = 0


const reverseString = (str) => {
  //console.log(str.split("").reverse().join(""))
  return str.split("").reverse().join("")

};

const isPalindrome = (num) => {
  let numToString = num.toString()
  let flippedString= reverseString(numToString)
  if (numToString === flippedString){
    console.log(numToString + ' is a palindrome ')
    return true;

  }

};

for (let i = 100; i <= 999 ; i++) {
  for (let j = 100; j <= 999; j++){
    let product = i * j;
    if ( isPalindrome(product) && product > maxPalindrome ) {
      maxPalindrome = product
      console.log(product)
    }
  }
}
// ANSWER : 906609 is the max palindrome

