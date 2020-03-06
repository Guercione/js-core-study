/* 
This
Every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.

Methods
- .call
    - Call the context (this or object) to inside the function
    - Invoke the function immediately
    - func.call(this, args1, agrs2)
- .apply
    - Invoke the function immediately
    - Call the context (this or object) to inside the function, but the arguments are an array (isn't an array, it's similar)
    - func.call(this, [arg1, arg2])
    - To use: arguments[0] 
    - To convert to array: Array.from(arguments)

- .bind
    - Returns a bound function that, when executed later, will have the correct context ("this")
    - func.bind(this)(args1, args2)
    - Bind on React: this.funcName = this.funcName.bind(this)

 Links: 
 - https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c
 - https://www.codementor.io/@niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp
*/

/* 1. This in action */
function getName() {
    console.log(this.name);
}
  
  var name = "Guilherme";

  var obj1 = { name: "Maria", myName: getName };
  var obj2 = { name: "José", myName: getName };
  
  getName();           // "Guilherme"
  obj1.myName();      // "Maria"
  obj2.myName();      // "José"

  
/* 2. Call */
/* 2.1 Simple Call */
function getName(name, surname, age) {
    console.log(name, surname, age);
}

getName.call(this, "Guilherme", "Vecino", 24) // Guilherme Vecino 24

/* 2.1 Call Object */
function getName(name, surname, age) {
    console.log(name, surname, age, this.job);
}

const obj = { Job: "JS Developer" }

getName.call(obj, "Guilherme", "Vecino", 24) // Guilherme Vecino 24 JS Developer


/* 3. Apply */
function getName(name, surname, age) {
    console.log(name, surname, age);
}

getName.apply(this, ["Guilherme", "Vecino", 24]) // Guilherme Vecino 24


/* 4. Bind */
/* 4.1 Simple Bind */
function getName(name, surname, age) {
    console.log(name, surname, age);
}

const guilherme = getName.bind(this, "Guilherme", "Vecino", 24)
const maria = getName.bind(this)

console.log(guilherme()) // Guilherme Vecino 24
console.log(maria("Maria", "Flores", 45)) // Maria Flores 45

/* 4.2 Bind object */
function getName() {
    console.log(this.name, this.surname, this.age);
}

const obj = { name: "José", surname: "Alberto", age: 68 }
const jose = getName.bind(obj)

console.log(jose(obj)) // José Alberto 68