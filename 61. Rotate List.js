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
var rotateRight = function(head, k) {
    if (!k || !head || !head.next) return head
    let length = 0
    let i = head
    while (i) {
        length++
        i = i.next
    }
    k = k % length
    i = head
    let last = head
    for (let j = 0; j < (length - k) % length; j++) {
        last = i
        i = i.next
    }
    let tail = i
    while (tail.next) tail = tail.next
    tail.next = head
    last.next = null
    return i
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = null
console.log(rotateRight(head, 2))