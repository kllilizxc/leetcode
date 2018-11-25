/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let map = {}
    let max = 0
    const get = (k, b) => map[`${k}:${b}`]
    const set = (k, b, points) => {
        if (!map[`${k}:${b}`]) map[`${k}:${b}`] = new Set()
        points.forEach(point => map[`${k}:${b}`].add(point))
        max = Math.max(max, map[`${k}:${b}`].size)
    }
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let pi = points[i]
            let pj = points[j]
            const k = (pi[1] - pj[1]) / (pi[0] - pj[0])
            const b = pi[1] - k * pi[0]
            set(k, b, [pi, pj])
        }
    }
    return max
};


console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))