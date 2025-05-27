function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    const previous = 0;
    const current = 1;
    let next = 0;

    for (let i = 2; i <= n; i++) {
      next = current + previous;
      previous = current;
      current = next;
    }

    return next;
  }
}

console.log(fibonacci(10)); // Output: 55
