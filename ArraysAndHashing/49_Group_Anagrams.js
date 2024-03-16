/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

var groupAnagrams = function (strs) {
    const map = new Map(); // to store group of anagrams

    for (let str of strs) {
        let charCounts = Array(26).fill(0);

        // count the occurence of each character in the string
        for (let i = 0; i < str.length; i++) {
            charCounts[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        const key = charCounts.join(','); // Generate a key for the current string based on its character counts
        
        // Check if the map already has a group with the same key
        if (map.has(key)) map.get(key).push(str); // push the current string to the existing group
        else map.set(key, [str]); // create a new group with the current string

    }
    return Array.from(map.values());
};