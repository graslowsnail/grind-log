/**
 * Problem: Valid Palindrome
 *
 * Description:
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * Example 1:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: After removing non-alphanumeric characters and converting to lowercase, the string is "amanaplanacanalpanama", which is a palindrome.
 *
 * Example 2:
 * Input: "race a car"
 * Output: false
 * Explanation: After cleaning, it becomes "raceacar", which is not a palindrome.
 *
 * Constraints:
 * - 1 <= s.length <= 2 * 10^5
 * - The string consists of printable ASCII characters.
 *
 * Instructions:
 * - Write a function that takes a string and returns true if it is a palindrome, or false otherwise.
 * - Ignore non-alphanumeric characters and case.
 * - Test your function with a few different strings!
 */

// Test inputs
const testPalindromeTrue = "A man, a plan, a canal: Panama"; // should return true
const testPalindromeFalse = "race a car"; // should return false 

const palindromeCheck = (testCase : string) => {
  //ai help for Regex
  const cleaned = testCase.replace (/[^a-z0-9]/gi, '').toLowerCase();
  console.log(cleaned)

  let flippedValue = ''

  for (let i = 1; i <= cleaned.length; i++){
    flippedValue = flippedValue.concat(cleaned.charAt(cleaned.length - i))
  }

  if ( flippedValue !== cleaned){
    console.log('FALSE')
    return false 
  }
  console.log('TRUE')
  return true

}

palindromeCheck(testPalindromeFalse)
palindromeCheck(testPalindromeTrue)