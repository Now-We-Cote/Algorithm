// 이진트리 넓이우선탐색

// 문제 - 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.

// 출력 - 1 2 3 4 5 6 7

{
  const solution = () => {
    let result = [];
    let queue = [];
    queue.push(1);
    while (queue.length) {
      let num = queue.shift();
      result.push(num);
      for (let nextNum of [num * 2, num * 2 + 1]) {
        if (nextNum > 7) {
          continue;
        }
        queue.push(nextNum);
      }
    }

    return result;
  };
}
