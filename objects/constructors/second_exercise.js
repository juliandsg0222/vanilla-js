// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  this.read = function () {
    this.firstNumber = +prompt("Type the first number", 0);
    this.SecondNumber = +prompt("Type the second number", 0);
  };

  this.sum = function () {
    return this.firstNumber + this.SecondNumber;
  };

  this.mul = function () {
    return this.firstNumber * this.SecondNumber;
  };
}
