/*
type: "alimentación"
type: "libro"
IVA=0.2
IVA=0.1
IVA=0.04
*/

//enunciado objeto
const product = { count: 2, price: 10, type: "libro" };

//Condición para cantidad siempre igual o mayor a 0
product.count = product.count > 0 ? product.count : 0;

//Cálculo total
let total = product.count*product.price;

//Cálculo IVA con IF

let IVA;

if (product.type =="alimentación") {
    IVA = 0.1;
  } else if (product.type =="libro") {
    IVA = 0.04;
  } else {
    IVA = 0.2;
  }


/*//Cálculo IVA con switch
switch (product.type){
    case "alimentación":
    IVA = 0.1;
    break;
    case "libro":
    IVA = 0.04;
    break;
    case "ropa":
    IVA = 0.2;
    break;
}*/

//Cálculo precio total + IVA
console.log("Cantidad de productos: " + product.count + " unidad/es");
console.log("Total (IVA no incluido) = " + total + ("$"));
console.log("porcentaje de IVA aplicado " + IVA*100 + ("%"));
let totalConIva=total + (total*IVA);
console.log("Total con IVA = " + totalConIva + ("$"));

