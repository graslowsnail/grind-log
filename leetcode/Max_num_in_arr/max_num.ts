/**
 * Problem: Find the Maximum Number in an Array
 *
 * Description:
 * Given an array of integers, return the largest number in the array.
 *
 * Example 1:
 * Input: [1, 5, 3, 9, 2]
 * Output: 9
 *
 * Example 2:
 * Input: [-10, -3, -1, -20]
 * Output: -1
 *
 * Constraints:
 * - The array will have at least one element.
 * - All elements are integers.
 *
 * Instructions:
 * - Write a function that takes an array of numbers and returns the largest number.
 * - Try to do it without using built-in functions like Math.max (for an extra challenge).
 * - Test your function with a few different arrays!
 */

const arr = [4, 17, 2, 99, 23, 5];

const findMax = (arr: number[]) => {
  let isMax = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i]! > isMax!){
      isMax = arr[i]
    }
  }
  return isMax
}

findMax(arr)
