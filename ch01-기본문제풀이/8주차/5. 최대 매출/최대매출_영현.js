// 최대 매출

// 답안

const solution = (n, m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (rt = 0; rt < n; rt++) {
    sum += arr[rt];
    // rt-lt가 m인 경우 4개의 배열의 값들이 더해질 경우
    while (rt - lt === m) {
      sum -= arr[lt++]; // lt를 이용해 앞에서부터 값을 하나씩 빼준다 -> 4번째 Index에서 부터 배열 3개의 값이 완성된다.
    }
    answer = answer > sum ? answer : sum;
  }
  return answer;
};
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
solution(10, 3, arr);
