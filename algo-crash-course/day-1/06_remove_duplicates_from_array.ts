/*
Title: Remove Duplicates from Array
Instructions:
Remove duplicate values from an array while preserving the order of first occurrence.
Input: unknown[] items
Output: unknown[]
*/
const test1 = [1, 2, 2, 3, 4, 4, 5]; // should return [1, 2, 3, 4, 5]
const test2 = ['a', 'b', 'a', 'c', 'b']; // should return ['a', 'b', 'c']
const test3 = [1, 1, 1, 1, 1]; // should return [1]
const test4 = []; // should return [] (empty array)
const test5 = [1, 2, 3, 4, 5]; // should return [1, 2, 3, 4, 5] (no duplicates)
const test6 = ['apple', 'banana', 'apple', 'cherry', 'banana']; // should return ['apple', 'banana', 'cherry']

const findDuplicateValue = (arr: any[]) => {
  let newArr = []
  const seenValues = new Set(arr)
  seenValues.forEach((value)=> {
    newArr.push(value)
  })
return newArr
}

console.log(findDuplicateValue(test1)) // return [1, 2, 3, 4, 5]
console.log(findDuplicateValue(test2)) // return ['a', 'b', 'c']
console.log(findDuplicateValue(test3)) // return [1]
console.log(findDuplicateValue(test4)) // return [] (empty array)
console.log(findDuplicateValue(test5)) // return [1, 2, 3, 4, 5] (no duplicates)
console.log(findDuplicateValue(test6)) // return ['apple', 'banana', 'cherry']