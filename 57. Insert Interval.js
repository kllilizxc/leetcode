/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
 }

var insert = function(intervals, newInterval) {
    let i = 0
    result = []
    while (i < intervals.length && intervals[i].end < newInterval.start) i++
    if (i === intervals.length || intervals[i].start > newInterval.end) {
        intervals.splice(i, 0, newInterval)
        return intervals
    } else {
        let start = Math.min(newInterval.start, intervals[i].start)
        let count = 0
        while (i + count < intervals.length && intervals[i + count].start <= newInterval.end) count++
        let end = newInterval.end
        if (i + count < intervals.length) end = Math.max(end, intervals[i + count - 1].end)
        intervals.splice(i, count, new Interval(start, end)
        return intervals
    }    
};

let intervals = [
    new Interval(1, 5)
]
let newInterval = new Interval(2, 7)
console.log(insert(intervals, newInterval))