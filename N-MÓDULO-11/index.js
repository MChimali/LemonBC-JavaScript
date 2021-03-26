mycesta = [
    {
    nombre: "Cerveza",
    cantidad: 1,
    precio: 2,
    tipoIVA: "general"
    },
    {
    nombre: "Galletas",
    cantidad: 3,
    precio: 1,
    tipoIVA: "reducido"
    },
    {
    nombre: "pan",
    cantidad: 4,
    precio: 0.5,
    tipoIVA: "superreducido"
    }
];

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
    }

    calculaSubtotal() {
        this._subtotal = this._cesta.reduce(
            (acumulado, {cantidad, precio}) => acumulado + cantidad * precio,
            0
            );
        }
            

    get subtotal() {
        return this._subtotal;
    }
    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal();
    }
}
const carrito = new CarritoDeLaCompra();
carrito.cesta = mycesta;
console.log("subtotal", carrito.subtotal);
