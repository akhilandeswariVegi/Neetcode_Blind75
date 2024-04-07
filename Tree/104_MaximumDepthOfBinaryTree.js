/*PseudoCode
1.if root is null, return 0
2. return  1 + max of maxDepth(left) and  maxDepth(right)
*/

var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// Time Complexity: O(n)
// Space Complexity: O(n)