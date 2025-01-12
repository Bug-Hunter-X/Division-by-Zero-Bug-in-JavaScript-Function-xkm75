# Division by Zero Bug in JavaScript Function

This repository demonstrates a common bug in JavaScript functions involving division: incorrect handling of zero values.

## Bug Description
The function `foo` attempts to divide `a` by `b`. However, it incorrectly handles the case where either `a` or `b` is zero, always returning 0 instead of correctly handling division by zero or division of zero.  This can lead to unexpected behavior and incorrect results.

## Bug Solution
The corrected function in `bugSolution.js` properly handles cases where `a` or `b` is zero, returning `Infinity`, `-Infinity`, or `NaN` as appropriate.