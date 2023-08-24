// Named Function
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Anonymous Function
  const sayGoodbye = function(name) {
    console.log(`Goodbye, ${name}!`);
  };
  
  // Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log('This is an IIFE (Immediately Invoked Function Expression)');
  })();
  
  greet('Alice');
  sayGoodbye('Bob');
  