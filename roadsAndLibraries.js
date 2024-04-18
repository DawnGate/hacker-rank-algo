const constructGraph = (cities, n) => {
  let tempGraph = {};

  for (let i = 1; i < n + 1; i++) {
    tempGraph[i] = [];
  }

  for (const city of cities) {
    const [firstCity, secondCity] = city;
    tempGraph[firstCity].push(secondCity);
    tempGraph[secondCity].push(firstCity);
  }
  return tempGraph;
};

const dfs = (visited, graph, node) => {
  visited[node] = 1;

  const neighbors = graph[node];
  const group = [node];
  for (const city of neighbors) {
    if (!visited[city]) {
      group.push(...dfs(visited, graph, city));
    }
  }

  return group;
};

function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
    return n * c_lib;
  }

  // using object for check visited, quickly than array
  const visited = {};
  const graph = constructGraph(cities, n);

  let cost = 0;

  for (let city = 1; city < n + 1; city++) {
    if (visited[city]) continue;

    const cityGraph = dfs(visited, graph, city);

    cost += c_lib;
    cost += (cityGraph.length - 1) * c_road;
  }
  return cost;
}

console.log(
  roadsAndLibraries(5, 6, 1, [
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);

// https://www.hackerrank.com/challenges/torque-and-development/problem
