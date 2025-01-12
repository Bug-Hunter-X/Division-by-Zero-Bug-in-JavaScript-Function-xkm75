function foo(a, b) {
  if (b === 0) {
    if (a === 0) return NaN; // division of 0/0 is NaN
    else if (a > 0) return Infinity; // division of positive/0 is Infinity
    else return -Infinity; // division of negative/0 is -Infinity
  }
  return a / b;
}