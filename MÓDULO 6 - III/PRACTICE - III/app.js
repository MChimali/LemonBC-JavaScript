//create array to locate the notes/coins options and to store the amount of coins for the change
var changeOptions = [
    { amount: 200, number: 0, available: 0},//0
    { amount: 100, number: 0, available: 0},//1
    { amount: 50, number: 0, available: 0},//2
    { amount: 20, number: 0, available: 0},//3
    { amount: 10, number: 0, available: 0},//4
    { amount: 5, number: 0, available: 2},//5
    { amount: 2, number: 0, available: 0},//6
    { amount: 1, number: 0, available: 100},//7
    { amount: 0.5, number: 0, available: 5},//8
    { amount: 0.2, number: 0, available: 5},//9
    { amount: 0.1, number: 0, available: 5},//10
    { amount: 0.05, number: 0, available: 5},//11
    { amount: 0.02, number: 0, available: 5},//12
    { amount: 0.01, number: 0, available: 5}, //13   
];
//create function to decrease to zero the change, taking full integers
var calculateChange = change =>{
     i = 0    
    while (change > 0){
        var fullCoin = Math.floor(change / changeOptions[i].amount);
        console.log(fullCoin);
        if (fullCoin > 0){
            if(fullCoin >= changeOptions[i].available){
                changeOptions[i].number = changeOptions[i].available;
                change -= changeOptions[i].amount * changeOptions[i].number;
                changeOptions[i].available = 0;
                change = Math.round(change * 100) / 100;    
            }else{
                changeOptions[i].available -= fullCoin;
                changeOptions[i].number = fullCoin;
                change -= changeOptions[i].amount * fullCoin;
                change = Math.round(change * 100) / 100;                
            }
        }
        i++
    }        
}
//create a function to show through console the diferent options
var showConsole = (i, array, field1, field2) =>{
    console.log(array[i].number + " " + field1 + " " + array[i].amount +  " " + field2)
}
//show trough console according to amount of coins/notes
var showChange = array =>{
    for (i = 0; i < array.length; i++){
        if (i <= 5 && array[i].number === 1){
            showConsole (i, array, "billete de", "euros")
        }else if(i <= 5 && array[i].number > 1){
            showConsole (i, array, "billetes de", "euros")            
        }else if((i === 6 || (i > 7 && i < 13) || i > 12) && array[i].number === 1){
            showConsole (i, array, "moneda de", "euros")
        }else if((i === 6 || (i > 7 && i < 13) || i > 12)  && array[i].number > 1){
            showConsole (i, array, "monedas de", "euros")
        }else if(i === 7 && array[i].number === 1){
            showConsole (i, array, "moneda de", "euro")
        }else if(i === 7 && array[i].number > 1){
            showConsole (i, array, "monedas de", "euro")                
        }
    }
}
//create eventHandler
var calculate = () => {
    var price = parseFloat(document.getElementById("Quantity-input").value);
    var moneyGiven = parseFloat(document.getElementById("payment-input").value);
    change = Math.round((moneyGiven - price) * 100) / 100;     
    calculateChange(change)
    console.log("Cambio total de " + change)
    showChange(changeOptions);
}
//create eventListener
document.getElementById("mybutton").addEventListener("click", calculate);
