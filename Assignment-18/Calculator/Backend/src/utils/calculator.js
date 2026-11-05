
function calculateExpression(expression) {
    if (typeof expression !== "string" || !expression.trim()) {
        throw new Error("Expression is required")
    }

    if (expression.length > 200) {
        throw new Error("Expression is too long")
    }

    const tokens = expression.match(
        /\d+(?:\.\d+)?|[()+\-*/]|\s+/g
    )

    if (!tokens || tokens.join("").replace(/\s/g, "") !== expression.replace(/\s/g, "")) {
        throw new Error("Invalid characters in expression")
    }

    const input = tokens.filter(token => !/^\s+$/.test(token))
    let position = 0

    function parseExpression() {
        let value = parseTerm()

        while (input[position] === "+" || input[position] === "-") {
            const operator = input[position++]
            const right = parseTerm()

            value = operator === "+"
                ? value + right
                : value - right
        }

        return value
    }

    function parseTerm() {
        let value = parseFactor()

        while (input[position] === "*" || input[position] === "/") {
            const operator = input[position++]
            const right = parseFactor()

            if (operator === "/" && right === 0) {
                throw new Error("Division by zero is not allowed")
            }

            value = operator === "*"
                ? value * right
                : value / right
        }

        return value
    }

    function parseFactor() {
        if (input[position] === "+") {
            position++
            return parseFactor()
        }

        if (input[position] === "-") {
            position++
            return -parseFactor()
        }

        if (input[position] === "(") {
            position++
            const value = parseExpression()

            if (input[position] !== ")") {
                throw new Error("Missing closing bracket")
            }

            position++
            return value
        }

        const token = input[position++]

        if (!token || !/^\d+(?:\.\d+)?$/.test(token)) {
            throw new Error("Invalid expression")
        }

        return Number(token)
    }

    const result = parseExpression()

    if (position !== input.length || !Number.isFinite(result)) {
        throw new Error("Invalid expression")
    }

    return Number(result.toPrecision(12))
}

module.exports = calculateExpression;
