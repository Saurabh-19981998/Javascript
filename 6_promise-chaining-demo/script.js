
"use strict";

// Simulate async tasks
function doSomething() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1: Did something");
      resolve("https://jsonplaceholder.typicode.com/posts/1");
    }, 1000);
  });
}

function fetchData(url) {
  return fetch(url).then(response => response.json());
}

function processData(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3: Processed data");
      resolve(data.title);
    }, 1000);
  });
}

// Chain promises
doSomething()
  .then(url => {
    console.log("Step 2: Fetching data...");
    return fetchData(url);
  })
  .then(data => processData(data))
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(error => console.error("Error:", error));
