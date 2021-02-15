var result = 0;
var operation = "+";
var operando;

//create function to clean input
function cleanInput () {
    document.getElementById("field-numbers").value = "";
}

//create function to get number
var getValue = () => Number(document.getElementById("field-numbers").value);

//function calculation
var calculation = (operationString) => {
    switch (operation) {
    case "+": 
        result = result + getValue();            
        break;
    case "-": 
        result = result - getValue();        
        break;
    case "*": 
        result = result * getValue();         
        break;
    case "/": 
        result = result / getValue();          
        break;

}
    console.log(operationString);
    operation = operationString;
    console.log(result);
    cleanInput();
};

function handleEqual (){
    calculation();
};

//Event listeners
document.getElementById("addition").addEventListener('click', ()=>calculation("+"));
document.getElementById("subtraction").addEventListener('click', ()=>calculation("-"));
document.getElementById("multiplication").addEventListener('click', ()=>calculation("*"));
document.getElementById("division").addEventListener('click', ()=>calculation("/"));
document.getElementById("equal-to").addEventListener('click', handleEqual)
