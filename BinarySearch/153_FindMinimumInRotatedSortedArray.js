/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/
var findMin = function(nums) {
    let left = 0; // start index
    let right = nums.length - 1; // end index

    while (left < right) {
        let mid = Math.floor((left+right) / 2);

        // If nums[mid] > nums[right], means the minimum element is in the right half of the array (excluding mid itself), so left is updated to mid + 1. Otherwise, the minimum element is in the left half of the array (including mid), so right is updated to mid.

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

/*
Time Complexity: 
O(logn)
The function performs a binary search, which reduces the search space by half in each iteration, leading to a logarithmic time complexity.
Space Complexity: 
O(1)
The function uses a constant amount of extra space, as it only requires a fixed number of variables and does not allocate additional memory that depends on the size of the input array.
*/
