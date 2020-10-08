// Assignment code here
//Lenght

var characterAmount = window.prompt("Pick a lenght between 8 - 128");

while (characterAmount < 7 || characterAmount > 129) {

  window.alert('invalid');
  characterAmount = window.prompt("Pick a lenght between 8 - 128");
}
parseInt(characterAmount);
var generatePassword = " ";
//Lowercase letter
var lower = window.confirm("Would you like to include Lowercase?");
const lowercaseCharacterSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
if (lower === true) {
  var letter = (Math.floor(Math.random() * 25));
  parseInt(letter);
  console.log(letter);
  var newLetter = (lowercaseCharacterSet[letter]);
  console.log(newLetter)
  generatePassword = generatePassword + newLetter;
  (characterAmount = characterAmount - 1);
} else { }
//uppercase
var upper = window.confirm("Would you like to include Uppercase?");
var uppercaseCharacterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
if (lupper === true) {
  var letter = (Math.floor(Math.random() * 25));
  parseInt(letter);

  var newLetter = (uppercaseCharacterSet[letter]);
  generatePassword = generatePassword + newLetter;
  (characterAmount = characterAmount - 1);
} else { }
//Number
var number = window.confirm("Would you like to include Number?");
var nuberCharacterSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Symbol

var symbol = window.confirm("Would you like to include Symbol?");
var symbolCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "_", "+", ";", ":", "=", "|", "?"];

// Now that I all variables and lenght

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

while (characterAmount > 0) {
  placeValue = (Math.floor(Math.random() * 10));
  generatePassword = generatePassword + placeValue;
  (characterAmount = characterAmount - 1);
}
//var generatePassword = 
console.log(generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button "when button is pushed"
generateBtn.addEventListener("click", writePassword);