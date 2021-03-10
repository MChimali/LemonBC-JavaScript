/* const myPromise1 = new Promise(function(resolve, reject) {
    resolve("Hola, este es el resultado de una promesa")
})

myPromise1.then(function(result){
    alert(result)
});



const myPromise2 = new Promise((resolve, reject) => {
    resolve("Hola, este es el resultado de una promesa")
})

myPromise2.then(result => {
    alert(result)
}); */


//setTimeout(function(){reject("numero menor que 0.5")}, 3000)

/* var randomNumber = Math.random();
console.log(randomNumber);

const myPromise3 = new Promise(function(resolve, reject){

    if(randomNumber > 0.5){        
        setTimeout(function(){resolve("numero mayor que 0.5")}, 1500);        
    }else{
        setTimeout(function(){resolve("numero menor que 0.5")}, 1500);
    }
    
});

myPromise3.
    then(result => {
        const myPromise4 = new Promise(resolve => {
            setTimeout(function(){
                resolve("El número creado es un " + result)
            }, 1500)
        })
    return myPromise4;
    }).then(result2 => {
            console.log(result2)
        }); */


        
/* console.log(fetch("https://api.github.com/orgs/apple/members"));

fetch("https://api.github.com/orgs/apple/members")
    .then(result => {return result.json()})
    .then(result => {console.log(result)}); */



/* function getClients() {
    return axios
        .get("https://breakingbadapi.com/api/characters")
        .then(response => {        
            return response.data          
    })}

    getClients().then(data =>{
        console.log(data)
    }) */

/* axios
    .get("https://api.github.com/orgs/apple/members")
    .then(response => {
        console.log(response)
    return response.data;
})
    .then(data => {
    for (let item of data){
        document.write(item.login + "-----")
    }
})
.catch(error => {
    document.write("se ha producido un error")
}) */

import "./styles.css";
const data = require("./data-business");
const utils = require("./utils")

data.getArray().then(array => {
    const root = document.getElementById("root");
    root.innerText ="";
    for (let i = 0; i < array.length; i++){
        createHTML(array[i], root)
}});

function createHTML (element, root) {
    const characterDIV = utils.createCharacterRow(element);   
    root.append(characterDIV);
    characterDIV.addEventListener("click",() => utils.showCharacter(element))
}