/**
 * LeetCode #217: Contains Duplicate
 *
 * Description:
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs twice.
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Explanation: All elements are distinct.
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * Explanation: Multiple elements appear more than once.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * Instructions:
 * - Write a function that takes an array of numbers and returns true if any number appears more than once.
 * - Try to think of different approaches (brute force vs optimized).
 * - What would be the time complexity of each approach?
 * - Test your function with the provided examples!
 *
 * Follow-up: Can you solve this in O(n) time complexity?
 */

// Test inputs
const testDuplicateTrue1 = [1, 2, 3, 1]; // should return true
const testDuplicateTrue2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // should return true
const testDuplicateFalse = [1, 2, 3, 4]; // should return false 

const hasDuplicate = (arr: number[]) => {
  for(let i = 0; i < arr.length ; i++){
    for(let j = i+1; j< arr.length; j++){
      if(arr[i] === arr[j]){
        console.log('true')
        return true;
      }
    }
  }
        console.log('false')
      return false

}

hasDuplicate(testDuplicateTrue1) // true
hasDuplicate(testDuplicateTrue2) // true
hasDuplicate(testDuplicateFalse) // false