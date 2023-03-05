// 합이 같은 부분집합

// 풀이
const solution = (arr) => {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b, 0); // total값
  let n = arr.length;

  const DFS = (L, sum) => {
    // 배열 끝까지 돌았기 때문에 부분집합이 완성된 것
    if (L === n) {
      if (total - sum === sum) answer = "YES";
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

const arr = [1, 3, 5, 6, 7, 10];
solution(arr);
