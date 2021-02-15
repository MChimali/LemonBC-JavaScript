//hotel info
var hoteles ={
    Lebreros:{
        name:"Lebreros",
        location:"Nervión, Sevilla",
        image:"https://aguilera.es/wp-content/uploads/2017/10/Melia_Lebreros.jpg",
    },
    Melia:{
        name:"Melia",
        location:"La Macarena, Sevilla",
        image:"https://d2poxrheyfxwbo.cloudfront.net/resize/780x500/filters:quality(65):max_age(2604800)/s3/hotel/2b87a16d-1a1a-40ba-b7b6-4d81cea9cfde",
    }
}

var hotel = prompt("¿De qué hotel quieres hacer la reseña, del Melia o del Lebreros?");
document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[hotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicación: " + hoteles[hotel].location;
document.getElementById("hotel-image").src = hoteles[hotel].image;

//give review
var review = prompt("Otorga una puntuación del uno al cinco");
var star = {
    uno:'&#9733'+'&#9734'+'&#9734'+'&#9734'+'&#9734',
    dos:'&#9733'+'&#9733'+'&#9734'+'&#9734'+'&#9734',
    tres:'&#9733'+'&#9733'+'&#9733'+'&#9734'+'&#9734',
    cuatro:'&#9733'+'&#9733'+'&#9733'+'&#9733'+'&#9734',
    cinco:'&#9733'+'&#9733'+'&#9733'+'&#9733'+'&#9733',
}
document.getElementById("customer-review").innerHTML=star[review];

//Interact with user to get posible anonymity
var checkbox = confirm("¿Queres que tu opinión sea anónima?");
document.getElementById("hotel-checkbox").checked = checkbox;