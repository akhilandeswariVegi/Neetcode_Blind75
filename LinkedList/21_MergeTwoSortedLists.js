/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    // Traverse both lists until one is exhausted
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1; // Link the smaller node to the merged list
            list1 = list1.next;   // Move to the next node in list1
        } else {
            current.next = list2; // Link the smaller node to the merged list
            list2 = list2.next;   // Move to the next node in list2
        }
        current = current.next;   // Move to the next position in the merged list
    }

    // If there are remaining nodes in either list, append them
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    }

    // Return the merged list, starting from the next node of dummy (skipping the dummy head)
    return dummy.next;
};
