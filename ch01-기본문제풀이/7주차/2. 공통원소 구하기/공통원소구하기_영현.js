// 공통 원소 구하기

// 답안

const solution = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
solution(arr1, arr2);

// 두번째 답안

const solution = (arr1, arr2) => {
  return arr1.filter((el) => arr2.includes(el)).sort((a, b) => a - b);
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
solution(arr1, arr2);

// 선생님 답안

const solution = (arr1, arr2) => {
  let answer = [];
  arr1.sort((a, b) => a - b); // 오름차순으로 변경
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++; // 둘 다 증가시켜줘야 함
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
solution(arr1, arr2);
