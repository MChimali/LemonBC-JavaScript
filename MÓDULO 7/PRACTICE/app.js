console.log("-------Iban exercise---------")
//Validate IBAN
const iban1 = "ES6600190020961234567890";
const iban2 = "ES66 0019 0020 9612 3456 7890";

//Case 1 & case 2 >> validate Iban with and without spaces
const patternCase1 = /^[A-Z]{2}\d{22}$/;
const patternCase2 = /^([A-Z]{2}\d{2})(\s?\d{4}){5}$/;

console.log(patternCase1.test(iban1));
console.log(patternCase2.test(iban2));



//Case 3 >> extract country code and control digit
var ibanArray = ["ES66 0019 0020 9612 3456 7890", "DE70 0019 0020 9612 3456 7890", "FR12 0019 0020 9612 3456 7890"]

for (iban of ibanArray){
    if(patternCase2.test(iban)){//validates IBAN
    console.log((patternCase2.exec(iban))[1]);//Once IBAN is validated >> console.log codes   
}}


console.log("-------Reg Number exercise---------")

//Validate car registration number
var carReg = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

const patternReg = /^(\d{4})[ -]?([A-Z]{3})$/;

let number = 1;

for (regNumber of carReg){    
    if(patternReg.test(regNumber)){
        console.log("Plate " + number)
        var regInArray = patternReg.exec(regNumber);
        console.log("Plate Number: " + regInArray[1]);
        console.log("Plate Letters: " + regInArray[2]);
        
    }else{
        console.log("Plate " + number + " is not valid");
    }   
    number++
}

console.log("-------Extract Images from HTML---------")
//Extract images from a HTML file

/////////// 1st WAY //////////////
var htmlString = document.documentElement.innerHTML;

var getImages = string => {
    const pattern = /img\n*?\s*?src="(.*)"/g;
    const pattern2 = /img\n*?\s*?src="(.*)"/;
    const array = string.match(pattern);
    const images = [];
    for (i = 0; i < array.length; i++){        
        images.push(array[i].match(pattern2)[1]);
        
    }
    return images
}

console.log(getImages(htmlString));

/////////// 2nd WAY //////////////

function getImages2(string) {
   const imgPattern = /img\n*?\s*?src="(.*)"/g;
   const images = [];
   let img;
   while (img = imgPattern.exec(string)) {
          images.push(img[1]);
   }
   return images;
}

console.log(getImages2(htmlString));

//Validate credit card
console.log("-------Validate Card---------")
document.getElementById("card-button").addEventListener("click", validateCardNumber)

var getCreditCard = () => document.getElementById("input-card").value;

function validateCardNumber () {
    var number = getCreditCard();    
    const fourDigits = /^\d{4}$/;
    const cardPattern = /^(((50)|(51)|(52)|(53)|(54)|(55))\d{2})\s?-?(\d{4})\s?-?(\d{4})\s?-?(\d{4})$/
    console.log(cardPattern.test(number));
    var array = cardPattern.exec(number);
    if(cardPattern.test(number)) {   
        for (i = 0; i < array.length; i++){
            if (fourDigits.test(array[i])){
                console.log(array[i])
            }
        }
    }
}

//Validate password complexity
console.log("-----Validate Password-------")
document.getElementById("password-button").addEventListener("click", validatePassword)

var getPassword = () => document.getElementById("input-password").value;

function validatePassword () {
    var password = getPassword();
    const complex = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])(?=.*[$@$!%*?&])/;
    const moderate = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}/;
    var isPasswordComplex = complex.test(password)? "La constraseña es, al menos, moderada" : "La contraseña no es moderada";
    var isPasswordModerate = moderate.test(password)? "La constraseña es compleja" : "La contraseña no es compleja";
    console.log(isPasswordComplex);
    console.log(isPasswordModerate);
}

//Validate URL
console.log("---------Validate URL--------")

document.getElementById("URL-button").addEventListener("click", validateURL)
var getURL = () => document.getElementById("input-URL").value;

function validateURL () {
    var URL = getURL();
    const patternURL = /^(https:\/\/)?(www\.)?(\w+)(.net|.com|.es|.org)$/;
    console.log(patternURL.test(URL));    
}





















