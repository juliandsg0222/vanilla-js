// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let firstAge = prompt("Write your age please");

if (!(firstAge >= 14 && firstAge <= 90)) {
  alert("Your age is out of range");
} else {
  alert("Your age is in the range");
}

let secondAge = prompt("Write your age please");

if (secondAge < 14 || secondAge > 90) {
  alert("Your age is out of range");
} else {
  alert("Your age is in the range");
}
