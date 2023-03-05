// 바둑이 승차

// 풀이
const solution = (t, arr) => {
  let answer = 0;
  let n = arr.length;

  const DFS = (L, sum) => {
    // 배열 끝까지 돌았기 때문에 부분집합이 완성된 것
    if (L === n) {
      if ((t > sum) & (sum > answer)) answer = sum;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

const arr = [81, 58, 42, 33, 61];
solution(259, arr);
