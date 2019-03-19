/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseKGroup = function (head, k) {
    if (k <= 1) return head
    let p = new ListNode(-1)
    p.next = head
    let start = p, end = p
    while (end) {
        for (let i = 0; i < k; i++) {
            end = end.next
            if (!end)
                return p.next
        }
        let temp
        for (let i = 0; i < k - 1; i++) {
            temp = start.next
            start.next = temp.next
            temp.next = end.next
            end.next = temp
        }
        for (let i = 0; i < k; i++)
            start = start.next
        end = start 
    }
    return p.next
};

const List =  require('./linkedList')

console.log(reverseKGroup(List('1->2->3->4->5'), 3))