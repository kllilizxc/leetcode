/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const k = parseInt(numRows / 2)
    const l = numRows % 2
    const n = Math.ceil((s.length +k) / (3 * k + l))
    let result = ''
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < 2 * n - 1; col++) {
            let index = parseInt(col / 2) *  + (col % 2) * n + ((row % 2) ? parseInt((row + 1) / 2) : row)
            if (index < s.length)
                result += s[index]
        }
    }
    return result
};

console.log(convert("PAYPALISHIRING", 3))