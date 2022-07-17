// Objetos

let myPerson = {
    name: "Luis",
    age: 40,
    premium: false,
    isActive: function () {
        return false;
    },
    "have-cell": true,
}

console.log(myPerson);
console.log(myPerson.age);
console.log(myPerson["age"]);
console.log(myPerson["have-cell"]);

console.log(Object.entries(myPerson));

delete myPerson.premium;
console.log(myPerson);

Object.freeze(myPerson);
myPerson.age = 30;
console.log(myPerson);

console.log(Object.getOwnPropertyNames(myPerson));
console.log(Object.values(myPerson));

