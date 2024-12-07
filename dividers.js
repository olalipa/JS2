function ifDivisibleBy (numberToCheck, firstDivider, secondDivider) {
    if (numberToCheck % firstDivider === 0 && numberToCheck % secondDivider === 0) {
        console.log("provided number is divided by two dividers")
    }
    else console.log("provided number is NOT divided by two dividers")
}

ifDivisibleBy (12,3,4);