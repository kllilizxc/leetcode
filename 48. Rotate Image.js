/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const getTranslatedPosition = ({ x, y }, n) => {
    return { x: n - y - 1, y: x }
}
const setValue = (matrix, point, value) => {
    matrix[point.x][point.y] = value
}
const getValue = (matrix, point) => matrix[point.x][point.y]

var rotate = function (matrix) {
    const n = matrix.length
    for (let i = 0; i < Math.ceil(n / 2); i++)
        for (let j = 0; j < Math.ceil(n / 2); j++) {
            let point1 = { x: i, y: j }
            let point2 = getTranslatedPosition(point1, n)
            let point3 = getTranslatedPosition(point2, n)
            let point4 = getTranslatedPosition(point3, n)

            let tempValue = getValue(matrix, point4)

            setValue(matrix, point4, getValue(matrix, point1))
            setValue(matrix, point1, getValue(matrix, point2))
            setValue(matrix, point2, getValue(matrix, point3))
            setValue(matrix, point3, tempValue)
        }
};

let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(m)
console.log(m)