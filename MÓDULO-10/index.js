////////////////
//// SPREAD ////  spread elements of array or object proportionally
////////////////

//llamadas a funciones

const names = ["Javi", "Lissette", "Dani"];
const greetPeople = (greeting, name1, name2, name3) => {
console.log(greeting + " " + name1 + ", " + name2 + " y " + name3);
};
greetPeople("Buenos días", ...names);

//Spread en arrays

let original = [1, 2, 3];
let copy = [1100, ...original, 20]; // Extendemos cada elemento del array origen en el array destino
console.log(copy); // [1, 2, 3]

//Spread en arrays

original = {
    name: "Javi",
    surname: "Calzado",
    age: 36,
};

let details = { 
    age: 36,
    phone: 605203952
}

copy = { city: "Miami", ...original };
console.log(copy);
let user = {...original, ...details}
console.log(user);
    
////////////////
///// REST ///// When declaring functions, we give as many arguments as the function needs
////////////////

const myFunction = (...myArguments) => {
    console.log(myArguments);
    console.log(myArguments.length); // Es un array!
};

myFunction("uno", 2, true, "justo!");



/////////////////
//Destructuring// extracting in variables elements from arrays or objects
/////////////////

let teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const [primero, segundo, tercero] = teachers;
console.log(primero, segundo, tercero);

teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const getSecondTeacher = ([, second]) => second;
console.log(getSecondTeacher(teachers));

let person = {
    id: 4451234,
    nombrePila: "Javi",
    surname: "Calzado",
    age: 36,
};

const { nombrePila: userName, surname: userSurname } = person;

console.log(userName + " " + userSurname);

//////////
const user1 = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
    location: {
        country: "Spain",
        city: "Málaga",
        postalCode: 29017,
    },
};
const getUserNameAndCountry = ({ name, location: { country } }) => name + " from " + country;
console.log(getUserNameAndCountry(user1));

//////////

const sampleObject = {
    id: 43,
    name: "Javi",
    age: 36,
};
const { id, ...rest } = sampleObject;
console.log(id, rest);

//OPERACIONES SIN BUCLES

const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: true },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
];
    
//EVERY// devuelve true si todos los elementos cumplen una condición
console.log("-----------")
const allBooksRead = books => books.every(book => book.read);
console.log(allBooksRead(bookCollection)); // false
//SOME//devuelve true si al menos un elemento cumple una condición
console.log("-----------")
const anyBookRead = books => books.some(book => book.read);
console.log(anyBookRead(bookCollection)); // true
//FIND//
console.log("-----------")
const findEveBook = books => books.find(book => book.title === "Eve");
console.log(findEveBook(bookCollection));

const findUnknownAuthorBook = books => books.find(book => !book.author);
console.log(findUnknownAuthorBook(bookCollection));
//FIND INDEX//
const findEveBook = books => books.findIndex(book => book.title === "Eve");
console.log(findEveBook(bookCollection));
//FILTER//es conmo  find pero encuentra más de un elemento creando un nuevo array
const unreadBooks = books => books.filter(book => book.read === false);
console.log(unreadBooks(bookCollection));

const booksOver300Pages = books => books.filter(book => book.pages >= 300);
console.log(booksOver300Pages(bookCollection));

const multiAuthorBooks = books => books.filter(book => Array.isArray(book.author));
console.log(multiAuthorBooks(bookCollection));
//MAP//
const getTitleCollection = books => books.map(book => book.title);
console.log(getTitleCollection(bookCollection));
const addOwner = (owner, books) =>
books.map(book => {
return { ...book, owner };
});
const addOwner = (owner, books) => books.map(book => ({...book, owner}));
console.log(addOwner("Javi", bookCollection));
console.log(addOwner("Lissette", bookCollection));
//REDUCE// 
const getTotalPages = books => books.reduce((sumPages, book) => sumPages + book.pages, 0);
console.log(getTotalPages(bookCollection));  

//FOREACH// realiza un bucle
const showTitles = books => books.forEach(book => console.log(book.title));
showTitles(bookCollection);
//JOIN//
const sample1 = ["Javi", "Lissette", "Dani"];
const sample2 = ["Texto", 43, true];
console.log(sample1.join("-"));
console.log(sample2.join(" & ")); // Hace casting a string de los elementos.


   //const firstEqual = (x, ...myStrings) => myStrings.every(string => {return /^m/i.test(string)}) 