// 프로그래머스 DFS/BFS LEVEL 2

function solution(maps) {
  let result = 0;
  const visited = Array(maps.length)
    .fill(0)
    .map(() => Array(maps[0].length).fill(0));
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const q = [];
  q.push([0, 0]);
  visited[0][0] = 1;

  while (q.length) {
    const [y, x] = q.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (
        ny < 0 ||
        nx < 0 ||
        ny >= maps.length ||
        nx >= maps[0].length ||
        maps[ny][nx] === 0
      )
        continue;
      if (visited[ny][nx]) continue;
      q.push([ny, nx]);
      visited[ny][nx] = visited[y][x] + 1;
    }
  }

  result = visited[maps.length - 1][maps[0].length - 1];

  if (!result) return -1;
  return result;
}

function solution2(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  var queue = [[0, 0]];

  var visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false),
  );

  var result = 0;

  while (queue.length) {
    result++;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var point = queue.shift();
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1) queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1) queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}
