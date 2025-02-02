function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Arguments cannot be null or undefined');
  }
  // ... rest of the function
}