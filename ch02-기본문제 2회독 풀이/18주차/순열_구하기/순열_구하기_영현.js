// 순열 구하기

// 풀이
const solution = (arr, m) => {
  const answer = [];
  const n = arr.length;
  let tmp = Array.from({ length: m }, () => 0);

  const hasNum = (num) => {
    return tmp.findIndex((e) => e === num) !== -1;
  };

  const DFS = (L) => {
    if (L === m) {
      if (hasNum(0)) return;
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (hasNum(arr[i])) {
          DFS(L + 1);
        } else {
          tmp[L] = arr[i];
          DFS(L + 1);
        }
      }
    }
  };
  DFS(0);
  return answer;
};
const arr = [3, 6, 9];
solution(arr, 2);
