// 선택정렬

// 답안
const solution = (arr) => {
  const answer = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let idx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }

    answer[i] = arr[idx];
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
};
const arr = [13, 5, 11, 7, 23, 15];
solution(arr);
