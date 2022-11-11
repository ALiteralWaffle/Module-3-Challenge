// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Gets length of password
function findLength() {
  passwordLength = prompt("How many characters do you want in the password? (Between 8-128 characters)");

    if (passwordLength < 8) {
      alert("Password must be over 8 characters long");
      findLength();
    } else if (passwordLength > 128) {
      alert("Password must be under 128 characters long");
      findLength();
    } else {
      return passwordLength;
    }
}

// Finds if user wants Uppercase letters
function findUppercase() {
  uppercaseCheck = prompt("Do you want to include uppercase letters? \n(Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === "yes") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer Yes or No");
    findUppercase();
  }
  return uppercaseCheck;
}

//Finds if user wants numbers
function findNumbers() {
  numberCheck = prompt("Do you want to include numbers? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === "yes") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    findNumbers();
  }
  return numberCheck;
}

//Finds if user wants special characters
function findSpecial() {
  specialCheck = prompt("Do you want to include special characters? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === "yes") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    findSpecial();
  }
  return specialCheck;
}

//Generates password from given input
function generatePassword() {
  findLength();
  console.log(passwordLength);
  findUppercase();
  console.log(uppercaseCheck);
  findNumbers();
  console.log(numberCheck);
  findSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  //This prevents "[Object HTMLTextAreaElement]" from appearing in the generated password
  var password = "";

  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;

  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;

  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;

  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;

  } else if (uppercaseCheck) {
    characters += uppercaseChar;

  } else if (numberCheck) {
    characters += numberChar;

  } else if (specialCheck) {
    characters += specialChar;

  } else {
    characters === lowercaseChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
