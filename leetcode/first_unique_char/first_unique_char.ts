/**
 * LeetCode #387: First Unique Character in a String
 *
 * Description:
 * Given a string s, find the first non-repeating character in it and return its index. 
 * If it does not exist, return -1.
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * Explanation: The first non-repeating character is 'l' at index 0.
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 * Explanation: The first non-repeating character is 'v' at index 2.
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 * Explanation: All characters repeat, so return -1.
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of only lowercase English letters.
 *
 * Instructions:
 * - Write a function that takes a string and returns the index of the first unique character.
 * - Think about using a Map to count character frequencies.
 * - What would be the time complexity?
 * - Test your function with the provided examples!
 *
 * Follow-up: Can you solve this in O(n) time complexity?
 */


// Test inputs
const testUnique1 = "leetcode"; // should return 0
const testUnique2 = "loveleetcode"; // should return 2
const testUnique3 = "aabb"; // should return -1

const findUniqueChar = (s: string) => {
  const myMap = new Map()
  let sLength = s.length
  let noUnique = false

  for(let i = 0 ; i < sLength ; i++){
    if(myMap.has(s[i]) === false){ // if myMap.has is false
      myMap.set(s[i], 1)// set new value inside
    } else if ( myMap.has(s[i])){
      let currentCount = myMap.get(s[i])
      currentCount = currentCount + 1
      myMap.set(s[i], currentCount)
    }
  }

  for(let j = 0 ; j < sLength ; j ++){
    let currentCharCount = myMap.get(s[j])
    if(currentCharCount === 1 ){
      console.log(s[j], `: position ${j}`)
      noUnique = true
      return j
    }
  }

    if(!noUnique){
      console.log('-1')
    }

}

findUniqueChar(testUnique1)

findUniqueChar(testUnique2)
findUniqueChar(testUnique3)
