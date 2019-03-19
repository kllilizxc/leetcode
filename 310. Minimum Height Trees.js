/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    function Node(val, neighbors = []) {
        this.val = val
        this.neighbors = neighbors
    }
    const nodes = []
    for (let i = 0; i < n; i++)
        nodes.push(new Node(i, []))
    edges.forEach(([src, des]) => {
        nodes[src].neighbors.push(nodes[des])
        nodes[des].neighbors.push(nodes[src])
    })
        
    const findHeight = (node, height, visited) => {
        if (!node || visited[node.val]) return height
        visited[node.val] = true
        height++
        let min = height
        node.neighbors.forEach(n => {
            if (visited[n.val]) return
            h = findHeight(n, height, visited)
            if (h < min)
                min = h
        })
        return min
    }
    let min = n
    for (let i = 0; i < n; i++) {
        h = findHeight(nodes[i], 0, [])
        if (h < min)
            min = h
    }
    return min
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]))