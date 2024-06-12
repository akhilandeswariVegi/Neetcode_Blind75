/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/
var removeNthFromEnd = function (head, n) {

    let dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both fast and slow pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from end
    slow.next = slow.next.next;

    return dummy.next;

};
