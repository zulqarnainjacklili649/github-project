function calculateGCD(a, b) {
  while(b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findCommonDivisors(a, b) {
  let commonDivisors = [];
  
  for(let i = 1; i <= Math.min(a, b); i++) {
    if(isPrime(i) && isPrime(a / i) && isPrime(b / i)) {
      commonDivisors.push(i);
    }
  }

  return commonDivisors;
}

function isPrime(num) {
  if(num === 0 || num === 1) return false;

  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }

  return true;
}
