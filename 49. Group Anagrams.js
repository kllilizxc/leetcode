/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}
    strs.forEach(str => {
        let chars = Array.from(str).sort()
        let index = chars.reduce((sum, cur, index) => sum + cur.charCodeAt(0) * Math.pow(100, index), 0)
        map[index] = map[index] || []
        map[index].push(str)
    })
    return Object.keys(map).reduce((result, key) => { return result.push(map[key]), result }, [])
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))