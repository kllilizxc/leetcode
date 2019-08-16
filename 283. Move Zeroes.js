/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0, end = nums.length - 1, anchor = 0
    let zeroCount = 0
    
    while (end >= 0 && nums[end] === 0) {
        end--
    }
    while (anchor <= end) {
        while (anchor <= end && nums[anchor] === 0) {
            anchor++
            zeroCount++
        }
        while (anchor <= end && nums[anchor] !== 0) {
            nums[start++] = nums[anchor++]
        }
    }
    console.log(nums)
    console.log(end, zeroCount)
    for (let i = 0; i < zeroCount; i++) {
        nums[end - i] = 0
    }
};

let arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
console.log(arr)