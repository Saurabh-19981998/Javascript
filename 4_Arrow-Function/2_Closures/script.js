"use strict";

// Example 1: Basic Closure
function pet(name) {
  return function () {
    return name;
  };
}
const myPet = pet("Vivie");
console.log("Basic Closure:", myPet());

// Example 2: Encapsulation
function createCounter() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
}
const counter = createCounter();
debugger;
counter.increment();
counter.increment();
console.log("Counter:", counter.getCount());

// Example 3: IIFE for Private Data
const getSecret = (function () {
  const secret = "HiddenValue";
  return function () {
    return secret;
  };
})();
console.log("Secret:", getSecret());