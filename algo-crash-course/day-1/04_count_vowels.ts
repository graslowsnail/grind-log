/*
Title: Count Vowels
Instructions:
Count the number of vowels (a, e, i, o, u) in a given string. Treat uppercase and lowercase equally.
Input: string s
Output: number
*/
const test1 = "hello"; // should return 2 (e, o)
const test2 = "AEIOU"; // should return 5 (all vowels, uppercase)
const test3 = "rhythm"; // should return 0 (no vowels)
const test4 = "The quick brown fox jumps over the lazy dog"; // should return 11

const countVowels = (s:string): number => {
  const vowles = ['a', 'e', 'i','o','u']
  const wordSet = new Set(vowles)

  let numberOfVowles = 0
  let cleanedString = s.toLocaleLowerCase()

  for(let i = 0; i< cleanedString.length; i++){
    if(wordSet.has(cleanedString[i]!)){
      numberOfVowles = numberOfVowles + 1
    }
  }
  cleanedString.includes
  return numberOfVowles
}

console.log(countVowels(test1))// 2 
console.log(countVowels(test2))// 5
console.log(countVowels(test3))// 0
console.log(countVowels(test4))// 11
