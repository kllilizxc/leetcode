/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const xl = matrix.length, yl = matrix[0].length
    let map = new Array(xl)
    for (let i = 0; i < xl; i++)
        map[i] = new Array(yl)
    
    let maxS = 0
    const get = (i, j) => {
        if (i >= xl || j >= yl) return 0
        if (map[i][j] === undefined) f(i, j)
        return map[i][j]
    }
    const f = (i, j) => {
        let max = 0
        let width = 0, height = 0
        if (matrix[i][j] === 0) return map[i][j] = 0
        let data = get(i + 1, j + 1)
        if (data) {
            let w = 1, h = 1
            while (w <= data.width && matrix[i + w][j]) w++
            while (h <= data.height && matrix[i][j + h]) h++
            max = w * h
            width = w
            height = h
        }
        let m = get(i + 1, j)
        m = m && m.width
        m++
        if (m > max) {
            width = m
            height = 1
            max = m
        }
        let n = get(i, j + 1)
        n = n && n.height
        n++
        if (n > max) {
            width = 1
            height = n
            max = n
        }
        maxS = Math.max(max, maxS)
        return map[i][j] = { width, height }
    }
    f(0, 0)
    return maxS
};

console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ]))