function countSort(arr) {
  // Write your code here
  const m = arr.length;
  const mid = m >> 1;

  const nArr = Array(100).fill("");

  for (let i = 0; i < m; i++) {
    let temp = arr[i][1];
    if (i < mid) {
      temp = "-";
    }

    nArr[arr[i][0]] += `${temp} `;
  }

  return nArr.join("").trim();
}

console.log(
  countSort([
    [0, "a"],
    [1, "b"],
    [0, "c"],
    [1, "d"],
  ])
);

// https://www.hackerrank.com/challenges/countingsort4/problem
