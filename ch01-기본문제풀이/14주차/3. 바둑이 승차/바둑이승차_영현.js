// 바둑이 승차

// 답안

const totalCalc = (arr) => {
  return arr.reduce((a, c) => a + c);
};

const solution = (n, arr) => {
  let checkArr = [];
  let answer = 0;
  const DFS = (v) => {
    if (totalCalc(checkArr) > n) return; // 여기서 reduce 할 때 빈 배열로 타입에러 발생
    if (v === arr.length) {
      checkArr.length !== 0 && (answer = Math.max(answer, totalCalc(checkArr)));
    } else {
      checkArr.push(arr[v]);
      DFS(v + 1);
      checkArr.pop();
      DFS(v + 1);
    }
  };
  DFS(0);
  return answer;
};

const arr = [81, 58, 42, 33, 61];
solution(259, arr);

// 선생님 답안

const solution = (c, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  const DFS = (v, sum) => {
    if (sum > c) return; // sum이 제한된 c보다 크면 return
    if (v === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(v + 1, sum + arr[v]);
      DFS(v + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

const arr = [81, 58, 42, 33, 61];
solution(259, arr);
