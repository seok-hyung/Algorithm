const visited = Array(6).fill(false);
const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];

// 재귀를 이용한 dfs
function dfs(graph, v) {
  visited[v] = true;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph[v]) {
    if (visited[node] === false) {
      dfs(graph, node);
    }
  }
}

dfs(graph, 0);

// 스택을 이용한 dfs
function dfs2(graph, startNode) {
  let visited = [];
  let stack = [startNode];

  while (stack.length !== 0) {
    let node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      stack.push(...graph[node]);
    }
  }
  return visited;
}

// console.log(dfs2(graph, 0));

// stack = [0]
// node = 0
// visited = [0]
// stack = [1,2,4]

// node = 4
// visited = [0,4]
// stack = [1,2,4,0,3]

// node = 3
// visited = [0,4,3]
// stack = [1,2,4,0]

// node = 0
// visited = [0,4,3]
// stack = [1,2,4]

// node = 4
// visited = [0,4,3]
// stack = [1,2]

// node = 2
// visited = [0,4,3,2]
// stack = [1,0,5]

// node = 5
// visited = [0,4,3,2,5]
// stack = [1,0,,1,2]

// node = 2
// visited = [0,4,3,2,5]
// stack = [1,0,1]

// node = 1
// visited = [0,4,3,2,5,1]
// stack = [1,0,1]

// node = 1
// stack = [1,0]

// node = 0
// stack = [1]

// node = 1
// stack = []
