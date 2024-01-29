/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.



Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false



Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (brackets[currentChar]) {
            stack.push(currentChar);
        } else {
            const topOfStack = stack.pop();
            if (brackets[topOfStack] !== currentChar) {
                return false;
            }
        }
    }

    // The string is valid if the stack is empty at the end
    return stack.length === 0;
};

console.log(isValid('()[]{}')) //true