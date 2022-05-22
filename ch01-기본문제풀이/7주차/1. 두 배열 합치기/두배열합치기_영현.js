// 두배열 합치기

// 답안

const solution = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
solution(arg1, arg2);

// 선생님 답안

const solution = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    // 둘 중에 하나가 거짓이 되면 while문 끝남
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr[p2++]);
    }
  }
  while (p1 < n) {
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }
};

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
solution(arr1, arr2);
