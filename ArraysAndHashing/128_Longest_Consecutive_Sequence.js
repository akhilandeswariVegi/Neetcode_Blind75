/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

function longestConsecutive (nums, maxScore = 0) {
    const numSet = new Set(nums); // Stores unique numbers Time O(N) | Space O(N)

    for (const num of [...numSet]) { // Time O(N)
        const prevNum = num - 1;

        // If the previous number exists in the set, skip the current number
        if (numSet.has(prevNum)) continue;

        let [currNum, score] = [num, 1];

        // increment the score if there is a consecutive num in the set
        while (numSet.has(currNum + 1)) { // Time O(N)
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}