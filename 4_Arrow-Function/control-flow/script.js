"use strict";

console.log("Control Flow: If-Else Statements");

let score = 40;
console.log(score);

if(score>=90)
{
  console.log("Grade: A");
}
else if(score>=80)
{
  console.log("Grade: B");
}     
else if(score>=70)
{
  console.log("Grade: C");
}
else 
{
  console.log("Grade: D");
}

try {
  let result = riskyOperation();
}
catch (error) {
  console.error("An error occurred: " + error.message);
}

function riskyOperation() {
  throw new Error("Simulated failure!");
}

//Falsy
if(NaN){
  console.log("Hi");
}