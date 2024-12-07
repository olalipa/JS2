function centuryFromYear(year) {
    let century = ((year-1)/100) + 1
    console.log(Math.trunc(century));
}

centuryFromYear(1410);