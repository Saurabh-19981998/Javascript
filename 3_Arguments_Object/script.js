"use strict";

// Function using arguments object
function myConcat(separator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// Test cases
console.log(myConcat(", ", "red", "orange", "blue"));
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
