var result = 0;
var operation = "+";
var operando;

//create function to clean input
function cleanInput () {
    document.getElementById("field-numbers").value = "";
}

//create function to get number
var getValue = () => Number(document.getElementById("field-numbers").value);

//create functions for operations (Var operation String with value prepared for function Calculation)
function addition () {
    operationString = "+";
    calculation();
};

function subtraction () {
    operationString = "-";
    calculation();
};

function multiply () {
    operationString = "*";
    calculation();
};

function division () {
    operationString = "/";
    calculation();
};

//create function that is going to make the actual operation
var calculation = () => {
switch (operation){
    case "+":
        result += getValue();
        break;
        
    case "-":
        result -= getValue();
        break;   

    case "*":
        result *= getValue();
        break;
        
    case "/":
        result /= getValue();
        break;              
}
console.log(operationString);
operation = operationString;
console.log(result);
cleanInput();   
    
};

function handleEqual() {
    //the following line is to do not allow the Switch to be activated once the function Calculation is activated
    operationString = "";
    calculation(); 
    document.getElementById("result").innerHTML = result;            
}


document.getElementById("addition").addEventListener('click', addition);
document.getElementById("subtraction").addEventListener('click', subtraction);
document.getElementById("multiplication").addEventListener('click', multiply);
document.getElementById("division").addEventListener('click', division);
document.getElementById("equal-to").addEventListener('click', handleEqual);