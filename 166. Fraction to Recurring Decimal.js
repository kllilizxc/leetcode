/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    const remainderMap = {}
    let result = ''
    let remainder = 0
    let first = true
    let repeatStart, repeatEnd
    while (numerator !== 0) {
        result += Math.floor(numerator / denominator)
        remainder = numerator % denominator

        if (remainder !== 0) {
            if (remainderMap[numerator] !== undefined) {
                repeatStart = remainderMap[numerator]
                repeatEnd = result.length - 1
                break
            } else {
                remainderMap[numerator] = result.length - 1
            }
        }
        numerator = remainder * 10
        if (first && remainder !== 0) {
            first = false
            result += '.'
        }
    }
    if (repeatStart !== undefined && repeatEnd !== undefined) {
        result = result.slice(0, repeatStart) + '(' + result.slice(repeatStart, repeatEnd) + ')'
    }
    return result
};

console.log(fractionToDecimal(2, 3))