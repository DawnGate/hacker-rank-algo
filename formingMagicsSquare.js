function formingMagicSquare(s) {
  // Write your code here

  const magic = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ];

  const allMagics = [
    magic,
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
  ];

  // n * (n^2+1) /2 -> 15
  // all possible solutions for this 3x3 matrix
  const allMin = [];
  for (let k = 0; k < 8; k++) {
    let temp = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const val = Math.abs(s[i][j] - allMagics[k][i][j]);
        temp += val;
      }
    }
    allMin.push(temp);
  }
  return Math.min(...allMin);
}

console.log(
  formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);

// https://www.hackerrank.com/challenges/magic-square-forming
