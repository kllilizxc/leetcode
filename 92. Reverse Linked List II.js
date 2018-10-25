/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let p = { next: head }
    let preEnd, end, next
    let i = n - m
    end = p
    while (m--) {
        preEnd = end
        end = end.next
    } 
    next = end.next
    while (i--) {
        end.next = next.next
        next.next = preEnd.next
        preEnd.next = next
        next = end.next
    }
    return p.next
};

const LinkedList = require('./linkedList')

console.log(reverseBetween(new LinkedList('1->2->3->4->5->NULL'), 2, 4))