/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (27.88%)
 * Total Accepted:    173.2K
 * Total Submissions: 621.3K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0]
    let _min = max, _max = max
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = _max
            _max = _min
            _min = temp
        }
        _max = Math.max(nums[i], _max * nums[i])
        _min = Math.min(nums[i], _min * nums[i])

        max = Math.max(max, _max)
    }
    return max
};
