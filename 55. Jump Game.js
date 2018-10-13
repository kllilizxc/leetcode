/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let min = 0, max = 0
    while (min <= max) {
        let nextMin = max + 1, nextMax = max
        for (let i = min; i <= max; i++) {
            if (i + nums[i] >= nums.length - 1) return true
            nextMax = Math.max(nextMax, i + nums[i])
        }
        min = nextMin
        max = nextMax
    }
    return false
};

console.log(canJump([3,2,1,0,4]))