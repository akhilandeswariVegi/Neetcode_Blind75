/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function(nums) {
    const frequencyMap = {};

    for (const num of nums) {
        if (frequencyMap[num]) return true; // checks if num is already present as a key in the frequencyMap
        else frequencyMap[num] = 1; // if num not present in frequencyMap, it is added with a frequency of 1
    }

    return false; // if no duplicates are found
};

