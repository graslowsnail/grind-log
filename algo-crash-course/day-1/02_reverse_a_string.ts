/*
Title: Reverse a String
Instructions:
Given a string s, return the reverse of s without using built-in reverse helpers.
Input: string s
Output: string
*/
const s = 'Pablo Ramirez'

const reverseString = (s: string) => {
  let stringLength = s.length - 1
  let reverseString = ''
  for(let i = stringLength; i >= 0; i--){
    reverseString = reverseString.concat(s[i]!)
  }
  return reverseString
}

console.log(reverseString(s))
