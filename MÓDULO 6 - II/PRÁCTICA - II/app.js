//Standard and encrypted alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'"; 
var encryptedAlphabet= "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Buttons events listeners to activate the algorithm
document.getElementById("encrypt-button").addEventListener("click", showEncrypt);
document.getElementById("decrypt-button").addEventListener("click", showDecrypt);

//Get value from upper text-area and pass it encrypted trough encryptText() to the lower text-area
function showEncrypt () {
    var textToEncrypt = document.getElementById("decrypt-textarea").value;
    document.getElementById("encrypt-textarea").value = encrypt(textToEncrypt.toLowerCase());
    document.getElementById("decrypt-textarea").value = "";
}

//Get value from lower text-area and pass it decrypted trough decryptText() to the upper text-area
function showDecrypt () {
    var textToDecrypt = document.getElementById("encrypt-textarea").value;
    document.getElementById("decrypt-textarea").value = decrypt(textToDecrypt.toLowerCase());
    document.getElementById("encrypt-textarea").value = "";
}


//Iterates trough all letters of text, gettin their indexes, and directly passing the encrypted equivalent
var encrypt = text => {

    var encryptedText = ""; 

    for (letter of text){
        if (letter === " ")encryptedText += " ";
        else{       
        var index = alphabet.indexOf(letter);
        encryptedText += encryptedAlphabet[index];
        }  
    }

    return encryptedText;
}

//Iterates trough all letters of text, gettin their indexes, and directly passing the decrypted equivalent
var decrypt = text => {

    var decryptedText = ""; 

    for (letter of text){
        if (letter === " ")decryptedText += " ";
        else{       
        var index = encryptedAlphabet.indexOf(letter);
        decryptedText += alphabet[index];
        }  
    }

return decryptedText;
}
