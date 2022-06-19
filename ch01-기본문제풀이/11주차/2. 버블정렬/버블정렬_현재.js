{
  const solution = (arr) => {
    const len = arr.length - 1; // 굳이 마지막 바퀴는 안돌아도 된다
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        // 이미 앞단에서 i만큼 정리가 다 되어있으니까 i만큼 덜 탐색한다
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };

  const arr = [13, 5, 11, 7, 23, 15];
  solution(arr);
}
