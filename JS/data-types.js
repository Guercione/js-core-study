
/*
Data Types

1. Types
JavaScript is a loosely typed, or dynamically typed, language. This means that a variable that’s declared with one type can be converted to another type without explicitly converting the data to another type.

2. Primitives Types
Primitive types are immutable values, which are incapable of being changed

Types:
Boolean
Null
Undefined
Number
BigInt
String
Symbol (ES6) - 

3. Non Primitives Types
Non Primitive types are mutable values. In JS there is onlye Object as a Non Primitive.
Objects can be seen as a collection of properties, then properties can be added and removed, the values can be values of any type, including other objects, which enables building complex data structures.

Types:
Object


 Links: 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 - https://codeburst.io/a-practical-guide-to-es6-symbol-3fc90117c7ac
 - https://medium.com/better-programming/javascript-data-types-ccc06e40512b
 */


/* 1. Types */

let number = 1;    
number = '1';
number = undefined;
number = true

console.warn(number) // true

number = 1

console.warn(number) // 1
console.warn(typeof number) // number

/* 1. Primitives */
var BoolType = true // Boolean
var NullType = null // Null
var NumberType = 1 // Number
var UndefinedType = undefined // Undefined
var BigIntType = 2n ** 53n // BigInt
var StringType = 'Guilherme' // String
var SymbolType = Symbol('foo') // Symbol (after ES6)

/* 1. Non Primitives (object) */
var obj = {
    x: 1,
    y: 2
}

obj.x = 3
obj.z = 1

console.warn(obj) // { x: 3, y: 2, z: 1 }