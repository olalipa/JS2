function removeFirstAndLastCharacter (word) {
    if (word.length >= 2) {
        word = word.substring(1, word.length-1);
    }
    console.log(word);
}

removeFirstAndLastCharacter('123456');