
/*
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the linked list using the slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev; // reverse the current nodes next pointer
        prev = curr;
        curr = nextTemp;
    }

    // Step 3: Merge the two halves
    let first = head;
    let second = prev;
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};

// i/p: 1 2 3 4 5 
// o/p: 1 5 2 4 3
