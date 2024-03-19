/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

function threeSum(nums) {
    if(nums.length === 0) return [];

    nums = nums.sort((a,b) => a-b); // sort the array
    let result = [];

    // Iterate through the array,till the third element from last 
    for(let i =0; i<nums.length-2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue; // skip duplicates

        let j= i+1; // Initialize the left pointer
        let k =nums.length-1; // Initialize the right pointer

        // Two-pointer approach
        while(j<k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                // avoid duplicates
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k+1]) k--;

                j++; // Move left pointer forward
                k--; // Move right pointer backward
            }
            else if(sum < 0) {
                j++;
            }
            else k--;
        }
    }

    return result;
}
