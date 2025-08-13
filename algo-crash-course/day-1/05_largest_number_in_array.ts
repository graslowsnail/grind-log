/*
Title: Largest Number in Array
Instructions:
Given an array of numbers, return the largest element without using Math.max(). Assume the array is non-empty.
Input: number[] nums
Output: number
*/
const test1 = [1, 2, 3, 4, 5]; // should return 5
const test2 = [5, 2, 8, 1, 9]; // should return 9
const test3 = [-10, -5, -2, -8]; // should return -2
const test4 = [42]; // should return 42 (single element)
const test5 = [0, 0, 0, 0]; // should return 0 (all same values)

const findLargestValue = (nums: number[]) => {
  let largestNumber = nums[0]
  nums.forEach(num => {
    if(num > largestNumber!) largestNumber = num
  })
  return largestNumber
}

console.log(findLargestValue(test1))
console.log(findLargestValue(test2))
console.log(findLargestValue(test3))
console.log(findLargestValue(test4))
console.log(findLargestValue(test5))