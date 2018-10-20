/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let line = []
    let lineLength = 0
    let result = []
    words.forEach(word => {
        if (word.length + lineLength + line.length > maxWidth) {
            let remaining = maxWidth - lineLength
            let baseSpace = Math.floor(remaining / (line.length - 1))
            let modLength = remaining % (line.length - 1)
            let str = ''
            for (let i = 0, j = 0; i < line.length; i++, j++) {
                if (i === 0) str += line[i]
                else {
                    for (let k = 0; k < (j <= modLength ? baseSpace + 1 : baseSpace); k++)
                        str += ' '
                    str += line[i]
                }
            }
            if (str.length < maxWidth) {
                let l = maxWidth - str.length
                for (let i = 0; i < l; i++) str += ' '
            }
            result.push(str)
            line = []
            lineLength = 0
        }
        line.push(word)
        lineLength += word.length
    })
    if (lineLength) {
        let str = line.join(' ')
        let l = maxWidth - str.length
        for (let i = 0; i < l; i++)
            str += ' '
        result.push(str)
    }
    return result
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))