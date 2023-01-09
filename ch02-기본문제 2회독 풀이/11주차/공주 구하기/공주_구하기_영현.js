// 공주 구하기

// 답안
const solution = (N, K) => {
  const queue = Array(N)
    .fill()
    .map((item, idx) => idx + 1);

  let count = 1; // K번째 왕자 빼는 숫자

  while (queue.length > 1) {
    if (count === K) {
      queue.shift();
      count = 1;
    } else {
      queue.push(queue.shift());
      count++;
    }
  }
  return queue;
};
solution(8, 3);
