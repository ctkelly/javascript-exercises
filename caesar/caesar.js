const caesar = function(string, shiftValue) {
  
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

} 






/*function caesar(string, shiftValue) {
  
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  let strToEncrypt = string.split('');

  function encrypt(character) {
    
    let shiftValue = shiftValue;

    if (shiftValue < 0 && alphabet.includes(character.toUpperCase())) {
      let position = alphabet.indexOf(character.toUpperCase());
      let newPosition = 26 + (shiftValue % 26);
      return alphabet[newPosition];

    } else {
      return character;
    }
  }
  let encryptedString = strToEncrypt.map(character => encrypt(character)).join('');
  return encryptedString;  
}*/ 

module.exports = caesar
