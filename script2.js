// Assignment code here

var generatePassword = '';
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
// clear password?
function clearPassword() {
  var clearPassword = "**********";
  var clearPasswordText = document.querySelector("#password");
  clearPasswordText.value = clearPassword;
  generatePassword = '';
}
// Not happy with second button
// Write password to the #password input
// issue if a letter is but in doesn't work?
function writePassword() {
  document.querySelector("#password").value = "";
  //Lenght
  var characterAmount = window.prompt("Pick a lenght between 8 - 128", 8);
  parseInt(characterAmount);
  console.log(characterAmount)
  while (characterAmount < 8 || characterAmount > 128 || isNaN(characterAmount)) {
    window.alert('invalid');
    characterAmount = window.prompt("Pick a lenght between 8 - 128");
  }
  var trueCharacterAmount = characterAmount;
  parseInt(trueCharacterAmount);
  var lower = window.confirm("Would you like to include Lowercase?");
  var upper = window.confirm("Would you like to include Uppercase?");
  var number = window.confirm("Would you like to include Number?");
  var symbol = window.confirm("Would you like to include Symbol?");
  while (upper === false && lower === false && number === false && symbol === false) {
    window.alert("YOU MUST PICK AT LESS ONE OPTION!!");
    var lower = window.confirm("Would you like to include Lowercase?");
    var upper = window.confirm("Would you like to include Uppercase?");
    var number = window.confirm("Would you like to include Number?");
    var symbol = window.confirm("Would you like to include Symbol?");
  }
  while (characterAmount > 0) {
    //lowercase
    const lowercaseCharacterSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (lower === true) {
      var lowerLetter = (Math.floor(Math.random() * lowercaseCharacterSet.length));
      parseInt(lowerLetter);
      var newLowerLetter = (lowercaseCharacterSet[lowerLetter]);
      generatePassword = generatePassword + newLowerLetter;
      (characterAmount = characterAmount - 1);
    } else { }
    //uppercase
    var uppercaseCharacterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (upper === true) {
      var upLetter = (Math.floor(Math.random() * uppercaseCharacterSet.length));
      parseInt(upLetter);
      var newUpLetter = (uppercaseCharacterSet[upLetter]);
      generatePassword = generatePassword + newUpLetter;
      (characterAmount = characterAmount - 1);
    } else { }
    //Number
    if (number === true) {
      var numberCharacterSet = (Math.floor(Math.random() * 10));
      generatePassword = generatePassword + numberCharacterSet;
      (characterAmount = characterAmount - 1);
    } else { }
    //Symbol
    var symbolCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "_", "+", ";", ":", "=", "|", "?"];
    if (symbol === true) {
      var symbols = (Math.floor(Math.random() * symbolCharacterSet.length));
      parseInt(symbols);
      var newSymbol = (symbolCharacterSet[symbols]);
      generatePassword = generatePassword + newSymbol;
      (characterAmount = characterAmount - 1);
    } else { }
  }
  // Now that I all variables and lenght
  // This to shuffle up the order of the password
  String.prototype.shuffle = function () {
    var a = this.split(""),
      n = a.length;
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join(""); {
    }
  }
  generatePassword = generatePassword.substr(0, [trueCharacterAmount]);
  //This it to call to 
  generatePassword = generatePassword.shuffle()
  console.log(generatePassword);
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  window.alert("Your password will be copy to your clipboard.")
}
// Add event listener to generate button "when button is pushed"
generateBtn.addEventListener("click", writePassword,);
clearBtn.addEventListener("click", clearPassword,);