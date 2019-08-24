import collections
class Solution:
    def networkDelayTime(self, times, N, K):
        stack = [K]
        d = collections.defaultdict(set)
        for u, v, w in times:
            d[u].add((v, w))
        val = [600001] * N
        seen = {}
        val[K-1] = 0
        seen = set()
        while stack:
            node = stack.pop()
            seen.add(node)
            for v, w in d[node]:
                if val[v-1] <= val[node-1] + w:
                    continue
                val[v-1] = val[node-1] + w
                stack.append(v)
        print (val)
        return max(val) if len(seen) == N else -1

sol = Solution()
print(sol.networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1))
