/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/
function productExceptSelf(nums) {
    let prefix = 1
    let suffix = 1
    let result = Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix // Store prefix product before current index in the result array
        prefix *= nums[i] // Update prefix product
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix // Update result array with product of prefix and suffix before current index
        suffix *= nums[i] // Update suffix product
    }

    return result
};
