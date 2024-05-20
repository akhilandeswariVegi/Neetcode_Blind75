/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Initialize two pointers, slow and fast, both starting at the head of the list
    let [slow, fast] = [head, head];

    // Traverse the linked list with the fast pointer moving twice as fast as the slow pointer
    while (fast && fast.next) {/* Time O(N) */
        slow = slow.next; // Move the slow pointer one step forward
        fast = fast.next.next; // Move the fast pointer two steps forward

        const hasCycle = slow === fast;
        if (hasCycle) return true;
    }

    return false; // If the loop terminates, there is no cycle in the list
};
