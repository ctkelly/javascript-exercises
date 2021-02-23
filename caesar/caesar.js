const caesar = function(string, shiftValue) {
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let strToEncrypt = string.split('');
  
  while (shiftValue < 0) {
    shiftValue += 26;
  }

  function encrypt(character) {

    if (alphabet.includes(character.toLowerCase())) {
      let position = alphabet.indexOf(character.toLowerCase());
      let newPosition = (position + shiftValue) % 26;
      if (character === character.toUpperCase()) {
        return alphabet[newPosition].toUpperCase();
      }
      return alphabet[newPosition];
    }
    return character;
  
  }

  let encryptedString = strToEncrypt.map(character => encrypt(character)).join('');
  return encryptedString;

} 



/*const caesar = function(string, shiftValue) {
  
  const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ];

  //const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(); NO, USE THE OTHER ONE  

  let strToEncrypt = string.split('');
  
  while (shiftValue < 0) {
    shiftValue += 26;
  }

  function encrypt(character) {

    if (alphabet.includes(character.toUpperCase())) {
      let position = alphabet.indexOf(character.toUpperCase());
      let newPosition = (position + shiftValue) % 26;
      return alphabet[newPosition];

    } else {
      return character;
    }
  }

  let encryptedString = strToEncrypt.map(character => encrypt(character)).join('');
  return encryptedString;

}*/ 



module.exports = caesar
