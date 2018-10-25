/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const xl = board.length
    const yl = board[0].length
    let map = {}
    const find = (index, i, j) => {
        if (i < 0 || j < 0 || i >= xl || j >= yl || board[i][j] !== word[index]) return false
        if (index === word.length - 1) return true
        map[`${i}:${j}`] = true
        let result = false
        if (!map[`${i + 1}:${j}`])
            result = result || find(index + 1, i + 1, j)
        if (!map[`${i - 1}:${j}`])
            result = result || find(index + 1, i - 1, j)
        if (!map[`${i}:${j + 1}`])
            result = result || find(index + 1, i, j + 1)
        if (!map[`${i}:${j - 1}`])
            result = result || find(index + 1, i, j - 1)
        return result
    }
    
    for (let i = 0; i < xl; i++)
        for (let j = 0; j < yl; j++) {
            map = {}
            if (find(0, i, j)) return true
        }
    
    return false
};

console.log(exist([
["A","B","C","E"],
["S","F","E","S"],
["A","D","E","E"]], "ABCESEEEFS"))

