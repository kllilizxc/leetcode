/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (!heights.length) return 0
    if (heights.length === 1) return heights[0]
    let minIndex, min = Infinity
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] < min) {
            minIndex = i
            min = heights[i]
        }
    }
    
    return Math.max(heights.length * min, largestRectangleArea(heights.slice(0, minIndex)), largestRectangleArea(heights.slice(minIndex + 1)))
};

console.log(largestRectangleArea([2,1,5,6,2,3]))