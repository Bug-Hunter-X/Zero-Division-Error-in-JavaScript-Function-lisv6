# Zero Division Error in JavaScript Function

This repository demonstrates a common error in JavaScript: dividing by zero. The `myFunction` in `bug.js` attempts to divide two numbers.  However, it fails to handle cases where the second argument is 0, resulting in an error.

The solution, located in `bugSolution.js`, shows how to correctly handle such cases by adding a check for zero before the division. This prevents unexpected behavior and ensures a more robust function.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the error handling.
3. Run `bug.js` and provide 0 as the second argument to observe the error. 
4. Open `bugSolution.js` and observe the improved error handling. 
5. Run `bugSolution.js` and provide 0 as the second argument to see the correct behavior. 