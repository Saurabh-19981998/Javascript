
"use strict";

// Custom range iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  return {
    next() {
      debugger;
      if (nextIndex < end) {
        const result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    }
  };
}

// Use the iterator
debugger;
const iter = makeRangeIterator(1, 10, 2);
let result = iter.next();
while (!result.done) {
  debugger;
  console.log(result.value);
  result = iter.next();
}
console.log("Iterated over sequence of size:", result.value);

// //1,2,3
// function  simpleGenerator() {
//   let i =1;
//   return {
//     next()
//     {
//       if(i<=3)
//       {
//         return {value:i++, done:false};
//       }
//       return {done:true};
//     };
// }