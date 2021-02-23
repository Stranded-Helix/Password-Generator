// Assignment Code
var generateBtn = document.querySelector("#generate");

//array sets
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '#', '$', '%', '&', '*', '+', '-', '(', ')'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //variable to store characters selected for password
  var passwordCharacters = "";
  //variable to store all arrays of characters to include
  var passwordArrays = [];
  //variables for confirm answers
  var passwordLength =  GetPasswordLength();// between 8 & 128
  var includesLowerCase = confirm("Include Lower Case?");
  var includesUpperCase = confirm("Include Upper Case?");
  var includesNumbers = confirm("Include Numbers?");
  var includesSpecialCharacters = confirm("Include Special Characters?");
  //checks if all arrays were set to false and ends the generation
  if(includesLowerCase === false && includesUpperCase === false && includesNumbers === false && includesSpecialCharacters === false){
    alert("No characters selected, Password cannont be generated.");
    return "No Password Generated";
  }
  //if any arrays were set to true, adds arrays to password gen array
  else{
    if(includesLowerCase === true){ 
      passwordArrays.push(lowerCase);
    }
    if(includesUpperCase === true){
      passwordArrays.push(upperCase);
    }
    if(includesNumbers === true){
      passwordArrays.push(numbers);
    }
    if(includesSpecialCharacters === true){
      passwordArrays.push(specialCharacters);
    }
  }
    //forces one of each required character first
    for(var i = 0; i < passwordArrays.length; i++){
      var SelectedCharacter = passwordArrays[i][random(0, passwordArrays[i].length)];
      passwordCharacters += SelectedCharacter;
    }
  console.log("Password current Length: " + passwordCharacters.length + "/" + passwordLength);
    while(passwordCharacters.length < passwordLength){
      var ArraySelector = random(0, passwordArrays.length);
      var SelectedCharacter = passwordArrays[ArraySelector][random(0, passwordArrays[ArraySelector].length)];
      passwordCharacters += SelectedCharacter;
    }

  return passwordCharacters;
}
//recursive function to get correct password length from user
function GetPasswordLength() {
  var temp = prompt("What is desired password length?");
  if(temp > 7 && temp < 129 ){
    return temp;
  }
  else {
    alert("Length must be between 8 and 128");
    GetPasswordLength();
  }
}
//Simplified Random function
function random(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


