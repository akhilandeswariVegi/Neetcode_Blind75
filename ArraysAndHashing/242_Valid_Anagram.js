/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
*/

var isAnagram = function (s, t) {
    // Cannot be anagrams, when length of s & t are different
    if (s.length != t.length) return false
    
    var charArray = Array(26).fill(0)

    for (var i = 0; i < s.length; i++) {
        // Increment the count for the character in string s and decrement for string t.
        charArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        charArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }

    // Check if all counts in the array are zero inorder to be anagrams
    return charArray.every(count => count == 0)
};