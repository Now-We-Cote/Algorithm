// 삽입정렬

// 답안
const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
  return arr;
};
const arr = [11, 7, 5, 6, 10, 9];
solution(arr);
