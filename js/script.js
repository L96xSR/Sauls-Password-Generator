// Assignment code here
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"; 
var symbols = "!?.@#$%&";
var options = "";

function generatePassword(){
  var generatedPass = "";

  var userInput = window.prompt("Enter length of Password! ");
  var passLength = parseInt(userInput); 

  if (!userInput){
    window.alert("Please write a length of characters")
    return;
  }

  if (passLength < 8 || passLength > 128){
    window.alert("Password must be within 8 and 128 characters")
    return;
  }
  
  var includeLower = window.confirm("Would you like to include Lower Case letters?");
  var includeUpper = window.confirm("Would you like to include Upper Case letters?");
  var includeNumbers = window.confirm("Would you like to include Numbers?");
  var includeSymbols = window.confirm("Would you like to include Symbols?");

  if (includeLower === true){
    options += lettersLower
  }
  if (includeUpper === true){
    options += lettersUpper
  }
  if (includeNumbers === true){
    options += numbers
  }
  if (includeSymbols === true){
    options += symbols
  }

   for ( var i = 0; i < passLength; i++ ) {
    generatedPass += options.charAt(Math.floor(Math.random()*options.length));
    
  }
  return generatedPass;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

