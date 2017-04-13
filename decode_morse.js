decodeMorse = function(morseCode){
  return morseCode.trim().replace(/   /g,' $ ').split(' ')
                  .map(el => (el in MORSE_CODE) ? MORSE_CODE[el] : el)
                  .join('').replace(/[$]/g,' ');
}

/*
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
*/

/*
decodeMorse = function(morseCode){
  return morseCode.trim().split(/\s{3}/).map(function (word) {
    return word.split(/\s/).map(function (char) { return MORSE_CODE[char]; }).join('');
  }).join(' ');
}
*/