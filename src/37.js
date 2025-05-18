function multiply(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error("Both numbers must be integers.");
  }
  
  let result = x;
  while (y > 0) {
    if (y % 2 === 1) {
      result *= x;
    }
    x *= x;
    y = Math.floor(y / 2);
  }
  return result;
}
