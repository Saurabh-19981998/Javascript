<<<<<<< HEAD
"use strict";

// Example 1: Short Syntax
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// Example 2: Lexical this
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log("Age:", this.age);
  }, 1000);
}
const p = new Person();
=======
(function showMessage() {
   "use strict";
   function greetMe(yourName) {
     alert("Hello " + yourName);
     console.log("Hello " + yourName);
   }
   greetMe("Shweta");
})();
>>>>>>> 79d30e1 (first commit)
