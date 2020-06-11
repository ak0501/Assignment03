// psedo-code
// Press the generate password button

var length = prompt("enter the password length")
console.log(lenght)
//If the password is less than 8 or greater than 128 alert
if ((length < 8) || (length > 128)) {
  alert("password must be between 8 and 128 char long");
}

//prompt if they want upper case letters

var upper = confirm("Do you want uppercase letters?");



//prompt if they want lowercase letters
var lower = confirm("lowercase letter?");



//prompt if they want numeric values
var numeric = confirm("Do you want numbers?");

//prompt if they want special characters
var char = confirm("Do you want special characters?")


//Validate atleast one datatype is selected

if ((upper === false) && (lower === false) && (numeric === false) && (char === false)) {
  alert("please select at least one charactertype");
}

//Define the charactersets

const charset_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charset_lower = "abcdefghijklmnopqrstuvwxyz";
const charset_number = "0123456789";
const charset_char = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

generateBtn.addEventListener("click", writePassword);

const password = generatePassword(length, charset_char, charset_number, charset_lower, charset_upper)







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);