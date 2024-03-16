/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

var topKFrequent = function (nums, k) {
    const result = [];
    const buckets = []; // initalize an array of buckets to store elements by frequency
    const frequencyMap = new Map(); // to store fequency of each number

    // calculate the freq of each num in the arr
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Group numbers by their frequency into buckets
    frequencyMap.forEach((freq, num) => {
        if (!buckets[freq]) buckets[freq] = [];
        buckets[freq].push(num);
    });

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i]) result.push(...buckets[i]);
    }

    return result.slice(0, k);
};