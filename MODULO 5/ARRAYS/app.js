var ciudades = ["Bali", "Roma", "Berlin"];
console.log (ciudades);

//añade elemento al final de array
ciudades.push("Rio");
console.log (ciudades);

//añade elemento al principio de array
ciudades.unshift("Madrid");
console.log(ciudades);

//quita un elemento del final de lista (devuelve el elemento)
ciudades.pop();
console.log(ciudades);

//quita un elemento del principio de la lista (devuelve el elemento)
ciudades.shift();
console.log(ciudades);

//indica el índice de un elemento dentro de una lista
console.log("La ciudad de Roma está en la posición " + ciudades.indexOf("Roma"));
//para algo que no está devuelve -1

//Eliminar un elementos que están en medio de la lista
//primer Num: elemento desde el que va a eliminar
//segundo Num: elementos que va a eliminar
console.log(ciudades.splice(2,1));

//Copiar arrays con Slice
console.log(ciudades);
ciudades.push("Rio", "Madrid", "Paris", "Londres");
console.log(ciudades);
var copia = ciudades.slice(0,3);
console.log(copia);
console.log(ciudades);

//acceder a un elemento en una posición del array
//num en corchete es la posición
console.log(ciudades[0]);
console.log(ciudades[1]);
console.log(ciudades[2]);
console.log(ciudades[3]);
console.log(ciudades[4]);
console.log(ciudades[5]);

//Podemos sustituir un elemento en una lista accediendo a él e igualando
ciudades[3] = "Hanoi";
console.log(ciudades);

//Conocer número de elementos de un array
console.log(ciudades.length);

//recorrer el array
console.log(ciudades);
let i = 0;
console.log(ciudades[i]);
i++;
console.log(ciudades[i]);
i++;
console.log(ciudades[i]);
i++;
console.log(ciudades[i]);
i++;
console.log(ciudades[i]);
i++;
console.log(ciudades[i]);
i++;
