const caesar = function(string, shiftValue) {
  
  //Split letters of the alphabet into array elements
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  //Split letters of the string into array elements
  let strToEncrypt = string.split('');
  
  //Convert negative shift values to positive
  while (shiftValue < 0) {
    shiftValue += 26;
  }
  //Function to change position of each character and also retain case
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

  //Join characters to create encrypted string
  let encryptedString = strToEncrypt.map(character => encrypt(character)).join('');
  return encryptedString;

} 

module.exports = caesar
