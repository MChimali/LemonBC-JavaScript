/*Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
dicho carácter en el string.*/

var stringLetter = (string, letter) => {
    var result = 0;
    for(i = 0; i < string.length; i++){
        if(string[i] === letter) result++;
    }
    return result;
}

var string1 = "gacdvfggfgfgfwrgg";
console.log(stringLetter(string1, "g"));

/*Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
y viceversa. Muestra los arrays transformados por consola.*/

var exchange = (array1, array2) => {
    for (i = 0; i < array1.length; i++){
        [array1[i], array2[i]] = [array2[i], array1[i]]
    }
}

var arrayStart = [1, 2, 3, 4, 5];
var arrayEnd = [6, 7, 8, 9, 10];
console.log("arrayStart " + arrayStart);
console.log("arrayEnd " + arrayEnd);

exchange(arrayStart, arrayEnd);
console.log("arrayStart " + arrayStart);
console.log("arrayEnd " + arrayEnd);

/*Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc*/

var createObject = array => {
    var object = {};
    var varName;
    for (i = 0; i < array.length; i++){
        varName = "prop" + (i+1);
        object[varName] = array[i];    
    }
    return object;
}
var arrayEnd = [6, 7, 8, 9, 10];

objeto = createObject(arrayEnd);
console.log(objeto.prop1);

var property = "prop1";

objeto[property] = 2;

console.log(objeto[property]);

