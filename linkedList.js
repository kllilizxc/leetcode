module.exports = function(str) {
    let nodes = str.split('->')
    const toVal = s => s === 'NULL' ? null : +s
    let head = new ListNode(toVal(nodes[0]))
    let cur = head
    for (let i = 1; i < nodes.length; i++) {
        cur.next = new ListNode(toVal(nodes[i]))
        cur = cur.next
    }
    return head
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}