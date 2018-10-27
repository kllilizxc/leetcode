/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    let pivot = Math.floor(nums.length / 2) - 1
    let leftSum = 0
    let leftMax = -Infinity
    for (let i = pivot; i >= 0; i--) {
        leftSum += nums[i]
        leftMax = Math.max(leftMax, leftSum)
    }
    let rightSum = 0
    let rightMax = -Infinity
    for (let i = pivot + 1; i < nums.length; i++) {
        rightSum += nums[i]
        rightMax = Math.max(rightMax, rightSum)
    }
    let max = leftMax + rightMax
    return Math.max(max, maxSubArray(nums.slice(0, pivot + 1)), maxSubArray(nums.slice(pivot + 1)))
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))