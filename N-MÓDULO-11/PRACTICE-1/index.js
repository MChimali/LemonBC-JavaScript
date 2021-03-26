const reservas = [
    {
      hab: "standard",//300 e
      pax: 1,
      noches: 3
    },
    {
      hab: "standard", //400 e
      pax: 1,
      noches: 4
    },
    {
      hab: "suite", //150 e + 80
      pax: 2,
      noches: 1
    }
];

class totalCharge {
    constructor() {
        this._booking = [];
        this._subtotal = 0;
        this._totalWithVAT = 0;
    }

    calculatehabPrice(roomType){
        switch(roomType){
            case "standard":
                return 100;
            case "suite":
                return 150;
        }
    }

    calculateExtra (guests, nights){        
        return (guests > 1? (guests - 1) * nights * 40 : 0);      
    }

    calculateSubtotal() {        
        this._subtotal = this._booking.reduce((acumulado, {hab, pax, noches})=>
        acumulado + this.calculatehabPrice(hab) * noches + this.calculateExtra(pax, noches), 0)        
    }

    calculateTotal(){
        this._totalWithVAT = (this._subtotal*1.21).toFixed(2);
    }   
    
    get subtotal() {
        return this._subtotal;
    }

    get total(){
        return this._totalWithVAT;
    }

    set booking(finalBooking) {
        this._booking = finalBooking;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}

const newBooking = new totalCharge();
newBooking.booking = reservas;
console.log(newBooking.subtotal)
console.log(newBooking.total)

console.log("---")

class TourOperator extends totalCharge{
    constructor() {
        super();
        this._totalWithDisc = 0;
    }

    calculateTotalWithDisc(){
        this._totalWithDisc = (this._totalWithVAT*0.85).toFixed(2);
    }
   
    calculateSubtotal() {          
        this._subtotal = this._booking.reduce((acumulado, {pax, noches})=>
        acumulado + 100 * noches + this.calculateExtra(pax, noches), 0)        
    }

    calculateTotal(){
        this._totalWithVAT = (this._subtotal*1.21).toFixed(2);
        this.calculateTotalWithDisc();
    }  
 

    get totalDisc(){               
        return this._totalWithDisc;
    }      
}

const newOperator = new TourOperator();
newOperator.booking = reservas;
console.log("Operator total", newOperator.subtotal)
console.log("Operator subtotal", newOperator.total)
console.log("Operator with discount", newOperator.totalDisc)

