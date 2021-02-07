const bookings = [
 { id: 1, price: 10, count: 3, room: "standard", prepaid: false, succeeded: true },
 { id: 2, price: 20, count: 4, room: "superior", prepaid: false, succeeded: true },
 { id: 3, price: 30, count: 7, room: "standard", prepaid: true, succeeded: false },
 { id: 4, price: 40, count: 2, room: "standard", prepaid: true, succeeded: true },
 { id: 5, price: 50, count: 5, room: "superior", prepaid: true, succeeded: false }
];


//listar si alguna id se repite
let repeat = false;

for (i = 0; i < bookings.length; i++){
     
    for (j = i + 1; j < bookings.length; j++){
        repeat = repeat || bookings[i].id === bookings[j].id;
    }
}
console.log("hay identificadores repetidos: " + repeat);











/* for (booking of bookings){
    imprimir(booking);
}

function imprimir (booking){
    for (properties in booking){
        console.log(properties + ": " + booking[properties]);
    }
    console.log("----")
} */





//Listar todas las reservas del hotel

/* for (reservas of bookings) {
    imprimir(reservas);
    console.log("---")
};

function imprimir (reserva){
    console.log("---- " + reserva.id + "---- ");
    console.log("Price " + reserva.price);
    console.log("Noches " + reserva.count);
    console.log("Tipo Habitación " + reserva.room);
    console.log("Pagada " + reserva.prepaid);
    console.log("Error " + !reserva.succeeded);
     
};

function imprimir (reservas){
    for (a in reservas){
        console.log(a + ": " + reservas[a]);       
    }
} */



/* console.log("ha habido un error: " + showError());

function showError(){
    let succeed = true;
    let i = 0;
    while (succeed) {
        succeed = succeed && bookings[i].succeeded;
    i++;
    
}
return !succeed;
};
 */
//listar solo las reservas que han tenido éxito
/* function showGoodBookings() {
for (i = 0; i < bookings.length; i++){
    if (bookings[i].succeeded === true){
        console.log("la reserva con booking posibiva tiene id: " + bookings[i].id)
    }
}};

showGoodBookings(); */

/* function imprimir(booking) {
    if (booking.prepaid){
    console.log("----");
    for (a in booking){
        console.log(a + ": " + booking[a]);
    }}
};

for (booking of bookings)
imprimir(booking); */

/* for (booking of bookings){
    if (booking.prepaid){
    imprimir(booking);}
    
}

function imprimir(booking){
    for (a in booking){
        console.log(a + ": " + booking[a])
    }
    console.log("---")
}
 */
//Calcular suma total de los precios

/* for (reserva of bookings){
    reserva.price = reserva.price-reserva.price*0.1;
}

for (booking of bookings){
    imprimir(booking);
}
function imprimir(reservas){
    for (reserva in reservas){        
        console.log(reserva + ": " + reservas[reserva])
    }
    console.log("----")
} */

/* for (booking of bookings){
    if (booking.prepaid && !booking.succeeded)
    imprimir(booking);
}

function imprimir (reserva){
    for (property in reserva){
        console.log(property + ": " + reserva[property]);
    }
    console.log("----")
} */


