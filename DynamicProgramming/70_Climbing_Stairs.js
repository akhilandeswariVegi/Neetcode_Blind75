/**
 * @param {number} n
 * @return {number}
 */


var climbStairs = function(n) {
  if(n < 2) return n; // If there are less than 2 steps, return n as there's only one way to climb for n=1 and two ways for n=2
    
  let dp = new Array(n + 1).fill(0); 
  dp[1] = 1; // There's 1 way to climb when there's only 1 step
  dp[2] = 2; // There are 2 ways to climb when there are 2 steps
  
  // Iterate from step 3 to n, computing the number of ways to climb to each step
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // The number of ways to reach the current step is the sum of the ways to reach the previous two steps
  }
  
  return dp[n]; 
};
