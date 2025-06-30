/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
  */

const nums = [0, -2, 0, 0, -5, 0, 3, 0, 0, 0, 0, 0, 3, 5, 1, 9]


const target = 4



// function twoSum(nums: number[], target: number): [number, number] | void {
//   for (let xIndex = 0; xIndex < nums.length; xIndex++){
//     const x = nums[xIndex]
//     for (let yIndex = xIndex+1; yIndex<nums.length; yIndex++){
//       const y = nums[yIndex]
//       console.log("x: ", x, "at ", xIndex, "y: ", y, "at ", yIndex)
//       console.log(x+y)
//       if ((x + y) === target) return [xIndex, yIndex]
//     }
//   }
// }





function twoSum(nums: number[], target: number): [number, number] | void {
  const numbersIHaveSeen: Map<number, number> = new Map()

  for (let i=0; i<nums.length; i++){
    const currentNumber = nums[i] as number
    const whatINeed = target - currentNumber
    const maybeWhatINeedLocation = numbersIHaveSeen.get(whatINeed)
    console.log("i have ", currentNumber, "i need ", whatINeed, "i have maybe seen it at ", maybeWhatINeedLocation)
    if(maybeWhatINeedLocation) return [i, maybeWhatINeedLocation]

    numbersIHaveSeen.set(currentNumber, i)
  }

}

console.log(twoSum(nums, target))