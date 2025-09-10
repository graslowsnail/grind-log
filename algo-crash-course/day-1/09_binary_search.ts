/*
Title: Binary Search
Instructions:
Given a sorted array of numbers and a target value, return the index of the target if present; otherwise return -1.
Input: number[] nums (sorted ascending), number target
Output: number

Test data:
*/
const data = {
  array: [1, 3, 5, 7, 9, 11, 15, 20],
  targets: [7, 8, 1, 11, 0, 20, 21],
};

const binarySearch = (nums: number[], target: number) => {
  let left = 0
  let right = nums.length - 1
  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    if(nums[mid] === target){
      return mid
    }
    if(nums[mid] > target){
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

console.log(binarySearch(data.array, data.targets[0]))
console.log(binarySearch(data.array, data.targets[1]))
console.log(binarySearch(data.array, data.targets[2]))
console.log(binarySearch(data.array, data.targets[3]))
console.log(binarySearch(data.array, data.targets[4]))
console.log(binarySearch(data.array, data.targets[5]))
console.log(binarySearch(data.array, data.targets[6]))

