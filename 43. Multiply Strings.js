/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let results = []
    let result = ''
    for (let j = num2.length - 1, i = 0; j >= 0; j--, i++) {
        results[i] = ''
        let carry = 0
        for (let k = num1.length - 1; k >= 0; k--) {
            let mul = +num1[k] * +num2[j] + carry
            carry = parseInt(mul / 10)
            let remain = mul % 10
            results[i] = '' + remain + results[i]
        }
        if (carry > 0) results[i] = '' + carry + results[i]
    }
    let carry = 0
    for (let i = 0; i < results.length + results[results.length - 1].length - 1; i++) {
        let sum = carry
        for (let j = 0; j < results.length; j++) {
            sum +=  (i >= j && results[j].length - 1 >= i - j) ? +results[j][results[j].length - 1 - i + j] : 0
        }
        carry = parseInt(sum / 10)
        let remain = sum % 10
        result = '' + remain + result
    }
    if (carry > 0) result = '' + carry + result
    let i = 0
    while (i !== result.length - 1 && result[i] === '0') i++
    return result.slice(i)
};

console.log(multiply("123", "456"))