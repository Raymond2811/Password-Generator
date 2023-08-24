// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword(){
  let charset = ''

  const passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'))
  if (isNaN (passwordLength) || passwordLength < 8 || passwordLength >128 ) {
    alert('Please enter a valid number between 8 and 128');
    return '';
  }

  const useLowercase = confirm('Do you want to include lowercase letters?');
  if (useLowercase){
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  const useUpperCase = confirm('Do you want to include upcase?');
  if (useUpperCase){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  const useNumbers = confirm('Do you want to include numbers?');
  if (useNumbers){
    charset += '0123456789';
  }

  const useSpecialChars = confirm('Do you want to include special characters?');
  if (useSpecialChars) {
    charset += "!@#$%^&*()-_=+";
  }

  if (charset === ''){
    alert('You must select at least one character type!');
    return '';
  }


  let password = '';
  for (let i = 0; i < passwordLength; i++){
    let random = Math.floor(Math.random() *charset.length);
    password += charset[random];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
