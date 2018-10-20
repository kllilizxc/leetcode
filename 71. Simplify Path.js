/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathes = path.split('/').filter(i => i)
    function Node (name, next, prev) {
        this.name = name
        this.next = next || []
        this.prev = prev
        this.goBack = () => this.prev
        this.goDown = name => this.next.find(i => i.name === name)
    }
    const root = new Node('', null, null)
    root.prev = root
    let head = root
    pathes.forEach(name => {
        if (name === '.') return
        if (name === '..') return head = head.goBack()
        let child = head.goDown(name)
        if (child) return head = child
        else {
            child = new Node(name, null, head)
            head.next.push(child)
            return head = child
        }
    })
    let result = ''
    while (root !== head) {
        result = '/' + head.name + result
        head = head.prev
    }
    return result.length ? result : '/'
};

console.log(simplifyPath("/.."))