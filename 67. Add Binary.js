/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let cap = 0
    let result = ''
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = +(a[i] || 0) + +(b[j] || 0) + cap
        cap = Math.floor(sum / 2)
        sum = sum % 2
        result = '' + sum + result
    }
    if (cap > 0)
        result = '' + cap + result
    return result
};

console.log(addBinary('11', '1'))