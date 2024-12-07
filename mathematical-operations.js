function basicMathematicalOperations (operator, value1, value2) {
    if (operator === '+') {
        return value1 + value2;
    }
    else if (operator === '-') {
        return value1 - value2;
    }
    else if (operator === '*') {
        return value1 * value2;
    }
    else if (operator === '/') {
        return value1 / value2;
    }
}

console.log(basicMathematicalOperations('+', 10, 12))