/* 
What is Prototype

Mozilla
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

Other Words
Prototype is a property that every function created on JS has that appoints to an object.

Aditional information
 - Every function has a prototype
 - Allows to share methods across all instances of a function
 - Allows to create new functions inside the function

 Links: 
 - https://tylermcginnis.com/beginners-guide-to-javascript-prototype/
*/


/* 1. Simple Prototype */
function simpleFuncion() {}

console.log(simpleFuncion.prototype) // {constructor: ƒ simpleFuncion()} 



/* 2. Practical Example  */
const arr = []
/* Equal to */
const arrNoSugar = new Array()

// All the arrays methods (split, map, filter, etc) is on the prototype of a new array
console.log(Array.prototype) // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]


/* 3. Add a function by Prototype */
function personFunction(name, surname, age) {
    const person = Object.create(personFunction.prototype)

    person.name = name
    person.surname = surname
    person.age = age

    return person;
}

personFunction.prototype.changeSurname = function (surname) {
    console.warn("The surname has been changed to " + surname)
    this.surname = surname
}

console.log(personFunction.prototype) // {changeSurname: ƒ (surname), constructor: ƒ personFunction (name, surname, age)}

const guilherme = personFunction("Guilherme", "", 24)

console.log(guilherme) // {name: "Guilherme", surname: "", age: 24}

guilherme.changeSurname("Vecino") // The surname has been changed to Vecino

console.log(guilherme) // {name: "Guilherme", surname: "Vecino", age: 24}



/* 4. Add a function by Prototype with NEW */
// The "new" before instantiate a function tell to the JS create an object called "this"
function personFunctionWithNew(name, surname, age) {
    // const person = Object.create(personFunction.prototype) - Automatic once used "NEW" 

    this.name = name
    this.surname = surname
    this.age = age

    // return person - Automatic once used "NEW"
}

personFunctionWithNew.prototype.changeSurname = function (surname) {
    console.warn("The surname has been changed to " + surname)
    this.surname = surname
}

console.log(personFunctionWithNew.prototype) // {changeSurname: ƒ (surname), constructor: ƒ personFunction (name, surname, age)}

const guilherme = new personFunctionWithNew("Guilherme", "", 24)

console.log(guilherme) // {name: "Guilherme", surname: "", age: 24}

guilherme.changeSurname("Vecino") // The surname has been changed to Vecino

console.log(guilherme) // {name: "Guilherme", surname: "Vecino", age: 24}



/* 5. Working with ES6 */
// The Class method uses the Prototype from behind"
class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    changeSurname(surname) {
        console.warn("The surname has been changed to " + surname)
        this.surname = surname
    }

}

const guilherme = new Person("Guilherme", "", 24)

console.log(guilherme) // {name: "Guilherme", surname: "", age: 24}

guilherme.changeSurname("Vecino") // The surname has been changed to Vecino

console.log(guilherme) // {name: "Guilherme", surname: "Vecino", age: 24}


/* EXTRA */

/* Get all Prototypes */
function person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
}

person.prototype.changeSurname = function (surname) {
    console.warn("The surname has been changed to " + surname)
    this.surname = surname
}

const guilherme = new Person("Guilherme", "", 24)

console.log(Object.getPrototypeOf(guilherme)) // {constructor: ƒ, changeSurname: ƒ}

/* Object.create */
const obj = { name: "Guilherme", surname: "Vecino" }

const obj2 = Object.create() // error

const obj3 = Object.create({})
console.log(obj3) // {}

const obj4 = Object.create(obj)
console.log(obj4)  // {}
console.log(obj4.name) // Guilherme
