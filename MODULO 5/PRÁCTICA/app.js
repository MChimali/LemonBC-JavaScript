const carrito = [

    {id: 198752, name: "Tinta DJ27 Color", price: 52.95, count: 3, premium: true},
    {id: 75621, name: "Impresora ticketera PRO-201", price: 32.75, count: 2, premium: true},
    {id: 54657, name: "Caja de rollos de papel para ticketera", price: 5.95, count: 3, premium: true},
    {id: 3143, name: "Caja de folios DIN-A4 80gr", price: 9.95, count: 2, premium: false}

];

//    1    // Erase product with id 54657 from the array>>>>>>>>>>>

//Create function to erase a product with a given ID
function eraseItem(array, id){
for (i = 0; i < array.length; i++) {
    if (array[i].id === id){
        array.splice(i,1)
    }
}}

//We call the function to test if it is working
//eraseItem(carrito, 198752);


//    2    // Show array with all elements>>>>>>>>>>

//Create function to print in console
function imprimir (products) {
    for (properties in products){
        console.log(properties + ": " + products[properties]);
    }
    console.log("----")
}

//We call the function to print in console
for (i = 0; i < carrito.length; i++) {
    imprimir (carrito[i]);
}

console.log("-------------------------------------")

//    3    // Calculate the total price of the array.

//We declare the variable we the total will be hosted
let total = 0;

//We create function to calculate total price per item and show in console

function totalProduct (item){
    console.log("The total price of " + item.name + " is: " + (item.count*item.price).toFixed(2) + " Euros");
}

//Create function to calculate the total price of the array

function totalCarrito (item){
    total+= item.count*item.price;
}

//Create function to show the total price of the array

function showTotal(totalPrice) {
    console.log("Total: " + totalPrice.toFixed(2) + " Euros")
}

//we create a loop, calling for the functions
for (product of carrito){
    totalProduct(product);
    totalCarrito(product);
}

console.log("-------------------------------------")

//Call the function showTotal to print the total trough console
showTotal(total);

console.log("-------------------------------------")

//    4    // Filtrar por los productos que sean prime.
//We simply use the type of variable of Premium (boolean) to create a condition and then print
for (i = 0; i < carrito.length; i++) {
    if(carrito[i].premium){    
    imprimir (carrito[i]);}
}

console.log("-------------------------------------")

//    5    // If all products are Prime show >> "Pedido sin gastos de envío", if not >> "Este pedido tiene gastos de envío"

//Create allprime to locate False value if during loop any object is not prime
let allPrime = true;

//Declare function where we will go every item to check if there is one which is not prime
function listPrime (array){
for (product of array){
    allPrime = allPrime && product.premium;
}
return allPrime;
}

//If the value of listPrime is true, it will mean all our products are prime, if false, then there is al least one that is not prime
if (listPrime(carrito)){
    console.log("Pedido sin gastos de envío")
}else{console.log("Este pedido tiene gastos de envío")}

//    6    // Aplicar 5% descuento si la compra es mayor a 100 euros

//Create variable to alocate new price, if discount is applied
let discountTotal = total;

//Create function to recalculate total price if > 100
function discount(){
    if (total > 100){
        discountTotal = 0.95*total;
    }
    return discountTotal;
}

//Create function that will show the discount only if it is applied

function showDiscount(){
    if (total > 100){
    console.log("5% descuento por compra superior a 100 euros");
    console.log("El nuevo total es: " + discount().toFixed(2));
}}

showDiscount();

//   7    // Show the buying list with a basic HTML

//We firstly create an array with all relevant ID tags from html. 

const htmlElements = [
    {id: "id1", name: "name1", count: "count1", price: "price1", total: "total1", input: "prime1"},
    {id: "id2", name: "name2", count: "count2", price: "price2", total: "total2", input: "prime2"},
    {id: "id3", name: "name3", count: "count3", price: "price3", total: "total3", input: "prime3"},
    {id: "id4", name: "name4", count: "count4", price: "price4", total: "total4", input: "prime4"},
   
    
];

//We relate the carrito properties with the DOM tags to show carrito in browser

for (i = 0; i < htmlElements.length; i++) {
document.getElementById(htmlElements[i].id).innerHTML = "ID: (" + carrito[i].id + ")";
document.getElementById(htmlElements[i].name).innerHTML = carrito[i].name;
document.getElementById(htmlElements[i].price).innerHTML = carrito[i].price;
document.getElementById(htmlElements[i].total).innerHTML = (carrito[i].price*carrito[i].count).toFixed(2);
document.getElementById(htmlElements[i].count).value = carrito[i].count;
if (carrito[i].premium){
document.getElementById(htmlElements[i].input).innerHTML = "Premium Item";
}else{document.getElementById(htmlElements[i].input).style.display = "none";
}};

//We assign to html elements total bill price, the discounted price, and the shipping free info (if all elements are prime)

document.getElementById("total-number").innerHTML = total.toFixed(2) + " €" ;
document.getElementById("discount-total").innerHTML = "¡Precio con descuento! " + discountHtml() ;
document.getElementById("prime-message").innerHTML = primeHtml() ;

//We create function to show the discount price at the end, if there is discount

function discountHtml(){
    if (total > 100){
        return discountTotal.toFixed(2);
    }else{
        return "";
    }
}

//We create function to show message of shipping included according to condition of all items being prime

function primeHtml(){
    if(allPrime){
        return "Pedido sin gastos de envío :-)"
    }else{
        return "Este pedido tiene gastos de envío :-("
    }
}
