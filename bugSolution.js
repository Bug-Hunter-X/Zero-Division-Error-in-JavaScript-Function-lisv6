function myFunction(a, b) {
  if (b === 0) { 
    return Infinity; //Or throw an error: throw new Error('Cannot divide by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
}