const caesar = function(string, shiftValue) {
  
  const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ];

  //const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(); NO  
  let arrayOfLetters = string.split('');

  function encrypt(letter) {
    
    let shift = shiftValue;

    if (alphabet.includes(letter.toUpperCase())) {
      let position = alphabet.indexOf(letter.toUpperCase());
      let newPosition = (position + shift) % 26;
      return alphabet[newPosition];

    } else {
      return letter;
    }
  }

  let encryptedString = arrayOfLetters.map(letter => encrypt(letter)).join('');
  return encryptedString;

}

module.exports = caesar
