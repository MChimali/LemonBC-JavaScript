//define the hotel as an object with properties
var Hotel ={
    name:"Melia",
    location:"Sevilla",
    image:"https://d2poxrheyfxwbo.cloudfront.net/resize/780x500/filters:quality(65):max_age(2604800)/s3/hotel/2b87a16d-1a1a-40ba-b7b6-4d81cea9cfde",
}
//Upload info about hotel from JS
document.getElementById("hotel-name").innerHTML= "Hotel "+Hotel.name;
document.getElementById("hotel-location").innerHTML= "Ubicación: "+Hotel.location;
document.getElementById("hotel-image").src= Hotel.image;

//Interact with user to get the review
var review = prompt("please give score from 1 to 5");
document.getElementById("customer-review").innerHTML= review + " estrellas";

//Interact with user to get posible anonymity
var checkbox = confirm("¿Queres que tu opinión sea anónima?");
document.getElementById("hotel-checkbox").checked = checkbox;