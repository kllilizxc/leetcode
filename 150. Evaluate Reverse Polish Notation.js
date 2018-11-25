/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    while (tokens.length) {
        const token = tokens.shift()
        if (token === '+' || token == '-' || token === '*' || token === '/') {
            let b = stack.pop()
            let a = stack.pop()
            switch (token) {
                case '+':
                    stack.push(+a + +b)
                    break
                case '-':
                    stack.push(+a - +b)
                    break
                case '*':
                    stack.push(+a * +b)
                    break
                case '/':
                    stack.push(Math.trunc(+a / +b))
                    break
            }
        } else {
            stack.push(token)
        }
    }
    return +stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))