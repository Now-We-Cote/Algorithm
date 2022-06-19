// 선택정렬

// 답안

const solution = (arr) => {
  for (i = 0; i < arr.lenght; i++) {
    // i는 기준으로 삼는다

    let idx = i; // i를 기준으로 잡고 제일 작은 인덱스를 저장

    for (j = i + 1; j < arr.lenght; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
        // 제일 작은 인덱스 값을 idx변수에 저장
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
};

const arr = [13, 5, 11, 7, 23, 15];
solution(arr);
