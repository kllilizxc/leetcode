/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || !grid.length) return 0
    let id = 0
    const xl = grid.length
    const yl = grid[0].length
    const map = new Array(xl)
    for (let i = 0; i < xl; i++) {
        map[i] = new Array(yl)
    }
    const idMap = {}
    const islands = []
    for (let i = 0; i < xl; i++) {
        for (let j = 0; j < yl; j++) {
            if (grid[i][j] === '0') {
                map[i][j] = 0
                continue
            }
            let islandId
            if (i > 0 && map[i - 1][j] > 0) islandId = map[i - 1][j]
            if (j > 0 && map[i][j - 1] > 0) {
                if (islandId !== undefined && islandId !== map[i][j - 1]) {
                    idMap[islandId] = map[i][j - 1]
                } else {
                    islandId = map[i][j - 1]
                }
            }
            if (islandId === undefined) {
                islandId = ++id
                islands.push(islandId)
            }
            map[i][j] = islandId
        }
    }
    const result = new Set()
};
const input = [["1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "0", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1"], ["0", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1"], ["1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1"], ["1", "1", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1"], ["1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1"], ["0", "1", "0", "1", "1", "1", "1", "1", "1", "0", "0", "1", "0", "1", "0", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "0", "0", "0", "1", "0", "1", "1", "1", "1", "0", "1", "0", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "0", "1", "1"], ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "0", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]]
console.log(numIslands(input))