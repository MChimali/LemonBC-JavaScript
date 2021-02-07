const carrito = [

    {id: 198752, name: "Tinta DJ27 Color", price: 52.95, count: 3, premium: true},
    {id: 75621, name: "Impresora ticketera PRO-201", price: 32.75, count: 2, premium: true},
    {id: 54657, name: "Caja de rollos de papel para ticketera", price: 5.95, count: 3, premium: false},
    {id: 3143, name: "Caja de folios DIN-A4 80gr", price: 9.95, count: 2, premium: true}

];

//Eliminar el producto con id 54657 del carrito de la compra.
//Al estar este producto eliminado de la lista, éste no se tendrá en cuenta en los cálculos posteriores
eraseItem(carrito, 198752);

function eraseItem(array, id){
for (i = 0; i < array.length; i++) {
    if (array[i].id === id){
        array.splice(i,1)
    }
}}

//Mostrar el carrito de la compra.

for (i = 0; i < carrito.length; i++) {
    console.log("Producto: " + (i+1))
    imprimir (carrito[i]);
}

function imprimir (products) {
    for (properties in products){
        console.log(properties + ": " + products[properties]);
    }
    console.log("----")
}
console.log("");
console.log("");

//Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).

let total = 0;
for (product of carrito){
    console.log("The total price of " + product.name + " is: " + (product.count*product.price).toFixed(2) + " Euros")
    total+= product.count*product.price
}
console.log("Total: " + total.toFixed(2) + " Euros")
discount();

//Aplicar 5% descuento si la compra es mayor a 100 euros
function showDiscount(){
    console.log("5% descuento por compra superior a 100 euros");
    console.log("El nuevo total es: " + 0.95*total.toFixed(2));
}

function discount(){
    if (total > 100){
        showDiscount()
    }
}

//Filtrar por los productos que sean prime.

console.log("");
console.log("");

for (i = 0; i < carrito.length; i++) {
    if(carrito[i].premium){
    console.log("Producto: " + (i+1))
    imprimir (carrito[i]);}
}
console.log("");
console.log("");

/* Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
tiene gastos de envío". */

let allPrime = true;

function listPrime(array){
for (product of array){
    allPrime = allPrime && product.premium;
}
return allPrime;
}

if (listPrime(carrito)){
    console.log("Pedido sin gastos de envío")
}else{console.log("Este pedido tiene gastos de envío")}

/* for (i = 0; i < carrito.length; i++){
    document.getElementById("id1").innerHTML = carrito[i].id;
}
 */


