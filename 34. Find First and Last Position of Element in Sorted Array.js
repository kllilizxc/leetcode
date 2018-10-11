/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = -1, end = -1
    let i, j
    for (i = 0, j = nums.length - 1; i < j - 1;) {
        let center = Math.floor((i + j) / 2)
        if (nums[center] >= target) j = center
        else i = center
    }
    if (nums[i] === target) start = i
    else if (nums[j] === target) start = j
    for (i = 0, j = nums.length - 1; i < j - 1;) {
        let center = Math.floor((i + j) / 2)
        if (nums[center] > target) j = center
        else i = center
    }
    if (nums[j] === target) end = j
    else if (nums[i] === target) end = i
    return [start, end]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))