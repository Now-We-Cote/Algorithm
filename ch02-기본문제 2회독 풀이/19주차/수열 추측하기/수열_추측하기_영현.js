// 수들의 조합

// 풀이
const solution = (n, k, arr, m) => {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0); //체크배열

  const DFS = (L, s, sum) => {
    if (L === k && sum % m === 0) {
      answer++;
    } else {
      for (let i = s; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, i + 1, sum + arr[i]);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0, 0, 0);

  return answer;
};

const arr = [2, 4, 5, 8, 12];

solution(5, 3, arr, 6);
