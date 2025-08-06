/*
 * Best Time to Buy and Sell Stock
 * 
 * Problem Description:
 * You are given an array 'prices' where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve 
 * any profit, return 0.
 * 
 * Examples:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * 
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 * 
 * Solution Approach:
 * - Brute force with nested loops
 * - For each day i, consider buying at prices[i]
 * - For each subsequent day j, calculate profit by selling at prices[j]
 * - Keep track of maximum profit found
 * 
 * Time Complexity: O(n²) - due to nested loops
 * Space Complexity: O(1) - only using a few variables
 * 
 * Note: This can be optimized to O(n) by keeping track of minimum price seen so far
 */

const prices = [7,1,5,3,6,4]
const prices2 = [7,6,4,3,1]

// for each value in the arr, subtract it from every other value to see the profit. 
// return highest profit value
// if value is negative return 0

const maxProfit = (prices: number[]) => {
  let currentProfit = 0
  let highestProfit = 0
  for(let i = 0; i < prices.length; i++){
    // console.log(i, prices[i])
    for(let j = i + 1; j < prices.length; j++){
      currentProfit = prices[j]! - prices[i]!
      if(currentProfit >= highestProfit){
        highestProfit = currentProfit
      }
    }
  }
      console.log(highestProfit)
      return highestProfit
}

maxProfit(prices)
maxProfit(prices2)