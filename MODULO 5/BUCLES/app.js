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

function suma(a, b){
    c = a + b;
    return c
}
console.log(suma(1,2))





const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    
    }
];


   const numbers = [
    {
    id: 1000,
    
    },
    {
    id: 2000,
    
    },
    {
    id: 3000,
    
    },
    {
    id: 4000,
   
    }
   ];

function imprimir (product) {
    for (properties in product){
        console.log(properties + ": " + product[properties]);
    }
}

for (i = 0; i < carrito.length; i++){
    carrito[i].id = numbers[i].id;
}
for (product of carrito) {
    console.log("----")
    imprimir (product);
}

const hElements = [
    {name: "h1", button: "button1"},
    {name: "h2", button: "button2"},
    {name: "h3", button: "button3"},
    {name: "h4", button: "button4"}
]; 





function upId() {
    for (i = 0; i < numbers.length; i++){
        numbers[i].id += 1;
    }
}

for ( i = 0; i < hElements.length; i++) {
document.getElementById(hElements[i].button).addEventListener("click", upId);


document.getElementById(hElements[i].name).innerHTML = numbers[i].id;}



 
