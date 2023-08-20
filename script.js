// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  var passwordLength = 8;
  var password = '';


for (var i = 0; i < passwordLength; i++){
  var random = Math.floor(Math.random() *charset.length);
  password += charset[random];
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
