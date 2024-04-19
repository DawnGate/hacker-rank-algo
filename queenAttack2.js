function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  const canAttacks = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  const obj = {};

  for (const obstacle of obstacles) {
    obj[obstacle.map((o) => o - 1).join(",")] = 1;
  }

  let count = 0;

  for (const canAttack of canAttacks) {
    let newRq = r_q - 1;
    let newCq = c_q - 1;

    while (true) {
      newRq = newRq + canAttack[0];
      newCq = newCq + canAttack[1];

      if (!(newRq >= 0 && newRq < n && newCq >= 0 && newCq < n)) {
        break;
      }

      if (obj[`${newRq},${newCq}`]) break;

      count++;
    }
  }

  return count;
}

console.log(queensAttack(100000, 0, 4187, 5068, []));

// https://www.hackerrank.com/challenges/queens-attack-2/problem
