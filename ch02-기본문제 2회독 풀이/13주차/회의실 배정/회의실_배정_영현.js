// 회의실 배정

// 답안
const solution = (arr) => {
  // 끝나는 시간으로 정렬
  const newArr = arr.sort((a, b) => {
    return a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0];
  });

  let endTime = newArr[0][1];
  let answerCount = 1;

  for (let i = 1; i < newArr.length; i++) {
    if (endTime <= newArr[i][0]) {
      endTime = newArr[i][1];
      answerCount++;
    }
  }

  return answerCount;
};

const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

solution(arr);
