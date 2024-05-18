/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:
Input: s = "()"
Output: true
*/

/**
 * Checks if a string containing only parentheses, brackets, and braces is valid.
 * @param {string} s - The input string containing parentheses, brackets, and braces.
 * @return {boolean} - Returns true if the input string is valid, otherwise false.
 */
var isValid = (s, stack = []) => {
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of s) {
        const isCloseBracket = (char in map);
        if (!isCloseBracket) {
            stack.push(char);
            continue;
        }

        // Check if the top of the stack contains the corresponding opening bracket
        const isEqual = (stack[stack.length - 1] === map[char]);

        if (isEqual) {
            // If the current character matches the top of the stack, pop it from the stack
            stack.pop();
            continue;
        }

        // If the current character doesn't match the top of the stack, return false
        return false;
    }

    return (stack.length === 0);
};
