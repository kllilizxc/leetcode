/**
 * @param {number} capacity
 */
const List = function(val) {
    this.key = -1
    this.val = val
    this.next = null
    this.prev = null
}
    
var LRUCache = function(capacity) {
    this.map = {}
    this.head = new List(-1)
    let cur = this.head
    for (let i = 0; i < capacity; i++) {
        cur.next = new List(-1)
        cur.next.prev = cur
        cur = cur.next
    }
    this.tail = new List(-1)
    cur.next = this.tail
    this.tail.prev = cur
};

LRUCache.prototype.refresh = function(node) {
    if (this.head.next !== node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
    }
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        let node = this.map[key]
        this.refresh(node)
        console.log(this.map[key].val)
        return this.map[key].val
    }
    console.log(-1)
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map[key] || this.tail.prev
    this.refresh(node)
    delete this.map[node.key]
    node.key = key
    node.val = value
    this.map[key] = node
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache( 2 /* capacity */ );

cache.get(2)
cache.put(2, 6)
cache.get(1)
cache.put(1, 5)
cache.put(1, 2)
cache.get(1)
cache.get(2)