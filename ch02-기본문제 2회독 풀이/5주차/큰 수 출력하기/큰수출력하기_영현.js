// 큰 수 출력하기

// 답안
function solution(arr) {
  let answer = [];
  answer.push(arr[0]); // 첫번째 숫자는 무조건 출력
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
solution(arr); //[ 7, 9, 6, 12 ]
