/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!obstacleGrid.length) return 0
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let map = new Array(m)
    for (let i = 0; i < m; i++)
        map[i] = new Array(n)
    
    map[m - 1][n - 1] = obstacleGrid[m - 1][n - 1] ? 0 : 1
    const get = (x, y) => {
        if (obstacleGrid[x][y]) return map[x][y] = 0
        if (map[x][y]) return map[x][y]
        
        let sum = 0

        if (x < m - 1) {
            sum += get(x + 1, y)
        }  

        if (y < n - 1) {
            sum += get(x, y + 1)
        }
        map[x][y] = sum
        return sum
    }
    const set = (x, y) => {
        if (x > 0) {
            if(get(x - 1, y))
                set(x - 1, y)
        }
        if (y > 0) {
            if(get(x, y - 1))
                set(x, y - 1)
        }
    }
    set(m - 1, n - 1)
    return map[0][0] || 0
};