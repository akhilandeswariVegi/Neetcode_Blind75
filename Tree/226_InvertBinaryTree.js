 /*
 Pseudocode
 1. If root is null, return null
 2. Swap the left and right nodes
 3. invertTree(root.left)
 4. invertTree(root.right)
 */

 var invertTree = function (root) {
    if (root === null || root === undefined) return root
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root
};

// Time Complexity: O(n)
// Space Complexity: O(n)