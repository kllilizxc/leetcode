/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const xl = grid.length
    const yl = grid[0].length
    const map = new Array(xl) 
    for (let i = 0; i < xl; i++)
        map[i] = new Array(yl)
    
    map[xl - 1][yl - 1] = grid[xl - 1][yl - 1]
    for (let i = xl - 2; i >= 0; i--)
        map[i][yl - 1] = map[i + 1][yl - 1] + grid[i][yl - 1]
    
    for (let i = yl - 2; i >= 0; i--)
        map[xl - 1][i] = map[xl - 1][i + 1] + grid[xl - 1][i]
        
    const f = (x, y) => {
        if (!map[x][y]) {
            let min = Infinity
            if (x < xl - 1)
                min = Math.min(min, f(x + 1, y))
            if (y < yl - 2)
                min = Math.min(min, f(x, y + 1))
            map[x][y] = min + grid[x][y]
        }
        return map[x][y]
    }
    
    return f(0, 0)
};

console.log(minPathSum([[1,2],[1,1]]))