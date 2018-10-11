/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let results = []
    
    const f = (last, target, c, minIndex) => {
        for (let i = 0; i < c.length; i++) {
            let result = last.slice(0)
            let candidates = c.slice(0)
            let candidate = candidates[i]
             if (i + 1 < minIndex) return
            if (target === candidate) {
                result.push(candidate)
                results.push(result)
            } else if (target > candidate) {
                result.push(candidate)
                candidates.splice(i, 1)
                f(result, target - candidate, candidates, i)
            }
        }
        return false
    }
    
    f([], target, candidates, -1)
    
    return results
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
 