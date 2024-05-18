/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var dp = new Array(n + 1).fill(0);
    
    // Initialize sub to 1. sub will keep track of the highest power of 2 <= i
    var sub = 1;

    for (var i = 1; i <= n; i++) {
        // Check if i is a power of 2 by seeing if sub * 2 equals i
        // If so, update sub to the current value of i
        if (sub * 2 === i) {
            sub = i;
        }

        // Calculate the number of 1's in the binary representation of i
        // It is the number of 1's in the binary representation of (i - sub) + 1
        dp[i] = dp[i - sub] + 1;
    }

    return dp;    
};
