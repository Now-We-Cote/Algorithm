// 버블정렬

// 답안

const solution = (arr) => {
  let answer = arr;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length - i; j++) {
      // j는 배열 길이의 - i로 해야 맨 뒤의 가장 큰 수를 두고 계속 찾을 수 있음
      if (arr[j] > arr[j + 1]) {
        // 앞에 숫자가 뒤에 숫자보다 크면 위치를 바꿔줌
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
};

const arr = [13, 5, 11, 7, 23, 15];
solution(arr);
