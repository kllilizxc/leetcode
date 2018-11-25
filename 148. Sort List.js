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

var sortList = function(head) {
    if (!head) return head

    const f = (h, n) => {
        if (n === 1) return h
        let l = Math.floor(n / 2)
        let rightH = h
        for (let i = 0; i < l; i++)
            rightH = rightH.next
        
        let left = f(h, l)
        let right = f(rightH, n - l)
        
        let pivot = new ListNode(-1)
        let cur = pivot
        let i = 0, j = 0
        while (i < l && j < n - l) {
            if (left.val < right.val) {
                cur.next = left
                left = left.next
                i++
            } else {
                cur.next = right
                right = right.next
                j++
            }
            cur = cur.next
        }
        while (i < l) {
            cur.next = left
            cur = cur.next
            left = left.next
            i++
        }

        while (j < n - l) {
            cur.next = right
            cur = cur.next
            right = right.next
            j++
        }
        cur.next = null

        return pivot.next
    }
    let length = 0
    let cur = head
    while (cur) {
        cur = cur.next
        length++
    }
    return f(head, length)
};


const LinkedList = require('./linkedList')

const result = sortList(new LinkedList('4->2->1->3'))
console.log(result)