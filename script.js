// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var charset = ''

  var passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'))
  if (isNaN (passwordLength) || passwordLength < 8 || passwordLength >128 ) {
    alert('Please enter a valid number between 8 and 128');
    return '';
  }

  var password = '';
  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() *charset.length);
    password += charset[random];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
