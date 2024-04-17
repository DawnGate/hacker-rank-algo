function candies(n, arr) {
  // Write your code here

  const temp = Array(n).fill(1);

  // forward, if right > left
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      temp[i] = temp[i - 1] + 1;
    }
  }

  // backward, if left < right and count(left) <= count(right)
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1] && temp[i] >= temp[i - 1]) {
      temp[i - 1] = temp[i] + 1;
    }
  }

  return temp.reduce((sum, a) => sum + a, 0);
}
console.log(candies(7, [3, 1, 2, 2, 3, 2, 1]));

// https://www.hackerrank.com/challenges/candies/problem
