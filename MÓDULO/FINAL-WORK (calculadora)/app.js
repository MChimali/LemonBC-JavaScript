
//function to get numeric field values
var getnumber = (inputId) => Number(document.getElementById(inputId).value);

//function to get numeric field values
var error = () => getnumber("field-1") === 0 || getnumber("field-2") === 0;
var message = () => document.getElementById("result").innerText = "Error";


//handle Listeners
function handleAddition () {
    if (error() ) {
        message();
    } else {
        addition();
    }
};

function handleSubtraction () {
    if (error()) {
        message();
    }else{
        subtraction();
    }
};
function handleMultiply  () {
    if (error()) {
        message();
    }else{
        multiply();
    }
};
function handleDivide () {
    if (error()) {
        message();
    }else{
        divide();
    }
};


//Operations
var addition = () => document.getElementById("result").innerText = getnumber("field-1") + getnumber("field-2");
var subtraction = () => document.getElementById("result").innerText =  getnumber("field-1") - getnumber("field-2");
var multiply = () => document.getElementById("result").innerText =  getnumber("field-1") * getnumber("field-2");
var divide = () => document.getElementById("result").innerText = getnumber("field-1") / getnumber("field-2");

//Event listeners
document.getElementById("addition").addEventListener("click", handleAddition);
document.getElementById("subtraction").addEventListener("click", handleSubtraction);
document.getElementById("multiplication").addEventListener("click", handleMultiply);
document.getElementById("division").addEventListener("click", handleDivide);



