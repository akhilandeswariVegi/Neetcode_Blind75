/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
var maxProfit = function (prices) {
    let [buy, sell, maxProfit] = [0, 1, 0];

    while (sell < prices.length) {
        const shouldUpdateLeftPointer = prices[sell] <= prices[buy];
        if (shouldUpdateLeftPointer) buy = sell;
        maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
        sell++;
    }

    return maxProfit;
};

var maxProfit = function (prices) {
    let min = Number.MAX_VALUE;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
    
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
    return maxProfit;
};
