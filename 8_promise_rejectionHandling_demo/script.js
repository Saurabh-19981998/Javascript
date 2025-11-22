
"use strict";

// Example: Browser global event for unhandled promise rejection
window.addEventListener("unhandledrejection", event => {
  console.error("Global Handler: Unhandled Promise Rejection");
  console.error("Reason:", event.reason);
  console.error("Promise:", event.promise);
});

window.addEventListener("rejectionhandled", event => {
  console.warn("Global Handler: Rejection handled later");
});

// Simulate unhandled rejection
new Promise((_, reject) => {
  setTimeout(() => reject("Something went wrong!"), 1000);
});
