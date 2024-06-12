/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

var levelOrder = function (root) {
    if (!root) return []; // Return an empty array if the root is null

    let result = []; // Initialize an array to store the result
    let queue = [root]; // Initialize a queue with the root node

    while (queue.length > 0) { // Perform level order traversal using BFS
        let level = []; // Initialize an array to store nodes' values at the current level
        let levelSize = queue.length; // Record the number of nodes at the current level

        for (let i = 0; i < levelSize; i++) { // Process nodes at the current level
            let node = queue.shift(); // Dequeue a node from the front of the queue
            level.push(node.val); // Record the value of the dequeued node

            if (node.left) queue.push(node.left); // Enqueue the left child if exists
            if (node.right) queue.push(node.right); // Enqueue the right child if exists
        }

        result.push(level); // Store the nodes' values of the current level
    }

    return result; // Return the result array containing level order traversal
};
