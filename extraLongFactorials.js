function extraLongFactorials(n) {
  let fac = BigInt(1);

  for (let i = 1; i < n + 1; i++) {
    fac *= BigInt(i);
  }
  console.log(fac.toString());
}

console.log(extraLongFactorials(25));

// https://www.hackerrank.com/challenges/extra-long-factorials/problem
