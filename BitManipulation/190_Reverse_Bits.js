/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let rev = 0;
    for (let i = 0; i < 32; i++) {
        rev <<= 1; // Left shift 'rev' by one position to make room for the next bit.

        // Perform a bitwise AND operation between 'n' and 1 to extract the least significant bit of 'n'.
        // Then, use a bitwise OR operation to set the least significant bit of 'rev' with the extracted bit.
        rev |= (n & 1);

        // Right shift 'n' by one position to discard the processed least significant bit.
        n >>= 1;
    }
    return rev >>> 0;
};
