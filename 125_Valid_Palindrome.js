/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
function isPalindrome(s) {
    const alphaNumericString = s.replace(/[^0-9A-Z]+/gi, "").toLowerCase();

    let left = 0;
    let right = alphaNumericString.length - 1;

    // Iterate through the string from both ends towards the center
    while (right >= left) {
        // check whether characters at the left and right pointers are equal or not
        if (alphaNumericString[left] !== alphaNumericString[right]) return false

        left++; // Move the left pointer to the right for the next iteration
        right--; // Move the right pointer to the left for the next iteration
    }
    return true
};
