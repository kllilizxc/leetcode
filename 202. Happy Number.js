/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map = {}
    while (n !== 1) {
        if (map[n]) return false
        map[n] = true
        let result = 0
        while (n > 0) {
            result += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }
        n = result
    }
    return true
};

console.log(isHappy(19))