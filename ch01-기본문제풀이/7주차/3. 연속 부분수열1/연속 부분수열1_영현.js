// 연속 부분수열1

// 답안

const solution = (a, arr) => {
  let answer = 0;
  let plusNum = 0;
  for (p1 = 0; p1 < arr.length; p1++) {
    plusNum = arr[p1];
    console.log(plusNum);
    for (p2 = p1 + 1; p2 < arr.length; p2++) {
      plusNum += arr[p2];
      if (plusNum === a) {
        answer++;
      }
    }
  }

  return answer;
};
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
solution(6, arr);

// 선생님 답안

const solution = (n, m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (rt = 0; rt < n; rt++) {
    sum += arr[rt]; // rt값을 하나씩 더함
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++]; // 새로운 값 lt를 빼면서
      // 뺀 값 확인
      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
};
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
solution(8, 6, arr);
