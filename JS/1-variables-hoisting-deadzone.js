/* 
Variables, Hoisting and Deadzone

Hoisting
 - Hoisting is a JavaScript behavior of moving 'declarations' (variables and functions) to the top of the scope
 - Behind the code the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

Temporal/Temporary Dead Zone (TDZ)
 - There are two phases types, Creation Phase and Execution Phase.
 - In Creation Phase a memory space is allocate for variables 'var' and the 'initializer' set the varible value to 'undefined'. In the Execution Phase the engine goes through the code and executes.
 - With ES6 features (let, const, default parameters, etc) the 'initializer' set the variables with a special mode called 'TDZ (Temporal Dead Zone)', which means the variables exist but you can’t access them until you assign some value.

 Aditional information
 - A function declaration is first then variable on hoisting
 - A function is not an attribution, so console.log at the beginning works 

 Links: 
 - https://tylermcginnis.com/var-let-const/
 - https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 - https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
 - https://medium.com/@sbakkila/javascript-es-6-let-and-the-dreaded-temporal-dead-zone-85b89314d168

Topics:
1. var
 1.1. var Scope
 1.2. var Hoisting
 1.3. var Global Object

2. let
 2.1. let Scope
 2.2. let Hoisting

3. const
 3.1. const Scope
 3.2. const Value
 3.3. const Object
 3.4. const Array
 3.5. const Hoisting
 */


 
/* 
    1. var 
    Can be used in all function scope
*/

/* 1.1 var scope -------------------------------------------------------- */
/* EXAMPLE 1 -------------------------------------------------------- */
function varFunction(num, bool = false) {
    var x = 1

    if (bool) {
        x = 2
        return x + num
    }   

    return x + num
}

console.warn(varFunction(10)) // 11
console.warn(varFunction(10, true)) // 12

/* EXAMPLE 2 -------------------------------------------------------- */
var x = 1

function varFunction(num, bool = false) {
    var x = 12
    console.log(x) // 12
}

varFunction()
console.log(x) // 1

/* 1.2 var Hoisting -------------------------------------------------------- */
console.log(x); // undefined
var x = 1
console.log(x) // 1

// BEHIND THE CODE

var x = undefined // Creation Phase

console.log(x) // undefined - Execution Phase

x = 1 // Execution Phase

console.log(x) // 1 - Execution Phase

/* 1.3 var and Global Object -------------------------------------------------------- */
var y = 3; // Globally scoped
let x = 1; // Not globally scoped
const z = 6; // Not globally scoped

console.log(window.y); // 3
console.log(window.x); // undefined
console.log(window.z); // undefined



/* 
    2. let
    Can be used only in the block scope ( if { this is a block } ) 
*/

/* 2.1 let scope -------------------------------------------------------- */
function letFunction() {
    var x = 1
    let w = 3

    if (x) {
        let y = 2
        var z = 4

        console.warn(y) // 2
    }
       
    console.warn(x) // 1
    console.warn(w) // 3
    console.warn(z) // 4
    console.warn(y) // 'y' is not defined
}

letFunction()

/* 2.2 let Hoisting -------------------------------------------------------- */
console.log(x); // ReferenceError: x is not defined
let x = 1

// BEHIND THE CODE

console.log(x) // ReferenceError: x is not defined

let x;
x = 1



/* 
    3. const 
    Can be used only in the block ( if { this is a block } ) scope and can't be modificated
*/

/* 3.1 Scope */
function constScopeFunction() {
    var x = 1
    const w = 3

    if (x) {
        const y = 2
        var z = 4

        console.warn(y) // 2
    }
       
    console.warn(x) // 1
    console.warn(w) // 3
    console.warn(z) // 4
    console.warn(y) // 'y' is not defined
}

constScopeFunction()

/* 3.2 Value */
function constValueFunction() {
    var x = 1
    const w = 3

    console.log(x) // 1

    x = 2

    console.log(x) // 2

    w = 1 // Uncaught TypeError: Assignment to constant variable.
}

constValueFunction()

/* 3.3 Object */
function constObjFunction() {
    const obj = { x: 3 }

    console.log(obj.x) // 3

    obj.y = 4

    console.log(obj.y) // 4

    obj.z = "Guilherme" 

    console.log(obj) // { x: 3, y: 4, z: "Guilherme" }

    obj = { x: 4 } // Uncaught TypeError: Assignment to constant variable.
}

constObjFunction()

/* 3.4 Array */
function constArrayFunction() {
    const arr = [1, 2]

    console.log(arr) // [1, 2]

    arr[2] = 3

    console.log(arr) // [1, 2, 3]

    arr.push(4)

    console.log(arr) // [1, 2, 3, 4]

    arr = [1, 2, 3, 4, 5] // Uncaught TypeError: Assignment to constant variable.
}

constArrayFunction()

/* 3.5 const Hoisting */

console.log(x); // Cannot access 'x' before initialization
const x = 1

// BEHIND THE CODE

console.log(x) // Cannot access 'x' before initialization

const x;
x = 1