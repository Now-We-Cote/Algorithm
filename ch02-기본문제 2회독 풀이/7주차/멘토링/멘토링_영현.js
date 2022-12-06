// 멘토링

// 답안
const solution = (N, M, arr) => {
  let answer = 0;

  // mento 찾는 함수
  const findMento = (mento, mentee) => {
    for (let k = 0; k < M; k++) {
      if (arr[k].indexOf(mento) <= arr[k].indexOf(mentee)) return false;
    }
    return true;
  };

  // 설정된 mento(i) 돌리는 for문
  for (let i = 1; i <= N; i++) {
    // 설정된 mentee(j) 돌리는 for문
    for (let j = 1; j <= N; j++) {
      if (findMento(i, j)) {
        answer++;
      }
    }
  }

  return answer;
};

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

solution(4, 3, arr);
