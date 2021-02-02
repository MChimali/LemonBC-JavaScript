const empleado = {
    bruto: 12100,
    hijos: 0,
    pagas: 12
};

//declaramos la variable para alojar el porcentaje de retención según ganancias
let retencionFactor;

//Calculamos porcentaje de retención según ganancias
if ( empleado.bruto < 12000 ) {
    retencionFactor = 0;
   } else if ( empleado.bruto > 12000 && empleado.bruto < 24000) {
    retencionFactor = 8;
   }  else if ( empleado.bruto > 24000 && empleado.bruto < 34000 ) {
    retencionFactor = 16;
   }  else if ( empleado.bruto > 34000 ) {
    retencionFactor = 30;
} 

//Modificamos el porcentaje de la retención según hijos 
let retencionCalculo;
let retencionHijos = empleado.hijos > 0 ? 2 : 0;


if ( retencionFactor > 0 ) {
    retencionFactor = retencionFactor - retencionHijos;
}

retencionCalculo = retencionFactor / 100;

//Mostramos en consola si el empleado tiene hijos
console.log ( "Salario bruto del empleado: " + empleado.bruto + "€" )
if ( empleado.hijos > 0 ) {
    console.log ( "¿Tiene hijos el empleado? SI" )
} else {
console.log ( "¿Tiene hijos el empleado? NO" )
}

//Mostramos en consola el total de la retención
let totalDeduccion = empleado.bruto * retencionCalculo;
console.log ( "Retención del " + retencionFactor + "%" );
console.log ( "Retención total de " + totalDeduccion +  "€" );

//Calculamos el salario neto según retención y lo mostramos por consola
let salarioNeto = empleado.bruto - ( empleado.bruto * retencionCalculo );
console.log ( "Salario neto del empleado: " + salarioNeto + "€" );

//Calculamos el salario neto mensual y lo mostramos por consola
let salarioMensual = salarioNeto / empleado.pagas;
console.log ( "Con " + empleado.pagas + " pagas el empleado tiene un total de neto mensual de " + salarioMensual + "€" );

