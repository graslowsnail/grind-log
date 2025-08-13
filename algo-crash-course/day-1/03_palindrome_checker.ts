/*
Title: Palindrome Checker
Instructions:
Determine whether a string reads the same forward and backward. Ignore case and non-alphanumeric characters.
Input: string s
Output: boolean
*/

// we need to know every value in a string
const s = 'string.'// false
const r = 'Maam' // true
const testPalindromeTrue = "A man, a plan, a canal: Panama"; // should return true
const testPalindromeFalse = "race a car"; // should return false 

const isPalindrome = (s: string): boolean => {
  // ai helped with regex again
  const cleaned = s.replace (/[^a-z0-9]/gi, '').toLowerCase();
  let reversedS = ''
  for(let i = cleaned.length; i>= 0; i--){
    reversedS = reversedS.concat(cleaned[i]?? "")
  }
  if(cleaned !== reversedS){
    return false
  }
  return true
}

console.log(isPalindrome(s))//false
console.log(isPalindrome(r))//true
console.log(isPalindrome(testPalindromeFalse))//false
console.log(isPalindrome(testPalindromeTrue))//true

