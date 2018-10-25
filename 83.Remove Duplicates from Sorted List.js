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
var deleteDuplicates = function(head) {
    if (!head) return head
    let next = head.next
    let cur = head
    while (next) {
        while (next.val === cur.val) next = next.next
        if (cur.next !== next) {
            cur.next = next
        }
        cur = next
        if (next)
            next = next.next
    }
    return head
};

console.log(deleteDuplicates([1,1,2,3,3]))