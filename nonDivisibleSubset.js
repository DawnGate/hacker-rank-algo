function nonDivisibleSubset(k, s) {
  const arr = Array(k).fill(0);

  for (const num of s) {
    arr[num % k] += 1;
  }

  let res = 0;

  for (let i = 0; i < Math.ceil((k + 1) / 2); i++) {
    if (i === 0 || i === k - i) {
      res += Math.min(arr[i], 1);
    } else {
      res += Math.max(arr[i], arr[k - i]);
    }
  }
  return res;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
