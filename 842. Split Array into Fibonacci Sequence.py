class Solution(object):
    def splitIntoFibonacci(self, S):
        """
        :type S: str
        :rtype: List[int]
        """

        def split(start, result):
            for end in range(start+1, len(S)+1):
                if end - start > 1 and S[start] == '0':
                    continue
                word = int(S[start:end])
                if len(result) >= 2 and word != result[-1]+result[-2]:
                    continue
                result.append(word)
                if len(result) > 2 and end == len(S):
                    return result
                if len(split(end, result)) > 0:
                    return result
                result.pop()
            return []
        return split(0, [])

solution = Solution()
print(solution.splitIntoFibonacci("123456579"))


539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511
539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511