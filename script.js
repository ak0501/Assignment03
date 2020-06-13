// // /Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// psedo-code

// Press the generate password button to ask the length of the password
document.getElementById("generate").addEventListener("click", function() {

  prompt("enter the password length")
});






//prompt if they want upper case letters
var upper = confirm("Do you want uppercase letters?");
//prompt if they want lowercase letters
var lower = confirm("lowercase letter?");
//prompt if they want numeric values
var numeric = confirm("Do you want numbers?");
//prompt if they want special characters
var char = confirm("Do you want special characters?")
//Validate atleast one datatype is selected
// If the user selects two of the 4 types of charset, generate password (n*(charset1+charset2))


//If the user selsect thres of the 4 types of charset, generate password (n*(charset1+charset2+charset3))


//If all selected , generate password (n*(charset1+charset2+charset3+charset4))

function generatePassword(length, use_upper, use_lower, use_number, use_sp_chars) {
  if (length < 8 || length > 128) {
    alert("password must be between 8 and 128 char long");
  } else {
    if (use_upper || use_lower || use_number || use_sp_chars) {
      var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      var numbers = '1234567890';
      var specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-="';

      var charactersUsed = '';
      var password = '';
      if (use_upper) charactersUsed += uppercaseLetters;
      if (use_lower) charactersUsed += lowercaseChars;
      if (use_number) charactersUsed += numbers;
      if (use_sp_chars) charactersUsed += specialChars;

      for (var i = 0; i < length; i++) {
        password += charactersUsed.charAt(Math.floor(Math.random() * charactersUsed.length));
      }
      return password;
    } else {
      alert("please select at least one charactertype");
    }
  }
}



// Tests
// length:10, uppercase:yes, lowercase:no, number:no, special:no
var pass = generatePassword(10, true, false, false, false);
alert("Sample password with 10 chars and only uppercase is: " + pass);

// length:8, uppercase:yes, lowercase:yes, number:no, special:no
var pass = generatePassword(8, true, true, false, false);
alert("Sample password with 8 chars and only uppercase and lowecase is: " + pass);

// length:12, uppercase:yes, lowercase:yes, number:yes, special:no
var pass = generatePassword(12, true, true, true, false);
alert("Sample password with 12 chars and only uppercase, lowercase and number is: " + pass);

// length:19, uppercase:yes, lowercase:yes, number:yes, special:yes
var pass = generatePassword(19, true, true, true, true);
alert("Sample password with 19 chars and all uppercase, lowercase, number and special chars is: " + pass);

// length:5, uppercase:yes, lowercase:no, number:no, special:no
// this will alert length validation error!
console.log(generatePassword(5, true, false, false, false));