// Write a function called countChar that behaves like countBs, except it
// takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to make
// use of this new function.

var countChar = function(stringWithCharacters, character) {
  var characters = 0;
  for (var i = 0; i <= stringWithCharacters.length; i++) {
    var currentLetter = stringWithCharacters.charAt(i);
    if (currentLetter === character) {
      characters = characters + 1;
    }
  }
  return(characters);
};

module.exports = countChar;