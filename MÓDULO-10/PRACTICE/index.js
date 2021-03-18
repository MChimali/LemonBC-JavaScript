//has ID
let sampleObject = {id: 43, name: "Javi", age: 36};
const hasId = ({id}) => !(id === undefined);
console.log(hasId(sampleObject));

//head
sampleObject = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const head = ([firstElement]) => firstElement;
console.log(head(sampleObject));

//tail
const tail = ([,...rest]) => rest;
console.log(tail(sampleObject));

//swapFirstToLast
const swapFirstToLast = ([first,...rest]) => [...rest,first];
console.log(swapFirstToLast(sampleObject));

//excludeId
sampleObject = { name: "Javi", id: 43, age: 36};
const excludeId = ({id ,...rest}) => rest;
console.log(excludeId(sampleObject))

//wordsStartingWithA
sampleObject = ["mueble", "Avion", "nariz", "oveja", "azar", "aguacate", "zorro", "Azul"];
const wordsStartingWithA = words => words.filter(word => /^a/i.test(word));
console.log(wordsStartingWithA(sampleObject));

//conCat
const conCat = (...myStrings) => myStrings.join(" | ");
console.log(conCat("uno", "dos", "tres"))

//multArray
sampleObject = [1, 6, 23, 12, 4];
const multArray = (array, x) => array.map(item => item*x);
console.log(multArray(sampleObject, 2));

//calcMult
const calcMult = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(calcMult(1, 3, 6, 3))

//swapFirstSecond
sampleObject = [1, 2, 3, 4, 5];
const swapFirstSecond = ([first, second, ...rest]) => [second,first, ...rest];
console.log(swapFirstSecond(sampleObject));

//firstEqual
const firstEqual = (x,...myStrings) => myStrings.every(string => {    
    const pattern = new RegExp(`^${x}`,"i");
    return pattern.test(string)
})
console.log(firstEqual("m","Mmamut","Mmandarina", "mar", "manicomio"))

const firstEqual2 = (x,...myStrings) => myStrings.every(([firstLetter]) => firstLetter.toLowerCase() === x.toLowerCase());
console.log(firstEqual2("M","mamut","Mmandarina", "mar", "manicomio"))

//longest
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5, 6, 7]
const arr3 = [1, 2, 3, 4]

const longest = (...arrays) => {arrays.sort((a, b) => {
        return b.length - a.length
        })
    return arrays[0]
};
console.log(longest(arr1, arr2, arr3));

//searchInStringV1
const searchInStringV1 = (string, letter) => { 
    let array = Array.from(string);
    return array.reduce((result,item)=>{
        if(item===letter)result++;
        return result
    }, 0)
};

console.log(searchInStringV1("aaaaaalllsssssss", "s"))

//searchInStringV2
const searchInStringV2 = (string, letter) => {
    let array = Array.from(string);
    return  array.filter(item => item === letter).length;
}
console.log(searchInStringV2("aaaaaall", "a"))

//sortCharacters
const sortCharacters = string => {
    let array = Array.from(string);
    let finalArray = array.sort((a, b) => (a > b ? 1 : -1))
    return finalArray.join("")
}
console.log(sortCharacters("Antonio"))

//shout
const shout2 = (...rest) => rest.reduce((result, string)=>result + "¡" + string.toUpperCase() + "! ","");
console.log(shout2("alpi", "tortuga", "rhino"))

//Lista de compra

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const calculateTax = array => array.map((item) => (item.price * 0.21).toFixed(2));
console.log(calculateTax(shoppingCart));

//B. Ordena la lista de más a menos unidades.
const sortCart = cart => cart.sort((b,a) => a.units - b.units);
console.log(sortCart(shoppingCart));

//C. Obtén el subtotal gastado en droguería.
const drogeriaBudget = cart => {
    const drogueriaList = cart.filter(item => item.category === "Droguería")
    return drogueriaList.reduce((total, item) => total + (item.price*item.units), 0)
};
console.log(drogeriaBudget(shoppingCart));

//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const orderCategory = cart => cart.sort((a, b) => (a.category > b.category ? 1 : -1))

const productList = cart => (orderCategory(cart)).map(item =>
    console.log("Producto: " + item.product + " -> " + "precio: " + item.price + "€, " + "total: " + item.units*item.price + "€")
)

productList(shoppingCart);

