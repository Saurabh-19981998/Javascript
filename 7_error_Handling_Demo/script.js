
"use strict";

// Simulate async function that may fail
function riskyOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Operation succeeded!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  });
}

// Example 1: Promise chain with .catch()
riskyOperation()
  .then(result => console.log("Promise Result:", result))
  .catch(error => console.error("Promise Error:", error));

// Example 2: Async/Await with try...catch
async function handleRiskyOperation() {
  try {
    const result = await riskyOperation();
    console.log("Async/Await Result:", result);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

handleRiskyOperation();
