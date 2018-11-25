/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var insertionSortList = function(head) {
    const h = new ListNode(-1)
    h.next = head
    for (let i = head, pre = h; i !== null;) {
        let next = i.next, preNext = pre.next
        for (let j = h; j.next !== i; j = j.next) {
            if (j.next.val > i.val) {
                next = i.next
                pre.next = i.next
                i.next = j.next
                j.next = i
                preNext = pre
                break
            }
        }
        i = next, pre = preNext
    }
    return h.next
};


const LinkedList = require('./linkedList')

console.log(insertionSortList(new LinkedList('4->2->1->3')))