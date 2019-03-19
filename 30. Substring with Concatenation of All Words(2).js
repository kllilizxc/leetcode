/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words || !words.length) return []
    const result = []
    const wordLength = words[0].length
    const getWord = i => s.substring(i, i + wordLength)
    let _words = words.slice(0)
    for (let i = 0; i < s.length; i += wordLength) {
        const word = getWord(i)
        if (!_words || !_words.length) 
            result.push(i - words.length * wordLength)
        const findWord = word => _words.find(w => w === word)
        if (!findWord(word)) {
            // not found
            if (!words.find(w => w === word)) {
                _words = words.slice(0)
            } else {
                // already used
                let lastPos = i - wordLength
                let repeatCount = words.filter(w => w === word).length
                while (repeatCount !== 0) {
                    if (getWord(lastPos))
                        repeatCount--
                    lastPos -= wordLength
                }
                _words = words.slice(0)
                i = lastPos 
            }
        } else {
            // found
            _words.splice(_words.findIndex(w => w === word), 1)
        }
    }
    return result
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]))
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]))