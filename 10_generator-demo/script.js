
"use strict";

// Generator function for range
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  debugger;
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i; // Pause and return value
    i = i-1;
    console.log("After yield:", i);
  }
  return iterationCount; // Final return value
}

// Use the generator
debugger;
const gen = makeRangeIterator(1, 10, 2);
let result = gen.next();
while (!result.done) {
  console.log(result.value);
  result = gen.next();
}
console.log("Iterated over sequence of size:", result.value);


// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }