/*
Given the head of a singly linked list, reverse the list, and return the reversed list.*/
var reverseList = function (head) {
    let [ prev, curr, next ] = [ null, head, null ];

    while (curr) {/* Time O(N) */
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};

