/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 *
 * https://leetcode.com/problems/reconstruct-itinerary/description/
 *
 * algorithms
 * Medium (30.13%)
 * Total Accepted:    61.3K
 * Total Submissions: 203.4K
 * Testcase Example:  '[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'
 *
 * Given a list of airline tickets represented by pairs of departure and
 * arrival airports [from, to], reconstruct the itinerary in order. All of the
 * tickets belong to a man who departs from JFK. Thus, the itinerary must begin
 * with JFK.
 * 
 * Note:
 * 
 * 
 * If there are multiple valid itineraries, you should return the itinerary
 * that has the smallest lexical order when read as a single string. For
 * example, the itinerary ["JFK", "LGA"] has a smaller lexical order than
 * ["JFK", "LGB"].
 * All airports are represented by three capital letters (IATA code).
 * You may assume all tickets form at least one valid itinerary.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 * Explanation: Another possible reconstruction is
 * ["JFK","SFO","ATL","JFK","ATL","SFO"].
 * But it is larger in lexical order.
 * 
 * 
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = {}
    tickets.forEach(([from, to]) => {
        if (!map[from]) map[from] = []
        map[from].push(to)
    })
    const result = []
    let cur = 'JFK'
    while (cur && map[cur] && map[cur].length) {
        result.push(cur)
        const remain = map[cur].filter(pos => {
            return map[pos] && map[pos].length > 0
        })
        console.log(remain)
        if (remain && remain.length) {
            let next = remain.sort()[0]
            map[cur].splice(map[cur].findIndex(i => i === next), 1)
            cur = next
        } else {
            cur = map[cur][0]
        }
    }
    result.push(cur)
    return result
};
