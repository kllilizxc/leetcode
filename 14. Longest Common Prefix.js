/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0, done = false
    const firstStr = strs[0]
    while (1) {
        const isCommon = strs.reduce((val, cur) => {
            if (cur.length <= i)
                return false
            else
                return val && cur[i] === firstStr[i]
        }, true)
        if (!isCommon) return firstStr.substring(0, i)
        i++
    }
};
console.log(longestCommonPrefix(["flower","flow","flight"]))