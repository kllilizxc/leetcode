/*
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (13.23%)
 * Total Accepted:    100.1K
 * Total Submissions: 756.5K
 * Testcase Example:  '"0"'
 *
 * Validate if a given string can be interpreted as a decimal number.
 * 
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 * 
 * Note: It is intended for the problem statement to be ambiguous. You should
 * gather all requirements up front before implementing one. However, here is a
 * list of characters that can be in a valid decimal number:
 * 
 * 
 * Numbers 0-9
 * Exponent - "e"
 * Positive/negative sign - "+"/"-"
 * Decimal point - "."
 * 
 * 
 * Of course, the context of these characters also matters in the input.
 * 
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button to reset your code definition.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let exIndex = -1
    let ptIndex = -1
    let started = false
    let lastSpaceIndex = -1
    let nextShouldBeNumber = false
    const isDigit = c => c >= '0' && c <= '9'
    const isNumber = c === '.' || c === '+' || c === '-' || isDigit(c)
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c !== ' ' && started && lastSpaceIndex === i - 1) return false
        if (nextShouldBeNumber && !(c >= '0' && c <= '9')) return false
        
        nextShouldBeNumber = false
        switch (c) {
            case 'e':
                if (!started || exIndex !== -1) return false
                exIndex = i
                nextShouldBeNumber = true
                break
            case '.':
                if (ptIndex !== -1 || exIndex !== -1) return false
                if ((i === 0 || !isNumber(s[i - 1])) && (i === s.length - 1 || !isNumber(s[i + 1]))) return false
                ptIndex = i
                started = true
                break
            case '+':
            case '-':
                if (i !== exIndex + 1) return false
                started = true
                break
            case ' ':
                lastSpaceIndex = i
                break
            default:
                if (c >= '0' && c <= '9') {
                    started = true
                } else {
                    return false
                }
        }
    }
    return started && !nextShouldBeNumber
};
