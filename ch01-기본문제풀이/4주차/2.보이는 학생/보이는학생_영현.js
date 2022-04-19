// 보이는 학생

// 답안
function solution(arr) {
  // 맨 앞 학생은 보이니까 1부터 시작
  let answer = 1;
  // 제일 큰 학생의 기준을 처음에는 0번 idx로 잡음
  let tall = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (tall < arr[i]) {
      // 크다면 그 값을 제일 큰 학생으로 바꿔줌
      tall = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
solution(arr);
