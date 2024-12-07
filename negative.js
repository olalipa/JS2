function isNegative (number) {
    if (number > 0){
        number = number - (2*number);
    }
    console.log(number);
}

isNegative(2)