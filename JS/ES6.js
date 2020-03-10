/* 
What is ES6 (ES2015 / ECMAScript 2015)
ES6 is a major update to JavaScript that includes dozens of new features. With a focus on simplicity and readability.

Features
- Class (normal and extends)
- Static function on Class
- Const and Let (file var-let-const.js)
- Arrow function (don’t lose the scope of the class)
- Default value to a param
- Destructuring (const { test } = object / [a, b, ...rest] = [10, 20, 30, 40, 50])
- Spread
- Template Literals/Template strings ( `Text ${var}` )
- Short sintax to object (user: { name } name = name: name)
- Import (import React from “react”)
- Async and Await

 Links: 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 - https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
 - https://github.com/lukehoban/es6features
 - https://medium.com/@kavisha.talsania/top-10-es6-features-every-javascript-developer-must-know-4c81ec54bbcd
*/

/* 1. Class and Static function on Class and Template Literals/Template strings */
class App {
    constructor(name, age) {
        this.name = name
        this.agr = age
    } 

    static log() {
        console.log("Guilherme")
    }

    getName = () => {
        return `My name is: ${this.name}`
    }
}

const app2 = new App("Guilherme", 24)

app2.getName() // My name is: Guilherme


/* 2. Arrow Function and Default value to a param */
const arrowFunction = (name = "Guilherme", surname = "Vecino") => { 
    return `${name} ${surname}`
}

console.warn(arrowFunction()) // Guilherme Vecino
console.warn(arrowFunction("John", "Doe")) // John Doe


/* 3. Spread and Destructuring  */
/* 3.1 Spread */
const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5]

console.log(arr2) // [1, 2, 3, 4, 5]

const obj = { name: "Guilherme" }
const obj2 = { ...obj, sername: "Vecino" }

console.log(arr2) // {name: "Guilherme", sername: "Vecino"}

/* 3.2 Destructuring */
/* 3.2.1 Object */
const person = { name: "Guilherme", surname: "Vecino", age: 24,  skills: { js: "advanced", react: "advanced", sass: "intermediate", typescript: "Novice"  }}
const { name, surname: mySurname, skills: { js } } = person

console.log(name) // Guilherme
console.log(js) // advanced
console.log(mySurname) // Vecino
console.log(surname) // ReferenceError: "surname" is not defined
console.log(skills) // ReferenceError: "skills" is not defined
console.log(age) // ReferenceError: "age" is not defined

/* 3.2.2 Array */
const arr = [1, [[2], 3]]
var [num1, [[num2], num3]] = arr

console.log(num1) // 1
console.log(num2) // 2
console.log(num3) // 3

var [,,age] = ["Guilherme", "Vecino", 24]
console.log(age) //24

function getName() {
    return ["Guilherme", 24]
}

var [name, agr] = getName()


/* 4. Import */
// BEFORE ES6
const React = require("react")
const useState = require("react").useState
const libMoment = require("moment")

// AFTER ES6
import React, { useState } from "react"
import * as libMoment from "moment"


/* 5. Async/Await */
// BEFORE ES6
request.then(function(res) {
    return res
}).catch(function(err) {
    throw new Error(err)
})

// AFTER ES6
const response = async () => {
    try {
        let res = await request()
        return res
    } catch (error) {
        throw new Error(err)
    }
}