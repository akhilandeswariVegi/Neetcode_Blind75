/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let [left, right, maxArea] = [0, height.length - 1, 0];

    while (left < right) {
        // Initialize pointers
        let containerHeight, area;
        let containerWidth = right - left;

        // Determine the height of the current container based on the shorter side
        if (height[left] < height[right]) {
            containerHeight = height[left];
            left++;
        } else { // wouldn't matter which pointer we shift when height of left and right are same 
            containerHeight = height[right];
            right--;
        }

        area = containerWidth * containerHeight;

        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
};
