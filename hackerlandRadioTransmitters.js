function hackerlandRadioTransmitters(x, k) {
  const s = new Set(x);
  const a = [...s].sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let mid = 0;
  const m = a.length;
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      count++;
    } else if (a[i] - a[left] > 2 * k || a[i] - a[mid] > k) {
      count++;
      left = i;
      mid = i;
    } else if (a[i] - a[left] <= k) {
      mid++;
    }
  }

  return count;
}

console.log(hackerlandRadioTransmitters([1, 2, 3, 4, 5], 2));

// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem
