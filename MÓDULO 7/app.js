const value1 ="12345678-";
const value2 = "2";

const pattern =/^\d{8}[ -_]?$/;


console.log(pattern.test(value1));
console.log(pattern.test(value2));

//w >> [a-z, A-Z, 0-9, _]
//W >> [^a-z, A-Z, 0-9, _]

//d >> [0-9]
//D >> [^0-9]

//s >> [    ] (space or tab)
//S >> [^    ] NO (space or tab)

// ? >> {0,1}
// * >> {0,}
// + >> {1,}

