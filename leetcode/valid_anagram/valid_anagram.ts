/**
 * LeetCode #242: Valid Anagram
 *
 * Description:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Explanation: Both strings contain the same letters in different order.
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * Explanation: The strings contain different letters.
 *
 * Example 3:
 * Input: s = "listen", t = "silent"
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * Instructions:
 * - Write a function that takes two strings and returns true if they are anagrams.
 * - Think about different approaches (sorting vs counting).
 * - What would be the time complexity of each approach?
 * - Test your function with the provided examples!
 *
 * Follow-up: Can you solve this in O(n) time complexity?
 */

// Test inputs
const testAnagramTrue1 = { s: "anagram", t: "nagaram" }; // should return true
const testAnagramTrue2 = { s: "listen", t: "silent" }; // should return true
const testAnagramFalse = { s: "rat", t: "car" }; // should return false 

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    console.log('false')
    return false
  }

  const myMap = new Map();

  // for reach char in s add it to the make, key=s[i], value = i+1
  for(let i = 0; i< s.length; i++){
    if(!myMap.has(s[i])){
      myMap.set(s[i],1)
    }
    else if (myMap.has(s[i])){
      // key s[i] value ++
      const currentCount = myMap.get(s[i])
      myMap.set(s[i], currentCount + 1)
    } 
  }

  for(let j= 0; j < t.length; j++){
    if (!myMap.has(t[j])){
      console.log('false')
      return false
    }

    const currentCount = myMap.get(t[j])
    const newCount = currentCount - 1
      //check newCount after -1 
      if( newCount === 0){
        myMap.delete(t[j])
      } else if (newCount < 0) {
        console.log('false')
        return false
      } else {
        myMap.set(t[j], newCount)
      }
  }
    // if any key value is less than 0 return false
    if (myMap.size > 0){
      console.log('false')
      return false
    }

  console.log('true')
  return true
};

isAnagram(testAnagramTrue1.s, testAnagramTrue1.t)
isAnagram(testAnagramTrue2.s, testAnagramTrue2.t)
isAnagram(testAnagramFalse.s, testAnagramFalse.t)

