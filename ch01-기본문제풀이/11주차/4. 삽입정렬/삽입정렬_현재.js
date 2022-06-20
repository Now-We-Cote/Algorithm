const solution = (arr) => {
  let key, i, j;
  for (i = 1; i < arr.length; i++) {
    key = arr[i]; // 삽입될 숫자
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      // 역순으로 조사한다
      // j값은 음수가 아니어야 되고, key 값보다 정렬된 배열에 있는 값이 크면 j번째를 j+1번째로 이동
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};

const numArr = [11, 7, 5, 6, 10, 9];

solution(numArr);
