import collections


class Solution:
    def findItinerary(self, tickets):
        target_len = len(tickets) + 2
        d = collections.defaultdict(list)
        n = collections.defaultdict(int)
        for fro, to in tickets:
            d[fro].append(to)
            n[to] += 1
        n["JFK"] += 1
        for key in d:
            d[key] = sorted(d[key])

        def dfs(node, seen, path, length):
            if seen[node] >= n[node]:
                return False
            
            if len(path) > 0:
                d[path[-1]].remove(node)
            path.append(node)
        
            seen[node] += 1
            length += 1
            if length == target_len:
                return True
            for to in d[node]:
                if dfs(to, seen, path, length):
                    return True
            path.pop()
            seen[node] -= 1
            if len(path) > 0:
                d[path[-1]].append(node)
            return False
        path = []
        seen = collections.defaultdict(int)
        dfs("JFK", seen, path, 1)
        return path


solution = Solution()
print(solution.findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]))
        
