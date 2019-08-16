class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
        times = []
        results = []
        time = 0
        result = ''
        for c in s:
            if c.isdigit():
                time *= 10
                time += int(c)
            elif c.isalpha():
                result += c
            elif c == '[':
                results.append(result)
                result = ''
                times.append(time)
                time = 0
            elif c == ']':
                _time = times.pop()
                _result = ''
                for i in range(_time):
                    _result += result
                result = results.pop() + _result
        return result

solution = Solution()
print(solution.decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"))
print(solution.decodeString("3[a]2[bc]"))
print(solution.decodeString("3[a2[c]]"))
print(solution.decodeString("2[abc]3[cd]ef"))
