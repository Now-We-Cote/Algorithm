// 회의실 배정

// 답안
const solution = (arr) => {
  let answer = 0;
  let endTime = 0;
  arr.sort((a, b) => {
    return a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0];
  }); // 끝나는 시간 순대로 정렬

  for (i = 0; i < arr.length; i++) {
    if (endTime <= arr[i][0]) {
      // 끝나는 시간이 시작하는 시간보다 작으면 회의시작
      endTime = arr[i][1]; // 회의 끝나는 시간을 업데이트
      answer++; // 회의 숫자 세기
    }
  }
  return answer;
};
const arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
solution(arr);
