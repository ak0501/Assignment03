function generatePassword(
  length,
  use_upper,
  use_lower,
  use_number,
  use_sp_chars
) {
  if (length < 8 || length > 128) {
    alert("password must be between 8 and 128 char long");
  } else {
    if (use_upper || use_lower || use_number || use_sp_chars) {
      var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      var numbers = "1234567890";
      var specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-="';
      var charactersUsed = "";
      var password = "";
      if (use_upper) charactersUsed += uppercaseLetters;
      if (use_lower) charactersUsed += lowercaseChars;
      if (use_number) charactersUsed += numbers;
      if (use_sp_chars) charactersUsed += specialChars;
      for (var i = 0; i < length; i++) {
        password += charactersUsed.charAt(
          Math.floor(Math.random() * charactersUsed.length)
        );
      }
      return password;
    } else {
      alert("please select at least one charactertype");
    }
  }
}
//Call the function
function writePassword(length, use_upper, use_lower, use_number, use_sp_chars) {
  // store the return variable from the function
  var password = generatePassword(
    length,
    use_upper,
    use_lower,
    use_number,
    use_sp_chars
  );
  // Paste the return value to the text box in password field
  document.getElementById("password").innerHTML = password;
}
// Press the generate password button to ask the length of the password
document.getElementById("generate").addEventListener("click", function () {
  var numLength;
  numLength = prompt("enter the password length");
  if (numLength === null) {
    return;
  } else if (numLength === "") {
    prompt("please enter your password length");
    return numLength;
  } else if (numLength !== null) {
    //prompt if they want upper case letters
    var use_upper = confirm("Do you want uppercase letters?");
    //prompt if they want lowercase letters
    var use_lower = confirm("lowercase letter?");
    //prompt if they want numeric values
    var use_number = confirm("Do you want numbers?");
    //prompt if they want special characters
    var use_sp_chars = confirm("Do you want special characters?");
    writePassword(length, use_upper, use_lower, use_number, use_sp_chars);
  }
});
