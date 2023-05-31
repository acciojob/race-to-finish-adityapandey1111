window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const outputDiv = document.getElementById('output');

// Create an array of five promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime())),
];

// Utility function to generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Use Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.log('All promises rejected:', error);
  });
