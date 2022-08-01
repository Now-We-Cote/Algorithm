// 중복순열 구하기

// 답안
const solution = (n, l) => {
  let answer = [];
  let checkArr = [];
  const DFS = (v) => {
    if (checkArr.length === l) {
      answer.push(checkArr);
      checkArr = [];
    }
    if (v > n) {
      return;
    } else {
      checkArr.push(v);
      DFS(v + 1);

      checkArr.push(v);
      DFS(v + 1);
    }
  };
  DFS(1);
  return answer;
};

solution(3, 2); // [ [ 1, 2 ], [ 3, 3 ],[ 2, 3 ], [ 3, 1 ], [ 2, 3 ], [ 3, 2 ], [ 3, 3 ]]
// 이렇게 하니까 정답인줄 알았는데 [1,1]이 없었음..선생님 강의 듣고 다시 풀어보기로....

// 선생님 답안
const solution = (n, l) => {
  let answer = [];
  let tmp = Array.from({ length: l }, () => 0);
  const DFS = (v) => {
    if (v === l) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[v] = i;
        DFS(v + 1);
      }
    }
  };
  DFS(0);
  return answer;
};

solution(3, 2);
