//Standard and encrypted alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'"; 
var encryptedAlphabet= "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Buttons events listeners to activate the algorithm
document.getElementById("encrypt-button").addEventListener("click", encrypt);
document.getElementById("decrypt-button").addEventListener("click", decrypt);

//Get value from upper text-area and pass it encrypted trough encryptText() to the lower text-area
function encrypt () {
    var text = document.getElementById("decrypt-textarea").value;
    document.getElementById("encrypt-textarea").value = (encryptText(text.toLowerCase()));
    document.getElementById("decrypt-textarea").value = "";       
}

//Iterates trough letters of text, pass it to searchplainAlphabet() to get the encrypted letter, and store it in encryptedText
var encryptText = text => {
    var encryptedText = "";
    for (letter of text){        
        encryptedText += searchplainAlphabet(alphabet, letter);
    }
    return encryptedText;
}

//Receive each letter from encrypText() and returning back the encrypted value
var searchplainAlphabet = (array, letter) => {
    for (j = 0; j < array.length; j++){
        switch (letter) {
            case array[j]: return encryptedAlphabet[j];
            case " ": return " ";
            case "á": return encryptedAlphabet[0];
            case "é": return encryptedAlphabet[4];
            case "í": return encryptedAlphabet[8];
            case "ó": return encryptedAlphabet[14];
            case "ú": return encryptedAlphabet[20];
            case "ñ": return encryptedAlphabet[13];
            case "?": return " ";
            case "¿": return " ";
        }
    }
}

//Get value from lower text-area and pass it decrypted trough decryptText() to the upper text-area
function decrypt () {
    var text = document.getElementById("encrypt-textarea").value;
    document.getElementById("decrypt-textarea").value = (decryptText(text.toLowerCase()));
    document.getElementById("encrypt-textarea").value = "";       
}

//Iterates trough letters of text, pass it to searchEncryptedAlphabet() to get the decrypted letter, and store it in decryptedText
var decryptText = text => {
    var decryptedText = "";
    for (letter of text){
        decryptedText += searchEncryptedAlphabet(encryptedAlphabet, letter);
    }
    return decryptedText;
}

//Receive each letter from decryptText() and returning back the decrypted value
var searchEncryptedAlphabet = (array, letter) => {
    for (j = 0; j < array.length; j++){
        switch (letter) {
            case array[j]: return alphabet[j];
            case " ": return " ";
        }
    }
}




 


