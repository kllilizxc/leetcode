/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordsMap = {}
    const findWord = (index, wordsSet) => { 
        for (let j = 0; j < wordsSet.length; j++) {
            const word = wordsSet[j]
            if (word === s.substr(index, word.length))
                return word
        }
        return null
    }
    const find = (index, originWords) => {
        if (index >= s.length) return false
        let word = wordsMap[index] || findWord(index, originWords)
        if (!word) return false
        wordsMap[index] = word
        const remainingWords = originWords.slice(0)
        remainingWords.splice(remainingWords.findIndex(w => w === word), 1)
        if (!remainingWords || remainingWords.length === 0)
            return true
        if (remainingWords.reduce((result, w) => result || find(index + word.length, remainingWords), false))
            return true
        return false
    }
    let results = []
    for (let i = 0; i < s.length; i++) {
        if (find(i, words))
            results.push(i)
    }
    return results
};

const s = "wordgoodgoodgoodbestword"
const words = ["word","good","best","word"]
console.log(findSubstring(s, words))