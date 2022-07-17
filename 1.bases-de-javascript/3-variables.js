// Variables

// var myHeroe; // Declaración de una variable
// var myHeroeSecond = "Antman"; // Declaración de una variable y asignación.

// var myName = "Luis";
// console.log(myName);

// var valueFirst = "Valor Primero";
// console.log(valueFirst);

// var valueSecond = "Valor Secundario";
// console.log(valueSecond);

// var $valueThird = "Valor Terciario";
// console.log($valueThird);

// var _myName = "Mi nombre es ...";
// console.log(_myName);

// var #myHeroe = "Ironman";
// var 1myHeore = "Hulk";
// var my_heroe = "Hulk";

// Tipos de declaraciones

// var
// var myAge = 26;
// console.log(myAge);
// var myAge = 30;
// console.log(myAge);
// myAge = 25;
// console.log(myAge);

// Let
// let myExp = 3;
// console.log(myExp);
// myExp = 5;
// console.log(myExp);
// let myExp = 10;

// Const
// const myName = "Luis";
// console.log(myName);
// myName = "Pepe";
// const myName = "Pepe";

// Scope Global
// var myName = "Luis";
// console.log(myName);

// function scopeGlobal() {
//     console.log(myName);
//     myName = "Cris";
//     console.log(myName);
//     if(true) {
//         myName = "Jesus";
//         console.log(myName);
//     }
//     console.log(myName);
// }

// scopeGlobal();
// console.log(myName);

// Scope Function
// var secondName = "David";
// console.log(secondName);

// function scopeFunction() {
// var secondName; -> undefined
//     console.log(secondName);
//     var secondName = "Cris";
//     console.log(secondName);
//     secondName = "Jesus";
//     console.log(secondName);
//     if(true) {
//         var secondName = "María";
//         console.log(secondName);
//     }
//     console.log(secondName);
// }

// scopeFunction();
// console.log(secondName);

// Scope block

let thirdName = "José";
console.log(thirdName);

function scopeBlock() {
    let thirdName = "María";
    console.log(thirdName);
    thirdName = "Jesus";
    console.log(thirdName);
    if (true){
        let thirdName = "Pepe";
        console.log(thirdName);
    }
    console.log(thirdName);
}

scopeBlock();
console.log(thirdName);
