// 두배열 합치기

// 답안 - for문으로 시도햇으나 실패ㅠㅠ

const solution = (a, b) => {
  let p1 = 0;
  let p2 = 0;
  const n = a.length;
  const m = b.length;
  const arr = [];

  for (let i = 0; i < Math.max(n, m); i++) {
    if (a[p1] <= b[p2]) {
      arr.push(a[p1]);
      p1++;
    } else {
      arr.push(b[p2]);
      p2++;
    }
  }
  return arr;
};

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];

solution(a, b);

// 선생님 답안

const solution = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
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
