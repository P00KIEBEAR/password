// Assignment code here
var shuffledWord = '';
var generatePassword = '';
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  //Lenght

  var characterAmount = window.prompt("Pick a lenght between 8 - 128");

  while (characterAmount < 7 || characterAmount > 129) {
    window.alert('invalid');
    characterAmount = window.prompt("Pick a lenght between 8 - 128");
  }
  parseInt(characterAmount);
  //uppercase
  var upper = window.confirm("Would you like to include Uppercase?");
  var uppercaseCharacterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  if (upper === true) {
    var upLetter = (Math.floor(Math.random() * uppercaseCharacterSet.length));
    parseInt(upLetter);

    var newUpLetter = (uppercaseCharacterSet[upLetter]);
    generatePassword = generatePassword + newUpLetter;
    (characterAmount = characterAmount - 1);
  } else { }
  //Number
  var number = window.confirm("Would you like to include Number?");
  if (number === true) {
    var numberCharacterSet = (Math.floor(Math.random() * 10));
    generatePassword = generatePassword + numberCharacterSet;
    (characterAmount = characterAmount - 1);
  } else { }
  //Symbol
  var symbol = window.confirm("Would you like to include Symbol?");
  var symbolCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "_", "+", ";", ":", "=", "|", "?"];
  console.log(symbolCharacterSet);
  if (symbol === true) {
    var symbols = (Math.floor(Math.random() * symbolCharacterSet.length));
    parseInt(symbols);
    var newSymbol = (symbolCharacterSet[symbols]);

    generatePassword = generatePassword + newSymbol;
    (characterAmount = characterAmount - 1);
  } else { }
  // Now that I all variables and lenght

  // Get references to the #generate element


  while (characterAmount > 0) {
    const lowercaseCharacterSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = (Math.floor(Math.random() * uppercaseCharacterSet.length));
    parseInt(letter);
    var newLetter = (lowercaseCharacterSet[letter]);
    generatePassword = generatePassword + newLetter;
    (characterAmount = characterAmount - 1);

  }
  // generatePassword = generatePassword.split('');
  /* NOTE: Got this shuffle algorithm from stackoverflow
 https://stackoverflow.com/a/6274381
 function shuffle(a) {
 var j, x, i;
 for (i = a.length - 1; i > 0; i--) {
   j = Math.floor(Math.random() * (i + 1));
   x = a[i];
   a[i] = a[j];
   a[j] = x;
 }
 return a;
*/
  generatePassword
  function shuffelWord(word) {
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;

  }
  console.log(generatePassword);
  //generatePassword.toString
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button "when button is pushed"
generateBtn.addEventListener("click", writePassword,);
