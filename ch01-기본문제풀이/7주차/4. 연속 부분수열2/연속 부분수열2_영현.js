// 연속 부분수열2

// 답안

const solution = (n, m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (rt = 0; rt < n; rt++) {
    sum += arr[rt]; // rt값을 하나씩 더함
    // sum이 m보다 큰 경우
    while (sum > m) {
      sum -= arr[lt++]; // 새로운 값 lt를 빼면서
    }
    answer += rt - lt + 1; // 자신을 포함한 부분수열을 answer에 더함
  }
  return answer;
};
let arr = [1, 3, 1, 2, 3];
solution(5, 5, arr);
