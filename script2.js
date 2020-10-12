// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = "";
  var generatePassword = '';
  //Lenght
  var characterAmount = window.prompt("Pick a lenght between 8 - 128", 8);
  while (characterAmount < 8 || characterAmount > 128 || isNaN(characterAmount)) {
    window.alert('invalid');
    characterAmount = window.prompt("Pick a lenght between 8 - 128");
  }
  var trueCharacterAmount = characterAmount;
  //Pick variables
  var lower = window.confirm("Click OK if you like to include Lowercase?");
  var upper = window.confirm("WClick OK ifyou like to include Uppercase?");
  var number = window.confirm("Click OK if you like to include Number?");
  var symbol = window.confirm("Click OK if you like to include Symbol?");
  while (upper === false && lower === false && number === false && symbol === false) {
    window.alert("YOU MUST PICK AT LESS ONE OPTION!!");
    lower = window.confirm("Click OK if you like to include Lowercase?");
    upper = window.confirm("Click OK if you like to include Uppercase?");
    number = window.confirm("Click OK if you like to include Number?");
    symbol = window.confirm("Click OK if you like to include Symbol?");
  }
  // Now that I all variables and lenght
  while (characterAmount > 0) {
    //lowercase
    var lowercaseCharacterSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (lower === true) {
      var lowerLetter = (Math.floor(Math.random() * lowercaseCharacterSet.length));
      var newLowerLetter = (lowercaseCharacterSet[lowerLetter]);
      generatePassword = generatePassword + newLowerLetter;
      characterAmount = characterAmount - 1;
    }
    //uppercase
    var uppercaseCharacterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (upper === true) {
      var upLetter = (Math.floor(Math.random() * uppercaseCharacterSet.length));
      var newUpLetter = (uppercaseCharacterSet[upLetter]);
      generatePassword = generatePassword + newUpLetter;
      characterAmount = characterAmount - 1;
    }
    //Number
    if (number === true) {
      var numberCharacterSet = (Math.floor(Math.random() * 10));
      generatePassword = generatePassword + numberCharacterSet;
      characterAmount = characterAmount - 1;
    }
    //Symbol
    var symbolCharacterSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "_", "+", ";", ":", "=", "|", "?"];
    if (symbol === true) {
      var symbols = (Math.floor(Math.random() * symbolCharacterSet.length));
      var newSymbol = (symbolCharacterSet[symbols]);
      generatePassword = generatePassword + newSymbol;
      characterAmount = characterAmount - 1;
    }
  }
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
  //  did to copy to clipboard?
}
// Add event listener to generate button "when button is pushed"
generateBtn.addEventListener("click", writePassword,);
