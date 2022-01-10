// Write a loop which window.prompts for a number greater than 100.
// If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters
// a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers.
// There’s no need to implement a special handling for a non-numeric input in this task.

let i = 0;

do {
  i = window.prompt("Write a number greater than 100 please");
  if (i == null || i == "") {
    break;
  }
} while (i <= 100);
