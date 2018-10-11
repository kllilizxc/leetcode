/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let map = {}
    let result = []
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++) {
            let vi = nums[i], vj = nums[j]
            map[vi + vj] = map[vi + vj] || []
            map[vi + vj].push([i, j])
        }
    for (let k = 0; k < nums.length; k++) {
        let data = map[-nums[k]]
        if (!data) continue
        data.forEach(indices => {
            if (indices.includes(k)) return
            result.push(indices.concat(k).sort().map(i => nums[i]))
        })
    }
    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))