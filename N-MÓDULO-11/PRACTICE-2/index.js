const reservas = [
    {hab: "standard", pax: 1, nights: 3, breakfast: true},
    {hab: "standard", pax: 1, nights: 4, breakfast: false},
    {hab: "suite", pax: 2, nights: 1, breakfast: false}
  ];

class BookingMain{
    constructor(standardPrice, suitePrice, discount){
        this._booking = [];
        this._subtotal = 0;
        this._totalDiscounted = 0;
        this._totalWithVat = 0;
        this.standardPrice = standardPrice;
        this.suitePrice = suitePrice;
        this.discount = discount;
    }
    
    calculateHabPrice(roomType){
        switch(roomType){
            case "standard":
                return this.standardPrice
            case "suite":
                return this.suitePrice;
        }
    }
    
    breakfastCost(nights, pax, breakfast){
        return (breakfast? nights * pax * 15 : 0 )
    }

    calculateExtra (guests, nights){        
        return (guests > 1? (guests - 1) * nights * 40 : 0);      
    }

    calculateSubtotal() {               
        this._subtotal = this._booking.reduce((acumulado, {hab, pax, nights, breakfast})=>
        acumulado + this.calculateHabPrice(hab) * nights + this.calculateExtra(pax, nights) + this.breakfastCost(nights, pax, breakfast), 0) 
               
    }    

    calculateTotalDiscounted(){
        this._totalDiscounted = this._subtotal - (this._subtotal * this.discount / 100);
    }

    calculateTotalWithVat(){
        this._totalWithVat = this._totalDiscounted * 1.21;
    }

    get subtotal(){
        return (this._subtotal).toFixed(2);
    }

    get totalDiscounted(){
        return (this._totalDiscounted).toFixed(2);
    }

    get totalWithVat(){
        return (this._totalWithVat).toFixed(2);
    }

    set booking(arrayBooking){
        this._booking = arrayBooking;
        this.calculateSubtotal();
        this.calculateTotalDiscounted();
        this.calculateTotalWithVat();
    }   
}

class BookingClient extends BookingMain{
    constructor(){
        super(100, 150, 0)
    }
}

class BookingOperator extends BookingMain{
    constructor(){
        super(100, 100, 15)        
    }
}

const client = new BookingClient;
client.booking = reservas;
console.log(client.subtotal);
console.log(client.totalDiscounted);
console.log(client.totalWithVat);

console.log("----")

const operator = new BookingOperator;
operator.booking = reservas;
console.log(operator.subtotal);
console.log(operator.totalDiscounted);
console.log(operator.totalWithVat);



