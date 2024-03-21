/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
var lengthOfLongestSubstring = function (s) {
    const visited = new Set();
    let [left, maxLength] = [0, 0]

    // Iterate through the string using a right pointer
    for (let right = 0; right < s.length; right++) {
        while (visited.has(s[right])) {
            // remove characters from the left side of the window until the repeating character is removed
            visited.delete(s[left]);
            left++;
        }
        visited.add(s[right]);
        maxLength = Math.max(maxLength, visited.size);
    }
    
    return maxLength;
};