/// Assignment Code
var generateBtn = document.querySelector("#generate");

var choiceArray = {};
var number = ["0","1","2","3","4","5","6","7","8","9",];
var SpecialCharacter = ["!","#","$","&","*","+",];
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]; 
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var characterlenght =8-128;



function getprompt(){
    confirmlenght = parseInt(prompt("how many characters do you want your password to have? password lenght must be 8-128 characters.")); 
choiceArray=[];

    if (confirm("do you want numbers in the password?")) {
     choiceArray = choiceArray.concat(number);
    }
    if (confirm("do you want special characters in the password?")) {
      choiceArray = choiceArray.concat(SpecialCharacter);
     }
     if (confirm("do you want UpperCase letters in the password?")) {
      choiceArray = choiceArray.concat(UpperCase);
     }
     if (confirm("do you want LowerCase letters in the password?")) {
      choiceArray = choiceArray.concat(LowerCase);
     }
     return true;
}

function passwordGenerator(){
var password = "";
for(var i = 0; i <lengthMinimum,lengthMaximum; i++)
    var randomletter = math.floor(math.random() * choiceArray.characterlenght);
    password = passwprd + choiceArray[randomletter];
}
return password;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var prompts = getprompts();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   
