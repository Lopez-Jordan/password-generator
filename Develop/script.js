//Function for finding length
function findLength(){
  var responseLength = prompt("What length do you want the password to be (8 to 128 characters)");
  if (isNaN(responseLength) || responseLength < 8 || responseLength > 128){
    while (isNaN(responseLength) || responseLength < 8 || responseLength > 128){
      alert("Invalid input... You must choose a number in the correct range!")
      responseLength = prompt("What length do you want the password to be (8 to 128 characters)");
    }
  }
  return responseLength;
}

//Function for seeing if they want lower case
function findLower(){
  var wantLower = prompt("Would you like characters that are lowercase? Type 'yes' or 'no'");
  if (wantLower != "yes" || wantLower != "no"){
    while (wantLower != "yes" && wantLower != "no"){
      alert("Invalid input...You must choose 'yes' or 'no'");
      wantLower = prompt("Would you like characters that are lowercase? Type 'yes' or 'no'");
    }
  }
  if (wantLower === 'yes'){
    return true;
  }
  else{
    return false;
  }
}
//Function for seeing if they want upper case
function findUpper(){
  var wantUpper = prompt("Would you like characters that are UPPERcase? Type 'yes' or 'no'");
  if (wantUpper != "yes" || wantUpper != "no"){
    while (wantUpper != "yes" && wantUpper != "no"){
      alert("Invalid input...You must choose 'yes' or 'no'");
      wantUpper = prompt("Would you like characters that are UPPERcase? Type 'yes' or 'no'");
    }
  }
  if (wantUpper === 'yes'){
    return true;
  }
  else{
    return false;
  }
}
//Function for seeing if they want numbers in the password
function findNumeric(){
  var wantNums = prompt("Would you like characters that are numeric? Type 'yes' or 'no'");
  if (wantNums != "yes" || wantNums != "no"){
    while (wantNums != "yes" && wantNums != "no"){
      alert("Invalid input...You must choose 'yes' or 'no'");
      wantNums = prompt("Would you like characters that are numeric? Type 'yes' or 'no'");
    }
  }
  if (wantNums === 'yes'){
    return true;
  }
  else{
    return false;
  }
}
//Function for seeing if they want special characters in the password
function findSpecial(){
  var wantSpecial = prompt("Would you like special characters? Type 'yes' or 'no'");
  if (wantSpecial != "yes" || wantSpecial != "no"){
    while (wantSpecial != "yes" && wantSpecial != "no"){
      alert("Invalid input...You must choose 'yes' or 'no'");
      wantSpecial = prompt("Would you like special characters? Type 'yes' or 'no'");
    }
  }
  if (wantSpecial === 'yes'){
    return true;
  }
  else{
    return false;
  }
}








function generatePassword(len, low, up, num, spec){
  var pass = "";
  var valsLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var valsUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var valsNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var valsSpecial = ["!", "^", "#", "$", "%", "&", "*", "(", ")", "-"];
  var library;
  var libraryLength;
  if (low == true && up == false && num == false && spec == false){ // 2
    library = valsLower;
    libraryLength = 26;
  }
  else if (low == false && up == true && num == false && spec == false){ //3
      library = valsUpper;
      libraryLength = 26;
  }
  else if (low == true && up == true && num == false && spec == false){ //4
    library = valsUpper.concat(valsLower);
    libraryLength = 52;
  }
  else if (low == false && up == false && num == true && spec == false){ //5
    library = valsNumeric;
    libraryLength = 9;
  }
  else if (low == true && up == false && num == true && spec == false){ //6
    library = valsLower.concat(valsNumeric);
    libraryLength = 35;
  }
  else if (low == false && up == true && num == true && spec == false){ //7
    library = valsUpper.concat(valsNumeric);
    libraryLength = 35;
  }
  else if (low == true && up == true && num == true && spec == false){ //8
    library = (valsLower.concat(valsUpper)).concat(valsNumeric);
    libraryLength = 61;
  }
  else if (low == false && up == false && num == false && spec == true){ //9
    library = valsSpecial;
    libraryLength = 10;
  }
  else if (low == true && up == false && num == false && spec == true){ //10
    library = valsLower.concat(valsSpecial);
    libraryLength = 36;
  }
  else if (low == false && up == true && num == false && spec == true){ //11
    library = valsUpper.concat(valsSpecial);
    libraryLength = 36;
  }
  else if (low == true && up == true && num == false && spec == true){ //12
    library = (valsLower.concat(valsUpper)).concat(valsSpecial);
    libraryLength = 62;
  }
  else if (low == false && up == false && num == true && spec == true){ //13
    library = valsSpecial.concat(valsNumeric);
    libraryLength = 19;
  }
  else if (low == true && up == false && num == true && spec == true){ //14
    library = (valsLower.concat(valsNumeric)).concat(valsSpecial);
    libraryLength = 10;
  }
  else if (low == false && up == true && num == true && spec == true){ //15
    library = (valsUpper.concat(valsNumeric)).concat(valsSpecial);
    libraryLength = 45;
  }
  else{
    library = ((valsLower.concat(valsUpper)).concat(valsNumeric)).concat(valsSpecial);
    libraryLength = 71;
  }
  for(var i = 0; i < len; i++){
    var randomNumber = Math.floor(Math.random() * libraryLength);
    pass += library[randomNumber];
  }
  return pass;
}
// Write password to the #password input
function writePassword() {
  var length = findLength(); //num in range (8-128)
  var lower = findLower(); // boolean value
  var upper = findUpper(); //boolean value
  var numeric = findNumeric(); //boolean value
  var special = findSpecial(); //boolean value
  if (lower == false && upper == false && numeric == false && special == false){
    while (lower == false && upper == false && numeric == false && special == false){
      alert("You must choose atleast uppercase, lowercase, numeric or special character for me to generate a password!")
      lower = findLower(); // boolean value
      upper = findUpper(); //boolean value
      numeric = findNumeric(); //boolean value
      special = findSpecial(); //boolean value
    }
  }

  var password = generatePassword(length, lower, upper, numeric, special);
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
