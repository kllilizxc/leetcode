/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let i = 0, j = 0
    for (; i < s.length && j < p.length;) {
        if (p[j] === '*') {
            while (j < p.length && p[j + 1] === '*') j++
            return isMatch(s.slice(i), p.slice(j + 1)) || isMatch(s.slice(i + 1), p.slice(j))
        } else if (p[j] === '?') {
            i++
            j++
        } else {
            if (p[j] === s[i]) {
                i++
                j++
            } else {
                return false
            }
        }
    }
    while (j < p.length && p[j] === '*') j++
    return i === s.length && j === p.length
};

const s = "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb"
const p = "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"
console.log(isMatch(s, p))