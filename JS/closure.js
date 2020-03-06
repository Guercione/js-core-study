/* 
What is Closure
A closure is a function defined inside another function and has access to the variable which is declared and defined in the parent function scope.

Scopes of Closure
- Own scope 
- Parent scope
- Global

 Links: 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

/* 1. Closure Example */
function exampleFunc() {
    var name = 'Guilherme';

    function showName() {
      alert(name);
    }

    return showName;
  }
  
  var anotherFunc = exampleFunc();
  
  anotherFunc();