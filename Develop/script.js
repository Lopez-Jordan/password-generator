
var generateBtn = document.querySelector("#generate");


//Function for finding length
function findLength(){
  var responseLength = prompt("What length do you want the password to be (8 to 128 characters)");
  if (isNaN(responseLength) || responseLength < 8 || responseLength > 128){
    while (isNaN(responseLength) || responseLength < 8 || responseLength > 128){
      alert("Invalid input... You choose a number in the correct range!")
      responseLength = prompt("What length do you want the password to be (8 to 128 characters)");
    }
  }
  return responseLength;
}

//Function for seeing if they want lower case
function findLower(){
  var wantLower = prompt("Would you like characters that are lowercase? Type 'yes' or 'no'");
  if (wantLower != "yes" || wantLower != "no"){
    while (wantLower != "yes" || wantLower != "no"){
      alert("Invalid input...You must choose 'yes' or 'no'");
      wantLower = prompt("Would you like characters that are lowercase? Type 'yes' or 'no'");
    }
  }
  if (wantLower == "yes"){
    return true;
  }
  else{
    return false;
  }
}

//Function for seeing if they want upper case

//Function for seeing if they want numbers in the password

//Function for seeing if they want special characters in the password


// Write password to the #password input
function writePassword() {
  var length = findLength(); //num in range (8-128)
  var lower = findLower(); // boolean value
  var upper = findUpper(); //boolean value
  var numeric = findNumeric(); //boolean value
  var special = findSpecial(); //boolean value


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);