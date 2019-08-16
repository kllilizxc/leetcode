/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for (let i = 0; i < nums.length; i++)
        nums[i] = (i + nums[i] + nums.length) % nums.length
    console.log(nums)
    for (let i = 0; i < nums.length; i++)
        if (nums[i] >= 0 && nums[i] > i) {
            let cur = i
            while (Math.abs(nums[cur]) > cur) {
                if (nums[cur] > 0) nums[cur] *= -1
                else {
                    console.log(cur, nums[cur])
                    return true
                }
                cur = Math.abs(nums[cur])
            }
        } else if (nums[i] >= 0 && nums[i] < i) {
            let cur = i
            while (Math.abs(nums[cur]) < cur) {
                if (nums[cur] > 0) nums[cur] *= -1
                else {
                    console.log(cur, nums[cur])
                    return true
                }
                cur = Math.abs(nums[cur])
            }
        }
        
    return false
};

console.log(circularArrayLoop([2, -1, 1, -2, -2]))