const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log(Checking)
function calculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      rl.question('Enter the operation (+, -, *, /): ', (operation) => {

        console.log(typeof num1);
        console.log(typeof num2);

        num1 = parseInt(num1);  
        num2 = parseInt(num2);  

        console.log(typeof num1);
        console.log(typeof num2);
        // we use parsefloat in above operation as it takes input in form of string
        
        let result;

        switch (operation) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            console.log('Invalid operation');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        console.log(typeof result);
        rl.close();
      });
    });
  });
}

calculator();
