/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = 0
    let flag = 1
    let start = false
    for(i in str) {
        const c = str[i]
        if (!start) {
            if (c === ' ') continue
            else if (c === '+') {
                flag *= 1
                start = true
                continue
            } else if (c === '-') {
                flag *= -1
                start = true
                continue
            }
        }
        start = true
        if (!(c >= '0' && c <= '9')) return flag * result
        if (flag === 1 && result > (Math.pow(2, 31) - 1) / 10) return Math.pow(2, 31) - 1
        else if (flag === -1 && result > Math.pow(2, 31) / 10) return -Math.pow(2, 31)
        result *= 10
        result += parseInt(c)
    }
    return flag * result
};

console.log(myAtoi("+-2"))