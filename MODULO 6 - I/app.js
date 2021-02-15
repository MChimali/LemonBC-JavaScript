// 1. Full name validation
// - El nombre no esté vacío, no null, no undefined)
// - Longitud mínima de 5 caracteres

var isValidFullName = fullname => fullname && fullname.length >= 5;

//obtener nombre
//validar ese nombre
// No válido => aplicar regla CSS sobre input
// Válido => no aplicamos esa regla
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);
    
    if (valid) {
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }
        return valid;
    };


// 2. Birthdate validation
// -year. mayor que 1850 - menor que el año actual
// - Month. entre 1 y 12
// - Días. Máximo 30 o 31. Febrero > 28 o 29 (año bisiesto)

var isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear();
var isValidMonth = montth => month >= 1 && month <= 12;
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return day > 0 && day <= monthLength[month - 1]
}

var splitDates = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}




// 3. DNI Validation
// 4. Telephone validation

// 5. General Algorithm
var validateForm = (event) =>{
    event.preventDefault()

    validateFullName();
   /*validateBirthday();
   validateDNI();
   validateMobile(); */

}

//Events
document.getElementById("register").addEventListener("submit", validateForm)
