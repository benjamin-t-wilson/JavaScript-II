// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function guy() {
  console.log("I can only do so much, I only have two arms! I am not an octopus!");
  function octopus() {
    console.log("I can only do so much, I only have eight arms! I am not a centipede!");
    function centipede() {
      console.log("I can only do so much, I only have 100 arms! I am not a millipede!");
      function millipede() {
        console.log("I have a pretty good handle on things.");
      }
    millipede();
    }
  centipede();
  }
octopus();
}
guy();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return function() {
    return count += 1;
  };
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (param) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
