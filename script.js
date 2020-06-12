// // /Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// psedo-code

// Press the generate password button to ask the length of the password

var pwLength = prompt("enter the password length")
console.log(pwLength)
//If the password is less than 8 or greater than 128 alert
if ((pwLength < 8) || (pwLength > 128)) {
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
} else {
  function passwordGenerator(length);


}



//Define the charactersets
const listA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var n =listA.length;
const listB = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var o = listB.length;
const listC = "0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var P = listC.length;
const char = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var q = char.length;

//to generate password
function generatePassword() {
  //scenerios
  // 1. if the user selects one of the 4 types of charset generate password (n*charset); where n is the input from the user.
  var password = '';
  if (upper === True && lower === True && numeric === True && char === True) {
    for (let i = 0; i < pwdLength; i++) {
      password += charset_number.charAt(Math.floor(Math.random() * n));
    }
    return password;
    console.log(password);

  }



  // 2. If the user selects two of the 4 types of charset, generate password (n*(charset1+charset2))


  //3.If the user selsect thres of the 4 types of charset, generate password (n*(charset1+charset2+charset3))


  //4. If all selected , generate password (n*(charset1+charset2+charset3+charset4))

