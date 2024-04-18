function climbingLeaderboard(ranked, player) {
  // Write your code here
  let rankedObj = {};

  let lowestRank = 1;
  rankedObj[lowestRank] = ranked[0];
  for (let i = 0; i < ranked.length; i++) {
    if (ranked[i] < rankedObj[lowestRank]) {
      lowestRank++;
      rankedObj[lowestRank] = ranked[i];
    }
  }

  function recursive(score) {
    if (lowestRank === 0) {
      return 1;
    }
    if (score < rankedObj[lowestRank]) {
      return lowestRank + 1;
    }
    if (score === rankedObj[lowestRank]) {
      return lowestRank;
    }

    lowestRank--;

    return recursive(score);
  }

  const res = [];
  for (const score of player) {
    res.push(recursive(score));
  }

  return res;
}

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
