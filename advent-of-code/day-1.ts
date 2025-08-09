/* 
  pair up
  - the smallest number in the left list
  - the smallest number in the rightlist
  then 2nd smallest left number with 2nd smallest right number
*/
/*
  for each pair, figure out how far araprt the two numbers are

  add up all of those distances
  pairs 3 and 7 the distance apart is 4
  pairs 9 and 3 the distance apart is 6
*/

/* 
we look through all the numbers on the left side.
and we sort them from in decending order.

read file function, 
split function 
*/
import {readFile} from "node:fs"

let re1 = new RegExp("   ");
let re2 = /   /g;
let re3 = /\n/g;

let re4 = [0-9]

readFile("./adventOfCode-day1-input.txt", "utf-8", (error, text) => {
  if(error) throw error;
  let newText = text.replace(re2, ",")
  newText = newText.replace(re3,".")
  console.log("The file contains:", newText)
})

const leftList = [3,4,2,1,3,3]
const rightList = [4,3,5,3,9,3]



