/*
LeetCode 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
    // Handle edge case
    if (s.length === 0) return 0;
    
    let left = 0;
    let right = 0;
    let seenSet = new Set<string>();
    let maxLength = 0;
    
    while (right < s.length) {
        // Get the current character
        const currentChar = s[right];
        
        // Check if we've seen this character before in our current window
        if (seenSet.has(currentChar)) {
            // We found a duplicate! We need to shrink our window
            // Remove characters from the left until we remove the duplicate
            while (seenSet.has(currentChar)) {
                seenSet.delete(s[left]);
                left++;
            }
        }
        
        // Add the current character to our set
        seenSet.add(currentChar);
        
        // Calculate the current window size
        const currentLength = right - left + 1;
        
        // Update our maximum if this window is bigger
        maxLength = Math.max(maxLength, currentLength);
        
        // Move the right pointer to expand the window
        right++;
    }
    
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3
