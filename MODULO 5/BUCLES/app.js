//recorrer el array > BUCLE

//Los bucles tienen una estructura con 
//Inicialización
//Condición
//Post-ejecución


//inicialización. Se inicialice el índice en 0 (se empieza la lista desde 0)

//  >>>>>>>>>  i = 0;


//Condición

//  >>>>>>>>>  i < ciudades.length;

/*las iteraciones van a aumentar a inifinito a no ser que límite.
Para eso existe la condición. i < ciudades.length
Con esto conseguimos que las iteraciones paren en el último elemento del array.

El primer elemento de un array es siempre el elemento 0. 
En un array con un .lenght = 5, el último elemento será el 4
Console.log (ciudades[ciuades.lenght]) es algo que no tiene sentido*/


//Post-ejecución

//  >>>>>>>>>    i++

/*Basicamente se trata se trata de aumentar el índice en una unidad para continuar el siguiente elemento*/

var ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];

for (i = 0; i < ciudades.length; i++){
    console.log (ciudades[i]);
};

//Veamos algunos ejemplos
//A continuación mostramos varios objetos con sus propiedades

var reserva1 = { id: 1, price: 10, client: "Caroline" };
var reserva2 = { id: 2, price: 10, client: "Liam" };
var reserva3 = { id: 3, price: 10, client: "Andrew" };
var reserva4 = { id: 4, price: 15, client: "John" };

//metemos todos estos objetos en una lista (array)
const reservas = [reserva1, reserva2, reserva3, reserva4];

//Si queremos mostrar el precio total de las reservas

let total = 0;
for (i = 0; i < reservas.length; i++){
total += reservas[i].price;
}
console.log(total);

/*>>>>>>   FOR OF    >>>>>>> Para ir a través de todos y cada uno de los elementos 
de una lista, nos podemos ahorrar lo de dentro y (a of reservas)*/
let cost = 0;
for (a of reservas){
    cost += a.price;
}
console.log(cost);

for (a in reserva1){
   console.log (reserva1[a])
}

/*>>>>>> FOR IN >>>>>>> esta se utiliza para ir a través de todas y cada una de las
propiedades de un objeto.*/
var cars = {brand: "mercedes", price: 500, puertas: 5};

for (car in cars){
console.log(car + ": " + cars[car])
};

//>>>>>  FOR IN >>>>> para arrays >> devuelve el índice y el elemento del array
var motos = ["kawasaki", "yamaha", "honda"];

for (moto in motos){
    console.log(moto + ": " + motos[moto]);
}

/*>>>>>>>>  WHILE  >>>>>>> mientras que una condición se cumpla, se ejecuta un código
Es igual que el For pero con la inicialización y la postejecución fuera del paréntesis*/

var houses = ["en la playa", "en la montaña", "en el pueblo", "en la ciudad"];

var i = 0;
while (i < houses.length){
    console.log("quiero una casa " + houses[i]);
    i++;
}

for (i=0; i < houses.length; i++){
    console.log("quiero una casa " + houses[i]);
}

////////

var booking1 = { id: 1, price: 10, client: "Caroline" };
var booking2 = { id: 2, price: 10, client: "Liam" };
var booking3 = { id: 3, price: 10, client: "Andrew" };
var booking4 = { id: 4, price: 15, client: "John" };

const bookings = [booking1, booking2, booking3, booking4];

i = 0;
var encontrado = false;
while (i < bookings.length && !encontrado){
    encontrado = bookings[i].id == 3;
    console.log(encontrado);
    i++;
}

/*Con while primero se evalua la condición y luego se ejecuta el 
bloque de código. Con >>>>> DO WHILE >>>>>> primero se ejecuta el 
bloque de código y luego se evalua si se sigue ejecutando. El DO WHILE
siempre se va a ejecutar alguna vez*/


 
