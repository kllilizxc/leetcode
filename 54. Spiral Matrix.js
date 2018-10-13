/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return []
    let xl = matrix[0].length
    let yl = matrix.length - 1
    let flag = 1
    let res = []
    let x = 0, y = 0
    let count = xl * (yl + 1)
    while (count) {
        for (let i = 0; i < xl; i++, x += flag) {
            res.push(matrix[y][x])
            count--
        }
        xl--
        x -= flag
        y += flag
        for (let j = 0; j < yl; j++, y += flag) {
            res.push(matrix[y][x])
            count--
        }
        yl--
        y -= flag
        x += -flag
        flag = -flag
    }
    return res
};

console.log(spiralOrder([
    [1,2 ,3 ,4 ],
    [5,6 ,7 ,8 ],
    [9,10,11,12]
]))