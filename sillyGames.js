function primeNumbers(n) {
  // using sieve
  const arr = Array(n + 1).fill(true);
  for (let i = 2; i < n + 1; i++) {
    if (arr[i]) {
      let t = i * i;
      while (t <= n) {
        arr[t] = false;
        t += i;
      }
    }
  }

  return arr.filter((i) => i).length - 2;
}

function sillyGame(n) {
  // Write your code here
  if (n === 1) {
    return "Bob";
  }

  const primes = primeNumbers(n);

  if (primes % 2 === 0) {
    return "Bob";
  } else {
    return "Alice";
  }
}

console.log(sillyGame(5));
