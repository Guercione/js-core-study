/* 
Operators

Types of operators:
 - Common operators
 - Assignment operators
 - Comparison operators
 - Arithmetic operators
 - Bitwise operators
 - Logical operators
 - String operators
 - Conditional (ternary) operator
 - Comma operator
 - Unary operators
 - Relational operators

 Links: 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

Topics:
1. Assignment operators (no binary)
 1.1. Equal assignment
 1.2. Addition assignment
 1.3. Subtraction assignment
 1.4. Multiplication assignment
 1.5. Division assignment
 1.6. Remainder assignment
 1.7. Exponentiation assignment
 */



 /* 
    1. Assignment operators 
    An assignment operator assigns a value to its left operand based on the value of its right operand (x = y).
*/

/* 1.1 Equal assignment -------------------------------------------------------- */
let x = 1
let y = 2

x = y

console.log(x) // 2

/* 1.2 Addition assignment -------------------------------------------------------- */
let x = 1
let y = 2

x += y // x = x + y

console.log(x) // 3

/* 1.3 Subtraction assignment -------------------------------------------------------- */
let x = 1
let y = 2

x -= y // x = x - y

console.log(x) // -1

/* 1.4 Multiplication assignment -------------------------------------------------------- */
let x = 1
let y = 2

x *= y // x = x * y

console.log(x) // 2

/* 1.5 Division assignment -------------------------------------------------------- */
let x = 1
let y = 2

x /= y // x = x / y

console.log(x) // 0.5

/* 1.6 Remainder assignment -------------------------------------------------------- */
let x = 100
let y = 8

x %= y // x = x % y -> 100 / 8 = 12.5 => 0.5 * 8 = 4

console.log(x) // 4

/* 1.7 Exponentiation assignment -------------------------------------------------------- */
let x = 5
let y = 3

x **= y // x = x ** y -> 5 * 5 * 5

console.log(x) // 125


