{
  // 큐
  // first in first out
  const solution = (n, k) => {
    const queue = [...Array(n)].map((_, idx) => idx + 1); // 철진님 map 아이디어 참고
    let answer = 0;
    while (queue.length) {
      for (let i = 1; i < k; i++) queue.push(queue.shift());
      queue.shift();
      if (queue.length === 1) answer = queue.shift();
    }
    return answer;
  };

  const n = 8;
  const k = 3;

  solution(n, k);
}
