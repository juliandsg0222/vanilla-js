// The function sayHi uses an external variable name.
// When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
// Such situations are common both in browser and server-side development.
// A function may be scheduled to execute later than it is created,
// for instance after a user action or a network request.

// So, the question is: does it pick up the latest changes?

// The function uses the last assigned value to "name".
// The function is created but only get the value of "name"
// when is called, and "name" was assigned with new value
// before to call the function. So this will show "Hi, Pete"