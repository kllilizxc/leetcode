/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = []
    const f = (arr, start, end, num) => {
        arr = arr.slice(0)
        if (start >= s.length || end > s.length)
            return
        if (s[start] === '0' && end !== start + 1)
            return
        let n = +s.substring(start, end)
        if (n > 255) return
        arr.push(n)
        if (!num) {
            if (end === s.length) {
                result.push(arr.join('.'))
            }
            return
        } else {
            num--
        }
        
        f(arr, end, end + 1, num)
        f(arr, end, end + 2, num)
        f(arr, end, end + 3, num)
    }
    f([], 0, 1, 3)
    f([], 0, 2, 3)
    f([], 0, 3, 3)

    return result
};

console.log(restoreIpAddresses("25525511135"))