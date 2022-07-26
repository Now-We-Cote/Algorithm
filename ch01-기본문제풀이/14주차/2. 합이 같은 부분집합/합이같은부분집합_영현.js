// 합이 같은 부분집합

// 답안

const totalCalc = (arr) => {
  return arr.reduce((a, c) => a + c);
};

const solution = (arr) => {
  let checkArr = [];
  let answer = "NO";
  const DFS = (v) => {
    if (answer === "YES") return;
    if (v === arr.length) {
      if (
        checkArr.length !== 0 &&
        totalCalc(arr) - totalCalc(checkArr) === 16
      ) {
        answer = "YES";
      }
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

const arr = [1, 3, 5, 6, 7, 10];
solution(arr);
