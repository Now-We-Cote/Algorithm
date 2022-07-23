// 부분집합 구하기

// 답안
const solution = (n) => {
  let answer = [];
  const checkArr = new Array(n).fill(0);
  const DFS = (v) => {
    if (v > n) {
      const answerArr = checkArr.filter((x) => x !== 0);
      console.log(checkArr);
      if (answerArr.length > 0) answer.push(answerArr);
    } else {
      checkArr[v - 1] = v; // checkArr 배열에 인덱스 위치에 v 추가
      DFS(v + 1); // 이진트리에서 좌측 자식으로 이동
      checkArr[v - 1] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);
  return answer;
};

const num = 3;
solution(num);
