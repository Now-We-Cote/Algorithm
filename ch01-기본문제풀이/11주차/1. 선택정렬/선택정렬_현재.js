{
  const solution = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        // i번째 이후로 있는 것 중 i보다 작은거 확인
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
  };

  const arr = [13, 5, 11, 7, 23, 15];
  solution(arr);
}
