/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.sort((a, b) => a - b)
    nums = nums.filter((i, index) => !(index > 0 && i === nums[index - 1]))
    let i = 1, index = 0
    while (index < nums.length && nums[index] <= 0) index++
    while (index < nums.length && nums[index] === i) {
        i++
        index++
    }
    return i
};

console.log(firstMissingPositive([-1,4,2,1,9,10]))