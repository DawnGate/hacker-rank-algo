function highestValuePalindrome(s, n, k) {
  // Write your code here
  const mid = n >> 1;
  const pal = [];
  let minK = 0;
  for (let i = 0; i < mid; i++) {
    const left = s[i],
      right = s[n - 1 - i];
    const same = left === right;
    if (!same) {
      minK++;
    }
    pal.push([Math.max(left, right), same]);
  }

  if (minK > k) return -1;
  if (k >= n) return Array(n).fill(9).join("");

  let mVal = n % 2 === 1 ? s[mid] : "";

  let remainK = k - minK;

  for (let i = 0; i < mid; i++) {
    if (!remainK) break;
    if (pal[i][0] === 9) continue;
    if (!pal[i][1]) {
      remainK -= 1;
      pal[i] = [9, true];
      continue;
    }
    if (remainK >= 2) {
      remainK -= 2;
      pal[i] = [9, true];
      continue;
    }
  }

  if (remainK && mVal) {
    mVal = 9;
  }

  const left = pal.map((i) => i[0]);
  return left.join("") + mVal + left.reverse().join("");
}

// https://www.hackerrank.com/challenges/richie-rich/problem
