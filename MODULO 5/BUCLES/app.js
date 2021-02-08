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





 
