/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n !== 0) {
        count += n % 2; // Add the least significant bit of n to the count (n % 2 gives the remainder when n is divided by 2, which is the least significant bit)
        n >>>= 1; // Shift the bits of n to the right by 1 position 
    }
    return count;
};
