/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    
    const f = (map, lastIndex, solution, num) => {
        for (let i = 0; i < n; i++) {
            let sol = solution.slice(0)
            let m = {...map}
            let valid = !m[i]
            for (let j = i - 1, k = i + 1, col = n - num - 1; col >= 0; j--, k++, col--)
                valid = valid && (j < 0 || sol[col][j] !== 'Q') && (k >= n || sol[col][k] !== 'Q')
            if (valid) {
                let str = ''
                for (let j = 0; j < n; j++) str += j === i ? 'Q' : '.'
                sol.push(str)
                if (num === 1) {
                    result.push(sol)
                } else {
                    m[i] = true
                    f (m, i, sol, num - 1)
                }
            }
        }
    }
    
    f ({}, -1, [], n)
    
    return result
};

console.log(solveNQueens(4))
