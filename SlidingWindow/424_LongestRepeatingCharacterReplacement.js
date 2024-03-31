/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

function characterReplacement(s, k) {
    let charFrequencyMap = new Map();
    let [left, right, result] = new Array(3).fill(0);

    while (right < s.length) {
        let lengthOfWindow = right - left + 1
        charFrequencyMap.set(s[right], 1 + (charFrequencyMap.get(s[right]) || 0))

        if ((lengthOfWindow - Math.max(...charFrequencyMap.values())) > k) {
            charFrequencyMap.set(s[left], charFrequencyMap.get(s[left]) - 1)
            left++;
        }

        lengthOfWindow = right - left + 1;
        result = Math.max(result, lengthOfWindow)
        right++;
    }
    return result;
};
