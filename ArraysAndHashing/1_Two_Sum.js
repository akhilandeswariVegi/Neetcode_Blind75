/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
    const map = new Map(); // Create a map to store each num and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // calculate the complement required to reach the target
        if (map.has(complement)) {
            return [map.get(complement), i]; //  if complement found in map return index of current number
        }
        map.set(nums[i], i); // else add the current number and its index to the map
    }
    
    throw new Error("No two sum solution");
};