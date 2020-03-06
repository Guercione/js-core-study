/* 
Var, Let and Const declaration

- var
Can be used in all function scope

- let
Can be used only in the block scope ( if { this is a block } )

- const
Can be used only in the block ( if { this is a block } ) scope and can't be modificated

- Hoisting
Hoisting is a JavaScript behavior of moving declarations to the top of the scope

Aditional information
 - A function declaration is first then variable on hoisting
 - A function is not an attribution, so console.log at the beginning works 

 Links: 
 - https://tylermcginnis.com/var-let-const/
 - https://www.w3schools.com/js/js_hoisting.asp
 - https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
*/

/* 1. var */
/* 1.1 var scope */
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

/* 1.2 var Hoisting */
console.log(x); // undefined
var x = 1
console.log(x) // 1

// BEHIND THE CODE

var x;

console.log(x) // undefined

x = 1

console.log(x) // 1


/* 2. let */
/* 2.1 let scope */
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

/* 2.2 let Hoisting */

console.log(x); // ReferenceError: x is not defined
let x = 1

// BEHIND THE CODE

console.log(x) // ReferenceError: x is not defined

let x;
x = 1


/* 3. const */

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