//function to get value of the room
var room = () => document.getElementById('room-type').options[document.getElementById('room-type').selectedIndex].value;

//function to get price of the room
function roomPrice(){
    switch(room()){
        case "Standard":
            priceOfRoom = 100;
            break;
        case "Junior":
            priceOfRoom = 120;
            break; 
        case "Suite":
            priceOfRoom = 150;
            break;    
        }
        return priceOfRoom;
}

//function to get value of the spa Input
var spa = () => document.getElementById("spa").checked;

//function to get spa price
function spaPrice() { return priceOfSpa = spa()===true? 20 : 0;
};

//Console log for showing if Spa is selected
function spaVariant() { return optionalSpa = spa()===true? "Sí" : "No"};

//function to get number of ocupation
var ocupation = () => document.getElementById('ocupation').options[document.getElementById('ocupation').selectedIndex].value;

//function to get occupation factor
function factorOcupation(){
    switch(ocupation()){
        case "Individual":
            factor = 0.75;
            break;
        case "Doble":
            factor = 1;
            break; 
        case "Triple":
            factor = 1.25;
            break;    
        }
        return factor;
}

//function to get number of nights
var nights = () => Number(document.getElementById("numberofnights").value);

//function to calculate total price per night
function nightPrice(){
    return (roomPrice() + spaPrice())* factorOcupation();
};

//function to get number of Parking days
var parkingDays = () => Number(document.getElementById("days-parking").value);

//function to get parking price
var parkingPrice = () => parkingDays()*10;

//function to get price per stay
function calculateTotalNights() {
    return nightPrice()*nights()
}
//function to get total price
function calculateTotalstay() {
    return calculateTotalNights() + parkingPrice();
}
function calculateTotal () {
    console.log("Tipo de habitación escogida: " + room() );
    console.log("Disfrute Spa durante estancia: " + spaVariant() );
    console.log("Tipo de Ocupación: " + ocupation() + '\n')
    console.log("Precio por noche según opciones: " + nightPrice() + " euros")
    console.log("Precio total por " + nights() + " noches: " + calculateTotalNights() + " euros" )
    console.log("Precio total por el parking: " + parkingPrice() + " euros" )
    console.log("Precio total por la estancia " + calculateTotalstay() + " euros");
}

document.getElementById("mybutton").addEventListener('click', calculateTotal);


