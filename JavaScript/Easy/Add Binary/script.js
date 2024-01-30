/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let result = "";
  let carry = 0;

  // Ensure that both strings have the same length by adding leading zeros
  while (a.length < b.length) {
    a = "0" + a;
  }

  while (b.length < a.length) {
    b = "0" + b;
  }

  // Start from the rightmost bit and move towards the left
  for (let i = a.length - 1; i >= 0; i--) {
    const bitA = parseInt(a[i]);
    const bitB = parseInt(b[i]);

    // Perform binary addition
    const sum = bitA + bitB + carry;

    // Update the result string and carry
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  // If there's a remaining carry, add it to the leftmost bit
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};

console.log(addBinary("11", "1")); //100
