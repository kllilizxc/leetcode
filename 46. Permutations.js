var permute = function (nums) {
    let result = [[]]

    f(result, 0, nums)
    return result

};

const f = (result, index, nums) => {
    const last = result[index]
    for (let i = 1; i < nums.length; i++) {
        result.splice(index + i, 0, last.slice(0))
    }
    for (let i = 0; i < nums.length; i++) {
        result[index + i] = result[index + i] || []
        result[index + i].push(nums[i])
    }
    if (nums.length === 1) return 1
    let factor = 1
    for (let i = 0; i < nums.length; i++) {
        let newNums = nums.slice(0)
        newNums.splice(i, 1)
        if (newNums.length === 1) result[index + i].push(newNums[0])
        else {
            let temp = f(result, index + i * factor, newNums)
            if (i === 0) factor *= temp
        }
    }
    return factor * nums.length
}

const o = permute([5, 4, 6, 2])
console.log(o)