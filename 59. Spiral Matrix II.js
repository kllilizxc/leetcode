/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let m = new Array(n)
    for (let i = 0; i < n; i++)
        m[i] = new Array(n)
    
    let xl = n
    let yl = n - 1
    let flag = 1
    let x = 0, y = 0
    
    let i = 1
    while (i <= n * n) {
        for (let k = 0; k < xl; k++, x += flag)
            m[y][x] = i++
        xl--
        y += flag
        x -= flag
        
        for (let j = 0; j < yl; j++, y += flag)
            m[y][x] = i++
        yl--
        x -= flag
        y -= flag
        flag = -flag
    }
    return m
};

console.log(generateMatrix(3))