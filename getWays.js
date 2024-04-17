function getWays(n, c) {
  // Write your code here
  const a = c.filter((i) => i <= n).sort((a, b) => a - b);
  const m = a.length;
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  dp[0][0] = 1;

  // create dp -> Array from ( 0 -> coins length) ( 0 -> sum)
  // dp[0][0] = 1
  // dp[i][j] -> d[i-1][j] (ways not include i) + d[i][j - coins[i - 1]] (ways include i)

  for (let i = 1; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] += dp[i - 1][j];

      if (j - a[i - 1] >= 0) {
        dp[i][j] += dp[i][j - a[i - 1]];
      }
    }
  }
  return dp[m][n];

  // return bruteForce(a, n)
}

function bruteForce(n, c) {
  if (!c.length) return 0;
  if (n < 0) return 0;
  if (n == 0) return 1;

  const val = c[0];

  const include = dp(n - val, c);
  const notInclude = dp(n, c.slice(1));
  return include + notInclude;
}

console.log(getWays(3, [1, 2, 3]));

// https://www.hackerrank.com/challenges/coin-change/problem
