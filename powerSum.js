function recursive(sum, curVal, N) {
  if (sum === 0) return 1;

  if (sum < 0) return 0;

  if (Math.pow(curVal, N) > sum) return 0;

  return (
    recursive(sum - Math.pow(curVal, N), curVal + 1, N) +
    recursive(sum, curVal + 1, N)
  );
}

function powerSum(X, N) {
  // Write your code here

  return recursive(X, 1, N);
}

console.log(powerSum(100, 2));

// https://www.hackerrank.com/challenges/the-power-sum/problem
