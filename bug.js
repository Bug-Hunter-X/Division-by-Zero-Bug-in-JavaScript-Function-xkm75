function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; // This line is incorrect for the case where only one of a or b is 0.
  }
  return a / b;
}