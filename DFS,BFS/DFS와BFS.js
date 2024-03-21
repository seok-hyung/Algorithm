// 백준
// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

const DFS = (graph, startNode) => {
  const visited = []; // 탐색 마친 노드
  const needVisit = []; // 탐색해야할 노드

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift 활용
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const BFS = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};
